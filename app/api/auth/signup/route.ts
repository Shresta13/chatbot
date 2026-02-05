import { NextResponse } from "next/server"
import { signupSchema } from "@/lib/zod"
import { db, initDB } from "@/lib/db"
import bcrypt from "bcryptjs"
import { nanoid } from "nanoid"

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = signupSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(parsed.error.flatten(), { status: 400 })
  }

  await initDB()

  const { name, email, password } = parsed.data

  const exists = db.data!.users.find((u) => u.email === email)
  if (exists) {
    return NextResponse.json(
      { error: "Email already registered" },
      { status: 400 }
    )
  }

  const hashed = await bcrypt.hash(password, 10)

  const userId = nanoid()

  db.data!.users.push({
    id: userId,
    name,
    email,
    password: hashed,
    createdAt: new Date().toISOString(),
  })

  await db.write()

  const res = NextResponse.json({ success: true, token: userId })
  res.cookies.set("auth", userId, {
    httpOnly: true,
    path: "/",
  })

  return res
}

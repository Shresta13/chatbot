import { NextResponse } from "next/server"
import { loginSchema } from "@/lib/zod"
import { db, initDB } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = loginSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(parsed.error.flatten(), { status: 400 })
  }

  await initDB()

  const user = db.data!.users.find(
    (u) => u.email === parsed.data.email
  )

  if (!user) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    )
  }

  const valid = await bcrypt.compare(
    parsed.data.password,
    user.password
  )

  if (!valid) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    )
  }

  const res = NextResponse.json({ success: true, token: user.id })
  res.cookies.set("auth", user.id, {
    httpOnly: true,
    path: "/",
  })

  return res
}

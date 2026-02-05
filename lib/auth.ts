import { cookies } from "next/headers"
import { db, initDB, User } from "@/lib/db"

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const userId = cookieStore.get("auth")?.value
  if (!userId) return null

  await initDB()
  return db.data!.users.find((u: User) => u.id === userId) ?? null
}
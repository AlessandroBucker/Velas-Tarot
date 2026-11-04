import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") return NextResponse.json({ error: "Indisponível" }, { status: 404 });
  const { email, password } = await request.json();
  if (email !== process.env.LOCAL_ADMIN_EMAIL || password !== process.env.LOCAL_ADMIN_PASSWORD) return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  const response = NextResponse.json({ ok: true });
  response.cookies.set("lahris_local_admin", "1", { httpOnly: true, sameSite: "lax", path: "/", secure: false, maxAge: 60 * 60 * 12 });
  return response;
}

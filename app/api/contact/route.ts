import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // This handler is intentionally simple for a starter.
  // In production, send email via Resend/SMTP or store to DB.
  const form = await req.formData();
  const payload = {
    name: String(form.get("name") || ""),
    phone: String(form.get("phone") || ""),
    message: String(form.get("message") || ""),
    receivedAt: new Date().toISOString(),
  };

  console.log("[AlphaBull contact]", payload);

  return NextResponse.json({
    ok: true,
    message: "Thanks! We received your message. Our team will contact you soon.",
    payload,
  });
}

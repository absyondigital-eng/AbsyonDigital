import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "info@absyondigital.com";
const PROJECT_TYPES = new Set([
  "Web design & development",
  "App / software development",
  "Branding & graphic design",
  "AI automation solutions",
  "AI chat agents",
  "AI voice agents",
  "Menu design",
  "Not sure yet",
]);
const BUDGET_RANGES = new Set([
  "Under £2k",
  "£2k - £5k",
  "£5k - £15k",
  "£15k+",
  "Not sure yet",
]);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const projectType = String(body.projectType ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (projectType && !PROJECT_TYPES.has(projectType)) {
    return NextResponse.json({ error: "Invalid project type." }, { status: 400 });
  }
  if (budget && !BUDGET_RANGES.has(budget)) {
    return NextResponse.json({ error: "Invalid budget range." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json(
      { error: "The contact form isn't configured yet. Email info@absyondigital.com directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Absyon Digital <onboarding@resend.dev>";

  const escape = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>Email:</strong> ${escape(email)}</p>
        <p><strong>Project type:</strong> ${escape(projectType || "Not specified")}</p>
        <p><strong>Budget range:</strong> ${escape(budget || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <p>${escape(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Message could not be sent. Try again shortly." }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Message could not be sent. Try again shortly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

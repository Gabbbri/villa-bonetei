import { env } from "cloudflare:workers";

type Inquiry = {
  arrival?: string;
  departure?: string;
  guests?: number;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export async function POST(request: Request) {
  let body: Inquiry;
  try {
    body = await request.json() as Inquiry;
  } catch {
    return Response.json({ error: "Richiesta non valida" }, { status: 400 });
  }

  const arrival = String(body.arrival || "");
  const departure = String(body.departure || "");
  const guests = Number(body.guests);
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();

  const invalid = !datePattern.test(arrival) || !datePattern.test(departure) ||
    departure <= arrival || !Number.isInteger(guests) || guests < 1 || guests > 8 ||
    name.length < 2 || name.length > 100 || !email.includes("@") || email.length > 160 ||
    phone.length > 50 || message.length > 1000;

  if (invalid) {
    return Response.json({ error: "Controlla date e contatti" }, { status: 422 });
  }

  if (!env.DB) {
    return Response.json({ error: "Le richieste sono temporaneamente indisponibili" }, { status: 503 });
  }

  const id = crypto.randomUUID();
  await env.DB.prepare(
    `INSERT INTO stay_inquiries
      (id, arrival, departure, guests, name, email, phone, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new', ?)`
  ).bind(
    id, arrival, departure, guests, name, email, phone, message,
    Math.floor(Date.now() / 1000)
  ).run();

  return Response.json({ ok: true, id }, { status: 201 });
}

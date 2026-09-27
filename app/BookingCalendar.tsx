"use client";

import { useEffect, useMemo, useState } from "react";
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { enUS, it } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Check, ChevronRight, LoaderCircle, Minus, Plus } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const iso = (date?: Date) => date ? format(date, "yyyy-MM-dd") : "";

const words = {
  it: {
    toolTitle: "Prepara una richiesta di soggiorno", toolDescription: "Imposta arrivo, partenza e numero di ospiti nel calendario visibile senza inviare la richiesta.", arrivalDescription: "Data di arrivo YYYY-MM-DD", departureDescription: "Data di partenza YYYY-MM-DD", invalid: "Date o numero di ospiti non validi.",
    selectBoth: "Seleziona arrivo e partenza.", sendError: "Non siamo riusciti a inviare la richiesta. Riprova.", successLabel: "RICHIESTA INVIATA", thanks: "Grazie per averci scritto.", successText: "Abbiamo registrato la tua richiesta di soggiorno.", newRequest: "Nuova richiesta",
    arrivalAria: "Scegli la data di arrivo", departureAria: "Scegli la data di partenza", arrival: "ARRIVO", departure: "PARTENZA", chooseDate: "Scegli una data", guests: "OSPITI", close: "Chiudi", complete: "Completa la richiesta", chooseDates: "Scegli le date",
    calendarNote: "Seleziona arrivo e partenza. Verificheremo la disponibilità per le date indicate.", formIntro: "Raccontaci come contattarti e prepareremo una proposta per il tuo soggiorno.", night: "notte", nights: "notti", decrease: "Riduci ospiti", increase: "Aumenta ospiti",
    name: "Nome e cognome", email: "Indirizzo email", phone: "Recapito telefonico", optional: "facoltativo", message: "La tua richiesta", messageHint: "Se hai preferenze per un appartamento o esigenze particolari, scrivile qui.", send: "Richiedi una proposta", privacy: "La richiesta non comporta alcun pagamento né conferma automatica della disponibilità.",
  },
  en: {
    toolTitle: "Prepare a stay enquiry", toolDescription: "Set arrival, departure and guest count in the visible calendar without sending the enquiry.", arrivalDescription: "Arrival date YYYY-MM-DD", departureDescription: "Departure date YYYY-MM-DD", invalid: "Invalid dates or guest count.",
    selectBoth: "Select your arrival and departure dates.", sendError: "We could not send your enquiry. Please try again.", successLabel: "ENQUIRY SENT", thanks: "Thank you for getting in touch.", successText: "We have received your stay enquiry.", newRequest: "New enquiry",
    arrivalAria: "Choose arrival date", departureAria: "Choose departure date", arrival: "ARRIVAL", departure: "DEPARTURE", chooseDate: "Choose a date", guests: "GUESTS", close: "Close", complete: "Complete enquiry", chooseDates: "Choose dates",
    calendarNote: "Select your arrival and departure dates. We will check availability for your stay.", formIntro: "Leave your contact details and we will prepare an offer for your stay.", night: "night", nights: "nights", decrease: "Remove a guest", increase: "Add a guest",
    name: "Full name", email: "Email address", phone: "Phone number", optional: "optional", message: "Your enquiry", messageHint: "Let us know if you prefer a particular apartment or have any special requests.", send: "Request an offer", privacy: "Sending an enquiry does not involve payment or automatically confirm availability.",
  },
} as const;

export default function BookingCalendar({ language = "it" }: { language?: "it" | "en" }) {
  const w = words[language];
  const locale = language === "it" ? it : enUS;
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [expanded, setExpanded] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const nights = useMemo(() => {
    if (!range?.from || !range?.to) return 0;
    return Math.max(1, Math.round((range.to.getTime() - range.from.getTime()) / 86400000));
  }, [range]);

  useEffect(() => {
    const context = typeof document === "undefined" ? undefined : (document as Document & {
      modelContext?: {
        registerTool: (tool: Record<string, unknown>, options?: { signal?: AbortSignal }) => unknown;
      };
    }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({
      name: "stage_stay_request",
      title: w.toolTitle,
      description: w.toolDescription,
      inputSchema: {
        type: "object",
        properties: {
          arrival: { type: "string", description: w.arrivalDescription },
          departure: { type: "string", description: w.departureDescription },
          guests: { type: "integer", minimum: 1, maximum: 8 },
        },
        required: ["arrival", "departure", "guests"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input: unknown) {
        const value = input as { arrival?: string; departure?: string; guests?: number };
        const from = value.arrival ? new Date(value.arrival + "T12:00:00") : undefined;
        const to = value.departure ? new Date(value.departure + "T12:00:00") : undefined;
        if (!from || !to || to <= from || !Number.isInteger(value.guests) || Number(value.guests) < 1 || Number(value.guests) > 8) {
          throw new Error(w.invalid);
        }
        setRange({ from, to });
        setGuests(Number(value.guests));
        setExpanded(true);
        setShowCalendar(false);
        document.getElementById("richiesta")?.scrollIntoView({ behavior: "smooth" });
        return { staged: true, arrival: value.arrival, departure: value.departure, guests: value.guests };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, [w]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!range?.from || !range?.to) {
      setError(w.selectBoth);
      return;
    }
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          arrival: iso(range.from),
          departure: iso(range.to),
          guests,
          name: String(form.get("name") || ""),
          email: String(form.get("email") || ""),
          phone: String(form.get("phone") || ""),
          message: String(form.get("message") || ""),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setError(w.sendError);
    }
  }

  if (status === "success") {
    return (
      <div className="booking-card success-card" role="status">
        <span><Check /></span>
        <p className="overline dark">{w.successLabel}</p>
        <h3>{w.thanks}</h3>
        <p>{w.successText}</p>
        <button type="button" onClick={() => setStatus("idle")}>{w.newRequest}</button>
      </div>
    );
  }

  return (
    <div className="booking-card">
      <div className="booking-top">
        <button className="date-trigger" type="button" onClick={() => { setExpanded(true); setShowCalendar(true); }} aria-label={w.arrivalAria}>
          <small>{w.arrival}</small><strong>{range?.from ? format(range.from, "dd MMM yyyy", { locale }) : w.chooseDate}</strong>
        </button>
        <button className="date-trigger" type="button" onClick={() => { setExpanded(true); setShowCalendar(true); }} aria-label={w.departureAria}>
          <small>{w.departure}</small><strong>{range?.to ? format(range.to, "dd MMM yyyy", { locale }) : w.chooseDate}</strong>
        </button>
        <div className="guest-summary"><small>{w.guests}</small><strong>{guests}</strong></div>
        <button className="calendar-toggle" type="button" aria-expanded={expanded} onClick={() => { setExpanded(v => !v); setShowCalendar(!expanded && (!range?.from || !range?.to)); }}>{expanded ? w.close : range?.from && range?.to ? w.complete : w.chooseDates}</button>
      </div>
      {expanded && <div className="booking-expand">{showCalendar && <div className="calendar-side">
        <Calendar
          mode="range"
          selected={range}
          onSelect={(next) => { setRange(next); if (next?.from && next?.to && next.to > next.from) setShowCalendar(false); }}
          numberOfMonths={1}
          locale={locale}
          disabled={{ before: new Date() }}
          className="bonetei-calendar"
        />
        <p className="calendar-note">{w.calendarNote}</p>
      </div>}

      {!showCalendar && range?.from && range?.to && <form onSubmit={submit}>
        <p className="form-intro">{w.formIntro}</p>
        <div className="guest-stepper">
          <span><small>{w.guests}{nights > 0 ? ` · ${nights} ${nights === 1 ? w.night : w.nights}` : ""}</small><strong>{guests}</strong></span>
          <div>
            <button type="button" aria-label={w.decrease} onClick={() => setGuests((v) => Math.max(1, v - 1))}><Minus /></button>
            <button type="button" aria-label={w.increase} onClick={() => setGuests((v) => Math.min(8, v + 1))}><Plus /></button>
          </div>
        </div>

        <label>{w.name}<input name="name" required autoComplete="name" placeholder="" /></label>
        <div className="two-fields">
          <label>{w.email}<input name="email" type="email" required autoComplete="email" placeholder="" /></label>
          <label>{w.phone} <span className="optional">({w.optional})</span><input name="phone" autoComplete="tel" placeholder="" /></label>
        </div>
        <label>{w.message} <span className="optional">({w.optional})</span><textarea name="message" rows={3} placeholder={w.messageHint} /></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="submit-booking" type="submit" disabled={status === "sending"}>
          {status === "sending" ? <LoaderCircle className="spin" /> : <>{w.send} <ArrowUpRightIcon /></>}
        </button>
        <p className="privacy-note">{w.privacy}</p>
      </form>}</div>}
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ChevronRight aria-hidden="true" />;
}

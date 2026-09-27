import type { Metadata } from "next";
import { HomePage } from "../page";
import LanguageMarker from "../LanguageMarker";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Villa Bonetei | Apartments in Dimaro, Val di Sole",
  description: "Explore two distinctive apartments in Dimaro and a panoramic sauna open to guests and visitors alike.",
  alternates: { canonical: "/en", languages: { it: "/", en: "/en" } },
};

export default function EnglishHome() {
  return <><LanguageMarker /><HomePage language="en" /></>;
}

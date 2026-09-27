import { ArrowDown, ArrowRight, ArrowUpRight, Baby, BedDouble, Bike, Car, MapPin, Maximize2, PawPrint, Phone, Snowflake, Users, Wifi } from "lucide-react";
import BookingCalendar from "./BookingCalendar";

export const dynamic = "force-static";

const photos = {
  exterior: "https://resc.deskline.net/images/TRN/1/5b37f272-2bcc-4e46-8067-1f737f4d31f6/99/image.jpeg",
  bedroom: "https://resc.deskline.net/images/TRN/1/d752ca4b-01a7-48fe-8087-5713a6df9348/99/image.jpeg",
  kitchen: "https://resc.deskline.net/images/TRN/1/71dff836-2954-4fc1-ac19-e5e831b5ee58/99/image.jpg",
  living: "https://resc.deskline.net/images/TRN/1/43b52218-5b49-4042-89f3-c1bdc71b5182/99/image.jpg",
  view: "https://resc.deskline.net/images/TRN/1/6ebdccba-b1d4-40c6-95d9-97305901002a/99/image.jpeg",
  balcony: "https://resc.deskline.net/images/TRN/1/f344cded-6de2-4b0a-a269-5e68c20949fa/99/image.jpeg",
  secondBedroom: "https://resc.deskline.net/images/TRN/1/1032fb1c-513d-4005-ac59-e19154730d95/99/image.jpg",
  panorama: "https://resc.deskline.net/images/TRN/1/d8dc8a51-4c90-43b8-a831-50bcdb8c2707/99/image.jpg",
  winter: "https://www.visitvaldisole.it/website_images/skiarea/Campiglio%20Dolomiti%20di%20Brenta/inverno/image-thumb__2157__maxwidth/Skiarea_Campiglio-Dolomiti-di-Brenta-Val-di-Sole-Val-Rendena_Ph%20Giacomo%20Podetti.jpg",
};

const comforts = [[Wifi, "Wi-Fi"], [Car, "Garage"], [PawPrint, "Animali ammessi"], [Baby, "Servizi baby"], [Bike, "Deposito bici"], [Snowflake, "Deposito sci"]] as const;

const copy = {
  it: {
    nav: ["Appartamenti", "Sauna", "Val di Sole", "Disponibilità"], book: "Richiedi disponibilità", top: "Bonetei, torna all'inizio",
    heroSubtitle: "Spazio, quiete e la Val di Sole davanti.", discover: "Scopri gli appartamenti", saunaLink: "La sauna", scroll: "Scorri agli appartamenti",
    apartmentsLabel: "01 / GLI APPARTAMENTI", apartmentsTitle: <>Due appartamenti,<br /><em>due modi di sentirsi a casa.</em></>, apartmentsIntro: "Scegli lo spazio più adatto al tuo soggiorno: gli ambienti raccolti di Larice oppure la libertà in più di Abete.",
    apartments: [
      { name: "Larice", kicker: "RACCOLTO E LUMINOSO", guests: "Fino a 4 ospiti", beds: "1 camera", size: "55 m²", text: "Uno spazio intimo per coppie e piccole famiglie, con zona giorno, balcone panoramico e tutto ciò che serve per vivere la valle senza fretta.", cta: "Richiedi Larice" },
      { name: "Abete", kicker: "PIÙ SPAZIO DA CONDIVIDERE", guests: "Fino a 6 ospiti", beds: "2 camere", size: "75 m²", text: "L’appartamento più ampio della villa, pensato per famiglie e gruppi che vogliono stare insieme senza rinunciare ai propri spazi.", cta: "Richiedi Abete" },
    ],
    gallery: "Gli ambienti di Villa Bonetei", otherRooms: "Altri ambienti della villa", comforts: "Servizi della villa", comfortNames: ["Wi-Fi", "Garage", "Animali ammessi", "Servizi baby", "Deposito bici", "Deposito sci"],
    saunaLabel: "02 / LA SAUNA", saunaTitle: <>Il calore,<br /><em>dopo la montagna.</em></>, saunaText: "Fuori l’aria della Val di Sole, dentro il tempo di rallentare. La sauna di Villa Bonetei è disponibile anche per chi non soggiorna nei nostri appartamenti.", saunaCta: "Richiedi disponibilità per la sauna", call: "Oppure chiama",
    territoryLabel: "03 / INTORNO A NOI", territoryTitle: <>Dimaro, in ogni<br /><em>stagione.</em></>, territoryText: "Fuori casa, la Val di Sole. La mattina si parte con gli scarponi ai piedi, in sella alla mountain bike o con gli sci in spalla. E quando rientri, la valle è ancora lì, davanti a te: un ultimo panorama prima che la giornata rallenti.",
    summer: "ESTATE / 01", summerTitle: "Ogni giorno, una strada diversa.", summerText: "Sentieri al mattino, la valle in bicicletta o un’uscita rafting sul Noce. In estate, a Dimaro basta uscire per trovare qualcosa da vivere.", summerLink: "Esplora la valle",
    winter: "INVERNO / 02", winterTitle: "Dove comincia l’inverno.", winterText: "Dalle piste di Folgarida–Marilleva alle passeggiate nei boschi innevati: scegli il ritmo della giornata e ritrova, al rientro, la tranquillità di Villa Bonetei.", winterLink: "Scopri l’inverno", photoCredit: "Foto: Archivio APT Val di Sole · Giacomo Podetti",
    locationLabel: "04 / DOVE SIAMO", locationTitle: <>A Dimaro,<br /><em>con tutta la valle intorno.</em></>, locationText: "Villa Bonetei si trova in una zona tranquilla e panoramica di Dimaro: un punto di partenza comodo per raggiungere i paesi, i sentieri e le skiarea della Val di Sole.", locationFacts: ["5 min dal centro di Dimaro", "10 min dagli impianti di Folgarida", "10 min dagli impianti di Daolasa"], directions: "Indicazioni su Google Maps", mapTitle: "Posizione di Villa Bonetei a Dimaro",
    hostLabel: "CHI TI ACCOGLIE", hostTitle: <>Benvenuti,<br /><em>sono Nadia.</em></>, hostText: "Per me l’accoglienza comincia prima dell’arrivo, fin dal primo messaggio. Sarò io a risponderti, ad accoglierti e ad aiutarti a scegliere l’appartamento più adatto. E se hai bisogno di un consiglio, prima o durante il soggiorno, sai sempre a chi rivolgerti.", hostCta: "Scrivimi",
    bookingLabel: "05 / IL TUO SOGGIORNO", bookingTitle: <>Il tuo prossimo<br /><em>soggiorno inizia qui.</em></>, bookingText: "Seleziona arrivo e partenza per richiedere il tuo soggiorno a Villa Bonetei.", back: "Torna su ↑",
    alt: ["Villa Bonetei e il verde che la circonda a Dimaro", "Una camera matrimoniale di Villa Bonetei", "Un soggiorno di Villa Bonetei", "Terrazza di Villa Bonetei", "Cucina di Villa Bonetei", "Una camera matrimoniale di Villa Bonetei", "Vista sulla Val di Sole da Villa Bonetei", "Panorama della Val di Sole", "Paesaggio invernale nella skiarea Campiglio Dolomiti di Brenta"],
  },
  en: {
    nav: ["Apartments", "Sauna", "Val di Sole", "Availability"], book: "Request availability", top: "Bonetei, back to top",
    heroSubtitle: "Space, tranquillity and Val di Sole before you.", discover: "Explore the apartments", saunaLink: "The sauna", scroll: "Scroll to the apartments",
    apartmentsLabel: "01 / THE APARTMENTS", apartmentsTitle: <>Two apartments,<br /><em>two ways to feel at home.</em></>, apartmentsIntro: "Choose the space that suits your stay: the intimate rooms of Larice or the extra freedom of Abete.",
    apartments: [
      { name: "Larice", kicker: "INTIMATE AND LIGHT-FILLED", guests: "Up to 4 guests", beds: "1 bedroom", size: "55 m²", text: "An intimate space for couples and small families, with a living area, panoramic balcony and everything you need to enjoy the valley at your own pace.", cta: "Enquire about Larice" },
      { name: "Abete", kicker: "MORE SPACE TO SHARE", guests: "Up to 6 guests", beds: "2 bedrooms", size: "75 m²", text: "The villa’s larger apartment, designed for families and groups who want to spend time together without giving up their own space.", cta: "Enquire about Abete" },
    ],
    gallery: "Inside Villa Bonetei", otherRooms: "More spaces at the villa", comforts: "Villa amenities", comfortNames: ["Wi-Fi", "Garage", "Pets welcome", "Baby amenities", "Bike storage", "Ski storage"],
    saunaLabel: "02 / THE SAUNA", saunaTitle: <>Warmth,<br /><em>after the mountains.</em></>, saunaText: "The air of Val di Sole outside, time to slow down within. Villa Bonetei’s sauna is also available to guests who are not staying in our apartments.", saunaCta: "Enquire about the sauna", call: "Or call",
    territoryLabel: "03 / AROUND US", territoryTitle: <>Dimaro, in every<br /><em>season.</em></>, territoryText: "Step outside and Val di Sole awaits. Set off in hiking boots, on a mountain bike or with skis in hand. When you return, the valley is still there before you: one last view as the day winds down.",
    summer: "SUMMER / 01", summerTitle: "A different path every day.", summerText: "Morning trails, a ride through the valley or rafting on the Noce. In summer, all you need to do in Dimaro is step outside to find something worth experiencing.", summerLink: "Explore the valley",
    winter: "WINTER / 02", winterTitle: "Where winter begins.", winterText: "From the slopes of Folgarida–Marilleva to walks through snow-covered woods: choose your pace, then return to the quiet of Villa Bonetei.", winterLink: "Discover winter", photoCredit: "Photo: APT Val di Sole Archive · Giacomo Podetti",
    locationLabel: "04 / FIND US", locationTitle: <>In Dimaro,<br /><em>with the whole valley around you.</em></>, locationText: "Villa Bonetei sits in a quiet, panoramic part of Dimaro: a convenient starting point for the villages, trails and ski areas of Val di Sole.", locationFacts: ["5 min from Dimaro centre", "10 min from the Folgarida lifts", "10 min from the Daolasa lifts"], directions: "Directions on Google Maps", mapTitle: "Location of Villa Bonetei in Dimaro",
    hostLabel: "WHO WELCOMES YOU", hostTitle: <>Welcome,<br /><em>I’m Nadia.</em></>, hostText: "For me, hospitality begins before you arrive, with your very first message. I’ll be the one answering you, welcoming you and helping you choose the right apartment. And if you need advice before or during your stay, you will always know who to ask.", hostCta: "Write to me",
    bookingLabel: "05 / YOUR STAY", bookingTitle: <>Your next stay<br /><em>begins here.</em></>, bookingText: "Select your arrival and departure dates to enquire about a stay at Villa Bonetei.", back: "Back to top ↑",
    alt: ["Villa Bonetei surrounded by greenery in Dimaro", "A double bedroom at Villa Bonetei", "A living room at Villa Bonetei", "A terrace at Villa Bonetei", "A kitchen at Villa Bonetei", "A double bedroom at Villa Bonetei", "View over Val di Sole from Villa Bonetei", "Val di Sole landscape", "Winter landscape in the Campiglio Dolomiti di Brenta ski area"],
  },
} as const;

function Brand({ light = false }: { light?: boolean }) {
  return <span className={`brand${light ? " brand-light" : ""}`}>
    <svg className="brand-symbol" viewBox="0 0 76 32" aria-hidden="true" fill="none">
      <path d="M5 27 22 7l16 16L54 7l17 20M12 27h52M22 7l16 20L54 7" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 27V16m24 11V16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="38" cy="5" r="2" fill="currentColor" />
      <circle cx="5" cy="27" r="1.6" fill="currentColor" /><circle cx="71" cy="27" r="1.6" fill="currentColor" />
    </svg>
    <strong>Bonetei</strong>
    <small>DIMARO · VAL DI SOLE</small>
  </span>;
}

function ContactIcon({ kind }: { kind: "email" | "phone" }) {
  return kind === "email" ? <svg className="contact-icon" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M3.5 7.5h21v13h-21zM4.5 8.5 14 15l9.5-6.5M4.5 19.5l6.2-5M23.5 19.5l-6.2-5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="3.5" r="1" fill="currentColor" /><circle cx="14" cy="24.5" r="1" fill="currentColor" />
  </svg> : <svg className="contact-icon" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M7.2 4.5 4.5 7.1c-.7.7-.8 1.8-.5 2.8 2.3 7.4 6.7 11.8 14.1 14.1 1 .3 2.1.2 2.8-.5l2.6-2.7-5.4-4.3-2.6 2.2a20 20 0 0 1-6.2-6.2l2.2-2.6-4.3-5.4Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="21.8" cy="5.5" r="1" fill="currentColor" /><path d="M17.5 6.7a4 4 0 0 1 3.8 3.8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
  </svg>;
}

export function HomePage({ language = "it" }: { language?: "it" | "en" }) {
  const t = copy[language];
  const comfortNames = t.comfortNames;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <main id="top" lang={language}>
    <header className="site-header">
      <a href="#top" aria-label={t.top}><Brand light /></a>
      <div className="header-contact" aria-label={language === "it" ? "Contatti" : "Contact"}>
        <a href="mailto:nadiaramponi@bonetei.it"><ContactIcon kind="email" /> nadiaramponi@bonetei.it</a>
        <a href="tel:+39335485870"><ContactIcon kind="phone" /> +39 335 485 870</a>
      </div>
      <nav className="desktop-nav" aria-label={language === "it" ? "Navigazione principale" : "Main navigation"}>
        <a href="#appartamenti">{t.nav[0]}</a><a href="#sauna">{t.nav[1]}</a><a href="#val-di-sole">{t.nav[2]}</a><a href="#disponibilita">{t.nav[3]}</a>
      </nav>
      <nav className="language-switch" aria-label={language === "it" ? "Lingua" : "Language"}><a href={`${basePath}/`} hrefLang="it" lang="it" aria-current={language === "it" ? "page" : undefined}>IT</a><span aria-hidden="true">/</span><a href={`${basePath}/en.html`} hrefLang="en" lang="en" aria-current={language === "en" ? "page" : undefined}>EN</a></nav>
      <a className="header-book" href="#disponibilita">{t.book} <ArrowUpRight size={18} /></a>
      <details className="mobile-menu">
        <summary>Menu <span aria-hidden="true">☰</span></summary>
        <nav aria-label={language === "it" ? "Navigazione mobile" : "Mobile navigation"}>
          <a href="#appartamenti">{t.nav[0]}</a><a href="#sauna">{t.nav[1]}</a><a href="#val-di-sole">{t.nav[2]}</a><a href="#disponibilita">{t.nav[3]}</a>
          <a href="mailto:nadiaramponi@bonetei.it"><ContactIcon kind="email" /> nadiaramponi@bonetei.it</a>
          <a href="tel:+39335485870"><ContactIcon kind="phone" /> +39 335 485 870</a>
          <a className="mobile-book" href="#disponibilita">{t.book} <ArrowUpRight size={18} /></a>
        </nav>
      </details>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <img src={photos.exterior} alt={t.alt[0]} fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">DIMARO · VAL DI SOLE</p>
        <h1 id="hero-title">Villa<br /><em>Bonetei.</em></h1>
        <p className="hero-subtitle">{t.heroSubtitle}</p>
        <div className="hero-actions"><a href="#appartamenti" className="button button-light">{t.discover} <ArrowUpRight size={18} /></a><a href="#sauna" className="text-link light-link">{t.saunaLink} <ArrowRight size={17} /></a></div>
      </div>
      <a className="hero-scroll" href="#appartamenti" aria-label={t.scroll}><ArrowDown size={20} /></a>
      <span className="hero-side-note">VILLA BONETEI · DIMARO</span>
    </section>

    <section id="appartamenti" className="intro section-wrap">
      <div><p className="eyebrow blue">{t.apartmentsLabel}</p><h2>{t.apartmentsTitle}</h2></div>
      <div className="intro-aside"><p>{t.apartmentsIntro}</p><a className="text-link" href="#disponibilita">{t.book} <ArrowUpRight size={18} /></a></div>
    </section>

    <section className="apartment-list" aria-label={t.gallery}>
      <article className="apartment-card section-wrap">
        <div className="apartment-gallery apartment-gallery-three">
          <figure className="apartment-photo-main"><img src={photos.bedroom} alt={t.alt[1]} loading="lazy" /></figure>
          <figure><img src={photos.living} alt={t.alt[2]} loading="lazy" /></figure>
          <figure><img src={photos.balcony} alt={t.alt[3]} loading="lazy" /></figure>
        </div>
        <div className="apartment-copy">
          <p className="eyebrow blue">{t.apartments[0].kicker}</p><h3>{t.apartments[0].name}</h3>
          <div className="apartment-facts"><span><Users size={20} />{t.apartments[0].guests}</span><span><BedDouble size={20} />{t.apartments[0].beds}</span><span><Maximize2 size={20} />{t.apartments[0].size}</span></div>
          <p>{t.apartments[0].text}</p><a className="text-link" href="#disponibilita">{t.apartments[0].cta} <ArrowUpRight size={18} /></a>
        </div>
      </article>
      <article className="apartment-card apartment-card-reverse section-wrap">
        <div className="apartment-gallery apartment-gallery-two">
          <figure><img src={photos.kitchen} alt={t.alt[4]} loading="lazy" /></figure>
          <figure><img src={photos.secondBedroom} alt={t.alt[5]} loading="lazy" /></figure>
        </div>
        <div className="apartment-copy">
          <p className="eyebrow blue">{t.apartments[1].kicker}</p><h3>{t.apartments[1].name}</h3>
          <div className="apartment-facts"><span><Users size={20} />{t.apartments[1].guests}</span><span><BedDouble size={20} />{t.apartments[1].beds}</span><span><Maximize2 size={20} />{t.apartments[1].size}</span></div>
          <p>{t.apartments[1].text}</p><a className="text-link" href="#disponibilita">{t.apartments[1].cta} <ArrowUpRight size={18} /></a>
        </div>
      </article>
    </section>
    <div className="comforts" aria-label={t.comforts}><div className="comforts-track">{comforts.map(([Icon], index) => <span key={comfortNames[index]}><Icon size={25} strokeWidth={1.5} />{comfortNames[index]}</span>)}</div></div>

    <section id="sauna" className="sauna-section">
      <div className="sauna-photo"><img src={photos.view} alt={t.alt[6]} loading="lazy" /></div>
      <div className="sauna-panel"><p className="eyebrow blue">{t.saunaLabel}</p><h2>{t.saunaTitle}</h2><p className="sauna-lead">{t.saunaText}</p>
        <div className="sauna-actions"><a className="button button-blue" href={`mailto:nadiaramponi@bonetei.it?subject=${encodeURIComponent(language === "it" ? "Disponibilità sauna Villa Bonetei" : "Villa Bonetei sauna enquiry")}`}>{t.saunaCta} <ArrowUpRight size={18} /></a><a className="button sauna-phone" href="tel:+39335485870"><Phone size={18} />{language === "it" ? "Oppure chiama direttamente Nadia" : "Or call Nadia directly"}</a></div>
      </div>
    </section>

    <section id="val-di-sole" className="territory section-wrap">
      <p className="eyebrow blue">{t.territoryLabel}</p><div className="territory-heading"><h2>{t.territoryTitle}</h2><p>{t.territoryText}</p></div>
      <div className="season-grid">
        <article className="season-card"><img src={photos.panorama} alt={t.alt[7]} loading="lazy" /><div><small>{t.summer}</small><h3>{t.summerTitle}</h3><p>{t.summerText}</p><a href={language === "it" ? "https://www.visitvaldisole.it/cose-da-fare-in-estate-in-val-di-sole" : "https://www.visitvaldisole.it/en/choose-your-adventure"} target="_blank" rel="noreferrer">{t.summerLink} <ArrowUpRight size={16} /></a></div></article>
        <article className="season-card"><img src={photos.winter} alt={t.alt[8]} loading="lazy" /><div><small>{t.winter}</small><h3>{t.winterTitle}</h3><p>{t.winterText}</p><a href={language === "it" ? "https://www.visitvaldisole.it/it/skiarea" : "https://www.visitvaldisole.it/en/ski-areas"} target="_blank" rel="noreferrer">{t.winterLink} <ArrowUpRight size={16} /></a><p className="photo-credit">{t.photoCredit}</p></div></article>
      </div>
    </section>

    <section className="location section-wrap"><div><p className="eyebrow blue">{t.locationLabel}</p><h2>{t.locationTitle}</h2><p>{t.locationText}</p><ul className="location-facts">{t.locationFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul><a className="text-link location-directions" href="https://www.google.com/maps/dir/?api=1&amp;destination=46.3227%2C10.8723&amp;travelmode=driving" target="_blank" rel="noopener noreferrer">{t.directions} <ArrowUpRight size={18} /></a></div><div className="map-panel"><iframe title={t.mapTitle} src="https://www.google.com/maps?q=Villa%20Bonetei%2C%20Via%20dei%20Bonetei%204%2C%20Dimaro%20Folgarida&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-caption"><MapPin size={21} strokeWidth={1.6} /><span>Villa Bonetei · Via dei Bonetei 4, Dimaro Folgarida</span></div></div></section>

    <section className="host-section">
      <div className="host-photo"><img src={`${basePath}/nadia.png`} alt={language === "it" ? "Nadia, la proprietaria di Villa Bonetei" : "Nadia, your host at Villa Bonetei"} loading="lazy" /></div>
      <div className="host-copy"><p className="eyebrow blue">{t.hostLabel}</p><h2>{t.hostTitle}</h2><p>{t.hostText}</p><a className="button button-blue" href="mailto:nadiaramponi@bonetei.it">{t.hostCta} <ArrowUpRight size={18} /></a></div>
    </section>

    <section id="disponibilita" className="booking-section"><div className="booking-heading section-wrap"><p className="eyebrow">{t.bookingLabel}</p><h2>{t.bookingTitle}</h2><p>{t.bookingText}</p></div><BookingCalendar language={language} /></section>

    <footer><a href="#top" aria-label={t.top}><Brand light /></a><p>Via dei Bonetei · Dimaro Folgarida<br />Val di Sole · Trentino</p><div><a href="#appartamenti">{t.nav[0]}</a><a href="#sauna">{t.nav[1]}</a><a href="#disponibilita">{t.nav[3]}</a></div><a href="#top" className="back-top">{t.back}</a></footer>
  </main>;
}

export default function Home() { return <HomePage />; }

import {
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Facebook,
  Calendar,
  Music2,
  Bed,
  Waves,
  Fish,
  TreePine,
  UtensilsCrossed,
  Flower2,
  Share2,
  QrCode,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import heroJungle from "@/assets/gallery-resort.jpg";
import galResort from "@/assets/gallery-resort.jpg";
import galCabins from "@/assets/gallery-cabins.jpg";
import galLights from "@/assets/gallery-lights.jpg";
import galEntrance from "@/assets/gallery-entrance.jpg";
import galDining from "@/assets/gallery-dining.jpg";
import galBar from "@/assets/gallery-bar.jpg";
import galBarShelf from "@/assets/gallery-barshelf.jpg";

const PHONE = "+9779705026021";
const PHONE_DISPLAY = "+977 9705026021";
const WHATSAPP_URL = `https://wa.me/9779705026021?text=${encodeURIComponent("Hi! I'd like to book a stay at Koilabhar Jungle Resort.")}`;
const MAPS_URL = "https://maps.app.goo.gl/5a7tYKUfFoTr9LsVA";
const INSTAGRAM_URL = "https://www.instagram.com/sunilpatel9943";
const TIKTOK_URL = "https://www.tiktok.com/@koilavar_jungle_resort?_r=1&_t=ZS-95cQ0WuYhCE";
const FACEBOOK_URL = "https://www.facebook.com/sunil.patel.409609";

const facilities = [
  { icon: Bed, label: "Personal Cabins & Rooms" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Fish, label: "Fishing" },
  { icon: TreePine, label: "Forest Walk / Jungle Trek" },
  { icon: UtensilsCrossed, label: "Fresh Veg & Non-Veg" },
  { icon: Flower2, label: "Peaceful Garden" },
];

const gallery = [
  { src: galResort, alt: "Koilabhar Jungle Resort main building at dusk" },
  { src: galEntrance, alt: "Resort entrance archway with lights" },
  { src: galLights, alt: "Festive string lights over the open grounds" },
  { src: galCabins, alt: "Bamboo cabins lit up at evening" },
  { src: galDining, alt: "Open-air dining area with prayer flags" },
  { src: galBar, alt: "Resort bar window view" },
  { src: galBarShelf, alt: "Bar shelf with curated selection" },
];

const ActionButton = ({
  href,
  icon: Icon,
  label,
  sublabel,
  variant = "default",
  external = true,
}: {
  href: string;
  icon: typeof Phone;
  label: string;
  sublabel?: string;
  variant?: "default" | "primary" | "accent";
  external?: boolean;
}) => {
  const styles = {
    default: "bg-card hover:bg-muted text-foreground border border-border",
    primary: "bg-gradient-jungle text-primary-foreground hover:opacity-95",
    accent:
      "bg-gradient-sunset text-secondary-foreground hover:opacity-95 shadow-glow",
  }[variant];

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group flex items-center gap-4 rounded-2xl px-5 py-4 shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-elegant ${styles}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-background/15 backdrop-blur-sm">
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-base font-semibold">{label}</span>
        {sublabel && <span className="text-xs opacity-80">{sublabel}</span>}
      </span>
      <span className="ml-auto opacity-50 transition-smooth group-hover:translate-x-1 group-hover:opacity-100">
        →
      </span>
    </a>
  );
};

const Index = () => {
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = async () => {
    const shareData = {
      title: "Koilabhar Jungle Resort",
      text: "🌿 Experience the Loveliness of Terai 🌿",
      url: pageUrl,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-xl">
        {/* Hero */}
        <header className="relative h-72 overflow-hidden sm:h-80">
          <img
            src={heroJungle}
            alt="Terai jungle at golden hour"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <button
            onClick={handleShare}
            aria-label="Share"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/30 text-primary-foreground backdrop-blur-md transition-smooth hover:bg-background/50"
          >
            <Share2 className="h-4 w-4" />
          </button>
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-foreground" />
            Open 24 Hours
          </span>
        </header>

        {/* Logo + Identity card overlapping hero */}
        <section className="relative -mt-20 px-5">
          <div className="rounded-3xl bg-gradient-card p-6 shadow-elegant ring-1 ring-border/60 animate-fade-up">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 -mt-16 h-28 w-28 overflow-hidden rounded-3xl bg-card shadow-elegant ring-4 ring-background animate-float">
                <img
                  src={logo}
                  alt="Koilabhar Jungle Resort logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
                Koilabhar Jungle Resort
              </h1>
              <p className="mt-2 text-sm font-medium text-secondary">
                🌿 Experience the Loveliness of Terai 🌿
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Escape to the peaceful jungle vibes of Terai. Enjoy nature,
                fresh air, comfortable stays, delicious local foods, and fun
                activities. Perfect for family getaways, weekend relaxation, and
                nature lovers.
              </p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="mt-6 space-y-3 px-5">
          <ActionButton
            href={`tel:${PHONE}`}
            icon={Phone}
            label="Call Now"
            sublabel={PHONE_DISPLAY}
            variant="primary"
            external={false}
          />
          <ActionButton
            href={MAPS_URL}
            icon={MapPin}
            label="Reviews"
            sublabel="Koilabhar, Bagbana, Parsa"
          />
          <ActionButton
            href={WHATSAPP_URL}
            icon={MessageCircle}
            label="WhatsApp"
            sublabel="Booking & Inquiries"
          />
          <ActionButton
            href={INSTAGRAM_URL}
            icon={Instagram}
            label="Instagram"
            sublabel="@sunilpatel9943"
          />
          <ActionButton href={FACEBOOK_URL} icon={Facebook} label="Facebook" />
          <ActionButton
            href={TIKTOK_URL}
            icon={Music2}
            label="TikTok"
            sublabel="@koilavar_jungle_resort"
          />
          <ActionButton
            href={WHATSAPP_URL}
            icon={Calendar}
            label="Book Now"
            sublabel="Reserve your stay"
            variant="accent"
          />
        </section>

        {/* Facilities */}
        <section className="mt-10 px-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <h2 className="font-display text-2xl font-semibold text-primary">
              Facilities
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {facilities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-4 shadow-soft transition-smooth hover:-translate-y-0.5 hover:border-secondary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium leading-snug text-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-10 px-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <h2 className="font-display text-2xl font-semibold text-primary">
              Gallery
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {gallery.map((img, i) => (
              <div
                key={img.alt}
                className={`group overflow-hidden rounded-2xl shadow-soft ${i === 0 ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* QR Code */}
        <section className="mt-10 px-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <h2 className="font-display text-2xl font-semibold text-primary">
              Share This Page
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="rounded-3xl bg-gradient-jungle p-6 text-primary-foreground shadow-elegant">
            <div className="flex flex-col items-center text-center">
              <p className="mb-5 max-w-xs text-sm opacity-90">
                Scan this QR code to instantly share Koilabhar Jungle Resort
                with friends & family.
              </p>
              <div className="rounded-2xl bg-background p-4 shadow-soft">
                <QRCodeSVG
                  value={pageUrl}
                  size={180}
                  level="H"
                  bgColor="#ffffff"
                  fgColor="hsl(140, 45%, 18%)"
                  imageSettings={{
                    src: logo,
                    height: 36,
                    width: 36,
                    excavate: true,
                  }}
                />
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-smooth hover:bg-background/25"
                >
                  <Share2 className="h-4 w-4" /> Share
                </button>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-smooth hover:opacity-90"
                >
                  <QrCode className="h-4 w-4" />
                  {copied ? "Link Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="mt-10 px-5">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-primary">
                  Find Us
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Koilabhar Mai Temple, Koilabhar, Bagbana, Parsa 44300, Nepal
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 px-5 pb-10 text-center">
          <div className="mx-auto h-px w-16 bg-border" />
          <p className="mt-6 font-display text-lg italic text-primary">
            Where the jungle whispers welcome.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Koilabhar Jungle Resort · Terai, Nepal
          </p>
        </footer>
      </article>
    </main>
  );
};

export default Index;

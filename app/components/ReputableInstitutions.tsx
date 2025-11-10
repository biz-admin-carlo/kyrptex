import Image from "next/image";
import { Inter } from "next/font/google";

type Logo = {
  src: string;
  alt: string;
  w: number;
  h: number;
};

const logos: Logo[] = [
  { src: "/cigna.png", alt: "Cigna", w: 139, h: 75 },
  { src: "/united-healthcare.png", alt: "United Healthcare", w: 238, h: 75 },
  {
    src: "/guaranteed-trust-life.png",
    alt: "Guarantee Trust Life",
    w: 322,
    h: 75,
  },
  { src: "/aetna.png", alt: "Aetna", w: 270, h: 75 },
  { src: "/transamerica.png", alt: "Transamerica", w: 419, h: 75 },
  { src: "/mutual-omaha.png", alt: "Mutual of Omaha", w: 418, h: 75 },
];

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ReputableInstitutions() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2
          className={`${inter.className} mb-12 text-center text-[36px] font-semi-bold text-black`}
        >
          Trusted by Reputable Institutions
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center justify-items-center gap-x-16 gap-y-12 md:gap-x-28 md:gap-y-16">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="relative"
              style={{ width: `${logo.w}px`, height: `${logo.h}px` }}
              aria-label={logo.alt}
              title={logo.alt}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes={`${logo.w}px`}
                className="object-contain"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

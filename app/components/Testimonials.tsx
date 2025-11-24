"use client";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "They explained every policy clearly and helped me pick the right life plan. No pressure, just honest guidance. Excellent service from start to finish!",
    name: "Daniel R.",
    role: "IT Specialist",
  },
  {
    quote:
      "Their health insurance is affordable and dependable. The team really goes above and beyond for clients.",
    name: "Aisha K.",
    role: "Registered Nurse",
  },
  {
    quote:
      "The annuity plan gives me stable income and peace of mind. Honest, professional, and trustworthy service.",
    name: "Robert C.",
    role: "Retired Teacher",
  },
  {
    quote:
      "Fast claim approvals and very responsive support. I felt guided at every step.",
    name: "Marta L.",
    role: "Project Manager",
  },
  {
    quote:
      "Flexible plans and friendly agents. They tailored everything to my needs.",
    name: "James P.",
    role: "Small Business Owner",
  },
];

export default function Testimonials() {
  // Duplicate items twice for seamless marquee loop
  const items = testimonials;

  return (
    <section
      className="relative py-32"
      style={{
        backgroundImage: "url('/testi.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="mb-30 text-center text-3xl font-semi-bold text-[#22C9C7] md:text-4xl">
          Hear From Our Clients
        </h2>
      </div>
      {/* Full-bleed infinite marquee from window edges */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
        <div className="marquee flex gap-6 md:gap-12 will-change-transform">
          {items.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className="w-[300px] shrink-0 rounded-[16px] bg-white px-6 pt-8 text-center text-black shadow-md sm:w-[360px] md:w-[420px] md:px-8"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="relative h-8 w-8">
                  <Image
                    src="/quotes.png"
                    alt="Quote"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4">
                <p className="text-sm text-black/80">{t.quote}</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-[#22C9C7]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
          {items.map((t, idx) => (
            <div
              key={`dup-${t.name}-${idx}`}
              className="w-[300px] shrink-0 rounded-[16px] bg-white px-6 pt-8 text-center text-black shadow-md sm:w-[360px] md:w-[420px] md:px-8"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="relative h-8 w-8">
                  <Image
                    src="/quotes.png"
                    alt="Quote"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4">
                <p className="text-sm text-black/80">{t.quote}</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-[#22C9C7]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .marquee {
            animation: marquee-scroll 12s linear infinite;
          }

          @media (max-width: 768px) {
            .marquee {
              animation-duration: 8s;
            }
          }

          @keyframes marquee-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

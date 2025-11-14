import Image from "next/image";
import Footer from "@/app/components/Footer";

type ServiceTemplateProps = {
  bannerImage: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerLead: string;
  descriptionTitle: string;
  descriptionIntro: string;
  includedItems: string[];
  audienceItems: string[];
  quoteHeading?: string;
  quoteSubheading?: string;
  quoteBody?: string;
};

export default function ServiceTemplate({
  bannerImage,
  bannerTitle,
  bannerSubtitle,
  bannerLead,
  descriptionTitle,
  descriptionIntro,
  includedItems,
  audienceItems,
  quoteHeading = "Need a Quote?",
  quoteSubheading = "Get a free quote in minutes or speak with one of our experts.",
  quoteBody = "Book a consultation and let our team help you find the right coverage for your needs. No pressure, just honest advice and support you can trust.",
}: ServiceTemplateProps) {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt={`${bannerTitle} banner background`}
            fill
            priority
            className="object-cover object-right"
          />
          {/* Left-to-right gradient overlay for readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(2,58,98,0.95) 0%, rgba(2,58,98,0.85) 35%, rgba(2,58,98,0.65) 55%, rgba(2,58,98,0.20) 75%, rgba(2,58,98,0.05) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="flex min-h-[280px] items-center py-12 md:min-h-[420px] md:py-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl font-bold tracking-wide text-[#22C9C7] md:text-5xl">
                {bannerTitle}
              </h1>
              <p className="mt-4 text-[2rem] font-semibold md:mt-5 md:text-[2.2rem]">
                {bannerSubtitle}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/90 md:mt-6 md:text-base md:leading-loose">
                {bannerLead}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service description */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-2xl font-semibold text-black md:text-3xl">
              {descriptionTitle}
            </h2>
            <p className="mt-3 text-sm text-black/70 md:text-base">
              {descriptionIntro}
            </p>
          </div>

          <div className="mt-48 grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* What's Included */}
            <div>
              <h3 className="text-xl font-semibold text-black md:text-2xl">
                What’s Included
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-black/80 md:text-base">
                {includedItems.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 text-green-600"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79L7.4 10.4a.75.75 0 10-1.06 1.06l2.25 2.25a.75.75 0 001.137-.094l4.13-5.425z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It's For */}
            <div>
              <h3 className="text-xl font-semibold text-black md:text-2xl">
                Who It’s For
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-black/80 md:text-base">
                {audienceItems.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 text-green-600"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79L7.4 10.4a.75.75 0 10-1.06 1.06l2.25 2.25a.75.75 0 001.137-.094l4.13-5.425z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Need a Quote CTA */}
      <section className="relative bg-[linear-gradient(to_bottom,#023A62_0%,#0A6C8E_50%,#0893D2_100%)] py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-2xl font-semibold text-[#22C9C7] md:text-4xl">
              {quoteHeading}
            </p>
            <h3 className="mt-2 text-5xl font-semibold text-white md:text-3xl">
              {quoteSubheading}
            </h3>
            <p className="mt-2 text-xs text-white/80 md:text-sm">{quoteBody}</p>
          </div>

          {/* Centered card form */}
          <div className="mx-auto mt-6 w-full max-w-xl bg-white p-6 shadow-2xl md:p-8">
            <h4 className="mb-4 text-center text-lg font-semibold text-black md:text-xl">
              Book an Appointment
            </h4>
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none placeholder:text-transparent focus:border-teal-500"
                />
                <p className="mt-1 text-xs italic text-black/60">
                  e.g. John Doe
                </p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@example.com"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none placeholder:text-transparent focus:border-teal-500"
                />
                <p className="mt-1 text-xs italic text-black/60">
                  e.g. name@example.com
                </p>
              </div>
              <button
                type="button"
                className="inline-flex h-[44px] w-full items-center justify-center rounded-md bg-teal-500 font-semibold text-white transition-colors hover:bg-teal-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

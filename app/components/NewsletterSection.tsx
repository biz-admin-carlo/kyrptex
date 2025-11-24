import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: "url('/Newsletter.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* dim overlay to ensure contrast over the image */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Headline over the image */}
        <div className="mx-auto max-w-3xl">
          <h3
            className={`${inter.className} text-center text-3xl font-semibold text-white md:text-5xl`}
          >
            Subscribe to Our Newsletter!
          </h3>
          <p className="mt-2 text-center text-white/90 md:text-xl">
            Stay Updated – Straight to Your Inbox
          </p>
        </div>

        {/* Card with input and CTA */}
        <div className="mx-auto mt-6 w-full max-w-3xl bg-white p-5 shadow-2xl backdrop-blur md:p-8">
          <div className="mx-auto max-w-3xl">
            <form
              action="mailto:annatcorcino@yahoo.com"
              method="POST"
              encType="text/plain"
            >
              <label
                htmlFor="newsletter-email"
                className="mb-2 block text-lg font-medium text-black md:text-xl"
              >
                Email Address
              </label>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  name="Email"
                  aria-describedby="newsletter-help"
                  className="w-full flex-1 rounded-md border border-black/30 px-4 text-black outline-none placeholder:text-transparent focus:border-teal-500 h-[48px] md:h-[56px] md:text-base"
                />
                <button
                  type="submit"
                  className="inline-flex h-[48px] shrink-0 items-center justify-center rounded-[12px] bg-teal-400 px-6 font-semibold text-black transition-colors hover:bg-teal-500 md:h-[56px]"
                >
                  Subscribe
                </button>
              </div>
              <p
                id="newsletter-help"
                className="mt-2 text-sm italic text-black/60"
              >
                e.g name@example.com
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

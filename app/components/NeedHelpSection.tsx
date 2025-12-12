import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NeedHelpSection() {
  return (
    <section
      className="relative py-16 md:py-24 bg-white"
      style={{
        // Decorative image on the right
        // (removed; using dots layer below and a blue panel)
        backgroundSize: "contain",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dots background, peeking from the right side of the blue panel */}
      <div
        className="absolute inset-y-0 right-[270px] z-0 hidden w-1/3 md:block"
        style={{
          backgroundImage: "url('/dots.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundSize: "contain",
        }}
        aria-hidden="true"
      />

      {/* Left blue background with gradient.
          - Mobile: full-width rounded panel behind content
          - Desktop: 2/3 width panel with larger rounded corner */}
      <div
        className="absolute inset-0 left-0 z-1 w-full rounded-tr-[80px] md:inset-y-0 md:w-2/3 md:rounded-tr-[100px]"
        style={{
          background: "linear-gradient(to right, #0A6C8E 0%, #023A62 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="text-white">
            <h3 className="text-2xl font-semibold text-[#22C9C7] md:text-4xl">
              Need Help Choosing a Plan?
            </h3>
            <p className="mt-4 max-w-xl text-white/90">
              Our experts are here to guide you, whether you&apos;re looking for
              the best coverage for your family, business, or vehicle.
              Let&apos;s find a plan that fits your needs and budget.
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg md:mt-0 md:p-8">
            <h4
              className={`${inter.className} mb-4 text-center text-lg font-semibold text-black md:text-xl`}
            >
              Book an Appointment
            </h4>
            <form
              className="space-y-4"
              action="mailto:annatcorcino@yahoo.com"
              method="POST"
              encType="text/plain"
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Full Name"
                  placeholder="e.g John Doe"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none focus:border-teal-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="e.g name@example.com"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none focus:border-teal-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-[48px] w-full items-center justify-center rounded-md bg-teal-500 font-semibold text-white transition-colors hover:bg-teal-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

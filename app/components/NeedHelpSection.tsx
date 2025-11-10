import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NeedHelpSection() {
  return (
    <section
      className="relative py-16 md:py-24"
      style={{
        // Layer 1: split background (left blue, right white)
        // Layer 2: decorative image on top
        backgroundImage:
          "linear-gradient(to right, #023A62 0%, #0A6C8E 45%, #FFFFFF 45%, #FFFFFF 100%), url('/need-help.png')",
        backgroundSize: "100% 100%, contain",
        backgroundPosition: "center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
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

          <div className="rounded-[12px] bg-white p-6 shadow-lg md:p-8">
            <h4
              className={`${inter.className} mb-4 text-center text-lg font-semibold text-black md:text-xl`}
            >
              Book an Appointment
            </h4>
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
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
                  placeholder="e.g name@example.com"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none focus:border-teal-500"
                />
              </div>
              <button
                type="button"
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

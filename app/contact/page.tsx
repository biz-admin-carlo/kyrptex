import Image from "next/image";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      {/* Hero/Banner */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/contact-b.png"
            alt="Contact support representative using phone and laptop"
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
              <p className="text-base font-semibold tracking-wide text-white/90 md:text-2xl">
                Contact Us
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-wide text-[#22C9C7] md:text-6xl">
                Here to help
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-white/90 md:mt-6 md:text-base md:leading-loose">
                Have questions or need help choosing the right plan? Our team is
                here to assist you, reach out anytime and we&apos;ll guide you
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Info cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Hours of Operation */}
            <div className="rounded-xl bg-[#22C9C7] px-8 py-8 text-center shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <Image
                  src="/hours.png"
                  alt="Hours of Operation icon"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <p className="mt-5 text-lg font-semibold text-[#023A62]">
                Hours of Operation
              </p>
              <p className="mt-2 text-sm text-black">24/7 Support</p>
            </div>
            {/* Phone */}
            <div className="rounded-xl bg-[#22C9C7] px-8 py-8 text-center shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <Image
                  src="/phone.png"
                  alt="Phone icon"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <p className="mt-5 text-lg font-semibold text-[#023A62]">Phone</p>
              <p className="mt-2 text-sm text-black underline">
                (845) 801-4389
              </p>
              <p className="mt-1 text-sm text-black underline">
                (845) 645-6947
              </p>
            </div>
            {/* Email */}
            <div className="rounded-xl bg-[#22C9C7] px-8 py-8 text-center shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <Image
                  src="/general-inq.png"
                  alt="General Inquiries icon"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <p className="mt-5 text-lg font-semibold text-[#023A62]">
                General Inquiries
              </p>
              <p className="mt-2 text-sm text-black underline">
                annatcrocino@yahoo.com
              </p>
            </div>
          </div>

          {/* Message copy */}
          <div className="mt-14 text-center">
            <h2 className="text-lg font-semibold text-black md:text-xl">
              Our customer service team is waiting to assist you
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xs text-black/70 md:text-sm">
              Whether you have questions about coverage, need help with a claim,
              or want to book a free consultation, our team is ready to assist
              you.
            </p>
            <p className="mt-3 text-[11px] text-black/60 md:text-xs">
              Please allow up to 2-Business days response time in order for us
              to fully address your inquiries.
            </p>
          </div>

          {/* Contact form */}
          <div className="mx-auto mt-10 w-full max-w-5xl rounded-md bg-white p-6 shadow-md border border-black/10 md:p-8">
            <h3 className="mb-4 text-center text-base font-semibold tracking-wide text-black md:text-lg">
              CONTACT FORM
            </h3>
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6">
              {/* Full Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none focus:border-teal-500"
                  placeholder="e.g. John Doe"
                />
              </div>
              {/* Subject */}
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Subject <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none rounded-md border border-black/20 bg-white px-3 py-2 text-black outline-none focus:border-teal-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option>General Inquiry</option>
                    <option>Quote Request</option>
                    <option>Claims Help</option>
                    <option>Appointment</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black/60">
                    {/* chevron-down */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none focus:border-teal-500"
                  placeholder="e.g. name@example.com"
                />
              </div>
              {/* Message - right column spanning two rows */}
              <div className="md:row-span-2">
                <label className="mb-1 block text-sm font-medium text-black">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="h-40 w-full resize-y rounded-md border border-black/20 px-3 py-2 text-black outline-none focus:border-teal-500"
                  placeholder="How can we help?"
                />
              </div>
              {/* Phone (optional) */}
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none focus:border-teal-500"
                  placeholder="e.g. (555) 555-5555"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="inline-flex h-[44px] w-full items-center justify-center rounded-md bg-teal-500 font-semibold text-white transition-colors hover:bg-teal-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

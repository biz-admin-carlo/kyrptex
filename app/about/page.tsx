import Image from "next/image";
import { Inter, Kaushan_Script } from "next/font/google";
import Footer from "../components/Footer";
import ReputableInstitutions from "../components/ReputableInstitutions";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutPage() {
  const offerings = [
    {
      title: "Life Insurance",
      description: "Secure your family’s future with lasting protection.",
      icon: "/lifw.png",
    },
    {
      title: "Health Insurance",
      description: "Affordable coverage for your health and peace of mind.",
      icon: "/health.png",
    },
    {
      title: "Accident Insurance",
      description: "Stay protected and confident in every situation.",
      icon: "/accident.png",
    },
    {
      title: "Indexed Universal Life (IUL)",
      description: "Grow your savings while protecting your loved ones.",
      icon: "/IUL.png",
    },
    {
      title: "Annuities",
      description: "Turn your savings into steady lifetime income.",
      icon: "/ann-logo.png",
    },
    {
      title: "Free Consultation",
      description: "Get expert guidance tailored to your needs.",
      icon: "/con.png",
    },
  ];
  return (
    <>
      {/* Hero - full width image with curved bottom, centered copy */}
      <section className="relative">
        {/* Background image */}
        <div className="absolute h-full w-full">
          <Image
            src="/about-us.png"
            alt="City buildings representing insurance and stability"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Centered content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="flex min-h-[56vh] flex-col items-center justify-center py-16 text-center md:min-h-[64vh] md:py-24">
            <p className="text-white/90 text-lg md:text-xl">About</p>
            <h1 className="mt-2 text-4xl font-bold text-[#22C9C7] md:text-6xl">
              KYRPTEX Insurance
            </h1>
            <p className="mt-4 max-w-3xl text-base text-white/90 md:text-xl">
              Reliable insurance solutions, backed by years of experience and
              trust.
            </p>
          </div>
        </div>
      </section>

      {/* Company intro copy below the hero */}
      <section className="bg-white py-18 md:py-24">
        <div className="mx-auto w-full px-6">
          <div className="mx-auto w-full md:w-7/8 text-center text-black">
            <p className="text-base md:text-md">
              At <span className="font-semibold">KYRPTEX Insurance</span>, we
              believe insurance should feel personal, not complicated. For over
              a decade, we&apos;ve been helping individuals, families, and
              businesses across New York protect what matters most through
              reliable, affordable, and customized insurance solutions.
            </p>
            <p className="mt-6 text-base md:text-md">
              As a locally trusted and licensed agency, we specialize in a wide
              range of services including Life Insurance, Health Insurance, Car
              Insurance, Business Insurance, and Claims Assistance. Our goal is
              simple: to give you peace of mind by making sure you&apos;re
              covered when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-[linear-gradient(to_bottom,#023A62_0%,#0A6C8E_50%,#0893D2_100%)] py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3
                className={`${inter.className} text-3xl font-semi-bold text-[#22C9C7] md:text-5xl`}
              >
                Our Mission
              </h3>
              <p className="mt-6 text-white/90 md:text-md">
                To provide individuals, families, and businesses with trusted,
                affordable, and personalized insurance solutions, empowering
                them to live confidently knowing they are protected by a team
                that cares.
              </p>
            </div>
            <div>
              <h3
                className={`${inter.className} text-3xl font-semi-bold text-[#22C9C7] md:text-5xl`}
              >
                Our Vision
              </h3>
              <p className="mt-6 text-white/90 md:text-md">
                To be New York’s most reliable and customer focused insurance
                partner, recognized for transparency, innovation, and unwavering
                support in every life stage and situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background + What We Offer */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2
            className={`${inter.className} text-center text-3xl font-semi-bold text-black md:text-4xl`}
          >
            Company Background
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-black/80 md:text-lg">
            Founded in the heart of New York, our company began with a simple
            but powerful goal: to make insurance more understandable,
            accessible, and personal. With over 3 years of experience in the
            industry, we&apos;ve helped countless individuals, families, and
            businesses protect what matters most. We&apos;ve grown from a small
            local office into a trusted insurance partner, built on integrity,
            transparency, and a deep commitment to our clients&apos; peace of
            mind.
          </p>

          <div className="mt-20">
            <h3
              className={`${inter.className} text-center text-3xl font-semi-bold text-black md:text-4xl`}
            >
              What We Offer
            </h3>
            <p className="mx-auto mt-2 max-w-3xl text-center text-black/70 md:text-base">
              We provide a full range of insurance services designed to meet
              your unique needs:
            </p>

            <div className="mt-10 mx-auto w-full md:w-1/2 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {offerings.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto relative h-14 w-14">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-black">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-black/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="relative border-y border-white/10 bg-[#023A62] py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto w-full text-center md:w-8/9">
            <p className="text-base text-white/90 md:text-lg">
              “At KRYPTEX Insurance Services our mission is to help people
              protect what matters most to them such as their health, their
              families, and their future. We believe that everyone deserves
              security, confidence, and the freedom to live without financial
              worry. Every policy we offer is built with trust, integrity, and a
              genuine commitment to care.”
            </p>
            <div className="mt-8">
              <p
                className={`${inter.className} text-2xl font-semibold text-[#22C9C7] md:text-3xl`}
              >
                Anna C.
              </p>
              <p className="mt-1 text-teal-300">CEO / Founder</p>
              <p className="text-teal-300">KRYPTEX Insurance Services</p>
            </div>
          </div>
        </div>
      </section>

      <ReputableInstitutions />

      {/* Appointment CTA */}
      <section className="relative py-16 md:py-24 bg-[linear-gradient(to_bottom,#023A62_0%,#0A6C8E_50%,#0893D2_100%)]">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h3
              className={`${inter.className} text-2xl font-semibold text-[#22C9C7] md:text-3xl`}
            >
              Ready to find the right insurance plan for you?
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Book a free consultation today and let our experts guide you to
              coverage that fits your needs, no pressure, just support.
            </p>
          </div>

          {/* Centered card form */}
          <div className="mx-auto mt-6 w-full max-w-lg bg-white p-6 shadow-2xl md:p-8">
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
                  placeholder="e.g. John Doe"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none focus:border-teal-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@example.com"
                  className="w-full rounded-md border border-black/20 px-3 py-2 text-black outline-none focus:border-teal-500"
                />
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

      {/* Scripted tagline */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full px-6">
          <p
            className={`${kaushan.className} mx-auto w-full text-center text-4xl text-black md:w-2/3 md:text-5xl`}
          >
            “Your security is our priority. Let us help you protect what matters
            most.”
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

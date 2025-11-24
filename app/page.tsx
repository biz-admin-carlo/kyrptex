"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import ServiceCard from "./components/ServiceCard";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ReputableInstitutions from "./components/ReputableInstitutions";
import NeedHelpSection from "./components/NeedHelpSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // Show once per browser using localStorage flag
  useEffect(() => {
    try {
      const flag = localStorage.getItem("kyrptex_popup_seen");
      if (!flag) {
        setTimeout(() => setShowPopup(true), 0);
        localStorage.setItem("kyrptex_popup_seen", "1");
      }
    } catch {
      // ignore storage errors
      setTimeout(() => setShowPopup(true), 0);
    }
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);
  const slides = [
    {
      key: "life",
      title: "Life Insurance",
      image: "/life-insurance.png",
      headline: "Protect What Matters Most",
      subtext:
        "Secure your family’s future with personalized life insurance plans tailored to your needs.",
    },
    {
      key: "health",
      title: "Health Insurance",
      image: "/health-insurance.png",
      headline: "Stay Covered, Stay Confident",
      subtext:
        "Affordable health insurance that puts your wellness first—because peace of mind is priceless.",
    },
    {
      key: "accident",
      title: "Accident Insurance",
      image: "/accident-insurance.png",
      headline: "Prepared for Life’s Surprises",
      subtext:
        "Protect yourself and your family from the financial strain of unexpected injuries—because accidents shouldn’t derail your future.",
    },
    {
      key: "iul",
      title: "Indexed Universal Life (IUL)",
      image: "/indexed-universal.png",
      headline: "Grow Wealth. Protect Family. Live Free.",
      subtext:
        "An IUL policy helps you build cash value while safeguarding your legacy with smart protection for today and tomorrow.",
    },
    {
      key: "ann",
      title: "Annuities",
      image: "/ann.png",
      headline: "Turn Savings Into Lifetime Income",
      subtext:
        "Reliable annuity solutions to help create predictable income throughout retirement.",
    },
  ];
  const services = [
    {
      title: "Life Insurance",
      description: "Secure your family’s future with lasting protection.",
      cta: "Learn More >>>",
      icon: "/lifw.png",
      href: "/services/life-insurance",
    },
    {
      title: "Health Insurance",
      description: "Affordable coverage for your health and peace of mind.",
      cta: "Learn More >>>",
      icon: "/health.png",
      href: "/services/health-insurance",
    },
    {
      title: "Accident Insurance",
      description: "Stay protected and confident in every situation.",
      cta: "Learn More >>>",
      icon: "/accident.png",
      href: "/services/accident-insurance",
    },
    {
      title: "Indexed Universal Life",
      description: "Grow savings while protecting your loved ones.",
      cta: "Learn More >>>",
      icon: "/IUL.png",
      href: "/services/indexed-universal-life",
    },
    {
      title: "Annuities",
      description: "Turn your savings into steady lifetime income.",
      cta: "Learn More >>>",
      icon: "/ann-logo.png",
      href: "/services/annuities",
    },
    {
      title: "Free Consultation",
      description: "Get expert guidance tailored to your needs.",
      cta: "Contact Us >>>",
      icon: "/con.png",
      href: "/contact",
    },
  ];

  return (
    <>
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl md:max-w-3xl">
            {/* Close */}
            <button
              aria-label="Close pop-up"
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 bg-white text-black shadow-sm hover:bg-white"
              onClick={() => setShowPopup(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-8">
              {/* Left image with overlayed heading */}
              <div className="relative min-h-[260px] md:col-span-3 md:min-h-[380px]">
                <Image
                  src="/pop-up.png"
                  alt="Vacation webinar promotional"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 bg-black/20"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col justify-start px-6 pt-10 ">
                  <h3 className="text-xl font-semi-bold  text-white md:text-xl">
                    Your Free Vacation Awaits!
                  </h3>
                  <h4 className="mt-4 text-xl font-semi-bold  text-center text-white md:text-xl">
                    Join Our Index Universal Life Webinar
                  </h4>
                </div>
              </div>

              {/* Right content */}
              <div className="max-h-[70vh] overflow-y-auto p-5 md:col-span-5 md:max-h-none md:p-8">
                <p className="text-sm text-black/80 md:text-base">
                  Hello! I&apos;m thrilled to share an incredible opportunity
                  with you: a complimentary vacation or cruise just for
                  attending our Index Universal Life webinar. This isn’t your
                  average webinar; it’s a transformative experience that can
                  equip you with essential strategies to fund your
                  children&apos;s college education, eliminate debt, and ensure
                  a luxurious retirement.
                </p>
                <p className="mt-4 text-sm text-black/80 md:text-base">
                  Rest assured, we don’t collect any personal information, and
                  you will receive a vacation voucher valid for 18 months. This
                  is your chance to access valuable insights that could
                  profoundly reshape your financial future. I genuinely believe
                  this experience will be gratifying for you. Let me help you
                  embark on a journey that could enhance your life and lead you
                  to a prosperous retirement! I want to share an exciting offer
                  with you: a complimentary vacation or cruise for participating
                  in our Index Universal Life webinar. This is more than just a
                  webinar; it’s a chance to learn strategies that can secure
                  your children&apos;s college education, get you out of debt,
                  and help you enjoy a luxurious retirement.
                </p>

                {/* Email form */}
                <form
                  className="mt-6 space-y-3"
                  action="mailto:annatcorcino@yahoo.com"
                  method="POST"
                  encType="text/plain"
                  onSubmit={() => {
                    setTimeout(() => setShowPopup(false), 500);
                  }}
                >
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="Enter you Email Address"
                    className="w-full rounded-md border border-black/20 px-4 py-3 text-black outline-none placeholder:text-black/40"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-[48px] w-full items-center justify-center rounded-md bg-teal-500 font-semibold text-white transition-colors hover:bg-teal-600"
                  >
                    SIGN ME UP!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <HeroSlider slides={slides} />

      {/* Services */}
      <section
        id="services"
        className="relative bg-[linear-gradient(to_bottom,#023A62_0%,#0A6C8E_50%,#0893D2_100%)] py-1 md:py-1"
      >
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="mb-16 text-center text-3xl font-semi-bold text-teal-300 md:text-4xl">
            Our Services
          </h2>

          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <div className="my-12 flex items-center justify-center md:mt-16">
            <a
              href="/contact"
              className="inline-flex h-[69px] w-[199px] items-center justify-center rounded-[10px] bg-teal-400 font-semibold text-[24px] text-black transition-colors hover:bg-teal-500"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Testimonials />

      <ReputableInstitutions />

      <NeedHelpSection />

      <NewsletterSection />

      <Footer />
    </>
  );
}

"use client";
import HeroSlider from "./components/HeroSlider";
import ServiceCard from "./components/ServiceCard";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ReputableInstitutions from "./components/ReputableInstitutions";
import NeedHelpSection from "./components/NeedHelpSection";

export default function Home() {
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
    },
    {
      title: "Health Insurance",
      description: "Affordable coverage for your health and peace of mind.",
      cta: "Learn More >>>",
      icon: "/health.png",
    },
    {
      title: "Accident Insurance",
      description: "Stay protected and confident in every situation.",
      cta: "Learn More >>>",
      icon: "/accident.png",
    },
    {
      title: "Indexed Universal Life",
      description: "Grow savings while protecting your loved ones.",
      cta: "Learn More >>>",
      icon: "/IUL.png",
    },
    {
      title: "Annuities",
      description: "Turn your savings into steady lifetime income.",
      cta: "Learn More >>>",
      icon: "/ann-logo.png",
    },
    {
      title: "Free Consultation",
      description: "Get expert guidance tailored to your needs.",
      cta: "Contact Us >>>",
      icon: "/con.png",
    },
  ];

  return (
    <>
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
              href="#quote"
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
    </>
  );
}

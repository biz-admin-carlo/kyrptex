import Footer from "@/app/components/Footer";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "What types of insurance do you offer?",
    a: "We provide Health, Accident, and Life insurance, as well as Indexed Universal Life (IUL) and Annuities. We also offer free consultations to help you choose the best plan for your needs.",
  },
  {
    q: "How do I know which plan is right for me?",
    a: "Our licensed agents will guide you through your options based on your goals, lifestyle, and budget. We help you compare plans and find one that gives you the right balance of coverage and cost.",
  },
  {
    q: "What is the difference between life insurance and indexed universal life (IUL)?",
    a: "Life insurance provides financial protection for your loved ones through a guaranteed death benefit. An IUL also includes a savings component that can grow over time based on market performance, giving you both protection and long‑term value.",
  },
  {
    q: "Do you offer plans for families and businesses?",
    a: "Yes. We offer flexible insurance solutions for individuals, families, and business owners. Our goal is to make sure everyone you care about is fully protected.",
  },
  {
    q: "How can I get a quote?",
    a: "You can request a free quote directly through our website by filling out a short form. One of our team members will contact you to discuss your options and provide a personalized estimate.",
  },
  {
    q: "Are consultations really free?",
    a: "Yes, our consultations are completely free. There is no cost or obligation to sign up. We simply want to help you understand your options and make informed decisions.",
  },
  {
    q: "What happens after I apply for insurance?",
    a: "Once you submit your application, our team reviews your information and helps you complete any necessary requirements. We keep you updated every step of the way until your policy is active.",
  },
  {
    q: "Can I make changes to my policy later?",
    a: "Yes. Many of our plans are flexible and can be adjusted as your needs change. You can contact our team anytime to update your coverage or add additional benefits.",
  },
  {
    q: "What makes KYRPTEX Insurance Services different?",
    a: "We believe in honesty, transparency, and genuine care for every client. Our mission is to help you protect what matters most with solutions that are clear, affordable, and built around your life.",
  },
  {
    q: "How can I contact your team?",
    a: "You can reach us through our contact form, by phone, or by booking a free consultation online. Our support team is always ready to assist you with any questions or concerns.",
  },
];

export default function FAQsPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-[#023A62] py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-[#22C9C7] md:text-6xl">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Everything You Need to Know
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-white/90 text-sm md:text-base">
            Get the clarity and confidence you deserve. Our FAQ section covers
            what you need to know about coverage, benefits, and how we can
            support you.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div>
            {faqs.map((item) => (
              <div key={item.q} className="py-6">
                {/* teal line first */}
                <div className="mb-3 h-[2px] w-full bg-[#22C9C7]" />
                {/* accordion body */}
                <details open className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="text-[15px] font-semibold text-black md:text-[16px]">
                      {item.q}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-1 h-4 w-4 text-[#22C9C7] transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="pt-2 text-[13px] leading-relaxed text-black/80 md:text-[14px]">
                    {item.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

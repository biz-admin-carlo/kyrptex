import Image from "next/image";
export default function WhyChooseUs() {
  const features = [
    {
      title: "3+ Years of Experience",
      subtitle: "A decade of trusted service.",
      icon: "experience",
    },
    {
      title: "95% Claim Approval Rate",
      subtitle: "Fast, reliable claims you can trust.",
      icon: "approval",
    },
    {
      title: "Customizable Plans",
      subtitle: "Coverage that fits your needs.",
      icon: "plans",
    },
    {
      title: "24/7 Support",
      subtitle: "Always available.",
      icon: "support",
    },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case "experience":
        return (
          <div className="relative h-20 w-20">
            <Image
              src="/exp.png"
              alt="Experience"
              fill
              className="object-contain"
            />
          </div>
        );
      case "approval":
        return (
          <div className="relative h-20 w-20">
            <Image
              src="/approval.png"
              alt="Approval rate"
              fill
              className="object-contain"
            />
          </div>
        );
      case "plans":
        return (
          <div className="relative h-20 w-20">
            <Image
              src="/Custom.png"
              alt="Customizable plans"
              fill
              className="object-contain"
            />
          </div>
        );
      case "support":
        return (
          <div className="relative h-20 w-20">
            <Image
              src="/support.png"
              alt="24/7 support"
              fill
              className="object-contain"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="mb-10 text-center text-3xl font-semi-bold text-black md:mb-14 md:text-4xl">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-[18px] border-5 border-black/90 p-6"
            >
              <div className="flex items-center gap-4">
                {renderIcon(f.icon)}
                <h3 className="text-lg text-center font-semibold text-black md:text-xl">
                  {f.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-center text-black/70">
                {f.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

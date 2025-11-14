import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function IndexedUniversalLifePage() {
  return (
    <ServiceTemplate
      bannerImage="/iul-banner.png"
      bannerTitle="Indexed Universal Life (IUL)"
      bannerSubtitle="Grow Wealth. Protect Family. Live Free."
      bannerLead="An IUL policy helps you build cash value while safeguarding your legacy with smart protection for today and tomorrow."
      descriptionTitle="The Smarter Way to Protect and Grow"
      descriptionIntro="An Indexed Universal Life insurance plan combines lifelong protection with the potential for market‑linked growth. You can accumulate cash value over time and use it for education, retirement, or emergencies—all while keeping your family protected."
      includedItems={[
        "Flexible premiums and adjustable benefits",
        "Tax‑deferred cash value accumulation",
        "Growth linked to major market indexes",
        "Access to funds through policy loans",
      ]}
      audienceItems={[
        "Families planning for long‑term goals",
        "Individuals seeking both protection and investment",
        "Entrepreneurs and professionals",
        "Anyone building wealth strategically",
      ]}
    />
  );
}

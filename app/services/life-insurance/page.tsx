import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function LifeInsurancePage() {
  return (
    <ServiceTemplate
      bannerImage="/life-insurance-banner.png"
      bannerTitle="Life Insurance"
      bannerSubtitle="Your Promise, Their Protection"
      bannerLead="Give your loved ones lasting security with life insurance that ensures their financial stability no matter what life brings."
      descriptionTitle="Protection That Lasts a Lifetime"
      descriptionIntro="Life Insurance provides your family with financial support when it’s needed most. It’s more than just a policy—it’s a legacy of care and responsibility. Whether you’re looking for short‑term coverage or lifelong protection, we’ll help you find the right plan to safeguard your loved ones’ future."
      includedItems={[
        "Term Life and Whole Life policy options",
        "Guaranteed death benefit payouts",
        "Living benefits for illness or disability",
        "Tax‑advantaged savings opportunities",
      ]}
      audienceItems={[
        "Families wanting financial security",
        "Parents planning for their children’s future",
        "Business owners protecting their partners",
        "Anyone building a lasting legacy",
      ]}
    />
  );
}

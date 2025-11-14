import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function AccidentInsurancePage() {
  return (
    <ServiceTemplate
      bannerImage="/accident-insurance-banner.png"
      bannerTitle="Accident Insurance"
      bannerSubtitle="Prepared for Life’s Surprises"
      bannerLead="Protect yourself and your family from the financial strain of unexpected injuries because accidents should never derail your future."
      descriptionTitle="Financial Protection When You Need It Most"
      descriptionIntro="Accidents can happen anytime, and medical costs can quickly add up. Our Accident Insurance provides fast financial support for hospital care, recovery, and income replacement. You’ll have the security you need to stay focused on getting better while we take care of the financial side."
      includedItems={[
        "Lump-sum cash benefits for covered injuries",
        "Hospital and emergency expense coverage",
        "Recovery and rehabilitation benefits",
        "Family plan options available",
      ]}
      audienceItems={[
        "Active individuals and workers",
        "Families seeking added protection",
        "Self-employed professionals",
        "Anyone wanting extra peace of mind",
      ]}
    />
  );
}

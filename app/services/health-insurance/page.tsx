import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function HealthInsurancePage() {
  return (
    <ServiceTemplate
      bannerImage="/health-insurance-banner.png"
      bannerTitle="Health Insurance"
      bannerSubtitle="Stay Covered, Stay Confident"
      bannerLead="Affordable health insurance that puts your wellness first because peace of mind is priceless."
      descriptionTitle="Reliable Coverage for Every Stage of Life"
      descriptionIntro="Your health deserves the best protection. Our Health Insurance plans are designed to give you access to quality medical care when you need it most. Whether it’s a routine checkup or an unexpected emergency, we ensure you can focus on recovery instead of medical bills. With flexible options and expert support, you can choose a plan that fits your needs and budget."
      includedItems={[
        "Hospitalization and outpatient coverage",
        "Prescription and preventive care benefits",
        "Access to nationwide healthcare networks",
        "Emergency and critical illness protection",
      ]}
      audienceItems={[
        "Individuals seeking personal health protection",
        "Families wanting complete medical coverage",
        "Employees and business owners",
        "Anyone looking for reliable healthcare security",
      ]}
    />
  );
}

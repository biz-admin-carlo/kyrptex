import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function AnnuitiesPage() {
  return (
    <ServiceTemplate
      bannerImage="/annuities-banner.png"
      bannerTitle="Annuities"
      bannerSubtitle="Turn Savings into Lifetime Security"
      bannerLead="Enjoy retirement with guaranteed income for life because your golden years deserve lasting peace of mind."
      descriptionTitle="Your Partner in a Confident Retirement"
      descriptionIntro="Annuities help transform your savings into a steady stream of income that can last for life. Whether you prefer predictable returns or growth potential, our plans ensure that you can retire comfortably with financial confidence."
      includedItems={[
        "Fixed and indexed annuity options",
        "Lifetime income guarantees",
        "Tax‑deferred earnings",
        "Optional death benefits for loved ones",
      ]}
      audienceItems={[
        "Retirees and pre‑retirees",
        "Investors seeking guaranteed income",
        "Professionals planning long‑term security",
        "Anyone who never wants to outlive their savings",
      ]}
    />
  );
}



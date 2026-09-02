import type { Metadata } from "next";
import { Address, EmailLink, LegalPage } from "../legal-page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Legal notice | Release Safety",
  description: "Legal notice and provider information for Release Safety.",
};

export default function ImprintPage() {
  return (
    <LegalPage
      language="en"
      eyebrow="Legal information"
      title="Legal notice"
      updatedLabel="Provider information pursuant to section 5 DDG"
      backLabel="Back to the home page"
      footerLabel="Legal notice · Release Safety"
      sections={[
        {
          heading: "Service provider",
          content: (
            <>
              <Address english />
              <p>Sole proprietor</p>
            </>
          ),
        },
        {
          heading: "Contact",
          content: (
            <p>
              Email: <EmailLink />
            </p>
          ),
        },
      ]}
    />
  );
}

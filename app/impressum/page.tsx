import type { Metadata } from "next";
import { Address, EmailLink, LegalPage } from "../legal-page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Impressum | Release Safety",
  description: "Impressum und Anbieterkennzeichnung von Release Safety.",
};

export default function ImprintPage() {
  return (
    <LegalPage
      language="de"
      eyebrow="Rechtliche Informationen"
      title="Impressum"
      updatedLabel="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)"
      backLabel="Zur Startseite"
      footerLabel="Impressum · Release Safety"
      sections={[
        {
          heading: "Diensteanbieter",
          content: (
            <Address />
          ),
        },
        {
          heading: "Kontakt",
          content: (
            <p>
              E-Mail: <EmailLink />
            </p>
          ),
        },
      ]}
    />
  );
}

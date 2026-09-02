import type { Metadata } from "next";
import { Address, EmailLink, LegalPage } from "../legal-page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy | Release Safety",
  description: "Privacy information for the Release Safety website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      language="en"
      eyebrow="Legal information"
      title="Privacy policy"
      updatedLabel="Last updated: September 2026"
      backLabel="Back to the home page"
      footerLabel="Privacy · Release Safety"
      sections={[
        {
          heading: "1. Controller",
          content: (
            <>
              <Address english />
              <p>
                Email: <EmailLink />
              </p>
            </>
          ),
        },
        {
          heading: "2. Hosting with GitHub Pages",
          content: (
            <>
              <p>
                This website is hosted through GitHub Pages, a GitHub service.
                According to GitHub, a visitor&apos;s IP address is logged and
                stored for security purposes when a GitHub Pages site is
                accessed. GitHub may also process technical usage data such as
                access time and type, device and browser information, pages
                viewed and the referring page.
              </p>
              <p>
                The website is provided on the basis of Article 6(1)(f) GDPR.
                The legitimate interest is the secure, stable and efficient
                provision of this online service. GitHub determines the
                specific retention period; we do not have access to the server
                logs.
              </p>
              <p>
                GitHub may also process data outside the European Economic Area,
                particularly in the United States. GitHub describes the
                applicable safeguards and legal bases in its privacy statement.
              </p>
              <p>
                Further information: {" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  rel="noreferrer"
                >
                  GitHub General Privacy Statement
                </a>
                .
              </p>
            </>
          ),
        },
        {
          heading: "3. Contact by email",
          content: (
            <>
              <p>
                If you contact us by email, we process the information you send
                us, in particular your email address, name, message content and
                technical message metadata, in order to respond and communicate
                with you.
              </p>
              <p>
                Where your request relates to entering into or performing a
                contract, the legal basis is Article 6(1)(b) GDPR. In all other
                cases, processing is based on Article 6(1)(f) GDPR; our
                legitimate interest is responding to communications addressed
                to us. The data is deleted once the request has been fully dealt
                with, unless statutory retention duties or other legitimate
                reasons require continued storage.
              </p>
            </>
          ),
        },
        {
          heading: "4. Cookies and audience measurement",
          content: (
            <p>
              This website does not itself use cookies, analytics, tracking or
              advertising technology. We have no direct control over any data
              processing carried out by the hosting provider.
            </p>
          ),
        },
        {
          heading: "5. Recipients and transfers",
          content: (
            <p>
              Recipients of personal data may include GitHub as the hosting
              provider and the email services involved in email communication.
              Data is otherwise transferred only where necessary to respond to
              your request, where legally required or where you have consented.
            </p>
          ),
        },
        {
          heading: "6. Your rights",
          content: (
            <>
              <p>
                Subject to the statutory conditions, you have rights of access,
                rectification, erasure, restriction, and data portability. You
                may also object, on grounds relating to your particular
                situation, to processing based on Article 6(1)(f) GDPR.
              </p>
              <p>
                You also have the right to lodge a complaint with a data
                protection supervisory authority. The Bavarian State Office for
                Data Protection Supervision is generally responsible for
                private-sector organisations in Bavaria: {" "}
                <a href="https://www.lda.bayern.de/" rel="noreferrer">
                  www.lda.bayern.de
                </a>
                .
              </p>
            </>
          ),
        },
        {
          heading: "7. Updates to this privacy policy",
          content: (
            <p>
              We update this privacy policy when the website, the services used
              or the applicable legal requirements change.
            </p>
          ),
        },
      ]}
    />
  );
}

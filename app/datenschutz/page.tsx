import type { Metadata } from "next";
import { Address, EmailLink, LegalPage } from "../legal-page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Datenschutz | Release Safety",
  description: "Datenschutzerklärung für die Website von Release Safety.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      language="de"
      eyebrow="Rechtliche Informationen"
      title={"Datenschutz\u00aderklärung"}
      updatedLabel="Stand: September 2026"
      backLabel="Zur Startseite"
      footerLabel="Datenschutz · Release Safety"
      sections={[
        {
          heading: "1. Verantwortlicher",
          content: (
            <>
              <Address />
              <p>
                E-Mail: <EmailLink />
              </p>
            </>
          ),
        },
        {
          heading: "2. Hosting über GitHub Pages",
          content: (
            <>
              <p>
                Diese Website wird über GitHub Pages bereitgestellt, einen
                Dienst von GitHub. Beim Besuch einer GitHub-Pages-Website wird
                die IP-Adresse der Besucher nach Angaben von GitHub zu
                Sicherheitszwecken protokolliert und gespeichert. GitHub kann
                außerdem technische Nutzungsdaten wie Zeitpunkt und Art des
                Zugriffs, Geräte- und Browserinformationen, aufgerufene Seiten
                sowie die zuvor besuchte Seite verarbeiten.
              </p>
              <p>
                Die Bereitstellung der Website erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in einer
                sicheren, stabilen und effizienten Bereitstellung dieses
                Online-Angebots. Die konkrete Speicherdauer dieser Daten wird
                von GitHub bestimmt; wir haben auf die Serverprotokolle keinen
                Zugriff.
              </p>
              <p>
                GitHub kann Daten auch außerhalb des Europäischen
                Wirtschaftsraums, insbesondere in den USA, verarbeiten. GitHub
                informiert in seiner Datenschutzerklärung über die hierfür
                eingesetzten Garantien und Rechtsgrundlagen.
              </p>
              <p>
                Weitere Informationen: {" "}
                <a
                  href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
                  rel="noreferrer"
                >
                  Datenschutzerklärung von GitHub
                </a>
                .
              </p>
            </>
          ),
        },
        {
          heading: "3. Kontaktaufnahme per E-Mail",
          content: (
            <>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von
                Ihnen übermittelten Angaben – insbesondere E-Mail-Adresse,
                Name, Inhalt und technische Metadaten der Nachricht – um Ihre
                Anfrage zu bearbeiten und mit Ihnen zu kommunizieren.
              </p>
              <p>
                Bezieht sich die Anfrage auf die Anbahnung oder Durchführung
                eines Vertrags, ist Art. 6 Abs. 1 lit. b DSGVO die
                Rechtsgrundlage. In allen anderen Fällen erfolgt die
                Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO;
                unser berechtigtes Interesse besteht in der Bearbeitung der an
                uns gerichteten Kommunikation. Die Daten werden gelöscht, wenn
                die Anfrage abschließend bearbeitet ist und keine gesetzlichen
                Aufbewahrungspflichten oder sonstigen berechtigten Gründe für
                eine weitere Speicherung bestehen.
              </p>
            </>
          ),
        },
        {
          heading: "4. Cookies und Reichweitenmessung",
          content: (
            <p>
              Diese Website setzt selbst keine Cookies ein und verwendet keine
              eigene Analyse-, Tracking- oder Werbetechnik. Auf eine mögliche
              Datenverarbeitung durch den Hostinganbieter haben wir keinen
              unmittelbaren Einfluss.
            </p>
          ),
        },
        {
          heading: "5. Empfänger und Datenübermittlung",
          content: (
            <p>
              Empfänger personenbezogener Daten können GitHub als
              Hostinganbieter sowie die an der E-Mail-Kommunikation beteiligten
              E-Mail-Dienste sein. Eine weitere Übermittlung erfolgt nur, wenn
              sie zur Bearbeitung Ihrer Anfrage erforderlich ist, eine
              gesetzliche Verpflichtung besteht oder Sie eingewilligt haben.
            </p>
          ),
        },
        {
          heading: "6. Ihre Rechte",
          content: (
            <>
              <p>
                Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das
                Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung und Datenübertragbarkeit. Sie können außerdem aus
                Gründen, die sich aus Ihrer besonderen Situation ergeben, einer
                auf Art. 6 Abs. 1 lit. f DSGVO gestützten Verarbeitung
                widersprechen.
              </p>
              <p>
                Sie haben zudem das Recht, sich bei einer
                Datenschutzaufsichtsbehörde zu beschweren. Für nicht-öffentliche
                Stellen in Bayern ist regelmäßig das Bayerische Landesamt für
                Datenschutzaufsicht zuständig: {" "}
                <a href="https://www.lda.bayern.de/" rel="noreferrer">
                  www.lda.bayern.de
                </a>
                .
              </p>
            </>
          ),
        },
        {
          heading: "7. Aktualisierung dieser Datenschutzerklärung",
          content: (
            <p>
              Wir passen diese Datenschutzerklärung an, wenn sich die Website,
              die eingesetzten Dienste oder die rechtlichen Anforderungen
              ändern.
            </p>
          ),
        },
      ]}
    />
  );
}

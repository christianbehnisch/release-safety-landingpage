type LegalSection = {
  heading: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  backLabel: string;
  eyebrow: string;
  footerLabel: string;
  language: "de";
  sections: LegalSection[];
  title: string;
  updatedLabel: string;
};

export const owner = {
  name: "Christian Behnisch",
  street: "Zeisigweg 13",
  city: "91056 Erlangen",
  countryDe: "Deutschland",
  email: "christian.behnisch@outlook.de",
} as const;

export function LegalPage({
  backLabel,
  eyebrow,
  footerLabel,
  language,
  sections,
  title,
  updatedLabel,
}: LegalPageProps) {
  return (
    <main className="legal-page" lang={language}>
      <header className="site-header legal-header">
        <a className="brand" href="./" aria-label={backLabel}>
          <span className="brand-mark" aria-hidden="true">
            R<span>S</span>
          </span>
          <span>Release Safety</span>
        </a>
        <a className="text-link legal-back" href="./">
          <span aria-hidden="true">←</span> {backLabel}
        </a>
      </header>

      <article className="legal-shell">
        <header className="legal-title">
          <p className="eyebrow">
            <span className="live-dot" aria-hidden="true" /> {eyebrow}
          </p>
          <h1>{title}</h1>
          <p>{updatedLabel}</p>
        </header>

        <div className="legal-content">
          {sections.map(({ heading, content }) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <div className="legal-section-body">{content}</div>
            </section>
          ))}
        </div>
      </article>

      <footer className="legal-page-footer">
        <a className="brand brand-footer" href="./">
          <span className="brand-mark" aria-hidden="true">
            R<span>S</span>
          </span>
          <span>Release Safety</span>
        </a>
        <p>{footerLabel}</p>
        <p>© {new Date().getFullYear()} Release Safety</p>
      </footer>
    </main>
  );
}

export function Address() {
  return (
    <address>
      {owner.name}
      <br />
      {owner.street}
      <br />
      {owner.city}
      <br />
      {owner.countryDe}
    </address>
  );
}

export function EmailLink() {
  return <a href={`mailto:${owner.email}`}>{owner.email}</a>;
}

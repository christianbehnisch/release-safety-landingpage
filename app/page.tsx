const contactHref =
  "mailto:christian.behnisch@outlook.de?subject=Anfrage%20Release-Safety-Pilot";

const Arrow = () => <span aria-hidden="true">↗</span>;

const Check = () => (
  <span className="check" aria-hidden="true">
    ✓
  </span>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Release Safety – Startseite">
          <span className="brand-mark" aria-hidden="true">
            R<span>S</span>
          </span>
          <span>Release Safety</span>
        </a>

        <nav aria-label="Hauptnavigation">
          <a href="#problem">Warum E2E?</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#pilot">Pilot</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="button button-small" href="#kontakt">
          Pilot besprechen <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" aria-hidden="true" /> Managed E2E Testing
            für SaaS
          </p>
          <h1>
            Ihre wichtigsten Kundenprozesse. <em>Bei jedem Release geprüft.</em>
          </h1>
          <p className="hero-lead">
            Ich automatisiere die kritischen User Journeys Ihrer SaaS-Anwendung
            und integriere sie in Ihren Release-Prozess – auf Wunsch ohne Zugriff
            auf Ihren Anwendungscode.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#kontakt">
              Pilotprojekt anfragen <Arrow />
            </a>
            <a className="text-link" href="#ablauf">
              So funktioniert es <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ul className="trust-list" aria-label="Vorteile">
            <li>
              <Check /> In 2–4 Wochen startklar
            </li>
            <li>
              <Check /> Playwright-basiert
            </li>
            <li>
              <Check /> Tests bleiben übertragbar
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Persönlicher Ansprechpartner">
          <div className="portrait-frame">
            <img
              src="./portrait.jpg"
              alt="Persönlicher Ansprechpartner für automatisierte Release-Absicherung"
              width="1010"
              height="1280"
              fetchPriority="high"
            />
            <div className="portrait-wash" aria-hidden="true" />
          </div>

          <div className="release-card">
            <div className="release-card-top">
              <span>Release Check</span>
              <span className="status-badge">Bestanden</span>
            </div>
            <strong>Alle kritischen Journeys laufen.</strong>
            <div className="progress-track" aria-hidden="true">
              <span />
            </div>
            <div className="release-meta">
              <span>3 / 3 Journeys</span>
              <span>02:18 min</span>
            </div>
          </div>

          <div className="photo-caption">
            <span className="caption-line" aria-hidden="true" />
            <span>
              Persönlich betreut
              <small>von Setup bis Fehleranalyse</small>
            </span>
          </div>
        </div>
      </section>

      <section className="value-strip" aria-label="Leistungsmerkmale">
        <div>
          <span className="value-number">01</span>
          <p>
            <strong>Black-Box möglich</strong>
            Keine Freigabe des Sourcecodes nötig
          </p>
        </div>
        <div>
          <span className="value-number">02</span>
          <p>
            <strong>Direkt im Prozess</strong>
            Ausführung bei jedem relevanten Release
          </p>
        </div>
        <div>
          <span className="value-number">03</span>
          <p>
            <strong>Fehler mit Kontext</strong>
            Screenshots, Videos und Traces statt Rätselraten
          </p>
        </div>
      </section>

      <section className="section problem-section" id="problem">
        <div className="section-kicker">Das Problem</div>
        <div className="problem-grid">
          <div>
            <h2>
              Manuelle Regression kostet Zeit. Produktionsfehler kosten
              <em> Vertrauen.</em>
            </h2>
          </div>
          <div className="problem-copy">
            <p>
              Vor jedem Release klicken Entwickler dieselben Abläufe durch – oder
              hoffen, dass Unit Tests genug abdecken. Genau zwischen diesen Ebenen
              entstehen die Fehler, die Kunden tatsächlich bemerken.
            </p>
            <blockquote>
              „Funktionieren Login, Onboarding, Kernprozess und Export nach dem
              nächsten Deployment wirklich noch?“
            </blockquote>
          </div>
        </div>

        <div className="pain-cards">
          <article>
            <span className="card-icon">↻</span>
            <h3>Wiederkehrende Handarbeit</h3>
            <p>Entwicklungszeit fließt vor jedem Release in dieselben Klicktests.</p>
          </article>
          <article>
            <span className="card-icon">!</span>
            <h3>Regressionen in Produktion</h3>
            <p>Ein kleiner UI-Change unterbricht einen geschäftskritischen Ablauf.</p>
          </article>
          <article>
            <span className="card-icon">?</span>
            <h3>Unklare Fehlermeldungen</h3>
            <p>Ein roter Build zeigt den Fehler, aber nicht die verständliche Ursache.</p>
          </article>
        </div>
      </section>

      <section className="section journey-section" id="ablauf">
        <div className="journey-heading">
          <div>
            <div className="section-kicker">So wird Sicherheit konkret</div>
            <h2>Ein echter Geschäftsprozess. Durchgängig abgesichert.</h2>
          </div>
          <p>
            Beispiel Rechnungs-SaaS: Jeder Schritt wird ausgeführt und fachlich
            geprüft – nicht nur angeklickt.
          </p>
        </div>

        <div className="journey-flow" role="list" aria-label="Beispiel User Journey">
          {[
            ["01", "Login", "Testnutzer authentifiziert"],
            ["02", "Kunde anlegen", "Daten korrekt gespeichert"],
            ["03", "Rechnung erstellen", "Summe & Steuer geprüft"],
            ["04", "Versenden", "Status aktualisiert"],
            ["05", "PDF prüfen", "Dokument verfügbar"],
          ].map(([number, title, copy], index) => (
            <article className="journey-step" role="listitem" key={number}>
              <div className="step-top">
                <span>{number}</span>
                {index < 4 && <span className="step-arrow">→</span>}
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="step-check" aria-hidden="true">
                ✓
              </span>
            </article>
          ))}
        </div>

        <div className="deliverables">
          <article>
            <span className="deliverable-label">01 · Automatisierung</span>
            <h3>Stabile Tests statt Klick-Skripte</h3>
            <p>
              Robuste Selektoren, reproduzierbare Testdaten und fachliche
              Assertions für die wirklich relevanten Ergebnisse.
            </p>
          </article>
          <article>
            <span className="deliverable-label">02 · Integration</span>
            <h3>Ein Release-Signal, das zählt</h3>
            <p>
              Die Journeys laufen manuell, per Webhook oder in Ihrer bestehenden
              CI/CD-Pipeline – passend zu Ihrem Prozess.
            </p>
          </article>
          <article>
            <span className="deliverable-label">03 · Diagnose</span>
            <h3>Verstehen, was schiefging</h3>
            <p>
              Bei Fehlern liefern Trace, Screenshot und Video sofort den nötigen
              Kontext für eine schnelle Entscheidung.
            </p>
          </article>
        </div>
      </section>

      <section className="section pilot-section" id="pilot">
        <div className="pilot-card">
          <div className="pilot-intro">
            <p className="eyebrow eyebrow-light">Der kontrollierte Einstieg</p>
            <h2>Release-Safety-Pilot</h2>
            <p>
              Kein Großprojekt. Wir starten mit den drei Prozessen, deren Ausfall
              Ihre Kunden und Ihr Team am stärksten treffen würde.
            </p>
          </div>

          <div className="pilot-details">
            <ul>
              <li>
                <Check /> Auswahl der drei kritischsten User Journeys
              </li>
              <li>
                <Check /> Automatisierung mit Playwright
              </li>
              <li>
                <Check /> Ausführung gegen Ihre Testumgebung
              </li>
              <li>
                <Check /> Screenshots und Trace bei Fehlern
              </li>
              <li>
                <Check /> Dokumentation und Abschlussgespräch
              </li>
            </ul>
            <div className="pilot-facts">
              <div>
                <span>Umfang</span>
                <strong>3 Journeys</strong>
              </div>
              <div>
                <span>Zeitrahmen</span>
                <strong>2–4 Wochen</strong>
              </div>
              <div>
                <span>Investition</span>
                <strong>ab 2.900 €</strong>
              </div>
            </div>
            <a className="button button-light" href="#kontakt">
              Pilot unverbindlich besprechen <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div>
          <div className="section-kicker">Guter Fit?</div>
          <h2>Für SaaS-Teams, die schnell releasen – aber nicht blind.</h2>
        </div>
        <div className="fit-checklist">
          {[
            "Sie betreiben eine laufende SaaS-Webanwendung.",
            "Ihr Team releast mindestens mehrmals im Monat.",
            "Regressionstests werden teilweise manuell ausgeführt.",
            "Eine große eigene QA-Abteilung gibt es noch nicht.",
            "Drei bis zehn zentrale Kundenprozesse sind klar benennbar.",
          ].map((item) => (
            <div key={item}>
              <Check /> <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-heading">
          <div className="section-kicker">Häufige Fragen</div>
          <h2>Klarheit vor dem ersten Test.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Brauchen Sie Zugriff auf unseren Sourcecode?</summary>
            <p>
              Nicht zwingend. Für Black-Box-Tests reichen häufig eine geeignete
              Testumgebung, stabile Testkonten und ein definierter Weg für
              Testdaten. Für die CI/CD-Anbindung kann eine kleine Konfiguration
              durch Ihr Team nötig sein.
            </p>
          </details>
          <details>
            <summary>Was passiert, wenn sich die Oberfläche ändert?</summary>
            <p>
              Änderungen gehören zum Betrieb einer E2E-Suite. Im laufenden
              Service werden betroffene Tests angepasst und Fehlalarme von echten
              Regressionen getrennt.
            </p>
          </details>
          <details>
            <summary>Blockieren die Tests automatisch unser Deployment?</summary>
            <p>
              Nur wenn Sie das möchten. Zu Beginn empfiehlt sich meist ein
              informatives Release-Signal. Sobald die Journeys stabil laufen,
              können ausgewählte kritische Tests als echtes Release Gate dienen.
            </p>
          </details>
          <details>
            <summary>Gehören uns die erstellten Tests?</summary>
            <p>
              Ja. Die Tests basieren auf Standard-Playwright und können
              dokumentiert übergeben oder in Ihrer eigenen Infrastruktur
              betrieben werden.
            </p>
          </details>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light">Nächster Schritt</p>
          <h2>
            Welche drei Prozesse dürfen bei Ihrem nächsten Release
            <em> nicht ausfallen?</em>
          </h2>
        </div>
        <div className="contact-action">
          <p>
            In einem kurzen Erstgespräch klären wir, ob sich Ihre Anwendung für
            einen Release-Safety-Pilot eignet.
          </p>
          <a className="button button-light" href={contactHref}>
            Gespräch anfragen <Arrow />
          </a>
          <small>Unverbindlich · 30 Minuten · Keine Verkaufspräsentation</small>
        </div>
      </section>

      <footer>
        <a className="brand brand-footer" href="#top">
          <span className="brand-mark" aria-hidden="true">
            R<span>S</span>
          </span>
          <span>Release Safety</span>
        </a>
        <p>Managed E2E Testing für SaaS · Made in Germany</p>
        <p>© {new Date().getFullYear()} Release Safety</p>
      </footer>
    </main>
  );
}

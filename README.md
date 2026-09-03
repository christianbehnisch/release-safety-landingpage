# Release Safety Landingpage

Die öffentliche Black-Box-Referenz mit GitHub Workflow und interaktiver
Webanwendung liegt im [Release-Safety-Demo-Repository](https://github.com/christianbehnisch/release-safety-demo).

Statische, responsive Landingpage für einen Managed-E2E-Testing-Service für
Web-, iOS- und Android-Anwendungen. Die Seite nutzt Playwright und Appium als
Technologien, verkauft aber das Ergebnis: Release-Sicherheit für kritische Kundenprozesse. Die deutsche Startseite liegt
unter `/`, die englische Version unter `/en.html`.

## Vor der Veröffentlichung anpassen

Optional den Namen „Release Safety“ durch die endgültige Marke ersetzen.

## Lokal starten

```bash
npm install
npm run dev
```

## GitHub Pages

Das Repository zu GitHub pushen und unter **Settings → Pages → Source** die
Option **GitHub Actions** auswählen. Jeder Push auf `main` baut und veröffentlicht
die statische Seite. Der Unterpfad des Repositorys wird beim Build automatisch
berücksichtigt.

## Projekt prüfen

```bash
npm test
```

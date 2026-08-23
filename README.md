# Release Safety Landingpage

Statische, responsive Landingpage für einen Managed-E2E-Testing-Service für
SaaS-Anwendungen. Die Seite nutzt Playwright als Technologie, verkauft aber das Ergebnis:
Release-Sicherheit für kritische Kundenprozesse.

## Vor der Veröffentlichung anpassen

1. Preis und Leistungsumfang des Piloten final bestätigen.
2. Impressum und Datenschutzerklärung ergänzen.
3. Optional den Namen „Release Safety“ durch die endgültige Marke ersetzen.

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

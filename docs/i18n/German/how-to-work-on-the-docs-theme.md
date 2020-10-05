# Wie man mit dem Thema Dokumentation arbeitet

> [!HINWEIS] Eine kurze Erinnerung, dass Sie nichts für die Bearbeitung des Inhalts der Dokumentationsseite einrichten müssen.
> 
> Um an den Richtlinien für den Beitrag zu arbeiten, können Sie Dateien in der `-Dokumentation` bearbeiten oder hinzufügen [die hier verfügbar sind](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Wenn Ihre Änderungen zusammengeführt werden, wird sie automatisch auf der Dokumentationsseite zur Verfügung gestellt.

## Struktur der Dokumentations-Website

Die Seite wird mit [`docsify`](https://docsify.js.org)generiert und mit GitHub Seiten geliefert.

Normalerweise müssten Sie keine Konfiguration ändern oder die Site lokal bauen. Falls Sie interessiert sind, dann ist es folgendermaßen:

- Die Quelle dieser Seite ist in [`docs/index.html`](index.html) verfügbar.
- Wir liefern diese Datei als SPA mit `docsify` und GitHub Seiten.
- Das `docsify` Skript generiert den Inhalt von `Markdown` Dateien in `Dokumentation` Verzeichnis auf Anfrage.
- Die Startseite wird von [`_coverpage.md`](_coverpage.md) generiert.
- die Sidebar Navigation wird von [`_sidebar.md`](_sidebar.md) generiert.

## Die Dokumentationsseite wird lokal bedient

FreeCodecamp klonen:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

`docsify` installieren:

```sh
npm install -g docsify
```

und das `/docs` Verzeichnis ausliefern

```sh
docsify dient Doktor
```

Alternativ, wenn Sie FreeCodeCamp lokal installiert haben (siehe lokale Setup-Anleitung), wir bündeln CLI mit den Entwicklungstools, so dass du `npm mit docs:serve` aus der Wurzel des Repos ausführen kannst.

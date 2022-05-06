# So arbeitest du an dem Dokumentations-Theme

> [!NOTE] Eine kurze Erinnerung daran, dass du für die Arbeit an den Inhalten für die Dokumentationsseite nichts einrichten musst.
> 
> Um an den Mitwirkungsrichtlinien zu arbeiten, kannst du Dateien im `docs`-Verzeichnis [hier verfügbar](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs) bearbeiten oder hinzufügen. Wenn deine Änderungen zusammengeführt ("merged") werden, werden sie automatisch auf der Dokumentationsseite zur Verfügung gestellt.

## Struktur der Dokumentations-Website

Die Seite wird mit [`docsify`](https://docsify.js.org) erstellt und über GitHub Pages bereitgestellt.

Normalerweise musst du keine Änderungen an der Konfiguration vornehmen oder die Website lokal erstellen. Falls es dich interessiert, so funktioniert es:

- Der Quelltext der Homepage ist in [`docs/index.html`](index.html) zu finden.
- Wir stellen diese Datei als SPA (Single Page Application) mit `docsify` und GitHub Pages bereit.
- Das `docsify`-Skript generiert bei Bedarf den Inhalt der `markdown`-Dateien im `docs`-Verzeichnis.
- Die Homepage wird aus der [`_coverpage.md`](_coverpage.md) erstellt.
- die Navigation in der Seitenleiste wird aus [`_sidebar.md`](_sidebar.md) generiert.

## Lokale Bereitstellung der Dokumentations-Website

FreeCodecamp klonen:

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

`docsify` installieren:

```console
npm install -g docsify
```

und das Verzeichnis `/docs` bereitstellen

```console
docsify serve docs
```

Alternatively, if you have installed freeCodeCamp locally (see the local setup guide), we bundled the CLI with the development tools so you can run any of the below commands as needed from the root of the repo:

### Nur die Dokumentationswebsite bereitstellen und starten

```console
npm run docs:serve
```

### Betreibe die Dokumentationswebsite neben dem freeCodeCamp lokal:

```console
npm run develop
```

> Die Dokumentationswebsite sollte unter <http://localhost:3200> zu finden sein

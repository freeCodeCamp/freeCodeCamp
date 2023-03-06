# Wie man Cypress Tests erstellt

Wenn du Änderungen an JavaScript, CSS oder HTML vornimmst, die die Funktionalität oder das Layout einer Seite verändern könnten, ist es wichtig, entsprechende [Cypress](https://docs.cypress.io)-Integrationstests hinzuzufügen.

Wie man Cypress-Tests oder "Specs" schreibt, erfährst du in der offiziellen [Dokumentation](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) von Cypress.

## Wo du einen Test hinzufügen kannst

- Cypress-Tests befinden sich im Verzeichnis `./cypress`.

- Cypress-Tests für ein Studienplanmodul befinden sich im entsprechenden Studienplanverzeichnis, d.h. `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Wie man Tests durchführt

> [!NOTE] Wenn du GitPod verwendest, lies bitte [Cypress-GitPod Setup](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Sicherstellen, dass MongoDB und Client-Anwendungen ausgeführt werden

- [Starte MongoDB und erstelle die Datenbank](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Starte die freeCodeCamp Client-Anwendung und den API-Server](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Führe die Cypress-Tests durch

Um Tests mit Produktions-Builds durchzuführen, ersetze unten `dev` durch `prd`.

- Um alle Tests im Verzeichnis `./cypress` auszuführen:

  ```console
  pnpm run cypress:dev:run
  ```

- Um einen einzelnen Test durchzuführen:

  ```console
  pnpm run cypress -- run --spec=cypress/<path_to_test_file>
  ```

  For example:

  ```console
  pnpm run cypress -- run --spec=cypress/e2e/default/landing.js
  ```

- Um einen Entwicklungs-Build zu erstellen, starte den Entwicklungsserver und führe alle vorhandenen Cypress-End-to-End-Tests aus:

  ```console
  pnpm run e2e:dev:run
  ```

## Cypress-GitPod Setup

### 1. Sicherstellen, dass die Entwicklungsumgebung läuft

Wenn das Starten der GitPod-Umgebung nicht automatisch die Umgebung aufgebaut hat:

- Starte die Datenbank

```console
mongod
```

- Richte die Datenbank ein

```console
pnpm run seed
```

- Entwickle den Server und den Client

```console
pnpm run develop
```

### 2. Cypress Build Tools installieren

```console
pnpm run cypress:install-build-tools
```

- Wenn du im Terminal dazu aufgefordert wirst, wähle dein Tastaturlayout nach Sprache/Region aus

Jetzt kann [Cypress ausgeführt werden](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)

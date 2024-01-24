# Wie man Cypress Tests erstellt

Wenn du Änderungen an JavaScript, CSS oder HTML vornimmst, die die Funktionalität oder das Layout einer Seite verändern könnten, ist es wichtig, entsprechende [Cypress](https://docs.cypress.io)-Integrationstests hinzuzufügen.

Wie man Cypress-Tests oder "Specs" schreibt, erfährst du in der offiziellen [Dokumentation](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) von Cypress.

## Where to Add a Test

- Cypress-Tests befinden sich im Verzeichnis `./cypress`.

- Cypress-Tests für ein Studienplanmodul befinden sich im entsprechenden Studienplanverzeichnis, d.h. `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## How to Run Tests

> [!NOTE] If using Gitpod, please see [Cypress-Gitpod Setup](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Ensure that MongoDB and Client Applications are Running

- [Starte MongoDB und erstelle die Datenbank](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Starte die freeCodeCamp Client-Anwendung und den API-Server](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Run the Cypress Tests

Um Tests mit Produktions-Builds durchzuführen, ersetze unten `dev` durch `prd`.

- Um alle Tests im Verzeichnis `./cypress` auszuführen:

  ```bash
  pnpm run cypress:dev:run
  ```

- Um einen einzelnen Test durchzuführen:

  ```bash
  pnpm run cypress run --spec=cypress/<path_to_test_file>
  ```

  For example:

  ```bash
  pnpm run cypress run --spec=cypress/e2e/default/landing.ts
  ```

- Um einen Entwicklungs-Build zu erstellen, starte den Entwicklungsserver und führe alle vorhandenen Cypress-End-to-End-Tests aus:

  ```bash
  pnpm run e2e:dev:run
  ```

## Cypress-Gitpod Setup

### 1. Sicherstellen, dass die Entwicklungsumgebung läuft

If starting the Gitpod environment did not automatically develop the environment:

- Follow the [MongoDB installation guide](https://www.mongodb.com/basics/get-started).
- Create a config file.

```bash
pnpm run create:shared
```

- Richte die Datenbank ein

```bash
pnpm run seed
```

- Entwickle den Server und den Client

```bash
pnpm run develop
```

### 2. Cypress Build Tools installieren

```bash
pnpm run cypress:install-build-tools
```

- Wenn du im Terminal dazu aufgefordert wirst, wähle dein Tastaturlayout nach Sprache/Region aus

Jetzt kann [Cypress ausgeführt werden](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)

## Troubleshooting

### Unable to Connect to Port 8000

If Cypress fails to run with the following error:

```
CypressError: `cy.visit()` failed trying to load:

http://localhost:3000/signin

We attempted to make an http request to this URL but the request failed without a response.

We received this error at the network level:

  > Error: connect ECONNREFUSED 127.0.0.1:8000

Common situations why this would fail:
  - you don't have internet access
  - you forgot to run / boot your web server
  - your web server isn't accessible
  - you have weird network configuration settings on your computer

This error occurred while creating the session. Because the session setup failed, we failed the test.
```

You can resolve the issue by:
- Going to the root `package.json` file and adding `--host 0.0.0.0` to the `develop:client` command:
    ```json
    "scripts": {
      "develop:client": "cd ./client && pnpm run develop --host 0.0.0.0"
    }
    ```
- Then, re-running `pnpm run develop`

# Come aggiungere test Cypress

Quando si fanno cambiamenti a JavaScript, CSS o HTML  che possono cambiare le funzionalità o il layout di una pagina è importante aggiungere corrispondenti test di integrazione [Cypress](https://docs.cypress.io).

Per imparare come scrivere test Cypress, o specs, per favore vedi la [dcoumentazione](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) ufficiale di Cypress.

## Where to Add a Test

- I test Cypress sono nella directory `./cypress`.

- I test Cypress per un modulo del curriculum sono nella corrispondente cartella del curriculum, per esempio `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## How to Run Tests

> [!NOTE] If using Gitpod, please see [Cypress-Gitpod Setup](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Ensure that MongoDB and Client Applications are Running

- [Fai partire MongoDB e fai il seed del database](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Avvia l'applicazione del client di freeCodeCamp e il server API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Run the Cypress Tests

Per eseguire i test su build di produzione, sostituisci `dev` con `prd` nella parte seguente.

- Per eseguire tutti i test nella cartella `./cypress`:

  ```console
  pnpm run cypress:dev:run
  ```

- Per eseguire un singolo test:

  ```console
  pnpm run cypress run --spec=cypress/<path_to_test_file>
  ```

  Ad esempio:

  ```console
  pnpm run cypress run --spec=cypress/e2e/default/landing.ts
  ```

- Per creare una build di sviluppo, avvia il server di sviluppo e esegui tutti i test cypress end-to-end esistenti:

  ```console
  pnpm run e2e:dev:run
  ```

## Cypress-Gitpod Setup

### 1. Assicurati che l'ambiente di sviluppo sia in esecuzione

If starting the Gitpod environment did not automatically develop the environment:

- Follow the [MongoDB installation guide](https://www.mongodb.com/basics/get-started).
- Create a config file.

```console
pnpm run create:shared
```

- Fai il seed del database

```console
pnpm run seed
```

- Sviluppa il server e il client

```console
pnpm run develop
```

### 2. Installa Cypress Build Tools

```console
pnpm run cypress:install-build-tools
```

- Quando chiesto dal terminale, seleziona il layout della tua tastiera per lingua/area

Ora, [puoi eseguire Cypress](how-to-add-cypress-tests.md#_2-esegui-i-test-cypress)

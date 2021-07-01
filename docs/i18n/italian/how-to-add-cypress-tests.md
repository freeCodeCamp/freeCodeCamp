# Come aggiungere test Cypress

Quando si fanno cambiamenti a JavaScript, CSS o HTML  che possono cambiare le funzionalità o il layout di una pagina è importante aggiungere corrispondenti test di integrazione [Cypress](https://docs.cypress.io).

Per imparare come scrivere test Cypress, o specs, per favore vedi la [dcoumentazione](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) ufficiale di Cypress.

> Nota: quando scrivi i test per freeCodeCamp, ricorda di aggiungere `/* global cy */` in cima al file per evitare problemi con ESLint.

## Dove aggiungere un test

- I test Cypress sono nella directory `./cypress`.

- I test Cypress per un modulo del curriculum sono nella corrispondente cartella del curriculum, per esempio `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Come eseguire i test

> [!NOTE] Se stai usando GitPod, vedi [Cypress-GitPod Setup](/how-to-add-cypress-tests#cypress-gitpod-setup)

### 1. Assicurati che MongoDB e l'applicazione del client siano in esecuzione

- [Fai partire MongoDB e fai il seed del database](/how-to-setup-freecodecamp-locally#step-3-start-mongodb-and-seed-the-database)

- [Avvia l'applicazione del client di freeCodeCamp e il server API](/how-to-setup-freecodecamp-locally#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Esegui i test cypress

Per eseguire i test su build di produzione, sostituisci `dev` con `prd` nella parte seguente.

- Per eseguire tutti i test nella cartella `./cypress`:

  ```console
  npm run cypress:dev:run
  ```

- Per eseguire un singolo test:

  ```console
  npm run cypress:dev:run -- --spec=cypress/pathToYourSpec/youSpecFileName.js
  ```

- Per creare una build di sviluppo, avvia il server di sviluppo e esegui tutti i test cypress end-to-end esistenti:

  ```console
  npm run e2e:dev:run
  ```

## Setup di Cypress su GitPod

### 1. Assicurati di essere nella _Feature Preview_ di GitPod _dalla data del 02/01/2021_

- Vai a [GitPod Docs - Feature Preview](https://www.gitpod.io/docs/feature-preview/) per vedere come attivare la _Feature Preview_

### 2. Assicurati che l'ambiente di sviluppo sia in esecuzione

Se l'avvio di GitPod non sviluppa automaticamente l'ambiente:

- Avvia il database

```console
mongod
```

- Fai il seed del database

```console
npm run seed
```

- Sviluppa il server e il client

```console
npm run develop
```

### 3. Installa Cypress Build Tools

```console
npm run cypress:install-build-tools
```

- Quando chiesto dal terminale, seleziona il layout della tua tastiera per lingua/area

Ora, [puoi eseguire Cypress](/how-to-add-cypress-tests#_2-run-the-cypress-tests)

# Cómo agregar pruebas de Cypress

Al realizar cambios en JavaScript, CSS o HTML que podrían cambiar la funcionalidad o el diseño de una página, es importante agregar una prueba de integración de [Cypress](https://docs.cypress.io) correspondiente.

Para aprender como escribir pruebas de Cypress, o especificaciones, observa la [documentación](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) oficial de Cypress.

## Donde agregar una prueba

- Las pruebas de Cypress están en el directorio `./cypress`.

- Las pruebas de Cypress para un módulo curricular están en el directorio curricular correspondiente, por ejemplo: `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Como ejecutar pruebas

> [!NOTE] Si utilizas GitPod, por favor mira la [Configuración de Cypress-GitPod ](/how-to-add-cypress-tests#cypress-gitpod-setup)

### 1. Asegúrate de que MongoDB y la aplicación de cliente se estén ejecutando

- [Inicia MongoDB y propaga la base de Datos](/how-to-setup-freecodecamp-locally#step-3-start-mongodb-and-seed-the-database)

- [Inicia la aplicación de cliente de freeCodeCamp y el servidor API](/how-to-setup-freecodecamp-locally#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Ejecuta las pruebas de Cypress

Para ejecutar pruebas en las compilaciones de producción, reemplaza `dev` con `prd` abajo.

- Para ejecutar todas las pruebas en el directorio `./cypress`:

  ```console
  npm run cypress:dev:run
  ```

- Para ejecutar una sola prueba:

  ```console
  npm run cypress:dev:run -- --spec=cypress/pathToYourSpec/youSpecFileName.js
  ```

- Para crear una compilación de desarrollo, inicia el servidor de desarrollo y ejecuta todas las pruebas de cypress existentes de extremo a extremo:

  ```console
  npm run e2e:dev:run
  ```

## Configuración de Cypress-GitPod

### 1. Ensure Development Environment is Running

Si al iniciar el entorno de GitPod no se creó automáticamente el ambiente:

- Start the database

```console
mongod
```

- Seed the database

```console
npm run seed
```

- Develop the server and client

```console
npm run develop
```

### 2. Install Cypress Build Tools

```console
npm run cypress:install-build-tools
```

- When prompted in the terminal, select your keyboard layout by language/area

Ahora, [Cypress puede ejecutarse](/how-to-add-cypress-tests#_2-run-the-cypress-tests)

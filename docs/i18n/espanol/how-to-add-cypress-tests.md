# Cómo agregar pruebas de Cypress

Al realizar cambios en JavaScript, CSS o HTML que podrían cambiar la funcionalidad o el diseño de una página, es importante agregar una prueba de integración de [Cypress](https://docs.cypress.io) correspondiente.

Para aprender como escribir pruebas de Cypress, o especificaciones, observa la [documentación](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) oficial de Cypress.

## Where to Add a Test

- Las pruebas de Cypress están en el directorio `./cypress`.

- Las pruebas de Cypress para un módulo curricular están en el directorio curricular correspondiente, por ejemplo: `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## How to Run Tests

> [!NOTE] If using Gitpod, please see [Cypress-Gitpod Setup](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Ensure that MongoDB and Client Applications are Running

- [Inicia MongoDB y propaga la base de Datos](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Inicia la aplicación de cliente de freeCodeCamp y el servidor API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Run the Cypress Tests

Para ejecutar pruebas en las compilaciones de producción, reemplaza `dev` con `prd` abajo.

- Para ejecutar todas las pruebas en el directorio `./cypress`:

  ```bash
  pnpm run cypress:dev:run
  ```

- Para ejecutar una sola prueba:

  ```bash
  pnpm run cypress run --spec=cypress/<path_to_test_file>
  ```

  For example:

  ```bash
  pnpm run cypress run --spec=cypress/e2e/default/landing.ts
  ```

- Para crear una compilación de desarrollo, inicia el servidor de desarrollo y ejecuta todas las pruebas de cypress existentes de extremo a extremo:

  ```bash
  pnpm run e2e:dev:run
  ```

## Cypress-Gitpod Setup

### 1. Asegúrate de que el entorno de desarrollo se esté ejecutando

If starting the Gitpod environment did not automatically develop the environment:

- Follow the [MongoDB installation guide](https://www.mongodb.com/basics/get-started).
- Create a config file.

```bash
pnpm run create:shared
```

- Propaga la base de datos

```bash
pnpm run seed
```

- Inicia el servidor de desarrollo y cliente

```bash
pnpm run develop
```

### 2. Instala las herramientas de compilación de Cypress

```bash
pnpm run cypress:install-build-tools
```

- Cuando se te solicite en la terminal, selecciona la distribución de tu teclado por idioma / área

Ahora, [Cypress puede ser ejecutado](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)

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

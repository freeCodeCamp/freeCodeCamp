# Cómo agregar pruebas de Cypress

Al realizar cambios en JavaScript, CSS o HTML que podrían cambiar la funcionalidad o el diseño de una página, es importante agregar una prueba de integración de [Cypress](https://docs.cypress.io) correspondiente.

Para aprender como escribir pruebas de Cypress, o especificaciones, observa la [documentación](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) oficial de Cypress.

## Donde agregar una prueba

- Las pruebas de Cypress están en el directorio `./cypress`.

- Las pruebas de Cypress para un módulo curricular están en el directorio curricular correspondiente, por ejemplo: `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## Como ejecutar pruebas

> [!NOTE] Si utilizas GitPod, por favor mira [Cypress-GitPod Setup](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Asegúrate de que MongoDB y la aplicación de cliente se estén ejecutando

- [Inicia MongoDB y propaga la base de Datos](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Inicia la aplicación de cliente de freeCodeCamp y el servidor API](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Ejecuta las pruebas de Cypress

Para ejecutar pruebas en las compilaciones de producción, reemplaza `dev` con `prd` abajo.

- Para ejecutar todas las pruebas en el directorio `./cypress`:

  ```console
  pnpm run cypress:dev:run
  ```

- Para ejecutar una sola prueba:

  ```console
  pnpm run cypress -- run --spec=cypress/<path_to_test_file>
  ```

  For example:

  ```console
  pnpm run cypress -- run --spec=cypress/e2e/default/landing.js
  ```

- Para crear una compilación de desarrollo, inicia el servidor de desarrollo y ejecuta todas las pruebas de cypress existentes de extremo a extremo:

  ```console
  pnpm run e2e:dev:run
  ```

## Configuración de Cypress-GitPod

### 1. Asegúrate de que el entorno de desarrollo se esté ejecutando

Si al iniciar el entorno de GitPod no se creó automáticamente el ambiente:

- Inicia la base de datos

```console
mongod
```

- Propaga la base de datos

```console
pnpm run seed
```

- Inicia el servidor de desarrollo y cliente

```console
pnpm run develop
```

### 2. Instala las herramientas de compilación de Cypress

```console
pnpm run cypress:install-build-tools
```

- Cuando se te solicite en la terminal, selecciona la distribución de tu teclado por idioma / área

Ahora, [Cypress puede ser ejecutado](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)

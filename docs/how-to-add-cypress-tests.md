# How to add Cypress tests

When making changes to JavaScript, CSS, or HTML which could change the functionality or layout of a page, it's important to add corresponding [Cypress](https://docs.cypress.io) integration tests.

To learn how to write Cypress tests, or 'specs', please see Cypress' official [documentation](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html).

## Where to add a test

- Cypress tests are in the `./cypress` directory.

- Cypress tests for a curriculum module are in the corresponding curriculum directory, i.e. `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## How to run tests

> [!NOTE]
> If using GitPod, please see [Cypress-GitPod Setup](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Ensure that MongoDB and client applications are running

- [Start MongoDB and seed the database](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Start the freeCodeCamp client application and API server](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Run the cypress tests

To run tests against production builds, replace `dev` with `prd` below.

- To run all tests in the `./cypress` directory:

  ```console
  pnpm run cypress:dev:run
  ```

- To run a single test:

  ```console
  pnpm run cypress -- run --spec=cypress/<path_to_test_file>
  ```
  
  For example:
 
  ```console
  pnpm run cypress -- run --spec=cypress/e2e/default/landing.js
  ```

- To create a development build, start the development server, and run all existing cypress end-to-end tests:

  ```console
  pnpm run e2e:dev:run
  ```

## Cypress-GitPod Setup

### 1. Ensure Development Environment is Running

If starting the GitPod environment did not automatically develop the environment:

- Start the database

```console
mongod
```

- Seed the database

```console
pnpm run seed
```

- Develop the server and client

```console
pnpm run develop
```

### 2. Install Cypress Build Tools

```console
pnpm run cypress:install-build-tools
```

- When prompted in the terminal, select your keyboard layout by language/area

Now, [Cypress can be run](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)

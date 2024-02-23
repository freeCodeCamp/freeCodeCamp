# How to add Cypress tests

When making changes to JavaScript, CSS, or HTML which could change the functionality or layout of a page, it's important to add corresponding [Cypress](https://docs.cypress.io) integration tests.

To learn how to write Cypress tests, or 'specs', please see Cypress' official [documentation](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html).

## Where to Add a Test

- Cypress tests are in the `./cypress` directory.

- Cypress tests for a curriculum module are in the corresponding curriculum directory, i.e. `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## How to Run Tests

> [!NOTE] If using Gitpod, please see [Cypress-Gitpod Setup](how-to-add-cypress-tests.md#cypress-gitpod-setup)

### 1. Ensure that MongoDB and Client Applications are Running

- [Start MongoDB and seed the database](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Start the freeCodeCamp client application and API server](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Run the Cypress Tests

To run tests against production builds, replace `dev` with `prd` below.

- To run all tests in the `./cypress` directory:

  ```bash
  pnpm run cypress:dev:run
  ```

- To run a single test:

  ```bash
  pnpm run cypress run --spec=cypress/<path_to_test_file>
  ```

  For example:

  ```bash
  pnpm run cypress run --spec=cypress/e2e/default/landing.ts
  ```

- To create a development build, start the development server, and run all existing cypress end-to-end tests:

  ```bash
  pnpm run e2e:dev:run
  ```

## Cypress-Gitpod Setup

### 1. Ensure Development Environment is Running

If starting the Gitpod environment did not automatically develop the environment:

- Follow the [MongoDB installation guide](https://www.mongodb.com/basics/get-started).
- Create a config file.

```bash
pnpm run create:shared
```

- Seed the database

```bash
pnpm run seed
```

- Develop the server and client

```bash
pnpm run develop
```

### 2. Install Cypress Build Tools

```bash
pnpm run cypress:install-build-tools
```

- When prompted in the terminal, select your keyboard layout by language/area

Now, [Cypress can be run](how-to-add-cypress-tests.md#_2-run-the-cypress-tests)

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

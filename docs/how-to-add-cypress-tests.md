# How to add Cypress tests

When making changes to JavaScript, CSS, or HTML which could change the functionality or layout of a page, it's important to add corresponding [Cypress](https://docs.cypress.io) integration tests.

To learn how to write Cypress tests, or 'specs', please see Cypress' official [documentation](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html).

> Note: When writing tests for freeCodeCamp, remember to add `/* global cy */` to the top of the file to avoid ESLint issues.

### Where to add a test

- Cypress tests are in the `./cypress` directory.

- Cypress tests for a curriculum module are in the corresponding curriculum directory, i.e. `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

### How to run tests

**1. Change directory to the freeCodeCamp directory:**

    ```console
    cd yourProjectDirectory
    ```

**2. Start the MongoDB server in a separate terminal**

  - On macOS & Ubuntu:

    ```console
    mongod
    ```

  - On Windows, you must specify the full path to the `mongod` binary

    ```console
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
    ```

**3. Start up the API server and the client applications.**

    ```console
    npm run develop
    ```

**4. Run the cypress tests**

  To run tests against production builds, replace `dev` with `prd` bellow.

  - To run all tests in the `./cypress` directory:

    ```console
    npm run cypress:dev:run
    ```

  - To run a single test:

    ```console 
    npm run cypress:dev:run -- --spec=cypress/pathToYourSpec/youSpecFileName.js
    ```

  - To create a development build, start the development server, and run all existing cypress end-to-end tests:

    ```console 
    npm run e2e:dev:run
    ```


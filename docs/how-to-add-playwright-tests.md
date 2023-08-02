# How to add Playwright tests

## Installation:

To install and configure Playwright on your machine check out this [documentation](https://playwright.dev/docs/intro#installing-playwright)

To learn how to write Playwright tests, or 'specs', please see Playwright's official [documentation](https://playwright.dev/docs/writing-tests).

## Where to Add a Test

- Playwright tests are in the `./e2e` directory.

- Playwright test files are always with a `.spec.ts` extension.

## How to Run Tests


### 1. Ensure that MongoDB and Client Applications are Running

- [Start MongoDB and seed the database](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Start the freeCodeCamp client application and API server](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Run the Playwright Tests

To run tests with Playwright check the following below

- To run tests in UI helper mode:

  ```console
  npx playwright test --ui
  ```

- To run a single test:

  ```console
  npx playwright test <filename>
  ```
  
  For example:
 
  ```console
  npx playwright test landing-page.spec.ts
  ```

- Run a set of test files in respective folders:

  ```console
  npx playwright test <pathToFolder1> <pathToFolder2>
  ```

  For example:
  ```console
  npx playwright test tests/todo-page/ tests/landing-page/
  ```

- Run the test with the title:

  ```console
  npx playwright test -g <title>
  ```

  For example:
  ```console
  npx playwright test -g "add a todo item"
  ```

### 3. Debugging Tests

Since Playwright runs in Node.js, you can debug it with your debugger of choice e.g. using console.log or inside your IDE 

- Debugging all tests:

  ```console
  npx playwright test --debug
  ```

- Debugging one test file:

  ```console
  npx playwright test example.spec.ts --debug
  ```

### 4. Generate Test Reports

The HTML Reporter shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. 

```console
npx playwright show-report 
```
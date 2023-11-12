# How to add Playwright tests

## Installation

To install Playwright run:

```bash
pnpm run playwright:install-build-tools
```

Alternatively you can follow official documentation referenced below:

To install and configure Playwright on your machine check out this [documentation](https://playwright.dev/docs/intro#installing-playwright).

To learn how to write Playwright tests, or 'specs', please see Playwright's official [documentation](https://playwright.dev/docs/writing-tests).

## Where to Add a Test

- Playwright tests are in the `./e2e` directory.

- Playwright test files are always with a `.spec.ts` extension.

## Best Practices for writing E2E tests

 This section will explain in detail about best practices for writing and documenting E2E tests based on Playwright documentation and our community code-style.

### - Imports
  
Always start with necessary imports at the beginning of the file.
  
For example:
  
```ts
import { test, expect, type Page } from '@playwright/test';
```

### - Identifying a DOM element

Playwright comes with [multiple built-in locators](https://playwright.dev/docs/locators#quick-guide), but we recommend prioritizing the following locators:
  - `getByRole` for querying semantic elements, whose role is important and allows assistive technology to perceive the page correctly. 
  - `getByText` for querying non-semantic elements such as `div`, `span`, or `p`.

For example:
```ts
await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
await expect(page.getByText('Hello World')).toBeVisible();
```
  
In cases where the elements cannot be queried using the above-mentioned locators, you can use the `data-playwright-test-label` attribute as the last resort. This attribute is used to identify elements in the DOM for testing with playwright only. It is not used for styling or any other purpose.

For example:

```html
<div data-playwright-test-label="landing-page-figure">
  <img src="..." alt="..." />
</div>
```

In the test file, you can use the `getByTestId` method to identify the element.

For example:

```ts
await expect(page.getByTestId('landing-page-figure')).toBeVisible();
```

### - Constants

Define any constant elements, data sets, or configurations used throughout your tests for easy reference.
  
For example:
  
```ts
const landingPageElements = { ... };
const superBlocks = [ ... ];
```

### - Shared Context

If tests depend on a shared context (like a loaded web page), use beforeAll and afterAll hooks to set up and tear down that context.

For example:
  
```ts
let page: Page;

beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

afterAll(async () => {
  await page.close();
});
```

### - Descriptive test names

Each test block should have a clear and concise name describing exactly what it's testing.

For example:
  
```ts
test('The component landing-top renders correctly', async ({ page }) => {
 // ...
});
```

### - Human readable assertions
  
Each assertion should be as human readable as possible. This makes it easier to understand what the test is doing and what it's expecting.

For example:

```ts
await expect(landingHeading1).toHaveText('Learn to code — for free.');
```

### - Keep it DRY

Make sure that the tests are not repeating the same code over and over again. If you find yourself repeating the same code, consider refactoring it as a loop or a function.

For example:
  
```ts
for (const logo of await logos.all()) {
  await expect(logo).toBeVisible();
}
```

### - Tests for mobile screens

Use the `isMobile` argument to run tests that include logic that varies for mobile screens.

For example:

```ts
test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({
    isMobile
}) => {
  const landingPageImage = page.getByTestId('landing-page-figure');

  if (isMobile) {
    await expect(landingPageImage).toBeHidden();
  } else {
    await expect(landingPageImage).toBeVisible();
  }
});
```

### - Group related tests

Group related tests together using describe blocks. This makes it easier to understand what the tests are doing and what they're testing.

For example:

```ts
describe('The campers landing page', () => {
  test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({
    isMobile
  }) => {
    // ...
  });

  test('The campers landing page figure has the correct image', async () => {
      // ...
  });
});
```

## How to Run Tests

### 1. Ensure that MongoDB and Client Applications are Running

- [Start MongoDB and seed the database](how-to-setup-freecodecamp-locally.md#step-3-start-mongodb-and-seed-the-database)

- [Start the freeCodeCamp client application and API server](how-to-setup-freecodecamp-locally.md#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Run the Playwright Tests

To run tests with Playwright check the following below

- Make sure you navigate to the e2e repo first

  ```bash
  cd e2e
  ```

- To run tests in UI helper mode:

  ```bash
  npx playwright test --ui
  ```

- To run a single test:

  ```bash
  npx playwright test <filename>
  ```
  
  For example:

  ```bash
  npx playwright test landing-page.spec.ts
  ```

- Run a set of test files in respective folders:

  ```bash
  npx playwright test <pathToFolder1> <pathToFolder2>
  ```

  For example:

  ```bash
  npx playwright test tests/todo-page/ tests/landing-page/
  ```

- Run the test with the title:

  ```bash
  npx playwright test -g <title>
  ```

  For example:

  ```bash
  npx playwright test -g "add a todo item"
  ```

### 3. Debugging Tests

Since Playwright runs in Node.js, you can debug it with your debugger of choice e.g. using console.log or inside your IDE

- Debugging all tests:

  ```bash
  npx playwright test --debug
  ```

- Debugging one test file:

  ```bash
  npx playwright test example.spec.ts --debug
  ```

### 4. Generate Test Reports

The HTML Reporter shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests.

```bash
npx playwright show-report 
```

### 5. Troubleshooting

Playwright is generally a solid bullet-proof tool. The contributor has already configured the tests to run on all OS machines, including major distributions of Windows, MacOS and Linux.

- (MacOs and Linux) If running Playwright results in an error due to kernel dependencies, run the following command:

  ```bash
  pnpm run playwright:install-build-tools-linux
  ```

- A common error seen in playwright is as follows:

  ```bash
    Error: page.goto: Could not connect: Connection refused
    =========================== logs ===========================
    navigating to "https://127.0.0.1:8000/", waiting until "load"
    ============================================================  
  ```
  
  You can fix the above error with the following steps:

  1. **Check the URL:** Ensure that the URL you're trying to navigate to is correct and properly formatted. Make sure there are no typos in the URL.

  2. **Server Status:** Check whether the server at the URL is running and accessible. You might encounter this error if the server is not running or is not accessible.

  3. **Port Availability:** Verify that the port mentioned in the URL (8000 in this case) is the correct port and is available for use. Make sure no other process is already using that port.

  4. **Firewall or Security Software:** Sometimes, firewall or security software can block connections to specific ports. Check your firewall settings to ensure that the port is allowed.

  5. **Network Connectivity:** Ensure that your system has a working network connection and can access external resources.

- Another common error seen in playwright is as follows:

  ```bash
    Protocol error (Network.getResponseBody): Request content was evicted from inspector cache
  ```

  1. The network request was made using a method that does not include a response body, such as HEAD or CONNECT.
  2. The network request was made over a secure (HTTPS) connection, and the response body is not available for security reasons.
  3. The network request was made by a third-party resource (such as an advertisement or a tracking pixel) that is not controlled by the script.
  4. The network request was made by a script that has been paused or stopped before the response was received.

**For more insights on issues visit the official documentation.**

## Playwright-Gitpod Setup

### 1. Ensure Development Environment is Running

If starting the Gitpod environment did not automatically develop the environment:

- Follow the [MongoDB installation guide](https://www.mongodb.com/basics/get-started).

- Create the .env

  ```bash
  cp sample.env .env
  ```

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

### 2. Install Playwright Build Tools

To install necessary dependencies for running Playwright run the following command:

```bash
pnpm run playwright:install-build-tools
```

### 3. Run the Playwright Tests on Gitpod

To run all Playwright tests, run the following command:

```bash
npx playwright test
```

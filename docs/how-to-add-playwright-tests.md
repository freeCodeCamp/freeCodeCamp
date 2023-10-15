## Playwright Tests: Getting Started Guide

### Installation

To install Playwright, follow these steps:

1. Install Playwright's build tools:

   ```shell
   pnpm run playwright:install-build-tools
   ```

   Alternatively, you can refer to the [official documentation](#official-documentation) for installation instructions.

2. To learn how to write Playwright tests or 'specs,' see Playwright's [official documentation](#official-documentation).

### Where to Add a Test

Playwright tests are stored in the `./e2e` directory, and their files should always have a `.spec.ts` extension.

### Best Practices for Writing E2E Tests

#### Imports

Always start with necessary imports at the beginning of the file.

For example:

```typescript
import { test, expect, type Page } from '@playwright/test';
```

#### Identifying a DOM Element

Playwright provides built-in locators, with priority given to the following:

- `getByRole`: for semantic elements.
- `getByText`: for non-semantic elements.
- As a last resort, you can use the `data-playwright-test-label` attribute.

For example:

```javascript
await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
await expect(page.getByText('Hello World')).toBeVisible();
```

#### Constants

Define constant elements, data sets, or configurations used throughout your tests for easy reference.

For example:

```typescript
const landingPageElements = { ... };
const superBlocks = [ ... ];
```

#### Shared Context

If tests depend on a shared context, use `beforeAll` and `afterAll` hooks to set up and tear down that context.

For example:

```typescript
let page: Page;

beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

afterAll(async () => {
  await page.close();
});
```

#### Descriptive Test Names

Each test block should have a clear and concise name describing what it's testing.

For example:

```typescript
test('The component landing-top renders correctly', async ({ page }) => {
 // ...
});
```

#### Human-Readable Assertions

Make each assertion as human-readable as possible for clarity.

For example:

```javascript
await expect(landingHeading1).toHaveText('Learn to code — for free.');
```

#### Keep it DRY

Avoid code repetition by refactoring repetitive code as loops or functions.

For example:

```javascript
for (const logo of await logos.all()) {
  await expect(logo).toBeVisible();
}
```

#### Tests for Mobile Screens

Use the `isMobile` argument to run tests that vary for mobile screens.

For example:

```typescript
test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({ isMobile }) => {
  const landingPageImage = page.getByTestId('landing-page-figure');

  if (isMobile) {
    await expect(landingPageImage).toBeHidden();
  } else {
    await expect(landingPageImage).toBeVisible();
  }
});
```

#### Group Related Tests

Group related tests using `describe` blocks for clarity.

For example:

```javascript
describe('The campers landing page', () => {
  test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({ isMobile }) => {
    // ...
  });

  test('The campers landing page figure has the correct image', async () => {
      // ...
  });
});
```

### How to Run Tests

1. Ensure that MongoDB and Client Applications are Running:
   - Start MongoDB and seed the database.
   - Start the freeCodeCamp client application and API server.

2. Run the Playwright Tests:

   - Navigate to the `e2e` repository:

     ```shell
     cd e2e
     ```

   - To run tests in UI helper mode:

     ```shell
     npx playwright test --ui
     ```

   - To run a single test:

     ```shell
     npx playwright test <filename>
     ```

     For example:

     ```shell
     npx playwright test landing-page.spec.ts
     ```

   - Run a set of test files in respective folders:

     ```shell
     npx playwright test <pathToFolder1> <pathToFolder2>
     ```

     For example:

     ```shell
     npx playwright test tests/todo-page/ tests/landing-page/
     ```

   - Run the test with a specific title:

     ```shell
     npx playwright test -g <title>
     ```

     For example:

     ```shell
     npx playwright test -g "add a todo item"
     ```

3. Debugging Tests:

   - Debug all tests:

     ```shell
     npx playwright test --debug
     ```

   - Debug one test file:

     ```shell
     npx playwright test example.spec.ts --debug
     ```

4. Generate Test Reports:

   To generate an HTML test report:

   ```shell
   npx playwright show-report
   ```

5. Troubleshooting:

   - If running Playwright results in an error due to kernel dependencies (macOS and Linux), run:

     ```shell
     pnpm run playwright:install-build-tools-linux
     ```

   - If you encounter common Playwright errors, refer to the [official documentation](#official-documentation) for insights and solutions.

### Official Documentation

For more detailed information and advanced usage, refer to [Playwright's official documentation](https://playwright.dev/docs/intro).

## Playwright-Gitpod Setup

### Ensure Development Environment is Running

If your Gitpod environment did not automatically set up:

1. Follow the MongoDB installation guide.
2. Create a `.env` file by copying the `sample.env` file.
3. Create a config file:

   ```shell
   pnpm run create:shared
   ```

4. Seed the database:

   ```shell
   pnpm run seed
   ```

5. Develop the server and client:

   ```shell
   pnpm run develop
   ```

### Install Playwright Build Tools

To install necessary dependencies for running Playwright, run the following command:

```shell
pnpm run playwright:install-build-tools
```

### Run the Playwright Tests on Gitpod

To run all Playwright tests, execute the following command:

```shell
npx playwright test
```

# How to add Playwright tests

## Installation:

To install Playwright run: 

```console
pnpm run playwright:install-build-tools
```

Alternatively you can follow official documentation referenced below:

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

- Make sure you navigate to the e2e repo first
  ```console
  cd e2e
  ```

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

### 5. Troubleshooting

Playwright is generally a solid bullet-proof tool. The contributor has already configured the tests to run on all OS machines, including majpr distributions of Windows, MacOS and Linux.

- (MacOs and Linux) If running Playwright results in an error due to kernel dependencies, run the following command:

  ```console
  pnpm run playwright:install-build-tools-linux
  ```

- A common error seen in playwright is as follows:

  ```console
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

  ```console
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
  ```console
  cp sample.env .env
  ```

- Create a config file.
  ```console
  pnpm run create:config
  ```

- Seed the database
  ```console
  pnpm run seed
  ```

- Develop the server and client
  ```console
  pnpm run develop
  ```

### 2. Install Playwright Build Tools

To install necessary dependencies for running Playwright run the following command:

```console
pnpm run playwright:install-build-tools
```


### 3. Run the Playwright Tests on Gitpod

To run all Playwright tests, run the following command:

```console
npx playwright test
```
import { test, expect } from '@playwright/test';

// To run this test locally you will need to run: pnpm run start-ci;
// Also, make sure that you have pm2 installed globally via: pnpm install -g pm2

const pathsToTest = [
  { input: '/challenges', expected: '/learn' },
  {
    input: '/learn/front-end-libraries',
    expected: 'learn/front-end-development-libraries'
  },
  {
    input: '/learn/front-end-libraries/bootstrap',
    expected: 'learn/front-end-development-libraries/bootstrap'
  },
  {
    input: '/learn/front-end-libraries/front-end-libraries-projects',
    expected:
      'learn/front-end-development-libraries/front-end-development-libraries-projects'
  },
  {
    input:
      '/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine',
    expected:
      'learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine'
  },
  {
    input: '/certification/certifieduser/front-end-libraries',
    expected: 'certification/certifieduser/front-end-development-libraries'
  },
  {
    input:
      '/learn/front-end-libraries/bootstrap/use-responsive-design-with-bootstrap-fluid-containers',
    expected:
      'learn/front-end-development-libraries/bootstrap/use-responsive-design-with-bootstrap-fluid-containers'
  },
  {
    input: '/learn/apis-and-microservices',
    expected: 'learn/back-end-development-and-apis'
  },
  {
    input: '/learn/apis-and-microservices/managing-packages-with-npm',
    expected: 'learn/back-end-development-and-apis/managing-packages-with-npm'
  },
  {
    input:
      '/learn/apis-and-microservices/managing-packages-with-npm/how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package',
    expected:
      'learn/back-end-development-and-apis/managing-packages-with-npm/how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package'
  },
  {
    input: '/learn/apis-and-microservices/apis-and-microservices-projects',
    expected:
      'learn/back-end-development-and-apis/back-end-development-and-apis-projects'
  },
  {
    input:
      '/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice',
    expected:
      'learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice'
  },
  {
    input: '/certification/certifieduser/apis-and-microservices',
    expected: 'certification/certifieduser/back-end-development-and-apis'
  }
];

test.describe('Legacy Challenge Path Redirection Tests', () => {
  for (const { input, expected } of pathsToTest) {
    test(`should redirect from ${input} to ${expected}`, async ({ page }) => {
      await page.goto(input);
      await expect(page).toHaveURL(new RegExp(`${expected}/?`));
    });
  }
});

import { test, expect } from '@playwright/test';
// To run this test locally you will need to run: pnpm run start-ci;
// Also, make sure that you have pm2 installed globally via: pnpm install -g pm2

test.describe('Legacy Redirects', () => {
  test('should redirect to the correct URL for bootstrap', async ({ page }) => {
    const response = await page.goto('/learn/front-end-libraries/bootstrap');
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      'learn/front-end-development-libraries/bootstrap'
    );
  });

  test('should redirect to the correct URL for front-end libraries projects', async ({
    page
  }) => {
    const response = await page.goto(
      '/learn/front-end-libraries/front-end-libraries-projects'
    );
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      'learn/front-end-development-libraries/front-end-development-libraries-projects'
    );
  });

  test('should redirect to the correct URL for building a random quote machine', async ({
    page
  }) => {
    const response = await page.goto(
      '/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine'
    );
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      'learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine'
    );
  });

  test('should redirect to the correct URL for certified user in front-end libraries', async ({
    page
  }) => {
    const response = await page.goto(
      '/certification/certifieduser/front-end-libraries'
    );
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      'certification/certifieduser/front-end-development-libraries'
    );
  });

  test('should redirect to the correct URL for using responsive design with bootstrap fluid containers', async ({
    page
  }) => {
    const response = await page.goto(
      '/learn/front-end-libraries/bootstrap/use-responsive-design-with-bootstrap-fluid-containers'
    );
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      'learn/front-end-development-libraries/bootstrap/use-responsive-design-with-bootstrap-fluid-containers'
    );
  });
});

test.describe('APIs and Microservices Redirects', () => {
  test('should redirect to back-end development and APIs root', async ({
    page
  }) => {
    const response = await page.goto('/learn/apis-and-microservices');
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain('/learn/back-end-development-and-apis');
  });

  test('should redirect to managing packages with npm', async ({ page }) => {
    const response = await page.goto(
      '/learn/apis-and-microservices/managing-packages-with-npm'
    );
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      '/learn/back-end-development-and-apis/managing-packages-with-npm'
    );
  });

  test('should redirect to how to use package.json', async ({ page }) => {
    const response = await page.goto(
      '/learn/apis-and-microservices/managing-packages-with-npm/how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package'
    );
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      '/learn/back-end-development-and-apis/managing-packages-with-npm/how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package'
    );
  });

  test('should redirect to APIs and microservices projects', async ({
    page
  }) => {
    const response = await page.goto(
      '/learn/apis-and-microservices/apis-and-microservices-projects'
    );
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      '/learn/back-end-development-and-apis/back-end-development-and-apis-projects'
    );
  });

  test('should redirect to timestamp microservice project', async ({
    page
  }) => {
    const response = await page.goto(
      '/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice'
    );
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      '/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice'
    );
  });

  test('should redirect to certified user in back-end development and APIs', async ({
    page
  }) => {
    const response = await page.goto(
      '/certification/certifieduser/apis-and-microservices'
    );
    const finalUrl = response
      ?.request()
      .redirectedFrom()
      ?.redirectedTo()
      ?.url();
    expect(finalUrl).toContain(
      '/certification/certifieduser/back-end-development-and-apis'
    );
  });
});

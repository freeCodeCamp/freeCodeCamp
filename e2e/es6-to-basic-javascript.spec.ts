import test, { expect } from '@playwright/test';

// To run this test locally you will need to run: pnpm run start-ci;
// Also, make sure that you have pm2 installed globally via: pnpm install -g pm2

test.describe('ES6 to Basic JavaScript redirects', () => {
  const basePath = '/learn/javascript-algorithms-and-data-structures';

  test('should redirect from /es6/explore-differences-between-the-var-and-let-keywords to /basic-javascript/explore-differences-between-the-var-and-let-keywords', async ({
    page
  }) => {
    const response = await page.goto(
      `${basePath}/es6/explore-differences-between-the-var-and-let-keywords`
    );
    const expectedPath = `${basePath}/basic-javascript/explore-differences-between-the-var-and-let-keywords`;

    expect(
      response?.request().redirectedFrom()?.redirectedTo()?.url()
    ).toContain(expectedPath);
  });

  test('should redirect from /es6/declare-a-read-only-variable-with-the-const-keyword to /basic-javascript/declare-a-read-only-variable-with-the-const-keyword', async ({
    page
  }) => {
    const response = await page.goto(
      `${basePath}/es6/declare-a-read-only-variable-with-the-const-keyword`
    );
    const expectedPath = `${basePath}/basic-javascript/declare-a-read-only-variable-with-the-const-keyword`;

    expect(
      response?.request().redirectedFrom()?.redirectedTo()?.url()
    ).toContain(expectedPath);
  });
});

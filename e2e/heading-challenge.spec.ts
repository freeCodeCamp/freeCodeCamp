import test, { expect } from '@playwright/test';

// To run this test locally you will need to run: pnpm run start-ci;
// Also, make sure that you have pm2 installed globally via: pnpm install -g pm2

test('Header to heading element redirect', async ({ page }) => {
  const basePath = '/learn/responsive-web-design/applied-visual-design';

  const expectedPath = `${basePath}/adjust-the-size-of-a-heading-element-versus-a-paragraph-element`;

  const response = await page.goto(
    `${basePath}/adjust-the-size-of-a-header-versus-a-paragraph-tag`
  );

  expect(response?.request().redirectedFrom()?.redirectedTo()?.url()).toContain(
    expectedPath
  );
});

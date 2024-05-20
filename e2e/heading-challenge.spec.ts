import test, { expect } from '@playwright/test';

test('Header to heading element redirect', async ({ page }) => {
  const basePath = '/learn/responsive-web-design/applied-visual-design';

  const expectedPath = `${basePath}/adjust-the-size-of-a-heading-element-versus-a-paragraph-element`;

  const response = await page.goto(
    `${basePath}/adjust-the-size-of-a-header-versus-a-paragraph-tag`
  );

  expect(response?.request().redirectedFrom()?.redirectedTo()).toBe(
    expectedPath
  );
});

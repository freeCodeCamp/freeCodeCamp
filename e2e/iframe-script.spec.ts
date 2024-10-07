import { test, expect } from '@playwright/test';
import { focusEditor, getEditors } from './utils/editor';

const htmlCode = `
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles.css" />
  <style>
* {
  margin: 0;
  padding: 0;
  display: block;
}
  </style>
  <title>Cash Register</title>
</head>
<body>
  <h1>Cash Register</h1>
  <div class="input-container">
    <label for="number-input">Cash:</label>
    <input value="" id="cash" />
  </div>
  <div class="buttons">
    <button id="purchase-btn">Purchase</button>
  </div>
  <div id="change-due"></div>
</body>
</html>
`;

test.describe('Ensure head, title, meta, link, and script elements are hidden in the Cash Register preview', () => {
  test.beforeEach(async ({ page }) => {
    // this navigates to the Cash Register project
    await page.goto(
      '/learn/javascript-algorithms-and-data-structures-v8/build-a-cash-register-project/build-a-cash-register'
    );
  });

  test('should insert HTML into the code editor and confirm that head, title, meta, link, and script elements are hidden', async ({
    page,
    isMobile
  }) => {
    // focuses on the code editor
    await focusEditor({ page, isMobile });

    // inserts the HTML code into the editor
    await getEditors(page).fill(htmlCode);

    // Checks if the preview tab is visible; if mobile, switch to it
    if (isMobile) {
      await page.getByRole('tab', { name: 'Preview' }).click();
    }

    // selects the iframe where the preview is rendered
    const previewFrame = page.frameLocator('#fcc-main-frame');

    // assert that the head, title, meta, link, and script tags are not visible
    await expect(previewFrame.locator('head')).toHaveCount(0);
    await expect(previewFrame.locator('title')).toHaveCount(0);
    await expect(previewFrame.locator('meta')).toHaveCount(0);
    await expect(previewFrame.locator('link')).toHaveCount(0);
    await expect(previewFrame.locator('script')).toHaveCount(0);
  });
});

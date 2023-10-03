import { test, expect } from '@playwright/test';

test('FourOhFourPage renders without errors', async ({ page }) => {
  // Navigate to your Gatsby page
  await page.goto('http://localhost:8000/four-oh-four'); // Adjust the URL as per your project structure

  // Wait for the page to load
  await page.waitForLoadState('load');

  // Check if the component is rendered
  const componentExists = await page.isVisible(
    '[data-testid="four-oh-four-page"]'
  );
  expect(componentExists).toBeTruthy();

  // You can add more assertions as needed
});

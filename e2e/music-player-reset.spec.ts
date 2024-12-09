import { test, expect } from '@playwright/test';

test('Reset button remains visible after all songs are deleted and shuffle is clicked', async ({
  page
}) => {
  // Navigate to the music player app.
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures-v8/learn-basic-string-and-array-methods-by-building-a-music-player/step-99'
  ); // Replace with your app's URL

  // Ensure the reset button is not visible initially.
  const resetButton = page.locator('#reset-button'); // Adjust selector as needed
  await expect(resetButton).toBeHidden();

  // Delete all songs.
  const deleteButtons = page.locator('.delete-button'); // Adjust selector as needed
  const deleteCount = await deleteButtons.count();

  for (let i = 0; i < deleteCount; i++) {
    await deleteButtons.nth(0).click();
  }

  // Ensure the reset button is now visible.
  await expect(resetButton).toBeVisible();

  // Click the shuffle button.
  const shuffleButton = page.locator('#shuffle-button'); // Adjust selector as needed
  await shuffleButton.click();

  // Verify the reset button is still visible.
  await expect(resetButton).toBeVisible();
});

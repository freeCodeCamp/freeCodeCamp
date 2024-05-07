import { test, expect } from '@playwright/test';
test.use({ storageState: 'playwright/.auth/certified-user.json' });

//TODO: run email server?

test('should be possible to report a user from their profile page', async ({
  page
}) => {
  await page.goto('/twaha');

  // The following line is required if you're running the test in local development
  // await page.getByRole('button', { name: 'Preview custom 404 page' }).click();

  await page.getByText("Flag This User's Account for Abuse").click();

  await expect(
    page.getByText("Do you want to report twaha's portfolio for abuse?")
  ).toBeVisible();

  await page.getByRole('textbox').nth(1).fill('Some details');
  await page.getByRole('button', { name: 'Submit the report' }).click();
  await expect(page).toHaveURL('/learn');
});

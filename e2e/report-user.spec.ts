import { test, expect } from './fixtures/isolated-user';
import {
  deleteEmailsForAddress,
  getEmailsForAddress,
  getFirstEmail,
  getSubject
} from './utils/email';

test.use({ userPreset: 'certified' });

test.beforeEach(async ({ isolatedUser }) => {
  await deleteEmailsForAddress(isolatedUser.email);
});

test('should be possible to report a user from their profile page', async ({
  page,
  isolatedUser
}) => {
  await page.goto('/twaha');

  await page.getByText("Flag This User's Account for Abuse").click();

  await expect(
    page.getByText("Do you want to report twaha's portfolio for abuse?")
  ).toBeVisible();

  await page
    .getByRole('textbox', { name: 'What would you like to report?' })
    .fill('Some details');
  await page.getByRole('button', { name: 'Submit the report' }).click();
  await expect(page).toHaveURL('/learn');

  await expect(page.getByTestId('flash-message')).toBeVisible();
  await expect(page.getByTestId('flash-message')).toContainText(
    `A report was sent to the team with ${isolatedUser.email} in copy`
  );

  await expect(async () => {
    const emails = await getEmailsForAddress(isolatedUser.email);
    expect(emails.messages).toHaveLength(1);
    expect(getSubject(getFirstEmail(emails))).toBe(
      "Abuse Report : Reporting twaha's profile."
    );
  }).toPass();
});

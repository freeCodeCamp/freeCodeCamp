import translations from '../client/i18n/locales/english/translations.json';
import { expect, test } from './fixtures/isolated-user';
import { alertToBeVisible } from './utils/alerts';

test('can create and delete a user token', async ({ page }) => {
  const userTokenHeading = page
    .getByRole('main')
    .getByText('User Token', { exact: true });

  await page.goto('/settings');
  await expect(userTokenHeading).not.toBeVisible();

  await page.goto(
    '/learn/relational-database/learn-bash-by-building-a-boilerplate/build-a-boilerplate'
  );
  await page.getByText('Generate User Token').first().click();
  await alertToBeVisible(page, translations.flash['user-token-generated']);

  await page.goto('/settings');
  await expect(userTokenHeading).toBeVisible();
  await expect(
    page.getByText(
      'Your user token is used to save your progress on curriculum sections that use a virtual machine. If you suspect it has been compromised, you can delete it without losing any progress. A new one will be created automatically the next time you open a project.'
    )
  ).toBeVisible();

  await page.getByRole('button', { name: 'Delete my user token' }).click();

  await alertToBeVisible(page, translations.flash['token-deleted']);
  await expect(userTokenHeading).not.toBeVisible();
});

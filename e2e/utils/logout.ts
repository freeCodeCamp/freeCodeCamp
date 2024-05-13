import { Page, expect } from '@playwright/test';
import translations from '../../client/i18n/locales/english/translations.json';

export async function signout(page: Page) {
  await page.goto('/');
  await page.getByRole('button', { name: translations.buttons.menu }).click();
  await page
    .getByRole('button', { name: translations.buttons['sign-out'] })
    .click();

  await page
    .getByRole('button', { name: translations.signout.certain })
    .click();
  await expect(page).toHaveURL(/.*\/learn\/?$/);
}

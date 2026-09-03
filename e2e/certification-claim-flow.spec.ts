import { execSync } from 'child_process';

import { expect, test } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import { alertToBeVisible } from './utils/alerts';

test.describe('Certification claim flow', () => {
  test.beforeEach(async ({ page }) => {
    execSync(
      'node ../tools/scripts/seed/seed-demo-user --certified-user --set-false isHonest --set-false isFullStackCert'
    );
    await page.goto('/settings#cert-full-stack');
  });

  test.afterAll(() => {
    execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
  });

  test('requires accepting academic honesty before claiming a certification', async ({
    page
  }) => {
    const claimButton = page.getByRole('button', {
      name: 'Claim Certification Legacy Full-Stack'
    });
    const showButton = page.getByRole('link', {
      name: 'Show Certification Legacy Full-Stack'
    });

    await expect(claimButton).toBeEnabled();
    await claimButton.click();
    await alertToBeVisible(page, translations.flash['honest-first']);

    await page
      .getByRole('button', {
        name: translations.buttons['agree-honesty']
      })
      .click();
    await alertToBeVisible(page, translations.buttons['accepted-honesty']);

    await page.reload();
    await expect(
      page.getByRole('button', {
        name: translations.buttons['accepted-honesty']
      })
    ).toBeDisabled();

    await claimButton.click();
    await alertToBeVisible(
      page,
      '@certifieduser, you have successfully claimed the Legacy Full-Stack Certification! Congratulations on behalf of the freeCodeCamp.org team!'
    );
    await expect(claimButton).toBeHidden();
    await expect(showButton).toHaveAttribute(
      'href',
      '/certification/certifieduser/full-stack'
    );
  });
});

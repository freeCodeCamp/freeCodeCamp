import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import {
  currentCertifications,
  legacyCertifications
} from '../shared/config/certification-settings';

test.describe('Settings Ledger Navigation', () => {
  test.beforeEach(async ({ page }) => {
    execSync('node ./tools/scripts/seed/seed-demo-user --certified-user');
    await page.goto('/settings');
  });

  test('Should display the ledger with all expected sections', async ({
    page
  }) => {
    await expect(
      page.locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.account
      })
    ).toBeVisible();
    await expect(
      page.locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.privacy
      })
    ).toBeVisible();
    await expect(
      page.locator('.ledger-anchor-btn', {
        hasText: translations.settings.email.heading
      })
    ).toBeVisible();
    await expect(
      page.locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.honesty
      })
    ).toBeVisible();
    await expect(
      page
        .locator('.ledger-anchor-btn', {
          hasText: translations.settings.headings.certs
        })
        .first()
    ).toBeVisible();
    await expect(
      page.locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings['legacy-certs']
      })
    ).toBeVisible();

    const certsHeading = page.locator(
      '.settings-ledger .ledger-section-heading',
      {
        hasText: translations.settings.headings.certs
      }
    );
    await expect(certsHeading).toBeVisible();

    const legacyCertsHeading = page.locator(
      '.settings-ledger .ledger-section-heading',
      {
        hasText: translations.settings.headings['legacy-certs']
      }
    );
    await expect(legacyCertsHeading).toBeVisible();

    for (const slug of currentCertifications) {
      const certName = translations.certification.title[slug] || slug;
      const certLink = page.locator('.ledger-anchor-btn', {
        hasText: certName
      });
      await expect(certLink).toBeVisible();
    }

    for (const slug of legacyCertifications) {
      const certName = translations.certification.title[slug] || slug;
      const certLink = page.locator('.ledger-anchor-btn', {
        hasText: certName
      });
      await expect(certLink).toBeVisible();
    }
  });

  test('Should navigate to Account section when clicking Account link', async ({
    page
  }) => {
    await page
      .locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.account
      })
      .click();

    await page.waitForTimeout(500);

    const accountSection = page.locator('div[name="settings-account"]');
    await expect(accountSection).toBeInViewport();
  });

  test('Should navigate to Privacy section when clicking Privacy link', async ({
    page
  }) => {
    await page
      .locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.privacy
      })
      .click();

    await page.waitForTimeout(500);

    const privacySection = page.locator('div[name="settings-privacy"]');
    await expect(privacySection).toBeInViewport();
  });

  test('Should navigate to Email section when clicking Email link', async ({
    page
  }) => {
    await page
      .locator('.ledger-anchor-btn', {
        hasText: translations.settings.email.heading
      })
      .click();

    await page.waitForTimeout(500);

    const emailSection = page.locator('div[name="settings-email"]');
    await expect(emailSection).toBeInViewport();
  });

  test('Should navigate to Honesty section when clicking Honesty link', async ({
    page
  }) => {
    await page
      .locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.honesty
      })
      .click();

    await page.waitForTimeout(500);

    const honestySection = page.locator('div[name="settings-honesty"]');
    await expect(honestySection).toBeInViewport();
  });

  test('Should navigate to Certifications section when clicking Certifications link', async ({
    page
  }) => {
    await page
      .locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.certs
      })
      .first()
      .click();

    await page.waitForTimeout(500);

    const certsSection = page.locator('div[name="settings-certifications"]');
    await expect(certsSection).toBeInViewport();
  });

  test('Should navigate to Legacy Certifications section when clicking Legacy Certs link', async ({
    page
  }) => {
    await page
      .locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings['legacy-certs']
      })
      .click();

    await page.waitForTimeout(500);

    const legacyCertsSection = page.locator(
      'div[name="settings-legacy-certs"]'
    );
    await expect(legacyCertsSection).toBeInViewport();
  });

  test('Should navigate to Certifications section when clicking section heading', async ({
    page
  }) => {
    await page
      .locator('.ledger-section-heading', {
        hasText: translations.settings.headings.certs
      })
      .click();

    await page.waitForTimeout(500);

    const certsSection = page.locator('div[name="settings-certifications"]');
    await expect(certsSection).toBeInViewport();
  });

  test('Should navigate to Legacy Certifications section when clicking section heading', async ({
    page
  }) => {
    await page
      .locator('.ledger-section-heading', {
        hasText: translations.settings.headings['legacy-certs']
      })
      .click();

    await page.waitForTimeout(500);

    const legacyCertsSection = page.locator(
      'div[name="settings-legacy-certs"]'
    );
    await expect(legacyCertsSection).toBeInViewport();
  });

  test('Should navigate to specific certification when clicking certification link in ledger', async ({
    page
  }) => {
    const firstCertSlug = currentCertifications[0];
    const firstCertName =
      translations.certification.title[firstCertSlug] || firstCertSlug;

    await page
      .locator('.ledger-anchor-btn', { hasText: firstCertName })
      .click();

    await page.waitForTimeout(500);

    const certSection = page.locator(`div[name="cert-${firstCertSlug}"]`);
    await expect(certSection).toBeInViewport();

    await expect(
      page.getByRole('heading', { name: firstCertName, exact: true })
    ).toBeVisible();
  });

  test('Should handle multiple navigation clicks smoothly', async ({
    page
  }) => {
    await page
      .locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.privacy
      })
      .click();
    await page.waitForTimeout(500);
    await expect(page.locator('div[name="settings-privacy"]')).toBeInViewport();

    await page
      .locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.honesty
      })
      .click();
    await page.waitForTimeout(500);
    await expect(page.locator('div[name="settings-honesty"]')).toBeInViewport();

    await page
      .locator('.ledger-anchor-btn', {
        hasText: translations.settings.headings.account
      })
      .click();
    await page.waitForTimeout(500);
    await expect(page.locator('div[name="settings-account"]')).toBeInViewport();
  });

  test('Should display horizontal rule separator in the ledger', async ({
    page
  }) => {
    const hrInLedger = page.locator('.settings-ledger hr');
    await expect(hrInLedger).toBeVisible();
  });

  test('Should maintain ledger visibility while scrolling through settings', async ({
    page
  }) => {
    const ledger = page.locator('.settings-ledger');
    await expect(ledger).toBeVisible();

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    await expect(ledger).toBeVisible();

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    await expect(ledger).toBeVisible();
  });

  test('Should have correct structure with multiple lists and section headings', async ({
    page
  }) => {
    const firstList = page.locator('.settings-ledger ul').first();
    await expect(firstList).toBeVisible();

    const secondList = page.locator('.settings-ledger ul').nth(1);
    await expect(secondList).toBeVisible();

    const thirdList = page.locator('.settings-ledger ul').nth(2);
    await expect(thirdList).toBeVisible();

    const certsHeading = page.locator('.ledger-section-heading').first();
    await expect(certsHeading).toBeVisible();

    const legacyCertsHeading = page.locator('.ledger-section-heading').nth(1);
    await expect(legacyCertsHeading).toBeVisible();

    const topLevelLinks = await firstList
      .locator('li .ledger-anchor-btn')
      .count();
    expect(topLevelLinks).toBe(6);

    const currentCertLinks = await secondList.locator('li').count();
    expect(currentCertLinks).toBe(currentCertifications.length);

    const legacyCertLinks = await thirdList.locator('li').count();
    expect(legacyCertLinks).toBe(legacyCertifications.length);
  });

  test('Should navigate to last certification in the list', async ({
    page
  }) => {
    const lastCertSlug =
      currentCertifications[currentCertifications.length - 1];
    const lastCertName =
      translations.certification.title[lastCertSlug] || lastCertSlug;

    await page
      .locator('.ledger-anchor-btn', { hasText: lastCertName })
      .scrollIntoViewIfNeeded();

    await page.locator('.ledger-anchor-btn', { hasText: lastCertName }).click();

    await page.waitForTimeout(500);

    const certSection = page.locator(`div[name="cert-${lastCertSlug}"]`);
    await expect(certSection).toBeInViewport();
  });
});

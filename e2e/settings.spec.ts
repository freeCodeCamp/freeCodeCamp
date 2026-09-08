import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import {
  currentCertifications,
  legacyCertifications as legacyCerts
} from '@freecodecamp/shared/config/certification-settings';
import { alertToBeVisible } from './utils/alerts';

// In order to claim the Full-Stack cert, the user needs to complete 6 certs.
// Instead of simulating 6 cert claim flows,
// we use the data of Certified User but remove the Full-Stack cert.
test.describe('Settings - Certified User without Full-Stack Certification', () => {
  test.beforeEach(async ({ page }) => {
    execSync(
      'node ../tools/scripts/seed/seed-demo-user --certified-user --set-false isFullStackCert'
    );
    await page.goto('/settings');
  });

  test.afterAll(() => {
    execSync('node ../tools/scripts/seed/seed-demo-user --certified-user');
  });

  test('should allow claiming Full-Stack cert if the user has completed all requirements', async ({
    page
  }) => {
    const claimButton = page.getByRole('button', {
      name: 'Claim Certification Legacy Full-Stack'
    });
    const showButton = page.getByRole('link', {
      name: 'Show Certification Legacy Full-Stack'
    });

    await expect(claimButton).toBeVisible();
    await expect(claimButton).toBeEnabled();
    await claimButton.click();

    await alertToBeVisible(
      page,
      '@certifieduser, you have successfully claimed the Legacy Full-Stack Certification! Congratulations on behalf of the freeCodeCamp.org team!'
    );
    await expect(claimButton).toBeHidden();
    await expect(showButton).toBeVisible();
    await expect(showButton).toHaveAttribute(
      'href',
      '/certification/certifieduser/full-stack'
    );
  });
});

test.describe('Setting - Hash Navigation', () => {
  test('should scroll to certification sections when navigating with hash', async ({
    page
  }) => {
    const allCerts = [...currentCertifications, ...legacyCerts];
    for (const certSlug of allCerts) {
      await page.goto(`/settings#cert-${certSlug}`);

      // Wait for scroll animation
      await page.waitForTimeout(300);

      const certHeading = page.getByRole('heading', {
        name: translations.certification.title[certSlug],
        exact: true
      });

      await expect(certHeading).toBeInViewport();
    }
  });
});

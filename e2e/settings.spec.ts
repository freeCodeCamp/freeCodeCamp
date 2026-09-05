import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';
import {
  currentCertifications,
  legacyCertifications as legacyCerts
} from '@freecodecamp/shared/config/certification-settings';
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

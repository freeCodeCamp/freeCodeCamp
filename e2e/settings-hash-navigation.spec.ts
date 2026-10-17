import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

const sections = [
  { hash: 'danger-zone', heading: translations.settings.danger.heading },
  { hash: 'certifications', heading: translations.settings.headings.certs },
  {
    hash: 'cert-a2-english-for-developers',
    heading: translations.certification.title['a2-english-for-developers']
  }
];

test.describe('Settings page loaded with a hash', () => {
  for (const { hash, heading } of sections) {
    test(`should scroll to #${hash} and keep the hash in the URL`, async ({
      page
    }) => {
      await page.goto(`/settings#${hash}`);

      const sectionHeading = page
        .getByRole('main')
        .getByRole('heading', { name: heading, exact: true });
      await expect(sectionHeading).toBeInViewport();

      const headerBox = await page.getByRole('banner').boundingBox();
      const headerBottom = (headerBox?.y ?? 0) + (headerBox?.height ?? 0);

      // Wait for the scroll to settle with the heading just below the fixed
      // header (allowing for sub-pixel rounding and the section's padding).
      await expect(async () => {
        const scrollY = await page.evaluate(() => window.scrollY);
        await page.waitForTimeout(300);
        expect(await page.evaluate(() => window.scrollY)).toBe(scrollY);

        const headingY = (await sectionHeading.boundingBox())?.y ?? 0;
        expect(headingY).toBeGreaterThanOrEqual(headerBottom - 1);
        expect(headingY).toBeLessThanOrEqual(headerBottom + 50);
      }).toPass();

      // The sidebar's scroll spy rewrites the hash to whichever section it
      // considers active, so the hash only survives if the scroll lands on
      // the target section.
      await expect(page).toHaveURL(new RegExp(`/settings#${hash}$`));
    });
  }
});

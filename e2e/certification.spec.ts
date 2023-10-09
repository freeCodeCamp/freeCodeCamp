import { test, expect, type Page } from '@playwright/test';
import {
  Certification,
  certSlugTypeMap,
  certTypeTitleMap
} from '../shared/config/certification-settings';

let page: Page;
const certificates = Object.values(Certification);
const blackListedCerts = ['upcoming-python-v8'];

test.afterAll(async () => {
  await page.close();
});

// Iterate through all the certificates and test for the following:
// 1. The certificate has wrapper, header and footer
// 2. The certificate itslef has relevant information like the title in it.
// 3. The certificate page has certificate/project links in it.
for (const certificate of certificates) {
  // Skip blacklisted certificates. These are certificates that are not
  // currently live, but are still in the codebase.
  if (blackListedCerts.includes(certificate)) {
    continue;
  }

  test.describe(`Certification page -> test for ${certificate}`, () => {
    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage();
      await page.goto(`/certification/certifieduser/${certificate}`);
    });

    test('The certificate has wrapper, header and footer', async () => {
      const wrapper = page.getByTestId('cert-wrapper');
      await expect(wrapper).toBeVisible();

      const header = page.getByTestId('cert-header');
      await expect(header).toBeVisible();

      const footer = page.getByTestId('cert-footer');
      await expect(footer).toBeVisible();
    });

    test('The certificate itslef has relevant information in it', async () => {
      const infoContainer = page.getByTestId('cert-info-container');
      await expect(infoContainer).toBeVisible();

      const certTitle = page.getByTestId('certification-title');
      await expect(certTitle).toHaveText(
        certTypeTitleMap[
          certSlugTypeMap[certificate as keyof typeof certSlugTypeMap]
        ]
      );
    });

    test('The certificate page has certificate/project links', async () => {
      const certLink = page.getByTestId('cert-links');
      await expect(certLink).toBeVisible();

      const projectLink = page.getByTestId('project-links');
      await expect(projectLink).toBeVisible();
    });
  });
}

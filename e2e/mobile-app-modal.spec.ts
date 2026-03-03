import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

// A challenge in a non-legacy public superblock (responsive-web-design-v9)
const challengePath =
  '/learn/responsive-web-design-v9/workshop-cat-photo-app/step-3';

// A challenge in a non-public superblock — modal should not appear
const nonPublicChallengePath =
  '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/write-your-first-c-sharp-code';

const STORE_KEY = 'hideMobileAppModal';

const mobileAppModal = translations['mobile-app-modal'] as Record<
  string,
  string
>;

test.describe('Mobile App Modal', () => {
  test.skip(
    ({ isMobile }) => isMobile === false,
    'Skip on desktop — modal only renders on mobile viewports'
  );

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(key => localStorage.removeItem(key), STORE_KEY);
  });

  test('shows the modal on a public superblock challenge', async ({ page }) => {
    await page.goto(challengePath);

    await expect(
      page.getByRole('dialog', { name: mobileAppModal.heading })
    ).toBeVisible();
    await expect(page.getByText(mobileAppModal.body)).toBeVisible();
    await expect(
      page.getByRole('link', { name: mobileAppModal.ios })
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: mobileAppModal.android })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: mobileAppModal['do-not-show'] })
    ).toBeVisible();
  });

  test('links point to the correct app stores', async ({ page }) => {
    await page.goto(challengePath);

    await expect(
      page.getByRole('link', { name: mobileAppModal.ios })
    ).toHaveAttribute(
      'href',
      'https://apps.apple.com/us/app/freecodecamp/id6446908151?itsct=apps_box_link&itscg=30200'
    );
    await expect(
      page.getByRole('link', { name: mobileAppModal.android })
    ).toHaveAttribute(
      'href',
      'https://play.google.com/store/apps/details?id=org.freecodecamp'
    );
  });

  test('closing with X hides the modal but does not persist dismissal', async ({
    page
  }) => {
    await page.goto(challengePath);

    await page
      .getByRole('button', { name: translations.buttons.close })
      .click();

    await expect(
      page.getByRole('dialog', { name: mobileAppModal.heading })
    ).not.toBeVisible();

    const stored = await page.evaluate(
      key => localStorage.getItem(key),
      STORE_KEY
    );
    expect(stored).toBeNull();
  });

  test('"do not show me again" hides the modal and persists dismissal', async ({
    page
  }) => {
    await page.goto(challengePath);

    await page
      .getByRole('button', { name: mobileAppModal['do-not-show'] })
      .click();

    await expect(
      page.getByRole('dialog', { name: mobileAppModal.heading })
    ).not.toBeVisible();

    const stored = await page.evaluate(
      key => localStorage.getItem(key),
      STORE_KEY
    );
    expect(stored).not.toBeNull();
  });

  test('does not show again after "do not show me again" and navigating to another challenge', async ({
    page
  }) => {
    await page.goto(challengePath);

    await page
      .getByRole('button', { name: mobileAppModal['do-not-show'] })
      .click();

    // Navigate to another challenge in the same superblock
    await page.goto(
      '/learn/responsive-web-design-v9/workshop-cat-photo-app/step-4'
    );

    await expect(
      page.getByRole('dialog', { name: mobileAppModal.heading })
    ).not.toBeVisible();
  });

  test('does not show on a non-public superblock challenge', async ({
    page
  }) => {
    await page.goto(nonPublicChallengePath);

    await expect(
      page.getByRole('dialog', { name: mobileAppModal.heading })
    ).not.toBeVisible();
  });
});

test.describe('Mobile App Modal — desktop', () => {
  test.skip(
    ({ isMobile }) => isMobile === true,
    'Skip on mobile — this suite verifies the modal is absent on desktop'
  );

  test('does not show on desktop', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(key => localStorage.removeItem(key), STORE_KEY);
    await page.goto(challengePath);

    await expect(
      page.getByRole('dialog', { name: mobileAppModal.heading })
    ).not.toBeVisible();
  });
});

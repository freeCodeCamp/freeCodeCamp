import { test, expect } from '@playwright/test';
import { clearEditor, focusEditor, getEditors } from './utils/editor';

const workshopChallengeUrl =
  '/learn/responsive-web-design-v9/workshop-cafe-menu/step-2';
const penguinChallengeUrl =
  '/learn/2022/responsive-web-design/learn-css-transforms-by-building-a-penguin/step-4';

const workshopPassingSolution = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Cafe Menu</title>
  </head>
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
    </main>
  </body>
</html>`;

test.use({
  viewport: { width: 1080, height: 720 }
});

// The mobile app modal covers the page on mobile user agents (Mobile Chrome /
// Mobile Safari projects), so dismiss it before every test.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem(
      'mobileAppModalDismissedAt',
      JSON.stringify(Date.now())
    );
  });
});

test('Editor is focused on load', async ({ page }) => {
  await page.goto(workshopChallengeUrl);

  await expect(getEditors(page)).toBeFocused();
});

test('Clicking "Check Your Code" reveals failing feedback', async ({
  page
}) => {
  await page.goto(workshopChallengeUrl);

  await page.getByTestId('independentLowerJaw-check-button').click();

  await expect(
    page.getByTestId('independentLowerJaw-failing-hint')
  ).toBeVisible();
});

test('Reset button opens and closes the reset modal', async ({ page }) => {
  await page.goto(workshopChallengeUrl);

  await page.getByTestId('independentLowerJaw-reset-button').click();

  const resetModal = page.getByRole('dialog', { name: 'Reset this lesson?' });
  await expect(resetModal).toBeVisible();

  await page.getByRole('button', { name: /close/i }).click();
  await expect(resetModal).not.toBeVisible();
});

test('Checks hotkeys when instruction is focused', async ({
  page,
  browserName
}) => {
  await page.goto(workshopChallengeUrl);

  const editor = getEditors(page);
  const description = page.locator('#description');
  await focusEditor({ page, isMobile: false });
  await clearEditor({ page, browserName, isMobile: false });
  await editor.fill(workshopPassingSolution);
  await description.click();

  if (browserName === 'webkit') {
    await page.keyboard.press('Meta+Enter');
  } else {
    await page.keyboard.press('Control+Enter');
  }

  await expect(
    page.getByTestId('independentLowerJaw-check-button')
  ).not.toBeFocused();
});

test('Hint text should not contain placeholders `fcc-expected`', async ({
  page,
  browserName
}) => {
  await page.goto(penguinChallengeUrl);

  const editor = getEditors(page);
  // The viewport is fixed to desktop width, so the desktop layout is shown
  // even on the mobile projects.
  await focusEditor({ page, isMobile: false });
  await clearEditor({ page, browserName, isMobile: false });
  await editor.fill(
    'body{background:linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));margin:0;padding:0;width:5%;height:100vh}'
  );

  await page.getByTestId('independentLowerJaw-check-button').click();

  const hintDescription = page.getByTestId('independentLowerJaw-failing-hint');
  await expect(hintDescription).toContainText(
    'You should give body a width of 100%, but found 5%',
    { useInnerText: true }
  );
});

test.describe('Unauthenticated user', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('Focuses on the sign in button when unauthenticated user completes a step', async ({
    page,
    browserName
  }) => {
    await page.goto(workshopChallengeUrl);

    const editor = getEditors(page);
    await focusEditor({ page, isMobile: false });
    await clearEditor({ page, browserName, isMobile: false });
    await editor.fill(workshopPassingSolution);

    await page.getByTestId('independentLowerJaw-check-button').click();

    const signInLink = page.getByTestId('independentLowerJaw-signin-link');
    await expect(
      page.getByTestId('independentLowerJaw-submit-button')
    ).toBeVisible();
    await expect(signInLink).toBeVisible();
    await expect(
      page.getByTestId('independentLowerJaw-check-button')
    ).toHaveCount(0);
    await expect(signInLink).toBeFocused();
  });
});

test.describe('Authenticated user', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test('Focuses on the submit button when authenticated user completes a step', async ({
    page,
    browserName
  }) => {
    await page.goto(workshopChallengeUrl);

    const editor = getEditors(page);
    await focusEditor({ page, isMobile: false });
    await clearEditor({ page, browserName, isMobile: false });
    await editor.fill(workshopPassingSolution);

    await page.getByTestId('independentLowerJaw-check-button').click();

    const submitButton = page.getByTestId('independentLowerJaw-submit-button');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toContainText('Submit and continue');
    await expect(submitButton).toBeFocused();
    await expect(
      page.getByTestId('independentLowerJaw-signin-link')
    ).toHaveCount(0);
  });
});

test.describe('Mobile viewport', () => {
  test.use({
    viewport: { width: 393, height: 851 },
    isMobile: true
  });

  test('Renders the lower jaw and reveals failing feedback when "Check Your Code" is clicked', async ({
    page
  }) => {
    await page.goto(workshopChallengeUrl);

    const lowerJaw = page.getByTestId('independentLowerJaw-container');
    await expect(lowerJaw).toBeVisible();

    await page.getByTestId('independentLowerJaw-check-button').click();

    await expect(
      page.getByTestId('independentLowerJaw-failing-hint')
    ).toBeVisible();
  });

  test('Resets the lower jaw when prompted', async ({ page }) => {
    await page.goto(workshopChallengeUrl);

    await page.getByTestId('independentLowerJaw-check-button').click();

    const hint = page.getByTestId('independentLowerJaw-failing-hint');
    await expect(hint).toBeVisible();

    await page.getByTestId('independentLowerJaw-reset-button').click();

    await expect(
      page.getByRole('dialog', { name: 'Reset this lesson?' })
    ).toBeVisible();

    await page.getByRole('button', { name: 'Reset this lesson' }).click();

    await expect(hint).not.toBeVisible();
    await expect(
      page.getByTestId('independentLowerJaw-check-button')
    ).toBeVisible();
  });

  test('Shows the submit button after a passing check', async ({
    page,
    browserName
  }) => {
    await page.goto(workshopChallengeUrl);

    const editor = getEditors(page);
    await focusEditor({ page, isMobile: true });
    await clearEditor({ page, browserName, isMobile: true });
    await editor.fill(workshopPassingSolution);

    await page.getByTestId('independentLowerJaw-check-button').click();

    const submitButton = page.getByTestId('independentLowerJaw-submit-button');
    await expect(submitButton).toBeVisible();
    await expect(
      page.getByTestId('independentLowerJaw-check-button')
    ).toHaveCount(0);
  });
});

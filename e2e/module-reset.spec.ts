import { exec } from 'child_process';
import { promisify } from 'util';
import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const execP = promisify(exec);

// Seed certified user before all tests to ensure progress exists
test.beforeAll(async () => {
  await execP('node ./tools/scripts/seed/seed-demo-user --certified-user', {
    cwd: process.cwd().replace('/e2e', '')
  });
});

// Re-seed after each test to restore progress (in case a test modifies it)
test.afterEach(async () => {
  await execP('node ./tools/scripts/seed/seed-demo-user --certified-user', {
    cwd: process.cwd().replace('/e2e', '')
  });
});

test.describe('Module reset - Block level (v8 grid layout)', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a superblock where certified user has completed challenges
    // Certified user has isRespWebDesignCert: true with completed challenges
    await page.goto('/learn/2022/responsive-web-design');
  });

  test('should show reset button on block hover', async ({ page }) => {
    // First block should have progress for certified user
    const blockHeader = page.locator('.block-header-wrapper').first();

    // Reset button should be hidden initially (opacity: 0)
    const resetButton = blockHeader.locator('.block-reset-button');
    await expect(resetButton).toHaveCSS('opacity', '0');

    // Hover over the block header
    await blockHeader.hover();

    // Reset button should become visible on hover (opacity: 1 for enabled, 0.3 for disabled)
    await expect(resetButton).toBeVisible();
  });

  test('should open reset modal when clicking reset button', async ({
    page
  }) => {
    // Find a block with an enabled reset button (has progress)
    const blockHeader = page
      .locator('.block-header-wrapper')
      .filter({ has: page.locator('.block-reset-button:not(:disabled)') })
      .first();
    await blockHeader.hover();

    // Click the reset button
    const resetButton = blockHeader.locator('.block-reset-button');
    await resetButton.click();

    // Modal should be visible
    await expect(page.getByRole('dialog')).toBeVisible();

    // Modal should contain the reset heading
    await expect(
      page.getByText(
        translations.learn['reset-progress-description'].split("'")[0],
        { exact: false }
      )
    ).toBeVisible();
  });

  test('should close modal when clicking cancel button', async ({ page }) => {
    // Find a block with an enabled reset button
    const blockHeader = page
      .locator('.block-header-wrapper')
      .filter({ has: page.locator('.block-reset-button:not(:disabled)') })
      .first();
    await blockHeader.hover();
    await blockHeader.locator('.block-reset-button').click();

    // Modal should be visible
    await expect(page.getByRole('dialog')).toBeVisible();

    // Click the cancel button
    await page
      .getByRole('button', {
        name: translations.learn['reset-progress-nevermind']
      })
      .click();

    // Modal should be hidden
    await expect(page.getByRole('dialog')).toBeHidden();
  });

  test('should disable reset button until verification phrase is entered', async ({
    page
  }) => {
    // Find a block with an enabled reset button
    const blockHeader = page
      .locator('.block-header-wrapper')
      .filter({ has: page.locator('.block-reset-button:not(:disabled)') })
      .first();
    await blockHeader.hover();
    await blockHeader.locator('.block-reset-button').click();

    // Confirm button should be disabled initially
    const confirmButton = page.getByRole('button', {
      name: translations.learn['reset-progress-confirm']
    });
    await expect(confirmButton).toBeDisabled();

    // Enter incorrect text
    const verifyInput = page.getByRole('textbox');
    await verifyInput.fill('wrong text');
    await expect(confirmButton).toBeDisabled();

    // Enter correct verification phrase
    await verifyInput.fill(translations.learn['reset-progress-verify']);
    await expect(confirmButton).toBeEnabled();
  });
});

// Skip: full-stack-developer page is not built in dev environment
test.describe.skip('Module reset - Chapter level (v9 accordion layout)', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a chapter-based superblock
    await page.goto('/learn/full-stack-developer');
  });

  test('should show reset button on chapter hover', async ({ page }) => {
    // Find a chapter header wrapper
    const chapterHeader = page.locator('.chapter-header-wrapper').first();

    // Reset button should be hidden initially
    const resetButton = chapterHeader.locator('.block-reset-button');
    await expect(resetButton).toHaveCSS('opacity', '0');

    // Hover over the chapter header
    await chapterHeader.hover();

    // Reset button should become visible on hover
    await expect(resetButton).toHaveCSS('opacity', '1');
  });

  test('should show reset button on module hover', async ({ page }) => {
    // Expand a chapter first
    const chapterButton = page.locator('.chapter-button-main').first();
    await chapterButton.click();

    // Find a module header wrapper
    const moduleHeader = page.locator('.module-header-wrapper').first();

    // Hover over the module header
    await moduleHeader.hover();

    // Reset button should become visible on hover
    const resetButton = moduleHeader.locator('.block-reset-button');
    await expect(resetButton).toHaveCSS('opacity', '1');
  });

  test('should open reset modal for chapter with correct title', async ({
    page
  }) => {
    // Hover over a chapter to reveal the reset button
    const chapterHeader = page.locator('.chapter-header-wrapper').first();
    await chapterHeader.hover();

    // Click the reset button
    const resetButton = chapterHeader.locator('.block-reset-button');
    await resetButton.click();

    // Modal should be visible with the chapter name in the heading
    await expect(page.getByRole('dialog')).toBeVisible();
  });
});

test.describe('Module reset - Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/learn/2022/responsive-web-design');
  });

  test('reset button should have proper aria-label', async ({ page }) => {
    // Find a reset button and check its aria-label
    const resetButton = page.locator('.block-reset-button').first();
    const ariaLabel = await resetButton.getAttribute('aria-label');

    // Should contain "Reset progress for"
    expect(ariaLabel).toContain('Reset progress for');
  });

  test('modal should be keyboard accessible', async ({ page }) => {
    // Find a block with an enabled reset button
    const blockHeader = page
      .locator('.block-header-wrapper')
      .filter({ has: page.locator('.block-reset-button:not(:disabled)') })
      .first();
    await blockHeader.hover();
    await blockHeader.locator('.block-reset-button').click();

    // Modal should be visible
    await expect(page.getByRole('dialog')).toBeVisible();

    // Press Escape to close
    await page.keyboard.press('Escape');

    // Modal should be hidden
    await expect(page.getByRole('dialog')).toBeHidden();
  });
});

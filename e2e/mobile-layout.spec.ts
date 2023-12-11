import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(({ isMobile }) => {
  test.skip(isMobile === false, 'This testing file is for mobile layout only.');
});

test.describe('Classic challenge - 5 tabs mobile layout component', () => {
  test('The page has mobile layout with "Instruction", "Code", "Console", "Preview", "Portal Preview" tabs', async ({
    page
  }) => {
    await page.goto(
      'learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form'
    );

    const tabs = page.getByTestId('tabs');
    await expect(tabs).toBeVisible();

    const instructions = page.getByRole('tab', { name: 'Instructions' });
    await expect(instructions).toBeVisible();
    const code = page.getByRole('tab', { name: 'Code' });
    await expect(code).toBeVisible();
    const console = page.getByRole('tab', { name: 'Console' });
    await expect(console).toBeVisible();
    const preview = page.getByRole('tab', { name: 'Preview' });
    await expect(preview).toBeVisible();
    const portalButton = page.getByRole('button', {
      name: 'Move the preview to a new window and focus it'
    });
    await expect(portalButton).toBeVisible();

    const help = page.getByRole('button', { name: 'Help' });
    await expect(help).toBeVisible();
    const reset = page.getByRole('button', { name: 'Save' });
    await expect(reset).toBeVisible();
    const run = page.getByRole('button', { name: 'Run' });
    await expect(run).toBeVisible();
  });
});

test.describe('Classic challenge - 3 tabs mobile layout component', () => {
  test('The page has mobile layout with "Instruction", "Code", "Console" tabs', async ({
    page
  }) => {
    await page.goto(
      'learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers'
    );

    const tabs = page.getByTestId('tabs');
    await expect(tabs).toBeVisible();

    const instructions = page.getByRole('tab', { name: 'Instructions' });
    await expect(instructions).toBeVisible();
    const code = page.getByRole('tab', { name: 'Code' });
    await expect(code).toBeVisible();
    const console = page.getByRole('tab', { name: 'Console' });
    await expect(console).toBeVisible();

    const help = page.getByRole('button', { name: 'Help' });
    await expect(help).toBeVisible();
    const reset = page.getByRole('button', { name: 'Reset' });
    await expect(reset).toBeVisible();
    const run = page.getByRole('button', { name: 'Run' });
    await expect(run).toBeVisible();
  });
});

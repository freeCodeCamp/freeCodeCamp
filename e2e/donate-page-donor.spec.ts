import { execSync } from 'child_process';
import { test, expect } from '@playwright/test';

test.describe('Donate page', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test.beforeEach(async ({ page }) => {
    execSync('node ./tools/scripts/seed/seed-demo-user certified-user --donor');
    await page.goto('/donate');
  });

  test.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
  });

  test('should render the donate page correctly', async ({ page }) => {
    await expect(
      page.getByText('Thank You for Being a Supporter')
    ).toBeVisible();

    await expect(
      page.getByText(
        'Your contribution will be crucial in creating resources that empower millions of people to learn new skills and support their families.'
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        'If you want to support our charity further, please consider making a one-time donation, sending us a check, or learning about other ways you could support our charity.'
      )
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'making a one-time donation' })
    ).toHaveAttribute(
      'href',
      'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp/#how-can-i-make-a-one-time-donation'
    );
  });
});

import { execSync } from 'child_process';
import { test, expect, Page } from '@playwright/test';
test.use({ storageState: 'playwright/.auth/development-user.json' });

test.beforeAll(() => {
  execSync('node ./tools/scripts/seed/seed-demo-user');
});

test.afterAll(() => {
  execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
});
const projects = [
  'random-quote-machine',
  'markdown-previewer',
  'drum-machine',
  'javascript-calculator',
  '25--5-clock'
];

test.describe('Donate page', () => {
  const submitProject = async (page: Page, str: string) => {
    await page.goto(
      `/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-${str}`
    );
    await page
      .getByRole('textbox', { name: 'solution' })
      .fill('https://codepen.io/camperbot/full/oNvPqqo');
    await page
      .getByRole('button', { name: "I've completed this challenge" })
      .click();
    await page
      .getByRole('button', { name: 'Submit and go to next challenge' })
      .click();
  };

  test('Should be possible to submit projects, after the donation modal should show', async ({
    page
  }) => {
    for (const project of projects) {
      await submitProject(page, project);
    }

    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(
      page.locator("div[role='dialog'] img#donation-animation")
    ).toBeVisible();
  });
});

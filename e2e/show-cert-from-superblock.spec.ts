import { execSync } from 'child_process';
import { Page, expect, test } from '@playwright/test';
import { SuperBlocks } from '../shared/config/superblocks';

test.use({ storageState: 'playwright/.auth/development-user.json' });

test.beforeAll(() => {
  execSync('node ./tools/scripts/seed/seed-demo-user');
});

test.afterAll(() => {
  execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
});

const projects = {
  superBlock: SuperBlocks.FrontEndDevLibs,
  block: 'front-end-development-libraries-projects',
  challenges: [
    {
      slug: 'build-a-random-quote-machine',
      solution: 'https://codepen.io/moT01/pen/ZpJpKp'
    },
    {
      slug: 'build-a-markdown-previewer',
      solution: 'https://codepen.io/moT01/pen/LrrjGz?editors=1010'
    },
    {
      slug: 'build-a-drum-machine',
      solution: 'https://codepen.io/moT01/full/qKyKYL/'
    },
    {
      slug: 'build-a-javascript-calculator',
      solution: 'https://codepen.io/moT01/full/JBvzNL/'
    },
    {
      slug: 'build-a-25--5-clock',
      solution: 'https://codepen.io/moT01/pen/vgOaoJ'
    }
  ]
};

test.describe('Front End Development Libraries Superblock', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/learn/front-end-development-libraries');
  });

  test('should navigate to "/settings#cert-front-end-development-libraries" when clicking the "Go to settings to claim your certification" anchor', async ({
    page
  }) => {
    await page
      .getByRole('link', { name: 'Go to settings to claim your certification' })
      .click();
    expect(page.url()).toContain(
      '/settings#cert-front-end-development-libraries'
    );
  });
});

test.describe('After submitting all 5 projects', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/settings');
  });

  test('should be possible to view certifications from the settings page', async ({
    page
  }) => {
    await submitFrontEndSolutions(page);
    await page.goto(`/learn/${projects.superBlock}/`);
    await page
      .getByRole('link', { name: 'Go to settings to claim your certification' })
      .click();
    expect(page.url()).toContain('/settings');

    await page.getByTestId('radioBisLocked').click();
    await page.getByTestId('radioBname').click();
    await page.getByTestId('radioBshowCerts').click();
    await page.getByTestId('radioBshowTimeLine').click();

    await page.getByRole('button', { name: 'Save' }).nth(2).click();

    await page
      .getByRole('button', {
        name: "I agree to freeCodeCamp's Academic Honesty Policy."
      })
      .click();
    await page.getByTestId('btn-for-front-end-development-libraries').click();
    await page.getByRole('link', { name: 'Show Certification' }).click();
    await page.waitForURL(
      `/certification/developmentuser/${projects.superBlock}`
    );
    await expect(page.getByTestId('twitter-share-btn')).toBeVisible();
  });
});

async function submitFrontEndSolutions(page: Page) {
  const { superBlock, block, challenges } = projects;

  for (const { slug, solution } of challenges) {
    const url = `/learn/${superBlock}/${block}/${slug}`;
    await page.goto(url);
    await page.getByTestId('solution-form-control').fill(solution);
    await page
      .getByRole('button', { name: "I've completed this challenge" })
      .click();
    await page
      .getByRole('button', { name: 'Submit and go to next challenge' })
      .click();
  }
}

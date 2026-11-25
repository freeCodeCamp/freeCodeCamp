import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';
import { allowTrailingSlash } from './utils/url';

const nextChallengeUrl =
  '/learn/data-analysis-with-python/data-analysis-with-python-projects/demographic-data-analyzer';

test.use({ userPreset: 'certified' });

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/data-analysis-with-python/data-analysis-with-python-projects/mean-variance-standard-deviation-calculator'
  );
  await page.getByLabel('Solution Link').fill('https://example.com');
  await page
    .getByRole('button', { name: "I've completed this challenge" })
    .click();
});

test('resumes at the next challenge after reloading the session', async ({
  page
}) => {
  test.skip(!process.env.CLICKHOUSE_URL, 'Requires ClickHouse persistence');

  const activityResponse = page.waitForResponse(
    response =>
      new URL(response.url()).pathname === '/activity' &&
      response.request().method() === 'POST'
  );
  await page
    .getByRole('button', { name: translations.buttons['submit-and-go'] })
    .click();
  await expect(page).toHaveURL(allowTrailingSlash(nextChallengeUrl));
  expect((await activityResponse).status()).toBe(200);

  // A new page load reads the persisted URL, not the previous Redux state.
  await page.goto('/learn');
  const card = page.getByRole('region', {
    name: translations.misc['continue-learning']
  });
  await expect(card.getByRole('progressbar')).toBeVisible();
  const resume = card.getByRole('link', {
    name: translations.buttons['resume-progress']
  });
  await expect(resume).toHaveAttribute(
    'href',
    allowTrailingSlash(nextChallengeUrl)
  );
  await resume.click();
  await expect(page).toHaveURL(allowTrailingSlash(nextChallengeUrl));
});

test('does not wait for resume tracking before navigating to the next challenge', async ({
  page
}) => {
  let releaseActivity!: () => void;
  const pendingActivity = new Promise<void>(resolve => {
    releaseActivity = resolve;
  });
  let activityStarted!: () => void;
  const activityRequest = new Promise<void>(resolve => {
    activityStarted = resolve;
  });
  await page.route('**/activity', async route => {
    activityStarted();
    await pendingActivity;
    await route.abort();
  });

  try {
    await page
      .getByRole('button', { name: translations.buttons['submit-and-go'] })
      .click();
    await activityRequest;
    await expect(page).toHaveURL(allowTrailingSlash(nextChallengeUrl));
  } finally {
    releaseActivity();
    await page.unrouteAll({ behavior: 'wait' });
  }
});

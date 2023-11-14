import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto('/learn');
});

const IntroObject = {
  randomQuote: 'random-quote',
  randomAuthor: 'random-author',
  youtubeChannelPlaceholder: "<0>freeCodeCamp's YouTube channel</0>",
  youtubeText: "freeCodeCamp's YouTube channel",
  forumPlaceholder: '<0>the freeCodeCamp forum</0>',
  forumText: 'the freeCodeCamp forum',
  userNamePlaceholder: '{{name}}',
  userName: 'Development User',
  startAtBeginning:
    'If you are new to coding, we recommend you start at the beginning.'
};

const IntroDescription = [
  translations.learn['read-this'].p1,
  translations.learn['read-this'].p2,
  translations.learn['read-this'].p3,
  translations.learn['read-this'].p4,
  translations.learn['read-this'].p5,
  translations.learn['read-this'].p6,
  translations.learn['read-this'].p7,
  translations.learn['read-this'].p8,
  translations.learn['read-this'].p9.replace(
    IntroObject.youtubeChannelPlaceholder,
    IntroObject.youtubeText
  ),
  translations.learn['read-this'].p10,
  translations.learn['read-this'].p11.replace(
    IntroObject.forumPlaceholder,
    IntroObject.forumText
  ),
  translations.learn['read-this'].p12
];

test.describe('Intro Component E2E Test Suite with Signed In User', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });
  test('Verifies the Correct Intro component heading', async ({ page }) => {
    await expect(
      page.getByText(
        translations.learn['welcome-1'].replace(
          IntroObject.userNamePlaceholder,
          IntroObject.userName
        )
      )
    ).toBeVisible();
  });

  test('Verifies the Random Quote Section and "Start at Beginning" text', async ({
    page
  }) => {
    const quote = page.getByTestId(IntroObject.randomQuote);
    const author = page.getByTestId(IntroObject.randomAuthor);
    expect(quote).not.toBeNull();
    expect(author).not.toBeNull();
    const startAtBeginning = page.getByText(IntroObject.startAtBeginning);
    await expect(startAtBeginning).toBeVisible();
  });
});

test.describe('Intro Component E2E Test Suite with Signed Out User', () => {
  test('Verifies the Correct Intro component heading', async ({ page }) => {
    await expect(page.getByText(translations.learn.heading)).toBeVisible();
  });

  test('Verifies Intro Description Section', async ({ page }) => {
    await expect(
      page.getByText(translations.learn['read-this'].heading)
    ).toBeVisible();
    for (let i = 0; i < IntroDescription.length; i++) {
      await expect(page.getByText(IntroDescription[i])).toBeVisible();
    }
    await expect(page.getByText(translations.misc['quincy'])).toBeVisible();
  });

  test('Verifies Login CTA', async ({ page }) => {
    await page.getByText(translations.buttons['logged-out-cta-btn']).click();
  });
});

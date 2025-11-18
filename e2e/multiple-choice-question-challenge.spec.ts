import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const pageWithSpeaking =
  '/learn/b1-english-for-developers/learn-about-adverbial-phrases/task-19';
const pageWithoutSpeaking =
  '/learn/responsive-web-design-v9/lecture-what-is-css/what-is-the-basic-anatomy-of-a-css-rule';

test.describe('Multiple Choice Question Challenge - With Speaking Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pageWithSpeaking);
  });

  test('should show the speaking button and open the speaking modal', async ({
    page,
    browserName
  }) => {
    test.skip(
      browserName === 'firefox',
      'Skip on Firefox - speech recognition unsupported'
    );

    const speakingButtons = page.getByRole('button', {
      name: translations['speaking-modal']['speaking-button']
    });
    const speakingButtonCount = await speakingButtons.count();
    expect(speakingButtonCount).toBeGreaterThan(0);

    const radioCount = await page.getByRole('radio').count();
    expect(speakingButtonCount).toBe(radioCount);

    for (let i = 0; i < speakingButtonCount; i++) {
      const btn = speakingButtons.nth(i);
      await expect(btn).toBeVisible();

      const describedBy = await btn.getAttribute('aria-describedby');
      expect(describedBy).toBeTruthy();

      // Ensure aria-describedby points to an existing element
      await expect(page.locator(`#${describedBy}`)).toBeVisible();

      await expect(btn).toHaveAttribute(
        'aria-label',
        translations['speaking-modal']['speaking-button']
      );
    }

    await speakingButtons.first().click();

    await expect(page.getByRole('dialog')).toBeVisible();

    await expect(
      page.getByRole('button', {
        name: translations['speaking-modal']['play']
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: translations['speaking-modal']['record']
      })
    ).toBeVisible();
  });

  test('should show not-supported message on Firefox', async ({
    page,
    browserName
  }) => {
    test.skip(
      browserName !== 'firefox',
      'Run only on Firefox to validate unsupported path'
    );

    const radioCount = await page.getByRole('radio').count();
    expect(radioCount).toBeGreaterThan(1);

    const speakingButton = page
      .getByRole('button', {
        name: translations['speaking-modal']['speaking-button']
      })
      .first();
    await expect(speakingButton).toBeVisible();

    await speakingButton.click();

    await expect(page.getByRole('dialog')).toBeVisible();

    await expect(
      page.getByText(
        translations['speaking-modal']['speech-recognition-not-supported']
      )
    ).toBeVisible();
  });
});

test.describe('Multiple Choice Question Challenge - Without Speaking Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pageWithoutSpeaking);
  });

  test('should not show speaking controls on a challenge without speaking', async ({
    page
  }) => {
    const radioCount = await page.getByRole('radio').count();
    expect(radioCount).toBeGreaterThan(1);

    const speakingButtonsCount = await page
      .getByRole('button', {
        name: translations['speaking-modal']['speaking-button']
      })
      .count();

    expect(speakingButtonsCount).toBe(0);
  });
});

import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const pageWithSpeaking =
  '/learn/b1-english-for-developers/learn-about-adverbial-phrases/task-19';

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

    const speakingButton = page
      .getByRole('button', {
        name: translations['speaking-modal']['speaking-button']
      })
      .first();
    await expect(speakingButton).toBeVisible();

    await speakingButton.click();

    await expect(page.getByRole('dialog')).toBeVisible();

    const playButton = page.getByRole('button', {
      name: translations['speaking-modal']['play']
    });
    await expect(playButton).toBeVisible();
    await expect(playButton).toBeFocused(); // The button is focused by default
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

import { test, expect } from './fixtures/isolated-user';

import translations from '../client/i18n/locales/english/translations.json';

const ambienceLabel = translations.settings.labels['ambient-sound-mode'];
const soundLabel = translations.settings.labels['sound-mode'];

test.use({ userPreset: 'certified' });

test.describe('Campfire ambience setting', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/settings');
  });

  test('the campfire mode toggle is available', async ({ page }) => {
    // Guards the assertions below: if this disappears, the ambience assertions
    // would pass for the wrong reason.
    await expect(
      page.getByLabel(soundLabel).getByRole('button', {
        name: translations.buttons.on
      })
    ).toBeVisible();
  });

  test('no ambience control is shown while the feature is off', async ({
    page
  }) => {
    // `ambient-sound` is not part of the default GrowthBook payload, so the
    // whole control must be absent rather than present and inert.
    await expect(page.getByLabel(ambienceLabel)).toHaveCount(0);
    await expect(
      page.getByText(translations.settings['ambient-sound-preparing'])
    ).toHaveCount(0);
  });

  test('the campfire volume slider still works without the feature', async ({
    page
  }) => {
    const slider = page.getByRole('slider', {
      name: new RegExp(translations.settings['sound-volume'], 'i')
    });

    await expect(slider).toBeVisible();
    await slider.fill('80');
    await expect(slider).toHaveValue('80');
  });
});

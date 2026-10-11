import { seedMsUsername } from '@freecodecamp/scripts-seed/seed-isolated-user';
import { test, expect } from './fixtures/isolated-user';
import translations from '../client/i18n/locales/english/translations.json';
import { alertToBeVisible } from './utils/alerts';

test.use({ userPreset: 'certified' });

test.beforeEach(async ({ page, isolatedUser }) => {
  await seedMsUsername(isolatedUser.email);
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test.describe('Link MS user component unlink flow', () => {
  test('should allow the user to unlink their MS account and display a form for relinking', async ({
    page
  }) => {
    const unlinkButton = page.getByRole('button', {
      name: translations.buttons['unlink-account']
    });
    await expect(unlinkButton).toBeVisible();
    await unlinkButton.click();

    await alertToBeVisible(page, translations.flash.ms.transcript.unlinked);

    await expect(
      page.getByRole('heading', {
        name: translations.learn.ms['link-header'],
        level: 2
      })
    ).toBeVisible();
    await expect(page.getByText(translations.learn.ms.unlinked)).toBeVisible();

    const transcriptLinkInput = page.getByLabel(
      translations.learn.ms['transcript-label']
    );
    await expect(transcriptLinkInput).toBeVisible();
  });
});

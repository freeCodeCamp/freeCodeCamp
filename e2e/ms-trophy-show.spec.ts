import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const verifyTrophyButtonText = translations.buttons['verify-trophy'];
test.use({ storageState: { cookies: [], origins: [] } });
test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test('the page should render with correct title and description', async ({
  page
}) => {
  await expect(page).toHaveTitle(
    'Write Your First Code Using C# - Trophy - Write Your First Code Using C# | Learn | freeCodeCamp.org'
  );
  const title = page.getByTestId('challenge-title');
  await expect(title).toBeVisible();
  await expect(title).toContainText('Trophy - Write Your First Code Using C#');

  const description = page.getByTestId('challenge-description');
  await expect(description).toBeVisible();
});

test('Correct Verify Trophy button', async ({ page }) => {
  const askHelpButton = page.getByRole('button', {
    name: verifyTrophyButtonText
  });
  await expect(askHelpButton).toBeVisible();
  await expect(askHelpButton).toHaveText(verifyTrophyButtonText);
  await expect(askHelpButton).toBeDisabled();
});



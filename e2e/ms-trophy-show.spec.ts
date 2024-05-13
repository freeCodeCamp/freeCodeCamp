import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

const verifyTrophyButtonText = translations.buttons['verify-trophy'];
const askForHelpButtonText = translations.buttons['ask-for-help'];
const linkAccountButtonText = translations.buttons['link-account'];
const checkAnswerButtonText = translations.buttons['check-answer'];

const trophyChallenge =
  '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp';

const challnge =
  '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/write-your-first-c-sharp-code';

test('renders buttons on challenge page', async ({ page }) => {
  await page.goto(challnge);
  const checkAnswerButton = page.getByRole('button', {
    name: checkAnswerButtonText
  });
  await expect(checkAnswerButton).toBeVisible();

  const askForHelpButton = page.getByRole('button', {
    name: askForHelpButtonText
  });
  await expect(askForHelpButton).toBeVisible();
});

test('the page should render with correct title and description', async ({
  page
}) => {
  await page.goto(trophyChallenge);
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
  await page.goto(trophyChallenge);
  const askHelpButton = page.getByRole('button', {
    name: verifyTrophyButtonText
  });
  await expect(askHelpButton).toBeVisible();
  await expect(askHelpButton).toHaveText(verifyTrophyButtonText);
  await expect(askHelpButton).toBeDisabled();
});

test('Correct Ask for help button', async ({ page }) => {
  await page.goto(trophyChallenge);
  const checkAnswerButton = page.getByRole('button', {
    name: askForHelpButtonText
  });
  await expect(checkAnswerButton).toBeVisible();
  await expect(checkAnswerButton).toContainText(askForHelpButtonText);

  await checkAnswerButton.click();
  await expect(
    page.getByRole('heading', {
      name: translations.buttons['ask-for-help'],
      exact: true
    })
  ).toBeVisible();
});

test('Correct Link Account button', async ({ page }) => {
  await page.goto(trophyChallenge);
  const linkAccountButton = page.getByRole('button', {
    name: linkAccountButtonText
  });
  await expect(linkAccountButton).toBeVisible();
});

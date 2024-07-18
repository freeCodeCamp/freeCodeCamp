import { type Page } from '@playwright/test';

export const getEditors = (page: Page) => {
  return page.getByLabel(
    'Editor content;Press Alt+F1 for Accessibility Options'
  );
};

export const focusEditor = async ({
  page,
  isMobile
}: {
  page: Page;
  isMobile: boolean;
}) => {
  if (isMobile) {
    const codeBtn = page.getByRole('tab', { name: 'Code' });
    // The outer div intercepts the click action of its children,
    // preventing Playwright from verifying if the children actually receive the click.
    // In reality, the children do receive the click, so we bypass that check here.
    await codeBtn.click({ force: true });
  }

  await getEditors(page).focus();
};

export async function clearEditor({
  page,
  browserName,
  isMobile = false
}: {
  page: Page;
  browserName: string;
  isMobile?: boolean;
}) {
  // TODO: replace with ControlOrMeta when it's supported
  if (browserName === 'webkit' && !isMobile) {
    await page.keyboard.press('Meta+a');
  } else {
    await page.keyboard.press('Control+a');
  }
  await page.keyboard.press('Backspace');
}

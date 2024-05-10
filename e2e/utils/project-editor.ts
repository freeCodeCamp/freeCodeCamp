import { type Page } from '@playwright/test';

export const getProjectEditors = async ({
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

  return page.getByLabel(
    'Editor content;Press Alt+F1 for Accessibility Options'
  );
};

export const focusProjectEditor = async ({
  page,
  isMobile,
  browserName
}: {
  page: Page;
  isMobile: boolean;
  browserName: string;
}) => {
  const editor = await getProjectEditors({ page, isMobile });

  // The editor has an overlay div, which prevents the click event from bubbling up in iOS Safari.
  // This is a quirk in this browser-OS combination, and the workaround here is to use `.focus()`
  // in place of `.click()` to focus on the editor.
  // Ref: https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
  if (isMobile && browserName === 'webkit') {
    await editor.focus();
  } else {
    await editor.click();
  }
};

export async function clearProjectEditor({
  page,
  browserName
}: {
  page: Page;
  browserName: string;
}) {
  // TODO: replace with ControlOrMeta when it's supported
  if (browserName === 'webkit') {
    await page.keyboard.press('Meta+a');
  } else {
    await page.keyboard.press('Control+a');
  }
  await page.keyboard.press('Backspace');
}

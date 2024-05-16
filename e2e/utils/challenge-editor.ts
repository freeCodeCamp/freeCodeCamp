import { type Page } from '@playwright/test';

/**
 * Retrieves any editor elements on the page.
 * @param page - The Playwright page object.
 * @returns The editor elements.
 */
export function getEditors(page: Page) {
  return page.getByLabel(
    'Editor content;Press Alt+F1 for Accessibility Options'
  );
}

export async function focusEditor({
  page,
  isMobile,
  browserName
}: {
  page: Page;
  isMobile: boolean;
  browserName: string;
}) {
  // The editor has an overlay div, which prevents the click event from bubbling up in iOS Safari.
  // This is a quirk in this browser-OS combination, and the workaround here is to use `.focus()`
  // in place of `.click()` to focus on the editor.
  // Ref: https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
  if (isMobile && browserName === 'webkit') {
    await getEditors(page).focus();
  } else {
    await getEditors(page).click();
  }
}

export async function clearEditor({
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

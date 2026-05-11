import { test, expect } from '@playwright/test';

const html = {
  challengePath:
    '/learn/responsive-web-design-v9/lecture-what-is-css/what-are-some-default-browser-styles-applied-to-html',
  challengeTitle: 'What Are Some Default Browser Styles Applied to HTML?',
  paragraphOneText:
    'When you start working with HTML and CSS, you\'ll notice that some styles are applied to your web pages even before you write any CSS. These styles are called "default browser styles" or "user-agent styles".',
  codeSnippet: '<h1>Heading 1</h1>'
};

const js = {
  challengePath:
    '/learn/javascript-v9/lecture-introduction-to-javascript/what-is-a-data-type'
};

test.describe('Interactive Editor', () => {
  // skipping because I don't know of a page with paragraph nodules that doesn't also have an interactive editor toggle
  test.skip('should render paragraph nodules as text and not show the interactive editor toggle', async ({
    page
  }) => {
    await page.goto(html.challengePath);

    await expect(
      page.getByRole('heading', { name: html.challengeTitle })
    ).toBeVisible();

    await expect(page.getByText(html.paragraphOneText)).toBeVisible();

    await expect(
      page.getByRole('button', { name: /interactive editor/i })
    ).not.toBeVisible();
  });

  test('should toggle between interactive editor and static code view when Interactive Editor button is clicked', async ({
    page
  }) => {
    await page.goto(html.challengePath);

    await expect(
      page.getByRole('heading', { name: html.challengeTitle })
    ).toBeVisible();
    await expect(page.getByText(html.paragraphOneText)).toBeVisible();

    // Initially, interactive editor should be hidden, static code view should be visible
    await expect(page.getByTestId('sp-interactive-editor')).not.toBeVisible();
    await expect(
      page.locator('pre code').filter({ hasText: html.codeSnippet })
    ).toHaveCount(1);

    // Click the toggle button
    const toggleButton = page.getByRole('button', {
      name: /interactive editor/i
    });
    await toggleButton.click();

    // Interactive editor should be visible, static code view hidden
    await expect(
      page.getByTestId('sp-interactive-editor').first()
    ).toBeVisible();
    await expect(page.locator('pre code')).not.toBeVisible();

    // Click the toggle button again
    await toggleButton.click();

    // Interactive editor should be hidden, static code view visible again
    await expect(page.getByTestId('sp-interactive-editor')).not.toBeVisible();
    await expect(
      page.locator('pre code').filter({ hasText: html.codeSnippet })
    ).toBeVisible();
  });

  test('should persist the preference for showing the interactive editor', async ({
    page
  }) => {
    await page.goto(html.challengePath);

    // Initially, the interactive editor should be hidden
    await expect(page.getByTestId('sp-interactive-editor')).not.toBeVisible();

    await page
      .getByRole('button', {
        name: /interactive editor/i
      })
      .click();

    await expect(
      page.getByTestId('sp-interactive-editor').first()
    ).toBeVisible();

    // Reload the page and check that the interactive editor is still shown
    await page.reload();
    await expect(
      page.getByTestId('sp-interactive-editor').first()
    ).toBeVisible();
  });

  test('should hide the preview panel in JS-only interactive editors and just show the console', async ({
    page
  }) => {
    await page.goto(js.challengePath);

    // Click the toggle button to show interactive editor
    await page
      .getByRole('button', {
        name: /interactive editor/i
      })
      .click();

    // Check that the consoles are visible
    const consoles = page.getByTestId('sp-console');
    await expect(consoles).toHaveCount(4);
    for (const console of await consoles.all()) {
      await expect(console).toBeVisible();
    }

    // Check that the preview is not visible
    const previews = page.getByTestId('sp-preview');
    await expect(previews).not.toBeVisible();
  });
});

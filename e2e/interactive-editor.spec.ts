import { test, expect } from '@playwright/test';

interface InteractiveFile {
  contents: string;
  ext: string;
  name: string;
  contentsHtml: string;
}

interface Nodule {
  type: 'paragraph' | 'interactiveEditor';
  data: string | InteractiveFile[];
}

interface PageData {
  result: {
    data: {
      challengeNode: {
        challenge: {
          title: string;
          nodules: Nodule[];
        };
      };
    };
  };
}

const challengePath =
  '/learn/responsive-web-design-v9/lecture-what-is-css/what-are-some-default-browser-styles-applied-to-html';

const challengeTitle = 'Test Challenge Title';

test.describe('Interactive Editor', () => {
  test('should render paragraph nodules as text and not show the interactive editor toggle', async ({
    page
  }) => {
    await page.route(
      `**/page-data${challengePath}/page-data.json`,
      async route => {
        const response = await route.fetch();
        const body = await response.text();
        const pageData = JSON.parse(body) as PageData;

        pageData.result.data.challengeNode.challenge.title = challengeTitle;
        pageData.result.data.challengeNode.challenge.nodules = [
          {
            type: 'paragraph',
            data: '<p>This is a plain text paragraph.</p>'
          },
          {
            type: 'paragraph',
            data: '<p>Another paragraph with <code>code</code> in it.</p>'
          }
        ];

        await route.fulfill({
          contentType: 'application/json',
          body: JSON.stringify(pageData)
        });
      }
    );

    await page.goto(challengePath);

    await expect(
      page.getByRole('heading', { name: challengeTitle })
    ).toBeVisible();

    await expect(
      page.getByText('This is a plain text paragraph.')
    ).toBeVisible();
    await expect(
      page.getByText('Another paragraph with code in it.')
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: /interactive editor/i })
    ).not.toBeVisible();
  });

  test('should toggle between interactive editor and static code view when Interactive Editor button is clicked', async ({
    page
  }) => {
    await page.route(
      `**/page-data${challengePath}/page-data.json`,
      async route => {
        const response = await route.fetch();
        const body = await response.text();
        const pageData = JSON.parse(body) as PageData;

        pageData.result.data.challengeNode.challenge.title = challengeTitle;
        pageData.result.data.challengeNode.challenge.nodules = [
          {
            type: 'paragraph',
            data: '<p>Introduction paragraph.</p>'
          },
          {
            type: 'interactiveEditor',
            data: [
              {
                contents: 'console.log("Toggle test");',
                ext: 'js',
                name: 'script-1',
                contentsHtml:
                  '<pre><code class="language-javascript">console.log("Toggle test");</code></pre>'
              },
              {
                contents: '<div>HTML content</div>',
                ext: 'html',
                name: 'index-1',
                contentsHtml:
                  '<pre><code class="language-html">&lt;div&gt;HTML content&lt;/div&gt;</code></pre>'
              }
            ]
          },
          {
            type: 'paragraph',
            data: '<p>Final paragraph.</p>'
          }
        ];

        await route.fulfill({
          contentType: 'application/json',
          body: JSON.stringify(pageData)
        });
      }
    );

    await page.goto(challengePath);

    await expect(
      page.getByRole('heading', { name: challengeTitle })
    ).toBeVisible();
    await expect(page.getByText('Introduction paragraph.')).toBeVisible();
    await expect(page.getByText('Final paragraph.')).toBeVisible();

    // Initially, interactive editor should be hidden, static code view should be visible
    await expect(page.getByTestId('sp-interactive-editor')).not.toBeVisible();
    await expect(
      page
        .locator('pre code')
        .filter({ hasText: 'console.log("Toggle test");' })
    ).toHaveCount(1);
    await expect(
      page.locator('pre code').filter({ hasText: '<div>HTML content</div>' })
    ).toHaveCount(1);
    await expect(
      page.evaluate(() => localStorage.getItem('showInteractiveEditor'))
    ).resolves.toBe(null);

    // Click the toggle button
    const toggleButton = page.getByRole('button', {
      name: /interactive editor/i
    });
    await toggleButton.click();

    // Interactive editor should be visible, static code view hidden
    await expect(page.getByTestId('sp-interactive-editor')).toBeVisible();
    await expect(page.locator('pre code')).not.toBeVisible();
    await expect(
      page.evaluate(() => localStorage.getItem('showInteractiveEditor'))
    ).resolves.toBe('true');

    // Click the toggle button again
    await toggleButton.click();

    // Interactive editor should be hidden, static code view visible again
    await expect(page.getByTestId('sp-interactive-editor')).not.toBeVisible();
    await expect(
      page
        .locator('pre code')
        .filter({ hasText: 'console.log("Toggle test");' })
    ).toBeVisible();
    await expect(
      page.locator('pre code').filter({ hasText: '<div>HTML content</div>' })
    ).toBeVisible();
    await expect(
      page.evaluate(() => localStorage.getItem('showInteractiveEditor'))
    ).resolves.toBe('false');
  });
});

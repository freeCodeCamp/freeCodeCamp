import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/full-stack-developer/lecture-what-is-html/what-is-html'
  );
});

test.describe('Challenge Transcript', () => {
  test('Should be collapsed by default', async ({ page }) => {
    await expect(page.getByTestId('challenge-transcript')).not.toHaveAttribute(
      'open'
    );
  });

  test("Should be collapsed when 'fcc-transcript-expanded = false'", async ({
    page
  }) => {
    await page.evaluate(() => {
      localStorage.setItem('fcc-transcript-expanded', 'false');
    });

    await page.reload();
    await expect(page.getByTestId('challenge-transcript')).not.toHaveAttribute(
      'open'
    );
  });

  test("Should be expanded when 'fcc-transcript-expanded = true'", async ({
    page
  }) => {
    await page.evaluate(() => {
      localStorage.setItem('fcc-transcript-expanded', 'true');
    });

    await page.reload();
    await expect(page.getByTestId('challenge-transcript')).toHaveAttribute(
      'open'
    );
  });
});

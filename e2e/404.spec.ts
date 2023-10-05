import { test, expect, type Page } from '@playwright/test';
let page: Page;

test('The component FourOhFour renders correctly', async () => {
  const image404 = page.getByTestId('404-page-image');
  await expect(image404).toBeVisible();

  const H1_404 = page.getByTestId('page-not-found');
  await expect(H1_404).toHaveText('Page not found.');

  const P_Msg = page.getByTestId('paragraph-message');
  await expect(P_Msg).toHaveText(
    "We couldn't find what you were looking for, but here is a quote:"
  );
});

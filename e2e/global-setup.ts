import { expect, test as setup } from '@playwright/test';

setup('Login', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page
    .context()
    .storageState({ path: 'playwright/.auth/certified-user.json' });

  const cookies = await page.context().cookies();
  const cookieNames = cookies.map(cookie => cookie.name);
  expect(cookieNames).toEqual(expect.arrayContaining(['csrf_token']));

  const tokenCookie = cookies.find(({ name }) => name === 'csrf_token');
  expect(tokenCookie?.value).not.toBe('');
});

import { Page } from '@playwright/test';

export async function signout(page: Page) {
  await page.context().clearCookies({ name: 'jwt_access_token' });
}

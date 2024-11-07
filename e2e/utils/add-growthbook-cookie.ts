import { BrowserContext } from '@playwright/test';

export async function addGrowthbookCookie({
  context,
  variation
}: {
  context: BrowserContext;
  variation: string;
}) {
  await context.addCookies([
    {
      name: 'gbuuid',
      value: variation,
      // Weirdly, it seems necessary to prefix the domain with a dot. This seems
      // to be a peculiarity of Playwright.
      domain: process.env.COOKIE_DOMAIN || 'localhost',
      path: '/',
      expires: Math.floor(Date.now() / 1000) + 400 * 24 * 60 * 60 // 400 days from now
    }
  ]);
}

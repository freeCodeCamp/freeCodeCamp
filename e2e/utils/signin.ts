import { type Page } from '@playwright/test';

// Keep the real sign-in flow while selecting this test's account in dev auth.
export async function useIsolatedSignIn(page: Page, email: string) {
  const signInUrl = new URL(
    '/signin',
    process.env.API_LOCATION ?? 'http://localhost:3000'
  );

  await page.route(
    url =>
      url.origin === signInUrl.origin && url.pathname === signInUrl.pathname,
    async route => {
      const url = new URL(route.request().url());
      url.searchParams.set('email', email);
      await route.continue({ url: url.toString() });
    }
  );
}

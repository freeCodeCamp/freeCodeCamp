// connect to the puppeteer browser instance and create a new page context
// each VITEST_POOL_ID will have its own context

import puppeteer from 'puppeteer';

if (!globalThis.puppeteerBrowserContext?.[process.env.VITEST_POOL_ID]) {
  globalThis.puppeteerBrowserContext ??= {};
  const browser = await puppeteer.connect({
    browserWSEndpoint: process.env.PUPPETEER_WS_ENDPOINT
  });
  globalThis.puppeteerBrowserContext[process.env.VITEST_POOL_ID] =
    await browser.createBrowserContext();
}

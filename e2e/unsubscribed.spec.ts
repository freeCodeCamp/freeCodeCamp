import { test, expect, type Page, except } from '@playwright/test';

let page: Page;
const userId = '5f2e0c3d9b2e6f0017a7b5d3';

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  // await page.goto('/unsubscribed');
  // go to the page with the query string to test the page
  await page.goto(`/unsubscribed/${userId}`);
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Unsubscribed page tests', () => {
  // Test for correct title on page
  test('should have correct title', async () => {
    await expect(page).toHaveTitle(
      'You have been unsubscribed | freeCodeCamp.org'
    );
  });

  // Test for correct heading on page
  test('should display the unsubscribed heading', async () => {
    const unSubscribedHeading = page.getByTestId('unsubscribed-heading');
    except(unSubscribedHeading.not.toBeNull());
    except(await unSubscribedHeading.textContent()).toBe(
      'You have successfully been unsubscribed'
    );
  });

  // Test for correct text on page
  test('should display the unsubscribed text', async () => {
    const unSubscribedText = page.getByTestId('unsubscribed-text');
    except(unSubscribedText.not.toBeNull());
    except(await unSubscribedText.textContent()).toBe(
      'Whatever you go on to, keep coding!'
    );
  });

  // Test for correct link on page for resubscribing
  test('should display the resubscribe link', async () => {
    const resubscribeLink = page.getByTestId('resubscribe-button');
    except(resubscribeLink.not.toBeNull());
    except(await resubscribeLink.textContent()).toBe(
      'You can click here to resubscribe'
    );
    except(await resubscribeLink.getAttribute('href')).toBe(
      'https://api.freecodecamp.org/resubscribe/' + userId
    );
  });
});

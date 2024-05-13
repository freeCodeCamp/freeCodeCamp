import test from '@playwright/test';
import { signout } from './utils/logout';
test.use({ storageState: 'playwright/.auth/certified-user.json' });
test.describe('signing out', () => {
  test('should have the ability singout', async ({ page }) => {
    await signout(page);
  });
});

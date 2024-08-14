import { execSync } from 'child_process';

import { test as setup } from '@playwright/test';

setup.describe('certifieduser', () => {
  setup('can sign in', async ({ request }) => {
    await request.get(process.env.API_LOCATION + '/signin');
    await request.storageState({
      path: 'playwright/.auth/certified-user.json'
    });
  });
});

setup.describe('developmentuser', () => {
  // We can only sign in as a single user (one with email: 'foo@bar.com'), so
  // changing users means changing the record with that email in the database.
  setup.beforeAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user');
  });

  setup.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user --certified-user');
  });

  setup('can sign in', async ({ request }) => {
    await request.get(process.env.API_LOCATION + '/signin');
    await request.storageState({
      path: 'playwright/.auth/development-user.json'
    });
  });
});

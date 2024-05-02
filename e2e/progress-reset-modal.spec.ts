import { exec } from 'child_process';
import { promisify } from 'util';
import { test, expect } from '@playwright/test';

const execP = promisify(exec);

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.afterEach(async () => {
  await execP('node ./tools/scripts/seed/seed-demo-user certified-user');
});

test.describe('Progress reset modal', () => {
  test('should display the content properly', async ({ page }) => {
    await page
      .getByRole('button', { name: 'Reset all of my progress' })
      .click();

    await expect(
      page.getByRole('dialog', { name: 'Reset My Progress' })
    ).toBeVisible();

    await expect(
      page.getByText(
        'This will permanently delete and reset all of the following:'
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        'Your progress through each step/challenge (all completed challenge will be lost)'
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        'Any saved code, including partially completed challenges, and certification project code'
      )
    ).toBeVisible();

    await expect(
      page.getByText('All completed and claimed certifications')
    ).toBeVisible();

    await expect(
      page.getByText(
        'You will effectively be set back to the very first day you signed up.'
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        "We won't be able to recover any of it for you later, even if you change your mind."
      )
    ).toBeVisible();

    await expect(
      page.getByRole('button', {
        name: "Nevermind, I don't want to delete all of my progress"
      })
    ).toBeVisible();

    await expect(
      page.getByRole('button', {
        name: 'Reset everything. I want to start from the beginning'
      })
    ).toBeVisible();
  });

  test('should close the dialog if the user clicks the cancel button', async ({
    page
  }) => {
    await page
      .getByRole('button', { name: 'Reset all of my progress' })
      .click();

    await expect(
      page.getByRole('dialog', { name: 'Reset My Progress' })
    ).toBeVisible();

    await page
      .getByRole('button', {
        name: "Nevermind, I don't want to delete all of my progress"
      })
      .click();

    await expect(
      page.getByRole('dialog', { name: 'Reset My Progress' })
    ).toBeHidden();
  });

  test('should reset the progress if the user clicks the reset button', async ({
    page
  }) => {
    // Filter all API calls,
    // and only return the response of the `/user/get-session-user` call that happens after the reset,
    // which can be determined by `completedChallengeCount`.
    const userDataResponsePromise = page.waitForResponse(async res => {
      if (!res.url().includes('/user/get-session-user')) {
        return false;
      }

      const body = await res.json();
      return body.user.certifieduser.completedChallengeCount === 0;
    });

    await page
      .getByRole('button', { name: 'Reset all of my progress' })
      .click();

    await expect(
      page.getByRole('dialog', { name: 'Reset My Progress' })
    ).toBeVisible();

    await page
      .getByRole('button', {
        name: 'Reset everything. I want to start from the beginning'
      })
      .click();

    await page.waitForURL('/');

    const userDataResponse = await userDataResponsePromise;
    const userData = await userDataResponse.json();

    await expect(page.getByText('Your progress has been reset')).toBeVisible();
    expect(userData.user.certifieduser).toMatchObject({
      isFrontEndCert: false,
      isDataVisCert: false,
      isBackEndCert: false,
      isFullStackCert: false,
      isRespWebDesignCert: false,
      is2018DataVisCert: false,
      isFrontEndLibsCert: false,
      isJsAlgoDataStructCert: false,
      isApisMicroservicesCert: false,
      isInfosecQaCert: false,
      isQaCertV7: false,
      isInfosecCertV7: false,
      isSciCompPyCertV7: false,
      isDataAnalysisPyCertV7: false,
      isMachineLearningPyCertV7: false,
      isRelationalDatabaseCertV8: false,
      isCollegeAlgebraPyCertV8: false,
      isFoundationalCSharpCertV8: false,
      isJsAlgoDataStructCertV8: false
    });
  });
});

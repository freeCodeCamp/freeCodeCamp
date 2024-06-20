import { execSync } from 'child_process';
import { test, expect, type Page } from '@playwright/test';

import { clearEditor, focusEditor, getEditors } from './utils/editor';

const slowExpect = expect.configure({ timeout: 25000 });

const completeFrontEndCert = async (page: Page) => {
  await page.goto(
    `/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine`
  );

  const projects = [
    'random-quote-machine',
    'markdown-previewer',
    'drum-machine',
    'javascript-calculator',
    '25--5-clock'
  ];

  for (const project of projects) {
    await page.waitForURL(
      `/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-${project}`
    );

    await page
      .getByRole('textbox', { name: 'solution' })
      .fill('https://codepen.io/camperbot/full/oNvPqqo');
    await page
      .getByRole('button', { name: "I've completed this challenge" })
      .click();
    await page
      .getByRole('button', { name: 'Submit and go to next challenge' })
      .click();
  }
};

const completeThreeChallenges = async ({
  page,
  browserName,
  isMobile
}: {
  page: Page;
  browserName: string;
  isMobile: boolean;
}) => {
  await page.goto(
    '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code'
  );

  const challenges = [
    {
      url: '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code',
      solution: `// some comment\n/* some comment */`
    },
    {
      url: '/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables',
      solution: 'var myName;'
    },
    {
      url: '/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator',
      solution: `// Setup\nvar a;\n\n// Only change code below this line\na = 7;`
    }
  ];

  for (const challenge of challenges) {
    await page.waitForURL(challenge.url);

    await focusEditor({ page, isMobile });
    await clearEditor({ page, browserName });
    await getEditors(page).fill(challenge.solution);
    await page.getByRole('button', { name: 'Run' }).click();
    await expect(page.getByRole('dialog')).toBeVisible(); // completion dialog
    await page.getByRole('button', { name: 'Submit' }).click();
  }
};

test.describe('Donation modal - New user', () => {
  test.use({ storageState: 'playwright/.auth/development-user.json' });

  test.beforeAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user');
  });

  test.afterAll(() => {
    execSync('node ./tools/scripts/seed/seed-demo-user certified-user');
  });

  test('should not appear if the user has completed 3 challenges and has less than 10 completed challenges in total', async ({
    page,
    browserName,
    isMobile
  }) => {
    test.setTimeout(30000);

    // Development user doesn't have any completed challenges, we are completing the first 3.
    await completeThreeChallenges({ page, browserName, isMobile });

    const donationModal = page
      .getByRole('dialog')
      .filter({ hasText: 'Become a Supporter' });
    await expect(donationModal).toBeHidden();
  });

  test('should appear if the user has just completed a new block, and should not appear if the user re-submits the projects of the block', async ({
    page
  }) => {
    test.setTimeout(50000);

    await completeFrontEndCert(page);

    const donationModal = page
      .getByRole('dialog')
      .filter({ hasText: 'Become a Supporter' });
    await expect(donationModal).toBeVisible();
    await expect(
      donationModal.getByText(
        'This is a 20 second animated advertisement to encourage campers to become supporters of freeCodeCamp. The animation starts with a teddy bear who becomes a supporter. As a result, distracting pop-ups disappear and the bear gets to complete all of its goals. Then, it graduates and becomes an education super hero helping people around the world.'
      )
    ).toBeVisible();

    // Second part of the modal.
    // Use `slowExpect` as we need to wait 20s for this part to show up.
    await slowExpect(
      donationModal.getByText(
        'Nicely done. You just completed Front End Development Libraries Projects.'
      )
    ).toBeVisible();
    await donationModal.getByRole('button', { name: 'Ask me later' }).click();
    await expect(donationModal).toBeHidden();

    await completeFrontEndCert(page);
    await expect(donationModal).toBeHidden();
  });
});

test.describe('Donation modal - Certified user', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test('should appear if the user has completed 3 challenges and has more than 10 completed challenges in total', async ({
    page,
    browserName,
    isMobile
  }) => {
    test.setTimeout(30000);

    // Certified user already has more than 10 completed challenges, we are just completing 3 more.
    await completeThreeChallenges({ page, browserName, isMobile });

    const donationModal = page
      .getByRole('dialog')
      .filter({ hasText: 'Become a Supporter' });
    await expect(donationModal).toBeVisible();

    await expect(
      donationModal.getByText(
        'This is a 20 second animated advertisement to encourage campers to become supporters of freeCodeCamp. The animation starts with a teddy bear who becomes a supporter. As a result, distracting pop-ups disappear and the bear gets to complete all of its goals. Then, it graduates and becomes an education super hero helping people around the world.'
      )
    ).toBeVisible();
  });

  test('should display the content correctly and disable close when the animation is not complete', async ({
    page,
    browserName,
    isMobile
  }) => {
    test.setTimeout(50000);

    await completeThreeChallenges({ page, browserName, isMobile });

    const donationModal = page
      .getByRole('dialog')
      .filter({ hasText: 'Become a Supporter' });
    await expect(donationModal).toBeVisible();

    await expect(
      donationModal.getByText(
        'This is a 20 second animated advertisement to encourage campers to become supporters of freeCodeCamp. The animation starts with a teddy bear who becomes a supporter. As a result, distracting pop-ups disappear and the bear gets to complete all of its goals. Then, it graduates and becomes an education super hero helping people around the world.'
      )
    ).toBeVisible();
    await expect(donationModal.getByTestId('donation-animation')).toBeVisible();
    await expect(donationModal.getByText('Become a Supporter')).toBeVisible();
    await expect(donationModal.getByText('Remove distractions')).toBeVisible();
    await expect(
      donationModal.getByText('Reach your goals faster')
    ).toBeVisible();
    await expect(
      donationModal.getByText('Help millions of people learn')
    ).toBeVisible();

    // Ensure that the modal cannot be closed by pressing the Escape key
    await page.keyboard.press('Escape');
    await expect(donationModal).toBeVisible();

    // Second part of the modal.
    // Use `slowExpect` as we need to wait 20s for this part to show up.
    await slowExpect(
      donationModal.getByRole('img', {
        name: 'Illustration of an adorable teddy bear wearing a graduation cap and flying with a Supporter badge.'
      })
    ).toBeVisible();

    await expect(
      donationModal.getByRole('heading', {
        name: 'Support us'
      })
    ).toBeVisible();

    await expect(
      donationModal
        .getByRole('listitem')
        .filter({ hasText: 'Help us build more certifications' })
    ).toBeVisible();

    await expect(
      donationModal
        .getByRole('listitem')
        .filter({ hasText: 'Remove donation popups' })
    ).toBeVisible();

    await expect(
      donationModal
        .getByRole('listitem')
        .filter({ hasText: 'Help millions of people learn' })
    ).toBeVisible();

    await expect(
      donationModal.getByRole('button', { name: 'Become a Supporter' })
    ).toBeVisible();

    await expect(
      donationModal.getByRole('button', { name: 'Ask me later' })
    ).toBeVisible();
  });
});

import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/certification/certifieduser/responsive-web-design');
});

test.describe('Certification page', () => {
  test('The certificate page has a donation section', async ({ page }) => {
    const donation = page.getByTestId('donation-section');
    await expect(donation).toBeVisible();

    const donationText = page.getByTestId('donation-text');
    await expect(donationText).toHaveText(
      `Only you can see this message. Congratulations on earning this certification. It's no easy task. Running freeCodeCamp isn't easy either. Nor is it cheap. Help us help you and many other people around the world. Make a tax-deductible supporting donation to our charity today.`
    );

    const donationForm = page.getByTestId('donation-form');
    await expect(donationForm).toBeVisible();
  });

  test('The certificate has wrapper, header and footer', async ({ page }) => {
    const wrapper = page.getByTestId('cert-wrapper');
    await expect(wrapper).toBeVisible();

    const header = page.getByTestId('cert-header');
    await expect(header).toBeVisible();

    const footer = page.getByTestId('cert-footer');
    await expect(footer).toBeVisible();

    const QunicySignature = page.getByTestId('quincy-signature');
    await expect(QunicySignature).toBeVisible();
  });

  test('The certificate itself has relevant information in it', async ({
    page
  }) => {
    const infoContainer = page.getByTestId('cert-info-container');
    await expect(infoContainer).toBeVisible();

    const certTitle = page.getByTestId('certification-title');
    await expect(certTitle).toHaveText('Responsive Web Design');
  });

  test('Validate certificate/social/project links', async ({ page }) => {
    const certLink = page.getByTestId('cert-links');
    await expect(certLink).toBeVisible();

    const linkedinLink = page.getByTestId('linkedin-share-btn');
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Responsive%20Web%20Design&organizationId=4831032&issueYear=2018&issueMonth=8&certUrl=https://freecodecamp.org/certification/certifieduser/responsive-web-design'
    );

    const twitterLink = page.getByTestId('twitter-share-btn');
    await expect(twitterLink).toBeVisible();
    await expect(twitterLink).toHaveAttribute(
      'href',
      'https://twitter.com/intent/tweet?text=I just earned the Responsive%20Web%20Design certification @freeCodeCamp! Check it out here: https://freecodecamp.org/certification/certifieduser/responsive-web-design'
    );

    await expect(page.getByTestId('project-links')).toBeVisible();
  });
});

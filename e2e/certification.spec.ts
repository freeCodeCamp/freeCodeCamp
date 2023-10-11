import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.describe('Certification page - Non Microsoft', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/certification/certifieduser/responsive-web-design');
  });

  test('The certificate page has a donation section', async ({ page }) => {
    const donationSection = page.getByTestId('donation-section');
    await expect(donationSection).toBeVisible();

    const donationText = donationSection.getByTestId('donation-text');
    await expect(donationText).toHaveText(translations.donate['only-you']);

    const donationForm = donationSection.getByTestId('donation-form');
    await expect(donationForm).toBeVisible();
  });

  test('Verify the certificate itself', async ({ page }) => {
    const certWrapper = page.getByTestId('cert-wrapper');
    await expect(certWrapper).toBeVisible();

    const header = certWrapper.getByTestId('cert-header');
    await expect(header).toBeVisible();
    const fccLogo = header.getByTestId('cert-fcc-logo');
    await expect(fccLogo).toBeVisible();
    // Non Microsoft certs should not have this one
    const microsoftLogo = header.getByTestId('cert-microsoft-logo');
    await expect(microsoftLogo).not.toBeVisible();

    const certInfoContainer = certWrapper.getByTestId('cert-info-container');
    await expect(certInfoContainer).toBeVisible();
    const certTitle = certInfoContainer.getByTestId('certification-title');
    await expect(certTitle).toHaveText(
      translations.certification.title['Responsive Web Design']
    );

    const footer = certWrapper.getByTestId('cert-footer');
    await expect(footer).toBeVisible();
    const QunicySignature = footer.getByTestId('quincy-signature');
    await expect(QunicySignature).toBeVisible();
    // Non Microsoft certs should not have this one
    const microsoftSignature = footer.getByTestId('microsoft-signature');
    await expect(microsoftSignature).not.toBeVisible();
  });

  test('Validate certificate/social/project links', async ({ page }) => {
    const urlRegex = `.*${encodeURIComponent('Responsive%20Web%20Design')}.*`;
    const certLink = page.getByTestId('cert-links');
    await expect(certLink).toBeVisible();

    const linkedinLink = certLink.getByTestId('linkedin-share-btn');
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute(
      'href',
      `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Responsive%20Web%20Design&organizationId=4831032&issueYear=2018&issueMonth=8&certUrl=https://freecodecamp.org/certification/certifieduser/responsive-web-design`
    );

    const linkedInPopup = page.waitForEvent('popup');
    await linkedinLink.click();
    const popupLinkedIn = await linkedInPopup;
    await popupLinkedIn.waitForLoadState();
    await expect(popupLinkedIn).toHaveURL(new RegExp(urlRegex));

    const twitterLink = certLink.getByTestId('twitter-share-btn');
    await expect(twitterLink).toBeVisible();
    await expect(twitterLink).toHaveAttribute(
      'href',
      `https://twitter.com/intent/tweet?text=I just earned the Responsive%20Web%20Design certification @freeCodeCamp! Check it out here: https://freecodecamp.org/certification/certifieduser/responsive-web-design`
    );

    const twitterPopup = page.waitForEvent('popup');
    await twitterLink.click();
    const popupTwitter = await twitterPopup;
    await popupTwitter.waitForLoadState();
    await expect(popupTwitter).toHaveURL(new RegExp(urlRegex));

    await expect(page.getByTestId('project-links')).toBeVisible();
  });
});

test.describe('Certification page - Microsoft', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'certification/certifieduser/foundational-c-sharp-with-microsoft'
    );
  });

  test('The certificate page has a donation section', async ({ page }) => {
    const donationSection = page.getByTestId('donation-section');
    await expect(donationSection).toBeVisible();

    const donationText = donationSection.getByTestId('donation-text');
    await expect(donationText).toHaveText(translations.donate['only-you']);

    const donationForm = donationSection.getByTestId('donation-form');
    await expect(donationForm).toBeVisible();
  });

  test('Verify the certificate itself', async ({ page }) => {
    const certWrapper = page.getByTestId('cert-wrapper');
    await expect(certWrapper).toBeVisible();

    const header = certWrapper.getByTestId('cert-header');
    await expect(header).toBeVisible();
    const fccLogo = header.getByTestId('cert-fcc-logo');
    await expect(fccLogo).toBeVisible();
    // This is specific to Microsoft certs
    const microsoftLogo = header.getByTestId('cert-microsoft-logo');
    await expect(microsoftLogo).toBeVisible();

    const certInfoContainer = certWrapper.getByTestId('cert-info-container');
    await expect(certInfoContainer).toBeVisible();
    const certTitle = certInfoContainer.getByTestId('certification-title');
    await expect(certTitle).toHaveText(
      translations.certification.title['Foundational C# with Microsoft']
    );

    const footer = certWrapper.getByTestId('cert-footer');
    await expect(footer).toBeVisible();
    const QunicySignature = footer.getByTestId('quincy-signature');
    await expect(QunicySignature).toBeVisible();
    // This is specific to Microsoft certs
    const microsoftSignature = footer.getByTestId('microsoft-signature');
    await expect(microsoftSignature).toBeVisible();
  });

  test('Validate certificate/social/project links', async ({ page }) => {
    const urlRegex = `.*${encodeURIComponent(
      'Foundational%20C%23%20with%20Microsoft'
    )}.*`;
    const certLink = page.getByTestId('cert-links');
    await expect(certLink).toBeVisible();

    const linkedinLink = certLink.getByTestId('linkedin-share-btn');
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Foundational%20C%23%20with%20Microsoft&organizationId=4831032&issueYear=2023&issueMonth=9&certUrl=https://freecodecamp.org/certification/certifieduser/foundational-c-sharp-with-microsoft'
    );

    const linkedInPopup = page.waitForEvent('popup');
    await linkedinLink.click();
    const popupLinkedIn = await linkedInPopup;
    await popupLinkedIn.waitForLoadState();
    await expect(popupLinkedIn).toHaveURL(new RegExp(urlRegex));

    const twitterLink = certLink.getByTestId('twitter-share-btn');
    await expect(twitterLink).toBeVisible();
    await expect(twitterLink).toHaveAttribute(
      'href',
      'https://twitter.com/intent/tweet?text=I just earned the Foundational%20C%23%20with%20Microsoft certification @freeCodeCamp! Check it out here: https://freecodecamp.org/certification/certifieduser/foundational-c-sharp-with-microsoft'
    );

    const twitterPopup = page.waitForEvent('popup');
    await twitterLink.click();
    const popupTwitter = await twitterPopup;
    await popupTwitter.waitForLoadState();
    await expect(popupTwitter).toHaveURL(new RegExp(urlRegex));

    await expect(page.getByTestId('project-links')).toBeVisible();
  });
});

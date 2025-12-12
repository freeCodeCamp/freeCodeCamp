import { expect, Page, test } from '@playwright/test';
import intro from '../client/i18n/locales/english/intro.json';
import translations from '../client/i18n/locales/english/translations.json';
import { SuperBlocks } from '../shared/config/curriculum';
import { addGrowthbookCookie } from './utils/add-growthbook-cookie';

const landingPageElements = {
  heading: 'landing-header',
  certifications: 'certifications',
  curriculumBtns: 'curriculum-map-button',
  testimonials: 'testimonial-card',
  landingPageImage: 'landing-page-figure',
  faq: 'landing-page-faq',
  jobs: 'More than <strong>100,000</strong> freeCodeCamp.org graduates have gotten <strong>jobs</strong> at tech companies including:',
  googleCTA: 'landing-google-cta',
  moreWaysCTA: 'landing-more-ways-cta',
  landingTopCta: 'landing-top-big-cta'
} as const;

const nonArchivedSuperBlocks = [
  intro[SuperBlocks.RespWebDesignV9].title,
  intro[SuperBlocks.JsV9].title,
  intro[SuperBlocks.FrontEndDevLibsV9].title,
  intro[SuperBlocks.PythonV9].title,
  intro[SuperBlocks.RelationalDbV9].title,
  intro[SuperBlocks.BackEndDevApisV9].title,
  intro[SuperBlocks.FullStackDeveloperV9].title,
  intro[SuperBlocks.A2English].title,
  intro[SuperBlocks.B1English].title,
  intro[SuperBlocks.TheOdinProject].title,
  intro[SuperBlocks.CodingInterviewPrep].title,
  intro[SuperBlocks.ProjectEuler].title,
  intro[SuperBlocks.RosettaCode].title,
  intro[SuperBlocks.FoundationalCSharp].title
];

async function goToLandingPage(page: Page) {
  await page.goto('/');
}

test.describe('Main CTA - Variation A', () => {
  test.beforeEach(async ({ context, page }) => {
    await addGrowthbookCookie({ context, variation: 'A' });
    await goToLandingPage(page);
  });
  test('Five main CTAs render correctly', async ({ page }) => {
    const landingTopCta = page.getByTestId(landingPageElements.landingTopCta);
    const googleCTA = page.getByTestId(landingPageElements.googleCTA);
    const moreWaysCTA = page.getByTestId(landingPageElements.moreWaysCTA);
    const ctas = page.getByRole('link', {
      name: translations.buttons['logged-in-cta-btn']
    });
    const benefitsCtas = page.getByRole('link', {
      name: translations.landing.benefits.cta
    });
    await expect(benefitsCtas).toHaveCount(1);
    await expect(landingTopCta).toHaveText(
      translations.buttons['logged-in-cta-btn']
    );
    await expect(ctas).toHaveCount(4);
    for (const cta of await ctas.all()) {
      await expect(cta).toBeVisible();
    }
    await expect(googleCTA).toBeHidden();
    await expect(moreWaysCTA).toBeHidden();
  });
});

test.describe('Main CTA - Variation B', () => {
  test.beforeEach(async ({ context, page }) => {
    await addGrowthbookCookie({ context, variation: 'B' });
    await goToLandingPage(page);
  });
  test('Four main and two stacked CTAs render correctly', async ({ page }) => {
    const landingTopCta = page.getByTestId(landingPageElements.landingTopCta);
    const googleCTA = page.getByTestId(landingPageElements.googleCTA);
    const moreWaysCTA = page.getByTestId(landingPageElements.moreWaysCTA);
    const ctas = page.getByRole('link', {
      name: translations.buttons['logged-in-cta-btn']
    });
    const benefitsCtas = page.getByRole('link', {
      name: translations.landing.benefits.cta
    });
    await expect(benefitsCtas).toHaveCount(1);
    await expect(landingTopCta).toBeHidden();
    await expect(ctas).toHaveCount(3);
    for (const cta of await ctas.all()) {
      await expect(cta).toBeVisible();
    }
    await expect(googleCTA).toHaveText(
      translations.buttons['sign-in-with-google']
    );
    await expect(moreWaysCTA).toHaveText(
      translations.buttons['more-ways-to-sign-in']
    );
  });
});

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await goToLandingPage(page);
  });

  test('Main heading copy renders correctly', async ({ page }) => {
    const bigHeading = page.getByTestId('big-heading-1-b');
    await expect(bigHeading).toHaveText(
      translations.landing['big-heading-1-b']
    );
  });

  test('Supporting copy renders correctly', async ({ page }) => {
    const bigHeading = page.getByTestId('advance-career');
    await expect(bigHeading).toHaveText(translations.landing['advance-career']);
  });

  test('Logo row copy renders correctly', async ({ page }) => {
    const landingH2Heading = page.getByTestId('graduates-work');
    await expect(landingH2Heading).toHaveText(
      translations.landing['graduates-work'].replace(/<\/?strong>/g, '')
    );
  });

  test('The component Why learn with freeCodeCamp renders correctly', async ({
    context,
    page
  }) => {
    await addGrowthbookCookie({ context, variation: 'C' });
    await goToLandingPage(page);
    const h2Element = page.locator(
      `h2:has-text("${translations.landing.benefits['heading']}")`
    );

    await expect(h2Element).toBeVisible();
  });

  test('Hero image should have an alt', async ({ isMobile, page }) => {
    const campersImage = page.getByAltText(
      translations.landing['hero-img-alt']
    );

    if (isMobile) {
      await expect(campersImage).toBeHidden();
    } else {
      await expect(campersImage).toBeVisible();
    }
  });

  test('Has 5 brand logos', async ({ page }) => {
    const logos = page.getByTestId('brand-logo-container').locator('svg');
    await expect(logos).toHaveCount(5);
    for (const logo of await logos.all()) {
      await expect(logo).toBeVisible();
    }
  });

  test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({
    page,
    isMobile
  }) => {
    const landingPageImage = page.getByTestId('landing-page-figure');
    if (isMobile) {
      await expect(landingPageImage).toBeHidden();
    } else {
      await expect(landingPageImage).toBeVisible();
    }
  });

  test('Testimonial section has a header', async ({ page }) => {
    const testimonialsHeader = page.getByTestId('testimonials-section-header');
    await expect(testimonialsHeader).toHaveText(
      translations.landing.testimonials['heading']
    );
  });

  test('Testimonial endorser people have images, occupation, location and testimony visible', async ({
    page
  }) => {
    const cards = page.getByTestId('testimonial-card');
    await expect(cards).toHaveCount(3);
    for (const card of await cards.all()) {
      await expect(card).toBeVisible();
      await expect(
        card.getByTestId('testimonials-endorser-image-container')
      ).toBeVisible();
      await expect(
        card.getByTestId('testimonials-endorser-location')
      ).toBeVisible();
      await expect(
        card.getByTestId('testimonials-endorser-occupation')
      ).toBeVisible();
      await expect(
        card.getByTestId('testimonials-endorser-testimony')
      ).toBeVisible();
    }
  });

  test('Links to all non-archived superblocks in order', async ({ page }) => {
    const curriculumBtns = page.getByTestId(landingPageElements.curriculumBtns);
    await expect(curriculumBtns).toHaveCount(nonArchivedSuperBlocks.length);
    for (let index = 0; index < nonArchivedSuperBlocks.length; index++) {
      const btn = curriculumBtns.nth(index);
      const link = btn.getByRole('link', {
        name: nonArchivedSuperBlocks[index]
      });
      await expect(link).toBeVisible();
    }
  });

  test('Links to the archive page', async ({ page }) => {
    const archiveLink = page.locator('a[href="/learn/archive"]');
    await expect(archiveLink).toBeVisible();
  });

  test('Has FAQ section', async ({ page }) => {
    const faqs = page.getByTestId(landingPageElements.faq);
    await expect(faqs).toHaveCount(9);
  });
});

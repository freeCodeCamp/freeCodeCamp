import { expect, Page, test } from '@playwright/test';
import intro from '../client/i18n/locales/english/intro.json';
import translations from '../client/i18n/locales/english/translations.json';
import { SuperBlocks } from '../shared/config/curriculum';
import { addGrowthbookCookie } from './utils/add-growthbook-cookie';

const landingPageElements = {
  heading: 'landing-header',
  callToAction: 'landing-big-cta',
  certifications: 'certifications',
  curriculumBtns: 'curriculum-map-button',
  testimonials: 'testimonial-card',
  landingPageImage: 'landing-page-figure',
  faq: 'landing-page-faq'
} as const;

const superBlocks = [
  intro[SuperBlocks.RespWebDesignNew].title,
  intro[SuperBlocks.JsAlgoDataStructNew].title,
  intro[SuperBlocks.FrontEndDevLibs].title,
  intro[SuperBlocks.DataVis].title,
  intro[SuperBlocks.RelationalDb].title,
  intro[SuperBlocks.BackEndDevApis].title,
  intro[SuperBlocks.QualityAssurance].title,
  intro[SuperBlocks.SciCompPy].title,
  intro[SuperBlocks.DataAnalysisPy].title,
  intro[SuperBlocks.InfoSec].title,
  intro[SuperBlocks.MachineLearningPy].title,
  intro[SuperBlocks.CollegeAlgebraPy].title,
  intro[SuperBlocks.A2English].title,
  intro[SuperBlocks.FoundationalCSharp].title,
  intro[SuperBlocks.TheOdinProject].title,
  intro[SuperBlocks.CodingInterviewPrep].title,
  intro[SuperBlocks.ProjectEuler].title,
  intro[SuperBlocks.RosettaCode].title,
  intro[SuperBlocks.RespWebDesign].title,
  intro[SuperBlocks.JsAlgoDataStruct].title,
  intro[SuperBlocks.PythonForEverybody].title
];

async function goToLandingPage(page: Page) {
  await page.goto('/');
}

test.describe('Landing Page - Variation B', () => {
  test.beforeEach(async ({ context, page }) => {
    await addGrowthbookCookie({ context, variation: 'B' });
    await goToLandingPage(page);
  });

  test('The component Landing-top renders correctly', async ({ page }) => {
    await expect(
      page
        .getByRole('heading', { level: 1 })
        .filter({ hasText: `${translations.landing['big-heading-1-b']}` })
    ).toBeVisible();

    const landingHeading2 = page.getByTestId('landing-big-heading-2');
    await expect(landingHeading2).toHaveText(
      translations.landing['big-heading-2']
    );

    const landingHeading3 = page.getByTestId('landing-big-heading-3');
    await expect(landingHeading3).toHaveText(
      translations.landing['big-heading-3']
    );

    const landingHeading4 = page.getByTestId('landing-big-heading-4');
    await expect(landingHeading4).toHaveText(
      translations.landing['big-heading-4']
    );

    const landingH2Heading = page.getByTestId('landing-h2-heading-b');
    await expect(landingH2Heading).toHaveText(
      translations.landing['h2-heading-b']
    );
  });

  test('CTA buttons should render correctly', async ({ page }) => {
    const mainCta = page.getByRole('link', {
      name: translations.buttons['get-started'],
      exact: true
    });
    await expect(mainCta).toHaveCount(1);
    for (const cta of await mainCta.all()) {
      await expect(cta).toBeVisible();
    }

    const ctas = page.getByRole('link', {
      name: translations.buttons['logged-in-cta-btn'],
      exact: true
    });
    await expect(ctas).toHaveCount(3);
    for (const cta of await ctas.all()) {
      await expect(cta).toBeVisible();
    }
  });

  test('Hero image should have a descriptive alt', async ({
    isMobile,
    page
  }) => {
    const campersImage = page.getByAltText(
      translations.landing['hero-img-uis']
    );

    if (isMobile) {
      await expect(campersImage).toBeHidden();
    } else {
      await expect(campersImage).toBeVisible();
    }
  });

  test('The as seen in container with featured logos should not exist', async ({
    page
  }) => {
    const asSeenInContainer = page.getByTestId('landing-as-seen-in-text');
    await expect(asSeenInContainer).toHaveCount(0);
  });
});

test.describe('Landing Page - Variation A', () => {
  test.beforeEach(async ({ context, page }) => {
    await addGrowthbookCookie({ context, variation: 'A' });
    await goToLandingPage(page);
  });

  test('The component Landing-top renders correctly', async ({ page }) => {
    const landingHeading1 = page.getByTestId('landing-big-heading-1');
    await expect(landingHeading1).toHaveText(
      translations.landing['big-heading-1']
    );

    const landingHeading2 = page.getByTestId('landing-big-heading-2');
    await expect(landingHeading2).toHaveText(
      translations.landing['big-heading-2']
    );

    const landingHeading3 = page.getByTestId('landing-big-heading-3');
    await expect(landingHeading3).toHaveText(
      translations.landing['big-heading-3']
    );

    const landingH2Heading = page.getByTestId('landing-h2-heading');
    await expect(landingH2Heading).toHaveText(
      translations.landing['h2-heading']
    );
  });

  test('Call to action buttons should render correctly', async ({ page }) => {
    const ctas = page.getByRole('link', {
      name: translations.buttons['logged-in-cta-btn']
    });
    await expect(ctas).toHaveCount(4);
    for (const cta of await ctas.all()) {
      await expect(cta).toBeVisible();
    }
  });

  test('Hero image should have an alt and a description', async ({
    isMobile,
    page
  }) => {
    const campersImage = page.getByAltText(
      translations.landing['hero-img-alt']
    );
    const captionText = page.getByText(
      translations.landing['hero-img-description']
    );

    if (isMobile) {
      await expect(campersImage).toBeHidden();
      await expect(captionText).toBeHidden();
    } else {
      await expect(campersImage).toBeVisible();
      await expect(captionText).toBeVisible();
    }
  });

  test('The as seen in container is visible with featured logos', async ({
    page
  }) => {
    const asSeenInContainer = page.getByTestId('landing-as-seen-in-text');
    await expect(asSeenInContainer).toHaveText(
      translations.landing['as-seen-in']
    );
    const featuredLogos = page.getByTestId(
      'landing-as-seen-in-container-logos'
    );
    await expect(featuredLogos).toBeVisible();
  });
});

test.describe('Landing Page - common', () => {
  test.beforeEach(async ({ page }) => {
    await goToLandingPage(page);
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

  test('Has links to all curriculum', async ({ page }) => {
    const curriculumBtns = page.getByTestId(landingPageElements.curriculumBtns);
    await expect(curriculumBtns).toHaveCount(21);
    for (let index = 0; index < superBlocks.length; index++) {
      const btn = curriculumBtns.nth(index);
      await expect(btn).toContainText(superBlocks[index]);
    }
  });

  test('Has FAQ section', async ({ page }) => {
    const faqs = page.getByTestId(landingPageElements.faq);
    await expect(faqs).toHaveCount(9);
  });
});

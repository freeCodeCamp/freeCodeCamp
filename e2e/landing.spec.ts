import { expect, test, type Page } from '@playwright/test';
import intro from '../client/i18n/locales/english/intro.json';
import translations from '../client/i18n/locales/english/translations.json';
import { SuperBlocks } from '../shared/config/curriculum';

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

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});

test('The component Landing-top renders correctly', async () => {
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
  await expect(landingH2Heading).toHaveText(translations.landing['h2-heading']);
});

test('Has 5 brand logos', async () => {
  const logos = page.getByTestId('brand-logo-container').locator('svg');
  await expect(logos).toHaveCount(5);
  for (const logo of await logos.all()) {
    await expect(logo).toBeVisible();
  }
});

test('The landing-top & testimonial sections should contain call-to-action, and have a descriptive text content', async () => {
  const ctas = await page
    .getByRole('link', {
      name: translations.buttons['logged-in-cta-btn']
    })
    .all();

  expect(ctas).toHaveLength(4);

  for (const cta of ctas) {
    await expect(cta).toBeVisible();
  }
});

test("The landing-top should contain a descriptive text explaining the camper's image", async ({
  isMobile
}) => {
  const campersImage = page.getByAltText(translations.landing['hero-img-alt']);
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

test('The campers landing page figure is visible on desktop and hidden on mobile view', async ({
  isMobile
}) => {
  const landingPageImage = page.getByTestId('landing-page-figure');
  if (isMobile) {
    await expect(landingPageImage).toBeHidden();
  } else {
    await expect(landingPageImage).toBeVisible();
  }
});

test('The as seen in container is visible with featured logos', async () => {
  const asSeenInContainer = page.getByTestId('landing-as-seen-in-text');
  await expect(asSeenInContainer).toHaveText(
    translations.landing['as-seen-in']
  );
  const featuredLogos = page.getByTestId('landing-as-seen-in-container-logos');
  await expect(featuredLogos).toBeVisible();
});

test('Testimonial section has a header', async () => {
  const testimonialsHeader = page.getByTestId('testimonials-section-header');
  await expect(testimonialsHeader).toHaveText(
    translations.landing.testimonials['heading']
  );
});

test('Testimonial endorser people have images, occupation, location and testimony visible', async () => {
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

test('Has links to all curriculum', async () => {
  const curriculumBtns = page.getByTestId(landingPageElements.curriculumBtns);
  await expect(curriculumBtns).toHaveCount(21);
  for (let index = 0; index < superBlocks.length; index++) {
    const btn = curriculumBtns.nth(index);
    await expect(btn).toContainText(superBlocks[index]);
  }
});

test('Has FAQ section', async () => {
  const faqs = page.getByTestId(landingPageElements.faq);
  await expect(faqs).toHaveCount(9);
});

test("Has CTA Get Started It's free buttons", async () => {
  const ctaButtons = page.getByRole('link', {
    name: "Get started (it's free)"
  });
  await expect(ctaButtons).toHaveCount(4);
});

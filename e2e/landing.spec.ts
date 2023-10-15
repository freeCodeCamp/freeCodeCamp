import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

const landingPageElements = {
  heading: 'landing-header',
  callToAction: 'landing-big-cta',
  certifications: 'certifications',
  curriculumBtns: 'curriculum-map-button',
  testimonials: 'testimonial-card',
  landingPageImage: 'landing-page-figure',
  faq: 'landing-page-faq'
} as const;

let page: Page;

const superBlocks = [
  'Responsive Web Design',
  'JavaScript Algorithms and Data Structures',
  'Front End Development Libraries',
  'Data Visualization',
  'Relational Database',
  'Back End Development and APIs',
  'Quality Assurance',
  'Scientific Computing with Python',
  'Data Analysis with Python',
  'Information Security',
  'Machine Learning with Python',
  'College Algebra with Python',
  'Foundational C# with Microsoft',
  'Coding Interview Prep',
  'Project Euler'
];

const testimonialEndorser = [
  'testimonials-endorser-image-container',
  'testimonials-endorser-location',
  'testimonials-endorser-occupation',
  'testimonials-endorser-testimony'
];

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});

test.afterEach(async ({ page }) => {
  await page.close();
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
    for (let i = 0; i < testimonialEndorser.length; i++) {
      await expect(card.getByTestId(testimonialEndorser[i])).toBeVisible();
    }
  }
});

test('Has links to all superblocks', async () => {
  const curriculumBtns = page.getByTestId(landingPageElements.curriculumBtns);
  await expect(curriculumBtns).toHaveCount(15);
  for (let i = 0; i < superBlocks.length; i++) {
    const btn = curriculumBtns.nth(i);
    await expect(btn).toContainText(superBlocks[i]);
  }
});

test('Has FAQ section', async () => {
  const faqs = page.getByTestId(landingPageElements.faq);
  await expect(faqs).toHaveCount(9);
});

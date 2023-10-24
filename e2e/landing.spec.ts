import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import intro from '../client/i18n/locales/english/intro.json';

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
  translations.certification.title['Responsive Web Design'],
  translations.certification.title['JavaScript Algorithms and Data Structures'],
  translations.certification.title['Front End Development Libraries'],
  translations.certification.title['Data Visualization'],
  translations.certification.title['Relational Database'],
  translations.certification.title['Back End Development and APIs'],
  translations.certification.title['Quality Assurance'],
  translations.certification.title['Scientific Computing with Python'],
  translations.certification.title['Data Analysis with Python'],
  translations.certification.title['Information Security'],
  translations.certification.title['Machine Learning with Python'],
  translations.certification.title['College Algebra with Python'],
  translations.certification.title['Foundational C# with Microsoft'],
  intro['coding-interview-prep'].title,
  intro['project-euler'].title
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

test('Has links to all superblocks', async () => {
  const curriculumBtns = page.getByTestId(landingPageElements.curriculumBtns);
  await expect(curriculumBtns).toHaveCount(15);
  for (let index = 0; index < superBlocks.length; index++) {
    const btn = curriculumBtns.nth(index);
    await expect(btn).toContainText(superBlocks[index]);
  }
});

test('Has FAQ section', async () => {
  const faqs = page.getByTestId(landingPageElements.faq);
  await expect(faqs).toHaveCount(9);
});

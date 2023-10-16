import { test, expect, type Page } from '@playwright/test';

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

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});

test('The component Landing-top renders correctly', async () => {
  const landingHeading1 = page.getByTestId('landing-big-heading-1');
  await expect(landingHeading1).toHaveText('Learn to code — for free.');

  const landingHeading2 = page.getByTestId('landing-big-heading-2');
  await expect(landingHeading2).toHaveText('Build projects.');

  const landingHeading3 = page.getByTestId('landing-big-heading-3');
  await expect(landingHeading3).toHaveText('Earn certifications.');

  const landingH2Heading = page.getByTestId('landing-h2-heading');
  await expect(landingH2Heading).toHaveText(
    'Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:'
  );
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
  await expect(asSeenInContainer).toHaveText('As seen in:');

  const featuredLogos = page.getByTestId('landing-as-seen-in-container-logos');
  await expect(featuredLogos).toBeVisible();
});

test('Testimonial section has a header', async () => {
  const testimonialsHeader = page.getByTestId('testimonials-section-header');
  await expect(testimonialsHeader).toHaveText(
    'Here is what our alumni say about freeCodeCamp:'
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
  for (let i = 0; i < superBlocks.length; i++) {
    const btn = curriculumBtns.nth(i);
    await expect(btn).toContainText(superBlocks[i]);
  }
});

test('Has FAQ section', async () => {
  const faqs = page.getByTestId(landingPageElements.faq);
  await expect(faqs).toHaveCount(9);
});

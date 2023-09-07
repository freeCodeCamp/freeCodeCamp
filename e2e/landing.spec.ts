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
  'College Algebra with Python'
];

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});

test.afterAll(async () => {
  await page.close();
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
  const logos = page.getByTestId('brand-logo-container');
  expect(await logos.nth(0).isVisible());
  expect(await logos.nth(1).isVisible());
  expect(await logos.nth(2).isVisible());
  expect(await logos.nth(3).isVisible());
  expect(await logos.nth(4).isVisible());
});

test('Has `as seen in` section', async () => {
  await expect(page.locator('.as-seen-in')).toBeVisible();
});

test('Has links to all superblocks', async () => {
  const curriculumBtns = page.getByTestId(landingPageElements.curriculumBtns);
  await expect(curriculumBtns).toHaveCount(15);
  superBlocks.map(async (cert, i) => {
    const btn = curriculumBtns.nth(i);
    await expect(btn).toContainText(cert);
  });
});

test('Has 3 testimonial cards', async () => {
  const testimonials = page.locator(`.${landingPageElements.testimonials}`);
  await expect(testimonials).toHaveCount(3);
});

test('Has FAQ section', async () => {
  const faqs = page.getByTestId(landingPageElements.faq);
  await expect(faqs).toHaveCount(9);
});

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
  'Coding Interview Prep',
  'Project Euler',
  'Legacy Responsive Web Design'
];

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});

test.afterAll(async () => {
  await page.close();
});

test('Should render', async () => {
  await expect(page).toHaveTitle(
    'Learn to Code — For Free — Coding Courses for Busy People'
  );
  const callToAction = page.getByTestId(landingPageElements.callToAction);
  const callToActionHeader = page.locator('a .login-btn-text').nth(1);
  await expect(callToActionHeader).toHaveText("Get started (it's free)");
  await expect(callToAction).toHaveCount(4);
});

test('Has visible header and sub-header', async () => {
  const heading = page.getByTestId(landingPageElements.heading);
  await expect(heading).toContainText('Learn to code — for free.');
  expect(await page.isVisible('text=Build projects.')).toBeTruthy();
  expect(await page.isVisible('text=Earn certifications.')).toBeTruthy();
  expect(
    await page.isVisible(
      'text=Since 2014, more than 40,000 freeCodeCamp.org ' +
        'graduates have gotten jobs at tech companies including:'
    )
  ).toBeTruthy();
});

test('Has 5 brand logos', async () => {
  await expect(page.locator('#featured-logos')).toBeVisible();
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

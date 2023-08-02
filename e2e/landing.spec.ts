import { test, expect } from '@playwright/test';

const landingPageElements = {
  heading: 'landing-header',
  callToAction: 'landing-big-cta',
  certifications: 'certifications',
  curriculumBtns: 'curriculum-map-button',
  testimonials: 'testimonial-card',
  landingPageImage: 'landing-page-figure',
  faq: 'landing-page-faq'
} as const;

type LandingPageTypes<T> = T[keyof T];

type LandingPageLogs = LandingPageTypes<typeof landingPageElements>;

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

test.describe('Landing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Should render', async ({ page }) => {
    await expect(page).toHaveTitle(
      'Learn to Code — For Free — Coding Courses for Busy People'
    );

    const callToAction = page.getByTestId(landingPageElements.callToAction);

    const callToActionHeader = page.locator('a .login-btn-text').nth(1);

    await expect(callToActionHeader).toHaveText("Get started (it's free)");

    await expect(callToAction).toHaveCount(4);
  });

  test('Has visible header and sub-header', async ({ page }) => {
    const heading = page.getByTestId(landingPageElements.heading);

    // expect(await heading.innerText()).toBe('Learn to code — for free.');
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

  test('Has 5 brand logos', async ({ page }) => {
    const logoRowLength = await page
      .locator('.logo-row')
      .locator('svg')
      .count();

    expect(logoRowLength).toBe(5);
  });

  test('Has `as seen in` section', async ({ page }) => {
    expect(await page.getByText('as seen in').isVisible()).toBeTruthy();
    expect(await page.locator('#featured-logos').isVisible()).toBeTruthy();
  });

  test('Has a visible large image on large viewports', async ({
    page,
    isMobile
  }) => {
    const landingPageImage = page.getByTestId(
      landingPageElements.landingPageImage
    );
    if (!isMobile) {
      expect(await landingPageImage.isVisible()).toBeTruthy();
    } else {
      expect(await landingPageImage.isVisible()).toBeFalsy();
    }
  });

  test('Has links to all superblocks', async ({ page }) => {
    const curriculumBtns = page.getByTestId(landingPageElements.curriculumBtns);
    await expect(curriculumBtns).toHaveCount(15);

    superBlocks.map(async (cert: LandingPageLogs, i) => {
      const btn = curriculumBtns.nth(i);
      await expect(btn).toContainText(cert);
    });
  });

  test('Has 3 testimonial cards', async ({ page }) => {
    const testimonials = page.locator(`.${landingPageElements.testimonials}`);
    await expect(testimonials).toHaveCount(3);
  });

  test('Has FAQ section', async ({ page }) => {
    const faqs = page.getByTestId(landingPageElements.faq);
    await expect(faqs).toHaveCount(9);
  });
});

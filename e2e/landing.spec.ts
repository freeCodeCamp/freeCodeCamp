import { test, expect } from '@playwright/test';

const landingPageElements = {
  heading: 'landing-header',
  callToAction: 'landing-big-cta',
  certifications: 'certifications',
  curriculumBtns: 'curriculum-map-button',
  testimonials: 'testimonial-cards',
  landingPageImage: 'landing-page-figure',
  faq: 'landing-page-faq'
} as const;

test.describe('Landing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Should render', async ({ page }) => {
    await expect(page).toHaveTitle(
      'Learn to Code — For Free — Coding Courses for Busy People'
    );

    const callToAction = page.getByTestId(landingPageElements.callToAction);

    expect(await callToAction.first().innerText()).toBe(
      "Get started (it's free)"
    );

    expect(await callToAction.count()).toBe(4);
  });

  test('Has visible header and sub-header', async ({ page }) => {
    const heading = page.getByTestId(landingPageElements.heading);

    expect(await heading.innerText()).toBe('Learn to code — for free.');
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
    if (!isMobile) {
      const landingPageImage = page.getByTestId(
        landingPageElements.landingPageImage
      );

      expect(await landingPageImage.isVisible()).toBeTruthy();
    }
  });

  // test('Has `certifications` section', async ({ page }) => {
  //   expect(await page.getByText('certifications').isVisible()).toBeTruthy();
  //   expect(await page.locator('#certifications').isVisible()).toBeTruthy();
  // });
});

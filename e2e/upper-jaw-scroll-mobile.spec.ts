import { test, expect, type Locator, type Page } from '@playwright/test';

const upperJawSelector = '.editor-upper-jaw';
const challengeWithExampleUrl =
  '/learn/responsive-web-design-v9/workshop-cat-photo-app/step-4';
const challengeWithHorizontalExampleCodeUrl =
  '/learn/responsive-web-design-v9/workshop-cat-photo-app/step-11';
const challengeWithLongContentUrl =
  '/learn/responsive-web-design-v9/workshop-cat-photo-app/step-42';

const openChallenge = async (page: Page, challengeUrl: string) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('hideMobileAppModal', 'true');
    window.localStorage.setItem(
      'mobileAppModalDismissedAt',
      JSON.stringify(Date.now())
    );
  });

  await page.goto(challengeUrl);
  await page.locator(upperJawSelector).waitFor({ state: 'visible' });
};

const getTouchPoint = async (
  page: Page,
  locator: Locator,
  options: { xRatio?: number; yRatio?: number } = {}
): Promise<{ x: number; y: number }> => {
  const box = await locator.boundingBox();
  const viewport = page.viewportSize();
  const { xRatio = 0.5, yRatio = 0.4 } = options;

  if (!box || !viewport) {
    throw new Error('Touch geometry unavailable');
  }

  const x = Math.round(
    Math.min(Math.max(box.x + box.width * xRatio, 10), viewport.width - 10)
  );
  const y = Math.round(
    Math.min(Math.max(box.y + box.height * yRatio, 10), viewport.height - 10)
  );

  return { x, y };
};

const dragWithTouchPointerEvents = async (
  page: Page,
  locator: Locator,
  options: {
    startXRatio?: number;
    startYRatio?: number;
    moveByX?: number;
    moveByY?: number;
  }
) => {
  const {
    startXRatio = 0.5,
    startYRatio = 0.4,
    moveByX = 0,
    moveByY = -80
  } = options;
  const { x, y } = await getTouchPoint(page, locator, {
    xRatio: startXRatio,
    yRatio: startYRatio
  });

  await locator.dispatchEvent('pointerdown', {
    pointerId: 1,
    pointerType: 'touch',
    isPrimary: true,
    clientX: x,
    clientY: y
  });
  await locator.dispatchEvent('pointermove', {
    pointerId: 1,
    pointerType: 'touch',
    isPrimary: true,
    clientX: x + moveByX,
    clientY: y + moveByY
  });
  await page.waitForTimeout(50);
  await locator.dispatchEvent('pointerup', {
    pointerId: 1,
    pointerType: 'touch',
    isPrimary: true,
    clientX: x + moveByX,
    clientY: y + moveByY
  });
};

const expectScrollWhileHolding = async (page: Page) => {
  const upperJaw = page.locator(upperJawSelector);
  const firstParagraph = page.locator('#description p').first();

  await expect(upperJaw).toBeVisible();
  await expect(firstParagraph).toBeVisible();

  const getTop = async () =>
    await firstParagraph.evaluate(el => el.getBoundingClientRect().top);

  const topBefore = await getTop();

  await dragWithTouchPointerEvents(page, firstParagraph, { moveByY: -120 });

  const topDuringDrag = await getTop();

  expect(topDuringDrag).toBeLessThan(topBefore - 20);
};

const expectUpperJawDragScroll = async (page: Page) => {
  const upperJaw = page.locator(upperJawSelector);
  const firstParagraph = page.locator('#description p').first();

  await expect(upperJaw).toBeVisible();
  await expect(firstParagraph).toBeVisible();

  const getTop = async () =>
    await firstParagraph.evaluate(el => el.getBoundingClientRect().top);

  const topBefore = await getTop();

  await dragWithTouchPointerEvents(page, upperJaw, {
    startXRatio: 0.25,
    startYRatio: 0.55,
    moveByY: -140
  });

  const topAfterDrag = await getTop();

  expect(topAfterDrag).toBeLessThan(topBefore - 20);
};

test.use({
  viewport: { width: 393, height: 851 },
  isMobile: true,
  hasTouch: true
});

test('upper jaw scrolls while touch is held on a challenge with example content', async ({
  page
}) => {
  await openChallenge(page, challengeWithExampleUrl);
  await expect(page.locator('#description details.code-details')).toHaveCount(
    1
  );

  await expectScrollWhileHolding(page);
});

test('upper jaw scrolls while touch is held on long challenge content', async ({
  page
}) => {
  await openChallenge(page, challengeWithLongContentUrl);
  await expect(page.locator('#description p')).toHaveCount(4);

  await expectScrollWhileHolding(page);
});

test('upper jaw drag gesture scrolls when drag starts on upper jaw container', async ({
  page
}) => {
  await openChallenge(page, challengeWithLongContentUrl);

  await expectUpperJawDragScroll(page);
});

test('breadcrumb links and example code dropdown are interactive on mobile', async ({
  page
}) => {
  await openChallenge(page, challengeWithExampleUrl);

  const details = page.locator('#description details.code-details').first();
  const summary = details.locator('summary.code-details-summary');
  await expect(details).toBeVisible();
  await expect(summary).toBeVisible();

  const initiallyOpen = await details.evaluate(el => el.hasAttribute('open'));
  await summary.tap();
  await expect
    .poll(async () => await details.evaluate(el => el.hasAttribute('open')))
    .toBe(!initiallyOpen);
  await summary.tap();
  await expect
    .poll(async () => await details.evaluate(el => el.hasAttribute('open')))
    .toBe(initiallyOpen);

  const mobileBreadcrumb = page.getByTestId('breadcrumb-mobile');
  await expect(mobileBreadcrumb).toBeVisible();
  await mobileBreadcrumb
    .getByRole('link', { name: 'Responsive Web Design Certification' })
    .tap();
  await expect(page).toHaveURL('/learn/responsive-web-design-v9');
});

test('example code horizontal touch drag does not trigger vertical jaw scroll', async ({
  page
}) => {
  await openChallenge(page, challengeWithHorizontalExampleCodeUrl);

  const firstParagraph = page.locator('#description p').first();
  const details = page.locator('#description details.code-details').first();
  const summary = details.locator('summary.code-details-summary');
  await expect(details).toBeVisible();

  const isOpen = await details.evaluate(el => el.hasAttribute('open'));
  if (!isOpen) {
    await summary.tap();
  }

  const codeRegion = details.locator('pre[role="region"]').first();
  await expect(codeRegion).toBeVisible();

  const overflowMetrics = await codeRegion.evaluate(el => ({
    scrollWidth: el.scrollWidth,
    clientWidth: el.clientWidth
  }));
  expect(overflowMetrics.scrollWidth).toBeGreaterThan(
    overflowMetrics.clientWidth
  );

  const topBefore = await firstParagraph.evaluate(
    el => el.getBoundingClientRect().top
  );
  await dragWithTouchPointerEvents(page, codeRegion, {
    startXRatio: 0.8,
    startYRatio: 0.5,
    moveByX: -120,
    moveByY: 0
  });
  const topAfter = await firstParagraph.evaluate(
    el => el.getBoundingClientRect().top
  );

  expect(Math.abs(topAfter - topBefore)).toBeLessThan(10);
});

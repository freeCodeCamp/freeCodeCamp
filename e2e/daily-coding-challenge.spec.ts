import { test, expect } from '@playwright/test';
import {
  getTodayUsCentral,
  formatDate
} from '../client/src/components/daily-coding-challenge/helpers';

const dateRouteRe = /.*\/daily-coding-challenge\/date\/.*/;
const allRouteRe = /.*\/daily-coding-challenge\/all/;

const todayUsCentral = getTodayUsCentral();
const [year, month, day] = todayUsCentral.split('-').map(Number);

const todayMidnight = `${todayUsCentral}T00:00:00.000Z`;

const mockApiChallenge = {
  id: 'test-challenge-id',
  challengeNumber: 1,
  title: 'Test title',
  date: todayMidnight,
  description: 'Test description',
  javascript: {
    tests: [
      {
        text: 'Test text',
        testString: 'assert.strictEqual(true, true);'
      }
    ],
    challengeFiles: [
      {
        fileKey: 'scriptjs',
        contents: '// JavaScript seed code'
      }
    ]
  },
  python: {
    tests: [
      {
        text: 'Test text',
        testString: '({test: () => { runPython(`assert True == True`)}})'
      }
    ],
    challengeFiles: [
      {
        fileKey: 'mainpy',
        contents: '# Python seed code'
      }
    ]
  }
};

const mockApiAllChallenges = [
  // today
  {
    // real ID from certified user so it shows completed in calendar
    id: '6814d8e1516e86b171929de4',
    date: todayMidnight
  },
  // yesterday, or tomorrow if today is the first
  {
    id: 'other-id',
    date: `${formatDate({ year, month, day: day === 1 ? day + 1 : day - 1 })}T00:00:00.000Z`
  }
];

const mockDaysInMonth = new Date(year, month, 0).getDate();

test.describe('Daily Coding Challenges', () => {
  test('should show not found page for invalid date', async ({ page }) => {
    await page.goto('/learn/daily-coding-challenge?date=invalid-date');
    await expect(
      page.getByText(/daily coding challenge not found\./i)
    ).toBeVisible();
  });

  test('should show not found page for date without challenge', async ({
    page
  }) => {
    await page.route(dateRouteRe, async route => {
      await route.fulfill({
        status: 404,
        headers: { 'Content-Type': 'application/json' },
        json: { type: 'error', message: 'Challenge not found.' }
      });
    });

    await page.goto('/learn/daily-coding-challenge?date=2025-01-01');
    await expect(
      page.getByText(/daily coding challenge not found\./i)
    ).toBeVisible();
  });

  test('should show not found page for API error', async ({ page }) => {
    await page.route(dateRouteRe, async route => {
      await route.fulfill({
        status: 500,
        headers: { 'Content-Type': 'application/json' },
        json: { type: 'error', message: 'Internal server error.' }
      });
    });

    await page.goto('/learn/daily-coding-challenge?date=2025-01-01');
    await expect(
      page.getByText(/daily coding challenge not found\./i)
    ).toBeVisible();
  });

  test('should show not found page for invalid challenge data', async ({
    page
  }) => {
    await page.route(dateRouteRe, async route => {
      await route.fulfill({
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        json: { invalid: 'data structure' }
      });
    });

    await page.goto('/learn/daily-coding-challenge?date=2025-06-27');
    await expect(
      page.getByText(/daily coding challenge not found\./i)
    ).toBeVisible();
  });

  test('should load and display a daily coding challenge with a valid date, and should be able to switch between JavaScript and Python', async ({
    page
  }) => {
    await page.route(dateRouteRe, async route => {
      await route.fulfill({
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        json: mockApiChallenge
      });
    });

    await page.goto(`/learn/daily-coding-challenge?date=${todayUsCentral}`);

    // Title
    await expect(page.getByText('Test title')).toBeVisible();

    // Description
    await expect(page.getByText('Test description')).toBeVisible();

    // Language buttons
    await expect(
      page.getByRole('button', { name: /javascript/i })
    ).toBeVisible();
    await expect(page.getByRole('button', { name: /python/i })).toBeVisible();

    // Should show JS UI by default

    // script.js button
    await expect(
      page.getByRole('button', { name: /script.js/i })
    ).toBeVisible();
    // No main.py button
    await expect(
      page.getByRole('button', { name: /main.py/i })
    ).not.toBeVisible();
    // Console Button
    await expect(page.getByRole('button', { name: /console/i })).toBeVisible();
    // No Preview button
    await expect(page.getByTestId('preview-pane-button')).not.toBeVisible();
    // Should have JS seed code
    await expect(page.locator("div[role='code'].monaco-editor")).toContainText(
      '// JavaScript seed code'
    );

    // Show show Python UI after changing language
    await page.getByRole('button', { name: /python/i }).click();

    // main.py button
    await expect(page.getByRole('button', { name: /main.py/i })).toBeVisible();
    // No script.js button
    await expect(
      page.getByRole('button', { name: /script.js/i })
    ).not.toBeVisible();
    // Console Button
    await expect(page.getByRole('button', { name: /console/i })).toBeVisible();
    // Preview button
    await expect(page.getByTestId('preview-pane-button')).toBeVisible();
    // Should have Python seed code
    await expect(page.locator("div[role='code'].monaco-editor")).toContainText(
      '# Python seed code'
    );

    await page.goto(`/learn/daily-coding-challenge?date=${todayUsCentral}`);

    await expect(page.getByRole('button', { name: /main.py/i })).toBeVisible();
  });
});

test.describe('Daily Coding Challenge Archive', () => {
  test('should load and display the calendar', async ({ page }) => {
    await page.route(allRouteRe, async route => {
      await route.fulfill({
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        json: mockApiAllChallenges
      });
    });

    await page.goto('/learn/daily-coding-challenge/archive');

    await expect(page.getByText('Daily Coding Challenges')).toBeVisible();

    // Navigation buttons
    await expect(
      page.getByRole('button', { name: /previous month/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /next month/i })
    ).toBeVisible();

    // Go to today button
    await expect(
      page.getByRole('link', { name: /go to today/i })
    ).toBeVisible();

    // Calendar should render a day for each day in the month
    const totalCalendarDays = await page.getByTestId('calendar-day').count();
    expect(totalCalendarDays).toBe(mockDaysInMonth);

    // Completed days
    await expect(page.getByTestId('calendar-day-completed')).toHaveCount(1);

    // Not completed days
    await expect(page.getByTestId('calendar-day-not-completed')).toHaveCount(1);
  });
});

import { test, expect } from '@playwright/test';
import { getTodayUsCentral } from '../client/src/components/daily-coding-challenge/helpers';

const mockChallengeData = {
  _id: 'test-challenge-id',
  challengeNumber: 1,
  title: 'Test title',
  date: '2025-06-27T00:00:00.000Z',
  description: 'Test description',
  instructions: 'Test instructions',
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

// Since the calendar shows the current month for US Central time - we mock challenges for days that will be in the calendar
const generateCurrentMonthMockData = () => {
  const todayString = getTodayUsCentral();
  const [month, day, year] = todayString.split('-').map(Number);

  const createUsCentralDate = (year: number, month: number, day: number) => {
    const paddedMonth = month.toString().padStart(2, '0');
    const paddedDay = day.toString().padStart(2, '0');

    return `${year}-${paddedMonth}-${paddedDay}T00:00:00.000Z`;
  };

  const challenges = [
    // today
    {
      // real ID from in certified user so it shows completed in calendar
      _id: '6814d8e1516e86b171929de4',
      date: createUsCentralDate(year, month, day)
    },
    // yesterday or tomorrow if today is the first
    {
      _id: 'other-id',
      date: createUsCentralDate(year, month, day === 1 ? day + 1 : day - 1)
    }
  ];

  const daysInMonth = new Date(year, month, 0).getDate();

  return {
    challenges,
    daysInMonth
  };
};

test.describe('Daily Coding Challenges', () => {
  test('should show not found page for invalid date', async ({ page }) => {
    await page.goto('/learn/daily-coding-challenge?date=invalid-date');
    await expect(
      page.getByText(/daily coding challenge not found\./i)
    ).toBeVisible();
  });

  test('should handle API error gracefully', async ({ page }) => {
    await page.route('**/api/daily-challenge/date/*', async route => {
      await route.fulfill({
        status: 500,
        json: { error: 'Internal server error' }
      });
    });

    await page.goto('/learn/daily-coding-challenge?date=06-27-2025');
    await expect(
      page.getByText(/daily coding challenge not found\./i)
    ).toBeVisible();
  });

  test('should handle invalid challenge data', async ({ page }) => {
    await page.route('**/api/daily-challenge/date/*', async route => {
      await route.fulfill({
        json: { invalid: 'data structure' }, // This should fail validation
        status: 200
      });
    });

    await page.goto('/learn/daily-coding-challenge?date=06-27-2025');
    await expect(
      page.getByText(/daily coding challenge not found\./i)
    ).toBeVisible();
  });

  test('should load and display a daily coding challenge with a valid date', async ({
    page
  }) => {
    await page.route('**/api/daily-challenge/date/*', async route => {
      await route.fulfill({
        json: mockChallengeData,
        status: 200
      });
    });

    await page.goto('/learn/daily-coding-challenge?date=06-27-2025');

    // Title
    await expect(page.getByText('Test title')).toBeVisible();

    // Description
    await expect(page.getByText('Test description')).toBeVisible();

    // Instructions
    await expect(page.getByText('Test instructions')).toBeVisible();

    // Breadcrumbs
    await expect(
      page.getByRole('link', { name: /daily coding challenge/i })
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: /june 27, 2025/i })
    ).toBeVisible();
  });

  test('should be able to switch between JavaScript and Python', async ({
    page
  }) => {
    await page.route('**/api/daily-challenge/date/*', async route => {
      await route.fulfill({
        json: mockChallengeData,
        status: 200
      });
    });

    await page.goto('/learn/daily-coding-challenge?date=06-27-2025');

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

    // Should stay on Python UI after reload
    const reloadApiPromise = page.waitForResponse(
      '**/api/daily-challenge/date/*'
    );
    await page.reload();
    // Wait for the API call to complete so we know page it loaded
    await reloadApiPromise;
    await expect(page.getByRole('button', { name: /main.py/i })).toBeVisible();
  });
});

test.describe('Daily Coding Challenge Archive', () => {
  test('should load and display the calendar', async ({ page }) => {
    const { challenges: mockCalendarData, daysInMonth } =
      generateCurrentMonthMockData();

    await page.route('**/api/daily-challenge/all', async route => {
      await route.fulfill({
        json: mockCalendarData,
        status: 200
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
    expect(totalCalendarDays).toBe(daysInMonth);

    // Completed days
    await expect(page.getByTestId('calendar-day-completed')).toHaveCount(1);

    // Not completed days
    await expect(page.getByTestId('calendar-day-not-completed')).toHaveCount(1);
  });
});

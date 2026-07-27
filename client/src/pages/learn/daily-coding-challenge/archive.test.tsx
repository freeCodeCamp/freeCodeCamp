import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import { initialState } from '../../../redux';
import { ns as MainApp } from '../../../redux/action-types';
import {
  configure,
  render,
  screen,
  waitFor
} from '../../../../utils/test-utils';
import {
  formatDate,
  getTodayUsCentral,
  toMonthDay
} from '../../../components/daily-coding-challenge/helpers';
import Archive from './archive';

vi.mock('../../../components/Map', () => ({
  default: () => <div>curriculum map</div>
}));
vi.mock('../../../utils/get-words', () => ({
  randomQuote: () => ({ quote: 'Test quote', author: 'Test author' })
}));

const todayUsCentral = getTodayUsCentral();
const [year, month, day] = todayUsCentral.split('-').map(Number);
const todayMidnight = `${todayUsCentral}T00:00:00.000Z`;
const adjacentDate = formatDate({
  year,
  month,
  day: day === 1 ? day + 1 : day - 1
});
const daysInMonth = new Date(year, month, 0).getDate();

function renderArchive() {
  const store = createStore({
    [MainApp]: {
      ...initialState,
      user: {
        ...initialState.user,
        sessionUser: {
          completedDailyCodingChallenges: [
            {
              id: 'completed-challenge-id',
              languages: ['javascript']
            }
          ]
        }
      }
    }
  });

  return render(<Archive />, store);
}

describe('<DailyCodingChallengeArchive />', () => {
  beforeEach(() => {
    configure({ testIdAttribute: 'data-playwright-test-label' });
  });

  afterEach(() => {
    configure({ testIdAttribute: 'data-testid' });
    vi.restoreAllMocks();
  });

  it('renders the calendar from the daily coding challenge API', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue([
        {
          id: 'completed-challenge-id',
          date: todayMidnight,
          challengeNumber: 1,
          title: 'Today challenge'
        },
        {
          id: 'not-completed-challenge-id',
          date: `${adjacentDate}T00:00:00.000Z`,
          challengeNumber: 2,
          title: 'Adjacent challenge'
        }
      ])
    } as unknown as Response);

    renderArchive();

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'daily-coding-challenges.title'
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('button', { name: 'aria.previous-month' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'aria.next-month' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'buttons.go-to-dcc-today' })
    ).toHaveAttribute(
      'href',
      `/learn/daily-coding-challenge/${toMonthDay(todayUsCentral)}`
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('calendar-day')).toHaveLength(daysInMonth);
    });
    expect(screen.getAllByTestId('calendar-day-completed')).toHaveLength(1);
    expect(screen.getAllByTestId('calendar-day-not-completed')).toHaveLength(1);
  });

  it('renders the not found page when the API response is invalid', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue({ invalid: 'data structure' })
    } as unknown as Response);

    renderArchive();

    expect(
      await screen.findByRole('heading', {
        name: 'daily-coding-challenges.not-found'
      })
    ).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import store from 'store';
import { afterEach, describe, expect, it, vi } from 'vitest';

import ShowDailyCodingChallenge from './show-daily-coding-challenge';

const showClassic = vi.hoisted(() => vi.fn());

interface ShowClassicProps {
  isDailyCodingChallenge: boolean;
  dailyCodingChallengeLanguage: string;
  data: {
    challengeNode: {
      challenge: {
        title: string;
        description: string;
        challengeType: number;
        challengeFiles: Array<{
          ext: string;
          name: string;
          contents: string;
        }>;
      };
    };
  };
}

vi.mock('../templates/Challenges/classic/show', () => ({
  default: (props: unknown) => {
    showClassic(props);
    return <div>classic challenge</div>;
  }
}));
vi.mock('../utils/get-words', () => ({
  randomQuote: () => ({ quote: 'Test quote', author: 'Test author' })
}));

const mockDailyChallenge = {
  id: 'test-challenge-id',
  challengeNumber: 1,
  title: 'Test title',
  date: '2026-06-22T00:00:00.000Z',
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

describe('<ShowDailyCodingChallenge />', () => {
  it('keeps the page Head title while loading', () => {
    vi.spyOn(globalThis, 'fetch').mockReturnValue(new Promise(() => {}));
    document.title = 'Default Gatsby page title';

    render(<ShowDailyCodingChallenge date='06-22' />);

    expect(document.title).toBe('Default Gatsby page title');
    expect(showClassic).not.toHaveBeenCalled();
  });

  it('updates the title when navigation loads a missing challenge', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    fetchSpy.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue(mockDailyChallenge)
    } as unknown as Response);
    fetchSpy.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue(null)
    } as unknown as Response);

    const { rerender } = render(<ShowDailyCodingChallenge date='06-22' />);
    await screen.findByText('classic challenge');
    expect(document.title).toContain('Test title');

    rerender(<ShowDailyCodingChallenge date='06-23' />);
    await screen.findByRole('heading', {
      name: 'daily-coding-challenges.not-found'
    });

    expect(document.title).toBe('404.page-not-found | freeCodeCamp.org');
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it('ignores a response from the previous date after navigation', async () => {
    let resolvePreviousRequest: (response: Response) => void = () => {};
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    fetchSpy.mockReturnValueOnce(
      new Promise(resolve => {
        resolvePreviousRequest = resolve;
      })
    );
    fetchSpy.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue(null)
    } as unknown as Response);

    const { rerender } = render(<ShowDailyCodingChallenge date='06-22' />);
    rerender(<ShowDailyCodingChallenge date='06-23' />);
    await screen.findByRole('heading', {
      name: 'daily-coding-challenges.not-found'
    });
    resolvePreviousRequest({
      json: vi.fn().mockResolvedValue(mockDailyChallenge)
    } as unknown as Response);
    await waitFor(() => expect(fetchSpy).toHaveBeenCalledTimes(2));

    expect(document.title).toBe('404.page-not-found | freeCodeCamp.org');
    expect(showClassic).not.toHaveBeenCalled();
  });

  afterEach(() => {
    store.clearAll();
    vi.restoreAllMocks();
    showClassic.mockClear();
  });

  it('renders the not found page when the API request fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network error'));

    render(<ShowDailyCodingChallenge date='2026-06-22' />);

    expect(
      await screen.findByRole('heading', {
        name: 'daily-coding-challenges.not-found'
      })
    ).toBeInTheDocument();
    expect(showClassic).not.toHaveBeenCalled();
    expect(document.title).toBe('404.page-not-found | freeCodeCamp.org');
  });

  it('renders the not found page when the API returns invalid challenge data', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue({ invalid: 'data structure' })
    } as unknown as Response);

    render(<ShowDailyCodingChallenge date='2026-06-22' />);

    expect(
      await screen.findByRole('heading', {
        name: 'daily-coding-challenges.not-found'
      })
    ).toBeInTheDocument();
    expect(showClassic).not.toHaveBeenCalled();
    expect(document.title).toBe('404.page-not-found | freeCodeCamp.org');
  });

  it('fetches the challenge by year-agnostic month-day, not the full date', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockDailyChallenge)
    } as unknown as Response);

    render(<ShowDailyCodingChallenge date='2026-06-22' />);

    await waitFor(() => expect(fetchSpy).toHaveBeenCalled());

    const requestedUrl = fetchSpy.mock.calls[0]?.[0] as string;
    expect(requestedUrl).toMatch(/\/daily-coding-challenge\/day\/06-22$/);
  });

  it('also accepts a bare "MM-DD" date prop, unchanged', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockDailyChallenge)
    } as unknown as Response);

    render(<ShowDailyCodingChallenge date='06-22' />);

    expect(await screen.findByText('classic challenge')).toBeInTheDocument();

    const requestedUrl = fetchSpy.mock.calls[0]?.[0] as string;
    expect(requestedUrl).toMatch(/\/daily-coding-challenge\/day\/06-22$/);
  });

  it('formats valid API data before rendering the daily challenge', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockDailyChallenge)
    } as unknown as Response);

    render(<ShowDailyCodingChallenge date='2026-06-22' />);

    expect(await screen.findByText('classic challenge')).toBeInTheDocument();

    await waitFor(() => expect(showClassic).toHaveBeenCalled());

    const props = showClassic.mock.calls[0]?.[0] as unknown as ShowClassicProps;
    const challenge = props.data.challengeNode.challenge;

    expect(props.isDailyCodingChallenge).toBe(true);
    expect(props.dailyCodingChallengeLanguage).toBe('javascript');
    expect(challenge.title).toBe('Test title');
    expect(document.title).toBe(
      'intro:daily-coding-challenge.blocks.daily-coding-challenge.title: Test title | freeCodeCamp.org'
    );
    expect(challenge.description).toBe(
      '<section id="description">\nTest description\n</section>'
    );
    expect(challenge.challengeType).toBe(28);
    expect(challenge.challengeFiles[0]).toEqual(
      expect.objectContaining({
        ext: 'js',
        name: 'script',
        contents: '// JavaScript seed code'
      })
    );
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import i18n from '../../../../i18n/config-for-tests';
import { generateSearchLink, HelpModal } from './help-modal';

vi.unmock('react-i18next');

const defaultHelpModalProps = {
  closeHelpModal: vi.fn(),
  createQuestion: vi.fn(),
  isOpen: true,
  challengeTitle: 'Say Hello to HTML Elements',
  challengeBlock: 'basic-html-and-html5',
  superBlock: 'responsive-web-design',
  guideUrl: 'https://forum.example.com/guide',
  openVideoModal: vi.fn()
};

const renderHelpModal = (
  props: Partial<React.ComponentProps<typeof HelpModal>> = {}
) => render(<HelpModal {...defaultHelpModalProps} {...props} />);

beforeAll(() => {
  type ResizeObserverMockInstance = {
    observe: ResizeObserver['observe'];
    unobserve: ResizeObserver['unobserve'];
    disconnect: ResizeObserver['disconnect'];
  };

  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    value: vi.fn(function (
      this: ResizeObserverMockInstance,
      _cb: ResizeObserverCallback
    ) {
      this.observe = vi.fn();
      this.unobserve = vi.fn();
      this.disconnect = vi.fn();
    })
  });
});

describe('generateSearchLink', () => {
  it("should return a link with search query containing block name and challenge title if the title includes 'step'", async () => {
    await i18n.reloadResources('en', 'intro');
    const link = generateSearchLink(
      'Step 10',
      'learn-basic-javascript-by-building-a-role-playing-game',
      'javascript-algorithms-and-data-structures-v8'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=javascript-algorithms-and-data-structures-v8.blocks.learn-basic-javascript-by-building-a-role-playing-game.title%20-%20Step%2010%20in%3Atitle'
    );
  });

  it("should return a link with search query containing block name and challenge title if the title includes 'task'", () => {
    const link = generateSearchLink(
      'Task 10',
      'learn-greetings-in-your-first-day-at-the-office',
      'a2-english-for-developers'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=a2-english-for-developers.blocks.learn-greetings-in-your-first-day-at-the-office.title%20-%20Task%2010%20in%3Atitle'
    );
  });

  it("should return a link with search query containing only challenge title if the title does not include 'step' or 'task'", () => {
    const link = generateSearchLink(
      'Perform Basic String Formatting in C#',
      'write-your-first-code-using-c-sharp',
      'foundational-c-sharp-with-microsoft'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=foundational-c-sharp-with-microsoft.blocks.write-your-first-code-using-c-sharp.title%20-%20Perform%20Basic%20String%20Formatting%20in%20C%23%20in%3Atitle'
    );
  });
});

describe('<HelpModal />', () => {
  it('renders help options with a video button when video is available', () => {
    renderHelpModal({ videoUrl: 'https://example.com/video' });

    expect(
      screen.getByRole('dialog', { name: 'buttons.get-help' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'buttons.get-hint' })
    ).toHaveAttribute('href', defaultHelpModalProps.guideUrl);
    expect(
      screen.getByRole('button', { name: 'buttons.watch-video' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.create-post' })
    ).toBeInTheDocument();
  });

  it('renders help options without a video button when video is unavailable', () => {
    renderHelpModal();

    expect(
      screen.getByRole('dialog', { name: 'buttons.get-help' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'buttons.get-hint' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'buttons.watch-video' })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.create-post' })
    ).toBeInTheDocument();
  });
});

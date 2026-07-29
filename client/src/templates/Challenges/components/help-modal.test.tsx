import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeAll, afterEach } from 'vitest';
import i18n from '../../../../i18n/config-for-tests';
import translations from '../../../../i18n/locales/english/translations.json';
import { generateSearchLink, HelpModal } from './help-modal';

vi.unmock('react-i18next');

const validDescription =
  'Example text with enough characters to validate that the forum help form can be submitted.';

const createDefaultHelpModalProps = () => ({
  closeHelpModal: vi.fn(),
  createQuestion: vi.fn(),
  isOpen: true,
  challengeTitle: 'Write Your First C# Code',
  challengeBlock: 'write-your-first-code-using-c-sharp',
  superBlock: 'foundational-c-sharp-with-microsoft',
  openVideoModal: vi.fn()
});

const renderHelpModal = (
  props: Partial<React.ComponentProps<typeof HelpModal>> = {}
) => {
  const helpModalProps = {
    ...createDefaultHelpModalProps(),
    ...props
  };

  return {
    ...render(<HelpModal {...helpModalProps} />),
    helpModalProps
  };
};

const openHelpForm = async () => {
  await userEvent.click(
    screen.getByRole('button', { name: translations.buttons['create-post'] })
  );
};

const getDescriptionInput = () =>
  screen.getByRole('textbox', {
    name: /^Tell us what's happening:/
  });

beforeAll(() => {
  i18n.addResourceBundle('en', 'translations', translations, true, true);

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

afterEach(() => {
  vi.clearAllMocks();
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
  it('renders the initial help options and warning copy', () => {
    renderHelpModal();

    const dialog = screen.getByRole('dialog', {
      name: translations.buttons['get-help']
    });

    expect(dialog).toBeInTheDocument();
    expect(
      within(dialog).getByText(/If you've already tried the/)
    ).toBeInTheDocument();
    expect(
      within(dialog).getByText(/Before making a new post/)
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', {
        name: translations.buttons['create-post']
      })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', {
        name: translations.buttons.cancel
      })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', {
        name: translations.buttons.close
      })
    ).toBeInTheDocument();
  });

  it('closes from the cancel and header close buttons', async () => {
    const { helpModalProps, unmount } = renderHelpModal();

    await userEvent.click(
      screen.getByRole('button', { name: translations.buttons.cancel })
    );

    expect(helpModalProps.closeHelpModal).toHaveBeenCalledTimes(1);

    unmount();
    const { helpModalProps: secondHelpModalProps } = renderHelpModal();

    await userEvent.click(
      screen.getByRole('button', { name: translations.buttons.close })
    );

    expect(secondHelpModalProps.closeHelpModal).toHaveBeenCalledTimes(1);
  });

  it('renders forum links with safe external-link attributes', () => {
    renderHelpModal();

    expect(
      screen.getByRole('link', { name: 'Read-Search-Ask' })
    ).toHaveAttribute('href', 'https://forum.freecodecamp.org/t/19514');
    expect(
      screen.getByRole('link', {
        name: 'check if your question has already been answered on the forum'
      })
    ).toHaveAttribute(
      'href',
      'https://forum.freecodecamp.org/search?q=foundational-c-sharp-with-microsoft.blocks.write-your-first-code-using-c-sharp.title%20-%20Write%20Your%20First%20C%23%20Code%20in%3Atitle'
    );

    screen.getAllByRole('link').forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('keeps submit disabled until both confirmations are checked', async () => {
    renderHelpModal();

    await openHelpForm();

    const rsaCheckbox = screen.getByRole('checkbox', {
      name: translations.aria['rsa-checkbox']
    });
    const similarQuestionsCheckbox = screen.getByRole('checkbox', {
      name: translations.aria['similar-questions-checkbox']
    });
    const descriptionInput = getDescriptionInput();
    const submitButton = screen.getByRole('button', {
      name: translations.buttons.submit
    });

    // paste is preferable since typing the whole description is slow (each
    // keystroke triggers a re-render) and times the test out on loaded CI
    // runners
    await userEvent.click(descriptionInput);
    await userEvent.paste(validDescription);

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await userEvent.click(rsaCheckbox);
    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await userEvent.click(rsaCheckbox);
    await userEvent.click(similarQuestionsCheckbox);
    expect(submitButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('keeps submit disabled when the description is too short', async () => {
    renderHelpModal();

    await openHelpForm();

    await userEvent.click(
      screen.getByRole('checkbox', {
        name: translations.aria['rsa-checkbox']
      })
    );
    await userEvent.click(
      screen.getByRole('checkbox', {
        name: translations.aria['similar-questions-checkbox']
      })
    );
    await userEvent.type(getDescriptionInput(), 'Too short');

    expect(
      screen.getByRole('button', { name: translations.buttons.submit })
    ).toHaveAttribute('aria-disabled', 'true');
  });

  it('submits a valid help request and closes the modal', async () => {
    const { helpModalProps } = renderHelpModal();

    await openHelpForm();

    await userEvent.click(
      screen.getByRole('checkbox', {
        name: translations.aria['rsa-checkbox']
      })
    );
    await userEvent.click(
      screen.getByRole('checkbox', {
        name: translations.aria['similar-questions-checkbox']
      })
    );
    // paste is preferable since typing the whole description is slow (each
    // keystroke triggers a re-render) and times the test out on loaded CI
    // runners
    await userEvent.click(getDescriptionInput());
    await userEvent.paste(validDescription);
    await userEvent.click(
      screen.getByRole('button', { name: translations.buttons.submit })
    );

    expect(helpModalProps.createQuestion).toHaveBeenCalledWith(
      validDescription
    );
    expect(helpModalProps.closeHelpModal).toHaveBeenCalledTimes(1);
  });
});

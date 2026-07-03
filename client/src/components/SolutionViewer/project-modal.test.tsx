import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import ProjectModal from './project-modal';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { projectTitle?: string }) => {
      switch (key) {
        case 'settings.labels.solution-for':
          return `Solution for ${options?.projectTitle}`;
        case 'buttons.close':
          return 'Close';
        default:
          return key;
      }
    }
  })
}));

const projectTitle = 'Palindrome Checker';

const originalResizeObserver = globalThis.ResizeObserver;

class ResizeObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

beforeAll(() => {
  globalThis.ResizeObserver = ResizeObserverMock;
});

afterAll(() => {
  globalThis.ResizeObserver = originalResizeObserver;
});

function renderProjectModal({
  isOpen = true,
  challengeFiles = null,
  solution = 'function palindrome(str) { return true; }',
  handleSolutionModalHide = vi.fn()
}: Partial<React.ComponentProps<typeof ProjectModal>> = {}) {
  render(
    <ProjectModal
      challengeFiles={challengeFiles}
      handleSolutionModalHide={handleSolutionModalHide}
      isOpen={isOpen}
      projectTitle={projectTitle}
      solution={solution}
    />
  );
}

describe('<ProjectModal />', () => {
  it('renders the solution title and code when open', () => {
    renderProjectModal();

    expect(
      screen.getByRole('dialog', { name: `Solution for ${projectTitle}` })
    ).toBeInTheDocument();
    expect(screen.getByText('JS')).toBeInTheDocument();
    // Prism splits the solution across multiple syntax-highlighting nodes,
    // so match on the code element's full text content
    expect(
      screen.getByText(
        (_, element) =>
          element?.tagName === 'CODE' &&
          element.textContent === 'function palindrome(str) { return true; }'
      )
    ).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Close' })).toHaveLength(2);
  });

  it('renders one panel per challenge file', () => {
    renderProjectModal({
      challengeFiles: [
        {
          fileKey: 'indexjs',
          ext: 'js',
          name: 'index',
          contents: 'const x = 1;'
        },
        {
          fileKey: 'stylescss',
          ext: 'css',
          name: 'styles',
          contents: 'body { color: red; }'
        }
      ],
      solution: undefined
    });

    expect(screen.getByText('JS')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  it('does not render a dialog when closed', () => {
    renderProjectModal({ isOpen: false });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('hides when the header close button is clicked', async () => {
    const user = userEvent.setup();
    const handleSolutionModalHide = vi.fn();
    renderProjectModal({ handleSolutionModalHide });

    await user.click(screen.getAllByRole('button', { name: 'Close' })[0]);

    expect(handleSolutionModalHide).toHaveBeenCalledTimes(1);
  });

  it('hides when the footer close button is clicked', async () => {
    const user = userEvent.setup();
    const handleSolutionModalHide = vi.fn();
    renderProjectModal({ handleSolutionModalHide });

    await user.click(screen.getAllByRole('button', { name: 'Close' })[1]);

    expect(handleSolutionModalHide).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MobileLayout } from './mobile-layout';

vi.mock('i18next', () => ({
  default: {
    t: (key: string) => key
  }
}));

const mockProps = {
  editor: <div>Editor</div>,
  hasEditableBoundaries: false,
  hasPreview: false,
  instructions: <div>Instructions</div>,
  notes: '',
  preview: <div>Preview</div>,
  onPreviewResize: vi.fn(),
  windowTitle: 'Test Title',
  showPreviewPortal: false,
  showPreviewPane: false,
  toolPanel: <div>ToolPanel</div>,
  removePortalWindow: vi.fn(),
  setShowPreviewPortal: vi.fn(),
  setShowPreviewPane: vi.fn(),
  portalWindow: null,
  updateUsingKeyboardInTablist: vi.fn(),
  testOutput: <div>Test Output</div>,
  usesMultifileEditor: false,
  usesTerminal: false
};

describe('<MobileLayout />', () => {
  it('should render language selector when isDailyCodingChallenge is true', () => {
    render(
      <MobileLayout
        {...mockProps}
        isDailyCodingChallenge={true}
        dailyCodingChallengeLanguage='javascript'
      />
    );
    expect(screen.getByText('JS')).toBeInTheDocument();
  });

  it('should not render language selector when isDailyCodingChallenge is false', () => {
    render(<MobileLayout {...mockProps} isDailyCodingChallenge={false} />);
    expect(screen.queryByText('JS')).not.toBeInTheDocument();
    expect(screen.queryByText('PY')).not.toBeInTheDocument();
  });

  it('should call setDailyCodingChallengeLanguage when a language is selected', () => {
    const setDailyCodingChallengeLanguage = vi.fn();
    render(
      <MobileLayout
        {...mockProps}
        isDailyCodingChallenge={true}
        dailyCodingChallengeLanguage='javascript'
        setDailyCodingChallengeLanguage={setDailyCodingChallengeLanguage}
      />
    );

    // Open dropdown
    fireEvent.click(screen.getByText('JS'));

    // Click Python option
    fireEvent.click(screen.getByText('Python'));

    expect(setDailyCodingChallengeLanguage).toHaveBeenCalledWith('python');
  });

  it('renders notes in the notes tab for multifile editor challenges', async () => {
    const user = userEvent.setup();
    render(
      <MobileLayout
        {...mockProps}
        notes='<p>This is a test note</p>'
        usesMultifileEditor={true}
      />
    );

    await user.click(
      screen.getByRole('tab', { name: 'learn.editor-tabs.notes' })
    );

    expect(screen.getByText('This is a test note')).toBeVisible();
  });
});

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

vi.mock('../components/independent-lower-jaw', () => ({
  default: () => <div data-testid='independent-lower-jaw' />
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
  removePortalWindow: vi.fn(),
  setShowPreviewPortal: vi.fn(),
  setShowPreviewPane: vi.fn(),
  portalWindow: null,
  updateUsingKeyboardInTablist: vi.fn(),
  testOutput: <div>Test Output</div>,
  usesMultifileEditor: false,
  usesTerminal: false
};

const renderMobileLayout = (
  props: Partial<React.ComponentProps<typeof MobileLayout>> = {}
) => render(<MobileLayout {...mockProps} {...props} />);

describe('<MobileLayout />', () => {
  it('renders instructions, code, console, preview, portal controls, and the lower jaw when preview is available', () => {
    renderMobileLayout({
      hasPreview: true,
      showPreviewPane: true
    });

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: 'learn.editor-tabs.instructions' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: 'learn.editor-tabs.code' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: 'learn.editor-tabs.console' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: 'learn.editor-tabs.preview' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'aria.move-preview-to-new-window' })
    ).toBeInTheDocument();
    expect(screen.getByTestId('independent-lower-jaw')).toBeInTheDocument();
  });

  it('renders instructions, code, console, and the lower jaw when preview is unavailable', () => {
    renderMobileLayout({
      hasPreview: false
    });

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: 'learn.editor-tabs.instructions' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: 'learn.editor-tabs.code' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: 'learn.editor-tabs.console' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('tab', { name: 'learn.editor-tabs.preview' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'aria.move-preview-to-new-window' })
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('independent-lower-jaw')).toBeInTheDocument();
  });

  it('renders the lower jaw for challenges with editable boundaries', () => {
    renderMobileLayout({ hasEditableBoundaries: true });

    expect(screen.getByTestId('independent-lower-jaw')).toBeInTheDocument();
  });

  it('should render language selector when isDailyCodingChallenge is true', () => {
    renderMobileLayout({
      isDailyCodingChallenge: true,
      dailyCodingChallengeLanguage: 'javascript'
    });
    expect(screen.getByText('JS')).toBeInTheDocument();
  });

  it('should not render language selector when isDailyCodingChallenge is false', () => {
    renderMobileLayout({ isDailyCodingChallenge: false });
    expect(screen.queryByText('JS')).not.toBeInTheDocument();
    expect(screen.queryByText('PY')).not.toBeInTheDocument();
  });

  it('should call setDailyCodingChallengeLanguage when a language is selected', () => {
    const setDailyCodingChallengeLanguage = vi.fn();
    renderMobileLayout({
      isDailyCodingChallenge: true,
      dailyCodingChallengeLanguage: 'javascript',
      setDailyCodingChallengeLanguage
    });

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

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MobileLayout } from './mobile-layout';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
  withTranslation: () => (Component: any) => Component
}));

vi.mock('i18next', () => ({
  default: {
    t: (key: string) => key
  }
}));

vi.mock('@freecodecamp/shared/config/challenge-types', () => ({
  challengeTypes: {
    python: 1,
    javascript: 2,
    multifileCertProject: 3,
    multifilePythonCertProject: 4,
    lab: 5,
    jsLab: 6,
    pyLab: 7,
    dailyChallengeJs: 8,
    dailyChallengePy: 9
  }
}));

vi.mock('../redux/actions', () => ({
  removePortalWindow: vi.fn(),
  setShowPreviewPortal: vi.fn(),
  setShowPreviewPane: vi.fn(),
  storePortalWindow: vi.fn()
}));

vi.mock('../redux/selectors', () => ({
  portalWindowSelector: vi.fn(),
  showPreviewPortalSelector: vi.fn(),
  showPreviewPaneSelector: vi.fn()
}));

vi.mock('../components/preview-portal', () => ({
  default: () => <div>Preview Portal</div>
}));

vi.mock('../components/notes', () => ({
  default: () => <div>Notes</div>
}));

vi.mock('./editor-tabs', () => ({
  default: () => <div>Editor Tabs</div>
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

const renderMobileLayout = (
  props: Partial<React.ComponentProps<typeof MobileLayout>> = {}
) => render(<MobileLayout {...mockProps} {...props} />);

describe('<MobileLayout />', () => {
  it('renders instructions, code, console, preview, portal, and tool panel controls when preview is available', () => {
    renderMobileLayout({
      hasPreview: true,
      showPreviewPane: true,
      toolPanel: (
        <div>
          <button>buttons.help</button>
          <button>buttons.save</button>
          <button>buttons.run</button>
        </div>
      )
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
    expect(
      screen.getByRole('button', { name: 'buttons.help' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.save' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.run' })
    ).toBeInTheDocument();
  });

  it('renders instructions, code, console, and tool panel controls when preview is unavailable', () => {
    renderMobileLayout({
      hasPreview: false,
      toolPanel: (
        <div>
          <button>buttons.help</button>
          <button>buttons.reset</button>
          <button>buttons.run</button>
        </div>
      )
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
    expect(
      screen.getByRole('button', { name: 'buttons.help' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.reset' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.run' })
    ).toBeInTheDocument();
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
});

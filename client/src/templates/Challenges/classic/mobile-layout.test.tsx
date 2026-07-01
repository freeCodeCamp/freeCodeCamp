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
});

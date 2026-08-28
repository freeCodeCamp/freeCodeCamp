import React from 'react';
import { configure, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import store from 'store';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { ChallengeFiles } from '../../../redux/prop-types';
import { createStore } from '../../../redux/create-store';
import { createFiles, initVisibleEditors } from '../redux/actions';
import { render } from '../../../../utils/test-utils';
import { DesktopLayout } from './desktop-layout';

vi.mock('../../../utils/get-words');

const rtl = vi.hoisted(() => ({ current: false }));

// isRtlLanguage is a module-level constant derived from the build locale, so it
// is flipped through a getter rather than by re-importing the module.
vi.mock('../../../utils/is-rtl-language', () => ({
  get isRtlLanguage() {
    return rtl.current;
  }
}));

vi.mock('../components/independent-lower-jaw', () => ({
  default: () => <div data-testid='independent-lower-jaw' />
}));

const challengeFiles: ChallengeFiles = [
  {
    contents: '',
    editableRegionBoundaries: [],
    ext: 'html',
    fileKey: 'indexhtml',
    history: ['index.html'],
    name: 'index',
    path: 'index.html'
  }
];

const pane = { flex: 1 };

const defaultProps = {
  challengeFiles,
  challengeType: challengeTypes.html,
  dailyCodingChallengeLanguage: 'javascript' as const,
  editor: <div>Editor</div>,
  hasEditableBoundaries: false,
  hasPreview: false,
  instructions: <div>Instructions</div>,
  isAdvancing: false,
  isDailyCodingChallenge: false,
  isFirstStep: false,
  layoutState: {
    codePane: pane,
    editorPane: pane,
    instructionPane: pane,
    notesPane: pane,
    previewPane: pane,
    testsPane: pane
  },
  notes: '',
  onPreviewResize: vi.fn(),
  portalWindow: null,
  preview: <div>Preview</div>,
  removePortalWindow: vi.fn(),
  resizeProps: { onStopResize: vi.fn(), onResize: vi.fn() },
  setDailyCodingChallengeLanguage: vi.fn(),
  setShowPreviewPane: vi.fn(),
  setShowPreviewPortal: vi.fn(),
  showPreviewPane: false,
  showPreviewPortal: false,
  startWithConsoleShown: false,
  testOutput: <div>Test Output</div>,
  windowTitle: 'Test Title'
};

const renderDesktopLayout = (props: Partial<typeof defaultProps> = {}) => {
  const reduxStore = createStore();
  reduxStore.dispatch(createFiles(challengeFiles));
  reduxStore.dispatch(initVisibleEditors());

  return render(<DesktopLayout {...defaultProps} {...props} />, reduxStore);
};

describe('<DesktopLayout />', () => {
  beforeEach(() => {
    // The pane wrappers are marked up for Playwright, not for Testing Library.
    configure({ testIdAttribute: 'data-playwright-test-label' });
  });

  afterEach(() => {
    configure({ testIdAttribute: 'data-testid' });
    rtl.current = false;
    vi.clearAllMocks();
    store.clearAll();
  });

  it('renders the three pane layout for a project-style challenge with a preview', () => {
    renderDesktopLayout({
      challengeType: challengeTypes.multifileCertProject,
      hasPreview: true,
      showPreviewPane: true
    });

    expect(screen.getByTestId('desktop-layout')).toBeInTheDocument();
    expect(screen.getByTestId('action-row')).toBeInTheDocument();
    expect(screen.getByTestId('tabs-row')).toBeInTheDocument();
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
    expect(screen.getByTestId('instruction-pane')).toBeInTheDocument();
    expect(screen.getByTestId('editor-pane')).toBeInTheDocument();
    expect(screen.getByTestId('preview-pane')).toBeInTheDocument();
  });

  it('renders the two pane layout without an action row or preview for a classic challenge', () => {
    renderDesktopLayout({
      challengeType: challengeTypes.html,
      hasPreview: false,
      showPreviewPane: false
    });

    expect(screen.getByTestId('desktop-layout')).toBeInTheDocument();
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
    expect(screen.getByTestId('instruction-pane')).toBeInTheDocument();
    expect(screen.getByTestId('editor-pane')).toBeInTheDocument();

    expect(screen.queryByTestId('action-row')).not.toBeInTheDocument();
    expect(screen.queryByTestId('tabs-row')).not.toBeInTheDocument();
    expect(screen.queryByTestId('preview-pane')).not.toBeInTheDocument();
  });

  it('hides the preview pane when the challenge has a preview but the pane is toggled off', () => {
    renderDesktopLayout({
      challengeType: challengeTypes.multifileCertProject,
      hasPreview: true,
      showPreviewPane: false
    });

    expect(screen.getByTestId('action-row')).toBeInTheDocument();
    expect(screen.queryByTestId('preview-pane')).not.toBeInTheDocument();
  });

  it('renders an action row for a project with editable boundaries', () => {
    renderDesktopLayout({
      challengeType: challengeTypes.html,
      hasEditableBoundaries: true
    });

    expect(screen.getByTestId('action-row')).toBeInTheDocument();
    expect(screen.getByTestId('tabs-row')).toBeInTheDocument();
  });

  it('hides the instruction pane once the instructions tab is toggled off', async () => {
    const user = userEvent.setup();
    renderDesktopLayout({
      challengeType: challengeTypes.multifileCertProject,
      hasPreview: true,
      showPreviewPane: true
    });

    expect(screen.getByTestId('instruction-pane')).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: 'learn.editor-tabs.instructions' })
    );

    expect(screen.queryByTestId('instruction-pane')).not.toBeInTheDocument();
  });
  it('orders the panes instructions, editor, preview for a left-to-right locale', () => {
    renderDesktopLayout({
      challengeType: challengeTypes.multifileCertProject,
      hasPreview: true,
      showPreviewPane: true
    });

    const paneOrder = within(screen.getByTestId('main-container'))
      .getAllByText(/^(Instructions|Editor|Preview)$/)
      .map(pane => pane.textContent);

    expect(paneOrder).toEqual(['Instructions', 'Editor', 'Preview']);
  });

  it('reverses the pane order for a right-to-left locale', () => {
    rtl.current = true;

    renderDesktopLayout({
      challengeType: challengeTypes.multifileCertProject,
      hasPreview: true,
      showPreviewPane: true
    });

    const paneOrder = within(screen.getByTestId('main-container'))
      .getAllByText(/^(Instructions|Editor|Preview)$/)
      .map(pane => pane.textContent);

    expect(paneOrder).toEqual(['Preview', 'Editor', 'Instructions']);
  });
});

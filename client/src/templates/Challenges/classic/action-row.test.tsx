import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from 'store';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import { createFiles, initVisibleEditors } from '../redux/actions';
import { render } from '../../../../utils/test-utils';
import ActionRow from './action-row';

vi.mock('../../../utils/get-words');

const challengeFiles = [
  {
    contents: '',
    editableRegionBoundaries: [],
    ext: 'html',
    fileKey: 'indexhtml',
    name: 'index'
  },
  {
    contents: '',
    editableRegionBoundaries: [],
    ext: 'css',
    fileKey: 'stylescss',
    name: 'styles'
  }
];

const defaultProps = {
  dailyCodingChallengeLanguage: 'javascript' as const,
  hasNotes: false,
  hasPreview: true,
  isDailyCodingChallenge: false,
  setDailyCodingChallengeLanguage: vi.fn(),
  showConsole: false,
  showInstructions: true,
  showNotes: false,
  showPreviewPane: true,
  showPreviewPortal: false,
  togglePane: vi.fn(),
  usesTerminal: false
};

const renderActionRow = (props: Partial<typeof defaultProps> = {}) => {
  const reduxStore = createStore();
  reduxStore.dispatch(createFiles(challengeFiles));
  reduxStore.dispatch(initVisibleEditors());

  return render(<ActionRow {...defaultProps} {...props} />, reduxStore);
};

describe('<ActionRow />', () => {
  afterEach(() => {
    vi.clearAllMocks();
    store.clearAll();
  });

  it('renders instructions, editor, console, and preview controls', () => {
    renderActionRow();

    expect(
      screen.getByRole('button', { name: 'learn.editor-tabs.instructions' })
    ).toHaveAttribute('aria-expanded', 'true');
    expect(
      screen.getByRole('button', { name: /index.html/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /styles.css/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'learn.editor-tabs.console' })
    ).toHaveAttribute('aria-expanded', 'false');
    expect(
      screen.getByRole('button', { name: 'aria.hide-preview' })
    ).toHaveTextContent('aria.hide-previewlearn.editor-tabs.preview');
    expect(
      screen.getByRole('button', {
        name: 'aria.move-preview-to-new-window'
      })
    ).toHaveAttribute('aria-expanded', 'false');
  });

  it('uses terminal labels for terminal challenges', () => {
    renderActionRow({ usesTerminal: true });

    expect(
      screen.getByRole('button', { name: 'aria.hide-terminal' })
    ).toHaveTextContent('aria.hide-terminallearn.editor-tabs.terminal');
    expect(
      screen.getByRole('button', {
        name: 'aria.move-terminal-to-new-window'
      })
    ).toBeInTheDocument();
  });

  it('does not render preview controls when preview is disabled', () => {
    renderActionRow({ hasPreview: false });

    expect(
      screen.queryByRole('button', { name: 'aria.hide-preview' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', {
        name: 'aria.move-preview-to-new-window'
      })
    ).not.toBeInTheDocument();
  });

  it('renders notes control only when notes are available', async () => {
    const user = userEvent.setup();
    const togglePane = vi.fn();
    renderActionRow({ hasNotes: true, showNotes: false, togglePane });

    const notesButton = screen.getByRole('button', {
      name: 'learn.editor-tabs.notes'
    });

    expect(notesButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(notesButton);

    expect(togglePane).toHaveBeenCalledWith('showNotes');
  });

  it('calls togglePane with the clicked pane name', async () => {
    const user = userEvent.setup();
    const togglePane = vi.fn();
    renderActionRow({ togglePane });

    await user.click(
      screen.getByRole('button', { name: 'learn.editor-tabs.instructions' })
    );
    await user.click(
      screen.getByRole('button', { name: 'learn.editor-tabs.console' })
    );
    await user.click(screen.getByRole('button', { name: 'aria.hide-preview' }));
    await user.click(
      screen.getByRole('button', {
        name: 'aria.move-preview-to-new-window'
      })
    );

    expect(togglePane).toHaveBeenNthCalledWith(1, 'showInstructions');
    expect(togglePane).toHaveBeenNthCalledWith(2, 'showConsole');
    expect(togglePane).toHaveBeenNthCalledWith(3, 'showPreviewPane');
    expect(togglePane).toHaveBeenNthCalledWith(4, 'showPreviewPortal');
  });

  it('renders daily coding challenge language controls', async () => {
    const user = userEvent.setup();
    const setDailyCodingChallengeLanguage = vi.fn();
    renderActionRow({
      isDailyCodingChallenge: true,
      setDailyCodingChallengeLanguage
    });

    expect(screen.getByRole('button', { name: 'JavaScript' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Python' })).toBeEnabled();

    await user.click(screen.getByRole('button', { name: 'Python' }));

    expect(setDailyCodingChallengeLanguage).toHaveBeenCalledWith('python');
    expect(store.get('dailyCodingChallengeLanguage')).toBe('python');
  });

  it('renders content outline and interactive editor controls', async () => {
    const user = userEvent.setup();
    const onToggleContentOutline = vi.fn();
    const toggleInteractiveEditor = vi.fn();
    const reduxStore = createStore();

    render(
      <ActionRow
        hasContentOutline={true}
        hasInteractiveEditor={true}
        onToggleContentOutline={onToggleContentOutline}
        showContentOutline={false}
        showInteractiveEditor={true}
        toggleInteractiveEditor={toggleInteractiveEditor}
      />,
      reduxStore
    );

    await user.click(screen.getByRole('button', { name: 'buttons.outline' }));
    await user.click(
      screen.getByRole('button', {
        name: 'learn.editor-tabs.interactive-editor'
      })
    );

    expect(onToggleContentOutline).toHaveBeenCalledTimes(1);
    expect(toggleInteractiveEditor).toHaveBeenCalledTimes(1);
  });
});

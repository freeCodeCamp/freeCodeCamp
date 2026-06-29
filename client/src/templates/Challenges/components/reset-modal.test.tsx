import React from 'react';
import userEvent from '@testing-library/user-event';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import { createFiles, openModal, updateFile } from '../redux/actions';
import { render, screen } from '../../../../utils/test-utils';
import callGA from '../../../analytics/call-ga';
import ResetModal from './reset-modal';

vi.mock('../../../analytics/call-ga', () => ({
  default: vi.fn()
}));
vi.mock('../../../utils/get-words');

const seedContents = '<h1>Seed content</h1>';
const changedContents = '<h1>Changed content</h1>';
const challengeFile = {
  contents: seedContents,
  editableRegionBoundaries: [],
  ext: 'html',
  fileKey: 'indexhtml',
  name: 'index'
};

interface ResetModalTestState {
  challenge: {
    challengeFiles: Array<{ contents: string }>;
    isResetting: boolean;
    modal: { reset: boolean };
  };
}

const setup = (props: { saveSubmissionToDB?: boolean } = {}) => {
  const reduxStore = createStore();
  reduxStore.dispatch(createFiles([challengeFile]));
  reduxStore.dispatch(
    updateFile({
      fileKey: challengeFile.fileKey,
      contents: changedContents,
      editableRegionBoundaries: []
    })
  );
  reduxStore.dispatch(openModal('reset'));

  render(<ResetModal challengeTitle='Step 3' {...props} />, reduxStore);

  return reduxStore;
};

describe('<ResetModal />', () => {
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

  it('renders the lesson reset content and closes from the close button', async () => {
    const user = userEvent.setup();
    const reduxStore = setup();

    const dialog = screen.getByRole('dialog', { name: 'learn.reset' });
    expect(dialog).toHaveTextContent('learn.reset-warn');
    expect(dialog).toHaveTextContent('learn.reset-warn-2');
    expect(
      screen.getByRole('button', { name: 'buttons.reset-lesson' })
    ).toBeInTheDocument();
    expect(callGA).toHaveBeenCalledWith({
      event: 'pageview',
      pagePath: '/reset-modal'
    });

    await user.click(screen.getByText('Close'));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(reduxStore.getState().challenge.modal.reset).toBe(false);
  });

  it('resets challenge state and closes from the confirm button', async () => {
    const user = userEvent.setup();
    const reduxStore = setup();

    await user.click(
      screen.getByRole('button', { name: 'buttons.reset-lesson' })
    );

    const state = reduxStore.getState() as ResetModalTestState;
    expect(state.challenge.challengeFiles[0].contents).toBe(seedContents);
    expect(state.challenge.isResetting).toBe(true);
    expect(state.challenge.modal.reset).toBe(false);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders the saved-code revert content for DB-backed projects', () => {
    setup({ saveSubmissionToDB: true });

    const dialog = screen.getByRole('dialog', { name: 'learn.reset' });
    expect(dialog).toHaveTextContent('learn.revert-warn');
    expect(dialog).toHaveTextContent('learn.reset-warn-2');
    expect(screen.queryByText('learn.reset-warn')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.revert-to-saved-code' })
    ).toBeInTheDocument();
  });
});

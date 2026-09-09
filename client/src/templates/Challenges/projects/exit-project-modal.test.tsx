import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import { openModal } from '../redux/actions';
import ExitProjectModal from './exit-project-modal';

vi.mock('../../../utils/get-words');

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

function setupExitProjectModal() {
  const store = createStore();
  const onExit = vi.fn();

  store.dispatch(openModal('exitProject'));

  render(
    <Provider store={store}>
      <ExitProjectModal onExit={onExit} />
    </Provider>
  );

  return { onExit, store };
}

describe('<ExitProjectModal />', () => {
  it('renders the unsaved changes warning and actions', () => {
    setupExitProjectModal();

    expect(
      screen.getByRole('dialog', {
        name: 'learn.unsaved-changes-modal-header'
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText('learn.unsaved-changes-modal-body')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'learn.unsaved-changes-modal-no' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'learn.unsaved-changes-modal-yes' })
    ).toBeInTheDocument();
  });

  it('stays on the page when the user cancels', async () => {
    expect.hasAssertions();
    const user = userEvent.setup();
    const { onExit, store } = setupExitProjectModal();

    await user.click(
      screen.getByRole('button', { name: 'learn.unsaved-changes-modal-no' })
    );

    expect(onExit).not.toHaveBeenCalled();
    expect(store.getState().challenge.modal.exitProject).toBe(false);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('calls onExit when the user confirms leaving', async () => {
    const user = userEvent.setup();
    const { onExit } = setupExitProjectModal();

    await user.click(
      screen.getByRole('button', { name: 'learn.unsaved-changes-modal-yes' })
    );

    expect(onExit).toHaveBeenCalledTimes(1);
  });
});

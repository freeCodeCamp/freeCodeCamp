import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { createStore } from '../../../../redux/create-store';
import { openModal } from '../../redux/actions';
import ExitExamModal from './exit-exam-modal';

vi.mock('../../../../utils/get-words');

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

function setupExitExamModal() {
  const store = createStore();
  const exitExam = vi.fn();

  store.dispatch(openModal('exitExam'));

  render(
    <Provider store={store}>
      <ExitExamModal exitExam={exitExam} />
    </Provider>
  );

  return { exitExam, store };
}

function getExitExamDialog() {
  return screen.getByRole('dialog', { name: 'learn.exam.exit-header' });
}

describe('<ExitExamModal />', () => {
  it('renders the exit exam warning and actions', () => {
    setupExitExamModal();

    expect(getExitExamDialog()).toBeInTheDocument();
    expect(screen.getByText('learn.exam.exit')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'learn.exam.exit-no' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'learn.exam.exit-yes' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('closes when the user cancels', async () => {
    expect.hasAssertions();
    const user = userEvent.setup();
    const { store } = setupExitExamModal();

    await user.click(
      screen.getByRole('button', { name: 'learn.exam.exit-no' })
    );

    expect(store.getState().challenge.modal.exitExam).toBe(false);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes from the header close button', async () => {
    expect.hasAssertions();
    const user = userEvent.setup();
    const { store } = setupExitExamModal();

    await user.click(screen.getByRole('button', { name: 'Close' }));

    expect(store.getState().challenge.modal.exitExam).toBe(false);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('calls exitExam when the user confirms', async () => {
    const user = userEvent.setup();
    const { exitExam } = setupExitExamModal();

    await user.click(
      screen.getByRole('button', { name: 'learn.exam.exit-yes' })
    );

    expect(exitExam).toHaveBeenCalledTimes(1);
  });
});

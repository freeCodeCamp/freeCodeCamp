import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createStore } from '../../../../redux/create-store';
import { closeModal } from '../../redux/actions';
import FinishExamModal from './finish-exam-modal';

vi.mock('../../../../utils/get-words');

const modalName = 'learn.exam.finish-header';

function createOpenModalStore() {
  return createStore({
    challenge: {
      modal: {
        finishExam: true
      }
    }
  });
}

function renderFinishExamModal({
  finishExam = vi.fn(),
  store = createOpenModalStore()
} = {}) {
  render(
    <Provider store={store}>
      <FinishExamModal finishExam={finishExam} />
    </Provider>
  );

  return { finishExam, store };
}

describe('<FinishExamModal />', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'ResizeObserver',
      class ResizeObserver {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
      }
    );
  });

  it('renders the finish exam modal content', () => {
    renderFinishExamModal();

    expect(screen.getByRole('dialog', { name: modalName })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Close' })).toBeVisible();
    expect(screen.getByText('learn.exam.finish')).toBeVisible();
    expect(
      screen.getByRole('button', { name: 'learn.exam.finish-yes' })
    ).toBeVisible();
    expect(
      screen.getByRole('button', { name: 'learn.exam.finish-no' })
    ).toBeVisible();
  });

  it('closes when the user keeps working on the exam', async () => {
    const user = userEvent.setup();
    renderFinishExamModal();

    await user.click(
      screen.getByRole('button', { name: 'learn.exam.finish-no' })
    );

    await waitFor(() => {
      expect(
        screen.queryByRole('dialog', { name: modalName })
      ).not.toBeInTheDocument();
    });
  });

  it('calls finishExam and closes when the user finishes the exam', async () => {
    const user = userEvent.setup();
    const store = createOpenModalStore();
    const finishExam = vi.fn(() => {
      store.dispatch(closeModal('finishExam'));
    });
    renderFinishExamModal({ finishExam, store });

    await user.click(
      screen.getByRole('button', { name: 'learn.exam.finish-yes' })
    );

    expect(finishExam).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(
        screen.queryByRole('dialog', { name: modalName })
      ).not.toBeInTheDocument();
    });
  });

  it('closes when the user clicks the header close button', async () => {
    const user = userEvent.setup();
    renderFinishExamModal();

    await user.click(screen.getByRole('button', { name: 'Close' }));

    await waitFor(() => {
      expect(
        screen.queryByRole('dialog', { name: modalName })
      ).not.toBeInTheDocument();
    });
  });
});

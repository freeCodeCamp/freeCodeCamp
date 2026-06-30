import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import { render } from '../../../../utils/test-utils';
import { openModal } from '../redux/actions';
import ExitProjectModal from './exit-project-modal';

vi.mock('../../../utils/get-words');

globalThis.ResizeObserver = class ResizeObserver {
  disconnect = vi.fn();
  observe = vi.fn();
  unobserve = vi.fn();
};

describe('<ExitProjectModal />', () => {
  it('renders the project exit warning', () => {
    const reduxStore = createStore();
    reduxStore.dispatch(openModal('exitProject'));

    render(<ExitProjectModal onExit={vi.fn()} />, reduxStore);

    expect(
      screen.getByText('learn.project.exit-modal-header')
    ).toBeInTheDocument();
    expect(screen.getByText('misc.navigation-warning')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'learn.project.exit-modal-no' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'learn.project.exit-modal-yes' })
    ).toBeInTheDocument();
  });

  it('closes without exiting the project', async () => {
    const user = userEvent.setup();
    const onExit = vi.fn();
    const reduxStore = createStore();
    reduxStore.dispatch(openModal('exitProject'));

    render(<ExitProjectModal onExit={onExit} />, reduxStore);

    await user.click(
      screen.getByRole('button', { name: 'learn.project.exit-modal-no' })
    );

    expect(onExit).not.toHaveBeenCalled();
    expect(
      screen.queryByText('learn.project.exit-modal-header')
    ).not.toBeInTheDocument();
  });

  it('confirms exiting the project', async () => {
    const user = userEvent.setup();
    const onExit = vi.fn();
    const reduxStore = createStore();
    reduxStore.dispatch(openModal('exitProject'));

    render(<ExitProjectModal onExit={onExit} />, reduxStore);

    await user.click(
      screen.getByRole('button', { name: 'learn.project.exit-modal-yes' })
    );

    expect(onExit).toHaveBeenCalledTimes(1);
  });
});

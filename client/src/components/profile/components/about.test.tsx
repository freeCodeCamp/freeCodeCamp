import { configureStore } from '@reduxjs/toolkit';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { User } from '../../../redux/prop-types';
import About from './about';

const baseUser = {
  name: '',
  location: '',
  picture: '',
  about: ''
} as User;

const renderAbout = () => {
  const store = configureStore({ reducer: () => ({}) });

  render(
    <Provider store={store}>
      <About user={baseUser} setIsEditing={vi.fn()} />
    </Provider>
  );
};

const getPictureInput = () => screen.getByLabelText('settings.labels.picture');

const getSaveButton = () =>
  screen.getByRole('button', { name: /buttons\.save/ });

class MockImage {
  onerror: (() => void) | null = null;
  onload: (() => void) | null = null;

  set src(value: string) {
    queueMicrotask(() => {
      if (value.endsWith('.png')) {
        this.onload?.();
      } else {
        this.onerror?.();
      }
    });
  }
}

describe('<About />', () => {
  beforeEach(() => {
    vi.stubGlobal('Image', MockImage);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('allows users to type in the picture field', async () => {
    const user = userEvent.setup();
    renderAbout();

    await user.type(getPictureInput(), 'twaha');

    expect(getPictureInput()).toHaveValue('twaha');
  });

  it('shows an error for a URL that does not load as an image', async () => {
    const user = userEvent.setup();
    renderAbout();

    await user.type(
      getPictureInput(),
      'https://cdn.freecodecamp.org/platform/universal/camper-image-placeholder'
    );

    await waitFor(() => {
      expect(screen.getByText('validation.url-not-image')).toBeInTheDocument();
    });
    expect(getSaveButton()).toHaveAttribute('aria-disabled', 'true');
  });

  it('enables save for a URL that loads as an image', async () => {
    const user = userEvent.setup();
    renderAbout();

    await user.type(
      getPictureInput(),
      'https://cdn.freecodecamp.org/platform/universal/camper-image-placeholder.png'
    );

    await waitFor(() => {
      expect(getSaveButton()).not.toHaveAttribute('aria-disabled', 'true');
    });
    expect(
      screen.queryByText('validation.url-not-image')
    ).not.toBeInTheDocument();
  });
});

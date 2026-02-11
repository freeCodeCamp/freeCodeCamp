import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { describe, vi, test, expect } from 'vitest';

import { createStore } from '../redux/create-store';
import AppMountNotifier from './app-mount-notifier';

vi.unmock('react-i18next');
vi.mock('../utils/get-words');

const store = createStore();

describe('AppMountNotifier', () => {
  test('should render its children', () => {
    render(
      <Provider store={store}>
        <AppMountNotifier>
          <p>App content</p>
        </AppMountNotifier>
      </Provider>
    );

    expect(screen.getByText('App content')).toBeInTheDocument();
  });
});

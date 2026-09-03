import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import Portfolio from './portfolio';

vi.mock('../../../utils/get-words');

const validPortfolioItem = {
  id: 'portfolio-project-1',
  title: 'My portfolio',
  url: 'https://my-portfolio.com',
  image: 'https://cdn.freecodecamp.org/universal/favicons/favicon-32x32.png',
  description: 'My description'
};

function renderPortfolio(
  props: Partial<React.ComponentProps<typeof Portfolio>> = {}
) {
  return render(
    <Provider store={createStore()}>
      <Portfolio portfolio={[]} autoAdd={true} {...props} />
    </Provider>
  );
}

function changeField(label: string, value: string) {
  fireEvent.change(screen.getByLabelText(label), {
    target: { value }
  });
}

function mockImageValidation() {
  vi.stubGlobal(
    'Image',
    class Image {
      onerror: (() => void) | null = null;
      onload: (() => void) | null = null;

      set src(value: string) {
        setTimeout(() => {
          if (value.endsWith('.png')) {
            this.onload?.();
          } else {
            this.onerror?.();
          }
        }, 0);
      }
    }
  );
}

describe('<Portfolio />', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('validates the project title', () => {
    renderPortfolio();

    changeField('settings.labels.title', 'T');

    expect(screen.getByText('validation.title-short')).toBeInTheDocument();

    changeField('settings.labels.title', 'a'.repeat(145));

    expect(screen.getByText('validation.title-long')).toBeInTheDocument();

    changeField('settings.labels.title', 'My portfolio');

    expect(screen.queryByText('validation.title-long')).not.toBeInTheDocument();
    expect(
      screen.queryByText('validation.title-short')
    ).not.toBeInTheDocument();
  });

  it('validates the project URL', () => {
    renderPortfolio();

    changeField('settings.labels.url', 'T');

    expect(screen.getByText('validation.use-valid-url')).toBeInTheDocument();

    changeField('settings.labels.url', 'https://my-portfolio.com');

    expect(
      screen.queryByText('validation.use-valid-url')
    ).not.toBeInTheDocument();
  });

  it('validates the image URL', async () => {
    mockImageValidation();
    renderPortfolio();

    changeField('settings.labels.image', 'T');

    expect(screen.getByText('validation.use-valid-url')).toBeInTheDocument();

    changeField(
      'settings.labels.image',
      'https://cdn.freecodecamp.org/universal/favicons/favicon-32x32.png'
    );

    await waitFor(() =>
      expect(
        screen.queryByText('validation.use-valid-url')
      ).not.toBeInTheDocument()
    );

    changeField(
      'settings.labels.image',
      'https://cdn.freecodecamp.org/universal/favicons/favicon-32x32.pn'
    );

    expect(
      await screen.findByText('validation.url-not-image')
    ).toBeInTheDocument();
  });

  it('validates the project description', () => {
    renderPortfolio();

    changeField('settings.labels.description', 'a'.repeat(289));

    expect(screen.getByText('validation.max-characters')).toBeInTheDocument();

    changeField('settings.labels.description', 'My description');

    expect(
      screen.queryByText('validation.max-characters')
    ).not.toBeInTheDocument();
  });

  it('disables save when an existing portfolio item is pristine', () => {
    renderPortfolio({
      autoAdd: false,
      portfolio: [validPortfolioItem]
    });

    expect(
      screen.getByRole('button', { name: 'buttons.save-portfolio' })
    ).toHaveAttribute('aria-disabled', 'true');
  });
});

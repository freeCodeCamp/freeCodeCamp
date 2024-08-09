import React from 'react';
import { Provider } from 'react-redux';
import * as Gatsby from 'gatsby';
import { render as rtlRender } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import { createStore } from '../../redux/create-store';
import i18n from '../../../i18n/config';

import mockChallengeNodes from '../../__mocks__/challenge-nodes';
import IndexPage from '../../pages';

jest.unmock('react-i18next');

jest.mock('../../analytics');

jest
  .spyOn(Gatsby, `useStaticQuery`)
  .mockImplementation(() => mockUseStaticQuery);
const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: 'freeCodeCamp',
      siteUrl: 'freeCodeCamp.org'
    }
  }
};

function render(ui: JSX.Element) {
  return rtlRender(
    <Provider store={createStore()}>
      <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
    </Provider>
  );
}

describe('<Landing />', () => {
  it('renders when visiting index page and logged out', () => {
    const { container } = render(<IndexPage {...loggedOutProps} />);
    expect(container).toMatchSnapshot();
  });
});

const loggedOutProps = {
  data: { allChallengeNode: { nodes: mockChallengeNodes } },
  fetchState: {
    complete: true,
    error: null,
    errored: false,
    pending: false
  },
  isSignedIn: false,
  user: {}
};

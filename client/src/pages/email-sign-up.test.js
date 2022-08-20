import { navigate } from 'gatsby';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import EmailSignUp from './email-sign-up';

const middlewares = [];
const mockStore = configureStore(middlewares);

jest.mock('../analytics');

jest.mock('gatsby', () => ({
  navigate: jest.fn()
}));

describe('<EmailSignUp />', () => {
  let component;
  let tree;

  describe('Non-Authenticated user "not accepted terms and condition"', () => {
    beforeEach(() => {
      const initialState = {
        app: {
          appUsername: '',
          user: {},
          userFetchState: {
            pending: false,
            complete: true,
            errored: false,
            error: null
          }
        }
      };

      const store = mockStore(initialState);
      const container = renderer.create(
        <Provider store={store}>
          <EmailSignUp />
        </Provider>
      );

      component = container.root;
      tree = container.toJSON();
    });

    it('it should render correctly', () => {
      expect(tree).toMatchSnapshot();
    });

    it('it should have a intro description section', () => {
      // eslint-disable-next-line testing-library/await-async-query
      const sectionIntroDescription = component.findByProps({
        className: 'intro-description'
      });

      expect(sectionIntroDescription).toBeTruthy();
    });
  });

  describe('Authenticated user "accepted terms and condition"', () => {
    beforeEach(() => {
      const initialState = {
        app: {
          appUsername: 'John Doe',
          user: {
            'John Doe': {
              acceptedPrivacyTerms: true,
              name: 'John Doe'
            }
          },
          userFetchState: {
            pending: false,
            complete: true,
            errored: false,
            error: null
          }
        }
      };
      const store = mockStore(initialState);
      store.dispatch = jest.fn();

      const container = renderer.create(
        <Provider store={store}>
          <EmailSignUp />
        </Provider>
      );

      component = container.root;
      tree = container.toJSON();
    });

    it('it should render correctly', () => {
      expect(tree).toMatchSnapshot();
    });

    it('it should redirect to learn url', () => {
      expect(navigate).toHaveBeenCalledWith('/learn');
    });
  });
});

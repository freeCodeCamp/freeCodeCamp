import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const noop = () => {};

const initialState = { displaySideNav: false, expandedState: {} };

const { Provider, Consumer } = createContext({
  ...initialState,
  toggleDisplaySideNav: () => {
    console.warn('no method from provider');
  },
  toggleExpandedState: () => {
    console.warn('no method from provider');
  }
});

const propTypes = {
  children: PropTypes.any
};

class NavigationContextProvider extends Component {
  constructor(...props) {
    super(...props);

    this.state = { ...initialState };

    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.toggleExpandedState = this.toggleExpandedState.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      const pathMap = window.location.pathname
        .slice(1)
        .split('/')
        .slice(0, -1)
        .reduce((map, current, i, pathArray) => {
          const path =
            i !== 0 ? map[pathArray[i - 1]] + `/${current}` : `/${current}`;
          return {
            ...map,
            [current]: path
          };
        }, {});

      return Object.keys(pathMap)
        .map(key => pathMap[key])
        .forEach(path => {
          this.toggleExpandedState(path);
        });
    }
    return null;
  }

  toggleExpandedState(path) {
    return this.setState(state => ({
      ...state,
      expandedState: {
        ...state.expandedState,
        [path]: !state.expandedState[path]
      }
    }));
  }

  toggleSideNav() {
    return this.setState(state => ({
      ...state,
      displaySideNav: !this.state.displaySideNav
    }));
  }

  render() {
    const { children } = this.props;
    const { displaySideNav, expandedState } = this.state;
    return (
      <Provider
        value={{
          displaySideNav,
          expandedState,
          toggleDisplaySideNav: noop,
          toggleExpandedState: this.toggleExpandedState
        }}
        >
        {children}
      </Provider>
    );
  }
}

NavigationContextProvider.displayName = 'NavigationContextProvider';
NavigationContextProvider.propTypes = propTypes;

export const NavigationContext = Consumer;
export default NavigationContextProvider;

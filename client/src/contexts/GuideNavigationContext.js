import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const noop = () => {};
const warnNoMethod = () => {
  console.warn('no method from provider');
}

const initialState = { 
  displaySideNav: false, 
  expandedState: {},
  sidebarScroll: 0
};

const { Provider, Consumer } = createContext({
  ...initialState,
  toggleDisplaySideNav: warnNoMethod,
  toggleExpandedState: warnNoMethod,
  sidebarScroll: warnNoMethod
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
    this.saveSidebarScroll = this.saveSidebarScroll.bind(this)
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

  saveSidebarScroll() {
    const el = document.getElementById('side-nav')
    if (!el) { return noop; }
    return this.setState(state => ({
      ...state,
      sidebarScroll: el.scrollTop
    }))
  }

  render() {
    const { children } = this.props;
    const { displaySideNav, expandedState, sidebarScroll } = this.state;
    return (
      <Provider
        value={{
          displaySideNav,
          expandedState,
          sidebarScroll,
          toggleDisplaySideNav: noop,
          toggleExpandedState: this.toggleExpandedState,
          saveSidebarScroll: this.saveSidebarScroll
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

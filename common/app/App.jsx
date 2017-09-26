import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ns from './ns.json';
import {
  appMounted,
  fetchUser,
  updateAppLang,

  userSelector
} from './redux';

import Nav from './Nav';
import Toasts from './Toasts';
import NotFound from './NotFound';
import { paramsSelector } from './Router/redux';
import { mainRouteSelector } from './routes/redux';
import Challenges from './routes/Challenges';
import Settings from './routes/Settings';

const mapDispatchToProps = {
  appMounted,
  fetchUser,
  updateAppLang
};

const mapStateToProps = state => {
  const { username } = userSelector(state);
  const route = mainRouteSelector(state);
  const params = paramsSelector(state);
  return {
    toast: state.app.toast,
    isSignedIn: !!username,
    route,
    params
  };
};

const propTypes = {
  appMounted: PropTypes.func.isRequired,
  children: PropTypes.node,
  fetchUser: PropTypes.func,
  isSignedIn: PropTypes.bool,
  params: PropTypes.shape({
    lang: PropTypes.string
  }),
  route: PropTypes.string,
  toast: PropTypes.object,
  updateAppLang: PropTypes.func.isRequired
};

const routes = {
  challenges: Challenges,
  settings: Settings
};

// export plain class for testing
export class FreeCodeCamp extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.params.lang !== nextProps.params.lang) {
      this.props.updateAppLang(nextProps.params.lang);
    }
  }

  componentDidMount() {
    this.props.appMounted();
    if (!this.props.isSignedIn) {
      this.props.fetchUser();
    }
  }

  render() {
    const {
      route
    } = this.props;
    const Child = routes[route] || NotFound;
    // we render nav after the content
    // to allow the panes to update
    // redux store, which will update the bin
    // buttons in the nav
    return (
      <div className={ `${ns}-container` }>
        <Child />
        <Nav />
        <Toasts />
      </div>
    );
  }
}

FreeCodeCamp.displayName = 'freeCodeCamp';
FreeCodeCamp.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FreeCodeCamp);

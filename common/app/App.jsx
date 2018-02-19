import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ns from './ns.json';
import {
  appMounted,
  fetchUser,

  isSignedInSelector
} from './redux';

import Flash from './Flash';
import Nav from './Nav';
import Toasts from './Toasts';
import NotFound from './NotFound';
import { mainRouteSelector } from './routes/redux';
import Challenges from './routes/Challenges';
import Profile from './routes/Profile';
import Settings from './routes/Settings';

const mapDispatchToProps = {
  appMounted,
  fetchUser
};

const mapStateToProps = state => {
  const isSignedIn = isSignedInSelector(state);
  const route = mainRouteSelector(state);
  return {
    toast: state.app.toast,
    isSignedIn,
    route
  };
};

const propTypes = {
  appMounted: PropTypes.func.isRequired,
  children: PropTypes.node,
  fetchUser: PropTypes.func,
  isSignedIn: PropTypes.bool,
  route: PropTypes.string,
  toast: PropTypes.object
};

const routes = {
  challenges: Challenges,
  profile: Profile,
  settings: Settings
};

// export plain class for testing
export class FreeCodeCamp extends React.Component {
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
    return (
      <div className={ `${ns}-container` }>
        <Flash />
        <Nav />
        <Child />
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

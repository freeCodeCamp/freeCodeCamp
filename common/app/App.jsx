import React, { PropTypes } from 'react';
import { Button, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import MapDrawer from './components/Map-Drawer.jsx';
import {
  fetchUser,
  initWindowHeight,
  updateNavHeight,
  toggleMapDrawer,
  toggleMainChat,
  updateAppLang,
  trackEvent,
  loadCurrentChallenge
} from './redux/actions';

import { submitChallenge } from './routes/challenges/redux/actions';

import Nav from './components/Nav';
import Toasts from './toasts/Toasts.jsx';
import { userSelector } from './redux/selectors';

const mapDispatchToProps = {
  initWindowHeight,
  updateNavHeight,
  fetchUser,
  submitChallenge,
  toggleMapDrawer,
  toggleMainChat,
  updateAppLang,
  trackEvent,
  loadCurrentChallenge
};

const mapStateToProps = createSelector(
  userSelector,
  state => state.app.isSignInAttempted,
  state => state.app.toast,
  state => state.app.isMapDrawerOpen,
  state => state.app.isMapAlreadyLoaded,
  state => state.challengesApp.toast,
  (
    { user: { username, points, picture } },
    isSignInAttempted,
    toast,
    isMapDrawerOpen,
    isMapAlreadyLoaded,
  ) => ({
    username,
    points,
    picture,
    toast,
    showLoading: !isSignInAttempted,
    isMapDrawerOpen,
    isMapAlreadyLoaded,
    isSignedIn: !!username
  })
);

const propTypes = {
  children: PropTypes.node,
  username: PropTypes.string,
  isSignedIn: PropTypes.bool,
  points: PropTypes.number,
  picture: PropTypes.string,
  toast: PropTypes.object,
  updateNavHeight: PropTypes.func,
  initWindowHeight: PropTypes.func,
  submitChallenge: PropTypes.func,
  isMapDrawerOpen: PropTypes.bool,
  isMapAlreadyLoaded: PropTypes.bool,
  toggleMapDrawer: PropTypes.func,
  toggleMainChat: PropTypes.func,
  fetchUser: PropTypes.func,
  showLoading: PropTypes.bool,
  params: PropTypes.object,
  updateAppLang: PropTypes.func.isRequired,
  trackEvent: PropTypes.func.isRequired,
  loadCurrentChallenge: PropTypes.func.isRequired
};
const contextTypes = { router: PropTypes.object };

// export plain class for testing
export class FreeCodeCamp extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.params.lang !== nextProps.params.lang) {
      this.props.updateAppLang(nextProps.params.lang);
    }
  }

  componentDidMount() {
    this.props.initWindowHeight();
    if (!this.props.isSignedIn) {
      this.props.fetchUser();
    }
  }

  renderChallengeComplete() {
    const { submitChallenge } = this.props;
    return (
      <Button
        block={ true }
        bsSize='small'
        bsStyle='primary'
        className='animated fadeIn'
        onClick={ submitChallenge }
        >
        Submit and go to my next challenge
      </Button>
    );
  }

  render() {
    const { router } = this.context;
    const {
      username,
      points,
      picture,
      updateNavHeight,
      isMapDrawerOpen,
      isMapAlreadyLoaded,
      toggleMapDrawer,
      toggleMainChat,
      showLoading,
      params: { lang },
      trackEvent,
      loadCurrentChallenge
    } = this.props;
    const navProps = {
      isOnMap: router.isActive(`/${lang}/map`),
      username,
      points,
      picture,
      updateNavHeight,
      toggleMapDrawer,
      toggleMainChat,
      showLoading,
      trackEvent,
      loadCurrentChallenge
    };

    return (
      <div>
        <Nav { ...navProps }/>
        <Row>
          { this.props.children }
        </Row>
        <MapDrawer
          isAlreadyLoaded={ isMapAlreadyLoaded }
          isOpen={ isMapDrawerOpen }
          toggleMapDrawer={ toggleMapDrawer }
        />
        <Toasts />
      </div>
    );
  }
}

FreeCodeCamp.displayName = 'FreeCodeCamp';
FreeCodeCamp.contextTypes = contextTypes;
FreeCodeCamp.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FreeCodeCamp);

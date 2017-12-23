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

const bindableActions = {
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
  state => state.app.shouldShowSignIn,
  state => state.app.toast,
  state => state.app.isMapDrawerOpen,
  state => state.app.isMapAlreadyLoaded,
  state => state.challengesApp.toast,
  (
    { user: { username, points, picture } },
    shouldShowSignIn,
    toast,
    isMapDrawerOpen,
    isMapAlreadyLoaded,
  ) => ({
    username,
    points,
    picture,
    toast,
    shouldShowSignIn,
    isMapDrawerOpen,
    isMapAlreadyLoaded,
    isSignedIn: !!username
  })
);

// export plain class for testing
export class FreeCodeCamp extends React.Component {
  static displayName = 'FreeCodeCamp';
  static contextTypes = {
    router: PropTypes.object
  };
  static propTypes = {
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
    shouldShowSignIn: PropTypes.bool,
    params: PropTypes.object,
    updateAppLang: PropTypes.func.isRequired,
    trackEvent: PropTypes.func.isRequired,
    loadCurrentChallenge: PropTypes.func.isRequired
  };

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
      shouldShowSignIn,
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
      shouldShowSignIn,
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

export default connect(
  mapStateToProps,
  bindableActions
)(FreeCodeCamp);

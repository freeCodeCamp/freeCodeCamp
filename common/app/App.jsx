import React, { PropTypes } from 'react';
import { Button, Row } from 'react-bootstrap';
import { ToastMessage, ToastContainer } from 'react-toastr';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import MapDrawer from './components/Map-Drawer.jsx';
import {
  fetchUser,
  initWindowHeight,
  updateNavHeight,
  toggleMapDrawer,
  toggleMainChat
} from './redux/actions';

import { submitChallenge } from './routes/challenges/redux/actions';

import Nav from './components/Nav';
import { randomCompliment } from './utils/get-words';
import { userSelector } from './redux/selectors';

const toastMessageFactory = React.createFactory(ToastMessage.animation);

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
    showChallengeComplete
  ) => ({
    username,
    points,
    picture,
    toast,
    shouldShowSignIn,
    isMapDrawerOpen,
    isMapAlreadyLoaded,
    showChallengeComplete,
    isSignedIn: !!username
  })
);

const bindableActions = {
  initWindowHeight,
  updateNavHeight,
  fetchUser,
  submitChallenge,
  toggleMapDrawer,
  toggleMainChat
};

// export plain class for testing
export class FreeCodeCamp extends React.Component {
  static displayName = 'FreeCodeCamp';

  static propTypes = {
    children: PropTypes.node,
    username: PropTypes.string,
    isSignedIn: PropTypes.bool,
    points: PropTypes.number,
    picture: PropTypes.string,
    toast: PropTypes.object,
    updateNavHeight: PropTypes.func,
    initWindowHeight: PropTypes.func,
    showChallengeComplete: PropTypes.number,
    submitChallenge: PropTypes.func,
    isMapDrawerOpen: PropTypes.bool,
    isMapAlreadyLoaded: PropTypes.bool,
    toggleMapDrawer: PropTypes.func,
    toggleMainChat: PropTypes.func,
    fetchUser: PropTypes.func,
    shouldShowSignIn: PropTypes.bool
  };

  componentWillReceiveProps({
    toast: nextToast = {},
    showChallengeComplete: nextCC = 0
  }) {
    const {
      toast = {},
      showChallengeComplete
    } = this.props;
    if (toast.id !== nextToast.id) {
      this.refs.toaster[nextToast.type || 'success'](
        nextToast.message,
        nextToast.title,
        {
          closeButton: true,
          timeOut: 10000
        }
      );
    }

    if (nextCC !== showChallengeComplete) {
      this.refs.toaster.success(
        this.renderChallengeComplete(),
        randomCompliment(),
        {
          closeButton: true,
          timeOut: 0,
          extendedTimeOut: 0
        }
      );
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
    const {
      username,
      points,
      picture,
      updateNavHeight,
      isMapDrawerOpen,
      isMapAlreadyLoaded,
      toggleMapDrawer,
      toggleMainChat,
      shouldShowSignIn
    } = this.props;
    const navProps = {
      username,
      points,
      picture,
      updateNavHeight,
      toggleMapDrawer,
      toggleMainChat,
      shouldShowSignIn
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
        <ToastContainer
          className='toast-bottom-right'
          ref='toaster'
          toastMessageFactory={ toastMessageFactory }
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  bindableActions
)(FreeCodeCamp);

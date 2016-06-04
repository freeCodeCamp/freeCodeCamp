import React, { PropTypes } from 'react';
import { Button, Row } from 'react-bootstrap';
import { ToastMessage, ToastContainer } from 'react-toastr';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { contain } from 'redux-epic';
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

const toastMessageFactory = React.createFactory(ToastMessage.animation);

const mapStateToProps = createSelector(
  state => state.app.username,
  state => state.app.points,
  state => state.app.picture,
  state => state.app.toast,
  state => state.app.isMapDrawerOpen,
  state => state.app.isMapAlreadyLoaded,
  state => state.challengesApp.toast,
  (
    username,
    points,
    picture,
    toast,
    isMapDrawerOpen,
    isMapAlreadyLoaded,
    showChallengeComplete
  ) => ({
    username,
    points,
    picture,
    toast,
    isMapDrawerOpen,
    isMapAlreadyLoaded,
    showChallengeComplete
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

const fetchContainerOptions = {
  fetchAction: 'fetchUser',
  isPrimed({ username }) {
    return !!username;
  }
};

// export plain class for testing
export class FreeCodeCamp extends React.Component {
  static displayName = 'FreeCodeCamp';

  static propTypes = {
    children: PropTypes.node,
    username: PropTypes.string,
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
    toggleMainChat: PropTypes.func
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
      toggleMainChat
    } = this.props;
    const navProps = {
      username,
      points,
      picture,
      updateNavHeight,
      toggleMapDrawer,
      toggleMainChat
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
          toastMessageFactory={ toastMessageFactory } />
      </div>
    );
  }
}

const wrapComponent = compose(
  // connect Component to Redux Store
  connect(mapStateToProps, bindableActions),
  // handles prefetching data
  contain(fetchContainerOptions)
);

export default wrapComponent(FreeCodeCamp);

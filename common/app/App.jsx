import React, { PropTypes } from 'react';
import { Button, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  fetchUser,
  initWindowHeight,
  updateNavHeight,
  updateAppLang,
  trackEvent,
  loadCurrentChallenge,
  openDropdown,
  closeDropdown
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
  updateAppLang,
  trackEvent,
  loadCurrentChallenge,
  openDropdown,
  closeDropdown
};

const mapStateToProps = createSelector(
  userSelector,
  state => state.app.isNavDropdownOpen,
  state => state.app.isSignInAttempted,
  state => state.app.toast,
  state => state.challengesApp.toast,
  (
    { user: { username, points, picture } },
    isNavDropdownOpen,
    isSignInAttempted,
    toast,
  ) => ({
    username,
    points,
    picture,
    toast,
    isNavDropdownOpen,
    showLoading: !isSignInAttempted,
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
  fetchUser: PropTypes.func,
  showLoading: PropTypes.bool,
  params: PropTypes.object,
  updateAppLang: PropTypes.func.isRequired,
  trackEvent: PropTypes.func.isRequired,
  loadCurrentChallenge: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  isNavDropdownOpen: PropTypes.bool
};

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
    const {
      username,
      points,
      picture,
      updateNavHeight,
      trackEvent,
      loadCurrentChallenge,
      openDropdown,
      closeDropdown,
      isNavDropdownOpen
    } = this.props;
    const navProps = {
      username,
      points,
      picture,
      updateNavHeight,
      trackEvent,
      loadCurrentChallenge,
      openDropdown,
      closeDropdown,
      isNavDropdownOpen
    };

    return (
      <div>
        <Nav { ...navProps }/>
        <Row>
          { this.props.children }
        </Row>
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

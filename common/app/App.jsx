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
  closeDropdown: PropTypes.func.isRequired,
  fetchUser: PropTypes.func,
  initWindowHeight: PropTypes.func,
  isNavDropdownOpen: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  loadCurrentChallenge: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  params: PropTypes.object,
  picture: PropTypes.string,
  points: PropTypes.number,
  showLoading: PropTypes.bool,
  submitChallenge: PropTypes.func,
  toast: PropTypes.object,
  trackEvent: PropTypes.func.isRequired,
  updateAppLang: PropTypes.func.isRequired,
  updateNavHeight: PropTypes.func,
  username: PropTypes.string
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

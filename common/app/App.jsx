import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import ns from './ns.json';
import {
  fetchUser,
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
  closeDropdown,
  fetchUser,
  loadCurrentChallenge,
  openDropdown,
  submitChallenge,
  trackEvent,
  updateAppLang
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
      trackEvent,
      loadCurrentChallenge,
      openDropdown,
      closeDropdown,
      isNavDropdownOpen
    } = this.props;
    const navProps = {
      closeDropdown,
      isNavDropdownOpen,
      loadCurrentChallenge,
      openDropdown,
      picture,
      points,
      trackEvent,
      username
    };

    return (
      <div className={ `${ns}-container` }>
        <Nav { ...navProps }/>
        <div className={ `${ns}-content` }>
          { this.props.children }
        </div>
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

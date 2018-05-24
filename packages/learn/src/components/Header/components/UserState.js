import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { isSignedInSelector } from '../../../redux/app';
import Login from './Login';
import SignedIn from './SignedIn';

const mapStateToProps = createSelector(isSignedInSelector, isSignedIn => ({
  isSignedIn
}));

const propTypes = {
  email: PropTypes.string,
  isSignedIn: PropTypes.bool,
  name: PropTypes.string
};

class UserState extends PureComponent {
  render() {
    const { isSignedIn } = this.props;
    return isSignedIn ? <SignedIn /> : <Login />;
  }
}

UserState.displayName = 'UserState';
UserState.propTypes = propTypes;

export default connect(mapStateToProps)(UserState);

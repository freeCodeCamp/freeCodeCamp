import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Spinner from 'react-spinkit';

import {
  isSignedInSelector,
  userStateLoadingSelector
} from '../../../redux/app';
import Login from './Login';
import SignedIn from './SignedIn';

const mapStateToProps = createSelector(
  userStateLoadingSelector,
  isSignedInSelector,
  (showLoading, isSignedIn) => ({
    isSignedIn,
    showLoading
  })
);

const propTypes = {
  email: PropTypes.string,
  isSignedIn: PropTypes.bool,
  name: PropTypes.string,
  showLoading: PropTypes.bool
};

class UserState extends PureComponent {
  render() {
    const { isSignedIn, showLoading } = this.props;
    if (showLoading) {
      return (
        <Spinner
          className='user-state-spinner'
          color='white'
          fadeIn='none'
          height='40px'
          name='line-scale'
        />
      );
    }
    return isSignedIn ? <SignedIn /> : <Login />;
  }
}

UserState.displayName = 'UserState';
UserState.propTypes = propTypes;

export default connect(mapStateToProps)(UserState);

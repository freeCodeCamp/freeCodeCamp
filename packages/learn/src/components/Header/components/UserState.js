import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { auth } from '../../../auth';
import {
  fetchUserComplete,
  isSignedInSelector,
  userSelector,
  updateUserSignedIn
} from '../../../redux/app';
import Login from './Login';
import SignedIn from './SignedIn';

const mapStateToProps = createSelector(
  isSignedInSelector,
  userSelector,
  (isSignedIn, { name, email }) => ({ isSignedIn, name, email })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateUserSignedIn, fetchUserComplete }, dispatch);

const propTypes = {
  email: PropTypes.string,
  fetchUserComplete: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
  name: PropTypes.string,
  updateUserSignedIn: PropTypes.func.isRequired
};

class UserState extends PureComponent {
  componentDidMount() {
    const isAuth = auth.isAuthenticated();
    if (isAuth) {
      this.props.fetchUserComplete(auth.getUser());
    }
    this.props.updateUserSignedIn(isAuth);
  }

  componentDidUpdate(prevProps) {
    const isAuth = auth.isAuthenticated();
    if (prevProps.isSignedIn && !isAuth) {
      this.props.fetchUserComplete(auth.getUser());
      this.props.updateUserSignedIn(isAuth);
    }
  }

  render() {
    const { isSignedIn, name, email } = this.props;
    return isSignedIn && (name || email) ? (
      <SignedIn email={email} logout={auth.logout} name={name} />
    ) : (
      <Login login={auth.login} />
    );
  }
}

UserState.displayName = 'UserState';
UserState.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(UserState);

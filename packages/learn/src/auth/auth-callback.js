/*
  TODO(Bouncey): Placed in ./src/pages when we have auth
*/
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { auth } from '../auth';
import { updateUserSignedIn, fetchUserComplete } from '../redux/app';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateUserSignedIn, fetchUserComplete }, dispatch);

const propTypes = {
  fetchUserComplete: PropTypes.func.isRequired,
  updateUserSignedIn: PropTypes.func.isRequired
};

function AuthCallback({ updateUserSignedIn, fetchUserComplete }) {
  auth.handleAuthentication({ updateUserSignedIn, fetchUserComplete });
  return <h2>One moment whilst we finish signing you in</h2>;
}

AuthCallback.displayName = 'AuthCallback';
AuthCallback.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AuthCallback);

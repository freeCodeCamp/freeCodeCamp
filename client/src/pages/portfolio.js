import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import createRedirect from '../components/createRedirect';
import { apiLocation } from '../../config/env.json';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo
} from '../redux';

import Loader from '../components/helpers/Loader';

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading, user, isSignedIn) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hardGoTo,
      navigate: location => dispatch(hardGoTo(location))
    },
    dispatch
  );

const propTypes = {
  hardGoTo: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  showLoading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string
  })
};

function ProfilePage(props) {
  const {
    showLoading,
    isSignedIn,
    user: { username },
    navigate
  } = props;
  if (showLoading) {
    return <Loader fullScreen={true} />;
  }
  if (!showLoading && !isSignedIn) {
    return navigate(`${apiLocation}/signin`);
  }
  const RedirecUser = createRedirect('/' + username);
  return <RedirecUser />;
}

ProfilePage.displayName = 'profilePage';
ProfilePage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

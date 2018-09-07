import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { isSignedInSelector, userFetchStateSelector } from '../redux';
import Layout from '../components/Layout';
import { Spacer } from '../components/helpers';

const propTypes = {
  isSignedIn: PropTypes.bool,
  userFetchState: PropTypes.shape({
    pending: PropTypes.bool,
    comnplete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  username: PropTypes.string
};

const mapStateToProps = createSelector(
  isSignedInSelector,
  userFetchStateSelector,
  (isSignedIn, userFetchState) => ({ isSignedIn, userFetchState })
);

function ShowUser() {
  return (
    <Layout>
      <Spacer />
      <h1>ShowUser</h1>
    </Layout>
  );
}

ShowUser.displayName = 'ShowUser';
ShowUser.propTypes = propTypes;

export default connect(mapStateToProps)(ShowUser);

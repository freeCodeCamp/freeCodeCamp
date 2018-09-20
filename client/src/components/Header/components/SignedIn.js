import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { userSelector } from '../../../redux';

const mapStateToProps = createSelector(userSelector, ({ picture }) => ({
  picture
}));

function SignedIn({ picture }) {
  return (
    <Link to='/settings'>
      <img alt='' height='38px' src={picture} />
    </Link>
  );
}

SignedIn.displayName = 'SignedIn';
SignedIn.propTypes = {
  picture: PropTypes.string
};

export default connect(mapStateToProps)(SignedIn);

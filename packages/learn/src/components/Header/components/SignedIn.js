/* global HOME_PATH */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { userSelector } from '../../../redux/app';

const mapStateToProps = createSelector(userSelector, ({ picture }) => ({
  picture
}));

function SignedIn({ picture }) {
  return (
    <li className='user-settings'>
      <a href={HOME_PATH + '/settings'}>
        <img className='profile-pic' src={picture} />
      </a>
    </li>
  );
}

SignedIn.displayName = 'SignedIn';
SignedIn.propTypes = {
  picture: PropTypes.string
};

export default connect(mapStateToProps)(SignedIn);

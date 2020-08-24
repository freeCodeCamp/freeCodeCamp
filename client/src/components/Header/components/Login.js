import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from '@freecodecamp/react-bootstrap';

import { isSignedInSelector } from '../../../redux';
import { apiLocation } from '../../../../config/env.json';

import { gtagReportConversion } from '../../../analytics/gtag';

import './login.css';

const mapStateToProps = createSelector(
  isSignedInSelector,
  isSignedIn => ({
    isSignedIn
  })
);

function Login(props) {
  const { block, children, isSignedIn } = props;
  const href = isSignedIn ? '/learn' : `${apiLocation}/signin`;
  return (
    <Button
      bsStyle='default'
      className={(block ? 'btn-cta-big' : '') + ' signup-btn btn-cta'}
      href={href}
      onClick={() => gtagReportConversion()}
    >
      {children || 'Sign In'}
    </Button>
  );
}

Login.displayName = 'Login';
Login.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.any,
  isSignedIn: PropTypes.bool
};

export default connect(mapStateToProps)(Login);

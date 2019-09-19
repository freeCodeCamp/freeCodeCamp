import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { navigate as gatsbyNavigate } from 'gatsby';
import { Button } from '@freecodecamp/react-bootstrap';

import { hardGoTo, isSignedInSelector } from '../../../redux';
import { apiLocation } from '../../../../config/env.json';

import { gtagReportConversion } from '../../../analytics/gtag';

import './login.css';

const mapStateToProps = createSelector(
  isSignedInSelector,
  isSignedIn => ({
    isSignedIn
  })
);
const mapDispatchToProps = dispatch => ({
  navigate: location => dispatch(hardGoTo(location))
});

const createOnClick = (navigate, isSignedIn) => e => {
  e.preventDefault();
  gtagReportConversion();
  if (isSignedIn) {
    return gatsbyNavigate('/learn');
  }
  return navigate(`${apiLocation}/signin`);
};

function Login(props) {
  const { children, navigate, isSignedIn, ...restProps } = props;
  return (
    <Button
      href='/signin'
      onClick={createOnClick(navigate, isSignedIn)}
      {...restProps}
      bsStyle='default'
      className={(restProps.block ? 'btn-cta-big' : '') + ' signup-btn btn-cta'}
    >
      {children || 'Sign In'}
    </Button>
  );
}

Login.displayName = 'Login';
Login.propTypes = {
  children: PropTypes.any,
  isSignedIn: PropTypes.bool,
  navigate: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

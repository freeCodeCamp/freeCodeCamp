import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from '@freecodecamp/react-bootstrap';

import { hardGoTo, isSignedInSelector } from '../../../redux';
import { apiLocation } from '../../../../config/env.json';

import { gtagReportConversion } from '../../../analytics/gtag';

import './login.css';

const mapStateToProps = createSelector(
  isSignedInSelector,
  ({ isSingedIn }) => ({ isSingedIn })
);
const mapDispatchToProps = dispatch => ({
  navigate: location => dispatch(hardGoTo(location))
});

const createOnClick = (navigate, isSingedIn) => e => {
  e.preventDefault();
  gtagReportConversion();
  if (isSingedIn) {
    return navigate('/welcome');
  }
  return navigate(`${apiLocation}/signin`);
};

function Login(props) {
  const { children, navigate, isSingedIn, ...restProps } = props;
  return (
    <a href='/signin' onClick={createOnClick(navigate, isSingedIn)}>
      <Button
        {...restProps}
        bsStyle='default'
        className={
          (restProps.block ? 'btn-cta-big' : '') + ' signup-btn btn-cta'
        }
        >
        {children || 'Sign In'}
      </Button>
    </a>
  );
}

Login.displayName = 'Login';
Login.propTypes = {
  children: PropTypes.any,
  isSingedIn: PropTypes.bool,
  navigate: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

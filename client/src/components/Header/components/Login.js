import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@freecodecamp/react-bootstrap';

import { hardGoTo } from '../../../redux';
import { apiLocation } from '../../../../config/env.json';

import { gtagReportConversion } from '../../../analytics/gtag';

import './login.css';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  navigate: location => dispatch(hardGoTo(location))
});

const createOnClick = navigate => e => {
  e.preventDefault();
  gtagReportConversion();
  return navigate(`${apiLocation}/signin`);
};

function Login(props) {
  const { children, navigate, ...restProps } = props;
  return (
    <a href='/signin' onClick={createOnClick(navigate)}>
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
  navigate: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

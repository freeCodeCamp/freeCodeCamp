import React from 'react';
import PropTypes from 'prop-types';
import Login from '../../Header/components/Login';

const propTypes = {
  page: PropTypes.string
};

const BigCallToAction = ({ page }) => (
  <Login block={true} data-test-label={`${page}-big-cta`}>
    {page === 'landing'
      ? "Get started (it's free)"
      : "Sign in to save your progress (it's free)"}
  </Login>
);

BigCallToAction.displayName = 'BigCallToAction';
BigCallToAction.propTypes = propTypes;
export default BigCallToAction;

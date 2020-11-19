import React from 'react';
import PropTypes from 'prop-types';
import Login from '../../Header/components/Login';
import { Trans } from 'gatsby-plugin-react-i18next';

const propTypes = {
  page: PropTypes.string
};

const BigCallToAction = ({ page }) => (
  <Login block={true} data-test-label={`${page}-big-cta`}>
    {page === 'landing' ? (
      <Trans>buttons.logged-in-cta-btn</Trans>
    ) : (
      <Trans>buttons.logged-out-cta-btn</Trans>
    )}
  </Login>
);

BigCallToAction.displayName = 'BigCallToAction';
BigCallToAction.propTypes = propTypes;
export default BigCallToAction;

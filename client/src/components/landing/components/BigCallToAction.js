import React from 'react';
import PropTypes from 'prop-types';
import Login from '../../Header/components/Login';

const propTypes = {
  page: PropTypes.string
};

const BigCallToAction = ({ page }) => (
  <Login block={true} data-test-label={`${page}-big-cta`}>
    {page === 'landing'
      ? "Jetzt starten (100% kostenfrei)"
      : "Registriere Dich, um Deinen Fortschritt zu sichern (komplett kostenlos)"}
  </Login>
);

BigCallToAction.displayName = 'BigCallToAction';
BigCallToAction.propTypes = propTypes;
export default BigCallToAction;

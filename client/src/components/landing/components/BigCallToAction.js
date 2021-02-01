import React from 'react';
import PropTypes from 'prop-types';
import Login from '../../Header/components/Login';
import { useTranslation } from 'react-i18next';

const propTypes = {
  page: PropTypes.string
};

const BigCallToAction = ({ page }) => {
  const { t } = useTranslation();

  return (
    <Login block={true} data-test-label={`${page}-big-cta`}>
      {page === 'landing'
        ? t('buttons.logged-in-cta-btn')
        : t('buttons.logged-out-cta-btn')}
    </Login>
  );
};

BigCallToAction.displayName = 'BigCallToAction';
BigCallToAction.propTypes = propTypes;
export default BigCallToAction;

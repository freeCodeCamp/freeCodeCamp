import React from 'react';
import { useTranslation } from 'react-i18next';
import Login from '../../Header/components/login';

const BigCallToAction = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Login block={true} data-test-label='landing-big-cta'>
      {t('buttons.logged-in-cta-btn')}
    </Login>
  );
};

BigCallToAction.displayName = 'BigCallToAction';
export default BigCallToAction;

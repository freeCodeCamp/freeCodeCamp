import React from 'react';
import { useTranslation } from 'react-i18next';
import Login from '../../Header/components/login';

const BigCallToAction = ({ text }: { text?: string }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Login
      block={true}
      data-test-label='landing-big-cta'
      data-playwright-test-label='landing-big-cta'
    >
      {text ? text : t('buttons.logged-in-cta-btn')}
    </Login>
  );
};

BigCallToAction.displayName = 'BigCallToAction';
export default BigCallToAction;

import React from 'react';
import { useTranslation } from 'react-i18next';
import Login from '../../Header/components/login';

const BigCallToAction = ({
  text,
  testLabel
}: {
  text?: string;
  testLabel?: string;
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Login
      block={true}
      data-test-label={testLabel}
      data-playwright-test-label={testLabel}
    >
      {text ? text : t('buttons.logged-in-cta-btn')}
    </Login>
  );
};

BigCallToAction.displayName = 'BigCallToAction';
export default BigCallToAction;

import React from 'react';
import { useTranslation } from 'react-i18next';
import Login from '../../Header/components/Login';

interface propTypes {
  page: string;
}

const BigCallToAction = ({ page }: propTypes): JSX.Element => {
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
export default BigCallToAction;

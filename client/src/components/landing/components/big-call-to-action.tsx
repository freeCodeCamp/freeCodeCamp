import React from 'react';
import { useTranslation } from 'react-i18next';
import Login from '../../Header/components/Login';

interface BigCallToActionProps {
  pageName: string;
  id?: string;
}

const BigCallToAction = ({
  pageName,
  id
}: BigCallToActionProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Login block={true} data-test-label={`${pageName}-big-cta`} id={id}>
      {pageName === 'landing'
        ? t('buttons.logged-in-cta-btn')
        : t('buttons.logged-out-cta-btn')}
    </Login>
  );
};

BigCallToAction.displayName = 'BigCallToAction';
export default BigCallToAction;

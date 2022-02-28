import React from 'react';
import { useTranslation } from 'react-i18next';
import FreeCodeCampLogo from '../../../assets/icons/FreeCodeCamp-logo';

const NavLogo = (): JSX.Element => {
  const { t } = useTranslation();
  return <FreeCodeCampLogo aria-label={t('aria.fcc-curriculum')} />;
};

NavLogo.displayName = 'NavLogo';
export default NavLogo;

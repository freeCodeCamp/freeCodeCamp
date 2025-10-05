import React from 'react';
import { useTranslation } from 'react-i18next';
import FreeCodeCampLogo from '../../../assets/icons/freecodecamp-logo';
import MicrosoftLogo from '../../../assets/icons/microsoft-logo';

import './exam-nav.css';

const ExamNav = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <nav
      aria-label={t('aria.primary-nav')}
      className='exam-nav'
      id='exam-nav'
      data-playwright-test-label='header-exam-nav'
    >
      <FreeCodeCampLogo aria-hidden='true' />
      <MicrosoftLogo
        aria-hidden='true'
        data-playwright-test-label='header-exam-nav-microsoft-logo'
      />
    </nav>
  );
};

ExamNav.displayName = 'ExamNav';
export default ExamNav;

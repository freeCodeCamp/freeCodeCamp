import React from 'react';
import { useTranslation } from 'react-i18next';

import { radioLocation } from '../../../../../config/env.json';

const ExposedNav = (): JSX.Element => {
  const { t } = useTranslation();
  // return <FreeCodeCampLogo aria-label={t('aria.fcc-curriculum')} />;
  return (
    <nav className='exposed-nav'>
      <ul className='exposed-nav-list'>
        <li key='learn'>
          <Link className='exposed-nav-elements' to='/learn'>
            {t('buttons.curriculum')}
          </Link>
        </li>
        <li key='forum'>
          <Link
            className='exposed-nav-elements'
            external={true}
            sameTab={false}
            to={t('links:nav.forum')}
          >
            <span>{t('buttons.forum')}</span>
          </Link>
        </li>
        <li key='news'>
          <Link
            className='exposed-nav-elements'
            external={true}
            sameTab={false}
            to={t('links:nav.news')}
          >
            <span>{t('buttons.news')}</span>
          </Link>
        </li>
        <li key='radio'>
          <Link
            className='exposed-nav-elements'
            external={true}
            sameTab={false}
            to={radioLocation}
          >
            <span>{t('buttons.radio')}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ExposedNav;

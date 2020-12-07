/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { useTranslation } from 'react-i18next';

const { langDisplayNames, availableLangs } = require('../../../i18n/allLangs');
const { homeLocation } = require('../../../config/env');

const locales = availableLangs.client;

const LanguageMenu = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = e => {
    // see if we can get the path from gatsby or something?
    const path = window.location.pathname;

    if (e.target.value === `english`) {
      // look into using another method here <Router>?
      window.location.replace(`${homeLocation}${path}`);
    } else if (e.target.value === 'espanol') {
      window.location.replace(`${homeLocation}/espanol${path}`);
    }
  };

  return (
    <div className='language-menu'>
      <span>{t('footer.language')}</span>
      <select onChange={e => changeLanguage(e)} value={currentLanguage}>
        {locales.map((lang, i) => {
          return (
            <option key={i} value={lang}>
              {langDisplayNames[lang]}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LanguageMenu;

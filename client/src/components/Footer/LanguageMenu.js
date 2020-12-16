/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { useTranslation } from 'react-i18next';

const {
  availableLangs,
  i18nextCodes,
  langDisplayNames
} = require('../../../i18n/allLangs');
const { homeLocation } = require('../../../config/env');

const locales = availableLangs.client;

const LanguageMenu = () => {
  const { i18n, t } = useTranslation();
  const i18nLanguage = i18n.language;

  const currentLanguage = Object.keys(i18nextCodes).find(
    key => i18nextCodes[key] === i18nLanguage
  );

  const changeLanguage = e => {
    const path = window.location.pathname;

    if (e.target.value === 'espanol') {
      window.location.replace(`${homeLocation}/espanol${path}`);
    } else {
      window.location.replace(`${homeLocation}${path}`);
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

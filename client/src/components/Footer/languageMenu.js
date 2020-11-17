/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { useTranslation } from 'react-i18next';

const { langDisplayNames, availableLangs } = require('../../../i18n/allLangs');
const config = require('../../../config/env');

const locales = availableLangs.client;

const LanguageMenu = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = e => {
    const path = window.location.pathname;
    if (config.environment === 'development') {
      // note that the language will change back to english on a hard refresh
      // or page load - set the locale in .env to make it stick
      i18n.changeLanguage(e.target.value);
    } else if (e.target.value === `english`) {
      window.location.replace(`https://freecodecamp.org${path}`);
    } else if (e.target.value === 'espanol') {
      window.location.replace(`https://freecodecamp.org/espanol${path}`);
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

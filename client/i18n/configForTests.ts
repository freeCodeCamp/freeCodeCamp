import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    defaultNS: 'translations',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    lng: 'en',
    ns: ['translations'],
    resources: { en: { translations: {} } }
  })
  .catch((error: Error) => {
    throw Error(error.message);
  });

export default i18n;

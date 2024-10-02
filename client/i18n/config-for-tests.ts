// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define the Custom Language Detector
const CustomLanguageDetector = {
  type: 'languageDetector',
  
  async: false, // Set to true if your detection logic is asynchronous
  
  detect: function () {
    // Priority: Cookie > Local Storage > Browser Settings > Default ('en')
    
    // 1. Check for a language cookie
    const cookieLang = getCookie('language');
    if (cookieLang) {
      return cookieLang;
    }

    // 2. Check localStorage
    const storageLang = localStorage.getItem('language');
    if (storageLang) {
      return storageLang;
    }

    // 3. Use browser language settings
    const navigatorLang = navigator.language || navigator.userLanguage;
    if (navigatorLang) {
      return navigatorLang.split('-')[0]; // e.g., 'en-US' -> 'en'
    }

    // 4. Fallback to default language
    return 'en';
  },

  init: function () {
    // Initialization logic if needed
  },

  cacheUserLanguage: function (lng) {
    // Cache the detected language
    setCookie('language', lng, 365); // Expires in 365 days
    localStorage.setItem('language', lng);
  }
};

// Helper functions for cookie management
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Initialize i18n
i18n
  .use(CustomLanguageDetector) // Use the custom language detector
  .use(initReactI18next) // Integrates with React
  .init({
    debug: process.env.NODE_ENV === 'development', // Enable debug only in development
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'homepage', 'dashboard'], // Add or modify namespaces as needed
    interpolation: {
      escapeValue: false, // React already safeguards against XSS
    },
    resources: {
      en: {
        common: {
          welcome: "Welcome",
          goodbye: "Goodbye",
          english: "English",
          spanish: "Spanish"
        },
        homepage: {
          title: "Home Page",
        },
        dashboard: {
          stats: "Statistics",
        },
      },
      es: {
        common: {
          welcome: "Bienvenido",
          goodbye: "Adiós",
          english: "Inglés",
          spanish: "Español"
        },
        homepage: {
          title: "Página Principal",
        },
        dashboard: {
          stats: "Estadísticas",
        },
      },
      // Add other languages here
    },
    detection: {
      // Custom detector options can be added here if needed
    },
    returnNull: false,
  }, (error) => {
    if (error) {
      console.error('i18n initialization failed:', error);
      // Optionally, handle the error more gracefully here
    }
  });

export default i18n;

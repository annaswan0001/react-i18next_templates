import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './navigation-i18n/en.js';
import translationTR  from './navigation-i18n/tr.js';
import translationAR  from './navigation-i18n/ar.js';
import translationRU  from './navigation-i18n/ru.js';

import productEN from './product-i18n/en.js';
import productTR  from './product-i18n/tr.js';
import productAR  from './product-i18n/ar.js';
import productRU  from './product-i18n/ru.js';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
      nav: translationEN,
      product: productEN
    },
    tr: {
      nav: translationTR,
      product:productTR
    },
    ar: {
        nav: translationAR,
        product:productAR
      },
    ru: {
        nav: translationRU,
        product:productRU
      },
  };

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: "en", // define initial lang settings for app
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
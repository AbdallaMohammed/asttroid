import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import { resources } from './resources';
import { getLanguage } from './utils';
export * from './utils';

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage() || 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3', // By default React Native projects does not support Intl
  interpolation: {
    escapeValue: false, // escape passed in values to avoid XSS injections
  },
});

export const isRTL: boolean = i18n.dir() === 'rtl';

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export default i18n;

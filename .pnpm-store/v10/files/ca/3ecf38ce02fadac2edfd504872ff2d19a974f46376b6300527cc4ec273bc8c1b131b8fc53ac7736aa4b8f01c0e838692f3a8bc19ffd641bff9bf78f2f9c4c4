import { createElement, useMemo } from 'react';
import { I18nContext } from './context.js';

export function I18nextProvider({ i18n, defaultNS, children }) {
  const value = useMemo(() => ({ i18n, defaultNS }), [i18n, defaultNS]);
  return createElement(I18nContext.Provider, { value }, children);
}

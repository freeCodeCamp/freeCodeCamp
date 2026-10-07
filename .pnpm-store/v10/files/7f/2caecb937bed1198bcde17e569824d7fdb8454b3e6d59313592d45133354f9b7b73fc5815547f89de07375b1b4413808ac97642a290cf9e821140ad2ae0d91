import { useContext } from 'react';
import { nodesToString, Trans as TransWithoutContext } from './TransWithoutContext.js';
import { getI18n, I18nContext } from './context.js';

export { nodesToString };

export function Trans({
  children,
  count,
  parent,
  i18nKey,
  context,
  tOptions = {},
  values,
  defaults,
  components,
  ns,
  i18n: i18nFromProps,
  t: tFromProps,
  shouldUnescape,
  ...additionalProps
}) {
  const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = useContext(I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();

  const t = tFromProps || i18n?.t.bind(i18n);

  return TransWithoutContext({
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions,
    values,
    defaults,
    components,
    // prepare having a namespace
    ns: ns || t?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
    i18n,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps,
  });
}

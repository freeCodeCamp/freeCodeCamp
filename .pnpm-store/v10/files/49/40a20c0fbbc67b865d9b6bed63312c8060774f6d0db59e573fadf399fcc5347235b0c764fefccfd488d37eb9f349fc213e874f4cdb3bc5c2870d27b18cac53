import { useTranslation } from './useTranslation.js';

export const Translation = ({ ns, children, ...options }) => {
  const [t, i18n, ready] = useTranslation(ns, options);

  return children(
    t,
    {
      i18n,
      lng: i18n.language,
    },
    ready,
  );
};

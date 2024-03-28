import type { TFunction } from 'i18next';
import { getLangCode } from '../../../../../../shared/config/i18n';
import envData from '../../../../../config/env.json';
const { clientLocale } = envData;

const localeCode = getLangCode(clientLocale);

const formatYears = (array: string[], t: TFunction): string => {
  return array.reduce((string, item, index, array) => {
    if (string.length > 0) {
      if (index === array.length - 1) {
        return `${string} ${t('misc.and')} ${item}`;
      } else {
        return `${string}, ${item}`;
      }
    } else {
      return item;
    }
  });
};

const parseDate = (joinDate: string, t: TFunction): string => {
  const convertedJoinDate = new Date(joinDate);
  const date = convertedJoinDate.toLocaleString([localeCode, 'en-US'], {
    year: 'numeric',
    month: 'long'
  });
  return t('profile.joined', { date: date });
};

export { formatYears, parseDate };

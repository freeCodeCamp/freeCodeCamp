import type { TFunction } from 'i18next';
import { getLangCode } from '../../../../../../shared/config/i18n';
import envData from '../../../../../config/env.json';
const { clientLocale } = envData;

const localeCode = getLangCode(clientLocale);

const parseDate = (joinDate: string, t: TFunction): string => {
  const convertedJoinDate = new Date(joinDate);
  const date = convertedJoinDate.toLocaleString([localeCode, 'en-US'], {
    year: 'numeric',
    month: 'long'
  });
  return t('profile.joined', { date: date });
};

export { parseDate };

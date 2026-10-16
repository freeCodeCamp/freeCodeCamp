import { rtlLangs } from '@freecodecamp/shared/config/i18n';
import envData from '../../config/env.json';

const { clientLocale } = envData;

export const isRtlLanguage = rtlLangs.includes(clientLocale);

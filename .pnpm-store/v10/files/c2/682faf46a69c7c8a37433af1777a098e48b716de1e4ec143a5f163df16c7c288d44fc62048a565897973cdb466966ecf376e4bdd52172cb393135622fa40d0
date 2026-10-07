import type { FormatOptions, ParseISOOptions, Locale } from 'date-fns';
export interface FormatOptionsWithTZ extends Omit<FormatOptions, 'locale'> {
    locale?: FormatOptions['locale'] & Pick<Locale, 'code'>;
    timeZone?: string;
    originalDate?: Date | string | number;
}
export interface ToDateOptionsWithTZ extends ParseISOOptions {
    timeZone?: string;
}
export { format } from './format/index.js';
export { formatInTimeZone } from './formatInTimeZone/index.js';
export { fromZonedTime } from './fromZonedTime/index.js';
export { toZonedTime } from './toZonedTime/index.js';
export { getTimezoneOffset } from './getTimezoneOffset/index.js';
export { toDate } from './toDate/index.js';

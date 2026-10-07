import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs/esm' {
  type WeekdayNames = [string, string, string, string, string, string, string];
  type MonthNames = [string, string, string, string, string, string, string, string, string, string, string, string];

  interface InstanceLocaleDataReturn {
    firstDayOfWeek(): number;
    weekdays(instance?: Dayjs): WeekdayNames;
    weekdaysShort(instance?: Dayjs): WeekdayNames;
    weekdaysMin(instance?: Dayjs): WeekdayNames;
    months(instance?: Dayjs): MonthNames;
    monthsShort(instance?: Dayjs): MonthNames;
    longDateFormat(format: string): string;
    meridiem(hour?: number, minute?: number, isLower?: boolean): string;
    ordinal(n: number): string
  }

  interface GlobalLocaleDataReturn {
    firstDayOfWeek(): number;
    weekdays(): WeekdayNames;
    weekdaysShort(): WeekdayNames;
    weekdaysMin(): WeekdayNames;
    months(): MonthNames;
    monthsShort(): MonthNames;
    longDateFormat(format: string): string;
    meridiem(hour?: number, minute?: number, isLower?: boolean): string;
    ordinal(n: number): string
  }

  interface Dayjs {
    localeData(): InstanceLocaleDataReturn;
  }

  export function weekdays(localOrder?: boolean): WeekdayNames;
  export function weekdaysShort(localOrder?: boolean): WeekdayNames;
  export function weekdaysMin(localOrder?: boolean): WeekdayNames;
  export function monthsShort(): MonthNames;
  export function months(): MonthNames;
  export function localeData(): GlobalLocaleDataReturn;
}

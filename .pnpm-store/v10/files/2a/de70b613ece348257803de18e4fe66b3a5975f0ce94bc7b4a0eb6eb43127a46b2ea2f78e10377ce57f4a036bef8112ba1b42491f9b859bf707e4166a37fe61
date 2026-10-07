import { PluginFunc, ConfigType, OpUnitType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isSameOrBefore(date?: ConfigType, unit?: OpUnitType): boolean
  }
}

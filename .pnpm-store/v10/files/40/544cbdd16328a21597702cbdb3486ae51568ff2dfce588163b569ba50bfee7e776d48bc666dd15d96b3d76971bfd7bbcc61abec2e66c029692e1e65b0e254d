import { PluginFunc, ConfigType, OpUnitType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isBetween(a: ConfigType, b: ConfigType, c?: OpUnitType | null, d?: '()' | '[]' | '[)' | '(]'): boolean
  }
}

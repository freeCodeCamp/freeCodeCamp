import { PluginFunc, ConfigType, OpUnitType } from 'dayjs/esm'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs/esm' {
  interface Dayjs {
    isBetween(a: ConfigType, b: ConfigType, c?: OpUnitType | null, d?: '()' | '[]' | '[)' | '(]'): boolean
  }
}

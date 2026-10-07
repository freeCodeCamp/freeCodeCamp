import { PluginFunc, ConfigType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    calendar(referenceTime?: ConfigType, formats?: object): string
  }
}

import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs/esm' {
  interface Dayjs {
    isToday(): boolean
  }
}

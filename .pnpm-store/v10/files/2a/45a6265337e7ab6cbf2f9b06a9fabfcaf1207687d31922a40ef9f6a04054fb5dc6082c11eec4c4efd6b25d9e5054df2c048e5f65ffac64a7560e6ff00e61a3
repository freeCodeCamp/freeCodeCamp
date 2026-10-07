import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export = plugin

interface DayjsObject {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

declare module 'dayjs/esm' {
  interface Dayjs {
    toObject(): DayjsObject
  }
}

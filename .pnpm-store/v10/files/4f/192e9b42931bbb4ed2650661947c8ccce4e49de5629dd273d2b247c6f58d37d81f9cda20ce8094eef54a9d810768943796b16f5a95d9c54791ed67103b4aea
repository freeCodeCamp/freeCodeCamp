import { PluginFunc } from 'dayjs'

declare module 'dayjs' {
  interface ConfigTypeMap {
    bigIntSupport: BigInt
  }
  export function unix(t: BigInt): Dayjs
}

declare const plugin: PluginFunc
export = plugin

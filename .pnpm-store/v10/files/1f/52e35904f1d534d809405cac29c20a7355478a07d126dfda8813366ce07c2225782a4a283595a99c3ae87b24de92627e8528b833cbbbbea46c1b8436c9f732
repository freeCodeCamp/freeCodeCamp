import { PluginFunc } from 'dayjs/esm'

declare module 'dayjs/esm' {
  interface ConfigTypeMap {
    bigIntSupport: BigInt
  }
  export function unix(t: BigInt): Dayjs
}

declare const plugin: PluginFunc
export = plugin

import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs/esm' {
  export function updateLocale(localeName: string, customConfig: Record<string, unknown>): Record<string, unknown>
}

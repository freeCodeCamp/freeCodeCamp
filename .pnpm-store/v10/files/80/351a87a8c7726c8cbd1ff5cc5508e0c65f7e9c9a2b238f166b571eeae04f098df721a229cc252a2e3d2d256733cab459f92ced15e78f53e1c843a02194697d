type CacheStore = { set: (key: string, value: string) => CacheStore, get: (key: string) => string | undefined, has: (key: string) => boolean }

type NegotiateFn = typeof negotiate

declare namespace negotiate {
  export class Negotiator<K extends string = string> {
    constructor (options: { supportedValues: K[]; cache?: CacheStore })

    negotiate (header: string): K | null
  }

  export const negotiate: NegotiateFn
  export { negotiate as default }
}

declare function negotiate<K extends string = string> (header: string, supportedValues: K[]): K | null
export = negotiate

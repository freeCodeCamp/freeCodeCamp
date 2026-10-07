import { EventPolyfill } from './EventPolyfill'

export class ProgressEventPolyfill extends EventPolyfill {
  readonly lengthComputable: boolean
  readonly composed: boolean
  readonly loaded: number
  readonly total: number

  constructor(type: string, init?: ProgressEventInit) {
    super(type)

    this.lengthComputable = init?.lengthComputable || false
    this.composed = init?.composed || false
    this.loaded = init?.loaded || 0
    this.total = init?.total || 0
  }
}

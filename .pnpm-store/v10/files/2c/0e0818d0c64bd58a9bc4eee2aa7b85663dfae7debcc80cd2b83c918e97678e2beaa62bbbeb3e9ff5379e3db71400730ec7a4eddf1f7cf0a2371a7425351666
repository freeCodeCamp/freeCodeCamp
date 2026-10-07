/** @deprecated use HotPayload */
export type HMRPayload = HotPayload
export type HotPayload =
  | ConnectedPayload
  | PingPayload
  | UpdatePayload
  | FullReloadPayload
  | CustomPayload
  | ErrorPayload
  | PrunePayload

export interface ConnectedPayload {
  type: 'connected'
}

export interface PingPayload {
  type: 'ping'
}

export interface UpdatePayload {
  type: 'update'
  updates: Update[]
}

export interface Update {
  type: 'js-update' | 'css-update'
  path: string
  acceptedPath: string
  timestamp: number
  /** @internal */
  explicitImportRequired?: boolean
  /** @internal */
  isWithinCircularImport?: boolean
  /** @internal */
  firstInvalidatedBy?: string
  /** @internal */
  invalidates?: string[]
}

export interface PrunePayload {
  type: 'prune'
  paths: string[]
}

export interface FullReloadPayload {
  type: 'full-reload'
  path?: string
  /** @internal */
  triggeredBy?: string
}

export interface CustomPayload {
  type: 'custom'
  event: string
  data?: any
}

export interface ErrorPayload {
  type: 'error'
  err: {
    [name: string]: any
    message: string
    stack: string
    id?: string
    frame?: string
    plugin?: string
    pluginCode?: string
    loc?: {
      file?: string
      line: number
      column: number
    }
  }
}

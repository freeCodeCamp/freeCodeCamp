import MockAgent from './mock-agent'

declare class SnapshotRecorder {
  constructor (options?: SnapshotRecorder.Options)

  record (requestOpts: any, response: any): Promise<void>
  findSnapshot (requestOpts: any): SnapshotRecorder.Snapshot | undefined
  loadSnapshots (filePath?: string): Promise<void>
  saveSnapshots (filePath?: string): Promise<void>
  clear (): void
  getSnapshots (): SnapshotRecorder.Snapshot[]
  size (): number
  resetCallCounts (): void
  deleteSnapshot (requestOpts: any): boolean
  getSnapshotInfo (requestOpts: any): SnapshotRecorder.SnapshotInfo | null
  replaceSnapshots (snapshotData: SnapshotRecorder.SnapshotData[]): void
  destroy (): void
}

declare namespace SnapshotRecorder {
  type SnapshotRecorderMode = 'record' | 'playback' | 'update'

  export interface Options {
    snapshotPath?: string
    mode?: SnapshotRecorderMode
    maxSnapshots?: number
    autoFlush?: boolean
    flushInterval?: number
    matchHeaders?: string[]
    ignoreHeaders?: string[]
    excludeHeaders?: string[]
    matchBody?: boolean
    matchQuery?: boolean
    caseSensitive?: boolean
    shouldRecord?: (requestOpts: any) => boolean
    shouldPlayback?: (requestOpts: any) => boolean
    excludeUrls?: (string | RegExp)[]
  }

  export interface Snapshot {
    request: {
      method: string
      url: string
      headers: Record<string, string>
      body?: string
    }
    responses: {
      statusCode: number
      headers: Record<string, string>
      body: string
      trailers: Record<string, string>
    }[]
    callCount: number
    timestamp: string
  }

  export interface SnapshotInfo {
    hash: string
    request: {
      method: string
      url: string
      headers: Record<string, string>
      body?: string
    }
    responseCount: number
    callCount: number
    timestamp: string
  }

  export interface SnapshotData {
    hash: string
    snapshot: Snapshot
  }
}

declare class SnapshotAgent extends MockAgent {
  constructor (options?: SnapshotAgent.Options)

  saveSnapshots (filePath?: string): Promise<void>
  loadSnapshots (filePath?: string): Promise<void>
  getRecorder (): SnapshotRecorder
  getMode (): SnapshotRecorder.SnapshotRecorderMode
  clearSnapshots (): void
  resetCallCounts (): void
  deleteSnapshot (requestOpts: any): boolean
  getSnapshotInfo (requestOpts: any): SnapshotRecorder.SnapshotInfo | null
  replaceSnapshots (snapshotData: SnapshotRecorder.SnapshotData[]): void
}

declare namespace SnapshotAgent {
  export interface Options extends MockAgent.Options {
    mode?: SnapshotRecorder.SnapshotRecorderMode
    snapshotPath?: string
    maxSnapshots?: number
    autoFlush?: boolean
    flushInterval?: number
    matchHeaders?: string[]
    ignoreHeaders?: string[]
    excludeHeaders?: string[]
    matchBody?: boolean
    matchQuery?: boolean
    caseSensitive?: boolean
    shouldRecord?: (requestOpts: any) => boolean
    shouldPlayback?: (requestOpts: any) => boolean
    excludeUrls?: (string | RegExp)[]
  }
}

export { SnapshotAgent, SnapshotRecorder }

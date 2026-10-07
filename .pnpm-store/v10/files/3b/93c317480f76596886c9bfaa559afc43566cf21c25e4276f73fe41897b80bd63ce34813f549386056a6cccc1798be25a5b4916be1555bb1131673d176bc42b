import net from 'node:net'
import {
  normalizeSocketWriteArgs,
  type WriteArgs,
  type WriteCallback,
} from './utils/normalizeSocketWriteArgs'

export interface MockSocketOptions {
  write: (
    chunk: Buffer | string,
    encoding: BufferEncoding | undefined,
    callback?: WriteCallback
  ) => void

  read: (chunk: Buffer, encoding: BufferEncoding | undefined) => void
}

export class MockSocket extends net.Socket {
  public connecting: boolean

  constructor(protected readonly options: MockSocketOptions) {
    super()
    this.connecting = false
    this.connect()

    this._final = (callback) => {
      callback(null)
    }
  }

  public connect() {
    // The connection will remain pending until
    // the consumer decides to handle it.
    this.connecting = true
    return this
  }

  public write(...args: Array<unknown>): boolean {
    const [chunk, encoding, callback] = normalizeSocketWriteArgs(
      args as WriteArgs
    )
    this.options.write(chunk, encoding, callback)
    return true
  }

  public end(...args: Array<unknown>) {
    const [chunk, encoding, callback] = normalizeSocketWriteArgs(
      args as WriteArgs
    )
    this.options.write(chunk, encoding, callback)
    return super.end.apply(this, args as any)
  }

  public push(chunk: any, encoding?: BufferEncoding): boolean {
    this.options.read(chunk, encoding)
    return super.push(chunk, encoding)
  }
}

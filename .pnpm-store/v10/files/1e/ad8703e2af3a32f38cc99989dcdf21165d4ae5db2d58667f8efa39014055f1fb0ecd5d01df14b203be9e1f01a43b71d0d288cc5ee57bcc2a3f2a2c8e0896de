import { EventEmitter } from 'events'
import * as workerThreads from 'worker_threads'

interface ThreadStreamOptions {
  /**
   * The size (in bytes) of the buffer.
   * Must be greater than 4 (i.e. it must at least fit a 4-byte utf-8 char).
   * 
   * Default: `4 * 1024 * 1024` = `4194304`
   */
  bufferSize?: number,
  /**
   * The path to the Worker's main script or module.
   * Must be either an absolute path or a relative path (i.e. relative to the current working directory) starting with ./ or ../, or a WHATWG URL object using file: or data: protocol.
   * When using a data: URL, the data is interpreted based on MIME type using the ECMAScript module loader.
   * 
   * {@link workerThreads.Worker()}
   */
  filename: string | URL,
  /**
   * If `true`, write data synchronously; otherwise write data asynchronously.
   * 
   * Default: `false`.
   */
  sync?: boolean,
  /**
   * {@link workerThreads.WorkerOptions.workerData}
   * 
   * Default: `{}`
   */
  workerData?: any,
  /**
   * {@link workerThreads.WorkerOptions}
   * 
   * Default: `{}`
   */
  workerOpts?: workerThreads.WorkerOptions
}


declare class ThreadStream extends EventEmitter {
  /**
   * @param {ThreadStreamOptions} opts 
   */
  constructor(opts: ThreadStreamOptions)
  /**
   * Write some data to the stream.
   * 
   * **Please note that this method should not throw an {Error} if something goes wrong but emit an error event.**
   * @param {string} data data to write.
   * @returns {boolean} false if the stream wishes for the calling code to wait for the 'drain' event to be emitted before continuing to write additional data or if it fails to write; otherwise true.
   */
  write(data: string): boolean
  /**
   * Signal that no more data will be written.
   * 
   * **Please note that this method should not throw an {Error} if something goes wrong but emit an error event.**
   * 
   * Calling the {@link write()} method after calling {@link end()} will emit an error.
   */
  end(): void
  /**
   * Flush the stream synchronously.
   * This method should be called in the shutdown phase to make sure that all data has been flushed.
   * 
   * **Please note that this method will throw an {Error} if something goes wrong.**
   * 
   * @throws {Error} if the stream is already flushing, if it fails to flush or if it takes more than 10 seconds to flush.
   */
  flushSync(): void
  /**
   * Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
   * to each.
   *
   * @param eventName the name of the event.
   * @param args the arguments to be passed to the event handlers.
   * @returns {boolean} `true` if the event had listeners, `false` otherwise.
   */
  emit(eventName: string | symbol, ...args: any[]): boolean;

  /**
   * Post a message to the Worker with specified data and an optional list of transferable objects.
   *
   * @param eventName the name of the event, specifically 'message'.
   * @param message message data to be sent to the Worker.
   * @param transferList an optional list of transferable objects to be transferred to the Worker context.
   * @returns {boolean} true if the event had listeners, false otherwise.
   */
  emit(eventName: 'message', message: any, transferList?: workerThreads.TransferListItem[]): boolean
}

export = ThreadStream;

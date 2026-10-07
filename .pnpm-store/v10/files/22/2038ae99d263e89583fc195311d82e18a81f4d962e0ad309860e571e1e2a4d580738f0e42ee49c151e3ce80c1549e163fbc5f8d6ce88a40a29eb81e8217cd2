declare function fastq<C, T = any, R = any>(context: C, worker: fastq.worker<C, T, R>, concurrency: number): fastq.queue<T, R>
declare function fastq<C, T = any, R = any>(worker: fastq.worker<C, T, R>, concurrency: number): fastq.queue<T, R>

declare namespace fastq {
  type worker<C, T = any, R = any> = (this: C, task: T, cb: fastq.done<R>) => void
  type asyncWorker<C, T = any, R = any> = (this: C, task: T) => Promise<R>
  type done<R = any> = (err: Error | null, result?: R) => void
  type errorHandler<T = any> = (err: Error, task: T) => void

  interface queue<T = any, R = any> {
    push(task: T, done?: done<R>): void
    unshift(task: T, done?: done<R>): void
    pause(): any
    resume(): any
    running(): number
    idle(): boolean
    length(): number
    getQueue(): T[]
    kill(): any
    killAndDrain(): any
    error(handler: errorHandler<T>): void
    concurrency: number
    drain(): any
    empty: () => void
    saturated: () => void
  }

  interface queueAsPromised<T = any, R = any> extends queue<T, R> {
    push(task: T): Promise<R>
    unshift(task: T): Promise<R>
    drained(): Promise<void>
  }

  function promise<C, T = any, R = any>(context: C, worker: fastq.asyncWorker<C, T, R>, concurrency: number): fastq.queueAsPromised<T, R>
  function promise<C, T = any, R = any>(worker: fastq.asyncWorker<C, T, R>, concurrency: number): fastq.queueAsPromised<T, R>
}

export = fastq

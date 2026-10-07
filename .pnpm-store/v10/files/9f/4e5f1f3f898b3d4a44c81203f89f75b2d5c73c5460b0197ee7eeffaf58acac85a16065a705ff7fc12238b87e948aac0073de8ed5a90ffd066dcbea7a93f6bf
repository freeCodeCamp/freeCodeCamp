export interface Deferred<R> {
  resolve(result: R): void
  reject(error: any): void
  promise: Promise<R>
}

export default function deferred<R>(): Deferred<R>

export function arrayOfDeferred<R>(length: number): Deferred<R>[]

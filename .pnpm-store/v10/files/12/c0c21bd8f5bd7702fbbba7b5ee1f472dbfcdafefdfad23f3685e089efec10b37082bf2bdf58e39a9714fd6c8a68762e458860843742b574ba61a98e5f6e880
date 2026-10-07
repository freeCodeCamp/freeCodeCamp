// @flow
import type {Readable} from 'stream';

export interface Cache {
  ensure(): Promise<void>;
  has(key: string): Promise<boolean>;
  get<T>(key: string): Promise<?T>;
  set(key: string, value: mixed): Promise<void>;
  getStream(key: string): Readable;
  setStream(key: string, stream: Readable): Promise<void>;
  getBlob(key: string): Promise<Buffer>;
  setBlob(key: string, contents: Buffer | string): Promise<void>;
  hasLargeBlob(key: string): Promise<boolean>;
  getLargeBlob(key: string): Promise<Buffer>;
  setLargeBlob(key: string, contents: Buffer | string): Promise<void>;
  getBuffer(key: string): Promise<?Buffer>;
}

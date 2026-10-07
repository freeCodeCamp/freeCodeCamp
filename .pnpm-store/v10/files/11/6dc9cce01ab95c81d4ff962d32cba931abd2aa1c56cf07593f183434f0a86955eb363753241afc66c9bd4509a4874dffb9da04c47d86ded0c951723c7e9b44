// @flow
import type {ServerOptions, PluginLogger, HMROptions} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import type {HTTPServer} from '@parcel/utils';
import {
  IncomingMessage as HTTPIncomingMessage,
  ServerResponse as HTTPServerResponse,
} from 'http';
import {
  IncomingMessage as HTTPSIncomingMessage,
  ServerResponse as HTTPSServerResponse,
} from 'https';

interface HTTPRequest extends HTTPIncomingMessage {
  originalUrl?: string;
}
interface HTTPSRequest extends HTTPSIncomingMessage {
  originalUrl?: string;
}
export type Request = HTTPRequest | HTTPSRequest;
export type Response = HTTPServerResponse | HTTPSServerResponse;
export type DevServerOptions = {|
  ...ServerOptions,
  projectRoot: string,
  publicUrl: string,
  cacheDir: string,
  inputFS: FileSystem,
  outputFS: FileSystem,
  logger: PluginLogger,
  hmrOptions: ?HMROptions,
|};

// TODO: Figure out if there is a node.js type that could be imported with a complete ServerError
export type ServerError = Error & {|
  code: string,
|};

export type HMRServerOptions = {|
  devServer?: HTTPServer,
  addMiddleware?: (
    handler: (req: Request, res: Response) => boolean
  ) => void,
  port: number,
  host: ?string,
  logger: PluginLogger,
|};

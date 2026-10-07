import { FastifyPluginAsync, FastifyReply, FastifyRequest, RouteOptions } from 'fastify'
import { Stats } from 'node:fs'

declare module 'fastify' {
  interface FastifyReply {
    sendFile(filename: string, rootPath?: string): FastifyReply;
    sendFile(filename: string, options?: fastifyStatic.SendOptions): FastifyReply;
    sendFile(filename: string, rootPath?: string, options?: fastifyStatic.SendOptions): FastifyReply;
    download(filepath: string, options?: fastifyStatic.SendOptions): FastifyReply;
    download(filepath: string, filename?: string): FastifyReply;
    download(filepath: string, filename?: string, options?: fastifyStatic.SendOptions): FastifyReply;
  }
}

type FastifyStaticPlugin = FastifyPluginAsync<NonNullable<fastifyStatic.FastifyStaticOptions>>

declare namespace fastifyStatic {
  export interface SetHeadersResponse {
    getHeader: FastifyReply['getHeader'];
    setHeader: FastifyReply['header'];
    readonly filename: string;
    statusCode: number;
  }

  export interface ExtendedInformation {
    fileCount: number;
    totalFileCount: number;
    folderCount: number;
    totalFolderCount: number;
    totalSize: number;
    lastModified: number;
  }

  export interface ListDir {
    href: string;
    name: string;
    stats: Stats;
    extendedInfo?: ExtendedInformation;
  }

  export interface ListFile {
    href: string;
    name: string;
    stats: Stats;
  }

  export interface ListRender {
    (dirs: ListDir[], files: ListFile[]): string;
  }

  export interface ListOptions {
    names?: string[];
    extendedFolderInfo?: boolean;
    jsonFormat?: 'names' | 'extended';
  }

  export interface ListOptionsJsonFormat extends ListOptions {
    format: 'json';
    // Required when the URL parameter `format=html` exists
    render?: ListRender;
  }

  export interface ListOptionsHtmlFormat extends ListOptions {
    format: 'html';
    render: ListRender;
  }

  // Passed on to `send`
  export interface SendOptions {
    acceptRanges?: boolean;
    contentType?: boolean;
    cacheControl?: boolean;
    dotfiles?: 'allow' | 'deny' | 'ignore';
    etag?: boolean;
    extensions?: string[];
    immutable?: boolean;
    index?: string[] | string | false;
    lastModified?: boolean;
    maxAge?: string | number;
    serveDotFiles?: boolean;
  }

  type Root = string | string[] | URL | URL[]

  type RootOptions = {
    serve: true;
    root: Root;
  } | {
    serve?: false;
    root?: Root;
  }

  export type FastifyStaticOptions =
    SendOptions
    & RootOptions
    & {
      // Added by this plugin
      prefix?: string;
      prefixAvoidTrailingSlash?: boolean;
      decorateReply?: boolean;
      schemaHide?: boolean;
      setHeaders?: (res: SetHeadersResponse, path: string, stat: Stats) => void;
      redirect?: boolean;
      wildcard?: boolean;
      globIgnore?: string[];
      list?: boolean | ListOptionsJsonFormat | ListOptionsHtmlFormat;
      allowedPath?: (pathName: string, root: string, request: FastifyRequest) => boolean;
      /**
       * @description
       * Opt-in to looking for pre-compressed files
       */
      preCompressed?: boolean;

      // Passed on to `send`
      acceptRanges?: boolean;
      contentType?: boolean;
      cacheControl?: boolean;
      dotfiles?: 'allow' | 'deny' | 'ignore';
      etag?: boolean;
      extensions?: string[];
      immutable?: boolean;
      index?: string[] | string | false;
      lastModified?: boolean;
      maxAge?: string | number;
      constraints?: RouteOptions['constraints'];
      logLevel?: RouteOptions['logLevel'];
    }

  export const fastifyStatic: FastifyStaticPlugin

  export { fastifyStatic as default }
}

declare function fastifyStatic (...params: Parameters<FastifyStaticPlugin>): ReturnType<FastifyStaticPlugin>

export = fastifyStatic

import { BackendModule, ReadCallback } from "i18next";

type LoadPathOption =
  | string
  | ((language: string, namespace: string) => string);

type AddPathOption =
  | string
  | ((language: string, namespace: string) => string)

export interface FsBackendOptions {
  /**
   * path where resources get loaded from, or a function
   * returning a path:
   * function(language, namespace) { return customPath; }
   * the returned path will interpolate lng, ns if provided like giving a static path
   */
  loadPath?: LoadPathOption;
  /**
   * path to post missing resources, must be `string` or a `function` returning a path:
   * function(language, namespace) { return customPath; }
   */
  addPath?: AddPathOption;
  ident?: number | undefined;
  parse?(
    data: string
  ): { [key: string]: any };
  stringify?(
    data: { [key: string]: any }
  ): string;
  expirationTime?: number;
}

export default class I18NexFsBackend
  implements BackendModule<FsBackendOptions>
{
  static type: "backend";
  constructor(services?: any, options?: FsBackendOptions);
  init(services?: any, options?: FsBackendOptions): void;
  read(language: string, namespace: string, callback: ReadCallback): void;
  create?(
    languages: string[],
    namespace: string,
    key: string,
    fallbackValue: string
  ): void;
  type: "backend";
  services: any;
  options: FsBackendOptions;
}

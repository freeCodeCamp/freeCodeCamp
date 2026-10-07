type FastUri = typeof fastUri

declare namespace fastUri {
  export interface URIComponent {
    scheme?: string;
    userinfo?: string;
    host?: string;
    port?: number | string;
    path?: string;
    query?: string;
    fragment?: string;
    reference?: string;
    error?: string;
  }
  export interface Options {
    scheme?: string;
    reference?: string;
    unicodeSupport?: boolean;
    domainHost?: boolean;
    absolutePath?: boolean;
    tolerant?: boolean;
  }

  /**
   * @deprecated Use Options instead
   */
  export type options = Options
  /**
   * @deprecated Use URIComponent instead
   */
  export type URIComponents = URIComponent

  export function normalize(uri: string, opts?: Options): string;
  export function normalize(uri: URIComponent, opts?: Options): URIComponent;
  export function normalize(uri: any, opts?: Options): any;

  export function resolve(baseURI: string, relativeURI: string, options?: Options): string

  export function resolveComponent(base: URIComponent, relative: URIComponent, options?: Options, skipNormalization?: boolean): URIComponent

  export function parse(uri: string, opts?: Options): URIComponent;

  export function serialize(component: URIComponent, opts?: Options): string;

  export function equal(uriA: string, uriB: string): boolean;

  export function resolve(base: string, path: string): string;

  export const fastUri: FastUri
  export { fastUri as default }
}

export = fastUri

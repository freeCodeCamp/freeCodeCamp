export interface URIComponents {
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
export interface URIOptions {
    scheme?: string;
    reference?: string;
    tolerant?: boolean;
    absolutePath?: boolean;
    iri?: boolean;
    unicodeSupport?: boolean;
    domainHost?: boolean;
}
export interface URISchemeHandler<Components extends URIComponents = URIComponents, Options extends URIOptions = URIOptions, ParentComponents extends URIComponents = URIComponents> {
    scheme: string;
    parse(components: ParentComponents, options: Options): Components;
    serialize(components: Components, options: Options): ParentComponents;
    unicodeSupport?: boolean;
    domainHost?: boolean;
    absolutePath?: boolean;
}
export interface URIRegExps {
    NOT_SCHEME: RegExp;
    NOT_USERINFO: RegExp;
    NOT_HOST: RegExp;
    NOT_PATH: RegExp;
    NOT_PATH_NOSCHEME: RegExp;
    NOT_QUERY: RegExp;
    NOT_FRAGMENT: RegExp;
    ESCAPE: RegExp;
    UNRESERVED: RegExp;
    OTHER_CHARS: RegExp;
    PCT_ENCODED: RegExp;
    IPV4ADDRESS: RegExp;
    IPV6ADDRESS: RegExp;
}
export declare const SCHEMES: {
    [scheme: string]: URISchemeHandler;
};
export declare function pctEncChar(chr: string): string;
export declare function pctDecChars(str: string): string;
export declare function parse(uriString: string, options?: URIOptions): URIComponents;
export declare function removeDotSegments(input: string): string;
export declare function serialize(components: URIComponents, options?: URIOptions): string;
export declare function resolveComponents(base: URIComponents, relative: URIComponents, options?: URIOptions, skipNormalization?: boolean): URIComponents;
export declare function resolve(baseURI: string, relativeURI: string, options?: URIOptions): string;
export declare function normalize(uri: string, options?: URIOptions): string;
export declare function normalize(uri: URIComponents, options?: URIOptions): URIComponents;
export declare function equal(uriA: string, uriB: string, options?: URIOptions): boolean;
export declare function equal(uriA: URIComponents, uriB: URIComponents, options?: URIOptions): boolean;
export declare function escapeComponent(str: string, options?: URIOptions): string;
export declare function unescapeComponent(str: string, options?: URIOptions): string;

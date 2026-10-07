/**
 * @fileoverview Utility functions for the Network module.
 */
import type { Protocol } from 'devtools-protocol';
import { Network, type Storage } from '../../../protocol/protocol.js';
export declare function computeHeadersSize(headers: Network.Header[]): number;
export declare function stringToBase64(str: string): string;
/** Converts from CDP Network domain headers to BiDi network headers. */
export declare function bidiNetworkHeadersFromCdpNetworkHeaders(headers?: Protocol.Network.Headers): Network.Header[];
/** Converts from CDP Fetch domain headers to BiDi network headers. */
export declare function bidiNetworkHeadersFromCdpNetworkHeadersEntries(headers?: Protocol.Fetch.HeaderEntry[]): Network.Header[];
/** Converts from Bidi network headers to CDP Network domain headers. */
export declare function cdpNetworkHeadersFromBidiNetworkHeaders(headers?: Network.Header[]): Protocol.Network.Headers | undefined;
/** Converts from CDP Fetch domain header entries to Bidi network headers. */
export declare function bidiNetworkHeadersFromCdpFetchHeaders(headers?: Protocol.Fetch.HeaderEntry[]): Network.Header[];
/** Converts from Bidi network headers to CDP Fetch domain header entries. */
export declare function cdpFetchHeadersFromBidiNetworkHeaders(headers?: Network.Header[]): Protocol.Fetch.HeaderEntry[] | undefined;
export declare function networkHeaderFromCookieHeaders(headers?: Network.CookieHeader[]): Network.Header | undefined;
/** Converts from Bidi auth action to CDP auth challenge response. */
export declare function cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(action: 'default' | 'cancel' | 'provideCredentials'): "Default" | "CancelAuth" | "ProvideCredentials";
/**
 * Converts from CDP Network domain cookie to BiDi network cookie.
 * * https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-Cookie
 * * https://w3c.github.io/webdriver-bidi/#type-network-Cookie
 */
export declare function cdpToBiDiCookie(cookie: Protocol.Network.Cookie): Network.Cookie;
/**
 * Decodes a byte value to a string.
 * @param {Network.BytesValue} value
 * @return {string}
 */
export declare function deserializeByteValue(value: Network.BytesValue): string;
/**
 * Converts from BiDi set network cookie params to CDP Network domain cookie.
 * * https://w3c.github.io/webdriver-bidi/#type-network-Cookie
 * * https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-CookieParam
 */
export declare function bidiToCdpCookie(params: Storage.SetCookieParameters, partitionKey: Storage.PartitionKey): Protocol.Network.CookieParam;
export declare function sameSiteBiDiToCdp(sameSite: Network.SameSite): Protocol.Network.CookieSameSite;
/**
 * Returns true if the given protocol is special.
 * Special protocols are those that have a default port.
 *
 * Example inputs: 'http', 'http:'
 *
 * @see https://url.spec.whatwg.org/#special-scheme
 */
export declare function isSpecialScheme(protocol: string): boolean;
export interface ParsedUrlPattern {
    protocol?: string;
    hostname?: string;
    port?: string;
    pathname?: string;
    search?: string;
}
/** Matches the given URLPattern against the given URL. */
export declare function matchUrlPattern(pattern: ParsedUrlPattern, url: string): boolean;
export declare function bidiBodySizeFromCdpPostDataEntries(entries: Protocol.Network.PostDataEntry[]): number;
export declare function getTiming(timing: number | undefined, offset?: number): number;

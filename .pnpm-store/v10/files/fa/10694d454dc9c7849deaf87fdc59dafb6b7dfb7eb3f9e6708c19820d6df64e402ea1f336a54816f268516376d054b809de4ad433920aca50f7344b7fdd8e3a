/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Represents the cookie's 'SameSite' status:
 * https://tools.ietf.org/html/draft-west-first-party-cookies
 *
 * @public
 */
export type CookieSameSite = 'Strict' | 'Lax' | 'None' | 'Default';

/**
 * Represents the cookie's 'Priority' status:
 * https://tools.ietf.org/html/draft-west-cookie-priority-00
 *
 * @public
 */
export type CookiePriority = 'Low' | 'Medium' | 'High';

/**
 * Represents the source scheme of the origin that originally set the cookie. A value of
 * "Unset" allows protocol clients to emulate legacy cookie scope for the scheme.
 * This is a temporary ability and it will be removed in the future.
 *
 * @public
 */
export type CookieSourceScheme = 'Unset' | 'NonSecure' | 'Secure';

/**
 * Represents a cookie partition key in Chrome.
 *
 * @public
 */
export interface CookiePartitionKey {
  /**
   * The site of the top-level URL the browser was visiting at the start of the request
   * to the endpoint that set the cookie.
   *
   * In Chrome, maps to the CDP's `topLevelSite` partition key.
   */
  sourceOrigin: string;
  /**
   * Indicates if the cookie has any ancestors that are cross-site to
   * the topLevelSite.
   *
   * Supported only in Chrome.
   */
  hasCrossSiteAncestor?: boolean;
}

/**
 * Represents a cookie object.
 *
 * @public
 */
export interface Cookie extends CookieData {
  /**
   * Cookie path.
   */
  path: string;
  /**
   * Cookie expiration date as the number of seconds since the UNIX epoch. Set to `-1` for
   * session cookies
   */
  expires: number;
  /**
   * Cookie size.
   */
  size: number;
  /**
   * True if cookie is secure.
   */
  secure: boolean;
  /**
   * True in case of session cookie.
   */
  session: boolean;
  /**
   * True if cookie partition key is opaque. Supported only in Chrome.
   */
  partitionKeyOpaque?: boolean;
}

/**
 * Cookie parameter object used to set cookies in the page-level cookies
 * API.
 *
 * @public
 */
export interface CookieParam {
  /**
   * Cookie name.
   */
  name: string;
  /**
   * Cookie value.
   */
  value: string;
  /**
   * The request-URI to associate with the setting of the cookie. This value can affect
   * the default domain, path, and source scheme values of the created cookie.
   */
  url?: string;
  /**
   * Cookie domain.
   */
  domain?: string;
  /**
   * Cookie path.
   */
  path?: string;
  /**
   * True if cookie is secure.
   */
  secure?: boolean;
  /**
   * True if cookie is http-only.
   */
  httpOnly?: boolean;
  /**
   * Cookie SameSite type.
   */
  sameSite?: CookieSameSite;
  /**
   * Cookie expiration date, session cookie if not set
   */
  expires?: number;
  /**
   * Cookie Priority. Supported only in Chrome.
   */
  priority?: CookiePriority;
  /**
   * Cookie source scheme type. Supported only in Chrome.
   */
  sourceScheme?: CookieSourceScheme;
  /**
   * Cookie partition key. In Chrome, it matches the top-level site the
   * partitioned cookie is available in. In Firefox, it matches the
   * source origin in the
   * {@link https://w3c.github.io/webdriver-bidi/#type-storage-PartitionKey | PartitionKey }.
   */
  partitionKey?: CookiePartitionKey | string;
}

/**
 * Cookie parameter object used to set cookies in the browser-level cookies
 * API.
 *
 * @public
 */
export interface CookieData {
  /**
   * Cookie name.
   */
  name: string;
  /**
   * Cookie value.
   */
  value: string;
  /**
   * Cookie domain.
   */
  domain: string;
  /**
   * Cookie path.
   */
  path?: string;
  /**
   * True if cookie is secure.
   */
  secure?: boolean;
  /**
   * True if cookie is http-only.
   */
  httpOnly?: boolean;
  /**
   * Cookie SameSite type.
   */
  sameSite?: CookieSameSite;
  /**
   * Cookie expiration date, session cookie if not set
   */
  expires?: number;
  /**
   * Cookie Priority. Supported only in Chrome.
   */
  priority?: CookiePriority;
  /**
   * Cookie source scheme type. Supported only in Chrome.
   */
  sourceScheme?: CookieSourceScheme;
  /**
   * Cookie partition key. In Chrome, it matches the top-level site the
   * partitioned cookie is available in. In Firefox, it matches the
   * source origin in the
   * {@link https://w3c.github.io/webdriver-bidi/#type-storage-PartitionKey | PartitionKey }.
   */
  partitionKey?: CookiePartitionKey | string;
}

/**
 * @public
 */
export interface DeleteCookiesRequest {
  /**
   * Name of the cookies to remove.
   */
  name: string;
  /**
   * If specified, deletes all the cookies with the given name where domain and path match
   * provided URL. Otherwise, deletes only cookies related to the current page's domain.
   */
  url?: string;
  /**
   * If specified, deletes only cookies with the exact domain.
   */
  domain?: string;
  /**
   * If specified, deletes only cookies with the exact path.
   */
  path?: string;
  /**
   * If specified, deletes cookies in the given partition key. In
   * Chrome, partitionKey matches the top-level site the partitioned
   * cookie is available in.
   * In Firefox, it matches the source origin in the
   * {@link https://w3c.github.io/webdriver-bidi/#type-storage-PartitionKey | PartitionKey }.
   */
  partitionKey?: CookiePartitionKey | string;
}

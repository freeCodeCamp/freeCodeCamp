import type AlgoliaAnalytics from "./insights";
import { isFunction, supportsCookies } from "./utils";
import { createUUID } from "./utils/uuid";

const COOKIE_KEY = "_ALGOLIA";
export const MONTH = 30 * 24 * 60 * 60 * 1000;

const setCookie = (
  name: string,
  value: number | string,
  duration: number
): void => {
  const d = new Date();
  d.setTime(d.getTime() + duration);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

export const getCookie = (name: string): string => {
  const prefix = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(prefix) === 0) {
      return c.substring(prefix.length, c.length);
    }
  }
  return "";
};

export function setAnonymousUserToken(
  this: AlgoliaAnalytics,
  inMemory = false
): void {
  if (inMemory) {
    this.setUserToken(`anonymous-${createUUID()}`);
    return;
  }

  if (!supportsCookies()) {
    return;
  }

  const foundToken = getCookie(COOKIE_KEY);
  if (
    !foundToken ||
    foundToken === "" ||
    foundToken.indexOf("anonymous-") !== 0
  ) {
    const savedUserToken = this.setUserToken(`anonymous-${createUUID()}`);
    setCookie(COOKIE_KEY, savedUserToken, this._cookieDuration);
  } else {
    this.setUserToken(foundToken);
  }
}

export function setUserToken(
  this: AlgoliaAnalytics,
  userToken: number | string
): number | string {
  this._userToken = userToken;
  if (isFunction(this._onUserTokenChangeCallback)) {
    this._onUserTokenChangeCallback(this._userToken);
  }
  return this._userToken;
}

export function getUserToken(
  this: AlgoliaAnalytics,
  options?: any,
  callback?: (err: any, userToken?: number | string) => void
): number | string | undefined {
  if (isFunction(callback)) {
    callback(null, this._userToken);
  }
  return this._userToken;
}

export function onUserTokenChange(
  this: AlgoliaAnalytics,
  callback?: (userToken?: number | string) => void,
  options?: { immediate: boolean }
): void {
  this._onUserTokenChangeCallback = callback;
  if (
    options &&
    options.immediate &&
    isFunction(this._onUserTokenChangeCallback)
  ) {
    this._onUserTokenChangeCallback(this._userToken);
  }
}

export function setAuthenticatedUserToken(
  this: AlgoliaAnalytics,
  authenticatedUserToken: number | string | undefined
): number | string | undefined {
  this._authenticatedUserToken = authenticatedUserToken;
  if (isFunction(this._onAuthenticatedUserTokenChangeCallback)) {
    this._onAuthenticatedUserTokenChangeCallback(this._authenticatedUserToken);
  }
  return this._authenticatedUserToken;
}

export function getAuthenticatedUserToken(
  this: AlgoliaAnalytics,
  options?: any,
  callback?: (err: any, authenticatedUserToken?: number | string) => void
): number | string | undefined {
  if (isFunction(callback)) {
    callback(null, this._authenticatedUserToken);
  }
  return this._authenticatedUserToken;
}

export function onAuthenticatedUserTokenChange(
  this: AlgoliaAnalytics,
  callback?: (authenticatedUserToken?: number | string) => void,
  options?: { immediate: boolean }
): void {
  this._onAuthenticatedUserTokenChangeCallback = callback;
  if (
    options &&
    options.immediate &&
    isFunction(this._onAuthenticatedUserTokenChangeCallback)
  ) {
    this._onAuthenticatedUserTokenChangeCallback(this._authenticatedUserToken);
  }
}

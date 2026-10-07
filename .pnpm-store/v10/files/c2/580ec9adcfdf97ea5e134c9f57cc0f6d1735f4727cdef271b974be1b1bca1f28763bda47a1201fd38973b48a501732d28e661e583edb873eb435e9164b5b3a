export const supportsCookies = (): boolean => {
  try {
    return Boolean(navigator.cookieEnabled);
  } catch (e) {
    return false;
  }
};

export const supportsSendBeacon = (): boolean => {
  try {
    return Boolean(navigator.sendBeacon);
  } catch (e) {
    return false;
  }
};

export const supportsXMLHttpRequest = (): boolean => {
  try {
    return Boolean(XMLHttpRequest);
  } catch (e) {
    return false;
  }
};

export const supportsNodeHttpModule = (): boolean => {
  try {
    /* eslint-disable @typescript-eslint/no-var-requires */
    const { request: nodeHttpRequest } = require("http");
    const { request: nodeHttpsRequest } = require("https");
    /* eslint-enable */
    return Boolean(nodeHttpRequest) && Boolean(nodeHttpsRequest);
  } catch (e) {
    return false;
  }
};

export const supportsNativeFetch = (): boolean => {
  try {
    return fetch !== undefined;
  } catch (e) {
    return false;
  }
};

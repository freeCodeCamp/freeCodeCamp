import {
  supportsNativeFetch,
  supportsSendBeacon,
  supportsXMLHttpRequest
} from "./featureDetection";
import type { RequestFnType } from "./request";
import {
  requestWithNativeFetch,
  requestWithSendBeacon,
  requestWithXMLHttpRequest
} from "./request";

export function getRequesterForBrowser(): RequestFnType {
  if (supportsSendBeacon()) {
    return requestWithSendBeacon;
  }

  if (supportsXMLHttpRequest()) {
    return requestWithXMLHttpRequest;
  }

  if (supportsNativeFetch()) {
    return requestWithNativeFetch;
  }

  throw new Error(
    "Could not find a supported HTTP request client in this environment."
  );
}

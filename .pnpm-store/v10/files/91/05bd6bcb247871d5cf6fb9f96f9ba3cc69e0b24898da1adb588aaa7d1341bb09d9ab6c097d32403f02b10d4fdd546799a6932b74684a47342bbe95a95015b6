import {
  supportsNodeHttpModule,
  supportsNativeFetch
} from "./featureDetection";
import type { RequestFnType } from "./request";
import { requestWithNodeHttpModule, requestWithNativeFetch } from "./request";

export function getRequesterForNode(): RequestFnType {
  if (supportsNodeHttpModule()) {
    return requestWithNodeHttpModule;
  }

  if (supportsNativeFetch()) {
    return requestWithNativeFetch;
  }

  throw new Error(
    "Could not find a supported HTTP request client in this environment."
  );
}

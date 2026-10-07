/* eslint-disable @typescript-eslint/no-explicit-any */
import { GrowthBook } from "../GrowthBook";
import {
  Attributes,
  FeatureApiResponse,
  LogUnion,
  Plugin,
} from "../types/growthbook";
import { GrowthBookClient, UserScopedGrowthBook } from "../GrowthBookClient";

export type DevtoolsState = {
  attributes?: Record<string, any>;
  features?: Record<string, any>;
  experiments?: Record<string, number>;
};

export interface NextjsReadonlyRequestCookiesCompat {
  get: (name: string) => { name: string; value: string } | undefined;
}
export interface NextjsRequestCompat {
  nextUrl: {
    searchParams: URLSearchParams;
  };
  cookies: {
    get: (name: string) => { name: string; value: string } | undefined;
  };
}
export interface ExpressRequestCompat {
  cookies: Record<string, string | string[]>;
  query: Record<string, string>;
  [key: string]: unknown;
}

function applyDevtoolsState(
  devtoolsState: DevtoolsState,
  gb: GrowthBook | UserScopedGrowthBook,
) {
  // Only enable in dev mode
  if (!gb.inDevMode()) {
    return;
  }

  if (
    devtoolsState.attributes &&
    typeof devtoolsState.attributes === "object"
  ) {
    gb.setAttributeOverrides(devtoolsState.attributes);
  }
  if (devtoolsState.features && typeof devtoolsState.features === "object") {
    const map = new Map(Object.entries(devtoolsState.features));
    gb.setForcedFeatures(map);
  }
  if (
    devtoolsState.experiments &&
    typeof devtoolsState.experiments === "object"
  ) {
    gb.setForcedVariations(devtoolsState.experiments);
  }
}

export function devtoolsPlugin(devtoolsState?: DevtoolsState): Plugin {
  return (gb: GrowthBook | UserScopedGrowthBook | GrowthBookClient) => {
    // Only works for user-scoped GrowthBook instances
    if ("createScopedInstance" in gb) {
      throw new Error(
        "devtoolsPlugin can only be set on a user-scoped instance",
      );
    }
    if (devtoolsState) {
      applyDevtoolsState(devtoolsState, gb);
    }
  };
}

/**
 * For NextJS environments.
 * When using server components, use the `searchParams` and `requestCookies` fields.
 *  - Note: In NextJS 15+, you should await these values before passing them to the plugin
 * When using middleware / api routes, provide the `request` field instead.
 */
export function devtoolsNextjsPlugin({
  searchParams,
  requestCookies,
  request,
}: {
  searchParams?: { _gbdebug?: string };
  requestCookies?: NextjsReadonlyRequestCookiesCompat;
  request?: NextjsRequestCompat;
}): Plugin {
  function extractGbDebugPayload({
    searchParams,
    requestCookies,
  }: {
    searchParams?: { _gbdebug?: string } | URLSearchParams;
    requestCookies?: NextjsReadonlyRequestCookiesCompat;
  }): string | undefined {
    if (searchParams) {
      if ("_gbdebug" in searchParams) {
        return searchParams._gbdebug;
      }
      if (searchParams instanceof URLSearchParams) {
        return searchParams.get("_gbdebug") ?? undefined;
      }
    }
    return requestCookies?.get("_gbdebug")?.value;
  }

  return (gb: GrowthBook | UserScopedGrowthBook | GrowthBookClient) => {
    let payload = extractGbDebugPayload({ searchParams, requestCookies });

    if (!payload && request) {
      payload = extractGbDebugPayload({
        searchParams: request.nextUrl.searchParams,
        requestCookies: request.cookies,
      });
    }

    let state: DevtoolsState = {};
    if (payload) {
      try {
        state = JSON.parse(payload);
      } catch (e) {
        console.error("cannot parse devtools payload", e);
      }
    }

    devtoolsPlugin(state)(gb);
  };
}

/**
 * Intended to be used with cookieParser() middleware from npm: 'cookie-parser'.
 */
export function devtoolsExpressPlugin({
  request,
}: {
  request?: ExpressRequestCompat;
}): Plugin {
  return (gb: GrowthBook | UserScopedGrowthBook | GrowthBookClient) => {
    let payload =
      typeof request?.query?.["_gbdebug"] === "string"
        ? request.query["_gbdebug"]
        : undefined;
    if (!payload) {
      payload =
        typeof request?.cookies?.["_gbdebug"] === "string"
          ? request.cookies["_gbdebug"]
          : undefined;
    }

    let state: DevtoolsState = {};
    if (payload) {
      try {
        state = JSON.parse(payload);
      } catch (e) {
        console.error("cannot parse devtools payload", e);
      }
    }

    devtoolsPlugin(state)(gb);
  };
}

export type SdkInfo = {
  apiHost: string;
  clientKey: string;
  source?: string;
  version?: string;
  payload?: FeatureApiResponse;
  attributes?: Attributes;
};
export type LogEvent = {
  logs: LogUnion[];
  sdkInfo?: SdkInfo;
};
/**
 * Helper method to get debug script contents for DevTools
 * @param gb - GrowthBook instance. DevMode must be enabled to view log events.
 * @param {string} [source] - Label these events for ease of reading in DevTools
 * @example
 * A React logger component (implement yourself):
 ```
  return (
    <script dangerouslySetInnerHTML={{
      __html: getDebugScriptContents(gb, "nextjs")
    }} />
  );
 ```
 */
export function getDebugScriptContents(
  gb: GrowthBook,
  source?: string,
): string {
  const event = getDebugEvent(gb, source);
  if (!event) return "";
  return `(window._gbdebugEvents = (window._gbdebugEvents || [])).push(${JSON.stringify(
    event,
  )});`;
}

export function getDebugEvent(
  gb: GrowthBook | UserScopedGrowthBook,
  source?: string,
): LogEvent | null {
  if (!("logs" in gb)) return null;
  // Only enable in dev mode
  if (!gb.inDevMode()) {
    return null;
  }
  if (gb instanceof GrowthBook) {
    // GrowthBook SDK
    const [apiHost, clientKey] = gb.getApiInfo();
    return {
      logs: gb.logs,
      sdkInfo: {
        apiHost,
        clientKey,
        source,
        version: gb.version,
        payload: gb.getDecryptedPayload(),
        attributes: gb.getAttributes(),
      },
    };
  } else if (gb instanceof UserScopedGrowthBook) {
    // UserScopedGrowthBook SDK
    const userContext = gb.getUserContext();
    const [apiHost, clientKey] = gb.getApiInfo();
    return {
      logs: gb.logs,
      sdkInfo: {
        apiHost,
        clientKey,
        source,
        version: gb.getVersion(),
        payload: gb.getDecryptedPayload(),
        attributes: {
          ...userContext.attributes,
          ...userContext.attributeOverrides,
        },
      },
    };
  }
  return null;
}

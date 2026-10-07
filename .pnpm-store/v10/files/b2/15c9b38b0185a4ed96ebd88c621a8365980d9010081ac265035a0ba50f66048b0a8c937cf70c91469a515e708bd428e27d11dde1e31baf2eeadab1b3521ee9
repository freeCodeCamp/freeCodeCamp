import type * as http from "node:http";
import type * as https from "node:https";
import type * as undici from "undici";

export type ProxyOptions = {
  /**
   * HTTP(s) Proxy URL
   *
   * Default is read from `https_proxy`, `http_proxy`, `HTTPS_PROXY` or `HTTP_PROXY` environment variables
   * */
  url?: string;

  /**
   * List of hosts to skip proxy for (comma separated or array of strings)
   *
   * Default is read from `no_proxy` or `NO_PROXY` environment variables
   *
   * Hots starting with a leading dot, like `.foo.com` are also matched against domain and all its subdomains like `bar.foo.com`
   */
  noProxy?: string | string[];
};

export declare const createProxy: (opts?: ProxyOptions) => {
  agent: http.Agent | https.Agent | undefined;
  dispatcher: undici.Dispatcher | undefined;
};

export declare const createFetch: (
  proxyOptions?: ProxyOptions,
) => typeof globalThis.fetch;

export declare const fetch: typeof globalThis.fetch;

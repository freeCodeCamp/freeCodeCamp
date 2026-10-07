export type ErrorOverlayOptions = {
  /**
   * Path to a JS file that sets up the error overlay integration.
   */
  entry?: string | false | undefined;
  /**
   * The error overlay module to use.
   */
  module?: string | false | undefined;
  /**
   * The socket host to use (WDS only).
   */
  sockHost?: string | undefined;
  /**
   * Path to a JS file that sets up the Webpack socket integration.
   */
  sockIntegration?:
    | import('type-fest').LiteralUnion<false | 'wds' | 'whm' | 'wps', string>
    | undefined;
  /**
   * The socket path to use (WDS only).
   */
  sockPath?: string | undefined;
  /**
   * The socket port to use (WDS only).
   */
  sockPort?: number | undefined;
  /**
   * The socket protocol to use (WDS only).
   */
  sockProtocol?: 'http' | 'https' | 'ws' | 'wss' | undefined;
  /**
   * Uses a polyfill for the DOM URL API (WDS only).
   */
  useURLPolyfill?: boolean | undefined;
};
export type NormalizedErrorOverlayOptions = import('type-fest').SetRequired<
  ErrorOverlayOptions,
  'entry' | 'module' | 'sockIntegration'
>;
export type ReactRefreshPluginOptions = {
  /**
   * Enables strict ES Modules compatible runtime.
   */
  esModule?: boolean | import('../loader/types').ESModuleOptions | undefined;
  /**
   * Files to explicitly exclude from processing.
   */
  exclude?: string | RegExp | (string | RegExp)[] | undefined;
  /**
   * Enables the plugin forcefully.
   */
  forceEnable?: boolean | undefined;
  /**
   * Files to explicitly include for processing.
   */
  include?: string | RegExp | (string | RegExp)[] | undefined;
  /**
   * Name of the library bundle.
   */
  library?: string | undefined;
  /**
   * Modifies how the error overlay integration works in the plugin.
   */
  overlay?: boolean | ErrorOverlayOptions | undefined;
};
export type OverlayOverrides = {
  /**
   * Modifies how the error overlay integration works in the plugin.
   */
  overlay: false | NormalizedErrorOverlayOptions;
};
export type NormalizedPluginOptions = import('type-fest').SetRequired<
  import('type-fest').Except<ReactRefreshPluginOptions, 'overlay'>,
  'exclude' | 'include'
> &
  OverlayOverrides;

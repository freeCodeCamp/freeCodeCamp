// Type definitions for Bowser v2
// Project: https://github.com/bowser-js/bowser
// Definitions by: Alexander P. Cerutti <https://github.com/alexandercerutti>,

export = Bowser;
export as namespace Bowser;

declare namespace Bowser {
  /**
   * User-Agent Client Hints data structure
   * @see https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData
   */
  interface ClientHints {
    brands?: Array<{ brand: string; version: string }>;
    mobile?: boolean;
    platform?: string;
    platformVersion?: string;
    architecture?: string;
    model?: string;
    wow64?: boolean;
  }

  /**
   * Creates a Parser instance
   * @param {string} UA - User agent string
   * @param {boolean | ClientHints} skipParsingOrHints - Either skip parsing flag or Client Hints
   * @param {ClientHints} clientHints - User-Agent Client Hints data
   */
  function getParser(UA: string, skipParsing?: boolean): Parser.Parser;
  function getParser(UA: string, clientHints?: ClientHints): Parser.Parser;
  function getParser(UA: string, skipParsing?: boolean, clientHints?: ClientHints): Parser.Parser;

  /**
   * Creates a Parser instance and runs Parser.getResult immediately
   * @param UA - User agent string
   * @param clientHints - User-Agent Client Hints data
   * @returns {Parser.ParsedResult}
   */
  function parse(UA: string, clientHints?: ClientHints): Parser.ParsedResult;

  /**
   * Constants exposed via bowser getters
   */
  const BROWSER_MAP: Record<string, string>;
  const ENGINE_MAP: Record<string, string>;
  const OS_MAP: Record<string, string>;
  const PLATFORMS_MAP: Record<string, string>;

  namespace Parser {
    interface Parser {
      constructor(UA: string, skipParsing?: boolean): Parser.Parser;
      constructor(UA: string, clientHints?: ClientHints): Parser.Parser;
      constructor(UA: string, skipParsing?: boolean, clientHints?: ClientHints): Parser.Parser;

      /**
       * Get Client Hints data
       * @return {ClientHints|null}
       */
      getHints(): ClientHints | null;

      /**
       * Check if a brand exists in Client Hints brands array
       * @param {string} brandName The brand name to check for
       * @return {boolean}
       */
      hasBrand(brandName: string): boolean;

      /**
       * Get brand version from Client Hints
       * @param {string} brandName The brand name to get version for
       * @return {string|undefined}
       */
      getBrandVersion(brandName: string): string | undefined;

      /**
       * Check if the version is equals the browser version
       * @param version The string to compare with the browser version
       * @returns {boolean}
       */

      compareVersion(version: string): boolean;

      /**
       * Get parsed browser object
       * @return {BrowserDetails} Browser's details
       */

      getBrowser(): BrowserDetails;

      /**
       * Get browser's name
       * @param {Boolean} [toLowerCase] return lower-cased value
       * @return {String} Browser's name or an empty string
       */

      getBrowserName(toLowerCase?: boolean): string;

      /**
       * Get browser's version
       * @return {String} version of browser
       */

      getBrowserVersion(): string | undefined;

      /**
       * Get OS
       * @return {OSDetails} - OS Details
       *
       * @example
       * this.getOS(); // {
       * //   name: 'macOS',
       * //   version: '10.11.12',
       * // }
       */

      getOS(): OSDetails;

      /**
       * Get OS name
       * @param {Boolean} [toLowerCase] return lower-cased value
       * @return {String} name of the OS — macOS, Windows, Linux, etc.
       */

      getOSName(toLowerCase?: boolean): string;

      /**
       * Get OS version
       * @return {String} full version with dots ('10.11.12', '5.6', etc)
       */

      getOSVersion(): string;

      /**
       * Get parsed platform
       * @returns {PlatformDetails}
       */

      getPlatform(): PlatformDetails;

      /**
       * Get platform name
       * @param {boolean} toLowerCase
       */

      getPlatformType(toLowerCase?: boolean): string;

      /**
       * Get parsed engine
       * @returns {EngineDetails}
       */

      getEngine(): EngineDetails;

      /**
       * Get parsed engine's name
       * @returns {String} Engine's name or an empty string
       */

      getEngineName(): string;

      /**
       * Get parsed result
       * @return {ParsedResult}
       */

      getResult(): ParsedResult;

      /**
       * Get UserAgent string of current Parser instance
       * @return {String} User-Agent String of the current <Parser> object
       */

      getUA(): string;

      /**
       * Is anything? Check if the browser is called "anything",
       * the OS called "anything" or the platform called "anything"
       * @param {String} anything
       * @param [includingAlias=false] The flag showing whether alias will be included into comparison
       * @returns {Boolean}
       */

      is(anything: any, includingAlias?: boolean): boolean;

      /**
       * Check if the browser name equals the passed string
       * @param browserName The string to compare with the browser name
       * @param [includingAlias=false] The flag showing whether alias will be included into comparison
       * @returns {boolean}
       */

      isBrowser(browserName: string, includingAlias?: boolean): boolean;

      /**
       * Check if the engine name equals the passed string
       * @param engineName The string to compare with the engine name
       * @returns {boolean}
       */

      isEngine(engineName: string): boolean;

      /**
       * Check if the OS name equals the passed string
       * @param OSName The string to compare with the OS name
       * @returns {boolean}
       */

      isOS(OSName: string): boolean;

      /**
       * Check if the platform name equals the passed string
       * @param platformName The string to compare with the platform name
       * @returns {boolean}
       */

      isPlatform(platformName: string): boolean;

      /**
       * Parse full information about the browser
       * @returns {Parser.Parser}
       */

      parse(): Parser.Parser;

      /**
       * Get parsed browser object
       * @returns {BrowserDetails}
       */

      parseBrowser(): BrowserDetails;

      /**
       * Get parsed engine
       * @returns {EngineDetails}
       */

      parseEngine(): EngineDetails;

      /**
       * Parse OS and save it to this.parsedResult.os
       * @returns {OSDetails}
       */

      parseOS(): OSDetails;

      /**
       * Get parsed platform
       * @returns {PlatformDetails}
       */

      parsePlatform(): PlatformDetails;

      /**
       * Check if parsed browser matches certain conditions
       *
       * @param {checkTree} checkTree It's one or two layered object,
       * which can include a platform or an OS on the first layer
       * and should have browsers specs on the bottom-laying layer
       *
       * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
       * Returns `undefined` when the browser is no described in the checkTree object.
       *
       * @example
       * const browser = new Bowser(UA);
       * if (browser.check({chrome: '>118.01.1322' }))
       * // or with os
       * if (browser.check({windows: { chrome: '>118.01.1322' } }))
       * // or with platforms
       * if (browser.check({desktop: { chrome: '>118.01.1322' } }))
       */

      satisfies(checkTree: checkTree): boolean | undefined;

      /**
       * Check if the browser name equals the passed string
       * @param {string} browserName The string to compare with the browser name
       * @param [includingAlias=false] The flag showing whether alias will be included into comparison
       * @returns {boolean}
       */

      isBrowser(browserName: string, includingAlias?: boolean): boolean;

      /**
       * Check if the engine name equals the passed string
       * @param {string} engineName The string to compare with the engine name
       * @returns {boolean}
       */

      isEngine(engineName: string): boolean;

      /**
       * Check if the platform type equals the passed string
       * @param {string} platformType The string to compare with the platform type
       * @returns {boolean}
       */

      isPlatform(platformType: string): boolean;

      /**
       * Check if the OS name equals the passed string
       * @param {string} osName The string to compare with the OS name
       * @returns {boolean}
       */

      isOS(osName: string): boolean;

      /**
       * Check if any of the given values satisfies `.is(anything)`
       * @param {string[]} anythings
       * @returns {boolean} true if at least one condition is satisfied, false otherwise.
       */

      some(anythings: string[]): boolean | undefined;

      /**
       * Test a UA string for a regexp
       * @param regex
       * @returns {boolean} true if the regex matches the UA, false otherwise.
       */

      test(regex: RegExp): boolean;
    }

    interface ParsedResult {
      browser: BrowserDetails;
      os: OSDetails;
      platform: PlatformDetails;
      engine: EngineDetails;
    }

    interface Details {
      name?: string;
      version?: string;
    }

    interface OSDetails extends Details {
      versionName?: string;
    }

    interface PlatformDetails {
      type?: string;
      vendor?: string;
      model?: string;
    }

    type BrowserDetails = Details;
    type EngineDetails = Details;

    interface checkTree {
      [key: string]: any;
    }
  }
}

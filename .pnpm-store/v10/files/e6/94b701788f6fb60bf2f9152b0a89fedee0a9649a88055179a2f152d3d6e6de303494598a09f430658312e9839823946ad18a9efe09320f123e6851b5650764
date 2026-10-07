/*!
 * Bowser - a browser detector
 * https://github.com/bowser-js/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
import Parser from './parser.js';
import {
  BROWSER_MAP,
  ENGINE_MAP,
  OS_MAP,
  PLATFORMS_MAP,
} from './constants.js';

/**
 * Bowser class.
 * Keep it simple as much as it can be.
 * It's supposed to work with collections of {@link Parser} instances
 * rather then solve one-instance problems.
 * All the one-instance stuff is located in Parser class.
 *
 * @class
 * @classdesc Bowser is a static object, that provides an API to the Parsers
 * @hideconstructor
 */
class Bowser {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean|Object} [skipParsingOrHints=false] Either a boolean to skip parsing,
   * or a ClientHints object (navigator.userAgentData)
   * @param {Object} [clientHints] User-Agent Client Hints data (navigator.userAgentData)
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   *
   * @example
   * // With User-Agent Client Hints
   * const parser = Bowser.getParser(
   *   window.navigator.userAgent,
   *   window.navigator.userAgentData
   * );
   */
  static getParser(UA, skipParsingOrHints = false, clientHints = null) {
    if (typeof UA !== 'string') {
      throw new Error('UserAgent should be a string');
    }
    return new Parser(UA, skipParsingOrHints, clientHints);
  }

  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param {String} UA UserAgent string
   * @param {Object} [clientHints] User-Agent Client Hints data (navigator.userAgentData)
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   *
   * @example
   * // With User-Agent Client Hints
   * const result = Bowser.parse(
   *   window.navigator.userAgent,
   *   window.navigator.userAgentData
   * );
   */
  static parse(UA, clientHints = null) {
    return (new Parser(UA, clientHints)).getResult();
  }

  static get BROWSER_MAP() {
    return BROWSER_MAP;
  }

  static get ENGINE_MAP() {
    return ENGINE_MAP;
  }

  static get OS_MAP() {
    return OS_MAP;
  }

  static get PLATFORMS_MAP() {
    return PLATFORMS_MAP;
  }
}

export default Bowser;

import Utils from './utils.js';
import { ENGINE_MAP } from './constants.js';

/*
 * More specific goes first
 */
export default [
  /* EdgeHTML */
  {
    test(parser) {
      return parser.getBrowserName(true) === 'microsoft edge';
    },
    describe(ua) {
      const isBlinkBased = /\sedg\//i.test(ua);

      // return blink if it's blink-based one
      if (isBlinkBased) {
        return {
          name: ENGINE_MAP.Blink,
        };
      }

      // otherwise match the version and return EdgeHTML
      const version = Utils.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);

      return {
        name: ENGINE_MAP.EdgeHTML,
        version,
      };
    },
  },

  /* Trident */
  {
    test: [/trident/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Trident,
      };

      const version = Utils.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },

  /* Presto */
  {
    test(parser) {
      return parser.test(/presto/i);
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Presto,
      };

      const version = Utils.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },

  /* Gecko */
  {
    test(parser) {
      const isGecko = parser.test(/gecko/i);
      const likeGecko = parser.test(/like gecko/i);
      return isGecko && !likeGecko;
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Gecko,
      };

      const version = Utils.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },

  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: ENGINE_MAP.Blink,
      };
    },
  },

  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.WebKit,
      };

      const version = Utils.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        engine.version = version;
      }

      return engine;
    },
  },
];

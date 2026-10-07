import Utils from './utils.js';
import { PLATFORMS_MAP } from './constants.js';

/*
 * Tablets go first since usually they have more specific
 * signs to detect.
 */

export default [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Google',
      };
    },
  },

  /* LineSpider */
  {
    test: [/linespider/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Line',
      };
    },
  },

  /* AmazonBot */
  {
    test: [/amazonbot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Amazon',
      };
    },
  },

  /* GPTBot */
  {
    test: [/gptbot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'OpenAI',
      };
    },
  },

  /* ChatGPT-User */
  {
    test: [/chatgpt-user/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'OpenAI',
      };
    },
  },

  /* OAI-SearchBot */
  {
    test: [/oai-searchbot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'OpenAI',
      };
    },
  },

  /* Baidu */
  {
    test: [/baiduspider/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Baidu',
      };
    },
  },

  /* Bingbot */
  {
    test: [/bingbot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Bing',
      };
    },
  },

  /* DuckDuckBot */
  {
    test: [/duckduckbot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'DuckDuckGo',
      };
    },
  },

  /* ClaudeBot */
  {
    test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Anthropic',
      };
    },
  },

  /* Omgilibot */
  {
    test: [/omgilibot/i, /webzio-extended/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Webz.io',
      };
    },
  },

  /* Diffbot */
  {
    test: [/diffbot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Diffbot',
      };
    },
  },

  /* PerplexityBot */
  {
    test: [/perplexitybot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Perplexity AI',
      };
    },
  },

  /* Perplexity-User */
  {
    test: [/perplexity-user/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Perplexity AI',
      };
    },
  },

  /* YouBot */
  {
    test: [/youbot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'You.com',
      };
    },
  },

  /* Internet Archive Crawler */
  {
    test: [/ia_archiver/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Internet Archive',
      };
    },
  },

  /* Meta-WebIndexer */
  {
    test: [/meta-webindexer/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Meta',
      };
    },
  },

  /* Meta-ExternalAds */
  {
    test: [/meta-externalads/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Meta',
      };
    },
  },

  /* Meta-ExternalAgent */
  {
    test: [/meta-externalagent/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Meta',
      };
    },
  },

  /* Meta-ExternalFetcher */
  {
    test: [/meta-externalfetcher/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Meta',
      };
    },
  },

  /* Meta Web Crawler */
  {
    test: [/facebookexternalhit/i, /facebookcatalog/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Meta',
      };
    },
  },

  /* SlackBot */
  {
    test: [/slackbot/i, /slack-imgProxy/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Slack',
      };
    },
  },

  /* Yahoo! Slurp */
  {
    test: [/yahoo/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Yahoo',
      };
    },
  },

  /* Yandex */
  {
    test: [/yandexbot/i, /yandexmobilebot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Yandex',
      };
    },
  },

  /* Pingdom */
  {
    test: [/pingdom/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: 'Pingdom',
      };
    },
  },

  /* Huawei */
  {
    test: [/huawei/i],
    describe(ua) {
      const model = Utils.getFirstMatch(/(can-l01)/i, ua) && 'Nova';
      const platform = {
        type: PLATFORMS_MAP.mobile,
        vendor: 'Huawei',
      };
      if (model) {
        platform.model = model;
      }
      return platform;
    },
  },

  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Nexus',
      };
    },
  },

  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Apple',
        model: 'iPad',
      };
    },
  },

  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Apple',
        model: 'iPad',
      };
    },
  },

  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Amazon',
        model: 'Kindle Fire HD 7',
      };
    },
  },

  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: 'Amazon',
      };
    },
  },

  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
      };
    },
  },

  /* iPod/iPhone */
  {
    test(parser) {
      const iDevice = parser.test(/ipod|iphone/i);
      const likeIDevice = parser.test(/like (ipod|iphone)/i);
      return iDevice && !likeIDevice;
    },
    describe(ua) {
      const model = Utils.getFirstMatch(/(ipod|iphone)/i, ua);
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: 'Apple',
        model,
      };
    },
  },

  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: 'Nexus',
      };
    },
  },

  /* Nokia */
  {
    test: [/Nokia/i],
    describe(ua) {
      const model = Utils.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, ua);
      const platform = {
        type: PLATFORMS_MAP.mobile,
        vendor: 'Nokia',
      };
      if (model) {
        platform.model = model;
      }
      return platform;
    },
  },

  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
      };
    },
  },

  /* BlackBerry */
  {
    test(parser) {
      return parser.getBrowserName(true) === 'blackberry';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: 'BlackBerry',
      };
    },
  },

  /* Bada */
  {
    test(parser) {
      return parser.getBrowserName(true) === 'bada';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
      };
    },
  },

  /* Windows Phone */
  {
    test(parser) {
      return parser.getBrowserName() === 'windows phone';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: 'Microsoft',
      };
    },
  },

  /* Android Tablet */
  {
    test(parser) {
      const osMajorVersion = Number(String(parser.getOSVersion()).split('.')[0]);
      return parser.getOSName(true) === 'android' && (osMajorVersion >= 3);
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
      };
    },
  },

  /* Android Mobile */
  {
    test(parser) {
      return parser.getOSName(true) === 'android';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
      };
    },
  },

  /* Smart TV */
  {
    test: [/smart-?tv|smarttv/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tv,
      };
    },
  },

  /* NetCast (LG Smart TV) */
  {
    test: [/netcast/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tv,
      };
    },
  },

  /* desktop */
  {
    test(parser) {
      return parser.getOSName(true) === 'macos';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
        vendor: 'Apple',
      };
    },
  },

  /* Windows */
  {
    test(parser) {
      return parser.getOSName(true) === 'windows';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
      };
    },
  },

  /* Linux */
  {
    test(parser) {
      return parser.getOSName(true) === 'linux';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
      };
    },
  },

  /* PlayStation 4 */
  {
    test(parser) {
      return parser.getOSName(true) === 'playstation 4';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv,
      };
    },
  },

  /* Roku */
  {
    test(parser) {
      return parser.getOSName(true) === 'roku';
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv,
      };
    },
  },
];

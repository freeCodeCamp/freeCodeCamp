import Utils from './utils.js';
import { OS_MAP } from './constants.js';

export default [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(ua) {
      const version = Utils.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, ua);
      return {
        name: OS_MAP.Roku,
        version,
      };
    },
  },

  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.WindowsPhone,
        version,
      };
    },
  },

  /* Windows */
  {
    test: [/windows /i],
    describe(ua) {
      const version = Utils.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, ua);
      const versionName = Utils.getWindowsVersionName(version);

      return {
        name: OS_MAP.Windows,
        version,
        versionName,
      };
    },
  },

  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(ua) {
      const result = {
        name: OS_MAP.iOS,
      };
      const version = Utils.getSecondMatch(/(Version\/)(\d[\d.]+)/, ua);
      if (version) {
        result.version = version;
      }
      return result;
    },
  },

  /* macOS */
  {
    test: [/macintosh/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, '.');
      const versionName = Utils.getMacOSVersionName(version);

      const os = {
        name: OS_MAP.MacOS,
        version,
      };
      if (versionName) {
        os.versionName = versionName;
      }
      return os;
    },
  },

  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, '.');

      return {
        name: OS_MAP.iOS,
        version,
      };
    },
  },

  /* HarmonyOS */
  {
    test: [/OpenHarmony/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.HarmonyOS,
        version,
      };
    },
  },

  /* Android */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i);
      const butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const version = Utils.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, ua);
      const versionName = Utils.getAndroidVersionName(version);
      const os = {
        name: OS_MAP.Android,
        version,
      };
      if (versionName) {
        os.versionName = versionName;
      }
      return os;
    },
  },

  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, ua);
      const os = {
        name: OS_MAP.WebOS,
      };

      if (version && version.length) {
        os.version = version;
      }
      return os;
    },
  },

  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua)
        || Utils.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, ua)
        || Utils.getFirstMatch(/\bbb(\d+)/i, ua);

      return {
        name: OS_MAP.BlackBerry,
        version,
      };
    },
  },

  /* Bada */
  {
    test: [/bada/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua);

      return {
        name: OS_MAP.Bada,
        version,
      };
    },
  },

  /* Tizen */
  {
    test: [/tizen/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, ua);

      return {
        name: OS_MAP.Tizen,
        version,
      };
    },
  },

  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: OS_MAP.Linux,
      };
    },
  },

  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: OS_MAP.ChromeOS,
      };
    },
  },

  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(ua) {
      const version = Utils.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.PlayStation4,
        version,
      };
    },
  },
];

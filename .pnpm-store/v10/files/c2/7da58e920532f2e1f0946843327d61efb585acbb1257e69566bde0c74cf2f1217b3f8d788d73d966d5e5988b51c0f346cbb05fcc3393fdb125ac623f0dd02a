import { createRequire as __prettierCreateRequire } from "module";
import { fileURLToPath as __prettierFileUrlToPath } from "url";
import { dirname as __prettierDirname } from "path";
const require = __prettierCreateRequire(import.meta.url);
const __filename = __prettierFileUrlToPath(import.meta.url);
const __dirname = __prettierDirname(__filename);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/dashify/index.js
var require_dashify = __commonJS({
  "node_modules/dashify/index.js"(exports, module) {
    "use strict";
    module.exports = (str, options) => {
      if (typeof str !== "string") throw new TypeError("expected a string");
      return str.trim().replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\W/g, (m) => /[À-ž]/.test(m) ? m : "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, (m) => options && options.condense ? "-" : m).toLowerCase();
    };
  }
});

// node_modules/minimist/index.js
var require_minimist = __commonJS({
  "node_modules/minimist/index.js"(exports, module) {
    "use strict";
    function hasKey(obj, keys2) {
      var o = obj;
      keys2.slice(0, -1).forEach(function(key2) {
        o = o[key2] || {};
      });
      var key = keys2[keys2.length - 1];
      return key in o;
    }
    function isNumber(x) {
      if (typeof x === "number") {
        return true;
      }
      if (/^0x[0-9a-f]+$/i.test(x)) {
        return true;
      }
      return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
    }
    function isConstructorOrProto(obj, key) {
      return key === "constructor" && typeof obj[key] === "function" || key === "__proto__";
    }
    module.exports = function(args, opts) {
      if (!opts) {
        opts = {};
      }
      var flags = {
        bools: {},
        strings: {},
        unknownFn: null
      };
      if (typeof opts.unknown === "function") {
        flags.unknownFn = opts.unknown;
      }
      if (typeof opts.boolean === "boolean" && opts.boolean) {
        flags.allBools = true;
      } else {
        [].concat(opts.boolean).filter(Boolean).forEach(function(key2) {
          flags.bools[key2] = true;
        });
      }
      var aliases = {};
      function aliasIsBoolean(key2) {
        return aliases[key2].some(function(x) {
          return flags.bools[x];
        });
      }
      Object.keys(opts.alias || {}).forEach(function(key2) {
        aliases[key2] = [].concat(opts.alias[key2]);
        aliases[key2].forEach(function(x) {
          aliases[x] = [key2].concat(aliases[key2].filter(function(y) {
            return x !== y;
          }));
        });
      });
      [].concat(opts.string).filter(Boolean).forEach(function(key2) {
        flags.strings[key2] = true;
        if (aliases[key2]) {
          [].concat(aliases[key2]).forEach(function(k) {
            flags.strings[k] = true;
          });
        }
      });
      var defaults = opts.default || {};
      var argv2 = { _: [] };
      function argDefined(key2, arg2) {
        return flags.allBools && /^--[^=]+$/.test(arg2) || flags.strings[key2] || flags.bools[key2] || aliases[key2];
      }
      function setKey(obj, keys2, value2) {
        var o = obj;
        for (var i2 = 0; i2 < keys2.length - 1; i2++) {
          var key2 = keys2[i2];
          if (isConstructorOrProto(o, key2)) {
            return;
          }
          if (o[key2] === void 0) {
            o[key2] = {};
          }
          if (o[key2] === Object.prototype || o[key2] === Number.prototype || o[key2] === String.prototype) {
            o[key2] = {};
          }
          if (o[key2] === Array.prototype) {
            o[key2] = [];
          }
          o = o[key2];
        }
        var lastKey = keys2[keys2.length - 1];
        if (isConstructorOrProto(o, lastKey)) {
          return;
        }
        if (o === Object.prototype || o === Number.prototype || o === String.prototype) {
          o = {};
        }
        if (o === Array.prototype) {
          o = [];
        }
        if (o[lastKey] === void 0 || flags.bools[lastKey] || typeof o[lastKey] === "boolean") {
          o[lastKey] = value2;
        } else if (Array.isArray(o[lastKey])) {
          o[lastKey].push(value2);
        } else {
          o[lastKey] = [o[lastKey], value2];
        }
      }
      function setArg(key2, val, arg2) {
        if (arg2 && flags.unknownFn && !argDefined(key2, arg2)) {
          if (flags.unknownFn(arg2) === false) {
            return;
          }
        }
        var value2 = !flags.strings[key2] && isNumber(val) ? Number(val) : val;
        setKey(argv2, key2.split("."), value2);
        (aliases[key2] || []).forEach(function(x) {
          setKey(argv2, x.split("."), value2);
        });
      }
      Object.keys(flags.bools).forEach(function(key2) {
        setArg(key2, defaults[key2] === void 0 ? false : defaults[key2]);
      });
      var notFlags = [];
      if (args.indexOf("--") !== -1) {
        notFlags = args.slice(args.indexOf("--") + 1);
        args = args.slice(0, args.indexOf("--"));
      }
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        var key;
        var next;
        if (/^--.+=/.test(arg)) {
          var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
          key = m[1];
          var value = m[2];
          if (flags.bools[key]) {
            value = value !== "false";
          }
          setArg(key, value, arg);
        } else if (/^--no-.+/.test(arg)) {
          key = arg.match(/^--no-(.+)/)[1];
          setArg(key, false, arg);
        } else if (/^--.+/.test(arg)) {
          key = arg.match(/^--(.+)/)[1];
          next = args[i + 1];
          if (next !== void 0 && !/^(-|--)[^-]/.test(next) && !flags.bools[key] && !flags.allBools && (aliases[key] ? !aliasIsBoolean(key) : true)) {
            setArg(key, next, arg);
            i += 1;
          } else if (/^(true|false)$/.test(next)) {
            setArg(key, next === "true", arg);
            i += 1;
          } else {
            setArg(key, flags.strings[key] ? "" : true, arg);
          }
        } else if (/^-[^-]+/.test(arg)) {
          var letters = arg.slice(1, -1).split("");
          var broken = false;
          for (var j = 0; j < letters.length; j++) {
            next = arg.slice(j + 2);
            if (next === "-") {
              setArg(letters[j], next, arg);
              continue;
            }
            if (/[A-Za-z]/.test(letters[j]) && next[0] === "=") {
              setArg(letters[j], next.slice(1), arg);
              broken = true;
              break;
            }
            if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
              setArg(letters[j], next, arg);
              broken = true;
              break;
            }
            if (letters[j + 1] && letters[j + 1].match(/\W/)) {
              setArg(letters[j], arg.slice(j + 2), arg);
              broken = true;
              break;
            } else {
              setArg(letters[j], flags.strings[letters[j]] ? "" : true, arg);
            }
          }
          key = arg.slice(-1)[0];
          if (!broken && key !== "-") {
            if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !flags.bools[key] && (aliases[key] ? !aliasIsBoolean(key) : true)) {
              setArg(key, args[i + 1], arg);
              i += 1;
            } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
              setArg(key, args[i + 1] === "true", arg);
              i += 1;
            } else {
              setArg(key, flags.strings[key] ? "" : true, arg);
            }
          }
        } else {
          if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
            argv2._.push(flags.strings._ || !isNumber(arg) ? arg : Number(arg));
          }
          if (opts.stopEarly) {
            argv2._.push.apply(argv2._, args.slice(i + 1));
            break;
          }
        }
      }
      Object.keys(defaults).forEach(function(k) {
        if (!hasKey(argv2, k.split("."))) {
          setKey(argv2, k.split("."), defaults[k]);
          (aliases[k] || []).forEach(function(x) {
            setKey(argv2, x.split("."), defaults[k]);
          });
        }
      });
      if (opts["--"]) {
        argv2["--"] = notFlags.slice();
      } else {
        notFlags.forEach(function(k) {
          argv2._.push(k);
        });
      }
      return argv2;
    };
  }
});

// node_modules/fast-json-stable-stringify/index.js
var require_fast_json_stable_stringify = __commonJS({
  "node_modules/fast-json-stable-stringify/index.js"(exports, module) {
    "use strict";
    module.exports = function(data, opts) {
      if (!opts) opts = {};
      if (typeof opts === "function") opts = { cmp: opts };
      var cycles = typeof opts.cycles === "boolean" ? opts.cycles : false;
      var cmp = opts.cmp && /* @__PURE__ */ (function(f) {
        return function(node) {
          return function(a, b) {
            var aobj = { key: a, value: node[a] };
            var bobj = { key: b, value: node[b] };
            return f(aobj, bobj);
          };
        };
      })(opts.cmp);
      var seen = [];
      return (function stringify5(node) {
        if (node && node.toJSON && typeof node.toJSON === "function") {
          node = node.toJSON();
        }
        if (node === void 0) return;
        if (typeof node == "number") return isFinite(node) ? "" + node : "null";
        if (typeof node !== "object") return JSON.stringify(node);
        var i, out;
        if (Array.isArray(node)) {
          out = "[";
          for (i = 0; i < node.length; i++) {
            if (i) out += ",";
            out += stringify5(node[i]) || "null";
          }
          return out + "]";
        }
        if (node === null) return "null";
        if (seen.indexOf(node) !== -1) {
          if (cycles) return JSON.stringify("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        }
        var seenIndex = seen.push(node) - 1;
        var keys2 = Object.keys(node).sort(cmp && cmp(node));
        out = "";
        for (i = 0; i < keys2.length; i++) {
          var key = keys2[i];
          var value = stringify5(node[key]);
          if (!value) continue;
          if (out) out += ",";
          out += JSON.stringify(key) + ":" + value;
        }
        seen.splice(seenIndex, 1);
        return "{" + out + "}";
      })(data);
    };
  }
});

// node_modules/common-path-prefix/index.js
var require_common_path_prefix = __commonJS({
  "node_modules/common-path-prefix/index.js"(exports, module) {
    "use strict";
    var { sep: DEFAULT_SEPARATOR } = __require("path");
    var determineSeparator = (paths) => {
      for (const path13 of paths) {
        const match = /(\/|\\)/.exec(path13);
        if (match !== null) return match[0];
      }
      return DEFAULT_SEPARATOR;
    };
    module.exports = function commonPathPrefix2(paths, sep = determineSeparator(paths)) {
      const [first = "", ...remaining] = paths;
      if (first === "" || remaining.length === 0) return "";
      const parts = first.split(sep);
      let endOfPrefix = parts.length;
      for (const path13 of remaining) {
        const compare = path13.split(sep);
        for (let i = 0; i < endOfPrefix; i++) {
          if (compare[i] !== parts[i]) {
            endOfPrefix = i;
          }
        }
        if (endOfPrefix === 0) return "";
      }
      const prefix = parts.slice(0, endOfPrefix).join(sep);
      return prefix.endsWith(sep) ? prefix : prefix + sep;
    };
  }
});

// node_modules/ci-info/vendors.json
var require_vendors = __commonJS({
  "node_modules/ci-info/vendors.json"(exports, module) {
    module.exports = [
      {
        name: "Agola CI",
        constant: "AGOLA",
        env: "AGOLA_GIT_REF",
        pr: "AGOLA_PULL_REQUEST_ID"
      },
      {
        name: "Appcircle",
        constant: "APPCIRCLE",
        env: "AC_APPCIRCLE",
        pr: {
          env: "AC_GIT_PR",
          ne: "false"
        }
      },
      {
        name: "AppVeyor",
        constant: "APPVEYOR",
        env: "APPVEYOR",
        pr: "APPVEYOR_PULL_REQUEST_NUMBER"
      },
      {
        name: "AWS CodeBuild",
        constant: "CODEBUILD",
        env: "CODEBUILD_BUILD_ARN",
        pr: {
          env: "CODEBUILD_WEBHOOK_EVENT",
          any: [
            "PULL_REQUEST_CREATED",
            "PULL_REQUEST_UPDATED",
            "PULL_REQUEST_REOPENED"
          ]
        }
      },
      {
        name: "Azure Pipelines",
        constant: "AZURE_PIPELINES",
        env: "TF_BUILD",
        pr: {
          BUILD_REASON: "PullRequest"
        }
      },
      {
        name: "Bamboo",
        constant: "BAMBOO",
        env: "bamboo_planKey"
      },
      {
        name: "Bitbucket Pipelines",
        constant: "BITBUCKET",
        env: "BITBUCKET_COMMIT",
        pr: "BITBUCKET_PR_ID"
      },
      {
        name: "Bitrise",
        constant: "BITRISE",
        env: "BITRISE_IO",
        pr: "BITRISE_PULL_REQUEST"
      },
      {
        name: "Buddy",
        constant: "BUDDY",
        env: "BUDDY_WORKSPACE_ID",
        pr: "BUDDY_EXECUTION_PULL_REQUEST_ID"
      },
      {
        name: "Buildkite",
        constant: "BUILDKITE",
        env: "BUILDKITE",
        pr: {
          env: "BUILDKITE_PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "CircleCI",
        constant: "CIRCLE",
        env: "CIRCLECI",
        pr: "CIRCLE_PULL_REQUEST"
      },
      {
        name: "Cirrus CI",
        constant: "CIRRUS",
        env: "CIRRUS_CI",
        pr: "CIRRUS_PR"
      },
      {
        name: "Cloudflare Pages",
        constant: "CLOUDFLARE_PAGES",
        env: "CF_PAGES"
      },
      {
        name: "Cloudflare Workers",
        constant: "CLOUDFLARE_WORKERS",
        env: "WORKERS_CI"
      },
      {
        name: "Codefresh",
        constant: "CODEFRESH",
        env: "CF_BUILD_ID",
        pr: {
          any: [
            "CF_PULL_REQUEST_NUMBER",
            "CF_PULL_REQUEST_ID"
          ]
        }
      },
      {
        name: "Codemagic",
        constant: "CODEMAGIC",
        env: "CM_BUILD_ID",
        pr: "CM_PULL_REQUEST"
      },
      {
        name: "Codeship",
        constant: "CODESHIP",
        env: {
          CI_NAME: "codeship"
        }
      },
      {
        name: "Drone",
        constant: "DRONE",
        env: "DRONE",
        pr: {
          DRONE_BUILD_EVENT: "pull_request"
        }
      },
      {
        name: "dsari",
        constant: "DSARI",
        env: "DSARI"
      },
      {
        name: "Earthly",
        constant: "EARTHLY",
        env: "EARTHLY_CI"
      },
      {
        name: "Expo Application Services",
        constant: "EAS",
        env: "EAS_BUILD"
      },
      {
        name: "Gerrit",
        constant: "GERRIT",
        env: "GERRIT_PROJECT"
      },
      {
        name: "Gitea Actions",
        constant: "GITEA_ACTIONS",
        env: "GITEA_ACTIONS"
      },
      {
        name: "GitHub Actions",
        constant: "GITHUB_ACTIONS",
        env: "GITHUB_ACTIONS",
        pr: {
          GITHUB_EVENT_NAME: "pull_request"
        }
      },
      {
        name: "GitLab CI",
        constant: "GITLAB",
        env: "GITLAB_CI",
        pr: "CI_MERGE_REQUEST_ID"
      },
      {
        name: "GoCD",
        constant: "GOCD",
        env: "GO_PIPELINE_LABEL"
      },
      {
        name: "Google Cloud Build",
        constant: "GOOGLE_CLOUD_BUILD",
        env: "BUILDER_OUTPUT"
      },
      {
        name: "Harness CI",
        constant: "HARNESS",
        env: "HARNESS_BUILD_ID"
      },
      {
        name: "Heroku",
        constant: "HEROKU",
        env: {
          env: "NODE",
          includes: "/app/.heroku/node/bin/node"
        }
      },
      {
        name: "Hudson",
        constant: "HUDSON",
        env: "HUDSON_URL"
      },
      {
        name: "Jenkins",
        constant: "JENKINS",
        env: [
          "JENKINS_URL",
          "BUILD_ID"
        ],
        pr: {
          any: [
            "ghprbPullId",
            "CHANGE_ID"
          ]
        }
      },
      {
        name: "LayerCI",
        constant: "LAYERCI",
        env: "LAYERCI",
        pr: "LAYERCI_PULL_REQUEST"
      },
      {
        name: "Magnum CI",
        constant: "MAGNUM",
        env: "MAGNUM"
      },
      {
        name: "Netlify CI",
        constant: "NETLIFY",
        env: "NETLIFY",
        pr: {
          env: "PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "Nevercode",
        constant: "NEVERCODE",
        env: "NEVERCODE",
        pr: {
          env: "NEVERCODE_PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "Prow",
        constant: "PROW",
        env: "PROW_JOB_ID"
      },
      {
        name: "ReleaseHub",
        constant: "RELEASEHUB",
        env: "RELEASE_BUILD_ID"
      },
      {
        name: "Render",
        constant: "RENDER",
        env: "RENDER",
        pr: {
          IS_PULL_REQUEST: "true"
        }
      },
      {
        name: "Sail CI",
        constant: "SAIL",
        env: "SAILCI",
        pr: "SAIL_PULL_REQUEST_NUMBER"
      },
      {
        name: "Screwdriver",
        constant: "SCREWDRIVER",
        env: "SCREWDRIVER",
        pr: {
          env: "SD_PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "Semaphore",
        constant: "SEMAPHORE",
        env: "SEMAPHORE",
        pr: "PULL_REQUEST_NUMBER"
      },
      {
        name: "Sourcehut",
        constant: "SOURCEHUT",
        env: {
          CI_NAME: "sourcehut"
        }
      },
      {
        name: "Strider CD",
        constant: "STRIDER",
        env: "STRIDER"
      },
      {
        name: "TaskCluster",
        constant: "TASKCLUSTER",
        env: [
          "TASK_ID",
          "RUN_ID"
        ]
      },
      {
        name: "TeamCity",
        constant: "TEAMCITY",
        env: "TEAMCITY_VERSION"
      },
      {
        name: "Travis CI",
        constant: "TRAVIS",
        env: "TRAVIS",
        pr: {
          env: "TRAVIS_PULL_REQUEST",
          ne: "false"
        }
      },
      {
        name: "Vela",
        constant: "VELA",
        env: "VELA",
        pr: {
          VELA_PULL_REQUEST: "1"
        }
      },
      {
        name: "Vercel",
        constant: "VERCEL",
        env: {
          any: [
            "NOW_BUILDER",
            "VERCEL"
          ]
        },
        pr: "VERCEL_GIT_PULL_REQUEST_ID"
      },
      {
        name: "Visual Studio App Center",
        constant: "APPCENTER",
        env: "APPCENTER_BUILD_ID"
      },
      {
        name: "Woodpecker",
        constant: "WOODPECKER",
        env: {
          CI: "woodpecker"
        },
        pr: {
          CI_BUILD_EVENT: "pull_request"
        }
      },
      {
        name: "Xcode Cloud",
        constant: "XCODE_CLOUD",
        env: "CI_XCODE_PROJECT",
        pr: "CI_PULL_REQUEST_NUMBER"
      },
      {
        name: "Xcode Server",
        constant: "XCODE_SERVER",
        env: "XCS"
      }
    ];
  }
});

// node_modules/ci-info/index.js
var require_ci_info = __commonJS({
  "node_modules/ci-info/index.js"(exports) {
    "use strict";
    var vendors = require_vendors();
    var env3 = process.env;
    Object.defineProperty(exports, "_vendors", {
      value: vendors.map(function(v) {
        return v.constant;
      })
    });
    exports.name = null;
    exports.isPR = null;
    exports.id = null;
    if (env3.CI !== "false") {
      vendors.forEach(function(vendor) {
        const envs = Array.isArray(vendor.env) ? vendor.env : [vendor.env];
        const isCI2 = envs.every(function(obj) {
          return checkEnv(obj);
        });
        exports[vendor.constant] = isCI2;
        if (!isCI2) {
          return;
        }
        exports.name = vendor.name;
        exports.isPR = checkPR(vendor);
        exports.id = vendor.constant;
      });
    }
    exports.isCI = !!(env3.CI !== "false" && // Bypass all checks if CI env is explicitly set to 'false'
    (env3.BUILD_ID || // Jenkins, Cloudbees
    env3.BUILD_NUMBER || // Jenkins, TeamCity
    env3.CI || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari, Cloudflare Pages/Workers
    env3.CI_APP_ID || // Appflow
    env3.CI_BUILD_ID || // Appflow
    env3.CI_BUILD_NUMBER || // Appflow
    env3.CI_NAME || // Codeship and others
    env3.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI
    env3.RUN_ID || // TaskCluster, dsari
    exports.name || false));
    function checkEnv(obj) {
      if (typeof obj === "string") return !!env3[obj];
      if ("env" in obj) {
        return env3[obj.env] && env3[obj.env].includes(obj.includes);
      }
      if ("any" in obj) {
        return obj.any.some(function(k) {
          return !!env3[k];
        });
      }
      return Object.keys(obj).every(function(k) {
        return env3[k] === obj[k];
      });
    }
    function checkPR(vendor) {
      switch (typeof vendor.pr) {
        case "string":
          return !!env3[vendor.pr];
        case "object":
          if ("env" in vendor.pr) {
            if ("any" in vendor.pr) {
              return vendor.pr.any.some(function(key) {
                return env3[vendor.pr.env] === key;
              });
            } else {
              return vendor.pr.env in env3 && env3[vendor.pr.env] !== vendor.pr.ne;
            }
          } else if ("any" in vendor.pr) {
            return vendor.pr.any.some(function(key) {
              return !!env3[key];
            });
          } else {
            return checkEnv(vendor.pr);
          }
        default:
          return null;
      }
    }
  }
});

// src/cli/index.js
import * as prettier2 from "../index.mjs";

// scripts/build/shims/shared.js
var OPTIONAL_OBJECT = 1;
var createMethodShim = (methodName, getImplementation) => (flags, object2, ...arguments_) => {
  if (flags | OPTIONAL_OBJECT && (object2 === void 0 || object2 === null)) {
    return;
  }
  const implementation = getImplementation.call(object2) ?? object2[methodName];
  return implementation.apply(object2, arguments_);
};

// scripts/build/shims/method-at.js
function stringOrArrayAt(index) {
  return this[index < 0 ? this.length + index : index];
}
var at = createMethodShim("at", function() {
  if (Array.isArray(this) || typeof this === "string") {
    return stringOrArrayAt;
  }
});
var method_at_default = at;

// src/cli/options/get-context-options.js
var import_dashify = __toESM(require_dashify(), 1);
import { getSupportInfo } from "../index.mjs";

// src/cli/cli-options.evaluate.js
var cli_options_evaluate_default = {
  "cache": {
    "default": false,
    "description": "Only format changed files. Cannot use with --stdin-filepath.",
    "type": "boolean"
  },
  "cacheLocation": {
    "description": "Path to the cache file.",
    "type": "path"
  },
  "cacheStrategy": {
    "choices": [
      {
        "description": "Use the file metadata such as timestamps as cache keys",
        "value": "metadata"
      },
      {
        "description": "Use the file content as cache keys",
        "value": "content"
      }
    ],
    "description": "Strategy for the cache to use for detecting changed files.",
    "type": "choice"
  },
  "check": {
    "alias": "c",
    "category": "Output",
    "description": "Check if the given files are formatted, print a human-friendly summary\nmessage and paths to unformatted files (see also --list-different).",
    "type": "boolean"
  },
  "color": {
    "default": true,
    "description": "Colorize error messages.",
    "oppositeDescription": "Do not colorize error messages.",
    "type": "boolean"
  },
  "config": {
    "category": "Config",
    "description": "Path to a Prettier configuration file (.prettierrc, package.json, prettier.config.js).",
    "exception": (value) => value === false,
    "oppositeDescription": "Do not look for a configuration file.",
    "type": "path"
  },
  "configPrecedence": {
    "category": "Config",
    "choices": [
      {
        "description": "CLI options take precedence over config file",
        "value": "cli-override"
      },
      {
        "description": "Config file take precedence over CLI options",
        "value": "file-override"
      },
      {
        "description": "If a config file is found will evaluate it and ignore other CLI options.\nIf no config file is found CLI options will evaluate as normal.",
        "value": "prefer-file"
      }
    ],
    "default": "cli-override",
    "description": "Define in which order config files and CLI options should be evaluated.",
    "type": "choice"
  },
  "debugBenchmark": {
    "type": "boolean"
  },
  "debugCheck": {
    "type": "boolean"
  },
  "debugPrintAst": {
    "type": "boolean"
  },
  "debugPrintComments": {
    "type": "boolean"
  },
  "debugPrintDoc": {
    "type": "boolean"
  },
  "debugRepeat": {
    "default": 0,
    "type": "int"
  },
  "editorconfig": {
    "category": "Config",
    "default": true,
    "description": "Take .editorconfig into account when parsing configuration.",
    "oppositeDescription": "Don't take .editorconfig into account when parsing configuration.",
    "type": "boolean"
  },
  "errorOnUnmatchedPattern": {
    "oppositeDescription": "Prevent errors when pattern is unmatched.",
    "type": "boolean"
  },
  "fileInfo": {
    "description": "Extract the following info (as JSON) for a given file path. Reported fields:\n* ignored (boolean) - true if file path is filtered by --ignore-path\n* inferredParser (string | null) - name of parser inferred from file path",
    "type": "path"
  },
  "findConfigPath": {
    "category": "Config",
    "description": "Find and print the path to a configuration file for the given input file.",
    "type": "path"
  },
  "help": {
    "alias": "h",
    "description": "Show CLI usage, or details about the given flag.\nExample: --help write",
    "exception": (value) => value === "",
    "type": "flag"
  },
  "ignorePath": {
    "array": true,
    "category": "Config",
    "default": [
      {
        "value": [
          ".gitignore",
          ".prettierignore"
        ]
      }
    ],
    "description": "Path to a file with patterns describing files to ignore.\nMultiple values are accepted.",
    "type": "path"
  },
  "ignoreUnknown": {
    "alias": "u",
    "description": "Ignore unknown files.",
    "type": "boolean"
  },
  "listDifferent": {
    "alias": "l",
    "category": "Output",
    "description": "Print the names of files that are different from Prettier's formatting (see also --check).",
    "type": "boolean"
  },
  "logLevel": {
    "choices": [
      "silent",
      "error",
      "warn",
      "log",
      "debug"
    ],
    "default": "log",
    "description": "What level of logs to report.",
    "type": "choice"
  },
  "supportInfo": {
    "description": "Print support information as JSON.",
    "type": "boolean"
  },
  "version": {
    "alias": "v",
    "description": "Print Prettier version.",
    "type": "boolean"
  },
  "withNodeModules": {
    "category": "Config",
    "description": "Process files inside 'node_modules' directory.",
    "type": "boolean"
  },
  "write": {
    "alias": "w",
    "category": "Output",
    "description": "Edit files in-place. (Beware!)",
    "type": "boolean"
  }
};

// src/cli/prettier-internal.js
import { __internal as sharedWithCli } from "../index.mjs";
var {
  errors,
  optionCategories,
  createIsIgnoredFunction,
  formatOptionsHiddenDefaults,
  normalizeOptions,
  getSupportInfoWithoutPlugins,
  normalizeOptionSettings,
  vnopts,
  fastGlob,
  createTwoFilesPatch,
  picocolors,
  closetLevenshteinMatch
} = sharedWithCli;

// src/cli/options/get-context-options.js
var detailedCliOptions = normalizeOptionSettings(cli_options_evaluate_default).map(
  (option) => normalizeDetailedOption(option)
);
function apiOptionToCliOption(apiOption) {
  const cliOption = {
    ...apiOption,
    description: apiOption.cliDescription ?? apiOption.description,
    category: apiOption.cliCategory ?? optionCategories.CATEGORY_FORMAT,
    forwardToApi: apiOption.name
  };
  if (apiOption.deprecated) {
    delete cliOption.forwardToApi;
    delete cliOption.description;
    delete cliOption.oppositeDescription;
    cliOption.deprecated = true;
  }
  return normalizeDetailedOption(cliOption);
}
function normalizeDetailedOption(option) {
  return {
    category: optionCategories.CATEGORY_OTHER,
    ...option,
    name: option.cliName ?? (0, import_dashify.default)(option.name),
    choices: option.choices?.map((choice) => {
      const newChoice = {
        description: "",
        deprecated: false,
        ...typeof choice === "object" ? choice : { value: choice }
      };
      if (newChoice.value === true) {
        newChoice.value = "";
      }
      return newChoice;
    })
  };
}
function supportInfoToContextOptions({ options: supportOptions, languages }) {
  const detailedOptions = [
    ...detailedCliOptions,
    ...supportOptions.map((apiOption) => apiOptionToCliOption(apiOption))
  ];
  return {
    supportOptions,
    languages,
    detailedOptions
  };
}
async function getContextOptions(plugins) {
  const supportInfo = await getSupportInfo({
    showDeprecated: true,
    plugins
  });
  return supportInfoToContextOptions(supportInfo);
}
function getContextOptionsWithoutPlugins() {
  const supportInfo = getSupportInfoWithoutPlugins();
  return supportInfoToContextOptions(supportInfo);
}

// scripts/build/shims/method-replace-all.js
var stringReplaceAll = String.prototype.replaceAll ?? function(pattern, replacement) {
  if (pattern.global) {
    return this.replace(pattern, replacement);
  }
  return this.split(pattern).join(replacement);
};
var replaceAll = createMethodShim("replaceAll", function() {
  if (typeof this === "string") {
    return stringReplaceAll;
  }
});
var method_replace_all_default = replaceAll;

// node_modules/camelcase/index.js
var UPPERCASE = /[\p{Lu}]/u;
var LOWERCASE = /[\p{Ll}]/u;
var LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/u;
var SEPARATORS = /[_.\- ]+/;
var IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
var LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
var SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
var NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");
var preserveCamelCase = (string, toLowerCase, toUpperCase, preserveConsecutiveUppercase2) => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;
  let isLastLastCharPreserved = false;
  for (let index = 0; index < string.length; index++) {
    const character = string[index];
    isLastLastCharPreserved = index > 2 ? string[index - 3] === "-" : true;
    if (isLastCharLower && UPPERCASE.test(character)) {
      string = string.slice(0, index) + "-" + string.slice(index);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      index++;
    } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character) && (!isLastLastCharPreserved || preserveConsecutiveUppercase2)) {
      string = string.slice(0, index - 1) + "-" + string.slice(index - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
    }
  }
  return string;
};
var preserveConsecutiveUppercase = (input, toLowerCase) => input.replace(LEADING_CAPITAL, (match) => toLowerCase(match));
var processWithCasePreservation = (input, toLowerCase, preserveConsecutiveUppercase2) => {
  let result = "";
  let previousWasNumber = false;
  let previousWasUppercase = false;
  const characters = [...input];
  for (let index = 0; index < characters.length; index++) {
    const character = characters[index];
    const isUpperCase = UPPERCASE.test(character);
    const nextCharIsUpperCase = index + 1 < characters.length && UPPERCASE.test(characters[index + 1]);
    if (previousWasNumber && /[\p{Alpha}]/u.test(character)) {
      result += character;
      previousWasNumber = false;
      previousWasUppercase = isUpperCase;
    } else if (preserveConsecutiveUppercase2 && isUpperCase && (previousWasUppercase || nextCharIsUpperCase)) {
      result += character;
      previousWasUppercase = true;
    } else if (/\d/.test(character)) {
      result += character;
      previousWasNumber = true;
      previousWasUppercase = false;
    } else if (SEPARATORS.test(character)) {
      result += character;
      previousWasUppercase = false;
    } else {
      result += toLowerCase(character);
      previousWasNumber = false;
      previousWasUppercase = false;
    }
  }
  return result;
};
var postProcess = (input, toUpperCase, {
  capitalizeAfterNumber
}) => {
  const transformNumericIdentifier = capitalizeAfterNumber ? (match, identifier, offset, string) => {
    const nextCharacter = string.charAt(offset + match.length);
    if (SEPARATORS.test(nextCharacter)) {
      return match;
    }
    return identifier ? match.slice(0, -identifier.length) + toUpperCase(identifier) : match;
  } : (match) => match;
  return method_replace_all_default(
    /* OPTIONAL_OBJECT: false */
    0,
    method_replace_all_default(
      /* OPTIONAL_OBJECT: false */
      0,
      input,
      NUMBERS_AND_IDENTIFIER,
      transformNumericIdentifier
    ),
    SEPARATORS_AND_IDENTIFIER,
    (_2, identifier) => toUpperCase(identifier)
  );
};
function camelCase(input, options) {
  if (!(typeof input === "string" || Array.isArray(input))) {
    throw new TypeError("Expected the input to be `string | string[]`");
  }
  options = {
    pascalCase: false,
    preserveConsecutiveUppercase: false,
    capitalizeAfterNumber: true,
    ...options
  };
  if (Array.isArray(input)) {
    input = input.map((element) => element.trim()).filter((element) => element.length > 0).join("-");
  } else {
    input = input.trim();
  }
  if (input.length === 0) {
    return "";
  }
  const leadingPrefix = input.match(/^[_$]*/)[0];
  input = input.slice(leadingPrefix.length);
  if (input.length === 0) {
    return leadingPrefix;
  }
  const toLowerCase = options.locale === false ? (string) => string.toLowerCase() : (string) => string.toLocaleLowerCase(options.locale);
  const toUpperCase = options.locale === false ? (string) => string.toUpperCase() : (string) => string.toLocaleUpperCase(options.locale);
  if (input.length === 1) {
    if (SEPARATORS.test(input)) {
      return leadingPrefix;
    }
    return leadingPrefix + (options.pascalCase ? toUpperCase(input) : toLowerCase(input));
  }
  const hasUpperCase = input !== toLowerCase(input);
  if (hasUpperCase) {
    input = preserveCamelCase(input, toLowerCase, toUpperCase, options.preserveConsecutiveUppercase);
  }
  input = input.replace(LEADING_SEPARATORS, "");
  if (options.capitalizeAfterNumber) {
    input = options.preserveConsecutiveUppercase ? preserveConsecutiveUppercase(input, toLowerCase) : toLowerCase(input);
  } else {
    input = processWithCasePreservation(input, toLowerCase, options.preserveConsecutiveUppercase);
  }
  if (options.pascalCase && input.length > 0) {
    input = toUpperCase(input[0]) + input.slice(1);
  }
  return leadingPrefix + postProcess(input, toUpperCase, options);
}

// src/cli/utilities.js
import fs from "fs/promises";
import path from "path";

// node_modules/sdbm/index.js
var textEncoder = new TextEncoder();
function sdbmHash(input, options) {
  if (typeof input === "string") {
    if (options?.bytes) {
      input = textEncoder.encode(input);
    } else {
      let hash3 = 0n;
      for (let index = 0; index < input.length; index++) {
        hash3 = BigInt(input.charCodeAt(index)) + (hash3 << 6n) + (hash3 << 16n) - hash3;
      }
      return hash3;
    }
  } else if (!(input instanceof Uint8Array)) {
    throw new TypeError("Expected a string or Uint8Array");
  }
  let hash2 = 0n;
  for (const byte of input) {
    hash2 = BigInt(byte) + (hash2 << 6n) + (hash2 << 16n) - hash2;
  }
  return hash2;
}
function sdbm(input, options) {
  return Number(BigInt.asUintN(32, sdbmHash(input, options)));
}
sdbm.bigint = function(input, options) {
  return BigInt.asUintN(64, sdbmHash(input, options));
};

// src/cli/utilities.js
import { __internal as sharedWithCli2 } from "../index.mjs";
var printToScreen = console.log.bind(console);
function groupBy(array, iteratee) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const value of array) {
    const key = iteratee(value);
    if (Array.isArray(result[key])) {
      result[key].push(value);
    } else {
      result[key] = [value];
    }
  }
  return result;
}
function pick(object2, keys2) {
  const entries = keys2.map((key) => [key, object2[key]]);
  return Object.fromEntries(entries);
}
function createHash(source) {
  return String(sdbm(source));
}
async function statSafe(filePath) {
  try {
    return await fs.stat(filePath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}
async function lstatSafe(filePath) {
  try {
    return await fs.lstat(filePath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}
function isJson(value) {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}
var normalizeToPosix = path.sep === "\\" ? (filepath) => method_replace_all_default(
  /* OPTIONAL_OBJECT: false */
  0,
  filepath,
  "\\",
  "/"
) : (filepath) => filepath;
var {
  omit
} = sharedWithCli2.utilities;

// src/cli/options/create-minimist-options.js
function createMinimistOptions(detailedOptions) {
  const booleanNames = [];
  const stringNames = [];
  const defaultValues = {};
  for (const option of detailedOptions) {
    const { name, alias, type } = option;
    const names = type === "boolean" ? booleanNames : stringNames;
    names.push(name);
    if (alias) {
      names.push(alias);
    }
    if (!option.deprecated && (!option.forwardToApi || name === "plugin") && option.default !== void 0) {
      defaultValues[option.name] = option.default;
    }
  }
  return {
    // we use vnopts' AliasSchema to handle aliases for better error messages
    alias: {},
    boolean: booleanNames,
    string: stringNames,
    default: defaultValues
  };
}

// src/cli/options/minimist.js
var import_minimist = __toESM(require_minimist(), 1);
var PLACEHOLDER = null;
function minimistParse(args, options) {
  const boolean = options.boolean ?? [];
  const defaults = options.default ?? {};
  const booleanWithoutDefault = boolean.filter((key) => !(key in defaults));
  const newDefaults = {
    ...defaults,
    ...Object.fromEntries(
      booleanWithoutDefault.map((key) => [key, PLACEHOLDER])
    )
  };
  const parsed = (0, import_minimist.default)(args, { ...options, default: newDefaults });
  return Object.fromEntries(
    Object.entries(parsed).filter(([, value]) => value !== PLACEHOLDER)
  );
}

// src/cli/options/normalize-cli-options.js
var descriptor = {
  key: (key) => key.length === 1 ? `-${key}` : `--${key}`,
  value: (value) => vnopts.apiDescriptor.value(value),
  pair: ({ key, value }) => value === false ? `--no-${key}` : value === true ? descriptor.key(key) : value === "" ? `${descriptor.key(key)} without an argument` : `${descriptor.key(key)}=${value}`
};
var FlagSchema = class extends vnopts.ChoiceSchema {
  #flags = [];
  constructor({ name, flags }) {
    super({ name, choices: flags });
    this.#flags = [...flags].sort();
  }
  preprocess(value, utils) {
    if (typeof value === "string" && value.length > 0 && !this.#flags.includes(value)) {
      const suggestion = closetLevenshteinMatch(value, this.#flags, {
        maxDistance: 3
      });
      if (suggestion) {
        utils.logger.warn(
          [
            `Unknown flag ${picocolors.yellow(utils.descriptor.value(value))},`,
            `did you mean ${picocolors.blue(utils.descriptor.value(suggestion))}?`
          ].join(" ")
        );
        return suggestion;
      }
    }
    return value;
  }
  expected() {
    return "a flag";
  }
};
function normalizeCliOptions(options, optionInfos, opts) {
  return normalizeOptions(options, optionInfos, {
    ...opts,
    isCLI: true,
    FlagSchema,
    descriptor
  });
}
var normalize_cli_options_default = normalizeCliOptions;

// src/cli/options/parse-cli-arguments.js
function parseArgv(rawArguments, detailedOptions, logger, keys2) {
  const minimistOptions = createMinimistOptions(detailedOptions);
  let argv2 = minimistParse(rawArguments, minimistOptions);
  if (keys2) {
    detailedOptions = detailedOptions.filter(
      (option) => keys2.includes(option.name)
    );
    argv2 = pick(argv2, keys2);
  }
  const normalized = normalize_cli_options_default(argv2, detailedOptions, { logger });
  return {
    ...Object.fromEntries(
      Object.entries(normalized).map(([key, value]) => {
        const option = detailedOptions.find(({ name }) => name === key) || {};
        return [option.forwardToApi || camelCase(key), value];
      })
    ),
    _: normalized._?.map(String),
    get __raw() {
      return argv2;
    }
  };
}
var { detailedOptions: detailedOptionsWithoutPlugins } = getContextOptionsWithoutPlugins();
function parseArgvWithoutPlugins(rawArguments, logger, keys2) {
  return parseArgv(
    rawArguments,
    detailedOptionsWithoutPlugins,
    logger,
    typeof keys2 === "string" ? [keys2] : keys2
  );
}

// src/cli/context.js
var Context = class {
  #stack = [];
  constructor({
    rawArguments,
    logger
  }) {
    this.rawArguments = rawArguments;
    this.logger = logger;
  }
  async init() {
    const {
      rawArguments,
      logger
    } = this;
    const {
      plugins
    } = parseArgvWithoutPlugins(rawArguments, logger, ["plugin"]);
    await this.pushContextPlugins(plugins);
    const argv2 = parseArgv(rawArguments, this.detailedOptions, logger);
    this.argv = argv2;
    this.filePatterns = argv2._;
  }
  /**
   * @param {string[]} plugins
   */
  async pushContextPlugins(plugins) {
    const options = await getContextOptions(plugins);
    this.#stack.push(options);
    Object.assign(this, options);
  }
  popContextPlugins() {
    this.#stack.pop();
    Object.assign(this, method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      this.#stack,
      -1
    ));
  }
  // eslint-disable-next-line getter-return
  get performanceTestFlag() {
    const {
      debugBenchmark,
      debugRepeat
    } = this.argv;
    if (debugBenchmark) {
      return {
        name: "--debug-benchmark",
        debugBenchmark: true
      };
    }
    if (debugRepeat > 0) {
      return {
        name: "--debug-repeat",
        debugRepeat
      };
    }
    const {
      PRETTIER_PERF_REPEAT
    } = process.env;
    if (PRETTIER_PERF_REPEAT && /^\d+$/u.test(PRETTIER_PERF_REPEAT)) {
      return {
        name: "PRETTIER_PERF_REPEAT (environment variable)",
        debugRepeat: Number(PRETTIER_PERF_REPEAT)
      };
    }
  }
};
var context_default = Context;

// src/cli/file-info.js
var import_fast_json_stable_stringify = __toESM(require_fast_json_stable_stringify(), 1);
import path2 from "path";
import { format, getFileInfo } from "../index.mjs";
async function logFileInfoOrDie(context) {
  const {
    fileInfo: file,
    ignorePath,
    withNodeModules: withNodeModules2,
    plugins,
    config
  } = context.argv;
  const fileInfo = await getFileInfo(path2.resolve(file), {
    ignorePath,
    withNodeModules: withNodeModules2,
    plugins: plugins.length > 0 ? plugins : void 0,
    resolveConfig: config !== false
  });
  const result = await format((0, import_fast_json_stable_stringify.default)(fileInfo), { parser: "json" });
  printToScreen(result.trim());
}
var file_info_default = logFileInfoOrDie;

// src/cli/find-config-path.js
import path3 from "path";
import { resolveConfigFile } from "../index.mjs";
async function logResolvedConfigPathOrDie(context) {
  const file = context.argv.findConfigPath;
  const configFile = await resolveConfigFile(file);
  if (configFile) {
    printToScreen(normalizeToPosix(path3.relative(process.cwd(), configFile)));
  } else {
    throw new Error(`Can not find configure file for "${file}".`);
  }
}
var find_config_path_default = logResolvedConfigPathOrDie;

// src/cli/format.js
import fs9 from "fs/promises";
import path12 from "path";

// node_modules/get-stdin/index.js
var { stdin } = process;
async function getStdin() {
  let result = "";
  if (stdin.isTTY) {
    return result;
  }
  stdin.setEncoding("utf8");
  for await (const chunk of stdin) {
    result += chunk;
  }
  return result;
}
getStdin.buffer = async () => {
  const result = [];
  let length = 0;
  if (stdin.isTTY) {
    return Buffer.concat([]);
  }
  for await (const chunk of stdin) {
    result.push(chunk);
    length += chunk.length;
  }
  return Buffer.concat(result, length);
};

// src/cli/format.js
import * as prettier from "../index.mjs";

// src/cli/expand-patterns.js
import path5 from "path";

// src/cli/directory-ignorer.js
import path4 from "path";
var alwaysIgnoredDirectories = [".git", ".sl", ".svn", ".hg", ".jj"];
var withNodeModules = [...alwaysIgnoredDirectories, "node_modules"];
var cwd = process.cwd();
var DirectoryIgnorer = class {
  #directories;
  ignorePatterns;
  constructor(shouldIgnoreNodeModules) {
    const directories = shouldIgnoreNodeModules ? withNodeModules : alwaysIgnoredDirectories;
    const patterns = directories.map((directory) => `**/${directory}`);
    this.#directories = new Set(directories);
    this.ignorePatterns = patterns;
  }
  /**
   * @param {string} absolutePathOrPattern
   */
  shouldIgnore(absolutePathOrPattern) {
    const directoryNames = path4.relative(cwd, absolutePathOrPattern).split(path4.sep);
    return directoryNames.some(
      (directoryName) => this.#directories.has(directoryName)
    );
  }
};
var directoryIgnorerWithNodeModules = new DirectoryIgnorer(
  /* shouldIgnoreNodeModules */
  true
);
var directoryIgnorerWithoutNodeModules = new DirectoryIgnorer(
  /* shouldIgnoreNodeModules */
  false
);

// src/cli/expand-patterns.js
async function* expandPatterns(context) {
  const seen = /* @__PURE__ */ new Set();
  let noResults = true;
  for await (const {
    filePath,
    ignoreUnknown,
    error
  } of expandPatternsInternal(context)) {
    noResults = false;
    if (error) {
      yield {
        error
      };
      continue;
    }
    const filename = path5.resolve(filePath);
    if (seen.has(filename)) {
      continue;
    }
    seen.add(filename);
    yield {
      filename,
      ignoreUnknown
    };
  }
  if (noResults && context.argv.errorOnUnmatchedPattern !== false) {
    yield {
      error: `No matching files. Patterns: ${context.filePatterns.join(" ")}`
    };
  }
}
async function* expandPatternsInternal(context) {
  const directoryIgnorer = context.argv.withNodeModules === true ? directoryIgnorerWithoutNodeModules : directoryIgnorerWithNodeModules;
  const globOptions = {
    dot: true,
    ignore: [...directoryIgnorer.ignorePatterns],
    followSymbolicLinks: false
  };
  const cwd3 = process.cwd();
  const entries = [];
  for (const pattern of context.filePatterns) {
    const absolutePath = path5.resolve(pattern);
    if (directoryIgnorer.shouldIgnore(absolutePath)) {
      continue;
    }
    const stat = await lstatSafe(absolutePath);
    if (stat) {
      if (stat.isSymbolicLink()) {
        if (context.argv.errorOnUnmatchedPattern !== false) {
          yield {
            error: `Explicitly specified pattern "${pattern}" is a symbolic link.`
          };
        } else {
          context.logger.debug(`Skipping pattern "${pattern}", as it is a symbolic link.`);
        }
      } else if (stat.isFile()) {
        entries.push({
          type: "file",
          glob: escapePathForGlob(fixWindowsSlashes(pattern)),
          input: pattern
        });
      } else if (stat.isDirectory()) {
        const relativePath = path5.relative(cwd3, absolutePath) || ".";
        const prefix = escapePathForGlob(fixWindowsSlashes(relativePath));
        entries.push({
          type: "dir",
          glob: `${prefix}/**/*`,
          input: pattern,
          ignoreUnknown: true
        });
      }
    } else if (pattern[0] === "!") {
      globOptions.ignore.push(fixWindowsSlashes(pattern.slice(1)));
    } else {
      entries.push({
        type: "glob",
        glob: fixWindowsSlashes(pattern),
        input: pattern
      });
    }
  }
  for (const {
    type,
    glob,
    input,
    ignoreUnknown
  } of entries) {
    let result;
    try {
      result = await fastGlob(glob, globOptions);
    } catch ({
      message
    }) {
      yield {
        error: `${errorMessages.globError[type]}: "${input}".
${message}`
      };
      continue;
    }
    if (result.length === 0) {
      if (context.argv.errorOnUnmatchedPattern !== false) {
        yield {
          error: `${errorMessages.emptyResults[type]}: "${input}".`
        };
      }
    } else {
      yield* sortPaths(result).map((filePath) => ({
        filePath,
        ignoreUnknown
      }));
    }
  }
}
var errorMessages = {
  globError: {
    file: "Unable to resolve file",
    dir: "Unable to expand directory",
    glob: "Unable to expand glob pattern"
  },
  emptyResults: {
    file: "Explicitly specified file was ignored due to negative glob patterns",
    dir: "No supported files were found in the directory",
    glob: "No files matching the pattern were found"
  }
};
function sortPaths(paths) {
  return paths.sort((a, b) => a.localeCompare(b));
}
function escapePathForGlob(path13) {
  return method_replace_all_default(
    /* OPTIONAL_OBJECT: false */
    0,
    method_replace_all_default(
      /* OPTIONAL_OBJECT: false */
      0,
      fastGlob.escapePath(
        method_replace_all_default(
          /* OPTIONAL_OBJECT: false */
          0,
          path13,
          "\\",
          "\0"
        )
        // Workaround for fast-glob#262 (part 1)
      ),
      "\\!",
      "@(!)"
    ),
    "\0",
    "@(\\\\)"
  );
}
var fixWindowsSlashes = normalizeToPosix;

// src/cli/find-cache-file.js
import fs4 from "fs/promises";
import os from "os";
import path9 from "path";

// node_modules/find-cache-directory/index.js
var import_common_path_prefix = __toESM(require_common_path_prefix(), 1);
import process3 from "process";
import path8 from "path";
import fs3 from "fs";

// node_modules/pkg-dir/index.js
import path7 from "path";

// node_modules/find-up-simple/index.js
import process2 from "process";
import { fileURLToPath } from "url";
import fs2 from "fs";
import path6 from "path";
var toPath = (urlOrPath) => urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
function findUpSync(name, {
  cwd: cwd3 = process2.cwd(),
  type = "file",
  stopAt
} = {}) {
  let directory = path6.resolve(toPath(cwd3) ?? "");
  const { root } = path6.parse(directory);
  stopAt = path6.resolve(directory, toPath(stopAt) ?? root);
  const isAbsoluteName = path6.isAbsolute(name);
  while (directory) {
    const filePath = isAbsoluteName ? name : path6.join(directory, name);
    try {
      const stats = fs2.statSync(filePath, { throwIfNoEntry: false });
      if (type === "file" && stats?.isFile() || type === "directory" && stats?.isDirectory()) {
        return filePath;
      }
    } catch {
    }
    if (directory === stopAt || directory === root) {
      break;
    }
    directory = path6.dirname(directory);
  }
}

// node_modules/pkg-dir/index.js
function packageDirectorySync({ cwd: cwd3 } = {}) {
  const filePath = findUpSync("package.json", { cwd: cwd3 });
  return filePath && path7.dirname(filePath);
}

// node_modules/find-cache-directory/index.js
var { env, cwd: cwd2 } = process3;
var isWritable = (path13) => {
  try {
    fs3.accessSync(path13, fs3.constants.W_OK);
    return true;
  } catch {
    return false;
  }
};
function useDirectory(directory, options) {
  if (options.create) {
    fs3.mkdirSync(directory, { recursive: true });
  }
  return directory;
}
function getNodeModuleDirectory(directory) {
  const nodeModules = path8.join(directory, "node_modules");
  if (!isWritable(nodeModules) && (fs3.existsSync(nodeModules) || !isWritable(path8.join(directory)))) {
    return;
  }
  return nodeModules;
}
function findCacheDirectory(options = {}) {
  if (env.CACHE_DIR && !["true", "false", "1", "0"].includes(env.CACHE_DIR)) {
    return useDirectory(path8.join(env.CACHE_DIR, options.name), options);
  }
  let { cwd: directory = cwd2(), files } = options;
  if (files) {
    if (!Array.isArray(files)) {
      throw new TypeError(`Expected \`files\` option to be an array, got \`${typeof files}\`.`);
    }
    directory = (0, import_common_path_prefix.default)(files.map((file) => path8.resolve(directory, file)));
  }
  directory = packageDirectorySync({ cwd: directory });
  if (!directory) {
    return;
  }
  const nodeModules = getNodeModuleDirectory(directory);
  if (!nodeModules) {
    return;
  }
  return useDirectory(path8.join(directory, "node_modules", ".cache", options.name), options);
}

// src/cli/find-cache-file.js
function findDefaultCacheFile() {
  const cacheDir = findCacheDirectory({ name: "prettier" }) ?? os.tmpdir();
  const cacheFilePath = path9.join(cacheDir, ".prettier-cache");
  return cacheFilePath;
}
async function findCacheFileFromOption(cacheLocation) {
  const cacheFile = path9.resolve(cacheLocation);
  const stat = await statSafe(cacheFile);
  if (stat) {
    if (stat.isDirectory()) {
      throw new Error(
        `Resolved --cache-location '${cacheFile}' is a directory`
      );
    }
    const data = await fs4.readFile(cacheFile, "utf8");
    if (!isJson(data)) {
      throw new Error(`'${cacheFile}' isn't a valid JSON file`);
    }
  }
  return cacheFile;
}
async function findCacheFile(cacheLocation) {
  if (!cacheLocation) {
    return findDefaultCacheFile();
  }
  const cacheFile = await findCacheFileFromOption(cacheLocation);
  return cacheFile;
}
var find_cache_file_default = findCacheFile;

// src/cli/format-results-cache.js
var import_fast_json_stable_stringify2 = __toESM(require_fast_json_stable_stringify(), 1);
import fs7 from "fs";

// node_modules/file-entry-cache/dist/index.js
import crypto2 from "crypto";
import fs6 from "fs";
import path11 from "path";

// node_modules/file-entry-cache/node_modules/flat-cache/dist/index.js
import fs5 from "fs";
import path10 from "path";

// node_modules/hookified/dist/node/index.js
var Eventified = class {
  _eventListeners;
  _maxListeners;
  _logger;
  _throwOnEmitError = false;
  _throwOnEmptyListeners = false;
  _errorEvent = "error";
  constructor(options) {
    this._eventListeners = /* @__PURE__ */ new Map();
    this._maxListeners = 100;
    this._logger = options?.logger;
    if (options?.throwOnEmitError !== void 0) {
      this._throwOnEmitError = options.throwOnEmitError;
    }
    if (options?.throwOnEmptyListeners !== void 0) {
      this._throwOnEmptyListeners = options.throwOnEmptyListeners;
    }
  }
  /**
   * Gets the logger
   * @returns {Logger}
   */
  get logger() {
    return this._logger;
  }
  /**
   * Sets the logger
   * @param {Logger} logger
   */
  set logger(logger) {
    this._logger = logger;
  }
  /**
   * Gets whether an error should be thrown when an emit throws an error. Default is false and only emits an error event.
   * @returns {boolean}
   */
  get throwOnEmitError() {
    return this._throwOnEmitError;
  }
  /**
   * Sets whether an error should be thrown when an emit throws an error. Default is false and only emits an error event.
   * @param {boolean} value
   */
  set throwOnEmitError(value) {
    this._throwOnEmitError = value;
  }
  /**
   * Gets whether an error should be thrown when emitting 'error' event with no listeners. Default is false.
   * @returns {boolean}
   */
  get throwOnEmptyListeners() {
    return this._throwOnEmptyListeners;
  }
  /**
   * Sets whether an error should be thrown when emitting 'error' event with no listeners. Default is false.
   * @param {boolean} value
   */
  set throwOnEmptyListeners(value) {
    this._throwOnEmptyListeners = value;
  }
  /**
   * Adds a handler function for a specific event that will run only once
   * @param {string | symbol} eventName
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  once(eventName, listener) {
    const onceListener = (...arguments_) => {
      this.off(eventName, onceListener);
      listener(...arguments_);
    };
    this.on(eventName, onceListener);
    return this;
  }
  /**
   * Gets the number of listeners for a specific event. If no event is provided, it returns the total number of listeners
   * @param {string} eventName The event name. Not required
   * @returns {number} The number of listeners
   */
  listenerCount(eventName) {
    if (eventName === void 0) {
      return this.getAllListeners().length;
    }
    const listeners = this._eventListeners.get(eventName);
    return listeners ? listeners.length : 0;
  }
  /**
   * Gets an array of event names
   * @returns {Array<string | symbol>} An array of event names
   */
  eventNames() {
    return [...this._eventListeners.keys()];
  }
  /**
   * Gets an array of listeners for a specific event. If no event is provided, it returns all listeners
   * @param {string} [event] (Optional) The event name
   * @returns {EventListener[]} An array of listeners
   */
  rawListeners(event) {
    if (event === void 0) {
      return this.getAllListeners();
    }
    return this._eventListeners.get(event) ?? [];
  }
  /**
   * Prepends a listener to the beginning of the listeners array for the specified event
   * @param {string | symbol} eventName
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  prependListener(eventName, listener) {
    const listeners = this._eventListeners.get(eventName) ?? [];
    listeners.unshift(listener);
    this._eventListeners.set(eventName, listeners);
    return this;
  }
  /**
   * Prepends a one-time listener to the beginning of the listeners array for the specified event
   * @param {string | symbol} eventName
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  prependOnceListener(eventName, listener) {
    const onceListener = (...arguments_) => {
      this.off(eventName, onceListener);
      listener(...arguments_);
    };
    this.prependListener(eventName, onceListener);
    return this;
  }
  /**
   * Gets the maximum number of listeners that can be added for a single event
   * @returns {number} The maximum number of listeners
   */
  maxListeners() {
    return this._maxListeners;
  }
  /**
   * Adds a listener for a specific event. It is an alias for the on() method
   * @param {string | symbol} event
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  addListener(event, listener) {
    this.on(event, listener);
    return this;
  }
  /**
   * Adds a listener for a specific event
   * @param {string | symbol} event
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  on(event, listener) {
    if (!this._eventListeners.has(event)) {
      this._eventListeners.set(event, []);
    }
    const listeners = this._eventListeners.get(event);
    if (listeners) {
      if (listeners.length >= this._maxListeners) {
        console.warn(
          `MaxListenersExceededWarning: Possible event memory leak detected. ${listeners.length + 1} ${event} listeners added. Use setMaxListeners() to increase limit.`
        );
      }
      listeners.push(listener);
    }
    return this;
  }
  /**
   * Removes a listener for a specific event. It is an alias for the off() method
   * @param {string | symbol} event
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  removeListener(event, listener) {
    this.off(event, listener);
    return this;
  }
  /**
   * Removes a listener for a specific event
   * @param {string | symbol} event
   * @param {EventListener} listener
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  off(event, listener) {
    const listeners = this._eventListeners.get(event) ?? [];
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    if (listeners.length === 0) {
      this._eventListeners.delete(event);
    }
    return this;
  }
  /**
   * Calls all listeners for a specific event
   * @param {string | symbol} event
   * @param arguments_ The arguments to pass to the listeners
   * @returns {boolean} Returns true if the event had listeners, false otherwise
   */
  emit(event, ...arguments_) {
    let result = false;
    const listeners = this._eventListeners.get(event);
    if (listeners && listeners.length > 0) {
      for (const listener of listeners) {
        listener(...arguments_);
        result = true;
      }
    }
    if (event === this._errorEvent) {
      const error = arguments_[0] instanceof Error ? arguments_[0] : new Error(`${arguments_[0]}`);
      if (this._throwOnEmitError && !result) {
        throw error;
      } else {
        if (this.listeners(this._errorEvent).length === 0 && this._throwOnEmptyListeners === true) {
          throw error;
        }
      }
    }
    return result;
  }
  /**
   * Gets all listeners for a specific event. If no event is provided, it returns all listeners
   * @param {string} [event] (Optional) The event name
   * @returns {EventListener[]} An array of listeners
   */
  listeners(event) {
    return this._eventListeners.get(event) ?? [];
  }
  /**
   * Removes all listeners for a specific event. If no event is provided, it removes all listeners
   * @param {string} [event] (Optional) The event name
   * @returns {IEventEmitter} returns the instance of the class for chaining
   */
  removeAllListeners(event) {
    if (event !== void 0) {
      this._eventListeners.delete(event);
    } else {
      this._eventListeners.clear();
    }
    return this;
  }
  /**
   * Sets the maximum number of listeners that can be added for a single event
   * @param {number} n The maximum number of listeners
   * @returns {void}
   */
  setMaxListeners(n) {
    this._maxListeners = n;
    for (const listeners of this._eventListeners.values()) {
      if (listeners.length > n) {
        listeners.splice(n);
      }
    }
  }
  /**
   * Gets all listeners
   * @returns {EventListener[]} An array of listeners
   */
  getAllListeners() {
    let result = [];
    for (const listeners of this._eventListeners.values()) {
      result = [...result, ...listeners];
    }
    return result;
  }
};
var Hookified = class extends Eventified {
  _hooks;
  _throwOnHookError = false;
  _enforceBeforeAfter = false;
  _deprecatedHooks;
  _allowDeprecated = true;
  constructor(options) {
    super({
      logger: options?.logger,
      throwOnEmitError: options?.throwOnEmitError,
      throwOnEmptyListeners: options?.throwOnEmptyListeners
    });
    this._hooks = /* @__PURE__ */ new Map();
    this._deprecatedHooks = options?.deprecatedHooks ? new Map(options.deprecatedHooks) : /* @__PURE__ */ new Map();
    if (options?.throwOnHookError !== void 0) {
      this._throwOnHookError = options.throwOnHookError;
    } else if (options?.throwHookErrors !== void 0) {
      this._throwOnHookError = options.throwHookErrors;
    }
    if (options?.enforceBeforeAfter !== void 0) {
      this._enforceBeforeAfter = options.enforceBeforeAfter;
    }
    if (options?.allowDeprecated !== void 0) {
      this._allowDeprecated = options.allowDeprecated;
    }
  }
  /**
   * Gets all hooks
   * @returns {Map<string, Hook[]>}
   */
  get hooks() {
    return this._hooks;
  }
  /**
   * Gets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
   * @returns {boolean}
   * @deprecated - this will be deprecated in version 2. Please use throwOnHookError.
   */
  get throwHookErrors() {
    return this._throwOnHookError;
  }
  /**
   * Sets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
   * @param {boolean} value
   * @deprecated - this will be deprecated in version 2. Please use throwOnHookError.
   */
  set throwHookErrors(value) {
    this._throwOnHookError = value;
  }
  /**
   * Gets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
   * @returns {boolean}
   */
  get throwOnHookError() {
    return this._throwOnHookError;
  }
  /**
   * Sets whether an error should be thrown when a hook throws an error. Default is false and only emits an error event.
   * @param {boolean} value
   */
  set throwOnHookError(value) {
    this._throwOnHookError = value;
  }
  /**
   * Gets whether to enforce that all hook names start with 'before' or 'after'. Default is false.
   * @returns {boolean}
   * @default false
   */
  get enforceBeforeAfter() {
    return this._enforceBeforeAfter;
  }
  /**
   * Sets whether to enforce that all hook names start with 'before' or 'after'. Default is false.
   * @param {boolean} value
   */
  set enforceBeforeAfter(value) {
    this._enforceBeforeAfter = value;
  }
  /**
   * Gets the map of deprecated hook names to deprecation messages.
   * @returns {Map<string, string>}
   */
  get deprecatedHooks() {
    return this._deprecatedHooks;
  }
  /**
   * Sets the map of deprecated hook names to deprecation messages.
   * @param {Map<string, string>} value
   */
  set deprecatedHooks(value) {
    this._deprecatedHooks = value;
  }
  /**
   * Gets whether deprecated hooks are allowed to be registered and executed. Default is true.
   * @returns {boolean}
   */
  get allowDeprecated() {
    return this._allowDeprecated;
  }
  /**
   * Sets whether deprecated hooks are allowed to be registered and executed. Default is true.
   * @param {boolean} value
   */
  set allowDeprecated(value) {
    this._allowDeprecated = value;
  }
  /**
   * Validates hook event name if enforceBeforeAfter is enabled
   * @param {string} event - The event name to validate
   * @throws {Error} If enforceBeforeAfter is true and event doesn't start with 'before' or 'after'
   */
  validateHookName(event) {
    if (this._enforceBeforeAfter) {
      const eventValue = event.trim().toLocaleLowerCase();
      if (!eventValue.startsWith("before") && !eventValue.startsWith("after")) {
        throw new Error(
          `Hook event "${event}" must start with "before" or "after" when enforceBeforeAfter is enabled`
        );
      }
    }
  }
  /**
   * Checks if a hook is deprecated and emits a warning if it is
   * @param {string} event - The event name to check
   * @returns {boolean} - Returns true if the hook should proceed, false if it should be blocked
   */
  checkDeprecatedHook(event) {
    if (this._deprecatedHooks.has(event)) {
      const message = this._deprecatedHooks.get(event);
      const warningMessage = `Hook "${event}" is deprecated${message ? `: ${message}` : ""}`;
      this.emit("warn", { hook: event, message: warningMessage });
      if (this.logger?.warn) {
        this.logger.warn(warningMessage);
      }
      return this._allowDeprecated;
    }
    return true;
  }
  /**
   * Adds a handler function for a specific event
   * @param {string} event
   * @param {Hook} handler - this can be async or sync
   * @returns {void}
   */
  onHook(event, handler) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const eventHandlers = this._hooks.get(event);
    if (eventHandlers) {
      eventHandlers.push(handler);
    } else {
      this._hooks.set(event, [handler]);
    }
  }
  /**
   * Adds a handler function for a specific event that runs before all other handlers
   * @param {HookEntry} hookEntry
   * @returns {void}
   */
  onHookEntry(hookEntry) {
    this.onHook(hookEntry.event, hookEntry.handler);
  }
  /**
   * Alias for onHook. This is provided for compatibility with other libraries that use the `addHook` method.
   * @param {string} event
   * @param {Hook} handler - this can be async or sync
   * @returns {void}
   */
  addHook(event, handler) {
    this.onHook(event, handler);
  }
  /**
   * Adds a handler function for a specific event
   * @param {Array<HookEntry>} hooks
   * @returns {void}
   */
  onHooks(hooks) {
    for (const hook of hooks) {
      this.onHook(hook.event, hook.handler);
    }
  }
  /**
   * Adds a handler function for a specific event that runs before all other handlers
   * @param {string} event
   * @param {Hook} handler - this can be async or sync
   * @returns {void}
   */
  prependHook(event, handler) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const eventHandlers = this._hooks.get(event);
    if (eventHandlers) {
      eventHandlers.unshift(handler);
    } else {
      this._hooks.set(event, [handler]);
    }
  }
  /**
   * Adds a handler that only executes once for a specific event before all other handlers
   * @param event
   * @param handler
   */
  prependOnceHook(event, handler) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const hook = async (...arguments_) => {
      this.removeHook(event, hook);
      return handler(...arguments_);
    };
    this.prependHook(event, hook);
  }
  /**
   * Adds a handler that only executes once for a specific event
   * @param event
   * @param handler
   */
  onceHook(event, handler) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const hook = async (...arguments_) => {
      this.removeHook(event, hook);
      return handler(...arguments_);
    };
    this.onHook(event, hook);
  }
  /**
   * Removes a handler function for a specific event
   * @param {string} event
   * @param {Hook} handler
   * @returns {void}
   */
  removeHook(event, handler) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const eventHandlers = this._hooks.get(event);
    if (eventHandlers) {
      const index = eventHandlers.indexOf(handler);
      if (index !== -1) {
        eventHandlers.splice(index, 1);
      }
    }
  }
  /**
   * Removes all handlers for a specific event
   * @param {Array<HookEntry>} hooks
   * @returns {void}
   */
  removeHooks(hooks) {
    for (const hook of hooks) {
      this.removeHook(hook.event, hook.handler);
    }
  }
  /**
   * Calls all handlers for a specific event
   * @param {string} event
   * @param {T[]} arguments_
   * @returns {Promise<void>}
   */
  async hook(event, ...arguments_) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return;
    }
    const eventHandlers = this._hooks.get(event);
    if (eventHandlers) {
      for (const handler of eventHandlers) {
        try {
          await handler(...arguments_);
        } catch (error) {
          const message = `${event}: ${error.message}`;
          this.emit("error", new Error(message));
          if (this.logger) {
            this.logger.error(message);
          }
          if (this._throwOnHookError) {
            throw new Error(message);
          }
        }
      }
    }
  }
  /**
   * Prepends the word `before` to your hook. Example is event is `test`, the before hook is `before:test`.
   * @param {string} event - The event name
   * @param {T[]} arguments_ - The arguments to pass to the hook
   */
  async beforeHook(event, ...arguments_) {
    await this.hook(`before:${event}`, ...arguments_);
  }
  /**
   * Prepends the word `after` to your hook. Example is event is `test`, the after hook is `after:test`.
   * @param {string} event - The event name
   * @param {T[]} arguments_ - The arguments to pass to the hook
   */
  async afterHook(event, ...arguments_) {
    await this.hook(`after:${event}`, ...arguments_);
  }
  /**
   * Calls all handlers for a specific event. This is an alias for `hook` and is provided for
   * compatibility with other libraries that use the `callHook` method.
   * @param {string} event
   * @param {T[]} arguments_
   * @returns {Promise<void>}
   */
  async callHook(event, ...arguments_) {
    await this.hook(event, ...arguments_);
  }
  /**
   * Gets all hooks for a specific event
   * @param {string} event
   * @returns {Hook[]}
   */
  getHooks(event) {
    this.validateHookName(event);
    if (!this.checkDeprecatedHook(event)) {
      return void 0;
    }
    return this._hooks.get(event);
  }
  /**
   * Removes all hooks
   * @returns {void}
   */
  clearHooks() {
    this._hooks.clear();
  }
};

// node_modules/hashery/dist/node/index.js
var CRC = class {
  get name() {
    return "crc32";
  }
  toHashSync(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof DataView) {
      bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    } else {
      const view = data;
      bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    const CRC32_POLYNOMIAL = 3988292384;
    let crc = 4294967295;
    for (let i = 0; i < bytes.length; i++) {
      crc = crc ^ bytes[i];
      for (let j = 0; j < 8; j++) {
        crc = crc >>> 1 ^ CRC32_POLYNOMIAL & -(crc & 1);
      }
    }
    crc = (crc ^ 4294967295) >>> 0;
    const hashHex = crc.toString(16).padStart(8, "0");
    return hashHex;
  }
  async toHash(data) {
    return this.toHashSync(data);
  }
};
var WebCrypto = class {
  _algorithm = "SHA-256";
  constructor(options) {
    if (options?.algorithm) {
      this._algorithm = options?.algorithm;
    }
  }
  get name() {
    return this._algorithm;
  }
  async toHash(data) {
    const hashBuffer = await crypto.subtle.digest(this._algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
    return hashHex;
  }
};
var DJB2 = class {
  /**
   * The name identifier for this hash provider.
   */
  get name() {
    return "djb2";
  }
  /**
   * Computes the DJB2 hash of the provided data synchronously.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns An 8-character lowercase hexadecimal string
   *
   * @example
   * ```typescript
   * const djb2 = new DJB2();
   * const data = new TextEncoder().encode('hello');
   * const hash = djb2.toHashSync(data);
   * console.log(hash); // "7c9df5ea"
   * ```
   */
  toHashSync(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof DataView) {
      bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    } else {
      const view = data;
      bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    let hash2 = 5381;
    for (let i = 0; i < bytes.length; i++) {
      hash2 = (hash2 << 5) + hash2 + bytes[i];
      hash2 = hash2 >>> 0;
    }
    const hashHex = hash2.toString(16).padStart(8, "0");
    return hashHex;
  }
  /**
   * Computes the DJB2 hash of the provided data.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns A Promise resolving to an 8-character lowercase hexadecimal string
   *
   * @example
   * ```typescript
   * const djb2 = new DJB2();
   * const data = new TextEncoder().encode('hello');
   * const hash = await djb2.toHash(data);
   * console.log(hash); // "7c9df5ea"
   * ```
   */
  async toHash(data) {
    return this.toHashSync(data);
  }
};
var FNV1 = class {
  /**
   * The name identifier for this hash provider.
   */
  get name() {
    return "fnv1";
  }
  /**
   * Computes the FNV-1 hash of the provided data synchronously.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns An 8-character lowercase hexadecimal string
   */
  toHashSync(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof DataView) {
      bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    } else {
      const view = data;
      bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    const FNV_OFFSET_BASIS = 2166136261;
    const FNV_PRIME = 16777619;
    let hash2 = FNV_OFFSET_BASIS;
    for (let i = 0; i < bytes.length; i++) {
      hash2 = hash2 * FNV_PRIME;
      hash2 = hash2 ^ bytes[i];
      hash2 = hash2 >>> 0;
    }
    const hashHex = hash2.toString(16).padStart(8, "0");
    return hashHex;
  }
  /**
   * Computes the FNV-1 hash of the provided data.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns A Promise resolving to an 8-character lowercase hexadecimal string
   */
  async toHash(data) {
    return this.toHashSync(data);
  }
};
var Murmer = class {
  _seed;
  /**
   * Creates a new Murmer instance.
   *
   * @param seed - Optional seed value for the hash (default: 0)
   */
  constructor(seed = 0) {
    this._seed = seed >>> 0;
  }
  /**
   * The name identifier for this hash provider.
   */
  get name() {
    return "murmer";
  }
  /**
   * Gets the current seed value used for hashing.
   */
  get seed() {
    return this._seed;
  }
  /**
   * Computes the Murmer 32-bit hash of the provided data synchronously.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns An 8-character lowercase hexadecimal string
   *
   * @example
   * ```typescript
   * const murmer = new Murmer();
   * const data = new TextEncoder().encode('hello');
   * const hash = murmer.toHashSync(data);
   * console.log(hash); // "248bfa47"
   * ```
   */
  toHashSync(data) {
    let bytes;
    if (data instanceof Uint8Array) {
      bytes = data;
    } else if (data instanceof ArrayBuffer) {
      bytes = new Uint8Array(data);
    } else if (data instanceof DataView) {
      bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    } else {
      const view = data;
      bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
    const c1 = 3432918353;
    const c2 = 461845907;
    const length = bytes.length;
    const nblocks = Math.floor(length / 4);
    let h1 = this._seed;
    for (let i = 0; i < nblocks; i++) {
      const index = i * 4;
      let k12 = bytes[index] & 255 | (bytes[index + 1] & 255) << 8 | (bytes[index + 2] & 255) << 16 | (bytes[index + 3] & 255) << 24;
      k12 = this._imul(k12, c1);
      k12 = this._rotl32(k12, 15);
      k12 = this._imul(k12, c2);
      h1 ^= k12;
      h1 = this._rotl32(h1, 13);
      h1 = this._imul(h1, 5) + 3864292196;
    }
    const tail = nblocks * 4;
    let k1 = 0;
    switch (length & 3) {
      case 3:
        k1 ^= (bytes[tail + 2] & 255) << 16;
      // fallthrough
      case 2:
        k1 ^= (bytes[tail + 1] & 255) << 8;
      // fallthrough
      case 1:
        k1 ^= bytes[tail] & 255;
        k1 = this._imul(k1, c1);
        k1 = this._rotl32(k1, 15);
        k1 = this._imul(k1, c2);
        h1 ^= k1;
    }
    h1 ^= length;
    h1 ^= h1 >>> 16;
    h1 = this._imul(h1, 2246822507);
    h1 ^= h1 >>> 13;
    h1 = this._imul(h1, 3266489909);
    h1 ^= h1 >>> 16;
    h1 = h1 >>> 0;
    const hashHex = h1.toString(16).padStart(8, "0");
    return hashHex;
  }
  /**
   * Computes the Murmer 32-bit hash of the provided data.
   *
   * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
   * @returns A Promise resolving to an 8-character lowercase hexadecimal string
   *
   * @example
   * ```typescript
   * const murmer = new Murmer();
   * const data = new TextEncoder().encode('hello');
   * const hash = await murmer.toHash(data);
   * console.log(hash); // "248bfa47"
   * ```
   */
  async toHash(data) {
    return this.toHashSync(data);
  }
  /**
   * 32-bit integer multiplication with proper overflow handling.
   * @private
   */
  _imul(a, b) {
    if (Math.imul) {
      return Math.imul(a, b);
    }
    const ah = a >>> 16 & 65535;
    const al = a & 65535;
    const bh = b >>> 16 & 65535;
    const bl = b & 65535;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
  }
  /**
   * Left rotate a 32-bit integer.
   * @private
   */
  _rotl32(x, r) {
    return x << r | x >>> 32 - r;
  }
};
var HashProviders = class {
  _providers = /* @__PURE__ */ new Map();
  _getFuzzy = true;
  /**
   * Creates a new HashProviders instance.
   * @param options - Optional configuration including initial providers to load
   * @example
   * ```ts
   * const providers = new HashProviders({
   *   providers: [{ name: 'custom', toHash: async (data) => '...' }]
   * });
   * ```
   */
  constructor(options) {
    if (options?.providers) {
      this.loadProviders(options?.providers);
    }
    if (options?.getFuzzy !== void 0) {
      this._getFuzzy = Boolean(options?.getFuzzy);
    }
  }
  /**
   * Loads multiple hash providers at once.
   * Each provider is added to the internal map using its name as the key.
   * @param providers - Array of HashProvider objects to load
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.loadProviders([
   *   { name: 'md5', toHash: async (data) => '...' },
   *   { name: 'sha1', toHash: async (data) => '...' }
   * ]);
   * ```
   */
  loadProviders(providers) {
    for (const provider of providers) {
      this._providers.set(provider.name, provider);
    }
  }
  /**
   * Gets the internal Map of all registered hash providers.
   * @returns Map of provider names to HashProvider objects
   */
  get providers() {
    return this._providers;
  }
  /**
   * Sets the internal Map of hash providers, replacing all existing providers.
   * @param providers - Map of provider names to HashProvider objects
   */
  set providers(providers) {
    this._providers = providers;
  }
  /**
   * Gets an array of all provider names.
   * @returns Array of provider names
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.add({ name: 'sha256', toHash: async (data) => '...' });
   * providers.add({ name: 'md5', toHash: async (data) => '...' });
   * console.log(providers.names); // ['sha256', 'md5']
   * ```
   */
  get names() {
    return Array.from(this._providers.keys());
  }
  /**
   * Gets a hash provider by name with optional fuzzy matching.
   *
   * Fuzzy matching (enabled by default) attempts to find providers by:
   * 1. Exact match (after trimming whitespace)
   * 2. Case-insensitive match (lowercase)
   * 3. Dash-removed match (e.g., "SHA-256" matches "sha256")
   *
   * @param name - The name of the provider to retrieve
   * @param options - Optional configuration for the get operation
   * @param options.fuzzy - Enable/disable fuzzy matching (overrides constructor setting)
   * @returns The HashProvider if found, undefined otherwise
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.add({ name: 'sha256', toHash: async (data) => '...' });
   *
   * // Exact match
   * const provider = providers.get('sha256');
   *
   * // Fuzzy match (case-insensitive)
   * const provider2 = providers.get('SHA256');
   *
   * // Fuzzy match (with dash)
   * const provider3 = providers.get('SHA-256');
   *
   * // Disable fuzzy matching
   * const provider4 = providers.get('SHA256', { fuzzy: false }); // returns undefined
   * ```
   */
  get(name, options) {
    const getFuzzy = options?.fuzzy ?? this._getFuzzy;
    name = name.trim();
    let result = this._providers.get(name);
    if (result === void 0 && getFuzzy === true) {
      name = name.toLowerCase();
      result = this._providers.get(name);
    }
    if (result === void 0 && getFuzzy === true) {
      name = method_replace_all_default(
        /* OPTIONAL_OBJECT: false */
        0,
        name,
        "-",
        ""
      );
      result = this._providers.get(name);
    }
    return result;
  }
  /**
   * Adds a single hash provider to the collection.
   * If a provider with the same name already exists, it will be replaced.
   * @param provider - The HashProvider object to add
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.add({
   *   name: 'custom-hash',
   *   toHash: async (data) => {
   *     // Custom hashing logic
   *     return 'hash-result';
   *   }
   * });
   * ```
   */
  add(provider) {
    this._providers.set(provider.name, provider);
  }
  /**
   * Removes a hash provider from the collection by name.
   * @param name - The name of the provider to remove
   * @returns true if the provider was found and removed, false otherwise
   * @example
   * ```ts
   * const providers = new HashProviders();
   * providers.add({ name: 'custom', toHash: async (data) => '...' });
   * const removed = providers.remove('custom'); // returns true
   * const removed2 = providers.remove('nonexistent'); // returns false
   * ```
   */
  remove(name) {
    return this._providers.delete(name);
  }
};
var Hashery = class extends Hookified {
  _parse = JSON.parse;
  _stringify = JSON.stringify;
  _providers = new HashProviders();
  _defaultAlgorithm = "SHA-256";
  _defaultAlgorithmSync = "djb2";
  constructor(options) {
    super(options);
    if (options?.parse) {
      this._parse = options.parse;
    }
    if (options?.stringify) {
      this._stringify = options.stringify;
    }
    if (options?.defaultAlgorithm) {
      this._defaultAlgorithm = options.defaultAlgorithm;
    }
    if (options?.defaultAlgorithmSync) {
      this._defaultAlgorithmSync = options.defaultAlgorithmSync;
    }
    this.loadProviders(options?.providers, {
      includeBase: options?.includeBase ?? true
    });
  }
  /**
   * Gets the parse function used to deserialize stored values.
   * @returns The current parse function (defaults to JSON.parse)
   */
  get parse() {
    return this._parse;
  }
  /**
   * Sets the parse function used to deserialize stored values.
   * @param value - The parse function to use for deserialization
   */
  set parse(value) {
    this._parse = value;
  }
  /**
   * Gets the stringify function used to serialize values for storage.
   * @returns The current stringify function (defaults to JSON.stringify)
   */
  get stringify() {
    return this._stringify;
  }
  /**
   * Sets the stringify function used to serialize values for storage.
   * @param value - The stringify function to use for serialization
   */
  set stringify(value) {
    this._stringify = value;
  }
  /**
   * Gets the HashProviders instance used to manage hash providers.
   * @returns The current HashProviders instance
   */
  get providers() {
    return this._providers;
  }
  /**
   * Sets the HashProviders instance used to manage hash providers.
   * @param value - The HashProviders instance to use
   */
  set providers(value) {
    this._providers = value;
  }
  /**
   * Gets the names of all registered hash algorithm providers.
   * @returns An array of provider names (e.g., ['SHA-256', 'SHA-384', 'SHA-512'])
   */
  get names() {
    return this._providers.names;
  }
  /**
   * Gets the default hash algorithm used when none is specified.
   * @returns The current default algorithm (defaults to 'SHA-256')
   */
  get defaultAlgorithm() {
    return this._defaultAlgorithm;
  }
  /**
   * Sets the default hash algorithm to use when none is specified.
   * @param value - The default algorithm to use (e.g., 'SHA-256', 'SHA-512', 'djb2')
   * @example
   * ```ts
   * const hashery = new Hashery();
   * hashery.defaultAlgorithm = 'SHA-512';
   *
   * // Now toHash will use SHA-512 by default
   * const hash = await hashery.toHash({ data: 'example' });
   * ```
   */
  set defaultAlgorithm(value) {
    this._defaultAlgorithm = value;
  }
  /**
   * Gets the default synchronous hash algorithm used when none is specified.
   * @returns The current default synchronous algorithm (defaults to 'djb2')
   */
  get defaultAlgorithmSync() {
    return this._defaultAlgorithmSync;
  }
  /**
   * Sets the default synchronous hash algorithm to use when none is specified.
   * @param value - The default synchronous algorithm to use (e.g., 'djb2', 'fnv1', 'murmer', 'crc32')
   * @example
   * ```ts
   * const hashery = new Hashery();
   * hashery.defaultAlgorithmSync = 'fnv1';
   *
   * // Now synchronous operations will use fnv1 by default
   * ```
   */
  set defaultAlgorithmSync(value) {
    this._defaultAlgorithmSync = value;
  }
  /**
   * Generates a cryptographic hash of the provided data using the Web Crypto API.
   * The data is first stringified using the configured stringify function, then hashed.
   *
   * @param data - The data to hash (will be stringified before hashing)
   * @param options - Optional configuration object
   * @param options.algorithm - The hash algorithm to use (defaults to 'SHA-256')
   * @param options.maxLength - Optional maximum length for the hash output
   * @returns A Promise that resolves to the hexadecimal string representation of the hash
   *
   * @example
   * ```ts
   * const hashery = new Hashery();
   * const hash = await hashery.toHash({ name: 'John', age: 30 });
   * console.log(hash); // "a1b2c3d4..."
   *
   * // Using a different algorithm
   * const hash512 = await hashery.toHash({ name: 'John' }, { algorithm: 'SHA-512' });
   * ```
   */
  async toHash(data, options) {
    const context = {
      data,
      algorithm: options?.algorithm ?? this._defaultAlgorithm,
      maxLength: options?.maxLength
    };
    await this.beforeHook("toHash", context);
    const stringified = this._stringify(context.data);
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(stringified);
    let provider = this._providers.get(context.algorithm);
    if (!provider) {
      provider = new WebCrypto({
        algorithm: this._defaultAlgorithm
      });
    }
    let hash2 = await provider.toHash(dataBuffer);
    if (options?.maxLength && hash2.length > options?.maxLength) {
      hash2 = hash2.substring(0, options.maxLength);
    }
    const result = {
      hash: hash2,
      data: context.data,
      algorithm: context.algorithm
    };
    await this.afterHook("toHash", result);
    return result.hash;
  }
  /**
   * Generates a deterministic number within a specified range based on the hash of the provided data.
   * This method uses the toHash function to create a consistent hash, then maps it to a number
   * between min and max (inclusive).
   *
   * @param data - The data to hash (will be stringified before hashing)
   * @param options - Configuration options (optional, defaults to min: 0, max: 100)
   * @param options.min - The minimum value of the range (inclusive, defaults to 0)
   * @param options.max - The maximum value of the range (inclusive, defaults to 100)
   * @param options.algorithm - The hash algorithm to use (defaults to 'SHA-256')
   * @param options.hashLength - Number of characters from hash to use for conversion (defaults to 16)
   * @returns A Promise that resolves to a number between min and max (inclusive)
   *
   * @example
   * ```ts
   * const hashery = new Hashery();
   * const num = await hashery.toNumber({ user: 'john' }); // Uses default min: 0, max: 100
   * console.log(num); // Always returns the same number for the same input, e.g., 42
   *
   * // Using custom range
   * const num2 = await hashery.toNumber({ user: 'john' }, { min: 1, max: 100 });
   *
   * // Using a different algorithm
   * const num512 = await hashery.toNumber({ user: 'john' }, { min: 0, max: 255, algorithm: 'SHA-512' });
   * ```
   */
  async toNumber(data, options = {}) {
    const {
      min = 0,
      max = 100,
      algorithm = this._defaultAlgorithm,
      hashLength = 16
    } = options;
    if (min > max) {
      throw new Error("min cannot be greater than max");
    }
    const hash2 = await this.toHash(data, {
      algorithm,
      maxLength: hashLength
    });
    const hashNumber = Number.parseInt(hash2, 16);
    const range = max - min + 1;
    const mapped = min + hashNumber % range;
    return mapped;
  }
  /**
   * Generates a hash of the provided data synchronously using a non-cryptographic hash algorithm.
   * The data is first stringified using the configured stringify function, then hashed.
   *
   * Note: This method only works with synchronous hash providers (djb2, fnv1, murmer, crc32).
   * WebCrypto algorithms (SHA-256, SHA-384, SHA-512) are not supported and will throw an error.
   *
   * @param data - The data to hash (will be stringified before hashing)
   * @param options - Optional configuration object
   * @param options.algorithm - The hash algorithm to use (defaults to 'djb2')
   * @param options.maxLength - Optional maximum length for the hash output
   * @returns The hexadecimal string representation of the hash
   *
   * @throws {Error} If the specified algorithm does not support synchronous hashing
   *
   * @example
   * ```ts
   * const hashery = new Hashery();
   * const hash = hashery.toHashSync({ name: 'John', age: 30 });
   * console.log(hash); // "7c9df5ea..." (djb2 hash)
   *
   * // Using a different algorithm
   * const hashFnv1 = hashery.toHashSync({ name: 'John' }, { algorithm: 'fnv1' });
   * ```
   */
  toHashSync(data, options) {
    const context = {
      data,
      algorithm: options?.algorithm ?? this._defaultAlgorithmSync,
      maxLength: options?.maxLength
    };
    this.beforeHook("toHashSync", context);
    const algorithm = context.algorithm;
    const stringified = this._stringify(context.data);
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(stringified);
    const provider = this._providers.get(algorithm);
    if (!provider) {
      throw new Error(`Hash provider '${algorithm}' not found`);
    }
    if (!provider.toHashSync) {
      throw new Error(`Hash provider '${algorithm}' does not support synchronous hashing. Use toHash() instead or choose a different algorithm (djb2, fnv1, murmer, crc32).`);
    }
    let hash2 = provider.toHashSync(dataBuffer);
    if (options?.maxLength && hash2.length > options?.maxLength) {
      hash2 = hash2.substring(0, options.maxLength);
    }
    const result = {
      hash: hash2,
      data: context.data,
      algorithm: context.algorithm
    };
    this.afterHook("toHashSync", result);
    return result.hash;
  }
  /**
   * Generates a deterministic number within a specified range based on the hash of the provided data synchronously.
   * This method uses the toHashSync function to create a consistent hash, then maps it to a number
   * between min and max (inclusive).
   *
   * Note: This method only works with synchronous hash providers (djb2, fnv1, murmer, crc32).
   *
   * @param data - The data to hash (will be stringified before hashing)
   * @param options - Configuration options (optional, defaults to min: 0, max: 100)
   * @param options.min - The minimum value of the range (inclusive, defaults to 0)
   * @param options.max - The maximum value of the range (inclusive, defaults to 100)
   * @param options.algorithm - The hash algorithm to use (defaults to 'djb2')
   * @param options.hashLength - Number of characters from hash to use for conversion (defaults to 16)
   * @returns A number between min and max (inclusive)
   *
   * @throws {Error} If the specified algorithm does not support synchronous hashing
   * @throws {Error} If min is greater than max
   *
   * @example
   * ```ts
   * const hashery = new Hashery();
   * const num = hashery.toNumberSync({ user: 'john' }); // Uses default min: 0, max: 100
   * console.log(num); // Always returns the same number for the same input, e.g., 42
   *
   * // Using custom range
   * const num2 = hashery.toNumberSync({ user: 'john' }, { min: 1, max: 100 });
   *
   * // Using a different algorithm
   * const numFnv1 = hashery.toNumberSync({ user: 'john' }, { min: 0, max: 255, algorithm: 'fnv1' });
   * ```
   */
  toNumberSync(data, options = {}) {
    const {
      min = 0,
      max = 100,
      algorithm = this._defaultAlgorithmSync,
      hashLength = 16
    } = options;
    if (min > max) {
      throw new Error("min cannot be greater than max");
    }
    const hash2 = this.toHashSync(data, {
      algorithm,
      maxLength: hashLength
    });
    const hashNumber = Number.parseInt(hash2, 16);
    const range = max - min + 1;
    const mapped = min + hashNumber % range;
    return mapped;
  }
  loadProviders(providers, options = {
    includeBase: true
  }) {
    if (providers) {
      for (const provider of providers) {
        this._providers.add(provider);
      }
    }
    if (options.includeBase) {
      this.providers.add(new WebCrypto({
        algorithm: "SHA-256"
      }));
      this.providers.add(new WebCrypto({
        algorithm: "SHA-384"
      }));
      this.providers.add(new WebCrypto({
        algorithm: "SHA-512"
      }));
      this.providers.add(new CRC());
      this.providers.add(new DJB2());
      this.providers.add(new FNV1());
      this.providers.add(new Murmer());
    }
  }
};

// node_modules/@cacheable/utils/dist/index.js
var shorthandToMilliseconds = (shorthand) => {
  let milliseconds;
  if (shorthand === void 0) {
    return void 0;
  }
  if (typeof shorthand === "number") {
    milliseconds = shorthand;
  } else {
    if (typeof shorthand !== "string") {
      return void 0;
    }
    shorthand = shorthand.trim();
    if (Number.isNaN(Number(shorthand))) {
      const match = /^([\d.]+)\s*(ms|s|m|h|hr|d)$/i.exec(shorthand);
      if (!match) {
        throw new Error(
          `Unsupported time format: "${shorthand}". Use 'ms', 's', 'm', 'h', 'hr', or 'd'.`
        );
      }
      const [, value, unit] = match;
      const numericValue = Number.parseFloat(value);
      const unitLower = unit.toLowerCase();
      switch (unitLower) {
        case "ms": {
          milliseconds = numericValue;
          break;
        }
        case "s": {
          milliseconds = numericValue * 1e3;
          break;
        }
        case "m": {
          milliseconds = numericValue * 1e3 * 60;
          break;
        }
        case "h": {
          milliseconds = numericValue * 1e3 * 60 * 60;
          break;
        }
        case "hr": {
          milliseconds = numericValue * 1e3 * 60 * 60;
          break;
        }
        case "d": {
          milliseconds = numericValue * 1e3 * 60 * 60 * 24;
          break;
        }
        /* v8 ignore next -- @preserve */
        default: {
          milliseconds = Number(shorthand);
        }
      }
    } else {
      milliseconds = Number(shorthand);
    }
  }
  return milliseconds;
};
var shorthandToTime = (shorthand, fromDate) => {
  fromDate ?? (fromDate = /* @__PURE__ */ new Date());
  const milliseconds = shorthandToMilliseconds(shorthand);
  if (milliseconds === void 0) {
    return fromDate.getTime();
  }
  return fromDate.getTime() + milliseconds;
};
var HashAlgorithm = /* @__PURE__ */ ((HashAlgorithm2) => {
  HashAlgorithm2["SHA256"] = "SHA-256";
  HashAlgorithm2["SHA384"] = "SHA-384";
  HashAlgorithm2["SHA512"] = "SHA-512";
  HashAlgorithm2["DJB2"] = "djb2";
  HashAlgorithm2["FNV1"] = "fnv1";
  HashAlgorithm2["MURMER"] = "murmer";
  HashAlgorithm2["CRC32"] = "crc32";
  return HashAlgorithm2;
})(HashAlgorithm || {});
function hashSync(object2, options = {
  algorithm: "djb2",
  serialize: JSON.stringify
}) {
  const algorithm = options?.algorithm ?? "djb2";
  const serialize = options?.serialize ?? JSON.stringify;
  const objectString = serialize(object2);
  const hashery = new Hashery();
  return hashery.toHashSync(objectString, { algorithm });
}
function hashToNumberSync(object2, options = {
  min: 0,
  max: 10,
  algorithm: "djb2",
  serialize: JSON.stringify
}) {
  const min = options?.min ?? 0;
  const max = options?.max ?? 10;
  const algorithm = options?.algorithm ?? "djb2";
  const serialize = options?.serialize ?? JSON.stringify;
  const hashLength = options?.hashLength ?? 16;
  if (min >= max) {
    throw new Error(
      `Invalid range: min (${min}) must be less than max (${max})`
    );
  }
  const objectString = serialize(object2);
  const hashery = new Hashery();
  return hashery.toNumberSync(objectString, {
    algorithm,
    min,
    max,
    hashLength
  });
}
function wrapSync(function_, options) {
  const { ttl, keyPrefix, cache, serialize } = options;
  return (...arguments_) => {
    let cacheKey = createWrapKey(function_, arguments_, {
      keyPrefix,
      serialize
    });
    if (options.createKey) {
      cacheKey = options.createKey(function_, arguments_, options);
    }
    let value = cache.get(cacheKey);
    if (value === void 0) {
      try {
        value = function_(...arguments_);
        cache.set(cacheKey, value, ttl);
      } catch (error) {
        cache.emit("error", error);
        if (options.cacheErrors) {
          cache.set(cacheKey, error, ttl);
        }
      }
    }
    return value;
  };
}
function createWrapKey(function_, arguments_, options) {
  const { keyPrefix, serialize } = options || {};
  if (!keyPrefix) {
    return `${function_.name}::${hashSync(arguments_, { serialize })}`;
  }
  return `${keyPrefix}::${function_.name}::${hashSync(arguments_, { serialize })}`;
}

// node_modules/@cacheable/memory/dist/index.js
var structuredClone = globalThis.structuredClone ?? ((value) => JSON.parse(JSON.stringify(value)));
var ListNode = class {
  value;
  prev = void 0;
  next = void 0;
  constructor(value) {
    this.value = value;
  }
};
var DoublyLinkedList = class {
  head = void 0;
  tail = void 0;
  nodesMap = /* @__PURE__ */ new Map();
  // Add a new node to the front (most recently used)
  addToFront(value) {
    const newNode = new ListNode(value);
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }
    this.nodesMap.set(value, newNode);
  }
  // Move an existing node to the front (most recently used)
  moveToFront(value) {
    const node = this.nodesMap.get(value);
    if (!node || this.head === node) {
      return;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    node.prev = void 0;
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    this.tail ?? (this.tail = node);
  }
  // Get the oldest node (tail)
  getOldest() {
    return this.tail ? this.tail.value : void 0;
  }
  // Remove the oldest node (tail)
  removeOldest() {
    if (!this.tail) {
      return void 0;
    }
    const oldValue = this.tail.value;
    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = void 0;
    } else {
      this.head = this.tail = void 0;
    }
    this.nodesMap.delete(oldValue);
    return oldValue;
  }
  get size() {
    return this.nodesMap.size;
  }
};
var defaultStoreHashSize = 16;
var maximumMapSize = 16777216;
var CacheableMemory = class extends Hookified {
  _lru = new DoublyLinkedList();
  _storeHashSize = defaultStoreHashSize;
  _storeHashAlgorithm = HashAlgorithm.DJB2;
  // Default is djb2Hash
  _store = Array.from(
    { length: this._storeHashSize },
    () => /* @__PURE__ */ new Map()
  );
  _ttl;
  // Turned off by default
  _useClone = true;
  // Turned on by default
  _lruSize = 0;
  // Turned off by default
  _checkInterval = 0;
  // Turned off by default
  _interval = 0;
  // Turned off by default
  /**
   * @constructor
   * @param {CacheableMemoryOptions} [options] - The options for the CacheableMemory
   */
  constructor(options) {
    super();
    if (options?.ttl) {
      this.setTtl(options.ttl);
    }
    if (options?.useClone !== void 0) {
      this._useClone = options.useClone;
    }
    if (options?.storeHashSize && options.storeHashSize > 0) {
      this._storeHashSize = options.storeHashSize;
    }
    if (options?.lruSize) {
      if (options.lruSize > maximumMapSize) {
        this.emit(
          "error",
          new Error(
            `LRU size cannot be larger than ${maximumMapSize} due to Map limitations.`
          )
        );
      } else {
        this._lruSize = options.lruSize;
      }
    }
    if (options?.checkInterval) {
      this._checkInterval = options.checkInterval;
    }
    if (options?.storeHashAlgorithm) {
      this._storeHashAlgorithm = options.storeHashAlgorithm;
    }
    this._store = Array.from(
      { length: this._storeHashSize },
      () => /* @__PURE__ */ new Map()
    );
    this.startIntervalCheck();
  }
  /**
   * Gets the time-to-live
   * @returns {number|string|undefined} - The time-to-live in miliseconds or a human-readable format. If undefined, it will not have a time-to-live.
   */
  get ttl() {
    return this._ttl;
  }
  /**
   * Sets the time-to-live
   * @param {number|string|undefined} value - The time-to-live in miliseconds or a human-readable format (example '1s' = 1 second, '1h' = 1 hour). If undefined, it will not have a time-to-live.
   */
  set ttl(value) {
    this.setTtl(value);
  }
  /**
   * Gets whether to use clone
   * @returns {boolean} - If true, it will clone the value before returning it. If false, it will return the value directly. Default is true.
   */
  get useClone() {
    return this._useClone;
  }
  /**
   * Sets whether to use clone
   * @param {boolean} value - If true, it will clone the value before returning it. If false, it will return the value directly. Default is true.
   */
  set useClone(value) {
    this._useClone = value;
  }
  /**
   * Gets the size of the LRU cache
   * @returns {number} - The size of the LRU cache. If set to 0, it will not use LRU cache. Default is 0. If you are using LRU then the limit is based on Map() size 17mm.
   */
  get lruSize() {
    return this._lruSize;
  }
  /**
   * Sets the size of the LRU cache
   * @param {number} value - The size of the LRU cache. If set to 0, it will not use LRU cache. Default is 0. If you are using LRU then the limit is based on Map() size 17mm.
   */
  set lruSize(value) {
    if (value > maximumMapSize) {
      this.emit(
        "error",
        new Error(
          `LRU size cannot be larger than ${maximumMapSize} due to Map limitations.`
        )
      );
      return;
    }
    this._lruSize = value;
    if (this._lruSize === 0) {
      this._lru = new DoublyLinkedList();
      return;
    }
    this.lruResize();
  }
  /**
   * Gets the check interval
   * @returns {number} - The interval to check for expired items. If set to 0, it will not check for expired items. Default is 0.
   */
  get checkInterval() {
    return this._checkInterval;
  }
  /**
   * Sets the check interval
   * @param {number} value - The interval to check for expired items. If set to 0, it will not check for expired items. Default is 0.
   */
  set checkInterval(value) {
    this._checkInterval = value;
  }
  /**
   * Gets the size of the cache
   * @returns {number} - The size of the cache
   */
  get size() {
    let size = 0;
    for (const store of this._store) {
      size += store.size;
    }
    return size;
  }
  /**
   * Gets the number of hash stores
   * @returns {number} - The number of hash stores
   */
  get storeHashSize() {
    return this._storeHashSize;
  }
  /**
   * Sets the number of hash stores. This will recreate the store and all data will be cleared
   * @param {number} value - The number of hash stores
   */
  set storeHashSize(value) {
    if (value === this._storeHashSize) {
      return;
    }
    this._storeHashSize = value;
    this._store = Array.from(
      { length: this._storeHashSize },
      () => /* @__PURE__ */ new Map()
    );
  }
  /**
   * Gets the store hash algorithm
   * @returns {HashAlgorithm | StoreHashAlgorithmFunction} - The store hash algorithm
   */
  get storeHashAlgorithm() {
    return this._storeHashAlgorithm;
  }
  /**
   * Sets the store hash algorithm. This will recreate the store and all data will be cleared
   * @param {HashAlgorithm | HashAlgorithmFunction} value - The store hash algorithm
   */
  set storeHashAlgorithm(value) {
    this._storeHashAlgorithm = value;
  }
  /**
   * Gets the keys
   * @returns {IterableIterator<string>} - The keys
   */
  get keys() {
    const keys2 = [];
    for (const store of this._store) {
      for (const key of store.keys()) {
        const item = store.get(key);
        if (item && this.hasExpired(item)) {
          store.delete(key);
          continue;
        }
        keys2.push(key);
      }
    }
    return keys2.values();
  }
  /**
   * Gets the items
   * @returns {IterableIterator<CacheableStoreItem>} - The items
   */
  get items() {
    const items = [];
    for (const store of this._store) {
      for (const item of store.values()) {
        if (this.hasExpired(item)) {
          store.delete(item.key);
          continue;
        }
        items.push(item);
      }
    }
    return items.values();
  }
  /**
   * Gets the store
   * @returns {Array<Map<string, CacheableStoreItem>>} - The store
   */
  get store() {
    return this._store;
  }
  /**
   * Gets the value of the key
   * @param {string} key - The key to get the value
   * @returns {T | undefined} - The value of the key
   */
  get(key) {
    const store = this.getStore(key);
    const item = store.get(key);
    if (!item) {
      return void 0;
    }
    if (item.expires && Date.now() > item.expires) {
      store.delete(key);
      return void 0;
    }
    this.lruMoveToFront(key);
    if (!this._useClone) {
      return item.value;
    }
    return this.clone(item.value);
  }
  /**
   * Gets the values of the keys
   * @param {string[]} keys - The keys to get the values
   * @returns {T[]} - The values of the keys
   */
  getMany(keys2) {
    const result = [];
    for (const key of keys2) {
      result.push(this.get(key));
    }
    return result;
  }
  /**
   * Gets the raw value of the key
   * @param {string} key - The key to get the value
   * @returns {CacheableStoreItem | undefined} - The raw value of the key
   */
  getRaw(key) {
    const store = this.getStore(key);
    const item = store.get(key);
    if (!item) {
      return void 0;
    }
    if (item.expires && item.expires && Date.now() > item.expires) {
      store.delete(key);
      return void 0;
    }
    this.lruMoveToFront(key);
    return item;
  }
  /**
   * Gets the raw values of the keys
   * @param {string[]} keys - The keys to get the values
   * @returns {CacheableStoreItem[]} - The raw values of the keys
   */
  getManyRaw(keys2) {
    const result = [];
    for (const key of keys2) {
      result.push(this.getRaw(key));
    }
    return result;
  }
  /**
   * Sets the value of the key
   * @param {string} key - The key to set the value
   * @param {any} value - The value to set
   * @param {number|string|SetOptions} [ttl] - Time to Live - If you set a number it is miliseconds, if you set a string it is a human-readable.
   * If you want to set expire directly you can do that by setting the expire property in the SetOptions.
   * If you set undefined, it will use the default time-to-live. If both are undefined then it will not have a time-to-live.
   * @returns {void}
   */
  set(key, value, ttl) {
    const store = this.getStore(key);
    let expires;
    if (ttl !== void 0 || this._ttl !== void 0) {
      if (typeof ttl === "object") {
        if (ttl.expire) {
          expires = typeof ttl.expire === "number" ? ttl.expire : ttl.expire.getTime();
        }
        if (ttl.ttl) {
          const finalTtl = shorthandToTime(ttl.ttl);
          if (finalTtl !== void 0) {
            expires = finalTtl;
          }
        }
      } else {
        const finalTtl = shorthandToTime(ttl ?? this._ttl);
        if (finalTtl !== void 0) {
          expires = finalTtl;
        }
      }
    }
    if (this._lruSize > 0) {
      if (store.has(key)) {
        this.lruMoveToFront(key);
      } else {
        this.lruAddToFront(key);
        if (this._lru.size > this._lruSize) {
          const oldestKey = this._lru.getOldest();
          if (oldestKey) {
            this._lru.removeOldest();
            this.delete(oldestKey);
          }
        }
      }
    }
    const item = { key, value, expires };
    store.set(key, item);
  }
  /**
   * Sets the values of the keys
   * @param {CacheableItem[]} items - The items to set
   * @returns {void}
   */
  setMany(items) {
    for (const item of items) {
      this.set(item.key, item.value, item.ttl);
    }
  }
  /**
   * Checks if the key exists
   * @param {string} key - The key to check
   * @returns {boolean} - If true, the key exists. If false, the key does not exist.
   */
  has(key) {
    const item = this.get(key);
    return Boolean(item);
  }
  /**
   * @function hasMany
   * @param {string[]} keys - The keys to check
   * @returns {boolean[]} - If true, the key exists. If false, the key does not exist.
   */
  hasMany(keys2) {
    const result = [];
    for (const key of keys2) {
      const item = this.get(key);
      result.push(Boolean(item));
    }
    return result;
  }
  /**
   * Take will get the key and delete the entry from cache
   * @param {string} key - The key to take
   * @returns {T | undefined} - The value of the key
   */
  take(key) {
    const item = this.get(key);
    if (!item) {
      return void 0;
    }
    this.delete(key);
    return item;
  }
  /**
   * TakeMany will get the keys and delete the entries from cache
   * @param {string[]} keys - The keys to take
   * @returns {T[]} - The values of the keys
   */
  takeMany(keys2) {
    const result = [];
    for (const key of keys2) {
      result.push(this.take(key));
    }
    return result;
  }
  /**
   * Delete the key
   * @param {string} key - The key to delete
   * @returns {void}
   */
  delete(key) {
    const store = this.getStore(key);
    store.delete(key);
  }
  /**
   * Delete the keys
   * @param {string[]} keys - The keys to delete
   * @returns {void}
   */
  deleteMany(keys2) {
    for (const key of keys2) {
      this.delete(key);
    }
  }
  /**
   * Clear the cache
   * @returns {void}
   */
  clear() {
    this._store = Array.from(
      { length: this._storeHashSize },
      () => /* @__PURE__ */ new Map()
    );
    this._lru = new DoublyLinkedList();
  }
  /**
   * Get the store based on the key (internal use)
   * @param {string} key - The key to get the store
   * @returns {CacheableHashStore} - The store
   */
  getStore(key) {
    var _a;
    const hash2 = this.getKeyStoreHash(key);
    (_a = this._store)[hash2] || (_a[hash2] = /* @__PURE__ */ new Map());
    return this._store[hash2];
  }
  /**
   * Hash the key for which store to go to (internal use)
   * @param {string} key - The key to hash
   * Available algorithms are: SHA256, SHA1, MD5, and djb2Hash.
   * @returns {number} - The hashed key as a number
   */
  getKeyStoreHash(key) {
    if (this._store.length === 1) {
      return 0;
    }
    if (typeof this._storeHashAlgorithm === "function") {
      return this._storeHashAlgorithm(key, this._storeHashSize);
    }
    const storeHashSize = this._storeHashSize - 1;
    const hash2 = hashToNumberSync(key, {
      min: 0,
      max: storeHashSize,
      algorithm: this._storeHashAlgorithm
    });
    return hash2;
  }
  /**
   * Clone the value. This is for internal use
   * @param {any} value - The value to clone
   * @returns {any} - The cloned value
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  clone(value) {
    if (this.isPrimitive(value)) {
      return value;
    }
    return structuredClone(value);
  }
  /**
   * Add to the front of the LRU cache. This is for internal use
   * @param {string} key - The key to add to the front
   * @returns {void}
   */
  lruAddToFront(key) {
    if (this._lruSize === 0) {
      return;
    }
    this._lru.addToFront(key);
  }
  /**
   * Move to the front of the LRU cache. This is for internal use
   * @param {string} key - The key to move to the front
   * @returns {void}
   */
  lruMoveToFront(key) {
    if (this._lruSize === 0) {
      return;
    }
    this._lru.moveToFront(key);
  }
  /**
   * Resize the LRU cache. This is for internal use.
   * @returns {void}
   */
  lruResize() {
    while (this._lru.size > this._lruSize) {
      const oldestKey = this._lru.getOldest();
      if (oldestKey) {
        this._lru.removeOldest();
        this.delete(oldestKey);
      }
    }
  }
  /**
   * Check for expiration. This is for internal use
   * @returns {void}
   */
  checkExpiration() {
    for (const store of this._store) {
      for (const item of store.values()) {
        if (item.expires && Date.now() > item.expires) {
          store.delete(item.key);
        }
      }
    }
  }
  /**
   * Start the interval check. This is for internal use
   * @returns {void}
   */
  startIntervalCheck() {
    if (this._checkInterval > 0) {
      if (this._interval) {
        clearInterval(this._interval);
      }
      this._interval = setInterval(() => {
        this.checkExpiration();
      }, this._checkInterval).unref();
    }
  }
  /**
   * Stop the interval check. This is for internal use
   * @returns {void}
   */
  stopIntervalCheck() {
    if (this._interval) {
      clearInterval(this._interval);
    }
    this._interval = 0;
    this._checkInterval = 0;
  }
  /**
   * Wrap the function for caching
   * @param {Function} function_ - The function to wrap
   * @param {Object} [options] - The options to wrap
   * @returns {Function} - The wrapped function
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  wrap(function_, options) {
    const wrapOptions = {
      ttl: options?.ttl ?? this._ttl,
      keyPrefix: options?.keyPrefix,
      createKey: options?.createKey,
      cache: this
    };
    return wrapSync(function_, wrapOptions);
  }
  // biome-ignore lint/suspicious/noExplicitAny: type format
  isPrimitive(value) {
    const result = false;
    if (value === null || value === void 0) {
      return true;
    }
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return true;
    }
    return result;
  }
  setTtl(ttl) {
    if (typeof ttl === "string" || ttl === void 0) {
      this._ttl = ttl;
    } else if (ttl > 0) {
      this._ttl = ttl;
    } else {
      this._ttl = void 0;
    }
  }
  hasExpired(item) {
    if (item.expires && Date.now() > item.expires) {
      return true;
    }
    return false;
  }
};

// node_modules/flatted/esm/index.js
var { parse: $parse, stringify: $stringify } = JSON;
var { keys } = Object;
var Primitive = String;
var primitive = "string";
var ignore = {};
var object = "object";
var noop = (_2, value) => value;
var primitives = (value) => value instanceof Primitive ? Primitive(value) : value;
var Primitives = (_2, value) => typeof value === primitive ? new Primitive(value) : value;
var revive = (input, parsed, output, $) => {
  const lazy = [];
  for (let ke = keys(output), { length } = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({ k, a: [input, parsed, tmp, $] });
      } else
        output[k] = $.call(output, k, tmp);
    } else if (output[k] !== ignore)
      output[k] = $.call(output, k, value);
  }
  for (let { length } = lazy, i = 0; i < length; i++) {
    const { k, a } = lazy[i];
    output[k] = $.call(output, k, revive.apply(null, a));
  }
  return output;
};
var set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};
var parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ? revive(input, /* @__PURE__ */ new Set(), value, $) : value;
  return $.call({ "": tmp }, "", tmp);
};
var stringify2 = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ? (k, v) => k === "" || -1 < replacer.indexOf(k) ? v : void 0 : replacer || noop;
  const known = /* @__PURE__ */ new Map();
  const input = [];
  const output = [];
  let i = +set(known, input, $.call({ "": value }, "", value));
  let firstRun = !i;
  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }
  return "[" + output.join(",") + "]";
  function replace(key, value2) {
    if (firstRun) {
      firstRun = !firstRun;
      return value2;
    }
    const after = $.call(this, key, value2);
    switch (typeof after) {
      case object:
        if (after === null) return after;
      case primitive:
        return known.get(after) || set(known, input, after);
    }
    return after;
  }
};

// node_modules/file-entry-cache/node_modules/flat-cache/dist/index.js
var FlatCache = class extends Hookified {
  _cache = new CacheableMemory();
  _cacheDir = ".cache";
  _cacheId = "cache1";
  _persistInterval = 0;
  _persistTimer;
  _changesSinceLastSave = false;
  _parse = parse;
  _stringify = stringify2;
  constructor(options) {
    super();
    if (options) {
      this._cache = new CacheableMemory({
        ttl: options.ttl,
        useClone: options.useClone,
        lruSize: options.lruSize,
        checkInterval: options.expirationInterval
      });
    }
    if (options?.cacheDir) {
      this._cacheDir = options.cacheDir;
    }
    if (options?.cacheId) {
      this._cacheId = options.cacheId;
    }
    if (options?.persistInterval) {
      this._persistInterval = options.persistInterval;
      this.startAutoPersist();
    }
    if (options?.deserialize) {
      this._parse = options.deserialize;
    }
    if (options?.serialize) {
      this._stringify = options.serialize;
    }
  }
  /**
   * The cache object
   * @property cache
   * @type {CacheableMemory}
   */
  get cache() {
    return this._cache;
  }
  /**
   * The cache directory
   * @property cacheDir
   * @type {String}
   * @default '.cache'
   */
  get cacheDir() {
    return this._cacheDir;
  }
  /**
   * Set the cache directory
   * @property cacheDir
   * @type {String}
   * @default '.cache'
   */
  set cacheDir(value) {
    this._cacheDir = value;
  }
  /**
   * The cache id
   * @property cacheId
   * @type {String}
   * @default 'cache1'
   */
  get cacheId() {
    return this._cacheId;
  }
  /**
   * Set the cache id
   * @property cacheId
   * @type {String}
   * @default 'cache1'
   */
  set cacheId(value) {
    this._cacheId = value;
  }
  /**
   * The flag to indicate if there are changes since the last save
   * @property changesSinceLastSave
   * @type {Boolean}
   * @default false
   */
  get changesSinceLastSave() {
    return this._changesSinceLastSave;
  }
  /**
   * The interval to persist the cache to disk. 0 means no timed persistence
   * @property persistInterval
   * @type {Number}
   * @default 0
   */
  get persistInterval() {
    return this._persistInterval;
  }
  /**
   * Set the interval to persist the cache to disk. 0 means no timed persistence
   * @property persistInterval
   * @type {Number}
   * @default 0
   */
  set persistInterval(value) {
    this._persistInterval = value;
  }
  /**
   * Load a cache identified by the given Id. If the element does not exists, then initialize an empty
   * cache storage. If specified `cacheDir` will be used as the directory to persist the data to. If omitted
   * then the cache module directory `.cacheDir` will be used instead
   *
   * @method load
   * @param cacheId {String} the id of the cache, would also be used as the name of the file cache
   * @param cacheDir {String} directory for the cache entry
   */
  load(cacheId, cacheDir) {
    try {
      const filePath = path10.resolve(
        `${cacheDir ?? this._cacheDir}/${cacheId ?? this._cacheId}`
      );
      this.loadFile(filePath);
      this.emit(
        "load"
        /* LOAD */
      );
    } catch (error) {
      this.emit("error", error);
    }
  }
  /**
   * Load the cache from the provided file
   * @method loadFile
   * @param  {String} pathToFile the path to the file containing the info for the cache
   */
  loadFile(pathToFile) {
    if (fs5.existsSync(pathToFile)) {
      const data = fs5.readFileSync(pathToFile, "utf8");
      const items = this._parse(data);
      if (Array.isArray(items)) {
        for (const item of items) {
          if (item && typeof item === "object" && "key" in item) {
            if (item.expires) {
              this._cache.set(item.key, item.value, { expire: item.expires });
            } else if (item.timestamp) {
              this._cache.set(item.key, item.value, { expire: item.timestamp });
            } else {
              this._cache.set(item.key, item.value);
            }
          }
        }
      } else {
        for (const key of Object.keys(items)) {
          const item = items[key];
          if (item && typeof item === "object" && "key" in item) {
            this._cache.set(item.key, item.value, {
              expire: item.expires
            });
          } else {
            if (item && typeof item === "object" && item.timestamp) {
              this._cache.set(key, item, { expire: item.timestamp });
            } else {
              this._cache.set(key, item);
            }
          }
        }
      }
      this._changesSinceLastSave = true;
    }
  }
  loadFileStream(pathToFile, onProgress, onEnd, onError) {
    if (fs5.existsSync(pathToFile)) {
      const stats = fs5.statSync(pathToFile);
      const total = stats.size;
      let loaded = 0;
      let streamData = "";
      const readStream = fs5.createReadStream(pathToFile, { encoding: "utf8" });
      readStream.on("data", (chunk) => {
        loaded += chunk.length;
        streamData += chunk;
        onProgress(loaded, total);
      });
      readStream.on("end", () => {
        const items = this._parse(streamData);
        for (const key of Object.keys(items)) {
          this._cache.set(items[key].key, items[key].value, {
            expire: items[key].expires
          });
        }
        this._changesSinceLastSave = true;
        onEnd();
      });
      readStream.on("error", (error) => {
        this.emit("error", error);
        if (onError) {
          onError(error);
        }
      });
    } else {
      const error = new Error(`Cache file ${pathToFile} does not exist`);
      this.emit("error", error);
      if (onError) {
        onError(error);
      }
    }
  }
  /**
   * Returns the entire persisted object
   * @method all
   * @returns {*}
   */
  all() {
    const result = {};
    const items = [...this._cache.items];
    for (const item of items) {
      result[item.key] = item.value;
    }
    return result;
  }
  /**
   * Returns an array with all the items in the cache { key, value, expires }
   * @method items
   * @returns {Array}
   */
  // biome-ignore lint/suspicious/noExplicitAny: cache items can store any value
  get items() {
    return [...this._cache.items];
  }
  /**
   * Returns the path to the file where the cache is persisted
   * @method cacheFilePath
   * @returns {String}
   */
  get cacheFilePath() {
    return path10.resolve(`${this._cacheDir}/${this._cacheId}`);
  }
  /**
   * Returns the path to the cache directory
   * @method cacheDirPath
   * @returns {String}
   */
  get cacheDirPath() {
    return path10.resolve(this._cacheDir);
  }
  /**
   * Returns an array with all the keys in the cache
   * @method keys
   * @returns {Array}
   */
  keys() {
    return [...this._cache.keys];
  }
  /**
   * (Legacy) set key method. This method will be deprecated in the future
   * @method setKey
   * @param key {string} the key to set
   * @param value {object} the value of the key. Could be any object that can be serialized with JSON.stringify
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  setKey(key, value, ttl) {
    this.set(key, value, ttl);
  }
  /**
   * Sets a key to a given value
   * @method set
   * @param key {string} the key to set
   * @param value {object} the value of the key. Could be any object that can be serialized with JSON.stringify
   * @param [ttl] {number} the time to live in milliseconds
   */
  // biome-ignore lint/suspicious/noExplicitAny: type format
  set(key, value, ttl) {
    this._cache.set(key, value, ttl);
    this._changesSinceLastSave = true;
  }
  /**
   * (Legacy) Remove a given key from the cache. This method will be deprecated in the future
   * @method removeKey
   * @param key {String} the key to remove from the object
   */
  removeKey(key) {
    this.delete(key);
  }
  /**
   * Remove a given key from the cache
   * @method delete
   * @param key {String} the key to remove from the object
   */
  delete(key) {
    this._cache.delete(key);
    this._changesSinceLastSave = true;
    this.emit("delete", key);
  }
  /**
   * (Legacy) Return the value of the provided key. This method will be deprecated in the future
   * @method getKey<T>
   * @param key {String} the name of the key to retrieve
   * @returns {*} at T the value from the key
   */
  getKey(key) {
    return this.get(key);
  }
  /**
   * Return the value of the provided key
   * @method get<T>
   * @param key {String} the name of the key to retrieve
   * @returns {*} at T the value from the key
   */
  get(key) {
    return this._cache.get(key);
  }
  /**
   * Clear the cache and save the state to disk
   * @method clear
   */
  clear() {
    try {
      this._cache.clear();
      this._changesSinceLastSave = true;
      this.save();
      this.emit(
        "clear"
        /* CLEAR */
      );
    } catch (error) {
      this.emit("error", error);
    }
  }
  /**
   * Save the state of the cache identified by the docId to disk
   * as a JSON structure
   * @method save
   */
  save(force = false) {
    try {
      if (this._changesSinceLastSave || force) {
        const filePath = this.cacheFilePath;
        const items = [...this._cache.items];
        const data = this._stringify(items);
        if (!fs5.existsSync(this._cacheDir)) {
          fs5.mkdirSync(this._cacheDir, { recursive: true });
        }
        fs5.writeFileSync(filePath, data);
        this._changesSinceLastSave = false;
        this.emit(
          "save"
          /* SAVE */
        );
      }
    } catch (error) {
      this.emit("error", error);
    }
  }
  /**
   * Remove the file where the cache is persisted
   * @method removeCacheFile
   * @return {Boolean} true or false if the file was successfully deleted
   */
  removeCacheFile() {
    try {
      if (fs5.existsSync(this.cacheFilePath)) {
        fs5.rmSync(this.cacheFilePath);
        return true;
      }
    } catch (error) {
      this.emit("error", error);
    }
    return false;
  }
  /**
   * Destroy the cache. This will remove the directory, file, and memory cache
   * @method destroy
   * @param [includeCacheDir=false] {Boolean} if true, the cache directory will be removed
   * @return {undefined}
   */
  destroy(includeCacheDirectory = false) {
    try {
      this._cache.clear();
      this.stopAutoPersist();
      if (includeCacheDirectory) {
        fs5.rmSync(this.cacheDirPath, { recursive: true, force: true });
      } else {
        fs5.rmSync(this.cacheFilePath, { recursive: true, force: true });
      }
      this._changesSinceLastSave = false;
      this.emit(
        "destroy"
        /* DESTROY */
      );
    } catch (error) {
      this.emit("error", error);
    }
  }
  /**
   * Start the auto persist interval
   * @method startAutoPersist
   */
  startAutoPersist() {
    if (this._persistInterval > 0) {
      if (this._persistTimer) {
        clearInterval(this._persistTimer);
        this._persistTimer = void 0;
      }
      this._persistTimer = setInterval(() => {
        this.save();
      }, this._persistInterval);
    }
  }
  /**
   * Stop the auto persist interval
   * @method stopAutoPersist
   */
  stopAutoPersist() {
    if (this._persistTimer) {
      clearInterval(this._persistTimer);
      this._persistTimer = void 0;
    }
  }
};
function createFromFile(filePath, options) {
  const cache = new FlatCache(options);
  cache.loadFile(filePath);
  return cache;
}

// node_modules/file-entry-cache/dist/index.js
function createFromFile2(filePath, options) {
  const fname = path11.basename(filePath);
  const directory = path11.dirname(filePath);
  return create(fname, directory, options);
}
function create(cacheId, cacheDirectory, options) {
  const opts = {
    ...options,
    cache: {
      cacheId,
      cacheDir: cacheDirectory
    }
  };
  const fileEntryCache = new FileEntryCache(opts);
  if (cacheDirectory) {
    const cachePath = `${cacheDirectory}/${cacheId}`;
    if (fs6.existsSync(cachePath)) {
      fileEntryCache.cache = createFromFile(cachePath, opts.cache);
    }
  }
  return fileEntryCache;
}
var FileEntryDefault = class {
  static create = create;
  static createFromFile = createFromFile2;
};
var FileEntryCache = class {
  _cache = new FlatCache({ useClone: false });
  _useCheckSum = false;
  _hashAlgorithm = "md5";
  _cwd = process.cwd();
  _restrictAccessToCwd = false;
  _logger;
  _useAbsolutePathAsKey = false;
  _useModifiedTime = true;
  /**
   * Create a new FileEntryCache instance
   * @param options - The options for the FileEntryCache (all properties are optional with defaults)
   */
  constructor(options) {
    if (options?.cache) {
      this._cache = new FlatCache(options.cache);
    }
    if (options?.useCheckSum) {
      this._useCheckSum = options.useCheckSum;
    }
    if (options?.hashAlgorithm) {
      this._hashAlgorithm = options.hashAlgorithm;
    }
    if (options?.cwd) {
      this._cwd = options.cwd;
    }
    if (options?.useModifiedTime !== void 0) {
      this._useModifiedTime = options.useModifiedTime;
    }
    if (options?.restrictAccessToCwd !== void 0) {
      this._restrictAccessToCwd = options.restrictAccessToCwd;
    }
    if (options?.useAbsolutePathAsKey !== void 0) {
      this._useAbsolutePathAsKey = options.useAbsolutePathAsKey;
    }
    if (options?.logger) {
      this._logger = options.logger;
    }
  }
  /**
   * Get the cache
   * @returns {FlatCache} The cache
   */
  get cache() {
    return this._cache;
  }
  /**
   * Set the cache
   * @param {FlatCache} cache - The cache to set
   */
  set cache(cache) {
    this._cache = cache;
  }
  /**
   * Get the logger
   * @returns {ILogger | undefined} The logger instance
   */
  get logger() {
    return this._logger;
  }
  /**
   * Set the logger
   * @param {ILogger | undefined} logger - The logger to set
   */
  set logger(logger) {
    this._logger = logger;
  }
  /**
   * Use the hash to check if the file has changed
   * @returns {boolean} if the hash is used to check if the file has changed (default: false)
   */
  get useCheckSum() {
    return this._useCheckSum;
  }
  /**
   * Set the useCheckSum value
   * @param {boolean} value - The value to set
   */
  set useCheckSum(value) {
    this._useCheckSum = value;
  }
  /**
   * Get the hash algorithm
   * @returns {string} The hash algorithm (default: 'md5')
   */
  get hashAlgorithm() {
    return this._hashAlgorithm;
  }
  /**
   * Set the hash algorithm
   * @param {string} value - The value to set
   */
  set hashAlgorithm(value) {
    this._hashAlgorithm = value;
  }
  /**
   * Get the current working directory
   * @returns {string} The current working directory (default: process.cwd())
   */
  get cwd() {
    return this._cwd;
  }
  /**
   * Set the current working directory
   * @param {string} value - The value to set
   */
  set cwd(value) {
    this._cwd = value;
  }
  /**
   * Get whether to use modified time for change detection
   * @returns {boolean} Whether modified time (mtime) is used for change detection (default: true)
   */
  get useModifiedTime() {
    return this._useModifiedTime;
  }
  /**
   * Set whether to use modified time for change detection
   * @param {boolean} value - The value to set
   */
  set useModifiedTime(value) {
    this._useModifiedTime = value;
  }
  /**
   * Get whether to restrict paths to cwd boundaries
   * @returns {boolean} Whether strict path checking is enabled (default: true)
   */
  get restrictAccessToCwd() {
    return this._restrictAccessToCwd;
  }
  /**
   * Set whether to restrict paths to cwd boundaries
   * @param {boolean} value - The value to set
   */
  set restrictAccessToCwd(value) {
    this._restrictAccessToCwd = value;
  }
  /**
   * Get whether to use absolute path as cache key
   * @returns {boolean} Whether cache keys use absolute paths (default: false)
   */
  get useAbsolutePathAsKey() {
    return this._useAbsolutePathAsKey;
  }
  /**
   * Set whether to use absolute path as cache key
   * @param {boolean} value - The value to set
   */
  set useAbsolutePathAsKey(value) {
    this._useAbsolutePathAsKey = value;
  }
  /**
   * Given a buffer, calculate md5 hash of its content.
   * @method getHash
   * @param  {Buffer} buffer   buffer to calculate hash on
   * @return {String}          content hash digest
   */
  getHash(buffer) {
    return crypto2.createHash(this._hashAlgorithm).update(buffer).digest("hex");
  }
  /**
   * Create the key for the file path used for caching.
   * @method createFileKey
   * @param {String} filePath
   * @return {String}
   */
  createFileKey(filePath) {
    let result = filePath;
    if (this._useAbsolutePathAsKey && this.isRelativePath(filePath)) {
      result = this.getAbsolutePathWithCwd(filePath, this._cwd);
    }
    return result;
  }
  /**
   * Check if the file path is a relative path
   * @method isRelativePath
   * @param filePath - The file path to check
   * @returns {boolean} if the file path is a relative path, false otherwise
   */
  isRelativePath(filePath) {
    return !path11.isAbsolute(filePath);
  }
  /**
   * Delete the cache file from the disk
   * @method deleteCacheFile
   * @return {boolean}       true if the file was deleted, false otherwise
   */
  deleteCacheFile() {
    return this._cache.removeCacheFile();
  }
  /**
   * Remove the cache from the file and clear the memory cache
   * @method destroy
   */
  destroy() {
    this._cache.destroy();
  }
  /**
   * Remove and Entry From the Cache
   * @method removeEntry
   * @param filePath - The file path to remove from the cache
   */
  removeEntry(filePath) {
    const key = this.createFileKey(filePath);
    this._cache.removeKey(key);
  }
  /**
   * Reconcile the cache
   * @method reconcile
   */
  reconcile() {
    const { items } = this._cache;
    for (const item of items) {
      const fileDescriptor = this.getFileDescriptor(item.key);
      if (fileDescriptor.notFound) {
        this._cache.removeKey(item.key);
      }
    }
    this._cache.save();
  }
  /**
   * Check if the file has changed
   * @method hasFileChanged
   * @param filePath - The file path to check
   * @returns {boolean} if the file has changed, false otherwise
   */
  hasFileChanged(filePath) {
    let result = false;
    const fileDescriptor = this.getFileDescriptor(filePath);
    if ((!fileDescriptor.err || !fileDescriptor.notFound) && fileDescriptor.changed) {
      result = true;
    }
    return result;
  }
  /**
   * Get the file descriptor for the file path
   * @method getFileDescriptor
   * @param filePath - The file path to get the file descriptor for
   * @param options - The options for getting the file descriptor
   * @returns The file descriptor
   */
  getFileDescriptor(filePath, options) {
    this._logger?.debug({ filePath, options }, "Getting file descriptor");
    let fstat;
    const result = {
      key: this.createFileKey(filePath),
      changed: false,
      meta: {}
    };
    this._logger?.trace({ key: result.key }, "Created file key");
    const metaCache = this._cache.getKey(result.key);
    if (metaCache) {
      this._logger?.trace({ metaCache }, "Found cached meta");
    } else {
      this._logger?.trace("No cached meta found");
    }
    result.meta = metaCache ? { ...metaCache } : {};
    const absolutePath = this.getAbsolutePath(filePath);
    this._logger?.trace({ absolutePath }, "Resolved absolute path");
    const useCheckSumValue = options?.useCheckSum ?? this._useCheckSum;
    this._logger?.debug(
      { useCheckSum: useCheckSumValue },
      "Using checksum setting"
    );
    const useModifiedTimeValue = options?.useModifiedTime ?? this.useModifiedTime;
    this._logger?.debug(
      { useModifiedTime: useModifiedTimeValue },
      "Using modified time (mtime) setting"
    );
    try {
      fstat = fs6.statSync(absolutePath);
      result.meta.size = fstat.size;
      result.meta.mtime = fstat.mtime.getTime();
      this._logger?.trace(
        { size: result.meta.size, mtime: result.meta.mtime },
        "Read file stats"
      );
      if (useCheckSumValue) {
        const buffer = fs6.readFileSync(absolutePath);
        result.meta.hash = this.getHash(buffer);
        this._logger?.trace({ hash: result.meta.hash }, "Calculated file hash");
      }
    } catch (error) {
      this._logger?.error({ filePath, error }, "Error reading file");
      this.removeEntry(filePath);
      let notFound = false;
      if (error.message.includes("ENOENT")) {
        notFound = true;
        this._logger?.debug({ filePath }, "File not found");
      }
      return {
        key: result.key,
        err: error,
        notFound,
        meta: {}
      };
    }
    if (!metaCache) {
      result.changed = true;
      this._cache.setKey(result.key, result.meta);
      this._logger?.debug({ filePath }, "File not in cache, marked as changed");
      return result;
    }
    if (useModifiedTimeValue && metaCache?.mtime !== result.meta?.mtime) {
      result.changed = true;
      this._logger?.debug(
        { filePath, oldMtime: metaCache.mtime, newMtime: result.meta.mtime },
        "File changed: mtime differs"
      );
    }
    if (metaCache?.size !== result.meta?.size) {
      result.changed = true;
      this._logger?.debug(
        { filePath, oldSize: metaCache.size, newSize: result.meta.size },
        "File changed: size differs"
      );
    }
    if (useCheckSumValue && metaCache?.hash !== result.meta?.hash) {
      result.changed = true;
      this._logger?.debug(
        { filePath, oldHash: metaCache.hash, newHash: result.meta.hash },
        "File changed: hash differs"
      );
    }
    this._cache.setKey(result.key, result.meta);
    if (result.changed) {
      this._logger?.info({ filePath }, "File has changed");
    } else {
      this._logger?.debug({ filePath }, "File unchanged");
    }
    return result;
  }
  /**
   * Get the file descriptors for the files
   * @method normalizeEntries
   * @param files?: string[] - The files to get the file descriptors for
   * @returns The file descriptors
   */
  normalizeEntries(files) {
    const result = [];
    if (files) {
      for (const file of files) {
        const fileDescriptor = this.getFileDescriptor(file);
        result.push(fileDescriptor);
      }
      return result;
    }
    const keys2 = this.cache.keys();
    for (const key of keys2) {
      const fileDescriptor = this.getFileDescriptor(key);
      if (!fileDescriptor.notFound && !fileDescriptor.err) {
        result.push(fileDescriptor);
      }
    }
    return result;
  }
  /**
   * Analyze the files
   * @method analyzeFiles
   * @param files - The files to analyze
   * @returns {AnalyzedFiles} The analysis of the files
   */
  analyzeFiles(files) {
    const result = {
      changedFiles: [],
      notFoundFiles: [],
      notChangedFiles: []
    };
    const fileDescriptors = this.normalizeEntries(files);
    for (const fileDescriptor of fileDescriptors) {
      if (fileDescriptor.notFound) {
        result.notFoundFiles.push(fileDescriptor.key);
      } else if (fileDescriptor.changed) {
        result.changedFiles.push(fileDescriptor.key);
      } else {
        result.notChangedFiles.push(fileDescriptor.key);
      }
    }
    return result;
  }
  /**
   * Get the updated files
   * @method getUpdatedFiles
   * @param files - The files to get the updated files for
   * @returns {string[]} The updated files
   */
  getUpdatedFiles(files) {
    const result = [];
    const fileDescriptors = this.normalizeEntries(files);
    for (const fileDescriptor of fileDescriptors) {
      if (fileDescriptor.changed) {
        result.push(fileDescriptor.key);
      }
    }
    return result;
  }
  /**
   * Get the file descriptors by path prefix
   * @method getFileDescriptorsByPath
   * @param filePath - the path prefix to match
   * @returns {FileDescriptor[]} The file descriptors
   */
  getFileDescriptorsByPath(filePath) {
    const result = [];
    const keys2 = this._cache.keys();
    for (const key of keys2) {
      if (key.startsWith(filePath)) {
        const fileDescriptor = this.getFileDescriptor(key);
        result.push(fileDescriptor);
      }
    }
    return result;
  }
  /**
   * Get the Absolute Path. If it is already absolute it will return the path as is.
   * When restrictAccessToCwd is enabled, ensures the resolved path stays within cwd boundaries.
   * @method getAbsolutePath
   * @param filePath - The file path to get the absolute path for
   * @returns {string}
   * @throws {Error} When restrictAccessToCwd is true and path would resolve outside cwd
   */
  getAbsolutePath(filePath) {
    if (this.isRelativePath(filePath)) {
      const sanitizedPath = filePath.replace(/\0/g, "");
      const resolved = path11.resolve(this._cwd, sanitizedPath);
      if (this._restrictAccessToCwd) {
        const normalizedResolved = path11.normalize(resolved);
        const normalizedCwd = path11.normalize(this._cwd);
        const isWithinCwd = normalizedResolved === normalizedCwd || normalizedResolved.startsWith(normalizedCwd + path11.sep);
        if (!isWithinCwd) {
          throw new Error(
            `Path traversal attempt blocked: "${filePath}" resolves outside of working directory "${this._cwd}"`
          );
        }
      }
      return resolved;
    }
    return filePath;
  }
  /**
   * Get the Absolute Path with a custom working directory. If it is already absolute it will return the path as is.
   * When restrictAccessToCwd is enabled, ensures the resolved path stays within the provided cwd boundaries.
   * @method getAbsolutePathWithCwd
   * @param filePath - The file path to get the absolute path for
   * @param cwd - The custom working directory to resolve relative paths from
   * @returns {string}
   * @throws {Error} When restrictAccessToCwd is true and path would resolve outside the provided cwd
   */
  getAbsolutePathWithCwd(filePath, cwd3) {
    if (this.isRelativePath(filePath)) {
      const sanitizedPath = filePath.replace(/\0/g, "");
      const resolved = path11.resolve(cwd3, sanitizedPath);
      if (this._restrictAccessToCwd) {
        const normalizedResolved = path11.normalize(resolved);
        const normalizedCwd = path11.normalize(cwd3);
        const isWithinCwd = normalizedResolved === normalizedCwd || normalizedResolved.startsWith(normalizedCwd + path11.sep);
        if (!isWithinCwd) {
          throw new Error(
            `Path traversal attempt blocked: "${filePath}" resolves outside of working directory "${cwd3}"`
          );
        }
      }
      return resolved;
    }
    return filePath;
  }
  /**
   * Rename cache keys that start with a given path prefix.
   * @method renameCacheKeys
   * @param oldPath - The old path prefix to rename
   * @param newPath - The new path prefix to rename to
   */
  renameCacheKeys(oldPath, newPath) {
    const keys2 = this._cache.keys();
    for (const key of keys2) {
      if (key.startsWith(oldPath)) {
        const newKey = key.replace(oldPath, newPath);
        const meta = this._cache.getKey(key);
        this._cache.removeKey(key);
        this._cache.setKey(newKey, meta);
      }
    }
  }
};

// src/cli/format-results-cache.js
import { version as prettierVersion } from "../index.mjs";
var optionsHashCache = /* @__PURE__ */ new WeakMap();
var nodeVersion = process.version;
function getHashOfOptions(options) {
  if (optionsHashCache.has(options)) {
    return optionsHashCache.get(options);
  }
  const hash2 = createHash(
    `${prettierVersion}_${nodeVersion}_${(0, import_fast_json_stable_stringify2.default)(options)}`
  );
  optionsHashCache.set(options, hash2);
  return hash2;
}
function getMetadataFromFileDescriptor(fileDescriptor) {
  return fileDescriptor.meta;
}
var FormatResultsCache = class {
  #fileEntryCache;
  /**
   * @param {string} cacheFileLocation The path of cache file location. (default: `node_modules/.cache/prettier/.prettier-cache`)
   * @param {string} cacheStrategy
   */
  constructor(cacheFileLocation, cacheStrategy) {
    const useChecksum = cacheStrategy === "content";
    const fileEntryCacheOptions = {
      useChecksum,
      useModifiedTime: !useChecksum,
      restrictAccessToCwd: false
    };
    try {
      this.#fileEntryCache = FileEntryDefault.createFromFile(
        /* filePath */
        cacheFileLocation,
        fileEntryCacheOptions
      );
    } catch {
      if (fs7.existsSync(cacheFileLocation)) {
        fs7.unlinkSync(cacheFileLocation);
        this.#fileEntryCache = FileEntryDefault.createFromFile(
          /* filePath */
          cacheFileLocation,
          fileEntryCacheOptions
        );
      }
    }
  }
  /**
   * @param {string} filePath
   * @param {any} options
   */
  existsAvailableFormatResultsCache(filePath, options) {
    const fileDescriptor = this.#getFileDescriptor(filePath);
    if (fileDescriptor.notFound || fileDescriptor.changed) {
      return false;
    }
    const hashOfOptions = getMetadataFromFileDescriptor(fileDescriptor).data?.hashOfOptions;
    return hashOfOptions && hashOfOptions === getHashOfOptions(options);
  }
  /**
   * @param {string} filePath
   * @param {any} options
   */
  setFormatResultsCache(filePath, options) {
    const fileDescriptor = this.#getFileDescriptor(filePath);
    if (!fileDescriptor.notFound) {
      const meta = getMetadataFromFileDescriptor(fileDescriptor);
      meta.data = { ...meta.data, hashOfOptions: getHashOfOptions(options) };
    }
  }
  /**
   * @param {string} filePath
   */
  removeFormatResultsCache(filePath) {
    this.#fileEntryCache.removeEntry(filePath);
  }
  reconcile() {
    this.#fileEntryCache.reconcile();
  }
  #getFileDescriptor(filePath) {
    return this.#fileEntryCache.getFileDescriptor(filePath);
  }
};
var format_results_cache_default = FormatResultsCache;

// src/cli/mockable.js
var import_ci_info = __toESM(require_ci_info(), 1);
import fs8 from "fs/promises";
import { performance } from "perf_hooks";
import { __internal as sharedWithCli3 } from "../index.mjs";

// src/cli/utilities/clear-stream-text.js
import readline from "readline";

// node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const osc = `(?:\\u001B\\][\\s\\S]*?${ST})`;
  const csi = "[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  const pattern = `${osc}|${csi}`;
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}

// node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex, "");
}

// node_modules/wcwidth.js/combining.js
var combining_default = [
  [768, 879],
  [1155, 1158],
  [1160, 1161],
  [1425, 1469],
  [1471, 1471],
  [1473, 1474],
  [1476, 1477],
  [1479, 1479],
  [1536, 1539],
  [1552, 1557],
  [1611, 1630],
  [1648, 1648],
  [1750, 1764],
  [1767, 1768],
  [1770, 1773],
  [1807, 1807],
  [1809, 1809],
  [1840, 1866],
  [1958, 1968],
  [2027, 2035],
  [2305, 2306],
  [2364, 2364],
  [2369, 2376],
  [2381, 2381],
  [2385, 2388],
  [2402, 2403],
  [2433, 2433],
  [2492, 2492],
  [2497, 2500],
  [2509, 2509],
  [2530, 2531],
  [2561, 2562],
  [2620, 2620],
  [2625, 2626],
  [2631, 2632],
  [2635, 2637],
  [2672, 2673],
  [2689, 2690],
  [2748, 2748],
  [2753, 2757],
  [2759, 2760],
  [2765, 2765],
  [2786, 2787],
  [2817, 2817],
  [2876, 2876],
  [2879, 2879],
  [2881, 2883],
  [2893, 2893],
  [2902, 2902],
  [2946, 2946],
  [3008, 3008],
  [3021, 3021],
  [3134, 3136],
  [3142, 3144],
  [3146, 3149],
  [3157, 3158],
  [3260, 3260],
  [3263, 3263],
  [3270, 3270],
  [3276, 3277],
  [3298, 3299],
  [3393, 3395],
  [3405, 3405],
  [3530, 3530],
  [3538, 3540],
  [3542, 3542],
  [3633, 3633],
  [3636, 3642],
  [3655, 3662],
  [3761, 3761],
  [3764, 3769],
  [3771, 3772],
  [3784, 3789],
  [3864, 3865],
  [3893, 3893],
  [3895, 3895],
  [3897, 3897],
  [3953, 3966],
  [3968, 3972],
  [3974, 3975],
  [3984, 3991],
  [3993, 4028],
  [4038, 4038],
  [4141, 4144],
  [4146, 4146],
  [4150, 4151],
  [4153, 4153],
  [4184, 4185],
  [4448, 4607],
  [4959, 4959],
  [5906, 5908],
  [5938, 5940],
  [5970, 5971],
  [6002, 6003],
  [6068, 6069],
  [6071, 6077],
  [6086, 6086],
  [6089, 6099],
  [6109, 6109],
  [6155, 6157],
  [6313, 6313],
  [6432, 6434],
  [6439, 6440],
  [6450, 6450],
  [6457, 6459],
  [6679, 6680],
  [6912, 6915],
  [6964, 6964],
  [6966, 6970],
  [6972, 6972],
  [6978, 6978],
  [7019, 7027],
  [7616, 7626],
  [7678, 7679],
  [8203, 8207],
  [8234, 8238],
  [8288, 8291],
  [8298, 8303],
  [8400, 8431],
  [12330, 12335],
  [12441, 12442],
  [43014, 43014],
  [43019, 43019],
  [43045, 43046],
  [64286, 64286],
  [65024, 65039],
  [65056, 65059],
  [65279, 65279],
  [65529, 65531],
  [68097, 68099],
  [68101, 68102],
  [68108, 68111],
  [68152, 68154],
  [68159, 68159],
  [119143, 119145],
  [119155, 119170],
  [119173, 119179],
  [119210, 119213],
  [119362, 119364],
  [917505, 917505],
  [917536, 917631],
  [917760, 917999]
];

// node_modules/wcwidth.js/index.js
var DEFAULTS = {
  nul: 0,
  control: 0
};
function bisearch(ucs) {
  let min = 0;
  let max = combining_default.length - 1;
  let mid;
  if (ucs < combining_default[0][0] || ucs > combining_default[max][1]) return false;
  while (max >= min) {
    mid = Math.floor((min + max) / 2);
    if (ucs > combining_default[mid][1]) min = mid + 1;
    else if (ucs < combining_default[mid][0]) max = mid - 1;
    else return true;
  }
  return false;
}
function wcwidth(ucs, opts) {
  if (ucs === 0) return opts.nul;
  if (ucs < 32 || ucs >= 127 && ucs < 160) return opts.control;
  if (bisearch(ucs)) return 0;
  return 1 + (ucs >= 4352 && (ucs <= 4447 || // Hangul Jamo init. consonants
  ucs == 9001 || ucs == 9002 || ucs >= 11904 && ucs <= 42191 && ucs != 12351 || // CJK ... Yi
  ucs >= 44032 && ucs <= 55203 || // Hangul Syllables
  ucs >= 63744 && ucs <= 64255 || // CJK Compatibility Ideographs
  ucs >= 65040 && ucs <= 65049 || // Vertical forms
  ucs >= 65072 && ucs <= 65135 || // CJK Compatibility Forms
  ucs >= 65280 && ucs <= 65376 || // Fullwidth Forms
  ucs >= 65504 && ucs <= 65510 || ucs >= 131072 && ucs <= 196605 || ucs >= 196608 && ucs <= 262141));
}
function wcswidth(str, opts) {
  let h;
  let l;
  let s = 0;
  let n;
  if (typeof str !== "string") return wcwidth(str, opts);
  for (let i = 0; i < str.length; i++) {
    h = str.charCodeAt(i);
    if (h >= 55296 && h <= 56319) {
      l = str.charCodeAt(++i);
      if (l >= 56320 && l <= 57343) {
        h = (h - 55296) * 1024 + (l - 56320) + 65536;
      } else {
        i--;
      }
    }
    n = wcwidth(h, opts);
    if (n < 0) return -1;
    s += n;
  }
  return s;
}
var _ = (str) => wcswidth(str, DEFAULTS);
_.config = (opts = {}) => {
  opts = {
    ...DEFAULTS,
    ...opts
  };
  return (str) => wcswidth(str, opts);
};
var wcwidth_default = _;

// src/cli/utilities/clear-stream-text.js
var countLines = (stream, text) => {
  const columns = stream.columns || 80;
  let lineCount = 0;
  for (const line of stripAnsi(text).split("\n")) {
    lineCount += Math.max(1, Math.ceil(wcwidth_default(line) / columns));
  }
  return lineCount;
};
function clearStreamText(stream, text) {
  const lineCount = countLines(stream, text);
  for (let line = 0; line < lineCount; line++) {
    if (line > 0) {
      readline.moveCursor(stream, 0, -1);
    }
    readline.clearLine(stream, 0);
    readline.cursorTo(stream, 0);
  }
}
var clear_stream_text_default = clearStreamText;

// src/cli/mockable.js
var mockable = sharedWithCli3.utilities.createMockable({
  clearStreamText: clear_stream_text_default,
  getTimestamp: performance.now.bind(performance),
  isCI: () => import_ci_info.isCI,
  isStreamTTY: (stream) => stream.isTTY,
  writeFormattedFile: (file, data) => fs8.writeFile(file, data)
});
var mockable_default = mockable.mocked;

// src/cli/options/get-options-for-file.js
var import_dashify2 = __toESM(require_dashify(), 1);
import { resolveConfig } from "../index.mjs";
function getOptions(argv2, detailedOptions) {
  return Object.fromEntries(
    detailedOptions.filter(({ forwardToApi }) => forwardToApi).map(({ forwardToApi, name }) => [forwardToApi, argv2[name]])
  );
}
function cliifyOptions(object2, apiDetailedOptionMap) {
  return Object.fromEntries(
    Object.entries(object2 || {}).map(([key, value]) => {
      const apiOption = apiDetailedOptionMap[key];
      const cliKey = apiOption ? apiOption.name : key;
      return [(0, import_dashify2.default)(cliKey), value];
    })
  );
}
function createApiDetailedOptionMap(detailedOptions) {
  return Object.fromEntries(
    detailedOptions.filter(
      (option) => option.forwardToApi && option.forwardToApi !== option.name
    ).map((option) => [option.forwardToApi, option])
  );
}
function parseArgsToOptions(context, overrideDefaults) {
  const minimistOptions = createMinimistOptions(context.detailedOptions);
  const apiDetailedOptionMap = createApiDetailedOptionMap(
    context.detailedOptions
  );
  return getOptions(
    normalize_cli_options_default(
      minimistParse(context.rawArguments, {
        string: minimistOptions.string,
        boolean: minimistOptions.boolean,
        default: cliifyOptions(overrideDefaults, apiDetailedOptionMap)
      }),
      context.detailedOptions,
      { logger: false }
    ),
    context.detailedOptions
  );
}
async function getOptionsOrDie(context, filePath) {
  try {
    if (context.argv.config === false) {
      context.logger.debug(
        "'--no-config' option found, skip loading config file."
      );
      return null;
    }
    context.logger.debug(
      context.argv.config ? `load config file from '${context.argv.config}'` : `resolve config from '${filePath}'`
    );
    const options = await resolveConfig(filePath, {
      editorconfig: context.argv.editorconfig,
      config: context.argv.config
    });
    context.logger.debug("loaded options `" + JSON.stringify(options) + "`");
    return options;
  } catch (error) {
    context.logger.error(
      `Invalid configuration${filePath ? ` for file "${filePath}"` : ""}:
` + error.message
    );
    process.exit(2);
  }
}
function applyConfigPrecedence(context, options) {
  try {
    switch (context.argv.configPrecedence) {
      case "cli-override":
        return parseArgsToOptions(context, options);
      case "file-override":
        return { ...parseArgsToOptions(context), ...options };
      case "prefer-file":
        return options || parseArgsToOptions(context);
    }
  } catch (error) {
    context.logger.error(error.toString());
    process.exit(2);
  }
}
async function getOptionsForFile(context, filepath) {
  const options = await getOptionsOrDie(context, filepath);
  const hasPlugins = options?.plugins;
  if (hasPlugins) {
    await context.pushContextPlugins(options.plugins);
  }
  const appliedOptions = {
    filepath,
    ...applyConfigPrecedence(
      context,
      options && normalizeOptions(options, context.supportOptions, {
        logger: context.logger
      })
    )
  };
  context.logger.debug(
    `applied config-precedence (${context.argv.configPrecedence}): ${JSON.stringify(appliedOptions)}`
  );
  if (hasPlugins) {
    context.popContextPlugins();
  }
  return appliedOptions;
}
var get_options_for_file_default = getOptionsForFile;

// src/cli/format.js
function diff(a, b) {
  return createTwoFilesPatch("", "", a, b, "", "", { context: 2 });
}
var DebugError = class extends Error {
  name = "DebugError";
};
function handleError(context, filename, error, printedFilename, ignoreUnknown) {
  ignoreUnknown || (ignoreUnknown = context.argv.ignoreUnknown);
  const errorIsUndefinedParseError = error instanceof errors.UndefinedParserError;
  if (errorIsUndefinedParseError && ignoreUnknown) {
    printedFilename?.clear();
    return true;
  }
  if (printedFilename) {
    process.stdout.write("\n");
  }
  if (errorIsUndefinedParseError) {
    context.logger.error(error.message);
    process.exitCode = 2;
    return;
  }
  const isParseError = Boolean(error?.loc);
  const isValidationError = /^Invalid \S+ value\./u.test(error?.message);
  if (isParseError) {
    context.logger.error(`${filename}: ${String(error)}`);
  } else if (isValidationError || error instanceof errors.ConfigError) {
    context.logger.error(error.message);
    process.exit(1);
  } else if (error instanceof DebugError) {
    context.logger.error(`${filename}: ${error.message}`);
  } else {
    context.logger.error(filename + ": " + (error.stack || error));
  }
  process.exitCode = 2;
}
function writeOutput(context, result, options) {
  process.stdout.write(
    context.argv.debugCheck ? result.filepath : result.formatted
  );
  if (options && options.cursorOffset >= 0) {
    process.stderr.write(result.cursorOffset + "\n");
  }
}
async function listDifferent(context, input, options, filename) {
  if (!context.argv.check && !context.argv.listDifferent) {
    return;
  }
  try {
    if (!await prettier.check(input, options) && !context.argv.write) {
      context.logger.log(filename);
      process.exitCode = 1;
    }
  } catch (error) {
    context.logger.error(error.message);
  }
  return true;
}
async function format3(context, input, opt) {
  if (context.argv.debugPrintDoc) {
    const doc = await prettier.__debug.printToDoc(input, opt);
    return { formatted: await prettier.__debug.formatDoc(doc) + "\n" };
  }
  if (context.argv.debugPrintComments) {
    return {
      formatted: await prettier.format(
        JSON.stringify(
          (await prettier.formatWithCursor(input, opt)).comments || []
        ),
        { parser: "json" }
      )
    };
  }
  if (context.argv.debugPrintAst) {
    const { ast } = await prettier.__debug.parse(input, opt);
    return {
      formatted: JSON.stringify(ast)
    };
  }
  if (context.argv.debugCheck) {
    const pp = await prettier.format(input, opt);
    const pppp = await prettier.format(pp, opt);
    if (pp !== pppp) {
      throw new DebugError(
        "prettier(input) !== prettier(prettier(input))\n" + diff(pp, pppp)
      );
    } else {
      const stringify5 = (obj) => JSON.stringify(obj, null, 2);
      const ast = stringify5(
        (await prettier.__debug.parse(input, opt, { massage: true })).ast
      );
      const past = stringify5(
        (await prettier.__debug.parse(pp, opt, { massage: true })).ast
      );
      if (ast !== past) {
        const MAX_AST_SIZE = 2097152;
        const astDiff = ast.length > MAX_AST_SIZE || past.length > MAX_AST_SIZE ? "AST diff too large to render" : diff(ast, past);
        throw new DebugError(
          "ast(input) !== ast(prettier(input))\n" + astDiff + "\n" + diff(input, pp)
        );
      }
    }
    return { formatted: pp, filepath: opt.filepath || "(stdin)\n" };
  }
  const { performanceTestFlag } = context;
  if (performanceTestFlag?.debugBenchmark) {
    let Bench;
    try {
      ({ Bench } = await import("tinybench"));
    } catch {
      context.logger.debug(
        "'--debug-benchmark' requires the 'tinybench' package to be installed."
      );
      process.exit(2);
    }
    context.logger.debug(
      "'--debug-benchmark' option found, measuring formatWithCursor with 'tinybench' module."
    );
    const bench = new Bench();
    bench.add("Format", () => prettier.formatWithCursor(input, opt));
    await bench.run();
    const [result] = bench.table();
    context.logger.debug(
      "'--debug-benchmark' measurements for formatWithCursor: " + JSON.stringify(result, void 0, 2)
    );
  } else if (performanceTestFlag?.debugRepeat) {
    const repeat = performanceTestFlag.debugRepeat;
    context.logger.debug(
      `'${performanceTestFlag.name}' found, running formatWithCursor ${repeat} times.`
    );
    const start = mockable_default.getTimestamp();
    for (let i = 0; i < repeat; ++i) {
      await prettier.formatWithCursor(input, opt);
    }
    const averageMs = (mockable_default.getTimestamp() - start) / repeat;
    const results = {
      repeat,
      hz: 1e3 / averageMs,
      ms: averageMs
    };
    context.logger.debug(
      `'${performanceTestFlag.name}' measurements for formatWithCursor: ${JSON.stringify(
        results,
        null,
        2
      )}`
    );
  }
  return prettier.formatWithCursor(input, opt);
}
async function createIsIgnoredFromContextOrDie(context) {
  try {
    return await createIsIgnoredFunction(
      context.argv.ignorePath,
      context.argv.withNodeModules
    );
  } catch (e) {
    context.logger.error(e.message);
    process.exit(2);
  }
}
async function formatStdin(context) {
  const { filepath } = context.argv;
  try {
    const input = await getStdin();
    const absoluteFilepath = filepath ? path12.resolve(filepath) : void 0;
    let isFileIgnored = false;
    if (absoluteFilepath) {
      const isIgnored = await createIsIgnoredFromContextOrDie(context);
      isFileIgnored = isIgnored(absoluteFilepath);
    }
    if (isFileIgnored) {
      writeOutput(context, { formatted: input });
      return;
    }
    const options = {
      ...await get_options_for_file_default(context, absoluteFilepath),
      // `getOptionsForFile` forwards `--stdin-filepath` directly, which can be a relative path
      filepath: absoluteFilepath
    };
    if (await listDifferent(context, input, options, "(stdin)")) {
      return;
    }
    const formatted = await format3(context, input, options);
    const { performanceTestFlag } = context;
    if (performanceTestFlag) {
      context.logger.log(
        `'${performanceTestFlag.name}' option found, skipped print code to screen.`
      );
      return;
    }
    writeOutput(context, formatted, options);
  } catch (error) {
    handleError(context, filepath || "stdin", error);
  }
}
async function formatFiles(context) {
  const isIgnored = await createIsIgnoredFromContextOrDie(context);
  const cwd3 = process.cwd();
  let numberOfUnformattedFilesFound = 0;
  let numberOfFilesWithError = 0;
  const { performanceTestFlag } = context;
  if (context.argv.check && !performanceTestFlag) {
    context.logger.log("Checking formatting...");
  }
  let formatResultsCache;
  const cacheFilePath = await find_cache_file_default(context.argv.cacheLocation);
  if (context.argv.cache) {
    formatResultsCache = new format_results_cache_default(
      cacheFilePath,
      context.argv.cacheStrategy || "content"
    );
  } else if (!context.argv.cacheLocation) {
    const stat = await statSafe(cacheFilePath);
    if (stat) {
      await fs9.unlink(cacheFilePath);
    }
  }
  const isTTY = mockable_default.isStreamTTY(process.stdout) && !mockable_default.isCI();
  for await (const { error, filename, ignoreUnknown } of expandPatterns(
    context
  )) {
    if (error) {
      context.logger.error(error);
      process.exitCode = 2;
      continue;
    }
    const isFileIgnored = isIgnored(filename);
    if (isFileIgnored && (context.argv.debugCheck || context.argv.write || context.argv.check || context.argv.listDifferent)) {
      continue;
    }
    const options = {
      ...await get_options_for_file_default(context, filename),
      filepath: filename
    };
    const fileNameToDisplay = normalizeToPosix(path12.relative(cwd3, filename));
    let printedFilename;
    if (isTTY) {
      printedFilename = context.logger.log(fileNameToDisplay, {
        newline: false,
        clearable: true
      });
    }
    let input;
    try {
      input = await fs9.readFile(filename, "utf8");
    } catch (error2) {
      context.logger.log("");
      context.logger.error(
        `Unable to read file "${fileNameToDisplay}":
${error2.message}`
      );
      process.exitCode = 2;
      continue;
    }
    if (isFileIgnored) {
      printedFilename?.clear();
      writeOutput(context, { formatted: input }, options);
      continue;
    }
    const start = mockable_default.getTimestamp();
    const isCacheExists = formatResultsCache?.existsAvailableFormatResultsCache(
      filename,
      options
    );
    let result;
    let output;
    try {
      if (isCacheExists) {
        result = { formatted: input };
      } else {
        result = await format3(context, input, options);
      }
      output = result.formatted;
    } catch (error2) {
      const errorIsIgnored = handleError(
        context,
        fileNameToDisplay,
        error2,
        printedFilename,
        ignoreUnknown
      );
      if (!errorIsIgnored) {
        numberOfFilesWithError += 1;
      }
      continue;
    }
    const isDifferent = output !== input;
    let shouldSetCache = !isDifferent;
    printedFilename?.clear();
    if (performanceTestFlag) {
      context.logger.log(
        `'${performanceTestFlag.name}' option found, skipped print code or write files.`
      );
      return;
    }
    if (context.argv.write) {
      const timeToDisplay = `${Math.round(mockable_default.getTimestamp() - start)}ms`;
      if (isDifferent) {
        if (!context.argv.check && !context.argv.listDifferent) {
          context.logger.log(`${fileNameToDisplay} ${timeToDisplay}`);
        }
        try {
          await mockable_default.writeFormattedFile(filename, output);
          shouldSetCache = true;
        } catch (error2) {
          context.logger.error(
            `Unable to write file "${fileNameToDisplay}":
${error2.message}`
          );
          process.exitCode = 2;
        }
      } else if (!context.argv.check && !context.argv.listDifferent) {
        const message = `${picocolors.gray(fileNameToDisplay)} ${timeToDisplay} (unchanged)`;
        if (isCacheExists) {
          context.logger.log(`${message} (cached)`);
        } else {
          context.logger.log(message);
        }
      }
    } else if (context.argv.debugCheck) {
      if (result.filepath) {
        context.logger.log(fileNameToDisplay);
      } else {
        process.exitCode = 2;
      }
    } else if (!context.argv.check && !context.argv.listDifferent) {
      writeOutput(context, result, options);
    }
    if (shouldSetCache) {
      formatResultsCache?.setFormatResultsCache(filename, options);
    } else {
      formatResultsCache?.removeFormatResultsCache(filename);
    }
    if (isDifferent) {
      if (context.argv.check) {
        context.logger.warn(fileNameToDisplay);
      } else if (context.argv.listDifferent) {
        context.logger.log(fileNameToDisplay);
      }
      numberOfUnformattedFilesFound += 1;
    }
  }
  formatResultsCache?.reconcile();
  if (context.argv.check) {
    if (numberOfFilesWithError > 0) {
      const files = numberOfFilesWithError === 1 ? "the above file" : `${numberOfFilesWithError} files`;
      context.logger.log(
        `Error occurred when checking code style in ${files}.`
      );
    } else if (numberOfUnformattedFilesFound === 0) {
      context.logger.log("All matched files use Prettier code style!");
    } else {
      const files = numberOfUnformattedFilesFound === 1 ? "the above file" : `${numberOfUnformattedFilesFound} files`;
      context.logger.warn(
        context.argv.write ? `Code style issues fixed in ${files}.` : `Code style issues found in ${files}. Run Prettier with --write to fix.`
      );
    }
  }
  if ((context.argv.check || context.argv.listDifferent) && numberOfUnformattedFilesFound > 0 && !process.exitCode && !context.argv.write) {
    process.exitCode = 1;
  }
}

// src/cli/logger.js
var {
  argv,
  env: env2
} = process;
var isStderrColorSupported = !(Boolean(env2.NO_COLOR) || argv.includes("--no-color")) && (Boolean(env2.FORCE_COLOR) || argv.includes("--color") || process.platform === "win32" || process.stderr.isTTY && env2.TERM !== "dumb" || Boolean(env2.CI));
var picocolorsStderr = picocolors.createColors(isStderrColorSupported);
var emptyLogResult = {
  clear() {
  }
};
function createLogger(logLevel = "log") {
  return {
    logLevel,
    warn: createLogFunc("warn", "yellow"),
    error: createLogFunc("error", "red"),
    debug: createLogFunc("debug", "blue"),
    log: createLogFunc("log")
  };
  function createLogFunc(loggerName, color) {
    if (!shouldLog(loggerName)) {
      return () => emptyLogResult;
    }
    const stream = process[loggerName === "log" ? "stdout" : "stderr"];
    const colors = loggerName === "log" ? picocolors : picocolorsStderr;
    const prefix = color ? `[${colors[color](loggerName)}] ` : "";
    return (message, options) => {
      options = {
        newline: true,
        clearable: false,
        ...options
      };
      message = method_replace_all_default(
        /* OPTIONAL_OBJECT: false */
        0,
        message,
        /^/gmu,
        prefix
      ) + (options.newline ? "\n" : "");
      stream.write(message);
      if (options.clearable) {
        return {
          clear: () => mockable_default.clearStreamText(stream, message)
        };
      }
    };
  }
  function shouldLog(loggerName) {
    switch (logLevel) {
      case "silent":
        return false;
      case "debug":
        if (loggerName === "debug") {
          return true;
        }
      // fall through
      case "log":
        if (loggerName === "log") {
          return true;
        }
      // fall through
      case "warn":
        if (loggerName === "warn") {
          return true;
        }
      // fall through
      case "error":
        return loggerName === "error";
    }
  }
}
var logger_default = createLogger;

// src/cli/print-support-info.js
var import_fast_json_stable_stringify3 = __toESM(require_fast_json_stable_stringify(), 1);
import { format as format4, getSupportInfo as getSupportInfo2 } from "../index.mjs";
var sortByName = (array) => array.sort((a, b) => a.name.localeCompare(b.name));
async function printSupportInfo() {
  const { languages, options } = await getSupportInfo2();
  const supportInfo = {
    languages: sortByName(languages),
    options: sortByName(options).map(
      (option) => omit(option, ["cliName", "cliCategory", "cliDescription"])
    )
  };
  const result = await format4((0, import_fast_json_stable_stringify3.default)(supportInfo), { parser: "json" });
  printToScreen(result.trim());
}
var print_support_info_default = printSupportInfo;

// src/cli/constants.evaluate.js
var categoryOrder = [
  "Output",
  "Format",
  "Config",
  "Editor",
  "Other"
];
var usageSummary = "Usage: prettier [options] [file/dir/glob ...]\n\nBy default, output is written to stdout.\nStdin is read if it is piped to Prettier and no files are given.";

// src/cli/usage.js
var OPTION_USAGE_THRESHOLD = 25;
var CHOICE_USAGE_MARGIN = 3;
var CHOICE_USAGE_INDENTATION = 2;
function indent(str, spaces) {
  return method_replace_all_default(
    /* OPTIONAL_OBJECT: false */
    0,
    str,
    /^/gmu,
    " ".repeat(spaces)
  );
}
function createDefaultValueDisplay(value) {
  return Array.isArray(value) ? `[${value.map(createDefaultValueDisplay).join(", ")}]` : value;
}
function getOptionDefaultValue(context, optionName) {
  const option = context.detailedOptions.find(({
    name
  }) => name === optionName);
  if (option?.default !== void 0) {
    return option.default;
  }
  const optionCamelName = camelCase(optionName);
  return formatOptionsHiddenDefaults[optionCamelName] ?? context.supportOptions.find((option2) => !option2.deprecated && option2.name === optionCamelName)?.default;
}
function createOptionUsageHeader(option) {
  const name = `--${option.name}`;
  const alias = option.alias ? `-${option.alias},` : null;
  const type = createOptionUsageType(option);
  return [alias, name, type].filter(Boolean).join(" ");
}
function createOptionUsageRow(header, content, threshold) {
  const separator = header.length >= threshold ? `
${" ".repeat(threshold)}` : " ".repeat(threshold - header.length);
  const description = method_replace_all_default(
    /* OPTIONAL_OBJECT: false */
    0,
    content,
    "\n",
    `
${" ".repeat(threshold)}`
  );
  return `${header}${separator}${description}`;
}
function createOptionUsageType(option) {
  switch (option.type) {
    case "boolean":
      return null;
    case "choice":
      return `<${option.choices.filter((choice) => !choice.deprecated).map((choice) => choice.value).join("|")}>`;
    default:
      return `<${option.type}>`;
  }
}
function createChoiceUsages(choices, margin, indentation) {
  const activeChoices = choices.filter((choice) => !choice.deprecated);
  const threshold = Math.max(0, ...activeChoices.map((choice) => choice.value.length)) + margin;
  return activeChoices.map((choice) => indent(createOptionUsageRow(choice.value, choice.description, threshold), indentation));
}
function createOptionUsage(context, option, threshold) {
  const header = createOptionUsageHeader(option);
  const optionDefaultValue = getOptionDefaultValue(context, option.name);
  return createOptionUsageRow(header, `${option.description}${optionDefaultValue === void 0 ? "" : `
Defaults to ${createDefaultValueDisplay(optionDefaultValue)}.`}`, threshold);
}
function getOptionsWithOpposites(options) {
  const optionsWithOpposites = options.map((option) => [option.description ? option : null, option.oppositeDescription ? {
    ...option,
    name: `no-${option.name}`,
    type: "boolean",
    description: option.oppositeDescription
  } : null]);
  return optionsWithOpposites.flat().filter(Boolean);
}
function createUsage(context) {
  const sortedOptions = context.detailedOptions.sort((optionA, optionB) => optionA.name.localeCompare(optionB.name));
  const options = getOptionsWithOpposites(sortedOptions).filter(
    // remove unnecessary option (e.g. `semi`, `color`, etc.), which is only used for --help <flag>
    (option) => !(option.type === "boolean" && option.oppositeDescription && !option.name.startsWith("no-"))
  );
  const groupedOptions = groupBy(options, (option) => option.category);
  const firstCategories = categoryOrder.slice(0, -1);
  const lastCategories = categoryOrder.slice(-1);
  const restCategories = Object.keys(groupedOptions).filter((category) => !categoryOrder.includes(category));
  const allCategories = [...firstCategories, ...restCategories, ...lastCategories];
  const optionsUsage = allCategories.map((category) => {
    const categoryOptions = groupedOptions[category].map((option) => createOptionUsage(context, option, OPTION_USAGE_THRESHOLD)).join("\n");
    return `${category} options:

${indent(categoryOptions, 2)}`;
  });
  return [usageSummary, ...optionsUsage, ""].join("\n\n");
}
function createPluginDefaults(pluginDefaults) {
  if (!pluginDefaults || Object.keys(pluginDefaults).length === 0) {
    return "";
  }
  const defaults = Object.entries(pluginDefaults).sort(([pluginNameA], [pluginNameB]) => pluginNameA.localeCompare(pluginNameB)).map(([plugin, value]) => `* ${plugin}: ${createDefaultValueDisplay(value)}`).join("\n");
  return `
Plugin defaults:
${defaults}`;
}
function createDetailedUsage(context, flag) {
  const option = getOptionsWithOpposites(context.detailedOptions).find((option2) => option2.name === flag || option2.alias === flag);
  const header = createOptionUsageHeader(option);
  const description = `

${indent(option.description, 2)}`;
  const choices = option.type !== "choice" ? "" : `

Valid options:

${createChoiceUsages(option.choices, CHOICE_USAGE_MARGIN, CHOICE_USAGE_INDENTATION).join("\n")}`;
  const optionDefaultValue = getOptionDefaultValue(context, option.name);
  const defaults = optionDefaultValue !== void 0 ? `

Default: ${createDefaultValueDisplay(optionDefaultValue)}` : "";
  const pluginDefaults = createPluginDefaults(option.pluginDefaults);
  return `${header}${description}${choices}${defaults}${pluginDefaults}`;
}

// src/cli/index.js
async function run(rawArguments = process.argv.slice(2)) {
  let logger = logger_default();
  try {
    const { logLevel } = parseArgvWithoutPlugins(
      rawArguments,
      logger,
      "log-level"
    );
    if (logLevel !== logger.logLevel) {
      logger = logger_default(logLevel);
    }
    const context = new context_default({ rawArguments, logger });
    await context.init();
    if (logger.logLevel !== "debug" && context.performanceTestFlag) {
      context.logger = logger_default("debug");
    }
    await main(context);
  } catch (error) {
    logger.error(error.message);
    process.exitCode = 1;
  }
}
async function main(context) {
  context.logger.debug(`normalized argv: ${JSON.stringify(context.argv)}`);
  if (context.argv.config === false && context.argv.__raw.config !== false || context.argv.config && context.rawArguments.includes("--no-config")) {
    throw new Error("Cannot use --no-config and --config together.");
  }
  if (context.argv.check && context.argv.listDifferent) {
    throw new Error("Cannot use --check and --list-different together.");
  }
  if (context.argv.write && context.argv.debugCheck) {
    throw new Error("Cannot use --write and --debug-check together.");
  }
  if (context.argv.findConfigPath && context.filePatterns.length > 0) {
    throw new Error("Cannot use --find-config-path with multiple files");
  }
  if (context.argv.fileInfo && context.filePatterns.length > 0) {
    throw new Error("Cannot use --file-info with multiple files");
  }
  if (!context.argv.cache && context.argv.cacheStrategy) {
    throw new Error("`--cache-strategy` cannot be used without `--cache`.");
  }
  if (context.argv.version) {
    printToScreen(prettier2.version);
    return;
  }
  if (context.argv.help !== void 0) {
    printToScreen(
      typeof context.argv.help === "string" && context.argv.help !== "" ? createDetailedUsage(context, context.argv.help) : createUsage(context)
    );
    return;
  }
  if (context.argv.supportInfo) {
    return print_support_info_default();
  }
  if (context.argv.findConfigPath) {
    await find_config_path_default(context);
    return;
  }
  if (context.argv.fileInfo) {
    await file_info_default(context);
    return;
  }
  const hasFilePatterns = context.filePatterns.length > 0;
  const useStdin = !hasFilePatterns && (!mockable_default.isStreamTTY(process.stdin) || context.argv.filepath);
  if (useStdin) {
    if (context.argv.cache) {
      throw new Error("`--cache` cannot be used when formatting stdin.");
    }
    await formatStdin(context);
    return;
  }
  if (hasFilePatterns) {
    await formatFiles(context);
    return;
  }
  process.exitCode = 1;
  printToScreen(createUsage(context));
}
export {
  mockable,
  run
};

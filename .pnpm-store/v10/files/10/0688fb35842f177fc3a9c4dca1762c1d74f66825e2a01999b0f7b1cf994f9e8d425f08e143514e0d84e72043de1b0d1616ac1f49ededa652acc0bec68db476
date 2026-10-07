'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var dequal = require('dequal');
var sandpackClient = require('@codesandbox/sandpack-client');
var autocomplete = require('@codemirror/autocomplete');
var commands = require('@codemirror/commands');
var language = require('@codemirror/language');
var state = require('@codemirror/state');
var view = require('@codemirror/view');
var useIntersectionObserver = require('@react-hook/intersection-observer');
var langCss = require('@codemirror/lang-css');
var langHtml = require('@codemirror/lang-html');
var langJavascript = require('@codemirror/lang-javascript');
var highlight = require('@lezer/highlight');
var Anser = require('anser');
var escapeCarriage = require('escape-carriage');
var LZString = require('lz-string');
var cleanSet = require('clean-set');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var useIntersectionObserver__default = /*#__PURE__*/_interopDefault(useIntersectionObserver);
var Anser__default = /*#__PURE__*/_interopDefault(Anser);
var LZString__default = /*#__PURE__*/_interopDefault(LZString);
var cleanSet__default = /*#__PURE__*/_interopDefault(cleanSet);

var __assign = function () {
  __assign = Object.assign || (function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  });
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  }, f, y, t, g;
  return (g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g);
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if ((f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
      if ((y = 0, t)) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !((i in from))) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var SVG = function (props) {
  return jsxRuntime.jsx("svg", __assign({
    fill: "currentColor",
    height: "16",
    viewBox: "0 0 16 16",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props));
};
var SignInIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    viewBox: "0 0 48 48",
    children: [jsxRuntime.jsx("title", {
      children: "Sign in"
    }), jsxRuntime.jsx("path", {
      d: "M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z"
    })]
  });
};
var SignOutIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    viewBox: "0 0 48 48",
    children: [jsxRuntime.jsx("title", {
      children: "Sign out"
    }), jsxRuntime.jsx("path", {
      d: "M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z"
    })]
  });
};
var RestartIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    fill: "none",
    stroke: "currentColor",
    children: [jsxRuntime.jsx("title", {
      children: "Restart script"
    }), jsxRuntime.jsx("path", {
      d: "M8 2C4.68629 2 2 4.68629 2 8C2 10.0946 3.07333 11.9385 4.7 13.0118",
      strokeLinecap: "round"
    }), jsxRuntime.jsx("path", {
      d: "M14.0005 7.9998C14.0005 5.82095 12.8391 3.91335 11.1016 2.8623",
      strokeLinecap: "round"
    }), jsxRuntime.jsx("path", {
      d: "M14.0003 2.3335H11.167C10.8908 2.3335 10.667 2.55735 10.667 2.8335V5.66683",
      strokeLinecap: "round"
    }), jsxRuntime.jsx("path", {
      d: "M1.99967 13.6665L4.83301 13.6665C5.10915 13.6665 5.33301 13.4426 5.33301 13.1665L5.33301 10.3332",
      strokeLinecap: "round"
    }), jsxRuntime.jsx("path", {
      d: "M10 10L12 12L10 14",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), jsxRuntime.jsx("path", {
      d: "M14.667 14L12.667 14",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
};
var RunIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    children: [jsxRuntime.jsx("title", {
      children: "Run sandbox"
    }), jsxRuntime.jsx("path", {
      d: "M11.0792 8.1078C11.2793 8.25007 11.27 8.55012 11.0616 8.67981L6.02535 11.8135C5.79638 11.956 5.5 11.7913 5.5 11.5216L5.5 8.40703L5.5 4.80661C5.5 4.52735 5.81537 4.36463 6.04296 4.52647L11.0792 8.1078Z"
    })]
  });
};
var BackwardIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    children: [jsxRuntime.jsx("title", {
      children: "Click to go back"
    }), jsxRuntime.jsx("path", {
      d: "M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64644C10.1583 3.45118 9.84171 3.45118 9.64645 3.64644L10.3536 4.35355ZM6.07072 7.92929L5.71716 7.57573L6.07072 7.92929ZM10.3536 11.6464L6.42427 7.71716L5.71716 8.42426L9.64645 12.3536L10.3536 11.6464ZM6.42427 8.28284L10.3536 4.35355L9.64645 3.64644L5.71716 7.57573L6.42427 8.28284ZM6.42427 7.71716C6.58048 7.87337 6.58048 8.12663 6.42427 8.28284L5.71716 7.57573C5.48285 7.81005 5.48285 8.18995 5.71716 8.42426L6.42427 7.71716Z"
    })]
  });
};
var ForwardIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    children: [jsxRuntime.jsx("title", {
      children: "Click to go forward"
    }), jsxRuntime.jsx("path", {
      d: "M6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L6.35355 3.64645ZM5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L5.64645 11.6464ZM9.92929 8.07071L10.2828 8.42426L9.92929 8.07071ZM5.64645 4.35355L9.57574 8.28284L10.2828 7.57574L6.35355 3.64645L5.64645 4.35355ZM9.57574 7.71716L5.64645 11.6464L6.35355 12.3536L10.2828 8.42426L9.57574 7.71716ZM9.57574 8.28284C9.41952 8.12663 9.41953 7.87337 9.57574 7.71716L10.2828 8.42426C10.5172 8.18995 10.5172 7.81005 10.2828 7.57574L9.57574 8.28284Z"
    })]
  });
};
var RefreshIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    children: [jsxRuntime.jsx("title", {
      children: "Refresh preview"
    }), jsxRuntime.jsx("path", {
      clipRule: "evenodd",
      d: "M3.83325 7.99992C3.83325 5.69867 5.69853 3.83325 7.99934 3.83325C9.81246 3.83325 11.3563 4.99195 11.9285 6.61097C11.9396 6.6425 11.9536 6.67221 11.97 6.69992H8.80005C8.52391 6.69992 8.30005 6.92378 8.30005 7.19992C8.30005 7.47606 8.52391 7.69992 8.80005 7.69992H12.5667C12.8981 7.69992 13.1667 7.43129 13.1667 7.09992V3.33325C13.1667 3.05711 12.9429 2.83325 12.6667 2.83325C12.3906 2.83325 12.1667 3.05711 12.1667 3.33325V4.94608C11.2268 3.66522 9.7106 2.83325 7.99934 2.83325C5.14613 2.83325 2.83325 5.14651 2.83325 7.99992C2.83325 10.8533 5.14613 13.1666 7.99934 13.1666C9.91218 13.1666 11.5815 12.1266 12.474 10.5836C12.6123 10.3446 12.5306 10.0387 12.2915 9.90044C12.0525 9.76218 11.7466 9.84387 11.6084 10.0829C10.8873 11.3296 9.54072 12.1666 7.99934 12.1666C5.69853 12.1666 3.83325 10.3012 3.83325 7.99992Z",
      fillRule: "evenodd"
    })]
  });
};
var CleanIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    fill: "none",
    stroke: "currentColor",
    children: [jsxRuntime.jsx("title", {
      children: "Clean"
    }), jsxRuntime.jsx("circle", {
      cx: "7.99998",
      cy: "8.00004",
      r: "4.66667",
      strokeLinecap: "round"
    }), jsxRuntime.jsx("path", {
      d: "M4.66669 4.66663L11.3334 11.3333"
    })]
  });
};
var ExportIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    fill: "none",
    stroke: "currentColor",
    children: [jsxRuntime.jsx("title", {
      children: "Open on CodeSandbox"
    }), jsxRuntime.jsx("path", {
      d: "M6.66665 3.33337H4.33331C3.78103 3.33337 3.33331 3.78109 3.33331 4.33337V11.6667C3.33331 12.219 3.78103 12.6667 4.33331 12.6667H11.6666C12.2189 12.6667 12.6666 12.219 12.6666 11.6667V9.33337",
      strokeLinecap: "round"
    }), jsxRuntime.jsx("path", {
      d: "M10 3.33337H12.5667C12.6219 3.33337 12.6667 3.37815 12.6667 3.43337V6.00004",
      strokeLinecap: "round"
    }), jsxRuntime.jsx("path", {
      d: "M7.33331 8.66668L12.5333 3.46667",
      strokeLinecap: "round"
    })]
  });
};
var DirectoryIconOpen = function () {
  return jsxRuntime.jsxs(SVG, {
    children: [jsxRuntime.jsx("title", {
      children: "Directory"
    }), jsxRuntime.jsx("path", {
      d: "M12.5526 12.6667H3.66675C3.2922 12.6667 2.96575 12.4608 2.79442 12.156L3.81072 8.0908C3.92201 7.64563 4.32199 7.33333 4.78086 7.33333H13.386C14.0365 7.33333 14.5139 7.94472 14.3561 8.57587L13.5228 11.9092C13.4115 12.3544 13.0115 12.6667 12.5526 12.6667Z",
      fill: "currentColor"
    }), jsxRuntime.jsx("path", {
      d: "M13.3334 6.63333V6.33333C13.3334 5.78105 12.8857 5.33333 12.3334 5.33333H8.30286C8.10543 5.33333 7.91242 5.2749 7.74816 5.16538L6.25201 4.16795C6.08774 4.05844 5.89473 4 5.69731 4H3.66675C3.11446 4 2.66675 4.44772 2.66675 5L2.66675 11.6667C2.66675 12.219 3.11446 12.6667 3.66675 12.6667H12.5526C13.0115 12.6667 13.4115 12.3544 13.5228 11.9092L14.3561 8.57587C14.5139 7.94472 14.0365 7.33333 13.386 7.33333H4.78086C4.32199 7.33333 3.92201 7.64563 3.81072 8.0908L2.75008 12.3333",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round"
    })]
  });
};
var DirectoryIconClosed = function () {
  return jsxRuntime.jsxs(SVG, {
    children: [jsxRuntime.jsx("title", {
      children: "Directory"
    }), jsxRuntime.jsx("path", {
      d: "M12.3334 12.6667H3.66675C3.11446 12.6667 2.66675 12.219 2.66675 11.6667V5C2.66675 4.44772 3.11446 4 3.66675 4H5.69731C5.89473 4 6.08774 4.05844 6.25201 4.16795L7.74816 5.16538C7.91242 5.2749 8.10543 5.33333 8.30286 5.33333H12.3334C12.8857 5.33333 13.3334 5.78105 13.3334 6.33333V11.6667C13.3334 12.219 12.8857 12.6667 12.3334 12.6667Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "round"
    })]
  });
};
var FileIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    fill: "currentColor",
    children: [jsxRuntime.jsx("title", {
      children: "File"
    }), jsxRuntime.jsx("path", {
      clipRule: "evenodd",
      d: "M4.5 4.33325C4.5 4.05711 4.72386 3.83325 5 3.83325H8.16675V6.56659C8.16675 6.89795 8.43538 7.16658 8.76675 7.16658H11.5V12.3333C11.5 12.6094 11.2761 12.8333 11 12.8333H5C4.72386 12.8333 4.5 12.6094 4.5 12.3333V4.33325ZM12.5 6.67568C12.5001 6.67265 12.5001 6.66962 12.5001 6.66658C12.5001 6.66355 12.5001 6.66052 12.5 6.65749V6.41413C12.5 6.01631 12.342 5.63478 12.0607 5.35347L9.97978 3.27259C9.69848 2.99129 9.31694 2.83325 8.91912 2.83325H8.66675H5C4.17157 2.83325 3.5 3.50483 3.5 4.33325V12.3333C3.5 13.1617 4.17157 13.8333 5 13.8333H11C11.8284 13.8333 12.5 13.1617 12.5 12.3333V6.67568ZM9.16675 3.89888C9.20518 3.92078 9.24085 3.94787 9.27267 3.9797L11.3536 6.06058C11.3854 6.09243 11.4125 6.12813 11.4344 6.16658H9.16675V3.89888Z",
      fillRule: "evenodd"
    })]
  });
};
var CloseIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    stroke: "currentColor",
    children: [jsxRuntime.jsx("title", {
      children: "Close file"
    }), jsxRuntime.jsx("path", {
      d: "M12 4L4 12",
      strokeLinecap: "round"
    }), jsxRuntime.jsx("path", {
      d: "M4 4L12 12",
      strokeLinecap: "round"
    })]
  });
};
var ConsoleIcon = function () {
  return jsxRuntime.jsxs(SVG, {
    children: [jsxRuntime.jsx("title", {
      children: "Open browser console"
    }), jsxRuntime.jsx("path", {
      d: "M5.65871 3.62037C5.44905 3.44066 5.1334 3.46494 4.95368 3.6746C4.77397 3.88427 4.79825 4.19992 5.00792 4.37963L5.65871 3.62037ZM5.00792 11.6204C4.79825 11.8001 4.77397 12.1157 4.95368 12.3254C5.1334 12.5351 5.44905 12.5593 5.65871 12.3796L5.00792 11.6204ZM9.9114 7.92407L10.2368 7.54445L9.9114 7.92407ZM5.00792 4.37963L9.586 8.3037L10.2368 7.54445L5.65871 3.62037L5.00792 4.37963ZM9.586 7.6963L5.00792 11.6204L5.65871 12.3796L10.2368 8.45555L9.586 7.6963ZM9.586 8.3037C9.39976 8.14407 9.39976 7.85594 9.586 7.6963L10.2368 8.45555C10.5162 8.2161 10.5162 7.7839 10.2368 7.54445L9.586 8.3037Z"
    }), jsxRuntime.jsx("path", {
      d: "M10 11.5C9.72386 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.72386 12.5 10 12.5V11.5ZM14.6667 12.5C14.9428 12.5 15.1667 12.2761 15.1667 12C15.1667 11.7239 14.9428 11.5 14.6667 11.5V12.5ZM10 12.5H14.6667V11.5H10V12.5Z"
    })]
  });
};

var _a$1;
var defaultLight = {
  colors: {
    surface1: "#ffffff",
    surface2: "#EFEFEF",
    surface3: "#F3F3F3",
    disabled: "#C5C5C5",
    base: "#323232",
    clickable: "#808080",
    hover: "#4D4D4D",
    accent: "#3973E0",
    error: "#EA3323",
    errorSurface: "#FCF1F0",
    warning: "#6A4516",
    warningSurface: "#FEF2C0"
  },
  syntax: {
    plain: "#151515",
    comment: {
      color: "#999",
      fontStyle: "italic"
    },
    keyword: "#7C5AE3",
    tag: "#0971F1",
    punctuation: "#3B3B3B",
    definition: "#85A600",
    property: "#3B3B3B",
    static: "#3B3B3B",
    string: "#2E6BD0"
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: "13px",
    lineHeight: "20px"
  }
};
var defaultDark = {
  colors: {
    surface1: "#151515",
    surface2: "#252525",
    surface3: "#2F2F2F",
    disabled: "#4D4D4D",
    base: "#808080",
    clickable: "#999999",
    hover: "#C5C5C5",
    accent: "#E5E5E5",
    error: "#FFB4A6",
    errorSurface: "#690000",
    warning: "#E7C400",
    warningSurface: "#3A3000"
  },
  syntax: {
    plain: "#FFFFFF",
    comment: {
      color: "#757575",
      fontStyle: "italic"
    },
    keyword: "#77B7D7",
    tag: "#DFAB5C",
    punctuation: "#ffffff",
    definition: "#86D9CA",
    property: "#77B7D7",
    static: "#C64640",
    string: "#977CDC"
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: "13px",
    lineHeight: "20px"
  }
};
var SANDPACK_THEMES = {
  light: defaultLight,
  dark: defaultDark,
  auto: typeof window !== "undefined" ? ((_a$1 = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a$1 === void 0 ? void 0 : _a$1.call(window, "(prefers-color-scheme: dark)").matches) ? defaultDark : defaultLight : defaultLight
};

var getFileName = function (filePath) {
  var lastIndexOfSlash = filePath.lastIndexOf("/");
  return filePath.slice(lastIndexOfSlash + 1);
};
var calculateNearestUniquePath = function (currentPath, otherPaths) {
  var currentPathParts = (currentPath[0] === "/" ? currentPath.slice(1) : currentPath).split("/");
  var resultPathParts = [];
  if (currentPathParts.length === 1) {
    resultPathParts.unshift(currentPathParts[0]);
  } else {
    for (var fileIndex = 0; fileIndex < otherPaths.length; fileIndex++) {
      var otherPathParts = otherPaths[fileIndex].split("/");
      for (var partsFromEnd = 1; partsFromEnd <= currentPathParts.length; partsFromEnd++) {
        var currentPathPart = currentPathParts[currentPathParts.length - partsFromEnd];
        var otherPathPart = otherPathParts[otherPathParts.length - partsFromEnd];
        if (resultPathParts.length < partsFromEnd) {
          resultPathParts.unshift(currentPathPart);
        }
        if (currentPathPart !== otherPathPart) {
          break;
        }
      }
    }
  }
  if (resultPathParts.length < currentPathParts.length) {
    resultPathParts.unshift("..");
  }
  return resultPathParts.join("/");
};
var isDarkColor = function (color) {
  var r = 0;
  var g = 0;
  var b = 0;
  if (color.startsWith("#")) {
    if (color.length < 7) {
      return true;
    }
    r = parseInt(color.substr(1, 2), 16);
    g = parseInt(color.substr(3, 2), 16);
    b = parseInt(color.substr(5, 2), 16);
  } else {
    var rgbValues = color.replace("rgb(", "").replace("rgba(", "").replace(")", "").split(",");
    if (rgbValues.length < 3) {
      return true;
    }
    r = parseInt(rgbValues[0], 10);
    g = parseInt(rgbValues[1], 10);
    b = parseInt(rgbValues[2], 10);
  }
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 128;
};
var lastCount = 0;
var generateRandomId = function () {
  var random = +(Date.now().toString(10).substr(0, 4) + lastCount++);
  return random.toString(16);
};

var toString = function () {
  return "";
};
var doubleToString = function () {
  return toString;
};
var defineProperty = Object.getOwnPropertyDescriptors({
  toString: toString
});
Object.defineProperties(toString, defineProperty);
Object.defineProperties(doubleToString, defineProperty);
var createStitchesMock = {
  createTheme: toString,
  css: doubleToString,
  getCssText: toString,
  keyframes: doubleToString
};

var _a;
var THEME_PREFIX = "sp";
var createTheme = (_a = createStitchesMock , _a.createTheme), getCssText = _a.getCssText, keyframes = _a.keyframes;
var defaultVariables = {
  space: new Array(11).fill(" ").reduce(function (acc, _, index) {
    var _a;
    return __assign(__assign({}, acc), (_a = {}, _a[index + 1] = ("").concat((index + 1) * 4, "px"), _a));
  }, {}),
  border: {
    radius: "4px"
  },
  layout: {
    height: "300px",
    headerHeight: "40px"
  },
  transitions: {
    default: "150ms ease"
  },
  zIndices: {
    base: "1",
    overlay: "2",
    top: "3"
  }
};
var standardizeStitchesTheme = function (theme) {
  var syntaxEntries = Object.entries(theme.syntax);
  var syntax = syntaxEntries.reduce(function (tokenAcc, _a) {
    var _b;
    var tokenName = _a[0], tokenValue = _a[1];
    var newValues = (_b = {}, _b[("color-").concat(tokenName)] = tokenValue, _b);
    if (typeof tokenValue === "object") {
      newValues = Object.entries(tokenValue).reduce(function (valueAcc, _a) {
        var _b;
        var styleProp = _a[0], styleValue = _a[1];
        return __assign(__assign({}, valueAcc), (_b = {}, _b[("").concat(styleProp, "-").concat(tokenName)] = styleValue, _b));
      }, {});
    }
    return __assign(__assign({}, tokenAcc), newValues);
  }, {});
  return __assign(__assign({}, defaultVariables), {
    colors: theme.colors,
    font: theme.font,
    syntax: syntax
  });
};
var standardizeTheme = function (inputTheme) {
  var _a, _b, _c, _d, _e;
  if (inputTheme === void 0) {
    inputTheme = "light";
  }
  var defaultLightThemeKey = "default";
  if (typeof inputTheme === "string") {
    var predefinedTheme = SANDPACK_THEMES[inputTheme];
    if (!predefinedTheme) {
      throw new Error(("[sandpack-react]: invalid theme '").concat(inputTheme, "' provided."));
    }
    return {
      theme: predefinedTheme,
      id: inputTheme,
      mode: isDarkColor(predefinedTheme.colors.surface1) ? "dark" : "light"
    };
  }
  var mode = isDarkColor((_b = (_a = inputTheme === null || inputTheme === void 0 ? void 0 : inputTheme.colors) === null || _a === void 0 ? void 0 : _a.surface1) !== null && _b !== void 0 ? _b : defaultLight.colors.surface1) ? "dark" : "light";
  var baseTheme = mode === "dark" ? defaultDark : defaultLight;
  var colorsByMode = __assign(__assign({}, baseTheme.colors), (_c = inputTheme === null || inputTheme === void 0 ? void 0 : inputTheme.colors) !== null && _c !== void 0 ? _c : {});
  var syntaxByMode = __assign(__assign({}, baseTheme.syntax), (_d = inputTheme === null || inputTheme === void 0 ? void 0 : inputTheme.syntax) !== null && _d !== void 0 ? _d : {});
  var fontByMode = __assign(__assign({}, baseTheme.font), (_e = inputTheme === null || inputTheme === void 0 ? void 0 : inputTheme.font) !== null && _e !== void 0 ? _e : {});
  var theme = {
    colors: colorsByMode,
    syntax: syntaxByMode,
    font: fontByMode
  };
  var id = inputTheme ? simpleHashFunction(JSON.stringify(theme)) : defaultLightThemeKey;
  return {
    theme: theme,
    id: ("sp-").concat(id),
    mode: mode
  };
};
var simpleHashFunction = function (str) {
  var hash = 0;
  for (var i = 0; i < str.length; hash &= hash) {
    hash = 31 * hash + str.charCodeAt(i++);
  }
  return Math.abs(hash);
};
var fakeCss = function () {
  return "";
};
fakeCss.toString = fakeCss;

var ClassNamesContext = React.createContext({});
var ClassNamesProvider = function (_a) {
  var children = _a.children, classes = _a.classes;
  return jsxRuntime.jsx(ClassNamesContext.Provider, {
    value: classes || ({}),
    children: children
  });
};
var useClassNames = function () {
  var contextClassNames = React.useContext(ClassNamesContext);
  return function sandpackClassNames(customClassName, allClassNames) {
    if (allClassNames === void 0) {
      allClassNames = [];
    }
    var custom = ("").concat(THEME_PREFIX, "-").concat(customClassName);
    return joinClassNames.apply(void 0, __spreadArray(__spreadArray([], allClassNames, false), [custom, contextClassNames[custom]], false));
  };
};
var joinClassNames = function () {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.filter(Boolean).join(" ");
};

var wrapperClassName$3 = fakeCss;
var SandpackThemeContext = React__namespace.createContext({
  theme: defaultLight,
  id: "light",
  mode: "light"
});
var SandpackThemeProvider = function (_a) {
  var themeFromProps = _a.theme, children = _a.children, className = _a.className, props = __rest(_a, ["theme", "children", "className"]);
  var _b = React__namespace.useState(themeFromProps), prefferedTheme = _b[0], setPreferredTheme = _b[1];
  var _c = standardizeTheme(prefferedTheme), theme = _c.theme, id = _c.id, mode = _c.mode;
  var classNames = useClassNames();
  var themeClassName = React__namespace.useMemo(function () {
    return createTheme(id, standardizeStitchesTheme(theme));
  }, [theme, id]);
  React__namespace.useEffect(function () {
    if (themeFromProps !== "auto") {
      setPreferredTheme(themeFromProps);
      return;
    }
    var colorSchemeChange = function (_a) {
      var matches = _a.matches;
      setPreferredTheme(matches ? "dark" : "light");
    };
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", colorSchemeChange);
    return function () {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", colorSchemeChange);
    };
  }, [themeFromProps]);
  return jsxRuntime.jsx(SandpackThemeContext.Provider, {
    value: {
      theme: theme,
      id: id,
      mode: mode
    },
    children: jsxRuntime.jsx("div", __assign({
      className: classNames("wrapper", [themeClassName, wrapperClassName$3(), className])
    }, props, {
      children: children
    }))
  });
};
var SandpackThemeConsumer = SandpackThemeContext.Consumer;

var commonFiles = {
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  }
};

var ASTRO_TEMPLATE = {
  files: {
    "/src/styles.css": commonFiles["/styles.css"],
    "/src/pages/index.astro": {
      code: "---\nimport \"../styles.css\";\nconst data = \"world\";\n---\n\n<h1>Hello {data}</h1>\n\n<style>\n  h1 {\n    font-size: 1.5rem;\n  }\n</style>"
    },
    ".env": {
      code: "ASTRO_TELEMETRY_DISABLED=\"1\""
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {
          astro: "^1.6.12",
          "esbuild-wasm": "^0.15.16"
        },
        scripts: {
          dev: "astro dev",
          start: "astro dev",
          build: "astro build",
          preview: "astro preview",
          astro: "astro"
        }
      })
    }
  },
  main: "/src/pages/index.astro",
  environment: "node"
};

var NEXTJS_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/pages/_app.js": {
      code: "import '../styles.css'\n\nexport default function MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />\n}"
    },
    "/pages/index.js": {
      code: "export default function Home({ data }) {\n  return (\n    <div>\n      <h1>Hello {data}</h1>\n    </div>\n  );\n}\n  \nexport function getServerSideProps() {\n  return {\n    props: { data: \"world\" },\n  }\n}\n"
    },
    "/next.config.js": {
      code: "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  swcMinify: true,\n}\n\nmodule.exports = nextConfig\n"
    },
    "/package.json": {
      code: JSON.stringify({
        name: "my-app",
        version: "0.1.0",
        private: true,
        scripts: {
          dev: "NEXT_TELEMETRY_DISABLED=1 next dev",
          build: "next build",
          start: "next start",
          lint: "next lint"
        },
        dependencies: {
          next: "12.1.6",
          react: "18.2.0",
          "react-dom": "18.2.0",
          "@next/swc-wasm-nodejs": "12.1.6"
        }
      })
    }
  }),
  main: "/pages/index.js",
  environment: "node"
};

var NODE_TEMPLATE = {
  files: {
    "/index.js": {
      code: "const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/html');\n  res.end('Hello world');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});"
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {},
        scripts: {
          start: "node index.js"
        },
        main: "index.js"
      })
    }
  },
  main: "/index.js",
  environment: "node"
};

var VITE_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/index.js": {
      code: "import \"./styles.css\";\n\ndocument.getElementById(\"app\").innerHTML = `\n<h1>Hello world</h1>\n`;\n"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/index.js\"></script>\n  </body>\n</html>\n"
    },
    "/package.json": {
      code: JSON.stringify({
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview"
        },
        devDependencies: {
          vite: "4.1.4",
          "esbuild-wasm": "0.17.12"
        }
      })
    }
  }),
  main: "/index.js",
  environment: "node"
};

var VITE_PREACT_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/App.jsx": {
      code: "export default function App() {\n  const data = \"world\"\n\n  return <h1>Hello {data}</h1>\n}\n"
    },
    "/index.jsx": {
      code: "import { render } from \"preact\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = document.getElementById(\"root\");\nrender(<App />, root);\n"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/index.jsx\"></script>\n  </body>\n</html>\n"
    },
    "/package.json": {
      code: JSON.stringify({
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview"
        },
        dependencies: {
          preact: "^10.16.0"
        },
        devDependencies: {
          "@preact/preset-vite": "^2.5.0",
          vite: "4.1.4",
          "esbuild-wasm": "0.17.12"
        }
      })
    },
    "/vite.config.js": {
      code: "import { defineConfig } from \"vite\";\nimport preact from '@preact/preset-vite'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [preact()],\n});\n"
    }
  }),
  main: "/App.jsx",
  environment: "node"
};

var VITE_PREACT_TS_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/App.tsx": {
      code: "export default function App() {\n  const data: string = \"world\"\n\n  return <h1>Hello {data}</h1>\n}\n"
    },
    "/index.tsx": {
      code: "import { render } from \"preact\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = document.getElementById(\"root\") as HTMLElement;\nrender(<App />, root);\n"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/index.tsx\"></script>\n  </body>\n</html>\n"
    },
    "/tsconfig.json": {
      code: JSON.stringify({
        compilerOptions: {
          target: "ESNext",
          useDefineForClassFields: true,
          lib: ["DOM", "DOM.Iterable", "ESNext"],
          allowJs: false,
          skipLibCheck: true,
          esModuleInterop: false,
          allowSyntheticDefaultImports: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          module: "ESNext",
          moduleResolution: "Node",
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: "react-jsx",
          jsxImportSource: "preact"
        },
        include: ["src"],
        references: [{
          path: "./tsconfig.node.json"
        }]
      }, null, 2)
    },
    "/tsconfig.node.json": {
      code: JSON.stringify({
        compilerOptions: {
          composite: true,
          module: "ESNext",
          moduleResolution: "Node",
          allowSyntheticDefaultImports: true
        },
        include: ["vite.config.ts"]
      }, null, 2)
    },
    "/package.json": {
      code: JSON.stringify({
        scripts: {
          dev: "vite",
          build: "tsc && vite build",
          preview: "vite preview"
        },
        dependencies: {
          preact: "^10.16.0"
        },
        devDependencies: {
          "@preact/preset-vite": "^2.5.0",
          typescript: "^4.9.5",
          vite: "4.1.4",
          "esbuild-wasm": "^0.17.12"
        }
      }, null, 2)
    },
    "/vite-env.d.ts": {
      code: '/// <reference types="vite/client" />'
    },
    "/vite.config.ts": {
      code: "import { defineConfig } from 'vite'\nimport preact from '@preact/preset-vite'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [preact()],\n})\n"
    }
  }),
  main: "/App.tsx",
  environment: "node"
};

var VITE_REACT_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/App.jsx": {
      code: "export default function App() {\n  const data = \"world\"\n\n  return <h1>Hello {data}</h1>\n}\n"
    },
    "/index.jsx": {
      code: "import { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = createRoot(document.getElementById(\"root\"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/index.jsx\"></script>\n  </body>\n</html>\n"
    },
    "/package.json": {
      code: JSON.stringify({
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview"
        },
        dependencies: {
          react: "^18.2.0",
          "react-dom": "^18.2.0"
        },
        devDependencies: {
          "@vitejs/plugin-react": "3.1.0",
          vite: "4.1.4",
          "esbuild-wasm": "0.17.12"
        }
      })
    },
    "/vite.config.js": {
      code: "import { defineConfig } from \"vite\";\nimport react from \"@vitejs/plugin-react\";\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n});\n"
    }
  }),
  main: "/App.jsx",
  environment: "node"
};

var VITE_REACT_TS_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/App.tsx": {
      code: "export default function App() {\n  const data: string = \"world\"\n\n  return <h1>Hello {data}</h1>\n}\n"
    },
    "/index.tsx": {
      code: "import { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\nimport React from \"react\";\n\nconst root = createRoot(document.getElementById(\"root\") as HTMLElement);\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/index.tsx\"></script>\n  </body>\n</html>\n"
    },
    "/tsconfig.json": {
      code: JSON.stringify({
        compilerOptions: {
          target: "ESNext",
          useDefineForClassFields: true,
          lib: ["DOM", "DOM.Iterable", "ESNext"],
          allowJs: false,
          skipLibCheck: true,
          esModuleInterop: false,
          allowSyntheticDefaultImports: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          module: "ESNext",
          moduleResolution: "Node",
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: "react-jsx"
        },
        include: ["src"],
        references: [{
          path: "./tsconfig.node.json"
        }]
      }, null, 2)
    },
    "/tsconfig.node.json": {
      code: JSON.stringify({
        compilerOptions: {
          composite: true,
          module: "ESNext",
          moduleResolution: "Node",
          allowSyntheticDefaultImports: true
        },
        include: ["vite.config.ts"]
      }, null, 2)
    },
    "/package.json": {
      code: JSON.stringify({
        scripts: {
          dev: "vite",
          build: "tsc && vite build",
          preview: "vite preview"
        },
        dependencies: {
          react: "^19.0.0",
          "react-dom": "^19.0.0"
        },
        devDependencies: {
          "@types/react": "^19.0.8",
          "@types/react-dom": "^19.0.3",
          "@vitejs/plugin-react": "^4.3.4",
          typescript: "^4.9.5",
          vite: "4.2.0",
          "esbuild-wasm": "^0.17.12"
        }
      }, null, 2)
    },
    "/vite-env.d.ts": {
      code: '/// <reference types="vite/client" />'
    },
    "/vite.config.ts": {
      code: "import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n})\n"
    }
  }),
  main: "/App.tsx",
  environment: "node"
};

var VITE_SVELTE_TEMPLATE = {
  files: {
    "/src/styles.css": commonFiles["/styles.css"],
    "/src/App.svelte": {
      code: "<script>\nconst data = \"world\";\n</script>\n\n<h1>Hello {data}</h1>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>"
    },
    "/src/main.js": {
      code: "import App from './App.svelte'\nimport \"./styles.css\"\n\nconst app = new App({\n  target: document.getElementById('app'),\n})\n\nexport default app"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/src/main.js\"></script>\n  </body>\n</html>\n"
    },
    "/vite.config.js": {
      code: "import { defineConfig } from 'vite'\nimport { svelte } from '@sveltejs/vite-plugin-svelte'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [svelte()],\n})"
    },
    "/package.json": {
      code: JSON.stringify({
        type: "module",
        scripts: {
          dev: "vite"
        },
        devDependencies: {
          "@sveltejs/vite-plugin-svelte": "^2.0.2",
          svelte: "^3.55.1",
          vite: "4.0.4",
          "esbuild-wasm": "^0.17.12"
        }
      })
    }
  },
  main: "/src/App.svelte",
  environment: "node"
};

var VITE_SVELTE_TS_TEMPLATE = {
  files: {
    "/src/styles.css": commonFiles["/styles.css"],
    "/src/App.svelte": {
      code: "<script lang=\"ts\">\nconst data: string = \"world\";\n</script>\n\n<h1>Hello {data}</h1>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>"
    },
    "/src/main.ts": {
      code: "import App from './App.svelte'\nimport \"./styles.css\"\n\nconst app = new App({\n  target: document.getElementById('app'),\n})\n\nexport default app"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/src/main.ts\"></script>\n  </body>\n</html>\n"
    },
    "/vite-env.d.ts": {
      code: "/// <reference types=\"svelte\" />\n/// <reference types=\"vite/client\" />"
    },
    "svelte.config.js": {
      code: "import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'\n\nexport default {\n  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess\n  // for more information about preprocessors\n  preprocess: vitePreprocess(),\n}\n"
    },
    "/vite.config.ts": {
      code: "import { defineConfig } from 'vite'\nimport { svelte } from '@sveltejs/vite-plugin-svelte'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [svelte()],\n})"
    },
    "tsconfig.json": {
      code: JSON.stringify({
        extends: "@tsconfig/svelte/tsconfig.json",
        compilerOptions: {
          target: "ESNext",
          useDefineForClassFields: true,
          module: "ESNext",
          resolveJsonModule: true,
          allowJs: true,
          checkJs: true,
          isolatedModules: true
        },
        include: ["src/**/*.d.ts", "src/**/*.ts", "src/**/*.js", "src/**/*.svelte"],
        references: [{
          path: "./tsconfig.node.json"
        }]
      }, null, 2)
    },
    "tsconfig.node.json": {
      code: JSON.stringify({
        compilerOptions: {
          composite: true,
          module: "ESNext",
          moduleResolution: "Node"
        },
        include: ["vite.config.ts"]
      }, null, 2)
    },
    "/package.json": {
      code: JSON.stringify({
        type: "module",
        scripts: {
          dev: "vite"
        },
        devDependencies: {
          "@sveltejs/vite-plugin-svelte": "^2.0.2",
          "@tsconfig/svelte": "^3.0.0",
          svelte: "^3.55.1",
          "svelte-check": "^2.10.3",
          tslib: "^2.5.0",
          vite: "4.1.4",
          "esbuild-wasm": "^0.17.12"
        }
      }, null, 2)
    }
  },
  main: "/src/App.svelte",
  environment: "node"
};

var VITE_VUE_TEMPLATE = {
  files: {
    "/src/styles.css": commonFiles["/styles.css"],
    "/src/App.vue": {
      code: "<script setup>\nimport { ref } from \"vue\";\n\nconst data = ref(\"world\");\n</script>\n\n<template>\n  <h1>Hello {{ data }}</h1>\n</template>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>"
    },
    "/src/main.js": {
      code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\"\n            \ncreateApp(App).mount('#app')            \n"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/src/main.js\"></script>\n  </body>\n</html>\n"
    },
    "/vite.config.js": {
      code: "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [vue()]\n})\n"
    },
    "/package.json": {
      code: JSON.stringify({
        scripts: {
          dev: "vite",
          build: "vite build",
          preview: "vite preview"
        },
        dependencies: {
          vue: "^3.2.45"
        },
        devDependencies: {
          "@vitejs/plugin-vue": "3.2.0",
          vite: "4.1.4",
          "esbuild-wasm": "0.17.12"
        }
      })
    }
  },
  main: "/src/App.vue",
  environment: "node"
};

var VITE_VUE_TS_TEMPLATE = {
  files: {
    "/src/styles.css": commonFiles["/styles.css"],
    "/src/App.vue": {
      code: "<script setup lang=\"ts\">\nimport { ref } from \"vue\";\n\nconst data = ref<string>(\"world\");\n</script>\n\n<template>\n  <h1>Hello {{ data }}</h1>\n</template>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>"
    },
    "/src/main.ts": {
      code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\"\n\ncreateApp(App).mount('#app')\n"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/src/main.ts\"></script>\n  </body>\n</html>\n"
    },
    "/vite-env.d.ts": {
      code: '/// <reference types="vite/client" />'
    },
    "/vite.config.ts": {
      code: "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [vue()]\n})\n"
    },
    "tsconfig.json": {
      code: JSON.stringify({
        compilerOptions: {
          target: "ESNext",
          useDefineForClassFields: true,
          module: "ESNext",
          moduleResolution: "Node",
          strict: true,
          jsx: "preserve",
          resolveJsonModule: true,
          isolatedModules: true,
          esModuleInterop: true,
          lib: ["ESNext", "DOM"],
          skipLibCheck: true,
          noEmit: true
        },
        include: ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
        references: [{
          path: "./tsconfig.node.json"
        }]
      }, null, 2)
    },
    "tsconfig.node.json": {
      code: JSON.stringify({
        compilerOptions: {
          composite: true,
          module: "ESNext",
          moduleResolution: "Node",
          allowSyntheticDefaultImports: true
        },
        include: ["vite.config.ts"]
      }, null, 2)
    },
    "/package.json": {
      code: JSON.stringify({
        scripts: {
          dev: "vite",
          build: "tsc && vite build",
          preview: "vite preview"
        },
        dependencies: {
          vue: "^3.2.47"
        },
        devDependencies: {
          "@vitejs/plugin-vue": "^4.0.0",
          vite: "4.1.4",
          "vue-tsc": "^1.2.0",
          typescript: "^4.9.5",
          "esbuild-wasm": "^0.17.12"
        }
      }, null, 2)
    }
  },
  main: "/src/App.vue",
  environment: "node"
};

var ANGULAR_TEMPLATE = {
  files: {
    "/src/app/app.component.css": commonFiles["/styles.css"],
    "/src/app/app.component.html": {
      code: "<div>\n<h1>{{ helloWorld }}</h1>\n</div>     \n"
    },
    "/src/app/app.component.ts": {
      code: "import { Component } from \"@angular/core\";\n\n@Component({\n  selector: \"app-root\",\n  templateUrl: \"./app.component.html\",\n  styleUrls: [\"./app.component.css\"]\n})\nexport class AppComponent {\n  helloWorld = \"Hello world\";\n}           \n"
    },
    "/src/app/app.module.ts": {
      code: "import { BrowserModule } from \"@angular/platform-browser\";\nimport { NgModule } from \"@angular/core\";\n      \nimport { AppComponent } from \"./app.component\";\n      \n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}       \n"
    },
    "/src/index.html": {
      code: "<!doctype html>\n<html lang=\"en\">\n      \n<head>\n  <meta charset=\"utf-8\">\n  <title>Angular</title>\n  <base href=\"/\">\n      \n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n</head>\n      \n<body>\n   <app-root></app-root>\n</body>\n      \n</html>\n"
    },
    "/src/main.ts": {
      code: "import { enableProdMode } from \"@angular/core\";\nimport { platformBrowserDynamic } from \"@angular/platform-browser-dynamic\";\n      \nimport { AppModule } from \"./app/app.module\";      \n\nplatformBrowserDynamic()\n  .bootstrapModule(AppModule)\n  .catch(err => console.log(err));\n      \n"
    },
    "/src/polyfills.ts": {
      code: "import \"core-js/proposals/reflect-metadata\";   \n      import \"zone.js/dist/zone\";\n"
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {
          "@angular/core": "^11.2.0",
          "@angular/platform-browser": "^11.2.0",
          "@angular/platform-browser-dynamic": "^11.2.0",
          "@angular/common": "^11.2.0",
          "@angular/compiler": "^11.2.0",
          "zone.js": "0.11.3",
          "core-js": "3.8.3",
          rxjs: "6.6.3"
        },
        main: "/src/main.ts"
      })
    }
  },
  main: "/src/app/app.component.ts",
  environment: "angular-cli"
};

var REACT_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/App.js": {
      code: "export default function App() {\n  return <h1>Hello world</h1>\n}\n"
    },
    "/index.js": {
      code: "import React, { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = createRoot(document.getElementById(\"root\"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);"
    },
    "/public/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n  </body>\n</html>"
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {
          react: "^19.0.0",
          "react-dom": "^19.0.0",
          "react-scripts": "^5.0.0"
        },
        main: "/index.js"
      })
    }
  }),
  main: "/App.js",
  environment: "create-react-app"
};

var REACT_TYPESCRIPT_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "tsconfig.json": {
      code: "{\n  \"include\": [\n    \"./**/*\"\n  ],\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"lib\": [ \"dom\", \"es2015\" ],\n    \"jsx\": \"react-jsx\"\n  }\n}"
    },
    "/App.tsx": {
      code: "export default function App(): JSX.Element {\n  return <h1>Hello world</h1>\n}\n"
    },
    "/index.tsx": {
      code: "import React, { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = createRoot(document.getElementById(\"root\"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);"
    },
    "/public/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n  </body>\n</html>"
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {
          react: "^19.0.0",
          "react-dom": "^19.0.0",
          "react-scripts": "^4.0.0"
        },
        devDependencies: {
          "@types/react": "^19.0.0",
          "@types/react-dom": "^19.0.0",
          typescript: "^4.0.0"
        },
        main: "/index.tsx"
      })
    }
  }),
  main: "/App.tsx",
  environment: "create-react-app"
};

var SOLID_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/App.tsx": {
      code: "import { Component } from \"solid-js\";\n\nconst App: Component = () => {\n  return <h1>Hello world</h1>\n};\n\nexport default App;"
    },
    "/index.tsx": {
      code: "import { render } from \"solid-js/web\";\nimport App from \"./App\";\n\nimport \"./styles.css\";\n\nrender(() => <App />, document.getElementById(\"app\"));"
    },
    "/index.html": {
      code: "<html>\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset=\"UTF-8\" />\n</head>\n<body>\n  <div id=\"app\"></div>\n  <script src=\"src/index.tsx\"></script>\n</body>\n</html>"
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {
          "solid-js": "1.3.15"
        },
        main: "/index.tsx"
      })
    }
  }),
  main: "/App.tsx",
  environment: "solid"
};

var SVELTE_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/App.svelte": {
      code: "<style>\n  h1 {\n    font-size: 1.5rem;\n  }\n</style>\n\n<script>\n  let name = 'world';\n</script>\n\n<main>\n  <h1>Hello {name}</h1>\n</main>"
    },
    "/index.js": {
      code: "import App from \"./App.svelte\";\nimport \"./styles.css\";\n\nconst app = new App({\n  target: document.body\n});\n\nexport default app;\n      "
    },
    "/public/index.html": {
      code: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n\n    <title>Svelte app</title>\n\n    <link rel=\"stylesheet\" href=\"public/bundle.css\" />\n  </head>\n\n  <body>\n    <script src=\"bundle.js\"></script>\n  </body>\n</html>"
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {
          svelte: "^3.0.0"
        },
        main: "/index.js"
      })
    }
  }),
  main: "/App.svelte",
  environment: "svelte"
};

var TEST_TYPESCRIPT_TEMPLATE = {
  files: {
    "tsconfig.json": {
      code: "{\n  \"include\": [\n    \"./**/*\"\n  ],\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"lib\": [ \"dom\", \"es2015\" ],\n    \"jsx\": \"react-jsx\"\n  }\n}"
    },
    "/add.ts": {
      code: "export const add = (a: number, b: number): number => a + b;"
    },
    "/add.test.ts": {
      code: "import { add } from './add';\n\ndescribe('add', () => {\n  test('Commutative Law of Addition', () => {\n    expect(add(1, 2)).toBe(add(2, 1));\n  });\n});"
    },
    "package.json": {
      code: JSON.stringify({
        dependencies: {},
        devDependencies: {
          typescript: "^4.0.0"
        },
        main: "/add.ts"
      })
    }
  },
  main: "/add.test.ts",
  environment: "parcel",
  mode: "tests"
};

var VANILLA_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/index.js": {
      code: "import \"./styles.css\";\n\ndocument.getElementById(\"app\").innerHTML = `\n<h1>Hello world</h1>\n`;\n"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset=\"UTF-8\" />\n</head>\n\n<body>\n  <div id=\"app\"></div>\n\n  <script src=\"index.js\">\n  </script>\n</body>\n\n</html>"
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {},
        main: "/index.js"
      })
    }
  }),
  main: "/index.js",
  environment: "parcel"
};

var VANILLA_TYPESCRIPT_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "tsconfig.json": {
      code: "{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"module\": \"commonjs\",\n    \"jsx\": \"preserve\",\n    \"esModuleInterop\": true,\n    \"sourceMap\": true,\n    \"allowJs\": true,\n    \"lib\": [\n      \"es6\",\n      \"dom\"\n    ],\n    \"rootDir\": \"src\",\n    \"moduleResolution\": \"node\"\n  }\n}"
    },
    "/index.ts": {
      code: "import \"./styles.css\";\n\ndocument.getElementById(\"app\").innerHTML = `\n<h1>Hello world</h1>\n`;\n"
    },
    "/index.html": {
      code: "<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset=\"UTF-8\" />\n</head>\n\n<body>\n  <div id=\"app\"></div>\n\n  <script src=\"index.ts\">\n  </script>\n</body>\n\n</html>"
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {},
        devDependencies: {
          typescript: "^4.0.0"
        },
        main: "/index.ts"
      })
    }
  }),
  main: "/index.ts",
  environment: "parcel"
};

var VUE_TEMPLATE = {
  files: {
    "/src/styles.css": commonFiles["/styles.css"],
    "/src/App.vue": {
      code: "<template>\n  <h1>Hello {{ msg }}</h1>\n</template>\n\n<script setup>\nimport { ref } from 'vue';\nconst msg = ref('world');\n</script>"
    },
    "/src/main.js": {
      code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\";\n\ncreateApp(App).mount('#app')\n"
    },
    "/public/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\" />\n    <title>codesandbox</title>\n  </head>\n  <body>\n    <noscript>\n      <strong\n        >We're sorry but codesandbox doesn't work properly without JavaScript\n        enabled. Please enable it to continue.</strong\n      >\n    </noscript>\n    <div id=\"app\"></div>\n    <!-- built files will be auto injected -->\n  </body>\n</html>\n"
    },
    "/package.json": {
      code: JSON.stringify({
        name: "vue3",
        version: "0.1.0",
        private: true,
        main: "/src/main.js",
        scripts: {
          serve: "vue-cli-service serve",
          build: "vue-cli-service build"
        },
        dependencies: {
          "core-js": "^3.26.1",
          vue: "^3.2.45"
        },
        devDependencies: {
          "@vue/cli-plugin-babel": "^5.0.8",
          "@vue/cli-service": "^5.0.8"
        }
      })
    }
  },
  main: "/src/App.vue",
  environment: "vue-cli"
};

var VUE_TS_TEMPLATE = {
  files: {
    "/src/styles.css": commonFiles["/styles.css"],
    "/src/App.vue": {
      code: "<template>\n  <h1>Hello {{ msg }}</h1>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\nconst msg = ref<string>('world');\n</script>"
    },
    "/src/main.ts": {
      code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\";\n\ncreateApp(App).mount('#app')\n"
    },
    "/src/shims-vue.d.ts": "/* eslint-disable */\ndeclare module \"*.vue\" {\n  import type { DefineComponent } from \"vue\";\n  const component: DefineComponent<{}, {}, any>;\n  export default component;\n}",
    "/public/index.html": {
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\" />\n    <title>codesandbox</title>\n  </head>\n  <body>\n    <noscript>\n      <strong\n        >We're sorry but codesandbox doesn't work properly without JavaScript\n        enabled. Please enable it to continue.</strong\n      >\n    </noscript>\n    <div id=\"app\"></div>\n    <!-- built files will be auto injected -->\n  </body>\n</html>\n"
    },
    "/package.json": {
      code: JSON.stringify({
        name: "vue3-ts",
        version: "0.1.0",
        private: true,
        main: "/src/main.ts",
        scripts: {
          serve: "vue-cli-service serve",
          build: "vue-cli-service build"
        },
        dependencies: {
          "core-js": "^3.26.1",
          vue: "^3.2.45"
        },
        devDependencies: {
          "@vue/cli-plugin-babel": "^5.0.8",
          "@vue/cli-plugin-typescript": "^5.0.8",
          "@vue/cli-service": "^5.0.8",
          typescript: "^4.9.3"
        }
      })
    },
    "/tsconfig.json": {
      code: JSON.stringify({
        compilerOptions: {
          target: "esnext",
          module: "esnext",
          strict: true,
          jsx: "preserve",
          moduleResolution: "node",
          experimentalDecorators: true,
          skipLibCheck: true,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          forceConsistentCasingInFileNames: true,
          useDefineForClassFields: true,
          sourceMap: false,
          baseUrl: ".",
          types: ["webpack-env"],
          paths: {
            "@/*": ["src/*"]
          },
          lib: ["esnext", "dom", "dom.iterable", "scripthost"]
        },
        include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "tests/**/*.ts", "tests/**/*.tsx"],
        exclude: ["node_modules"]
      })
    }
  },
  main: "/src/App.vue",
  environment: "vue-cli"
};

var STATIC_TEMPLATE = {
  files: __assign(__assign({}, commonFiles), {
    "/index.html": {
      code: "<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset=\"UTF-8\" />\n  <link rel=\"stylesheet\" href=\"/styles.css\" />\n</head>\n\n<body>\n  <h1>Hello world</h1>\n</body>\n\n</html>"
    },
    "/package.json": {
      code: JSON.stringify({
        dependencies: {},
        main: "/index.html"
      })
    }
  }),
  main: "/index.html",
  environment: "static"
};

var SANDBOX_TEMPLATES = {
  static: STATIC_TEMPLATE,
  angular: ANGULAR_TEMPLATE,
  react: REACT_TEMPLATE,
  "react-ts": REACT_TYPESCRIPT_TEMPLATE,
  solid: SOLID_TEMPLATE,
  svelte: SVELTE_TEMPLATE,
  "test-ts": TEST_TYPESCRIPT_TEMPLATE,
  "vanilla-ts": VANILLA_TYPESCRIPT_TEMPLATE,
  vanilla: VANILLA_TEMPLATE,
  vue: VUE_TEMPLATE,
  "vue-ts": VUE_TS_TEMPLATE,
  node: NODE_TEMPLATE,
  nextjs: NEXTJS_TEMPLATE,
  vite: VITE_TEMPLATE,
  "vite-react": VITE_REACT_TEMPLATE,
  "vite-react-ts": VITE_REACT_TS_TEMPLATE,
  "vite-preact": VITE_PREACT_TEMPLATE,
  "vite-preact-ts": VITE_PREACT_TS_TEMPLATE,
  "vite-vue": VITE_VUE_TEMPLATE,
  "vite-vue-ts": VITE_VUE_TS_TEMPLATE,
  "vite-svelte": VITE_SVELTE_TEMPLATE,
  "vite-svelte-ts": VITE_SVELTE_TS_TEMPLATE,
  astro: ASTRO_TEMPLATE
};

var getSandpackStateFromProps = function (props) {
  var _a, _b, _c, _d, _e, _f;
  var normalizedFilesPath = sandpackClient.normalizePath(props.files);
  var projectSetup = combineTemplateFilesToSetup({
    template: props.template,
    customSetup: props.customSetup,
    files: normalizedFilesPath
  });
  var visibleFiles = sandpackClient.normalizePath((_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.visibleFiles) !== null && _b !== void 0 ? _b : []);
  var activeFile = ((_c = props.options) === null || _c === void 0 ? void 0 : _c.activeFile) ? resolveFile((_d = props.options) === null || _d === void 0 ? void 0 : _d.activeFile, projectSetup.files) : undefined;
  if (visibleFiles.length === 0 && normalizedFilesPath) {
    Object.keys(normalizedFilesPath).forEach(function (filePath) {
      var file = normalizedFilesPath[filePath];
      if (typeof file === "string") {
        visibleFiles.push(filePath);
        return;
      }
      if (!activeFile && file.active) {
        activeFile = filePath;
        if (file.hidden === true) {
          visibleFiles.push(filePath);
        }
      }
      if (!file.hidden) {
        visibleFiles.push(filePath);
      }
    });
  }
  if (visibleFiles.length === 0) {
    visibleFiles = [projectSetup.main];
  }
  if (projectSetup.entry && !projectSetup.files[projectSetup.entry]) {
    projectSetup.entry = resolveFile(projectSetup.entry, projectSetup.files);
  }
  if (!activeFile && projectSetup.main) {
    activeFile = projectSetup.main;
  }
  if (!activeFile || !projectSetup.files[activeFile]) {
    activeFile = visibleFiles[0];
  }
  if (!visibleFiles.includes(activeFile)) {
    visibleFiles.push(activeFile);
  }
  var files = sandpackClient.addPackageJSONIfNeeded(projectSetup.files, (_e = projectSetup.dependencies) !== null && _e !== void 0 ? _e : {}, (_f = projectSetup.devDependencies) !== null && _f !== void 0 ? _f : {}, projectSetup.entry);
  var existOpenPath = visibleFiles.filter(function (path) {
    return files[path];
  });
  return {
    visibleFiles: existOpenPath,
    activeFile: activeFile,
    files: files,
    environment: projectSetup.environment,
    shouldUpdatePreview: true
  };
};
var resolveFile = function (path, files) {
  var normalizedFilesPath = sandpackClient.normalizePath(files);
  var normalizedPath = sandpackClient.normalizePath(path);
  if ((normalizedPath in normalizedFilesPath)) {
    return normalizedPath;
  }
  if (!path) {
    return null;
  }
  var resolvedPath = null;
  var index = 0;
  var strategies = [".js", ".jsx", ".ts", ".tsx"];
  while (!resolvedPath && index < strategies.length) {
    var removeExtension = normalizedPath.split(".")[0];
    var attemptPath = ("").concat(removeExtension).concat(strategies[index]);
    if (normalizedFilesPath[attemptPath] !== undefined) {
      resolvedPath = attemptPath;
    }
    index++;
  }
  return resolvedPath;
};
var combineTemplateFilesToSetup = function (_a) {
  var files = _a.files, template = _a.template, customSetup = _a.customSetup;
  if (!template) {
    if (!customSetup) {
      var defaultTemplate = SANDBOX_TEMPLATES.vanilla;
      return __assign(__assign({}, defaultTemplate), {
        files: __assign(__assign({}, defaultTemplate.files), convertedFilesToBundlerFiles(files))
      });
    }
    if (!files || Object.keys(files).length === 0) {
      throw new Error("[sandpack-react]: without a template, you must pass at least one file");
    }
    return __assign(__assign({}, customSetup), {
      files: convertedFilesToBundlerFiles(files)
    });
  }
  var baseTemplate = SANDBOX_TEMPLATES[template];
  if (!baseTemplate) {
    throw new Error(("[sandpack-react]: invalid template \"").concat(template, "\" provided"));
  }
  if (!customSetup && !files) {
    return baseTemplate;
  }
  return {
    files: convertedFilesToBundlerFiles(__assign(__assign({}, baseTemplate.files), files)),
    dependencies: __assign(__assign({}, baseTemplate.dependencies), customSetup === null || customSetup === void 0 ? void 0 : customSetup.dependencies),
    devDependencies: __assign(__assign({}, baseTemplate.devDependencies), customSetup === null || customSetup === void 0 ? void 0 : customSetup.devDependencies),
    entry: sandpackClient.normalizePath(customSetup === null || customSetup === void 0 ? void 0 : customSetup.entry),
    main: baseTemplate.main,
    environment: (customSetup === null || customSetup === void 0 ? void 0 : customSetup.environment) || baseTemplate.environment
  };
};
var convertedFilesToBundlerFiles = function (files) {
  if (!files) return {};
  return Object.keys(files).reduce(function (acc, key) {
    if (typeof files[key] === "string") {
      acc[key] = {
        code: files[key]
      };
    } else {
      acc[key] = files[key];
    }
    return acc;
  }, {});
};

var useAppState = function (props, files) {
  var _a = React.useState({
    editorState: "pristine"
  }), state = _a[0], setState = _a[1];
  var originalStateFromProps = getSandpackStateFromProps(props);
  var editorState = dequal.dequal(originalStateFromProps.files, files) ? "pristine" : "dirty";
  if (editorState !== state.editorState) {
    setState(function (prev) {
      return __assign(__assign({}, prev), {
        editorState: editorState
      });
    });
  }
  return state;
};

var useSandpackId = function () {
  if (typeof React.useId === "function") {
    return React.useId();
  } else {
    return generateRandomId();
  }
};
var MAX_ID_LENGTH = 9;
var sandpackClientVersion = process.env.SANDPACK_CLIENT_VERSION;
var useAsyncSandpackId = function (files) {
  if (typeof React.useId === "function") {
    var reactDomId_1 = React.useId();
    return function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var allCode, sha;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              allCode = Object.entries(files).map(function (path, code) {
                return path + "|" + code;
              }).join("|||");
              return [4, generateShortId(allCode + reactDomId_1 + sandpackClientVersion)];
            case 1:
              sha = _a.sent();
              return [2, ensureLength(sha.replace(/:/g, "sp").replace(/[^a-zA-Z]/g, ""), MAX_ID_LENGTH)];
          }
        });
      });
    };
  } else {
    return function () {
      return ensureLength(generateRandomId(), MAX_ID_LENGTH);
    };
  }
};
function ensureLength(str, length) {
  if (str.length > length) {
    return str.slice(0, length);
  } else {
    return str.padEnd(length, "s");
  }
}
function generateShortId(input) {
  return __awaiter(this, void 0, void 0, function () {
    var encoder, data, hashBuffer, hashArray;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          encoder = new TextEncoder();
          data = encoder.encode(input);
          return [4, crypto.subtle.digest("SHA-256", data)];
        case 1:
          hashBuffer = _a.sent();
          hashArray = Array.from(new Uint8Array(hashBuffer));
          return [2, btoa(String.fromCharCode.apply(String, hashArray))];
      }
    });
  });
}

var BUNDLER_TIMEOUT = 40000;
var useClient = function (_a, filesState) {
  var _b, _c, _d;
  var options = _a.options, customSetup = _a.customSetup, teamId = _a.teamId, sandboxId = _a.sandboxId;
  options !== null && options !== void 0 ? options : options = {};
  customSetup !== null && customSetup !== void 0 ? customSetup : customSetup = {};
  var initModeFromProps = (options === null || options === void 0 ? void 0 : options.initMode) || "lazy";
  var _e = React.useState({
    startRoute: options === null || options === void 0 ? void 0 : options.startRoute,
    bundlerState: undefined,
    error: null,
    initMode: initModeFromProps,
    reactDevTools: undefined,
    status: ((_b = options === null || options === void 0 ? void 0 : options.autorun) !== null && _b !== void 0 ? _b : true) ? "initial" : "idle"
  }), state = _e[0], setState = _e[1];
  var intersectionObserverCallback = React.useRef();
  var intersectionObserver = React.useRef(null);
  var lazyAnchorRef = React.useRef(null);
  var registeredIframes = React.useRef({});
  var clients = React.useRef({});
  var timeoutHook = React.useRef(null);
  var unsubscribeClientListeners = React.useRef({});
  var unsubscribe = React.useRef();
  var queuedListeners = React.useRef({
    global: {}
  });
  var debounceHook = React.useRef();
  var prevEnvironment = React.useRef(filesState.environment);
  var asyncSandpackId = useAsyncSandpackId(filesState.files);
  var createClient = React.useCallback(function (iframe, clientId, clientPropsOverride) {
    return __awaiter(void 0, void 0, void 0, function () {
      var timeOut, shouldSetTimeout, getStableServiceWorkerId, client, _a, _b, globalListeners;
      var _c;
      var _d, _e, _f;
      return __generator(this, function (_g) {
        switch (_g.label) {
          case 0:
            if (clients.current[clientId]) {
              clients.current[clientId].destroy();
            }
            options !== null && options !== void 0 ? options : options = {};
            customSetup !== null && customSetup !== void 0 ? customSetup : customSetup = {};
            timeOut = (_d = options === null || options === void 0 ? void 0 : options.bundlerTimeOut) !== null && _d !== void 0 ? _d : BUNDLER_TIMEOUT;
            if (timeoutHook.current) {
              clearTimeout(timeoutHook.current);
            }
            shouldSetTimeout = typeof unsubscribe.current !== "function";
            if (shouldSetTimeout) {
              timeoutHook.current = setTimeout(function () {
                unregisterAllClients();
                setState(function (prev) {
                  return __assign(__assign({}, prev), {
                    status: "timeout"
                  });
                });
              }, timeOut);
            }
            getStableServiceWorkerId = function () {
              return __awaiter(void 0, void 0, void 0, function () {
                var key, fixedId;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      if (!(options === null || options === void 0 ? void 0 : options.experimental_enableStableServiceWorkerId)) return [3, 3];
                      key = "SANDPACK_INTERNAL:URL-CONSISTENT-ID";
                      fixedId = localStorage.getItem(key);
                      if (!!fixedId) return [3, 2];
                      return [4, asyncSandpackId()];
                    case 1:
                      fixedId = _a.sent();
                      localStorage.setItem(key, fixedId);
                      _a.label = 2;
                    case 2:
                      return [2, fixedId];
                    case 3:
                      return [4, asyncSandpackId()];
                    case 4:
                      return [2, _a.sent()];
                  }
                });
              });
            };
            _a = sandpackClient.loadSandpackClient;
            _b = [iframe, {
              files: filesState.files,
              template: filesState.environment
            }];
            _c = {
              externalResources: options.externalResources,
              bundlerURL: options.bundlerURL,
              startRoute: (_e = clientPropsOverride === null || clientPropsOverride === void 0 ? void 0 : clientPropsOverride.startRoute) !== null && _e !== void 0 ? _e : options.startRoute,
              fileResolver: options.fileResolver,
              skipEval: (_f = options.skipEval) !== null && _f !== void 0 ? _f : false,
              logLevel: options.logLevel,
              showOpenInCodeSandbox: false,
              showErrorScreen: true,
              showLoadingScreen: false,
              reactDevTools: state.reactDevTools,
              customNpmRegistries: customSetup === null || customSetup === void 0 ? void 0 : customSetup.npmRegistries,
              teamId: teamId,
              experimental_enableServiceWorker: !!(options === null || options === void 0 ? void 0 : options.experimental_enableServiceWorker)
            };
            return [4, getStableServiceWorkerId()];
          case 1:
            return [4, _a.apply(void 0, _b.concat([(_c.experimental_stableServiceWorkerId = _g.sent(), _c.sandboxId = sandboxId, _c)]))];
          case 2:
            client = _g.sent();
            if (typeof unsubscribe.current !== "function") {
              unsubscribe.current = client.listen(handleMessage);
            }
            unsubscribeClientListeners.current[clientId] = unsubscribeClientListeners.current[clientId] || ({});
            if (queuedListeners.current[clientId]) {
              Object.keys(queuedListeners.current[clientId]).forEach(function (listenerId) {
                var listener = queuedListeners.current[clientId][listenerId];
                var unsubscribe = client.listen(listener);
                unsubscribeClientListeners.current[clientId][listenerId] = unsubscribe;
              });
              queuedListeners.current[clientId] = {};
            }
            globalListeners = Object.entries(queuedListeners.current.global);
            globalListeners.forEach(function (_a) {
              var listenerId = _a[0], listener = _a[1];
              var unsubscribe = client.listen(listener);
              unsubscribeClientListeners.current[clientId][listenerId] = unsubscribe;
            });
            clients.current[clientId] = client;
            return [2];
        }
      });
    });
  }, [filesState.environment, filesState.files, state.reactDevTools]);
  var unregisterAllClients = React.useCallback(function () {
    Object.keys(clients.current).map(unregisterBundler);
    if (typeof unsubscribe.current === "function") {
      unsubscribe.current();
      unsubscribe.current = undefined;
    }
  }, []);
  var runSandpack = React.useCallback(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, Promise.all(Object.entries(registeredIframes.current).map(function (_a) {
              var clientId = _a[0], _b = _a[1], iframe = _b.iframe, _c = _b.clientPropsOverride, clientPropsOverride = _c === void 0 ? {} : _c;
              return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_d) {
                  switch (_d.label) {
                    case 0:
                      return [4, createClient(iframe, clientId, clientPropsOverride)];
                    case 1:
                      _d.sent();
                      return [2];
                  }
                });
              });
            }))];
          case 1:
            _a.sent();
            setState(function (prev) {
              return __assign(__assign({}, prev), {
                error: null,
                status: "running"
              });
            });
            return [2];
        }
      });
    });
  }, [createClient]);
  intersectionObserverCallback.current = function (entries) {
    if (entries.some(function (entry) {
      return entry.isIntersecting;
    })) {
      runSandpack();
    } else {
      unregisterAllClients();
    }
  };
  var initializeSandpackIframe = React.useCallback(function () {
    var _a, _b, _c;
    var autorun = (_a = options === null || options === void 0 ? void 0 : options.autorun) !== null && _a !== void 0 ? _a : true;
    if (!autorun) {
      return;
    }
    var observerOptions = (_b = options === null || options === void 0 ? void 0 : options.initModeObserverOptions) !== null && _b !== void 0 ? _b : {
      rootMargin: "1000px 0px"
    };
    if (intersectionObserver.current && lazyAnchorRef.current) {
      (_c = intersectionObserver.current) === null || _c === void 0 ? void 0 : _c.unobserve(lazyAnchorRef.current);
    }
    if (lazyAnchorRef.current && state.initMode === "lazy") {
      intersectionObserver.current = new IntersectionObserver(function (entries) {
        var _a, _b;
        if (entries.some(function (entry) {
          return entry.isIntersecting;
        })) {
          if (entries.some(function (entry) {
            return entry.isIntersecting;
          }) && lazyAnchorRef.current) {
            (_a = intersectionObserverCallback.current) === null || _a === void 0 ? void 0 : _a.call(intersectionObserverCallback, entries);
            (_b = intersectionObserver.current) === null || _b === void 0 ? void 0 : _b.unobserve(lazyAnchorRef.current);
          }
        }
      }, observerOptions);
      intersectionObserver.current.observe(lazyAnchorRef.current);
    } else if (lazyAnchorRef.current && state.initMode === "user-visible") {
      intersectionObserver.current = new IntersectionObserver(function (entries) {
        var _a;
        (_a = intersectionObserverCallback.current) === null || _a === void 0 ? void 0 : _a.call(intersectionObserverCallback, entries);
      }, observerOptions);
      intersectionObserver.current.observe(lazyAnchorRef.current);
    } else {
      runSandpack();
    }
  }, [options === null || options === void 0 ? void 0 : options.autorun, options === null || options === void 0 ? void 0 : options.initModeObserverOptions, runSandpack, state.initMode, unregisterAllClients]);
  var registerBundler = React.useCallback(function (iframe, clientId, clientPropsOverride) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            registeredIframes.current[clientId] = {
              iframe: iframe,
              clientPropsOverride: clientPropsOverride
            };
            if (!(state.status === "running")) return [3, 2];
            return [4, createClient(iframe, clientId, clientPropsOverride)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, [createClient, state.status]);
  var unregisterBundler = function (clientId) {
    var _a, _b;
    var client = clients.current[clientId];
    if (client) {
      client.destroy();
      (_a = client.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.location.replace("about:blank");
      client.iframe.removeAttribute("src");
      delete clients.current[clientId];
    } else {
      delete registeredIframes.current[clientId];
    }
    if (timeoutHook.current) {
      clearTimeout(timeoutHook.current);
    }
    var unsubscribeQueuedClients = Object.values((_b = unsubscribeClientListeners.current[clientId]) !== null && _b !== void 0 ? _b : {});
    unsubscribeQueuedClients.forEach(function (listenerOfClient) {
      var listenerFunctions = Object.values(listenerOfClient);
      listenerFunctions.forEach(function (unsubscribe) {
        return unsubscribe();
      });
    });
    var status = Object.keys(clients.current).length > 0 ? "running" : "idle";
    setState(function (prev) {
      return __assign(__assign({}, prev), {
        status: status
      });
    });
  };
  var handleMessage = function (msg) {
    if (msg.type === "start") {
      setState(function (prev) {
        return __assign(__assign({}, prev), {
          error: null
        });
      });
    } else if (msg.type === "state") {
      setState(function (prev) {
        return __assign(__assign({}, prev), {
          bundlerState: msg.state
        });
      });
    } else if (msg.type === "done" && !msg.compilatonError || msg.type === "connected") {
      if (timeoutHook.current) {
        clearTimeout(timeoutHook.current);
      }
      setState(function (prev) {
        return __assign(__assign({}, prev), {
          error: null
        });
      });
    } else if (msg.type === "action" && msg.action === "show-error") {
      if (timeoutHook.current) {
        clearTimeout(timeoutHook.current);
      }
      setState(function (prev) {
        return __assign(__assign({}, prev), {
          error: sandpackClient.extractErrorDetails(msg)
        });
      });
    } else if (msg.type === "action" && msg.action === "notification" && msg.notificationType === "error") {
      setState(function (prev) {
        return __assign(__assign({}, prev), {
          error: {
            message: msg.title
          }
        });
      });
    }
  };
  var registerReactDevTools = function (value) {
    setState(function (prev) {
      return __assign(__assign({}, prev), {
        reactDevTools: value
      });
    });
  };
  var recompileMode = (_c = options === null || options === void 0 ? void 0 : options.recompileMode) !== null && _c !== void 0 ? _c : "delayed";
  var recompileDelay = (_d = options === null || options === void 0 ? void 0 : options.recompileDelay) !== null && _d !== void 0 ? _d : 200;
  var dispatchMessage = function (message, clientId) {
    if (state.status !== "running") {
      console.warn("[sandpack-react]: dispatch cannot be called while in idle mode");
      return;
    }
    if (clientId) {
      clients.current[clientId].dispatch(message);
    } else {
      Object.values(clients.current).forEach(function (client) {
        client.dispatch(message);
      });
    }
  };
  var addListener = function (listener, clientId) {
    if (clientId) {
      if (clients.current[clientId]) {
        var unsubscribeListener = clients.current[clientId].listen(listener);
        return unsubscribeListener;
      } else {
        var listenerId_1 = generateRandomId();
        queuedListeners.current[clientId] = queuedListeners.current[clientId] || ({});
        unsubscribeClientListeners.current[clientId] = unsubscribeClientListeners.current[clientId] || ({});
        queuedListeners.current[clientId][listenerId_1] = listener;
        var unsubscribeListener = function () {
          if (queuedListeners.current[clientId][listenerId_1]) {
            delete queuedListeners.current[clientId][listenerId_1];
          } else if (unsubscribeClientListeners.current[clientId][listenerId_1]) {
            unsubscribeClientListeners.current[clientId][listenerId_1]();
            delete unsubscribeClientListeners.current[clientId][listenerId_1];
          }
        };
        return unsubscribeListener;
      }
    } else {
      var listenerId_2 = generateRandomId();
      queuedListeners.current.global[listenerId_2] = listener;
      var clientsList = Object.values(clients.current);
      var currentClientUnsubscribeListeners_1 = clientsList.map(function (client) {
        return client.listen(listener);
      });
      var unsubscribeListener = function () {
        currentClientUnsubscribeListeners_1.forEach(function (unsubscribe) {
          return unsubscribe();
        });
        delete queuedListeners.current.global[listenerId_2];
        Object.values(unsubscribeClientListeners.current).forEach(function (client) {
          var _a;
          (_a = client === null || client === void 0 ? void 0 : client[listenerId_2]) === null || _a === void 0 ? void 0 : _a.call(client);
        });
      };
      return unsubscribeListener;
    }
  };
  React.useEffect(function watchFileChanges() {
    if (state.status !== "running" || !filesState.shouldUpdatePreview) {
      return;
    }
    if (prevEnvironment.current !== filesState.environment) {
      prevEnvironment.current = filesState.environment;
      Object.entries(clients.current).forEach(function (_a) {
        var key = _a[0], client = _a[1];
        registerBundler(client.iframe, key);
      });
    }
    if (recompileMode === "immediate") {
      Object.values(clients.current).forEach(function (client) {
        if (client.status === "done") {
          client.updateSandbox({
            files: filesState.files,
            template: filesState.environment
          });
        }
      });
    }
    if (recompileMode === "delayed") {
      if (typeof window === "undefined") return;
      window.clearTimeout(debounceHook.current);
      debounceHook.current = window.setTimeout(function () {
        Object.values(clients.current).forEach(function (client) {
          if (client.status === "done") {
            client.updateSandbox({
              files: filesState.files,
              template: filesState.environment
            });
          }
        });
      }, recompileDelay);
    }
    return function () {
      window.clearTimeout(debounceHook.current);
    };
  }, [filesState.files, filesState.environment, filesState.shouldUpdatePreview, recompileDelay, recompileMode, registerBundler, state.status]);
  React.useEffect(function watchInitMode() {
    if (initModeFromProps !== state.initMode) {
      setState(function (prev) {
        return __assign(__assign({}, prev), {
          initMode: initModeFromProps
        });
      });
      initializeSandpackIframe();
    }
  }, [initModeFromProps, initializeSandpackIframe, state.initMode]);
  React.useEffect(function () {
    return function unmountClient() {
      if (typeof unsubscribe.current === "function") {
        unsubscribe.current();
      }
      if (timeoutHook.current) {
        clearTimeout(timeoutHook.current);
      }
      if (debounceHook.current) {
        clearTimeout(debounceHook.current);
      }
      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }
    };
  }, []);
  return [state, {
    clients: clients.current,
    initializeSandpackIframe: initializeSandpackIframe,
    runSandpack: runSandpack,
    registerBundler: registerBundler,
    unregisterBundler: unregisterBundler,
    registerReactDevTools: registerReactDevTools,
    addListener: addListener,
    dispatchMessage: dispatchMessage,
    lazyAnchorRef: lazyAnchorRef,
    unsubscribeClientListenersRef: unsubscribeClientListeners,
    queuedListenersRef: queuedListeners
  }];
};

var useFiles = function (props) {
  var originalStateFromProps = getSandpackStateFromProps(props);
  var _a = React.useState(originalStateFromProps), state = _a[0], setState = _a[1];
  var isMountedRef = React.useRef(false);
  React.useEffect(function () {
    if (isMountedRef.current) {
      setState(getSandpackStateFromProps(props));
    } else {
      isMountedRef.current = true;
    }
  }, [props.files, props.customSetup, props.template]);
  var updateFile = function (pathOrFiles, code, shouldUpdatePreview) {
    if (shouldUpdatePreview === void 0) {
      shouldUpdatePreview = true;
    }
    setState(function (prev) {
      var _a;
      var files = prev.files;
      if (typeof pathOrFiles === "string" && typeof code === "string") {
        files = __assign(__assign({}, files), (_a = {}, _a[pathOrFiles] = __assign(__assign({}, files[pathOrFiles]), {
          code: code
        }), _a));
      } else if (typeof pathOrFiles === "object") {
        files = __assign(__assign({}, files), convertedFilesToBundlerFiles(pathOrFiles));
      }
      return __assign(__assign({}, prev), {
        files: sandpackClient.normalizePath(files),
        shouldUpdatePreview: shouldUpdatePreview
      });
    });
  };
  var operations = {
    openFile: function (path) {
      setState(function (_a) {
        var visibleFiles = _a.visibleFiles, rest = __rest(_a, ["visibleFiles"]);
        var newPaths = visibleFiles.includes(path) ? visibleFiles : __spreadArray(__spreadArray([], visibleFiles, true), [path], false);
        return __assign(__assign({}, rest), {
          activeFile: path,
          visibleFiles: newPaths
        });
      });
    },
    resetFile: function (path) {
      setState(function (prevState) {
        var _a;
        return __assign(__assign({}, prevState), {
          files: __assign(__assign({}, prevState.files), (_a = {}, _a[path] = originalStateFromProps.files[path], _a))
        });
      });
    },
    resetAllFiles: function () {
      setState(function (prev) {
        return __assign(__assign({}, prev), {
          files: originalStateFromProps.files
        });
      });
    },
    setActiveFile: function (activeFile) {
      if (state.files[activeFile]) {
        setState(function (prev) {
          return __assign(__assign({}, prev), {
            activeFile: activeFile
          });
        });
      }
    },
    updateCurrentFile: function (code, shouldUpdatePreview) {
      if (shouldUpdatePreview === void 0) {
        shouldUpdatePreview = true;
      }
      updateFile(state.activeFile, code, shouldUpdatePreview);
    },
    updateFile: updateFile,
    addFile: updateFile,
    closeFile: function (path) {
      if (state.visibleFiles.length === 1) {
        return;
      }
      setState(function (_a) {
        var visibleFiles = _a.visibleFiles, activeFile = _a.activeFile, prev = __rest(_a, ["visibleFiles", "activeFile"]);
        var indexOfRemovedPath = visibleFiles.indexOf(path);
        var newPaths = visibleFiles.filter(function (openPath) {
          return openPath !== path;
        });
        return __assign(__assign({}, prev), {
          activeFile: path === activeFile ? indexOfRemovedPath === 0 ? visibleFiles[1] : visibleFiles[indexOfRemovedPath - 1] : activeFile,
          visibleFiles: newPaths
        });
      });
    },
    deleteFile: function (path, shouldUpdatePreview) {
      if (shouldUpdatePreview === void 0) {
        shouldUpdatePreview = true;
      }
      setState(function (_a) {
        var visibleFiles = _a.visibleFiles, files = _a.files, activeFile = _a.activeFile, rest = __rest(_a, ["visibleFiles", "files", "activeFile"]);
        var newFiles = __assign({}, files);
        delete newFiles[path];
        var remainingVisibleFiles = visibleFiles.filter(function (openPath) {
          return openPath !== path;
        });
        var deletedLastVisibleFile = remainingVisibleFiles.length === 0;
        if (deletedLastVisibleFile) {
          var nextFile = Object.keys(files)[Object.keys(files).length - 1];
          return __assign(__assign({}, rest), {
            visibleFiles: [nextFile],
            activeFile: nextFile,
            files: newFiles,
            shouldUpdatePreview: shouldUpdatePreview
          });
        }
        return __assign(__assign({}, rest), {
          visibleFiles: remainingVisibleFiles,
          activeFile: path === activeFile ? remainingVisibleFiles[remainingVisibleFiles.length - 1] : activeFile,
          files: newFiles,
          shouldUpdatePreview: shouldUpdatePreview
        });
      });
    }
  };
  return [__assign(__assign({}, state), {
    visibleFilesFromProps: originalStateFromProps.visibleFiles
  }), operations];
};

var Sandpack$1 = React__namespace.createContext(null);
var SandpackProvider = function (props) {
  var _a, _b, _c;
  var children = props.children, options = props.options, style = props.style, className = props.className, theme = props.theme;
  var _d = useFiles(props), fileState = _d[0], fileOperations = _d[1];
  var _e = useClient(props, fileState), clientState = _e[0], _f = _e[1], dispatchMessage = _f.dispatchMessage, addListener = _f.addListener, clientOperations = __rest(_f, ["dispatchMessage", "addListener"]);
  var appState = useAppState(props, fileState.files);
  React__namespace.useEffect(function () {
    clientOperations.initializeSandpackIframe();
  }, []);
  return jsxRuntime.jsx(Sandpack$1.Provider, {
    value: __assign(__assign(__assign(__assign(__assign(__assign({}, fileState), clientState), appState), fileOperations), clientOperations), {
      autoReload: (_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.autoReload) !== null && _b !== void 0 ? _b : true,
      teamId: props === null || props === void 0 ? void 0 : props.teamId,
      exportOptions: (_c = props === null || props === void 0 ? void 0 : props.customSetup) === null || _c === void 0 ? void 0 : _c.exportOptions,
      listen: addListener,
      dispatch: dispatchMessage
    }),
    children: jsxRuntime.jsx(ClassNamesProvider, {
      classes: options === null || options === void 0 ? void 0 : options.classes,
      children: jsxRuntime.jsx(SandpackThemeProvider, {
        className: className,
        style: style,
        theme: theme,
        children: children
      })
    })
  });
};
var SandpackConsumer = Sandpack$1.Consumer;

function useSandpack() {
  var sandpack = React__namespace.useContext(Sandpack$1);
  if (sandpack === null) {
    throw new Error("[sandpack-react]: \"useSandpack\" must be wrapped by a \"SandpackProvider\"");
  }
  var dispatch = sandpack.dispatch, listen = sandpack.listen, rest = __rest(sandpack, ["dispatch", "listen"]);
  return {
    sandpack: __assign({}, rest),
    dispatch: dispatch,
    listen: listen
  };
}

var useActiveCode = function () {
  var _a, _b, _c;
  var sandpack = useSandpack().sandpack;
  return {
    code: (_a = sandpack.files[sandpack.activeFile]) === null || _a === void 0 ? void 0 : _a.code,
    readOnly: (_c = (_b = sandpack.files[sandpack.activeFile]) === null || _b === void 0 ? void 0 : _b.readOnly) !== null && _c !== void 0 ? _c : false,
    updateCode: sandpack.updateCurrentFile
  };
};

var iconStandaloneClassName = fakeCss;
var buttonClassName = fakeCss;
var roundedButtonClassName = fakeCss;
var iconClassName = fakeCss;
keyframes({
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
var absoluteClassName = fakeCss;
var errorClassName = fakeCss;
var errorBundlerClassName = fakeCss;
var errorMessageClassName = fakeCss;

var tabsClassName = fakeCss;
var tabsScrollableClassName = fakeCss;
var tabContainer = fakeCss;
var closeButtonClassName = fakeCss;
var tabButton = fakeCss;
var FileTabs = function (_a) {
  var closableTabs = _a.closableTabs, className = _a.className, activeFileUniqueId = _a.activeFileUniqueId, props = __rest(_a, ["closableTabs", "className", "activeFileUniqueId"]);
  var sandpack = useSandpack().sandpack;
  var classNames = useClassNames();
  var activeFile = sandpack.activeFile, visibleFiles = sandpack.visibleFiles, setActiveFile = sandpack.setActiveFile;
  var _b = React__namespace.useState(null), hoveredIndex = _b[0], setIsHoveredIndex = _b[1];
  var getTriggerText = function (currentPath) {
    var documentFileName = getFileName(currentPath);
    var pathsWithDuplicateFileNames = visibleFiles.reduce(function (prev, curr) {
      if (curr === currentPath) {
        return prev;
      }
      var fileName = getFileName(curr);
      if (fileName === documentFileName) {
        prev.push(curr);
        return prev;
      }
      return prev;
    }, []);
    if (pathsWithDuplicateFileNames.length === 0) {
      return documentFileName;
    } else {
      return calculateNearestUniquePath(currentPath, pathsWithDuplicateFileNames);
    }
  };
  var onKeyDown = function (_a) {
    var _b, _c, _d, _e;
    var e = _a.e, index = _a.index;
    var target = e.currentTarget;
    switch (e.key) {
      case "ArrowLeft":
        {
          var leftSibling = target.previousElementSibling;
          if (leftSibling) {
            (_b = leftSibling.querySelector("button")) === null || _b === void 0 ? void 0 : _b.focus();
            setActiveFile(visibleFiles[index - 1]);
          }
        }
        break;
      case "ArrowRight":
        {
          var rightSibling = target.nextElementSibling;
          if (rightSibling) {
            (_c = rightSibling.querySelector("button")) === null || _c === void 0 ? void 0 : _c.focus();
            setActiveFile(visibleFiles[index + 1]);
          }
        }
        break;
      case "Home":
        {
          var parent_1 = target.parentElement;
          var firstChild = parent_1.firstElementChild;
          (_d = firstChild.querySelector("button")) === null || _d === void 0 ? void 0 : _d.focus();
          setActiveFile(visibleFiles[0]);
          break;
        }
      case "End":
        {
          var parent_2 = target.parentElement;
          var lastChild = parent_2.lastElementChild;
          (_e = lastChild.querySelector("button")) === null || _e === void 0 ? void 0 : _e.focus();
          setActiveFile(visibleFiles[-1]);
          break;
        }
    }
  };
  return jsxRuntime.jsx("div", __assign({
    className: classNames("tabs", [tabsClassName, className]),
    translate: "no"
  }, props, {
    children: jsxRuntime.jsx("div", {
      "aria-label": "Select active file",
      className: classNames("tabs-scrollable-container", [tabsScrollableClassName]),
      role: "tablist",
      children: visibleFiles.map(function (filePath, index) {
        return jsxRuntime.jsxs("div", {
          "aria-controls": ("").concat(filePath, "-").concat(activeFileUniqueId, "-tab-panel"),
          "aria-selected": filePath === activeFile,
          className: classNames("tab-container", [tabContainer]),
          onKeyDown: function (e) {
            return onKeyDown({
              e: e,
              index: index
            });
          },
          onMouseEnter: function () {
            return setIsHoveredIndex(index);
          },
          onMouseLeave: function () {
            return setIsHoveredIndex(null);
          },
          role: "tab",
          children: [jsxRuntime.jsx("button", {
            className: classNames("tab-button", [buttonClassName, tabButton]),
            "data-active": filePath === activeFile,
            id: ("").concat(filePath, "-").concat(activeFileUniqueId, "-tab"),
            onClick: function () {
              return setActiveFile(filePath);
            },
            tabIndex: filePath === activeFile ? 0 : -1,
            title: filePath,
            type: "button",
            children: getTriggerText(filePath)
          }), closableTabs && visibleFiles.length > 1 && jsxRuntime.jsx("span", {
            className: classNames("close-button", [closeButtonClassName]),
            onClick: function (ev) {
              ev.stopPropagation();
              sandpack.closeFile(filePath);
            },
            style: {
              visibility: filePath === activeFile || hoveredIndex === index ? "visible" : "hidden"
            },
            tabIndex: filePath === activeFile ? 0 : -1,
            children: jsxRuntime.jsx(CloseIcon, {})
          })]
        }, filePath);
      })
    })
  }));
};

var RoundedButton = function (_a) {
  var onClick = _a.onClick, className = _a.className, children = _a.children;
  var classNames = useClassNames();
  return jsxRuntime.jsx("button", {
    className: classNames("button", [classNames("icon-standalone"), buttonClassName, iconStandaloneClassName, roundedButtonClassName, className]),
    onClick: onClick,
    type: "button",
    children: children
  });
};

var runButtonClassName = fakeCss;
var RunButton$1 = function (_a) {
  var onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
  var sandpack = useSandpack().sandpack;
  return jsxRuntime.jsxs(RoundedButton, __assign({
    className: runButtonClassName.toString(),
    onClick: function (event) {
      sandpack.runSandpack();
      onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }
  }, props, {
    children: [jsxRuntime.jsx(RunIcon, {}), jsxRuntime.jsx("span", {
      children: "Run"
    })]
  }));
};

var stackClassName = fakeCss;
var SandpackStack = function (_a) {
  var className = _a.className, props = __rest(_a, ["className"]);
  var classNames = useClassNames();
  return jsxRuntime.jsx("div", __assign({
    className: classNames("stack", [stackClassName, className])
  }, props));
};

var useSandpackTheme = function () {
  var _a = React__namespace.useContext(SandpackThemeContext), theme = _a.theme, id = _a.id, mode = _a.mode;
  return {
    theme: theme,
    themeId: id,
    themeMode: mode
  };
};

var shallowEqual = function (a, b) {
  if (a.length !== b.length) return false;
  var result = true;
  for (var index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) {
      result = false;
      break;
    }
  }
  return result;
};

var getCodeMirrorPosition = function (doc, _a) {
  var line = _a.line, column = _a.column;
  return doc.line(line).from + (column !== null && column !== void 0 ? column : 0) - 1;
};
var getEditorTheme = function () {
  return view.EditorView.theme({
    "&": {
      backgroundColor: ("var(--").concat(THEME_PREFIX, "-colors-surface1)"),
      color: ("var(--").concat(THEME_PREFIX, "-syntax-color-plain)"),
      height: "100%"
    },
    ".cm-matchingBracket, .cm-nonmatchingBracket, &.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      color: "inherit",
      backgroundColor: "rgba(128,128,128,.25)",
      backgroundBlendMode: "difference"
    },
    "&.cm-editor.cm-focused": {
      outline: "none"
    },
    "& .cm-activeLine": {
      backgroundColor: "transparent"
    },
    "&.cm-editor.cm-focused .cm-activeLine": {
      backgroundColor: ("var(--").concat(THEME_PREFIX, "-colors-surface3)"),
      borderRadius: ("var(--").concat(THEME_PREFIX, "-border-radius)")
    },
    ".cm-errorLine": {
      backgroundColor: ("var(--").concat(THEME_PREFIX, "-colors-errorSurface)"),
      borderRadius: ("var(--").concat(THEME_PREFIX, "-border-radius)")
    },
    ".cm-content": {
      caretColor: ("var(--").concat(THEME_PREFIX, "-colors-accent)"),
      padding: ("0 var(--").concat(THEME_PREFIX, "-space-4)")
    },
    ".cm-scroller": {
      fontFamily: ("var(--").concat(THEME_PREFIX, "-font-mono)"),
      lineHeight: ("var(--").concat(THEME_PREFIX, "-font-lineHeight)")
    },
    ".cm-gutters": {
      backgroundColor: ("var(--").concat(THEME_PREFIX, "-colors-surface1)"),
      color: ("var(--").concat(THEME_PREFIX, "-colors-disabled)"),
      border: "none",
      paddingLeft: ("var(--").concat(THEME_PREFIX, "-space-1)")
    },
    ".cm-gutter.cm-lineNumbers": {
      fontSize: ".6em"
    },
    ".cm-lineNumbers .cm-gutterElement": {
      lineHeight: ("var(--").concat(THEME_PREFIX, "-font-lineHeight)"),
      minWidth: ("var(--").concat(THEME_PREFIX, "-space-5)")
    },
    ".cm-content .cm-line": {
      paddingLeft: ("var(--").concat(THEME_PREFIX, "-space-1)")
    },
    ".cm-content.cm-readonly .cm-line": {
      paddingLeft: 0
    }
  });
};
var classNameToken = function (name) {
  return ("").concat(THEME_PREFIX, "-syntax-").concat(name);
};
var getSyntaxHighlight = function (theme) {
  return language.HighlightStyle.define([{
    tag: highlight.tags.link,
    textDecoration: "underline"
  }, {
    tag: highlight.tags.emphasis,
    fontStyle: "italic"
  }, {
    tag: highlight.tags.strong,
    fontWeight: "bold"
  }, {
    tag: highlight.tags.keyword,
    class: classNameToken("keyword")
  }, {
    tag: [highlight.tags.atom, highlight.tags.number, highlight.tags.bool],
    class: classNameToken("static")
  }, {
    tag: highlight.tags.variableName,
    class: classNameToken("plain")
  }, {
    tag: highlight.tags.standard(highlight.tags.tagName),
    class: classNameToken("tag")
  }, {
    tag: [highlight.tags.function(highlight.tags.variableName), highlight.tags.definition(highlight.tags.function(highlight.tags.variableName)), highlight.tags.tagName],
    class: classNameToken("definition")
  }, {
    tag: highlight.tags.propertyName,
    class: classNameToken("property")
  }, {
    tag: [highlight.tags.literal, highlight.tags.inserted],
    class: classNameToken(theme.syntax.string ? "string" : "static")
  }, {
    tag: highlight.tags.punctuation,
    class: classNameToken("punctuation")
  }, {
    tag: [highlight.tags.comment, highlight.tags.quote],
    class: classNameToken("comment")
  }]);
};
var getLanguageFromFile = function (filePath, fileType, additionalLanguages) {
  if (!filePath && !fileType) return "javascript";
  var extension = fileType;
  if (!extension && filePath) {
    var extensionDotIndex = filePath.lastIndexOf(".");
    extension = filePath.slice(extensionDotIndex + 1);
  }
  for (var _i = 0, additionalLanguages_1 = additionalLanguages; _i < additionalLanguages_1.length; _i++) {
    var additionalLanguage = additionalLanguages_1[_i];
    if (extension === additionalLanguage.name || additionalLanguage.extensions.includes(extension || "")) {
      return additionalLanguage.name;
    }
  }
  switch (extension) {
    case "ts":
    case "tsx":
      return "typescript";
    case "html":
    case "svelte":
    case "vue":
    case "astro":
      return "html";
    case "css":
    case "less":
    case "scss":
      return "css";
    case "js":
    case "jsx":
    case "json":
    default:
      return "javascript";
  }
};
var getCodeMirrorLanguage = function (extension, additionalLanguages) {
  var options = {
    javascript: langJavascript.javascript({
      jsx: true,
      typescript: false
    }),
    typescript: langJavascript.javascript({
      jsx: true,
      typescript: true
    }),
    html: langHtml.html(),
    css: langCss.css()
  };
  for (var _i = 0, additionalLanguages_2 = additionalLanguages; _i < additionalLanguages_2.length; _i++) {
    var additionalLanguage = additionalLanguages_2[_i];
    if (extension === additionalLanguage.name) {
      return additionalLanguage.language;
    }
  }
  return options[extension];
};
var useCombinedRefs = function () {
  var refs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    refs[_i] = arguments[_i];
  }
  return React__namespace.useCallback(function (element) {
    return refs.forEach(function (ref) {
      if (!ref) {
        return;
      }
      if (typeof ref === "function") {
        return ref(element);
      }
      ref.current = element;
    });
  }, refs);
};

function highlightDecorators(positions) {
  return view.ViewPlugin.fromClass((function () {
    function class_1(view) {
      this.decorations = this.getDecoration(view);
    }
    class_1.prototype.update = function (update) {
      return;
    };
    class_1.prototype.getDecoration = function (view$1) {
      if (!positions) return view.Decoration.none;
      var rangesDecorators = positions.map(function (item) {
        var _a, _b, _c;
        var lineDeco = view.Decoration.line({
          attributes: {
            class: (_a = item.className) !== null && _a !== void 0 ? _a : ""
          }
        });
        var markDeco = view.Decoration.mark({
          class: (_b = item.className) !== null && _b !== void 0 ? _b : "",
          attributes: (_c = item.elementAttributes) !== null && _c !== void 0 ? _c : undefined
        });
        var positionLineStart = getCodeMirrorPosition(view$1.state.doc, {
          line: item.line,
          column: item.startColumn
        }) + 1;
        if (item.startColumn && item.endColumn) {
          var positionLineEnd = getCodeMirrorPosition(view$1.state.doc, {
            line: item.line,
            column: item.endColumn
          }) + 1;
          return markDeco.range(positionLineStart, positionLineEnd);
        }
        return lineDeco.range(positionLineStart);
      });
      return view.Decoration.set(rangesDecorators);
    };
    return class_1;
  })(), {
    decorations: function (v) {
      return v.decorations;
    }
  });
}

function highlightInlineError() {
  return activeLineHighlighter;
}
var lineDeco = view.Decoration.line({
  attributes: {
    class: "cm-errorLine"
  }
});
var activeLineHighlighter = view.ViewPlugin.fromClass((function () {
  function class_1() {
    this.decorations = view.Decoration.none;
  }
  class_1.prototype.update = function (update) {
    var _this = this;
    update.transactions.forEach(function (trans) {
      var errorValue = trans.annotation("show-error");
      if (errorValue !== undefined) {
        var position = getCodeMirrorPosition(update.view.state.doc, {
          line: errorValue
        }) + 1;
        _this.decorations = view.Decoration.set([lineDeco.range(position)]);
      } else if (trans.annotation("remove-errors")) {
        _this.decorations = view.Decoration.none;
      }
    });
  };
  return class_1;
})(), {
  decorations: function (v) {
    return v.decorations;
  }
});

var placeholderClassName = fakeCss;
var tokensClassName = fakeCss;
var editorClassName = fakeCss;
var cmClassName = fakeCss;
var readOnlyClassName = fakeCss;

var useSyntaxHighlight = function (_a) {
  var langSupport = _a.langSupport, highlightTheme = _a.highlightTheme, _b = _a.code, code = _b === void 0 ? "" : _b;
  var tree = langSupport.language.parser.parse(code);
  var offSet = 0;
  var codeElementsRender = [];
  var addElement = function (to, className) {
    if (to > offSet) {
      var children = code.slice(offSet, to);
      codeElementsRender.push(className ? React.createElement("span", {
        children: children,
        className: className,
        key: ("").concat(to).concat(offSet)
      }) : children);
      offSet = to;
    }
  };
  highlight.highlightTree(tree, highlightTheme, function (from, to, className) {
    addElement(from, "");
    addElement(to, className);
  });
  if (offSet < code.length && (code === null || code === void 0 ? void 0 : code.includes("\n"))) {
    codeElementsRender.push("\n\n");
  }
  return codeElementsRender;
};

var CodeMirror = React__namespace.forwardRef(function (_a, ref) {
  var _b = _a.code, code = _b === void 0 ? "" : _b, filePath = _a.filePath, fileType = _a.fileType, onCodeUpdate = _a.onCodeUpdate, _c = _a.showLineNumbers, showLineNumbers = _c === void 0 ? false : _c, _d = _a.showInlineErrors, showInlineErrors = _d === void 0 ? false : _d, _e = _a.wrapContent, wrapContent = _e === void 0 ? false : _e, _f = _a.editorState, editorState = _f === void 0 ? "pristine" : _f, _g = _a.readOnly, readOnly = _g === void 0 ? false : _g, _h = _a.showReadOnly, showReadOnly = _h === void 0 ? true : _h, decorators = _a.decorators, _j = _a.initMode, initMode = _j === void 0 ? "lazy" : _j, _k = _a.extensions, extensions = _k === void 0 ? [] : _k, _l = _a.extensionsKeymap, extensionsKeymap = _l === void 0 ? [] : _l, _m = _a.additionalLanguages, additionalLanguages = _m === void 0 ? [] : _m;
  var wrapper = React__namespace.useRef(null);
  var combinedRef = useCombinedRefs(wrapper, ref);
  var cmView = React__namespace.useRef();
  var _o = useSandpackTheme(), theme = _o.theme, themeId = _o.themeId;
  var _p = React__namespace.useState(code), internalCode = _p[0], setInternalCode = _p[1];
  var _q = React__namespace.useState(initMode === "immediate"), shouldInitEditor = _q[0], setShouldInitEditor = _q[1];
  var classNames = useClassNames();
  var _r = useSandpack(), listen = _r.listen, autoReload = _r.sandpack.autoReload;
  var prevExtension = React__namespace.useRef([]);
  var prevExtensionKeymap = React__namespace.useRef([]);
  var isIntersecting = useIntersectionObserver__default.default(wrapper, {
    rootMargin: "600px 0px",
    threshold: 0.2
  }).isIntersecting;
  React__namespace.useImperativeHandle(ref, function () {
    return {
      getCodemirror: function () {
        return cmView.current;
      }
    };
  });
  React__namespace.useEffect(function () {
    var mode = initMode === "lazy" || initMode === "user-visible";
    if (mode && isIntersecting) {
      setShouldInitEditor(true);
    }
  }, [initMode, isIntersecting]);
  var languageExtension = getLanguageFromFile(filePath, fileType, additionalLanguages);
  var langSupport = getCodeMirrorLanguage(languageExtension, additionalLanguages);
  var highlightTheme = getSyntaxHighlight(theme);
  var syntaxHighlightRender = useSyntaxHighlight({
    langSupport: langSupport,
    highlightTheme: highlightTheme,
    code: code
  });
  var sortedDecorators = React__namespace.useMemo(function () {
    return decorators ? decorators.sort(function (d1, d2) {
      return d1.line - d2.line;
    }) : decorators;
  }, [decorators]);
  var useStaticReadOnly = readOnly && ((decorators === null || decorators === void 0 ? void 0 : decorators.length) === 0 || decorators === undefined);
  React__namespace.useEffect(function () {
    if (!wrapper.current || !shouldInitEditor || useStaticReadOnly) {
      return;
    }
    var parentDiv = wrapper.current;
    var existingPlaceholder = parentDiv.querySelector(".sp-pre-placeholder");
    if (existingPlaceholder) {
      parentDiv.removeChild(existingPlaceholder);
    }
    var view$1 = new view.EditorView({
      doc: code,
      extensions: [],
      parent: parentDiv
    });
    view$1.contentDOM.setAttribute("data-gramm", "false");
    view$1.contentDOM.setAttribute("data-lt-active", "false");
    view$1.contentDOM.setAttribute("aria-label", filePath ? ("Code Editor for ").concat(getFileName(filePath)) : "Code Editor");
    view$1.contentDOM.setAttribute("tabIndex", "-1");
    cmView.current = view$1;
    return function () {
      var _a;
      (_a = cmView.current) === null || _a === void 0 ? void 0 : _a.destroy();
    };
  }, [shouldInitEditor, readOnly, useStaticReadOnly]);
  React__namespace.useEffect(function () {
    if (useStaticReadOnly) {
      return;
    }
    if (cmView.current) {
      var customCommandsKeymap = [{
        key: "Tab",
        run: function (view) {
          var _a, _b;
          commands.indentMore(view);
          var customKey = extensionsKeymap.find(function (_a) {
            var key = _a.key;
            return key === "Tab";
          });
          return (_b = (_a = customKey === null || customKey === void 0 ? void 0 : customKey.run) === null || _a === void 0 ? void 0 : _a.call(customKey, view)) !== null && _b !== void 0 ? _b : true;
        }
      }, {
        key: "Shift-Tab",
        run: function (view) {
          var _a, _b;
          commands.indentLess({
            state: view.state,
            dispatch: view.dispatch
          });
          var customKey = extensionsKeymap.find(function (_a) {
            var key = _a.key;
            return key === "Shift-Tab";
          });
          return (_b = (_a = customKey === null || customKey === void 0 ? void 0 : customKey.run) === null || _a === void 0 ? void 0 : _a.call(customKey, view)) !== null && _b !== void 0 ? _b : true;
        }
      }, {
        key: "Escape",
        run: function () {
          if (readOnly) return true;
          if (wrapper.current) {
            wrapper.current.focus();
          }
          return true;
        }
      }, {
        key: "mod-Backspace",
        run: commands.deleteGroupBackward
      }];
      var extensionList = __spreadArray(__spreadArray([view.highlightSpecialChars(), commands.history(), autocomplete.closeBrackets()], extensions, true), [view.keymap.of(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], autocomplete.closeBracketsKeymap, true), commands.defaultKeymap, true), commands.historyKeymap, true), customCommandsKeymap, true), extensionsKeymap, true)), langSupport, getEditorTheme(), language.syntaxHighlighting(highlightTheme), view.EditorView.updateListener.of(function (update) {
        if (update.docChanged) {
          var newCode = update.state.doc.toString();
          setInternalCode(newCode);
          onCodeUpdate === null || onCodeUpdate === void 0 ? void 0 : onCodeUpdate(newCode);
        }
      })], false);
      if (readOnly) {
        extensionList.push(state.EditorState.readOnly.of(true));
        extensionList.push(view.EditorView.editable.of(false));
      } else {
        extensionList.push(language.bracketMatching());
        extensionList.push(view.highlightActiveLine());
      }
      if (sortedDecorators) {
        extensionList.push(highlightDecorators(sortedDecorators));
      }
      if (wrapContent) {
        extensionList.push(view.EditorView.lineWrapping);
      }
      if (showLineNumbers) {
        extensionList.push(view.lineNumbers());
      }
      if (showInlineErrors) {
        extensionList.push(highlightInlineError());
      }
      cmView.current.dispatch({
        effects: state.StateEffect.reconfigure.of(extensionList)
      });
    }
  }, [shouldInitEditor, sortedDecorators, showLineNumbers, wrapContent, themeId, readOnly, useStaticReadOnly, autoReload]);
  React__namespace.useEffect(function applyExtensions() {
    var view$1 = cmView.current;
    var dependenciesAreDiff = !shallowEqual(extensions, prevExtension.current) || !shallowEqual(extensionsKeymap, prevExtensionKeymap.current);
    if (view$1 && dependenciesAreDiff) {
      view$1.dispatch({
        effects: state.StateEffect.appendConfig.of(extensions)
      });
      view$1.dispatch({
        effects: state.StateEffect.appendConfig.of(view.keymap.of(__spreadArray([], extensionsKeymap, true)))
      });
      prevExtension.current = extensions;
      prevExtensionKeymap.current = extensionsKeymap;
    }
  }, [extensions, extensionsKeymap]);
  React__namespace.useEffect(function () {
    if (cmView.current && editorState === "dirty" && window.matchMedia("(min-width: 768px)").matches) {
      cmView.current.contentDOM.focus();
    }
  }, []);
  React__namespace.useEffect(function () {
    if (cmView.current && typeof code === "string" && code !== internalCode) {
      var view = cmView.current;
      var selection = view.state.selection.ranges.some(function (_a) {
        var to = _a.to, from = _a.from;
        return to > code.length || from > code.length;
      }) ? state.EditorSelection.cursor(code.length) : view.state.selection;
      var changes = {
        from: 0,
        to: view.state.doc.length,
        insert: code
      };
      view.dispatch({
        changes: changes,
        selection: selection
      });
    }
  }, [code]);
  React__namespace.useEffect(function messageToInlineError() {
    if (!showInlineErrors) return;
    var unsubscribe = listen(function (message) {
      var view = cmView.current;
      if (message.type === "success") {
        view === null || view === void 0 ? void 0 : view.dispatch({
          annotations: [new state.Annotation("remove-errors", true)]
        });
      } else if (message.type === "action" && message.action === "show-error" && message.path === filePath && message.line) {
        view === null || view === void 0 ? void 0 : view.dispatch({
          annotations: [new state.Annotation("show-error", message.line)]
        });
      }
    });
    return function () {
      return unsubscribe();
    };
  }, [listen, showInlineErrors]);
  var handleContainerKeyDown = function (evt) {
    if (evt.key === "Enter" && cmView.current) {
      evt.preventDefault();
      cmView.current.contentDOM.focus();
    }
  };
  var gutterLineOffset = function () {
    var offset = 4;
    if (showLineNumbers) {
      offset += 6;
    }
    if (!readOnly) {
      offset += 1;
    }
    return ("var(--").concat(THEME_PREFIX, "-space-").concat(offset, ")");
  };
  if (useStaticReadOnly) {
    return jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [jsxRuntime.jsx("pre", {
        ref: combinedRef,
        className: classNames("cm", [classNames(editorState), classNames(languageExtension), cmClassName, tokensClassName]),
        translate: "no",
        children: jsxRuntime.jsx("code", {
          className: classNames("pre-placeholder", [placeholderClassName]),
          style: {
            marginLeft: gutterLineOffset()
          },
          children: syntaxHighlightRender
        })
      }), readOnly && showReadOnly && jsxRuntime.jsx("span", __assign({
        className: classNames("read-only", [readOnlyClassName])
      }, {}, {
        children: "Read-only"
      }))]
    });
  }
  return jsxRuntime.jsx("div", {
    ref: combinedRef,
    "aria-autocomplete": "list",
    "aria-label": filePath ? ("Code Editor for ").concat(getFileName(filePath)) : "Code Editor",
    "aria-multiline": "true",
    className: classNames("cm", [classNames(editorState), classNames(languageExtension), cmClassName, tokensClassName]),
    onKeyDown: handleContainerKeyDown,
    role: "textbox",
    tabIndex: 0,
    translate: "no",
    suppressHydrationWarning: true,
    children: jsxRuntime.jsx("pre", {
      className: classNames("pre-placeholder", [placeholderClassName]),
      style: {
        marginLeft: gutterLineOffset()
      },
      children: syntaxHighlightRender
    })
  });
});

var SandpackCodeEditor = React.forwardRef(function (_a, ref) {
  var showTabs = _a.showTabs, _b = _a.showLineNumbers, showLineNumbers = _b === void 0 ? false : _b, _c = _a.showInlineErrors, showInlineErrors = _c === void 0 ? false : _c, _d = _a.showRunButton, showRunButton = _d === void 0 ? true : _d, _e = _a.wrapContent, wrapContent = _e === void 0 ? false : _e, _f = _a.closableTabs, closableTabs = _f === void 0 ? false : _f, initMode = _a.initMode, extensions = _a.extensions, extensionsKeymap = _a.extensionsKeymap, readOnly = _a.readOnly, showReadOnly = _a.showReadOnly, additionalLanguages = _a.additionalLanguages, className = _a.className, props = __rest(_a, ["showTabs", "showLineNumbers", "showInlineErrors", "showRunButton", "wrapContent", "closableTabs", "initMode", "extensions", "extensionsKeymap", "readOnly", "showReadOnly", "additionalLanguages", "className"]);
  var sandpack = useSandpack().sandpack;
  var _g = useActiveCode(), code = _g.code, updateCode = _g.updateCode, readOnlyFile = _g.readOnly;
  var activeFile = sandpack.activeFile, status = sandpack.status, editorState = sandpack.editorState;
  var shouldShowTabs = showTabs !== null && showTabs !== void 0 ? showTabs : sandpack.visibleFiles.length > 1;
  var classNames = useClassNames();
  var handleCodeUpdate = function (newCode, shouldUpdatePreview) {
    if (shouldUpdatePreview === void 0) {
      shouldUpdatePreview = true;
    }
    updateCode(newCode, shouldUpdatePreview);
  };
  var activeFileUniqueId = useSandpackId();
  return jsxRuntime.jsxs(SandpackStack, __assign({
    className: classNames("editor", [className])
  }, props, {
    children: [shouldShowTabs && jsxRuntime.jsx(FileTabs, {
      activeFileUniqueId: activeFileUniqueId,
      closableTabs: closableTabs
    }), jsxRuntime.jsxs("div", {
      "aria-labelledby": ("").concat(activeFile, "-").concat(activeFileUniqueId, "-tab"),
      className: classNames("code-editor", [editorClassName]),
      id: ("").concat(activeFile, "-").concat(activeFileUniqueId, "-tab-panel"),
      role: "tabpanel",
      children: [jsxRuntime.jsx(CodeMirror, {
        ref: ref,
        additionalLanguages: additionalLanguages,
        code: code,
        editorState: editorState,
        extensions: extensions,
        extensionsKeymap: extensionsKeymap,
        filePath: activeFile,
        initMode: initMode || sandpack.initMode,
        onCodeUpdate: function (newCode) {
          var _a;
          return handleCodeUpdate(newCode, (_a = sandpack.autoReload) !== null && _a !== void 0 ? _a : true);
        },
        readOnly: readOnly || readOnlyFile,
        showInlineErrors: showInlineErrors,
        showLineNumbers: showLineNumbers,
        showReadOnly: showReadOnly,
        wrapContent: wrapContent
      }, activeFile), showRunButton && (!sandpack.autoReload || status === "idle") ? jsxRuntime.jsx(RunButton$1, {}) : null]
    })]
  }));
});

var SandpackCodeViewer = React__namespace.forwardRef(function (_a, ref) {
  var showTabs = _a.showTabs, showLineNumbers = _a.showLineNumbers, decorators = _a.decorators, propCode = _a.code, initMode = _a.initMode, wrapContent = _a.wrapContent, additionalLanguages = _a.additionalLanguages, props = __rest(_a, ["showTabs", "showLineNumbers", "decorators", "code", "initMode", "wrapContent", "additionalLanguages"]);
  var sandpack = useSandpack().sandpack;
  var code = useActiveCode().code;
  var classNames = useClassNames();
  var shouldShowTabs = showTabs !== null && showTabs !== void 0 ? showTabs : sandpack.visibleFiles.length > 1;
  var activeFileUniqueId = useSandpackId();
  return jsxRuntime.jsxs(SandpackStack, __assign({
    className: classNames("editor-viewer")
  }, props, {
    children: [shouldShowTabs ? jsxRuntime.jsx(FileTabs, {
      activeFileUniqueId: activeFileUniqueId
    }) : null, jsxRuntime.jsx("div", {
      "aria-labelledby": ("").concat(sandpack.activeFile, "-").concat(activeFileUniqueId, "-tab"),
      className: classNames("code-editor", [editorClassName]),
      id: ("").concat(sandpack.activeFile, "-").concat(activeFileUniqueId, "-tab-panel"),
      role: "tabpanel",
      children: jsxRuntime.jsx(CodeMirror, {
        ref: ref,
        additionalLanguages: additionalLanguages,
        code: propCode !== null && propCode !== void 0 ? propCode : code,
        decorators: decorators,
        filePath: sandpack.activeFile,
        initMode: initMode || sandpack.initMode,
        showLineNumbers: showLineNumbers,
        showReadOnly: false,
        wrapContent: wrapContent,
        readOnly: true
      })
    }), sandpack.status === "idle" ? jsxRuntime.jsx(RunButton$1, {}) : null]
  }));
});

var layoutClassName = fakeCss;
var SandpackLayout = React__namespace.forwardRef(function (_a, ref) {
  var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
  var sandpack = useSandpack().sandpack;
  var classNames = useClassNames();
  var combinedRef = useCombinedRefs(sandpack.lazyAnchorRef, ref);
  return jsxRuntime.jsx("div", __assign({
    ref: combinedRef,
    className: classNames("layout", [layoutClassName, className])
  }, props, {
    children: children
  }));
});

var useErrorMessage = function () {
  var _a;
  var sandpack = useSandpack().sandpack;
  var error = sandpack.error;
  return (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : null;
};

var FADE_ANIMATION_DURATION = 200;
var useLoadingOverlayState = function (clientId, externalLoading) {
  var _a = useSandpack(), sandpack = _a.sandpack, listen = _a.listen;
  var _b = React__namespace.useState("LOADING"), state = _b[0], setState = _b[1];
  React__namespace.useEffect(function () {
    var unsubscribe = listen(function (message) {
      if (message.type === "start" && message.firstLoad === true) {
        setState("LOADING");
      }
      if (message.type === "done") {
        setState(function (prev) {
          return prev === "LOADING" ? "PRE_FADING" : "HIDDEN";
        });
      }
    }, clientId);
    return function () {
      unsubscribe();
    };
  }, [clientId, sandpack.status === "idle"]);
  React__namespace.useEffect(function () {
    var fadeTimeout;
    if (state === "PRE_FADING" && !externalLoading) {
      setState("FADING");
    } else if (state === "FADING") {
      fadeTimeout = setTimeout(function () {
        return setState("HIDDEN");
      }, FADE_ANIMATION_DURATION);
    }
    return function () {
      clearTimeout(fadeTimeout);
    };
  }, [state, externalLoading]);
  if (sandpack.status === "timeout") {
    return "TIMEOUT";
  }
  if (sandpack.status !== "running") {
    return "HIDDEN";
  }
  return state;
};

var useSandpackNavigation = function (clientId) {
  var dispatch = useSandpack().dispatch;
  return {
    refresh: function () {
      return dispatch({
        type: "refresh"
      }, clientId);
    },
    back: function () {
      return dispatch({
        type: "urlback"
      }, clientId);
    },
    forward: function () {
      return dispatch({
        type: "urlforward"
      }, clientId);
    }
  };
};

function getTranspiledCode(sandpack) {
  var _a, _b;
  var activeFile = sandpack.activeFile, bundlerState = sandpack.bundlerState;
  if (bundlerState == null) {
    return null;
  }
  var tModule = bundlerState.transpiledModules[activeFile + ":"];
  return (_b = (_a = tModule === null || tModule === void 0 ? void 0 : tModule.source) === null || _a === void 0 ? void 0 : _a.compiledCode) !== null && _b !== void 0 ? _b : null;
}
var useTranspiledCode = function () {
  var sandpack = useSandpack().sandpack;
  if (sandpack.status !== "running") {
    return null;
  }
  return getTranspiledCode(sandpack);
};

var useSandpackClient = function (clientPropsOverride) {
  var _a = useSandpack(), sandpack = _a.sandpack, listen = _a.listen, dispatch = _a.dispatch;
  var iframeRef = React__namespace.useRef(null);
  var clientId = React__namespace.useRef(generateRandomId());
  React__namespace.useEffect(function () {
    var iframeElement = iframeRef.current;
    var clientIdValue = clientId.current;
    if (iframeElement !== null) {
      sandpack.registerBundler(iframeElement, clientIdValue, clientPropsOverride);
    }
    return function () {
      return sandpack.unregisterBundler(clientIdValue);
    };
  }, []);
  var getClient = function () {
    return sandpack.clients[clientId.current] || null;
  };
  return {
    sandpack: sandpack,
    getClient: getClient,
    clientId: clientId.current,
    iframe: iframeRef,
    listen: function (listener) {
      return listen(listener, clientId.current);
    },
    dispatch: function (message) {
      return dispatch(message, clientId.current);
    }
  };
};

var useSandpackShell = function (clientId) {
  var dispatch = useSandpack().dispatch;
  return {
    restart: function () {
      return dispatch({
        type: "shell/restart"
      }, clientId);
    },
    openPreview: function () {
      return dispatch({
        type: "shell/openPreview"
      }, clientId);
    }
  };
};

var mapProgressMessage = function (originalMessage, firstTotalPending) {
  var _a;
  switch (originalMessage.state) {
    case "downloading_manifest":
      return "[1/3] Downloading manifest";
    case "downloaded_module":
      return ("[2/3] Downloaded ").concat(originalMessage.name, " (").concat(firstTotalPending - originalMessage.totalPending, "/").concat(firstTotalPending, ")");
    case "starting_command":
      return "[3/3] Starting command";
    case "command_running":
      return ("[3/3] Running \"").concat((_a = originalMessage.command) === null || _a === void 0 ? void 0 : _a.trim(), "\"");
  }
};
var useSandpackPreviewProgress = function (props) {
  var _a = React__namespace.useState(false), isReady = _a[0], setIsReady = _a[1];
  var _b = React__namespace.useState(), totalDependencies = _b[0], setTotalDependencies = _b[1];
  var _c = React__namespace.useState(null), loadingMessage = _c[0], setLoadingMessage = _c[1];
  var timeout = props === null || props === void 0 ? void 0 : props.timeout;
  var clientId = props === null || props === void 0 ? void 0 : props.clientId;
  var listen = useSandpack().listen;
  React__namespace.useEffect(function () {
    var timer;
    var unsubscribe = listen(function (message) {
      if (message.type === "start" && message.firstLoad) {
        setIsReady(false);
      }
      if (timeout) {
        timer = setTimeout(function () {
          setLoadingMessage(null);
        }, timeout);
      }
      if (message.type === "dependencies") {
        setLoadingMessage(function () {
          switch (message.data.state) {
            case "downloading_manifest":
              return "[1/3] Downloading manifest";
            case "downloaded_module":
              return ("[2/3] Downloaded ").concat(message.data.name, " (").concat(message.data.progress, "/").concat(message.data.total, ")");
            case "starting":
              return "[3/3] Starting";
          }
          return null;
        });
      } else if (message.type === "shell/progress" && !isReady) {
        if (!totalDependencies && message.data.state === "downloaded_module") {
          setTotalDependencies(message.data.totalPending);
        }
        if (totalDependencies !== undefined) {
          setLoadingMessage(mapProgressMessage(message.data, totalDependencies));
        }
      }
      if (message.type === "done" && message.compilatonError === false) {
        setLoadingMessage(null);
        setIsReady(true);
        clearTimeout(timer);
      }
    }, clientId);
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      unsubscribe();
    };
  }, [clientId, isReady, totalDependencies, timeout]);
  return loadingMessage;
};

var MAX_MESSAGE_COUNT$1 = 400 * 2;
var useSandpackShellStdout = function (_a) {
  var clientId = _a.clientId, _b = _a.maxMessageCount, maxMessageCount = _b === void 0 ? MAX_MESSAGE_COUNT$1 : _b;
  var _d = React__namespace.useState([]), logs = _d[0], setLogs = _d[1];
  var listen = useSandpack().listen;
  React__namespace.useEffect(function () {
    var unsubscribe = listen(function (message) {
      if (message.type === "start") {
        setLogs([]);
      } else if (message.type === "stdout" && message.payload.data && Boolean(message.payload.data.trim())) {
        setLogs(function (prev) {
          var messages = __spreadArray(__spreadArray([], prev, true), [{
            data: message.payload.data,
            id: generateRandomId()
          }], false);
          while (messages.length > maxMessageCount) {
            messages.shift();
          }
          return messages;
        });
      }
    }, clientId);
    return unsubscribe;
  }, [maxMessageCount, clientId]);
  return {
    logs: logs,
    reset: function () {
      return setLogs([]);
    }
  };
};

var mapBundlerErrors = function (originalMessage) {
  var errorMessage = originalMessage.replace("[sandpack-client]: ", "");
  if ((/process.exit/).test(errorMessage)) {
    var exitCode = errorMessage.match(/process.exit\((\d+)\)/);
    if (!exitCode) return errorMessage;
    if (Number(exitCode[1]) === 0) {
      return "Server is not running, would you like to start it again?";
    }
    return ("Server has crashed with status code ").concat(exitCode[1], ", would you like to restart the server?");
  }
  return errorMessage;
};
var ErrorOverlay = function (props) {
  var children = props.children, className = props.className, otherProps = __rest(props, ["children", "className"]);
  var errorMessage = useErrorMessage();
  var restart = useSandpackShell().restart;
  var classNames = useClassNames();
  var _a = useSandpack().sandpack, runSandpack = _a.runSandpack, teamId = _a.teamId;
  var dispatch = useSandpack().dispatch;
  if (!errorMessage && !children) {
    return null;
  }
  var isSandpackBundlerError = errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.startsWith("[sandpack-client]");
  var privateDependencyError = errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes("NPM_REGISTRY_UNAUTHENTICATED_REQUEST");
  var onSignIn = function () {
    if (teamId) {
      dispatch({
        type: "sign-in",
        teamId: teamId
      });
    }
  };
  if (privateDependencyError) {
    return jsxRuntime.jsxs("div", __assign({
      className: classNames("overlay", [classNames("error"), absoluteClassName, errorBundlerClassName, className])
    }, props, {
      children: [jsxRuntime.jsx("p", {
        className: classNames("error-message", [errorMessageClassName]),
        children: jsxRuntime.jsx("strong", {
          children: "Unable to fetch required dependency."
        })
      }), jsxRuntime.jsx("div", {
        className: classNames("error-message", [errorMessageClassName]),
        children: jsxRuntime.jsxs("p", {
          children: ["Authentication required. Please sign in to your account (make sure to allow pop-ups to this page) and try again. If the issue persists, contact", " ", jsxRuntime.jsx("a", {
            href: "mailto:hello@codesandbox.io?subject=Sandpack Timeout Error",
            children: "support"
          }), " ", "for further assistance."]
        })
      }), jsxRuntime.jsx("div", {
        children: jsxRuntime.jsxs("button", {
          className: classNames("button", [buttonClassName, iconStandaloneClassName, roundedButtonClassName]),
          onClick: onSignIn,
          children: [jsxRuntime.jsx(SignInIcon, {}), jsxRuntime.jsx("span", {
            children: "Sign in"
          })]
        })
      })]
    }));
  }
  if (isSandpackBundlerError && errorMessage) {
    return jsxRuntime.jsx("div", __assign({
      className: classNames("overlay", [classNames("error"), absoluteClassName, errorBundlerClassName, className])
    }, otherProps, {
      children: jsxRuntime.jsxs("div", {
        className: classNames("error-message", [errorMessageClassName]),
        children: [jsxRuntime.jsx("p", {
          className: classNames("error-title", [fakeCss]),
          children: "Couldn't connect to server"
        }), jsxRuntime.jsx("p", {
          children: mapBundlerErrors(errorMessage)
        }), jsxRuntime.jsx("div", {
          children: jsxRuntime.jsxs("button", {
            className: classNames("button", [classNames("icon-standalone"), buttonClassName, iconStandaloneClassName, roundedButtonClassName]),
            onClick: function () {
              restart();
              runSandpack();
            },
            title: "Restart script",
            type: "button",
            children: [jsxRuntime.jsx(RestartIcon, {}), " ", jsxRuntime.jsx("span", {
              children: "Restart"
            })]
          })
        })]
      })
    }));
  }
  return jsxRuntime.jsxs("div", __assign({
    className: classNames("overlay", [classNames("error"), absoluteClassName, errorClassName(), className]),
    translate: "no"
  }, otherProps, {
    children: [jsxRuntime.jsx("p", {
      className: classNames("error-message", [errorMessageClassName]),
      children: jsxRuntime.jsx("strong", {
        children: "Something went wrong"
      })
    }), jsxRuntime.jsx("p", {
      className: classNames("error-message", [errorMessageClassName()]),
      children: errorMessage || children
    })]
  }));
};

function ansiToJSON(input, use_classes) {
  if (use_classes === void 0) {
    use_classes = false;
  }
  input = escapeCarriage.escapeCarriageReturn(fixBackspace(input));
  return Anser__default.default.ansiToJson(input, {
    json: true,
    remove_empty: true,
    use_classes: use_classes
  });
}
function createClass(bundle) {
  var classNames = "";
  if (bundle.bg) {
    classNames += ("").concat(bundle.bg, "-bg ");
  }
  if (bundle.fg) {
    classNames += ("").concat(bundle.fg, "-fg ");
  }
  if (bundle.decoration) {
    classNames += ("ansi-").concat(bundle.decoration, " ");
  }
  if (classNames === "") {
    return null;
  }
  classNames = classNames.substring(0, classNames.length - 1);
  return classNames;
}
function createStyle(bundle) {
  var style = {};
  if (bundle.bg) {
    style.backgroundColor = ("rgb(").concat(bundle.bg, ")");
  }
  if (bundle.fg) {
    style.color = ("rgb(").concat(bundle.fg, ")");
  }
  switch (bundle.decoration) {
    case "bold":
      style.fontWeight = "bold";
      break;
    case "dim":
      style.opacity = "0.5";
      break;
    case "italic":
      style.fontStyle = "italic";
      break;
    case "hidden":
      style.visibility = "hidden";
      break;
    case "strikethrough":
      style.textDecoration = "line-through";
      break;
    case "underline":
      style.textDecoration = "underline";
      break;
    case "blink":
      style.textDecoration = "blink";
      break;
  }
  return style;
}
function convertBundleIntoReact(linkify, useClasses, bundle, key) {
  var style = useClasses ? null : createStyle(bundle);
  var className = useClasses ? createClass(bundle) : null;
  if (!linkify) {
    return React__namespace.createElement("span", {
      style: style,
      key: key,
      className: className
    }, bundle.content);
  }
  var content = [];
  var linkRegex = /(\s|^)(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g;
  var index = 0;
  var match;
  while ((match = linkRegex.exec(bundle.content)) !== null) {
    var pre = match[1], url = match[2];
    var startIndex = match.index + pre.length;
    if (startIndex > index) {
      content.push(bundle.content.substring(index, startIndex));
    }
    var href = url.startsWith("www.") ? ("http://").concat(url) : url;
    content.push(React__namespace.createElement("a", {
      key: index,
      href: href,
      target: "_blank"
    }, ("").concat(url)));
    index = linkRegex.lastIndex;
  }
  if (index < bundle.content.length) {
    content.push(bundle.content.substring(index));
  }
  return React__namespace.createElement("span", {
    style: style,
    key: key,
    className: className
  }, content);
}
function Ansi(props) {
  var className = props.className, useClasses = props.useClasses, children = props.children, linkify = props.linkify;
  return React__namespace.createElement("code", {
    className: className
  }, ansiToJSON(children !== null && children !== void 0 ? children : "", useClasses !== null && useClasses !== void 0 ? useClasses : false).map(convertBundleIntoReact.bind(null, linkify !== null && linkify !== void 0 ? linkify : false, useClasses !== null && useClasses !== void 0 ? useClasses : false)));
}
function fixBackspace(txt) {
  var tmp = txt;
  do {
    txt = tmp;
    tmp = txt.replace(/[^\n]\x08/gm, "");
  } while (tmp.length < txt.length);
  return txt;
}

var StdoutList = function (_a) {
  var data = _a.data;
  var classNames = useClassNames();
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: data.map(function (_a) {
      var data = _a.data, id = _a.id;
      return jsxRuntime.jsx("div", {
        className: classNames("console-item", [consoleItemClassName$1]),
        children: jsxRuntime.jsx(Ansi, {
          children: data
        })
      }, id);
    })
  });
};
var consoleItemClassName$1 = fakeCss;

var getParameters = function (parameters) {
  return LZString__default.default.compressToBase64(JSON.stringify(parameters)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
var CSB_URL = "https://codesandbox.io/api/v1/sandboxes/define";
var getFileParameters = function (files, environment) {
  var normalizedFiles = Object.keys(files).reduce(function (prev, next) {
    var _a;
    var fileName = next.replace("/", "");
    var value = {
      content: files[next].code,
      isBinary: false
    };
    return __assign(__assign({}, prev), (_a = {}, _a[fileName] = value, _a));
  }, {});
  return getParameters(__assign({
    files: normalizedFiles
  }, environment ? {
    template: environment
  } : null));
};
var UnstyledOpenInCodeSandboxButton = function (props) {
  var sandpack = useSandpack().sandpack;
  if (sandpack.exportOptions) {
    return jsxRuntime.jsx(ExportToWorkspaceButton, __assign({
      state: sandpack
    }, props));
  }
  return jsxRuntime.jsx(RegularExportButton, __assign({
    state: sandpack
  }, props));
};
var ExportToWorkspaceButton = function (_a) {
  var children = _a.children, state = _a.state, props = __rest(_a, ["children", "state"]);
  var submit = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var normalizedFiles, response, data;
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!((_a = state.exportOptions) === null || _a === void 0 ? void 0 : _a.apiToken)) {
              throw new Error("Missing `apiToken` property");
            }
            normalizedFiles = Object.keys(state.files).reduce(function (prev, next) {
              var _a;
              var fileName = next.replace("/", "");
              return __assign(__assign({}, prev), (_a = {}, _a[fileName] = state.files[next], _a));
            }, {});
            return [4, fetch("https://api.codesandbox.io/sandbox", {
              method: "POST",
              body: JSON.stringify({
                template: state.environment,
                files: normalizedFiles,
                privacy: state.exportOptions.privacy === "public" ? 0 : 2
              }),
              headers: {
                Authorization: ("Bearer ").concat(state.exportOptions.apiToken),
                "Content-Type": "application/json",
                "X-CSB-API-Version": "2023-07-01"
              }
            })];
          case 1:
            response = _b.sent();
            return [4, response.json()];
          case 2:
            data = _b.sent();
            window.open(("https://codesandbox.io/p/sandbox/").concat(data.data.alias, "?file=/").concat(state.activeFile, "&utm-source=storybook-addon"), "_blank");
            return [2];
        }
      });
    });
  };
  return jsxRuntime.jsx("button", __assign({
    onClick: submit,
    title: "Export to workspace in CodeSandbox",
    type: "button"
  }, props, {
    children: children
  }));
};
var RegularExportButton = function (_a) {
  var _b, _c, _d;
  var children = _a.children, state = _a.state, props = __rest(_a, ["children", "state"]);
  var formRef = React__namespace.useRef(null);
  var _e = React__namespace.useState(), paramsValues = _e[0], setParamsValues = _e[1];
  React__namespace.useEffect(function debounce() {
    var timer = setTimeout(function () {
      var params = getFileParameters(state.files, state.environment);
      var searchParams = new URLSearchParams({
        parameters: params,
        query: new URLSearchParams({
          file: state.activeFile,
          utm_medium: "sandpack"
        }).toString()
      });
      setParamsValues(searchParams);
    }, 600);
    return function () {
      clearTimeout(timer);
    };
  }, [state.activeFile, state.environment, state.files]);
  if (((_d = (_c = (_b = paramsValues === null || paramsValues === void 0 ? void 0 : paramsValues.get) === null || _b === void 0 ? void 0 : _b.call(paramsValues, "parameters")) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 1500) {
    return jsxRuntime.jsxs("button", __assign({
      onClick: function () {
        var _a;
        return (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
      },
      title: "Open in CodeSandbox",
      type: "button"
    }, props, {
      children: [jsxRuntime.jsxs("form", {
        ref: formRef,
        action: CSB_URL,
        method: "POST",
        style: {
          visibility: "hidden"
        },
        target: "_blank",
        children: [jsxRuntime.jsx("input", {
          name: "environment",
          type: "hidden",
          value: state.environment === "node" ? "server" : state.environment
        }), Array.from(paramsValues, function (_a) {
          var key = _a[0], value = _a[1];
          return jsxRuntime.jsx("input", {
            name: key,
            type: "hidden",
            value: value
          }, key);
        })]
      }), children]
    }));
  }
  return jsxRuntime.jsx("a", __assign({
    href: ("").concat(CSB_URL, "?").concat(paramsValues === null || paramsValues === void 0 ? void 0 : paramsValues.toString(), "&environment=").concat(state.environment === "node" ? "server" : state.environment),
    rel: "noreferrer noopener",
    target: "_blank",
    title: "Open in CodeSandbox"
  }, props, {
    children: children
  }));
};

var OpenInCodeSandboxButton = function () {
  var classNames = useClassNames();
  return jsxRuntime.jsxs(UnstyledOpenInCodeSandboxButton, {
    className: classNames("button", [classNames("icon-standalone"), buttonClassName, iconStandaloneClassName, roundedButtonClassName]),
    children: [jsxRuntime.jsx(ExportIcon, {}), jsxRuntime.jsx("span", {
      children: "Open Sandbox"
    })]
  });
};

var cubeClassName = fakeCss;
var wrapperClassName$2 = fakeCss;
keyframes({
  "0%": {
    transform: "rotateX(-25.5deg) rotateY(45deg)"
  },
  "100%": {
    transform: "rotateX(-25.5deg) rotateY(405deg)"
  }
});
var sidesClassNames = fakeCss;
var Loading = function (_a) {
  var className = _a.className, showOpenInCodeSandbox = _a.showOpenInCodeSandbox, props = __rest(_a, ["className", "showOpenInCodeSandbox"]);
  var classNames = useClassNames();
  return jsxRuntime.jsxs("div", __assign({
    className: classNames("cube-wrapper", [wrapperClassName$2, className]),
    title: "Open in CodeSandbox"
  }, props, {
    children: [showOpenInCodeSandbox && jsxRuntime.jsx(OpenInCodeSandboxButton, {}), jsxRuntime.jsx("div", {
      className: classNames("cube", [cubeClassName]),
      children: jsxRuntime.jsxs("div", {
        className: classNames("sides", [sidesClassNames]),
        children: [jsxRuntime.jsx("div", {
          className: "top"
        }), jsxRuntime.jsx("div", {
          className: "right"
        }), jsxRuntime.jsx("div", {
          className: "bottom"
        }), jsxRuntime.jsx("div", {
          className: "left"
        }), jsxRuntime.jsx("div", {
          className: "front"
        }), jsxRuntime.jsx("div", {
          className: "back"
        })]
      })
    })]
  }));
};

var loadingClassName = fakeCss;
var LoadingOverlay = function (_a) {
  var clientId = _a.clientId, loading = _a.loading, className = _a.className, style = _a.style, showOpenInCodeSandbox = _a.showOpenInCodeSandbox, props = __rest(_a, ["clientId", "loading", "className", "style", "showOpenInCodeSandbox"]);
  var classNames = useClassNames();
  var _b = useSandpack().sandpack, runSandpack = _b.runSandpack, environment = _b.environment;
  var _c = React__namespace.useState(false), shouldShowStdout = _c[0], setShouldShowStdout = _c[1];
  var loadingOverlayState = useLoadingOverlayState(clientId, loading);
  var progressMessage = useSandpackPreviewProgress({
    clientId: clientId
  });
  var stdoutData = useSandpackShellStdout({
    clientId: clientId
  }).logs;
  React__namespace.useEffect(function () {
    var timer;
    if (progressMessage === null || progressMessage === void 0 ? void 0 : progressMessage.includes("Running")) {
      timer = setTimeout(function () {
        setShouldShowStdout(true);
      }, 3000);
    }
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [progressMessage]);
  if (loadingOverlayState === "HIDDEN") {
    return null;
  }
  if (loadingOverlayState === "TIMEOUT") {
    return jsxRuntime.jsx("div", __assign({
      className: classNames("overlay", [classNames("error"), absoluteClassName, errorClassName, errorBundlerClassName, className])
    }, props, {
      children: jsxRuntime.jsxs("div", {
        className: classNames("error-message", [errorMessageClassName]),
        children: [jsxRuntime.jsx("p", {
          className: classNames("error-title", [fakeCss]),
          children: "Couldn't connect to server"
        }), jsxRuntime.jsx("div", {
          className: classNames("error-message", [errorMessageClassName]),
          children: jsxRuntime.jsxs("p", {
            children: ["This means sandpack cannot connect to the runtime or your network is having some issues. Please check the network tab in your browser and try again. If the problem persists, report it via", " ", jsxRuntime.jsx("a", {
              href: "mailto:hello@codesandbox.io?subject=Sandpack Timeout Error",
              children: "email"
            }), " ", "or submit an issue on", " ", jsxRuntime.jsx("a", {
              href: "https://github.com/codesandbox/sandpack/issues",
              rel: "noreferrer noopener",
              target: "_blank",
              children: "GitHub."
            })]
          })
        }), jsxRuntime.jsxs("p", {
          className: classNames("error-message", [errorMessageClassName()]),
          children: ["ENV: ", environment, jsxRuntime.jsx("br", {}), "ERROR: TIME_OUT"]
        }), jsxRuntime.jsx("div", {
          children: jsxRuntime.jsxs("button", {
            className: classNames("button", [classNames("icon-standalone"), buttonClassName, iconStandaloneClassName, roundedButtonClassName]),
            onClick: runSandpack,
            title: "Restart script",
            type: "button",
            children: [jsxRuntime.jsx(RestartIcon, {}), " ", jsxRuntime.jsx("span", {
              children: "Try again"
            })]
          })
        })]
      })
    }));
  }
  var stillLoading = loadingOverlayState === "LOADING" || loadingOverlayState === "PRE_FADING";
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs("div", __assign({
      className: classNames("overlay", [classNames("loading"), absoluteClassName, loadingClassName, className]),
      style: __assign(__assign({}, style), {
        opacity: stillLoading ? 1 : 0,
        transition: ("opacity ").concat(FADE_ANIMATION_DURATION, "ms ease-out")
      })
    }, props, {
      children: [shouldShowStdout && jsxRuntime.jsx("div", {
        className: stdoutPreview.toString(),
        children: jsxRuntime.jsx(StdoutList, {
          data: stdoutData
        })
      }), jsxRuntime.jsx(Loading, {
        showOpenInCodeSandbox: showOpenInCodeSandbox
      })]
    })), progressMessage && jsxRuntime.jsx("div", {
      className: progressClassName$1.toString(),
      children: jsxRuntime.jsx("p", {
        children: progressMessage
      })
    })]
  });
};
var stdoutPreview = fakeCss;
var progressClassName$1 = fakeCss;

var DependenciesProgress = function (_a) {
  var clientId = _a.clientId;
  var progressMessage = useSandpackPreviewProgress({
    timeout: 3000,
    clientId: clientId
  });
  if (!progressMessage) {
    return null;
  }
  return jsxRuntime.jsx("div", {
    className: progressClassName.toString(),
    children: jsxRuntime.jsx("p", {
      children: progressMessage
    })
  });
};
var progressClassName = fakeCss;

var explorerClassName = fakeCss;
var File = function (_a) {
  var selectFile = _a.selectFile, path = _a.path, active = _a.active, onClick = _a.onClick, depth = _a.depth, isDirOpen = _a.isDirOpen;
  var classNames = useClassNames();
  var onClickButton = function (event) {
    if (selectFile) {
      selectFile(path);
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
  };
  var fileName = path.split("/").filter(Boolean).pop();
  var getIcon = function () {
    if (selectFile) return jsxRuntime.jsx(FileIcon, {});
    return isDirOpen ? jsxRuntime.jsx(DirectoryIconOpen, {}) : jsxRuntime.jsx(DirectoryIconClosed, {});
  };
  return jsxRuntime.jsxs("button", {
    className: classNames("button", [classNames("explorer"), buttonClassName, explorerClassName]),
    "data-active": active,
    onClick: onClickButton,
    style: {
      paddingLeft: 18 * depth + "px"
    },
    title: fileName,
    type: "button",
    children: [getIcon(), jsxRuntime.jsx("span", {
      children: fileName
    })]
  });
};

var Directory = function (_a) {
  var prefixedPath = _a.prefixedPath, files = _a.files, selectFile = _a.selectFile, activeFile = _a.activeFile, depth = _a.depth, autoHiddenFiles = _a.autoHiddenFiles, visibleFiles = _a.visibleFiles, initialCollapsedFolder = _a.initialCollapsedFolder;
  var _b = React__namespace.useState(!(initialCollapsedFolder === null || initialCollapsedFolder === void 0 ? void 0 : initialCollapsedFolder.includes(prefixedPath))), open = _b[0], setOpen = _b[1];
  var toggle = function () {
    return setOpen(function (prev) {
      return !prev;
    });
  };
  return jsxRuntime.jsxs("div", {
    children: [jsxRuntime.jsx(File, {
      depth: depth,
      isDirOpen: open,
      onClick: toggle,
      path: prefixedPath + "/"
    }), open && jsxRuntime.jsx(ModuleList, {
      activeFile: activeFile,
      autoHiddenFiles: autoHiddenFiles,
      depth: depth + 1,
      files: files,
      initialCollapsedFolder: initialCollapsedFolder,
      prefixedPath: prefixedPath,
      selectFile: selectFile,
      visibleFiles: visibleFiles
    })]
  }, prefixedPath);
};

var fromPropsToModules = function (_a) {
  var autoHiddenFiles = _a.autoHiddenFiles, visibleFiles = _a.visibleFiles, files = _a.files, prefixedPath = _a.prefixedPath;
  var hasVisibleFilesOption = visibleFiles.length > 0;
  var filterByHiddenProperty = autoHiddenFiles && !hasVisibleFilesOption;
  var filterByVisibleFilesOption = autoHiddenFiles && !!hasVisibleFilesOption;
  var fileListWithoutPrefix = Object.keys(files).filter(function (filePath) {
    var _a;
    var isValidatedPath = filePath.startsWith(prefixedPath);
    if (filterByVisibleFilesOption) {
      return isValidatedPath && visibleFiles.includes(filePath);
    }
    if (filterByHiddenProperty) {
      return isValidatedPath && !((_a = files[filePath]) === null || _a === void 0 ? void 0 : _a.hidden);
    }
    return isValidatedPath;
  }).map(function (file) {
    return file.substring(prefixedPath.length);
  });
  var directories = new Set(fileListWithoutPrefix.filter(function (file) {
    return file.includes("/");
  }).map(function (file) {
    return ("").concat(prefixedPath).concat(file.split("/")[0], "/");
  }));
  var modules = fileListWithoutPrefix.filter(function (file) {
    return !file.includes("/");
  }).map(function (file) {
    return ("").concat(prefixedPath).concat(file);
  });
  return {
    directories: Array.from(directories),
    modules: modules
  };
};

var ModuleList = function (_a) {
  var _b = _a.depth, depth = _b === void 0 ? 0 : _b, activeFile = _a.activeFile, selectFile = _a.selectFile, prefixedPath = _a.prefixedPath, files = _a.files, autoHiddenFiles = _a.autoHiddenFiles, visibleFiles = _a.visibleFiles, initialCollapsedFolder = _a.initialCollapsedFolder;
  var _c = fromPropsToModules({
    visibleFiles: visibleFiles,
    autoHiddenFiles: autoHiddenFiles,
    prefixedPath: prefixedPath,
    files: files
  }), directories = _c.directories, modules = _c.modules;
  return jsxRuntime.jsxs("div", {
    children: [directories.map(function (dir) {
      return jsxRuntime.jsx(Directory, {
        activeFile: activeFile,
        autoHiddenFiles: autoHiddenFiles,
        depth: depth,
        files: files,
        initialCollapsedFolder: initialCollapsedFolder,
        prefixedPath: dir,
        selectFile: selectFile,
        visibleFiles: visibleFiles
      }, dir);
    }), modules.map(function (file) {
      return jsxRuntime.jsx(File, {
        active: activeFile === file,
        depth: depth,
        path: file,
        selectFile: selectFile
      }, file);
    })]
  });
};

var fileExplorerClassName = fakeCss;
var SandpackFileExplorer = function (_a) {
  var className = _a.className, _b = _a.autoHiddenFiles, autoHiddenFiles = _b === void 0 ? false : _b, _c = _a.initialCollapsedFolder, initialCollapsedFolder = _c === void 0 ? [] : _c, props = __rest(_a, ["className", "autoHiddenFiles", "initialCollapsedFolder"]);
  var _d = useSandpack(), _e = _d.sandpack, status = _e.status, updateFile = _e.updateFile, deleteFile = _e.deleteFile, activeFile = _e.activeFile, files = _e.files, openFile = _e.openFile, visibleFilesFromProps = _e.visibleFilesFromProps, listen = _d.listen;
  var classNames = useClassNames();
  React__namespace.useEffect(function watchFSFilesChanges() {
    if (status !== "running") return;
    var unsubscribe = listen(function (message) {
      if (message.type === "fs/change") {
        updateFile(message.path, message.content, false);
      }
      if (message.type === "fs/remove") {
        deleteFile(message.path, false);
      }
    });
    return unsubscribe;
  }, [status]);
  var orderedFiles = Object.keys(files).sort().reduce(function (obj, key) {
    obj[key] = files[key];
    return obj;
  }, {});
  return jsxRuntime.jsx("div", __assign({
    className: classNames("file-explorer", [stackClassName, className])
  }, props, {
    children: jsxRuntime.jsx("div", {
      className: classNames("file-explorer-list", [fileExplorerClassName]),
      children: jsxRuntime.jsx(ModuleList, {
        activeFile: activeFile,
        autoHiddenFiles: autoHiddenFiles,
        files: orderedFiles,
        initialCollapsedFolder: initialCollapsedFolder,
        prefixedPath: "/",
        selectFile: openFile,
        visibleFiles: visibleFilesFromProps
      })
    })
  }));
};

var splitUrl = function (url) {
  var match = url.match(/(https?:\/\/.*?)\//);
  if (match && match[1]) {
    return [match[1], url.replace(match[1], "")];
  }
  return [url, "/"];
};

var navigatorClassName = fakeCss;
var inputClassName = fakeCss;
var Navigator = function (_a) {
  var _b;
  var clientId = _a.clientId, onURLChange = _a.onURLChange, className = _a.className, startRoute = _a.startRoute, props = __rest(_a, ["clientId", "onURLChange", "className", "startRoute"]);
  var _c = React__namespace.useState(""), baseUrl = _c[0], setBaseUrl = _c[1];
  var _d = useSandpack(), sandpack = _d.sandpack, dispatch = _d.dispatch, listen = _d.listen;
  var _e = React__namespace.useState((_b = startRoute !== null && startRoute !== void 0 ? startRoute : sandpack.startRoute) !== null && _b !== void 0 ? _b : "/"), relativeUrl = _e[0], setRelativeUrl = _e[1];
  var _f = React__namespace.useState(false), backEnabled = _f[0], setBackEnabled = _f[1];
  var _g = React__namespace.useState(false), forwardEnabled = _g[0], setForwardEnabled = _g[1];
  var classNames = useClassNames();
  React__namespace.useEffect(function () {
    var unsub = listen(function (message) {
      if (message.type === "urlchange") {
        var url = message.url, back = message.back, forward = message.forward;
        var _a = splitUrl(url), newBaseUrl = _a[0], newRelativeUrl = _a[1];
        setBaseUrl(newBaseUrl);
        setRelativeUrl(newRelativeUrl);
        setBackEnabled(back);
        setForwardEnabled(forward);
      }
    }, clientId);
    return function () {
      return unsub();
    };
  }, []);
  var handleInputChange = function (e) {
    var path = e.target.value.startsWith("/") ? e.target.value : ("/").concat(e.target.value);
    setRelativeUrl(path);
  };
  var handleKeyDown = function (e) {
    if (e.code === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      if (typeof onURLChange === "function") {
        onURLChange(baseUrl + e.currentTarget.value);
      }
    }
  };
  var handleRefresh = function () {
    dispatch({
      type: "refresh"
    });
  };
  var handleBack = function () {
    dispatch({
      type: "urlback"
    });
  };
  var handleForward = function () {
    dispatch({
      type: "urlforward"
    });
  };
  var buttonsClassNames = classNames("button", [classNames("icon"), buttonClassName, iconClassName, fakeCss]);
  return jsxRuntime.jsxs("div", __assign({
    className: classNames("navigator", [navigatorClassName, className])
  }, props, {
    children: [jsxRuntime.jsx("button", {
      "aria-label": "Go back one page",
      className: buttonsClassNames,
      disabled: !backEnabled,
      onClick: handleBack,
      type: "button",
      children: jsxRuntime.jsx(BackwardIcon, {})
    }), jsxRuntime.jsx("button", {
      "aria-label": "Go forward one page",
      className: buttonsClassNames,
      disabled: !forwardEnabled,
      onClick: handleForward,
      type: "button",
      children: jsxRuntime.jsx(ForwardIcon, {})
    }), jsxRuntime.jsx("button", {
      "aria-label": "Refresh page",
      className: buttonsClassNames,
      onClick: handleRefresh,
      type: "button",
      children: jsxRuntime.jsx(RefreshIcon, {})
    }), jsxRuntime.jsx("input", {
      "aria-label": "Current Sandpack URL",
      className: classNames("input", [inputClassName]),
      name: "Current Sandpack URL",
      onChange: handleInputChange,
      onKeyDown: handleKeyDown,
      type: "text",
      value: relativeUrl
    })]
  }));
};

var previewClassName = fakeCss;
var previewIframe = fakeCss;
var previewActionsClassName$1 = fakeCss;
var SandpackPreview = React__namespace.forwardRef(function (_a, ref) {
  var _b = _a.showNavigator, showNavigator = _b === void 0 ? false : _b, _c = _a.showRefreshButton, showRefreshButton = _c === void 0 ? true : _c, _d = _a.showOpenInCodeSandbox, showOpenInCodeSandbox = _d === void 0 ? true : _d, _e = _a.showSandpackErrorOverlay, showSandpackErrorOverlay = _e === void 0 ? true : _e, _g = _a.showRestartButton, showRestartButton = _g === void 0 ? true : _g, _h = _a.actionsChildren, actionsChildren = _h === void 0 ? jsxRuntime.jsx(jsxRuntime.Fragment, {}) : _h, children = _a.children, className = _a.className, _j = _a.startRoute, startRoute = _j === void 0 ? "/" : _j, props = __rest(_a, ["showNavigator", "showRefreshButton", "showOpenInCodeSandbox", "showSandpackErrorOverlay", "showOpenNewtab", "showRestartButton", "actionsChildren", "children", "className", "startRoute"]);
  var _k = useSandpackClient({
    startRoute: startRoute
  }), sandpack = _k.sandpack, listen = _k.listen, iframe = _k.iframe, getClient = _k.getClient, clientId = _k.clientId, dispatch = _k.dispatch;
  var _l = React__namespace.useState(null), iframeComputedHeight = _l[0], setComputedAutoHeight = _l[1];
  var status = sandpack.status;
  var refresh = useSandpackNavigation(clientId).refresh;
  var restart = useSandpackShell(clientId).restart;
  var classNames = useClassNames();
  React__namespace.useEffect(function () {
    var unsubscribe = listen(function (message) {
      if (message.type === "resize") {
        setComputedAutoHeight(message.height);
      }
    });
    return unsubscribe;
  }, []);
  React__namespace.useImperativeHandle(ref, function () {
    return {
      clientId: clientId,
      getClient: getClient
    };
  }, [getClient, clientId]);
  var handleNewURL = function (newUrl) {
    if (!iframe.current) {
      return;
    }
    iframe.current.src = newUrl;
  };
  return jsxRuntime.jsxs(SandpackStack, __assign({
    className: classNames("preview", [className])
  }, props, {
    children: [showNavigator && jsxRuntime.jsx(Navigator, {
      clientId: clientId,
      onURLChange: handleNewURL,
      startRoute: startRoute
    }), jsxRuntime.jsxs("div", {
      className: classNames("preview-container", [previewClassName]),
      children: [jsxRuntime.jsx("iframe", {
        ref: iframe,
        className: classNames("preview-iframe", [previewIframe]),
        style: {
          height: iframeComputedHeight ? iframeComputedHeight : undefined
        },
        title: "Sandpack Preview"
      }), jsxRuntime.jsxs("div", {
        className: classNames("preview-actions", [previewActionsClassName$1]),
        children: [actionsChildren, showRestartButton && sandpack.environment === "node" && jsxRuntime.jsx(RoundedButton, {
          onClick: restart,
          children: jsxRuntime.jsx(RestartIcon, {})
        }), !showNavigator && showRefreshButton && status === "running" && jsxRuntime.jsx(RoundedButton, {
          onClick: refresh,
          children: jsxRuntime.jsx(RefreshIcon, {})
        }), sandpack.teamId && jsxRuntime.jsx("button", {
          className: classNames("button", [classNames("icon-standalone"), buttonClassName, iconStandaloneClassName, roundedButtonClassName]),
          onClick: function () {
            return dispatch({
              type: "sign-out"
            });
          },
          title: "Sign out",
          type: "button",
          children: jsxRuntime.jsx(SignOutIcon, {})
        }), showOpenInCodeSandbox && jsxRuntime.jsx(OpenInCodeSandboxButton, {})]
      }), jsxRuntime.jsx(LoadingOverlay, {
        clientId: clientId,
        showOpenInCodeSandbox: showOpenInCodeSandbox
      }), showSandpackErrorOverlay && jsxRuntime.jsx(ErrorOverlay, {}), children]
    })]
  }));
});

var transpiledCodeClassName = fakeCss;
var SandpackTranspiledCode = function (_a) {
  var className = _a.className, props = __rest(_a, ["className"]);
  var sandpack = useSandpack().sandpack;
  var transpiledCode = useTranspiledCode();
  var classNames = useClassNames();
  var hiddenIframeRef = React__namespace.useRef(null);
  React__namespace.useEffect(function () {
    var hiddenIframe = hiddenIframeRef.current;
    if (hiddenIframe) {
      sandpack.registerBundler(hiddenIframe, "hidden");
    }
    return function () {
      sandpack.unregisterBundler("hidden");
    };
  }, []);
  return jsxRuntime.jsxs("div", __assign({
    className: classNames("transpiled-code", [stackClassName, transpiledCodeClassName, className])
  }, props, {
    children: [jsxRuntime.jsx(SandpackCodeViewer, __assign({
      code: transpiledCode !== null && transpiledCode !== void 0 ? transpiledCode : "",
      initMode: sandpack.initMode
    }, props)), jsxRuntime.jsx("iframe", {
      ref: hiddenIframeRef,
      style: {
        display: "none"
      },
      title: "transpiled sandpack code"
    }), jsxRuntime.jsx(ErrorOverlay, {}), jsxRuntime.jsx(LoadingOverlay, {
      clientId: "hidden",
      showOpenInCodeSandbox: false
    })]
  }));
};

var wrapperClassName$1 = fakeCss;
var flexClassName$1 = fakeCss;
var Header$1 = function (_a) {
  var status = _a.status, suiteOnly = _a.suiteOnly, setSuiteOnly = _a.setSuiteOnly, setVerbose = _a.setVerbose, verbose = _a.verbose, watchMode = _a.watchMode, setWatchMode = _a.setWatchMode, showSuitesOnly = _a.showSuitesOnly, showWatchButton = _a.showWatchButton, showVerboseButton = _a.showVerboseButton, hideTestsAndSupressLogs = _a.hideTestsAndSupressLogs;
  var classNames = useClassNames();
  var buttonsClassName = classNames("test-header-button", [buttonClassName, roundedButtonClassName, fakeCss]);
  return jsxRuntime.jsxs("div", {
    className: classNames("test-header", [wrapperClassName$1, flexClassName$1]),
    children: [jsxRuntime.jsx("div", {
      className: classNames("test-header-wrapper", [flexClassName$1]),
      children: jsxRuntime.jsxs("p", {
        className: classNames("test-header-title", [fakeCss]),
        children: [jsxRuntime.jsx(ConsoleIcon, {}), "Tests"]
      })
    }), jsxRuntime.jsxs("div", {
      className: classNames("test-header-actions", [flexClassName$1]),
      children: [showSuitesOnly && jsxRuntime.jsx("button", {
        className: buttonsClassName,
        "data-active": suiteOnly,
        disabled: status === "initialising",
        onClick: setSuiteOnly,
        type: "button",
        children: "Suite only"
      }), showVerboseButton && jsxRuntime.jsx("button", {
        className: buttonsClassName,
        "data-active": verbose,
        disabled: status === "initialising" || hideTestsAndSupressLogs,
        onClick: setVerbose,
        type: "button",
        children: "Verbose"
      }), showWatchButton && jsxRuntime.jsx("button", {
        className: buttonsClassName,
        "data-active": watchMode,
        disabled: status === "initialising",
        onClick: setWatchMode,
        type: "button",
        children: "Watch"
      })]
    })]
  });
};

var RunButton = function (_a) {
  var onClick = _a.onClick;
  return jsxRuntime.jsx(RoundedButton, {
    onClick: onClick,
    title: "Run tests",
    children: jsxRuntime.jsx(RunIcon, {})
  });
};

var setTestTheme = function (isDark) {
  return {
    "--test-pass": isDark ? "#18df16" : "#15c213",
    "--test-fail": isDark ? "#df162b" : "#c21325",
    "--test-skip": isDark ? "#eace2b" : "#c2a813",
    "--test-run": isDark ? "#eace2b" : "#c2a813",
    "--test-title": isDark ? "#3fbabe" : "#256c6f"
  };
};
var color = fakeCss;
var passTextClassName = color();
var failTextClassName = color();
var skipTextClassName = color();
var titleTextClassName = color();
var background = fakeCss;
var runBackgroundClassName = background();
var passBackgroundClassName = background();
var failBackgroundClassName = background();

var testContainerClassName = fakeCss;
var containerClassName$4 = fakeCss;
var testClassName = fakeCss;
var durationClassName = fakeCss;
var gapRightClassName = fakeCss;
var Tests = function (_a) {
  var tests = _a.tests;
  var classNames = useClassNames();
  return jsxRuntime.jsx("div", {
    className: classNames("test", [testContainerClassName]),
    children: tests.map(function (test) {
      return jsxRuntime.jsxs("div", {
        className: classNames("test-result", [containerClassName$4]),
        children: [test.status === "pass" && jsxRuntime.jsx("span", {
          className: classNames("test-pass-text", [passTextClassName, gapRightClassName]),
          children: "\u2713"
        }), test.status === "fail" && jsxRuntime.jsx("span", {
          className: classNames("test-fail-text", [failTextClassName, gapRightClassName]),
          children: "\u2715"
        }), test.status === "idle" && jsxRuntime.jsx("span", {
          className: classNames("test-idle-text", [skipTextClassName, gapRightClassName]),
          children: "\u25CB"
        }), jsxRuntime.jsx("span", {
          className: classNames("test-name-text", [testClassName]),
          children: test.name
        }), test.duration !== undefined && jsxRuntime.jsxs("span", {
          className: classNames("test-duration-text", [durationClassName]),
          children: ["(", test.duration, " ms)"]
        })]
      }, test.name);
    })
  });
};

var getTests = function (block) {
  var _a;
  var _b, _c;
  return (_a = Object.values((_b = block.tests) !== null && _b !== void 0 ? _b : {})).concat.apply(_a, Object.values((_c = block.describes) !== null && _c !== void 0 ? _c : {}).map(getTests));
};
var getFailingTests = function (block) {
  return getTests(block).filter(function (t) {
    return t.status === "fail";
  });
};
var getAllTestResults = function (specs) {
  return specs.map(getSpecTestResults).reduce(function (acc, stats) {
    return {
      pass: acc.pass + stats.pass,
      fail: acc.fail + stats.fail,
      skip: acc.skip + stats.skip,
      total: acc.total + stats.total
    };
  }, {
    pass: 0,
    skip: 0,
    fail: 0,
    total: 0
  });
};
var getSpecTestResults = function (spec) {
  return getTests(spec).reduce(function (acc, test) {
    return {
      pass: test.status === "pass" ? acc.pass + 1 : acc.pass,
      fail: test.status === "fail" ? acc.fail + 1 : acc.fail,
      skip: test.status === "idle" || test.status === "running" ? acc.skip + 1 : acc.skip,
      total: acc.total + 1
    };
  }, {
    pass: 0,
    fail: 0,
    skip: 0,
    total: 0
  });
};
var getAllSuiteResults = function (specs) {
  return specs.filter(function (spec) {
    var _a, _b;
    return Object.values((_a = spec.describes) !== null && _a !== void 0 ? _a : {}).length > 0 || Object.values((_b = spec.tests) !== null && _b !== void 0 ? _b : {}).length > 0;
  }).map(getSpecTestResults).reduce(function (acc, stats) {
    return {
      pass: acc.pass + (stats.fail === 0 ? 1 : 0),
      fail: acc.fail + (stats.fail > 0 ? 1 : 0),
      total: acc.total + 1
    };
  }, {
    pass: 0,
    fail: 0,
    total: 0
  });
};
var getDuration = function (specs) {
  return flatMap(specs, getTests).reduce(function (acc, test) {
    return acc + (test.duration || 0);
  }, 0);
};
var isEmpty = function (block) {
  var _a, _b;
  return Object.values((_a = block.describes) !== null && _a !== void 0 ? _a : {}).length === 0 && Object.values((_b = block.tests) !== null && _b !== void 0 ? _b : {}).length === 0;
};
var splitTail = function (as) {
  var lastIndex = as.length - 1;
  var head = as.slice(0, lastIndex);
  var tail = as[lastIndex];
  return [head, tail];
};
var flatMap = function (as, f) {
  return as.map(f).reduce(function (acc, next) {
    return acc.concat(next);
  }, []);
};
var set = function (path, value) {
  return function (object) {
    return cleanSet__default.default(object, path, value);
  };
};

var nameClassName = fakeCss;
var containerClassName$3 = fakeCss;
var Describes = function (_a) {
  var describes = _a.describes;
  var classNames = useClassNames();
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: describes.map(function (describe) {
      var _a, _b;
      if (isEmpty(describe)) {
        return null;
      }
      var tests = Object.values((_a = describe.tests) !== null && _a !== void 0 ? _a : {});
      var describes = Object.values((_b = describe.describes) !== null && _b !== void 0 ? _b : {});
      return jsxRuntime.jsxs("div", {
        className: classNames("test-describe", [containerClassName$3]),
        children: [jsxRuntime.jsx("div", {
          className: classNames("test-name", [nameClassName]),
          children: describe.name
        }), jsxRuntime.jsx(Tests, {
          tests: tests
        }), jsxRuntime.jsx(Describes, {
          describes: describes
        })]
      }, describe.name);
    })
  });
};

var containerClassName$2 = fakeCss;
var FormattedError = function (_a) {
  var error = _a.error, path = _a.path;
  var classNames = useClassNames();
  return jsxRuntime.jsx("div", {
    className: classNames("test-error", [containerClassName$2]),
    dangerouslySetInnerHTML: {
      __html: formatDiffMessage(error, path)
    }
  });
};
var escapeHtml = function (unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
};
var formatDiffMessage = function (error, path) {
  var _a, _b;
  var finalMessage = "";
  if (error.matcherResult) {
    finalMessage = ("<span>").concat(escapeHtml((_a = error.message) !== null && _a !== void 0 ? _a : "").replace(/(expected)/m, ("<span class=\"").concat(passTextClassName, "\">$1</span>")).replace(/(received)/m, ("<span class=\"").concat(failTextClassName, "\">$1</span>")).replace(/(Difference:)/m, "<span>$1</span>").replace(/(Expected:)(.*)/m, ("<span>$1</span><span class=\"").concat(passTextClassName, "\">$2</span>")).replace(/(Received:)(.*)/m, ("<span>$1</span><span class=\"").concat(failTextClassName, "\">$2</span>")).replace(/^(-.*)/gm, ("<span class=\"").concat(failTextClassName, "\">$1</span>")).replace(/^(\+.*)/gm, ("<span class=\"").concat(passTextClassName, "\">$1</span>")), "</span>");
  } else {
    finalMessage = escapeHtml((_b = error.message) !== null && _b !== void 0 ? _b : "");
  }
  if (error.mappedErrors && error.mappedErrors[0] && error.mappedErrors[0].fileName.endsWith(path) && error.mappedErrors[0]._originalScriptCode) {
    var mappedError = error.mappedErrors[0];
    var _originalScriptCode = mappedError._originalScriptCode || [];
    var widestNumber_1 = Math.max.apply(Math, _originalScriptCode.map(function (code) {
      return (code.lineNumber + "").length;
    })) + 2;
    var margin_1 = Array.from({
      length: widestNumber_1
    }).map(function () {
      return " ";
    });
    finalMessage += "<br />";
    finalMessage += "<br />";
    finalMessage += "<div>";
    _originalScriptCode.filter(function (s) {
      return s.content.trim();
    }).forEach(function (code) {
      var currentLineMargin = (code.lineNumber + "").length;
      var newMargin = __spreadArray([], margin_1, true);
      newMargin.length -= currentLineMargin;
      if (code.highlight) {
        newMargin.length -= 2;
      }
      var toBeIndex = code.content.indexOf(".to");
      var toBeMargin = Array.from({
        length: margin_1.length + toBeIndex - (widestNumber_1 - 1)
      }, function () {
        return " ";
      });
      var content = escapeHtml(code.content).replace(/(describe|test|it)(\()(&#039;|&quot;|`)(.*)(&#039;|&quot;|`)/m, ("<span>$1$2$3</span><span class=\"").concat(titleTextClassName, "\">$4</span><span>$5</span>")).replace(/(expect\()(.*)(\)\..*)(to[\w\d]*)(\()(.*)(\))/m, ("<span>$1</span><span class=\"").concat(failTextClassName, "\">$2</span><span>$3</span><span style=\"text-decoration: underline; font-weight: 900\">$4</span><span>$5</span><span class=\"").concat(passTextClassName, "\">$6</span><span>$7</span>"));
      finalMessage += ("<div ").concat(code.highlight ? "style=\"font-weight:200;\"" : "", ">") + (code.highlight ? ("<span class=\"").concat(failTextClassName, "\">></span> ") : "") + newMargin.join("") + escapeHtml("" + code.lineNumber) + " | " + content + "</div>" + (code.highlight ? "<div>" + margin_1.join("") + " | " + toBeMargin.join("") + ("<span class=\"").concat(failTextClassName, "\">^</span>") + "</div>" : "");
    });
    finalMessage += "</div>";
  }
  return finalMessage.replace(/(?:\r\n|\r|\n)/g, "<br />");
};

var fileContainer = fakeCss;
var gapBottomClassName$1 = fakeCss;
var failTestClassName = fakeCss;
var labelClassName$1 = fakeCss;
var specLabelClassName = fakeCss;
var filePathButtonClassName = fakeCss;
var filePathClassName = fakeCss;
var fileNameClassName = fakeCss;
var Specs = function (_a) {
  var specs = _a.specs, openSpec = _a.openSpec, status = _a.status, verbose = _a.verbose, hideTestsAndSupressLogs = _a.hideTestsAndSupressLogs;
  var classNames = useClassNames();
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: specs.map(function (spec) {
      if (spec.error) {
        return jsxRuntime.jsxs("div", {
          className: classNames("test-spec", [gapBottomClassName$1]),
          children: [jsxRuntime.jsx(SpecLabel, {
            className: classNames("test-spec-error", [labelClassName$1, failBackgroundClassName]),
            children: "Error"
          }), jsxRuntime.jsx(FilePath, {
            onClick: function () {
              return openSpec(spec.name);
            },
            path: spec.name
          }), jsxRuntime.jsx(FormattedError, {
            error: spec.error,
            path: spec.name
          })]
        }, spec.name);
      }
      if (isEmpty(spec)) {
        return null;
      }
      var tests = Object.values(spec.tests);
      var describes = Object.values(spec.describes);
      var stats = getSpecTestResults(spec);
      return jsxRuntime.jsxs("div", {
        className: classNames("test-spec-name", [gapBottomClassName$1]),
        children: [jsxRuntime.jsxs("div", {
          className: classNames("test-spec-name-container", [fileContainer]),
          children: [status === "complete" ? stats.fail > 0 ? jsxRuntime.jsx(SpecLabel, {
            className: classNames("test-spec-complete", [labelClassName$1, failBackgroundClassName]),
            children: "Fail"
          }) : jsxRuntime.jsx(SpecLabel, {
            className: classNames("test-spec-pass", [labelClassName$1, passBackgroundClassName]),
            children: "Pass"
          }) : jsxRuntime.jsx(SpecLabel, {
            className: classNames("test-spec-run", [labelClassName$1, runBackgroundClassName]),
            children: "Run"
          }), jsxRuntime.jsx(FilePath, {
            onClick: function () {
              if (!hideTestsAndSupressLogs) {
                openSpec(spec.name);
              }
            },
            path: spec.name
          })]
        }), verbose && !hideTestsAndSupressLogs && jsxRuntime.jsx(Tests, {
          tests: tests
        }), verbose && !hideTestsAndSupressLogs && jsxRuntime.jsx(Describes, {
          describes: describes
        }), !hideTestsAndSupressLogs && getFailingTests(spec).map(function (test) {
          return jsxRuntime.jsxs("div", {
            className: classNames("test-spec-error", [gapBottomClassName$1]),
            children: [jsxRuntime.jsxs("div", {
              className: classNames("test-spec-error-text", [failTestClassName, failTextClassName]),
              children: ["\u25CF ", test.blocks.join(" › "), " \u203A ", test.name]
            }), test.errors.map(function (e) {
              return jsxRuntime.jsx(FormattedError, {
                error: e,
                path: test.path
              }, ("failing-").concat(test.name, "-error"));
            })]
          }, ("failing-").concat(test.name));
        })]
      }, spec.name);
    })
  });
};
var SpecLabel = function (_a) {
  var children = _a.children, className = _a.className;
  var classNames = useClassNames();
  return jsxRuntime.jsx("span", {
    className: classNames("test-spec-label", [specLabelClassName, className]),
    children: children
  });
};
var FilePath = function (_a) {
  var onClick = _a.onClick, path = _a.path;
  var parts = path.split("/");
  var basePath = parts.slice(0, parts.length - 1).join("/") + "/";
  var fileName = parts[parts.length - 1];
  var classNames = useClassNames();
  return jsxRuntime.jsxs("button", {
    className: classNames("test-filename", [buttonClassName, filePathButtonClassName]),
    onClick: onClick,
    type: "button",
    children: [jsxRuntime.jsx("span", {
      className: classNames("test-filename-base", [filePathClassName]),
      children: basePath
    }), jsxRuntime.jsx("span", {
      className: classNames("test-filename-file", [fileNameClassName]),
      children: fileName
    })]
  });
};

var gapBottomClassName = fakeCss;
var labelClassName = fakeCss;
var containerClassName$1 = fakeCss;
var Summary = function (_a) {
  var suites = _a.suites, tests = _a.tests, duration = _a.duration;
  var widestLabel = "Test suites: ";
  var withMargin = function (label) {
    var difference = widestLabel.length - label.length;
    var margin = Array.from({
      length: difference
    }, function () {
      return " ";
    }).join("");
    return label + margin;
  };
  var classNames = useClassNames();
  return jsxRuntime.jsxs("div", {
    className: classNames("test-summary", [containerClassName$1]),
    children: [jsxRuntime.jsxs("div", {
      className: classNames("test-summary", [gapBottomClassName]),
      children: [jsxRuntime.jsx("span", {
        className: classNames("test-summary-suites-label", [labelClassName]),
        children: widestLabel
      }), suites.fail > 0 && jsxRuntime.jsxs("span", {
        className: classNames("test-summary-suites-fail", [failTextClassName]),
        children: [suites.fail, " failed,", " "]
      }), suites.pass > 0 && jsxRuntime.jsxs("span", {
        className: classNames("test-summary-suites-pass", [passTextClassName]),
        children: [suites.pass, " passed,", " "]
      }), jsxRuntime.jsxs("span", {
        children: [suites.total, " total"]
      })]
    }), jsxRuntime.jsxs("div", {
      className: classNames("test-summary", [gapBottomClassName]),
      children: [jsxRuntime.jsx("span", {
        className: classNames("test-summary-label", [labelClassName]),
        children: withMargin("Tests:")
      }), tests.fail > 0 && jsxRuntime.jsxs("span", {
        className: classNames("test-summary-fail", [failTextClassName]),
        children: [tests.fail, " failed,", " "]
      }), tests.skip > 0 && jsxRuntime.jsxs("span", {
        className: classNames("test-summary-skip", [skipTextClassName]),
        children: [tests.skip, " skipped,", " "]
      }), tests.pass > 0 && jsxRuntime.jsxs("span", {
        className: classNames("test-summary-pass", [passTextClassName]),
        children: [tests.pass, " passed,", " "]
      }), jsxRuntime.jsxs("span", {
        children: [tests.total, " total"]
      })]
    }), jsxRuntime.jsxs("div", {
      className: classNames("test-summary-curation", [labelClassName]),
      children: [withMargin("Time:"), duration / 1000, "s"]
    })]
  });
};

var previewActionsClassName = fakeCss;
var INITIAL_STATE = {
  specs: {},
  status: "initialising",
  verbose: false,
  watchMode: true,
  suiteOnly: false,
  specsCount: 0
};
var SandpackTests = function (_a) {
  var _b = _a.verbose, verbose = _b === void 0 ? false : _b, _c = _a.watchMode, watchMode = _c === void 0 ? true : _c, style = _a.style, className = _a.className, onComplete = _a.onComplete, actionsChildren = _a.actionsChildren, _d = _a.showVerboseButton, showVerboseButton = _d === void 0 ? true : _d, _e = _a.showWatchButton, showWatchButton = _e === void 0 ? true : _e, _f = _a.hideTestsAndSupressLogs, hideTestsAndSupressLogs = _f === void 0 ? false : _f, props = __rest(_a, ["verbose", "watchMode", "style", "className", "onComplete", "actionsChildren", "showVerboseButton", "showWatchButton", "hideTestsAndSupressLogs"]);
  var theme = useSandpackTheme();
  var _g = useSandpackClient(), getClient = _g.getClient, iframe = _g.iframe, listen = _g.listen, sandpack = _g.sandpack;
  var _h = React__namespace.useState(__assign(__assign({}, INITIAL_STATE), {
    verbose: verbose,
    watchMode: watchMode
  })), state = _h[0], setState = _h[1];
  var runAllTests = React__namespace.useCallback(function () {
    setState(function (oldState) {
      return __assign(__assign({}, oldState), {
        status: "running",
        specs: {}
      });
    });
    var client = getClient();
    if (client) {
      client.dispatch({
        type: "run-all-tests"
      });
    }
  }, [getClient]);
  var runSpec = React__namespace.useCallback(function () {
    setState(function (oldState) {
      return __assign(__assign({}, oldState), {
        status: "running",
        specs: {}
      });
    });
    var client = getClient();
    if (client) {
      client.dispatch({
        type: "run-tests",
        path: sandpack.activeFile
      });
    }
  }, [getClient, sandpack.activeFile]);
  var testFileRegex = /.*\.(test|spec)\.[tj]sx?$/;
  var isSpecOpen = sandpack.activeFile.match(testFileRegex) !== null;
  React__namespace.useEffect(function () {
    var currentDescribeBlocks = [];
    var currentSpec = "";
    var unsubscribe = listen(function (data) {
      if (state.suiteOnly && (("path" in data) && data.path !== sandpack.activeFile || ("test" in data) && ("path" in data.test) && data.test.path !== sandpack.activeFile)) {
        return;
      }
      if (data.type === "action" && data.action === "clear-errors" && data.source === "jest") {
        currentSpec = data.path;
        return;
      }
      if (data.type === "test") {
        if (data.event === "initialize_tests") {
          currentDescribeBlocks = [];
          currentSpec = "";
          if (state.watchMode) {
            return runAllTests();
          } else {
            return setState(function (oldState) {
              return __assign(__assign({}, oldState), {
                status: "idle",
                specs: {}
              });
            });
          }
        }
        if (data.event === "test_count") {
          return setState(function (oldState) {
            return __assign(__assign({}, oldState), {
              specsCount: data.count
            });
          });
        }
        if (data.event === "total_test_start") {
          currentDescribeBlocks = [];
          return setState(function (oldState) {
            return __assign(__assign({}, oldState), {
              status: "running"
            });
          });
        }
        if (data.event === "total_test_end") {
          return setState(function (oldState) {
            if (onComplete !== undefined) {
              onComplete(oldState.specs);
            }
            return __assign(__assign({}, oldState), {
              status: "complete"
            });
          });
        }
        if (data.event === "add_file") {
          return setState(set(["specs", data.path], {
            describes: {},
            tests: {},
            name: data.path
          }));
        }
        if (data.event === "remove_file") {
          return setState(function (oldState) {
            var specs = Object.entries(oldState.specs).reduce(function (acc, _a) {
              var _b;
              var key = _a[0], value = _a[1];
              if (key === data.path) {
                return acc;
              } else {
                return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
              }
            }, {});
            return __assign(__assign({}, oldState), {
              specs: specs
            });
          });
        }
        if (data.event === "file_error") {
          return setState(set(["specs", data.path, "error"], data.error));
        }
        if (data.event === "describe_start") {
          currentDescribeBlocks.push(data.blockName);
          var _a = splitTail(currentDescribeBlocks), describePath = _a[0], currentDescribe = _a[1];
          var spec = currentSpec;
          if (currentDescribe === undefined) {
            return;
          }
          return setState(set(__spreadArray(__spreadArray(["specs", spec, "describes"], flatMap(describePath, function (name) {
            return [name, "describes"];
          }), true), [currentDescribe], false), {
            name: data.blockName,
            tests: {},
            describes: {}
          }));
        }
        if (data.event === "describe_end") {
          currentDescribeBlocks.pop();
          return;
        }
        if (data.event === "add_test") {
          var _b = splitTail(currentDescribeBlocks), describePath = _b[0], currentDescribe = _b[1];
          var test_1 = {
            status: "idle",
            errors: [],
            name: data.testName,
            blocks: __spreadArray([], currentDescribeBlocks, true),
            path: data.path
          };
          if (currentDescribe === undefined) {
            return setState(set(["specs", data.path, "tests", data.testName], test_1));
          } else {
            return setState(set(__spreadArray(__spreadArray(["specs", data.path, "describes"], flatMap(describePath, function (name) {
              return [name, "describes"];
            }), true), [currentDescribe, "tests", data.testName], false), test_1));
          }
        }
        if (data.event === "test_start") {
          var test_2 = data.test;
          var _c = splitTail(test_2.blocks), describePath = _c[0], currentDescribe = _c[1];
          var startedTest = {
            status: "running",
            name: test_2.name,
            blocks: test_2.blocks,
            path: test_2.path,
            errors: []
          };
          if (currentDescribe === undefined) {
            return setState(set(["specs", test_2.path, "tests", test_2.name], startedTest));
          } else {
            return setState(set(__spreadArray(__spreadArray(["specs", test_2.path, "describes"], flatMap(describePath, function (name) {
              return [name, "describes"];
            }), true), [currentDescribe, "tests", test_2.name], false), startedTest));
          }
        }
        if (data.event === "test_end") {
          var test_3 = data.test;
          var _d = splitTail(test_3.blocks), describePath = _d[0], currentDescribe = _d[1];
          var endedTest = {
            status: test_3.status,
            errors: test_3.errors,
            duration: test_3.duration,
            name: test_3.name,
            blocks: test_3.blocks,
            path: test_3.path
          };
          if (currentDescribe === undefined) {
            return setState(set(["specs", test_3.path, "tests", test_3.name], endedTest));
          } else {
            return setState(set(__spreadArray(__spreadArray(["specs", test_3.path, "describes"], flatMap(describePath, function (name) {
              return [name, "describes"];
            }), true), [currentDescribe, "tests", test_3.name], false), endedTest));
          }
        }
      }
    });
    return unsubscribe;
  }, [state.suiteOnly, state.watchMode, sandpack.activeFile]);
  React__namespace.useEffect(function watchMode() {
    var unsunscribe = listen(function (_a) {
      var type = _a.type;
      if (type === "done" && state.watchMode) {
        if (isSpecOpen) {
          runSpec();
        } else {
          runAllTests();
        }
      }
    });
    return unsunscribe;
  }, [runSpec, runAllTests, state.watchMode, isSpecOpen]);
  var openSpec = function (file) {
    sandpack.setActiveFile(file);
  };
  var specs = Object.values(state.specs);
  var duration = getDuration(specs);
  var testResults = getAllTestResults(specs);
  var suiteResults = getAllSuiteResults(specs);
  var classNames = useClassNames();
  return jsxRuntime.jsxs(SandpackStack, __assign({
    className: classNames("tests", [className]),
    style: __assign(__assign({}, setTestTheme(theme.themeMode === "dark")), style)
  }, props, {
    children: [jsxRuntime.jsx("iframe", {
      ref: iframe,
      style: {
        display: "none"
      },
      title: "Sandpack Tests"
    }), jsxRuntime.jsx(Header$1, {
      hideTestsAndSupressLogs: hideTestsAndSupressLogs,
      setSuiteOnly: function () {
        return setState(function (s) {
          return __assign(__assign({}, s), {
            suiteOnly: !s.suiteOnly
          });
        });
      },
      setVerbose: function () {
        return setState(function (s) {
          return __assign(__assign({}, s), {
            verbose: !s.verbose
          });
        });
      },
      setWatchMode: function () {
        setState(function (s) {
          return __assign(__assign({}, s), {
            watchMode: !s.watchMode
          });
        });
      },
      showSuitesOnly: state.specsCount > 1,
      showVerboseButton: showVerboseButton,
      showWatchButton: showWatchButton,
      status: state.status,
      suiteOnly: state.suiteOnly,
      verbose: state.verbose,
      watchMode: state.watchMode
    }), state.status === "running" || state.status === "initialising" ? jsxRuntime.jsx(Loading, {
      showOpenInCodeSandbox: false
    }) : jsxRuntime.jsxs("div", {
      className: previewActionsClassName.toString(),
      children: [actionsChildren, jsxRuntime.jsx(RunButton, {
        onClick: state.suiteOnly ? runSpec : runAllTests
      })]
    }), jsxRuntime.jsx("div", {
      className: containerClassName.toString(),
      children: specs.length === 0 && state.status === "complete" ? jsxRuntime.jsxs("div", {
        className: fileErrorContainerClassName.toString(),
        children: [jsxRuntime.jsx("p", {
          children: "No test files found."
        }), jsxRuntime.jsxs("p", {
          children: ["Test match:", " ", jsxRuntime.jsx("span", {
            className: failTextClassName.toString(),
            children: testFileRegex.toString()
          })]
        })]
      }) : jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsx(Specs, {
          hideTestsAndSupressLogs: hideTestsAndSupressLogs,
          openSpec: openSpec,
          specs: specs,
          status: state.status,
          verbose: state.verbose
        }), state.status === "complete" && testResults.total > 0 && jsxRuntime.jsx(Summary, {
          duration: duration,
          suites: suiteResults,
          tests: testResults
        })]
      })
    })]
  }));
};
var containerClassName = fakeCss;
var fileErrorContainerClassName = fakeCss;

var SYNTAX_ERROR_PATTERN = ["SyntaxError: ", "Error in sandbox:"];
var CLEAR_LOG = {
  id: "random",
  method: "clear",
  data: ["Console was cleared"]
};
var TRANSFORMED_TYPE_KEY = "@t";
var TRANSFORMED_TYPE_KEY_ALTERNATE = "#@t";
var CIRCULAR_REF_KEY = "@r";
var MAX_LENGTH_STRING = 10000;
var MAX_NEST_LEVEL = 2;
var MAX_KEYS = 400;
var MAX_MESSAGE_COUNT = MAX_KEYS * 2;

var GLOBAL = (function getGlobal() {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  if (typeof self !== "undefined") return self;
  throw Error("Unable to locate global object");
})();
var ARRAY_BUFFER_SUPPORTED = typeof ArrayBuffer === "function";
var MAP_SUPPORTED = typeof Map === "function";
var SET_SUPPORTED = typeof Set === "function";
var Arithmetic;
(function (Arithmetic) {
  Arithmetic[Arithmetic["infinity"] = 0] = "infinity";
  Arithmetic[Arithmetic["minusInfinity"] = 1] = "minusInfinity";
  Arithmetic[Arithmetic["minusZero"] = 2] = "minusZero";
})(Arithmetic || (Arithmetic = {}));
var transformers = {
  Arithmetic: function (data) {
    if (data === Arithmetic.infinity) return Infinity;
    if (data === Arithmetic.minusInfinity) return -Infinity;
    if (data === Arithmetic.minusZero) return -0;
    return data;
  },
  HTMLElement: function (data) {
    var sandbox = document.implementation.createHTMLDocument("sandbox");
    try {
      var element = sandbox.createElement(data.tagName);
      element.innerHTML = data.innerHTML;
      for (var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++) {
        var attribute = _a[_i];
        try {
          element.setAttribute(attribute, data.attributes[attribute]);
        } catch (_b) {}
      }
      return element;
    } catch (e) {
      return data;
    }
  },
  Function: function (data) {
    var tempFun = function () {};
    Object.defineProperty(tempFun, "toString", {
      value: function () {
        return ("function ").concat(data.name, "() {").concat(data.body, "}");
      }
    });
    return tempFun;
  },
  "[[NaN]]": function () {
    return NaN;
  },
  "[[undefined]]": function () {
    return void 0;
  },
  "[[Date]]": function (val) {
    var date = new Date();
    date.setTime(val);
    return date;
  },
  "[[RegExp]]": function (val) {
    return new RegExp(val.src, val.flags);
  },
  "[[Error]]": function (val) {
    var Ctor = GLOBAL[val.name] || Error;
    var err = new Ctor(val.message);
    err.stack = val.stack;
    return err;
  },
  "[[ArrayBuffer]]": function (val) {
    if (ARRAY_BUFFER_SUPPORTED) {
      var buffer = new ArrayBuffer(val.length);
      var view = new Int8Array(buffer);
      view.set(val);
      return buffer;
    }
    return val;
  },
  "[[TypedArray]]": function (val) {
    return typeof GLOBAL[val.ctorName] === "function" ? new GLOBAL[val.ctorName](val.arr) : val.arr;
  },
  "[[Map]]": function (val) {
    if (MAP_SUPPORTED) {
      var map = new Map();
      for (var i = 0; i < val.length; i += 2) map.set(val[i], val[i + 1]);
      return map;
    }
    var kvArr = [];
    for (var j = 0; j < val.length; j += 2) kvArr.push([val[i], val[i + 1]]);
    return kvArr;
  },
  "[[Set]]": function (val) {
    if (SET_SUPPORTED) {
      var set = new Set();
      for (var i = 0; i < val.length; i++) set.add(val[i]);
      return set;
    }
    return val;
  }
};

var formatSymbols = function (message) {
  var _a;
  if (typeof message === "string" || typeof message === "number" || message === null) {
    return message;
  } else if (Array.isArray(message)) {
    return message.map(formatSymbols);
  } else if (typeof message == "object" && (TRANSFORMED_TYPE_KEY in message)) {
    var type = message[TRANSFORMED_TYPE_KEY];
    var transform = transformers[type];
    return transform(message.data);
  } else if (typeof message == "object" && (TRANSFORMED_TYPE_KEY_ALTERNATE in message)) {
    var type = message[TRANSFORMED_TYPE_KEY_ALTERNATE];
    var transform = transformers[type];
    return transform(message.data);
  } else if (typeof message == "object" && ((_a = message.constructor) === null || _a === void 0 ? void 0 : _a.name) === "NodeList") {
    var NodeList_1 = {};
    Object.entries(message).forEach(function (_a) {
      var key = _a[0], value = _a[1];
      NodeList_1[key] = formatSymbols(value);
    });
    return NodeList_1;
  }
  return message;
};
var arrayToString = function (output, references, level) {
  var mergeArray = output.reduce(function (acc, curr, index) {
    return ("").concat(acc).concat(index ? ", " : "").concat(fromConsoleToString(curr, references, level));
  }, "");
  return ("[").concat(mergeArray, "]");
};
var objectToString = function (output, references, level) {
  var constructorName = output.constructor.name !== "Object" ? ("").concat(output.constructor.name, " ") : "";
  if (level > MAX_NEST_LEVEL) {
    return constructorName;
  }
  var entries = Object.entries(output);
  var formattedObject = Object.entries(output).reduce(function (acc, _a, index) {
    var key = _a[0], value = _a[1];
    var comma = index === 0 ? "" : ", ";
    var breakLine = entries.length > 10 ? "\n  " : "";
    var formatted = fromConsoleToString(value, references, level);
    if (index === MAX_KEYS) {
      return acc + breakLine + "...";
    } else if (index > MAX_KEYS) {
      return acc;
    }
    return acc + ("").concat(comma).concat(breakLine).concat(key, ": ") + formatted;
  }, "");
  return ("").concat(constructorName, "{ ").concat(formattedObject).concat(entries.length > 10 ? "\n" : " ", "}");
};
var fromConsoleToString = function (message, references, level) {
  var _a;
  if (level === void 0) {
    level = 0;
  }
  try {
    var output_1 = formatSymbols(message);
    if (Array.isArray(output_1)) {
      return arrayToString(output_1, references, level + 1);
    }
    switch (typeof output_1) {
      case "string":
        return ("\"").concat(output_1, "\"").slice(0, MAX_LENGTH_STRING);
      case "number":
      case "function":
      case "symbol":
        return output_1.toString();
      case "boolean":
        return String(output_1);
      case "undefined":
        return "undefined";
      case "object":
      default:
        if (output_1 instanceof RegExp || output_1 instanceof Error || output_1 instanceof Date) {
          return output_1.toString();
        }
        if (output_1 === null) {
          return String(null);
        }
        if (output_1 instanceof HTMLElement) {
          return output_1.outerHTML.slice(0, MAX_LENGTH_STRING);
        }
        if (Object.entries(output_1).length === 0) {
          return "{}";
        }
        if ((CIRCULAR_REF_KEY in output_1)) {
          if (level > MAX_NEST_LEVEL) {
            return "Unable to print information";
          }
          var newMessage = references[output_1[CIRCULAR_REF_KEY]];
          return fromConsoleToString(newMessage, references, level + 1);
        }
        if (((_a = output_1.constructor) === null || _a === void 0 ? void 0 : _a.name) === "NodeList") {
          var length_1 = output_1.length;
          var nodes = new Array(length_1).fill(null).map(function (_, index) {
            return fromConsoleToString(output_1[index], references);
          });
          return ("NodeList(").concat(output_1.length, ")[").concat(nodes, "]");
        }
        return objectToString(output_1, references, level + 1);
    }
  } catch (_b) {
    return "Unable to print information";
  }
};

var ConsoleList = function (_a) {
  var data = _a.data;
  var classNames = useClassNames();
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: data.map(function (_a, logIndex, references) {
      var data = _a.data, id = _a.id, method = _a.method;
      if (!data) return null;
      if (Array.isArray(data)) {
        return jsxRuntime.jsx(React__namespace.Fragment, {
          children: data.map(function (msg, msgIndex) {
            var fixReferences = references.slice(logIndex, references.length);
            return jsxRuntime.jsx("div", {
              className: classNames("console-item", [consoleItemClassName()]),
              children: jsxRuntime.jsx(CodeMirror, {
                code: method === "clear" ? msg : fromConsoleToString(msg, fixReferences),
                fileType: "js",
                initMode: "user-visible",
                showReadOnly: false,
                readOnly: true,
                wrapContent: true
              })
            }, ("").concat(id, "-").concat(msgIndex));
          })
        }, id);
      }
      return null;
    })
  });
};
var consoleItemClassName = fakeCss;

var wrapperClassName = fakeCss;
var flexClassName = fakeCss;
var Header = function (_a) {
  var currentTab = _a.currentTab, setCurrentTab = _a.setCurrentTab, node = _a.node;
  var classNames = useClassNames();
  var buttonsClassName = classNames("console-header-button", [buttonClassName, roundedButtonClassName, fakeCss]);
  return jsxRuntime.jsxs("div", {
    className: classNames("console-header", [wrapperClassName, flexClassName]),
    children: [jsxRuntime.jsxs("p", {
      className: classNames("console-header-title", [fakeCss]),
      children: [jsxRuntime.jsx(ConsoleIcon, {}), jsxRuntime.jsx("span", {
        children: "Terminal"
      })]
    }), node && jsxRuntime.jsxs("div", {
      className: classNames("console-header-actions", [flexClassName]),
      children: [jsxRuntime.jsx("button", {
        className: buttonsClassName,
        "data-active": currentTab === "server",
        onClick: function () {
          return setCurrentTab("server");
        },
        type: "button",
        children: "Server"
      }), jsxRuntime.jsx("button", {
        className: buttonsClassName,
        "data-active": currentTab === "client",
        onClick: function () {
          return setCurrentTab("client");
        },
        type: "button",
        children: "Client"
      })]
    })]
  });
};

var useSandpackConsole = function (_a) {
  var clientId = _a.clientId, _b = _a.maxMessageCount, maxMessageCount = _b === void 0 ? MAX_MESSAGE_COUNT : _b, _c = _a.showSyntaxError, showSyntaxError = _c === void 0 ? false : _c, _d = _a.resetOnPreviewRestart, resetOnPreviewRestart = _d === void 0 ? false : _d;
  var _e = React__namespace.useState([]), logs = _e[0], setLogs = _e[1];
  var listen = useSandpack().listen;
  React__namespace.useEffect(function () {
    var unsubscribe = listen(function (message) {
      if (resetOnPreviewRestart && message.type === "start") {
        setLogs([]);
      } else if (message.type === "console" && message.codesandbox) {
        var payloadLog = Array.isArray(message.log) ? message.log : [message.log];
        if (payloadLog.find(function (_a) {
          var method = _a.method;
          return method === "clear";
        })) {
          return setLogs([CLEAR_LOG]);
        }
        var logsMessages_1 = showSyntaxError ? payloadLog : payloadLog.filter(function (messageItem) {
          var _a, _b, _c;
          var messagesWithoutSyntaxErrors = (_c = (_b = (_a = messageItem === null || messageItem === void 0 ? void 0 : messageItem.data) === null || _a === void 0 ? void 0 : _a.filter) === null || _b === void 0 ? void 0 : _b.call(_a, function (dataItem) {
            if (typeof dataItem !== "string") return true;
            var matches = SYNTAX_ERROR_PATTERN.filter(function (lookFor) {
              return dataItem.startsWith(lookFor);
            });
            return matches.length === 0;
          })) !== null && _c !== void 0 ? _c : [];
          return messagesWithoutSyntaxErrors.length > 0;
        });
        if (!logsMessages_1) return;
        setLogs(function (prev) {
          var messages = __spreadArray(__spreadArray([], prev, true), logsMessages_1, true).filter(function (value, index, self) {
            return index === self.findIndex(function (s) {
              return s.id === value.id;
            });
          });
          while (messages.length > maxMessageCount) {
            messages.shift();
          }
          return messages;
        });
      }
    }, clientId);
    return unsubscribe;
  }, [showSyntaxError, maxMessageCount, clientId, resetOnPreviewRestart]);
  return {
    logs: logs,
    reset: function () {
      return setLogs([]);
    }
  };
};

var SandpackConsole = React__namespace.forwardRef(function (_a, ref) {
  var _c = _a.showHeader, showHeader = _c === void 0 ? true : _c, _d = _a.showSyntaxError, showSyntaxError = _d === void 0 ? false : _d, maxMessageCount = _a.maxMessageCount, onLogsChange = _a.onLogsChange, className = _a.className, _f = _a.showResetConsoleButton, showResetConsoleButton = _f === void 0 ? true : _f, _g = _a.showRestartButton, showRestartButton = _g === void 0 ? true : _g, _h = _a.resetOnPreviewRestart, resetOnPreviewRestart = _h === void 0 ? false : _h, _j = _a.actionsChildren, actionsChildren = _j === void 0 ? jsxRuntime.jsx(jsxRuntime.Fragment, {}) : _j, _k = _a.standalone, standalone = _k === void 0 ? false : _k, props = __rest(_a, ["showHeader", "showSyntaxError", "maxMessageCount", "onLogsChange", "className", "showSetupProgress", "showResetConsoleButton", "showRestartButton", "resetOnPreviewRestart", "actionsChildren", "standalone"]);
  var environment = useSandpack().sandpack.environment;
  var _l = useSandpackClient(), iframe = _l.iframe, internalClientId = _l.clientId;
  var restart = useSandpackShell().restart;
  var _m = React__namespace.useState(environment === "node" ? "server" : "client"), currentTab = _m[0], setCurrentTab = _m[1];
  var clientId = standalone ? internalClientId : undefined;
  var _o = useSandpackConsole({
    maxMessageCount: maxMessageCount,
    showSyntaxError: showSyntaxError,
    resetOnPreviewRestart: resetOnPreviewRestart,
    clientId: clientId
  }), consoleData = _o.logs, resetConsole = _o.reset;
  var _p = useSandpackShellStdout({
    maxMessageCount: maxMessageCount,
    resetOnPreviewRestart: resetOnPreviewRestart,
    clientId: clientId
  }), stdoutData = _p.logs, resetStdout = _p.reset;
  var wrapperRef = React__namespace.useRef(null);
  React__namespace.useEffect(function () {
    onLogsChange === null || onLogsChange === void 0 ? void 0 : onLogsChange(consoleData);
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
    }
  }, [onLogsChange, consoleData, stdoutData, currentTab]);
  var isServerTab = currentTab === "server";
  var isNodeEnvironment = environment === "node";
  React__namespace.useImperativeHandle(ref, function () {
    return {
      reset: function () {
        resetConsole();
        resetStdout();
      }
    };
  });
  var classNames = useClassNames();
  return jsxRuntime.jsxs(SandpackStack, __assign({
    className: classNames("console", [fakeCss, className])
  }, props, {
    children: [showHeader && isNodeEnvironment && jsxRuntime.jsx(Header, {
      currentTab: currentTab,
      node: isNodeEnvironment,
      setCurrentTab: setCurrentTab
    }), jsxRuntime.jsx("div", {
      ref: wrapperRef,
      className: classNames("console-list", [fakeCss]),
      children: isServerTab ? jsxRuntime.jsx(StdoutList, {
        data: stdoutData
      }) : jsxRuntime.jsx(ConsoleList, {
        data: consoleData
      })
    }), jsxRuntime.jsxs("div", {
      className: classNames("console-actions", [fakeCss]),
      children: [actionsChildren, showRestartButton && isServerTab && jsxRuntime.jsx(RoundedButton, {
        onClick: function () {
          restart();
          resetConsole();
          resetStdout();
        },
        children: jsxRuntime.jsx(RestartIcon, {})
      }), showResetConsoleButton && jsxRuntime.jsx(RoundedButton, {
        onClick: function () {
          if (currentTab === "client") {
            resetConsole();
          } else {
            resetStdout();
          }
        },
        children: jsxRuntime.jsx(CleanIcon, {})
      })]
    }), standalone && jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [jsxRuntime.jsx(DependenciesProgress, {
        clientId: clientId
      }), jsxRuntime.jsx("iframe", {
        ref: iframe
      })]
    })]
  }));
});

var Sandpack = function (_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j;
  var options = _a.options, template = _a.template, customSetup = _a.customSetup, files = _a.files, theme = _a.theme, props = __rest(_a, ["options", "template", "customSetup", "files", "theme"]);
  options !== null && options !== void 0 ? options : options = {};
  (_b = options.resizablePanels) !== null && _b !== void 0 ? _b : options.resizablePanels = true;
  (_c = options.editorWidthPercentage) !== null && _c !== void 0 ? _c : options.editorWidthPercentage = 50;
  (_d = options.showConsole) !== null && _d !== void 0 ? _d : options.showConsole = false;
  var rtlLayout = (_e = options === null || options === void 0 ? void 0 : options.rtl) !== null && _e !== void 0 ? _e : false;
  var codeEditorOptions = {
    showTabs: options.showTabs,
    showLineNumbers: options.showLineNumbers,
    showInlineErrors: options.showInlineErrors,
    wrapContent: options.wrapContent,
    closableTabs: options.closableTabs,
    initMode: options.initMode,
    extensions: (_f = options.codeEditor) === null || _f === void 0 ? void 0 : _f.extensions,
    extensionsKeymap: (_g = options.codeEditor) === null || _g === void 0 ? void 0 : _g.extensionsKeymap,
    readOnly: options.readOnly,
    showReadOnly: options.showReadOnly,
    additionalLanguages: (_h = options.codeEditor) === null || _h === void 0 ? void 0 : _h.additionalLanguages
  };
  var providerOptions = {
    activeFile: options.activeFile,
    visibleFiles: options.visibleFiles,
    recompileMode: options.recompileMode,
    recompileDelay: options.recompileDelay,
    autorun: options.autorun,
    autoReload: options.autoReload,
    bundlerURL: options.bundlerURL,
    startRoute: options.startRoute,
    skipEval: options.skipEval,
    fileResolver: options.fileResolver,
    initMode: options.initMode,
    initModeObserverOptions: options.initModeObserverOptions,
    externalResources: options.externalResources,
    logLevel: options.logLevel,
    classes: options.classes,
    experimental_enableServiceWorker: options.experimental_enableServiceWorker,
    experimental_enableStableServiceWorkerId: options.experimental_enableStableServiceWorkerId
  };
  var _k = React__namespace.useState(options.showConsole), consoleVisibility = _k[0], setConsoleVisibility = _k[1];
  var _l = React__namespace.useState(0), counter = _l[0], setCounter = _l[1];
  var hasRightColumn = options.showConsole || options.showConsoleButton;
  var templateFiles = (_j = SANDBOX_TEMPLATES[template]) !== null && _j !== void 0 ? _j : {};
  var mode = (options === null || options === void 0 ? void 0 : options.layout) ? options === null || options === void 0 ? void 0 : options.layout : ("mode" in templateFiles) ? templateFiles.mode : "preview";
  var actionsChildren = options.showConsoleButton ? jsxRuntime.jsx(ConsoleCounterButton, {
    counter: counter,
    onClick: function () {
      return setConsoleVisibility(function (prev) {
        return !prev;
      });
    }
  }) : undefined;
  var dragEventTargetRef = React__namespace.useRef(null);
  var _m = React__namespace.useState(options.editorWidthPercentage), horizontalSize = _m[0], setHorizontalSize = _m[1];
  var _o = React__namespace.useState(70), verticalSize = _o[0], setVerticalSize = _o[1];
  var RightColumn = hasRightColumn ? SandpackStack : React__namespace.Fragment;
  var rightColumnStyle = {
    flexGrow: 100 - horizontalSize,
    flexShrink: 100 - horizontalSize,
    flexBasis: 0,
    width: 100 - horizontalSize + "%",
    gap: consoleVisibility ? 1 : 0,
    height: options.editorHeight
  };
  var topRowStyle = hasRightColumn ? {
    flexGrow: verticalSize,
    flexShrink: verticalSize,
    flexBasis: 0,
    overflow: "hidden"
  } : rightColumnStyle;
  var onDragMove = function (event) {
    if (!dragEventTargetRef.current) return;
    var container = dragEventTargetRef.current.parentElement;
    if (!container) return;
    var direction = dragEventTargetRef.current.dataset.direction;
    var isHorizontal = direction === "horizontal";
    var _a = container.getBoundingClientRect(), left = _a.left, top = _a.top, height = _a.height, width = _a.width;
    var offset = isHorizontal ? (event.clientX - left) / width * 100 : (event.clientY - top) / height * 100;
    var boundaries = Math.min(Math.max(offset, 25), 75);
    if (isHorizontal) {
      setHorizontalSize(rtlLayout ? 100 - boundaries : boundaries);
    } else {
      setVerticalSize(boundaries);
    }
    container.querySelectorAll((".").concat(THEME_PREFIX, "-stack")).forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  };
  var stopDragging = function () {
    var _a;
    var container = (_a = dragEventTargetRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
    if (!container) return;
    container.querySelectorAll((".").concat(THEME_PREFIX, "-stack")).forEach(function (item) {
      item.style.pointerEvents = "";
    });
    dragEventTargetRef.current = null;
  };
  React__namespace.useEffect(function () {
    if (!(options === null || options === void 0 ? void 0 : options.resizablePanels)) return;
    document.body.addEventListener("mousemove", onDragMove);
    document.body.addEventListener("mouseup", stopDragging);
    return function () {
      document.body.removeEventListener("mousemove", onDragMove);
      document.body.removeEventListener("mouseup", stopDragging);
    };
  }, [options]);
  React__namespace.useEffect(function () {
    var _a;
    setConsoleVisibility((_a = options === null || options === void 0 ? void 0 : options.showConsole) !== null && _a !== void 0 ? _a : false);
  }, [options.showConsole]);
  var rightColumnProps = hasRightColumn ? {
    className: THEME_PREFIX + "-preset-column",
    style: rightColumnStyle
  } : {};
  var classNames = useClassNames();
  return jsxRuntime.jsx(SandpackProvider, __assign({
    customSetup: customSetup,
    files: files,
    options: providerOptions,
    template: template,
    theme: theme
  }, props, {
    children: jsxRuntime.jsxs(SandpackLayout, {
      className: rtlLayout ? classNames("rtl-layout", [rtlLayoutClassName]) : "",
      children: [jsxRuntime.jsx(SandpackCodeEditor, __assign({}, codeEditorOptions, {
        style: {
          height: options.editorHeight,
          flexGrow: horizontalSize,
          flexShrink: horizontalSize,
          flexBasis: 0,
          overflow: "hidden"
        }
      })), options.resizablePanels && jsxRuntime.jsx("div", {
        className: classNames("resize-handler", [dragHandler()]),
        "data-direction": "horizontal",
        onMouseDown: function (event) {
          dragEventTargetRef.current = event.target;
        },
        style: {
          left: ("calc(").concat(rtlLayout ? 100 - horizontalSize : horizontalSize, "% - 5px)")
        }
      }), jsxRuntime.jsxs(RightColumn, __assign({}, rightColumnProps, {
        children: [mode === "preview" && jsxRuntime.jsx(SandpackPreview, {
          actionsChildren: actionsChildren,
          showNavigator: options.showNavigator,
          showRefreshButton: options.showRefreshButton,
          style: topRowStyle
        }), mode === "tests" && jsxRuntime.jsx(SandpackTests, {
          actionsChildren: actionsChildren,
          style: topRowStyle
        }), mode === "console" && jsxRuntime.jsx(SandpackConsole, {
          actionsChildren: actionsChildren,
          style: topRowStyle,
          standalone: true
        }), (options.showConsoleButton || consoleVisibility) && jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [options.resizablePanels && consoleVisibility && jsxRuntime.jsx("div", {
            className: classNames("resize-handler", [dragHandler()]),
            "data-direction": "vertical",
            onMouseDown: function (event) {
              dragEventTargetRef.current = event.target;
            },
            style: {
              top: ("calc(").concat(verticalSize, "% - 5px)")
            }
          }), jsxRuntime.jsx("div", {
            className: classNames("console-wrapper", [consoleWrapper]),
            style: {
              flexGrow: consoleVisibility ? 100 - verticalSize : 0,
              flexShrink: consoleVisibility ? 100 - verticalSize : 0,
              flexBasis: 0
            },
            children: jsxRuntime.jsx(SandpackConsole, {
              onLogsChange: function (logs) {
                return setCounter(logs.length);
              },
              showHeader: false
            })
          })]
        })]
      }))]
    })
  }), template);
};
var dragHandler = fakeCss;
var ConsoleCounterButton = function (_a) {
  var onClick = _a.onClick, counter = _a.counter;
  return jsxRuntime.jsxs(RoundedButton, {
    className: buttonCounter.toString(),
    onClick: onClick,
    children: [jsxRuntime.jsx(ConsoleIcon, {}), counter > 0 && jsxRuntime.jsx("strong", {
      children: counter
    })]
  });
};
var buttonCounter = fakeCss;
var consoleWrapper = fakeCss;
var rtlLayoutClassName = fakeCss;

exports.ANGULAR_TEMPLATE = ANGULAR_TEMPLATE;
exports.ASTRO_TEMPLATE = ASTRO_TEMPLATE;
exports.BackwardIcon = BackwardIcon;
exports.CleanIcon = CleanIcon;
exports.CloseIcon = CloseIcon;
exports.CodeEditor = CodeMirror;
exports.ConsoleIcon = ConsoleIcon;
exports.DependenciesProgress = DependenciesProgress;
exports.DirectoryIconClosed = DirectoryIconClosed;
exports.DirectoryIconOpen = DirectoryIconOpen;
exports.ErrorOverlay = ErrorOverlay;
exports.ExportIcon = ExportIcon;
exports.FADE_ANIMATION_DURATION = FADE_ANIMATION_DURATION;
exports.FileIcon = FileIcon;
exports.FileTabs = FileTabs;
exports.ForwardIcon = ForwardIcon;
exports.LoadingOverlay = LoadingOverlay;
exports.Navigator = Navigator;
exports.OpenInCodeSandboxButton = OpenInCodeSandboxButton;
exports.REACT_TEMPLATE = REACT_TEMPLATE;
exports.REACT_TYPESCRIPT_TEMPLATE = REACT_TYPESCRIPT_TEMPLATE;
exports.RefreshIcon = RefreshIcon;
exports.RestartIcon = RestartIcon;
exports.RoundedButton = RoundedButton;
exports.RunButton = RunButton$1;
exports.RunIcon = RunIcon;
exports.SANDBOX_TEMPLATES = SANDBOX_TEMPLATES;
exports.SANDPACK_THEMES = SANDPACK_THEMES;
exports.SOLID_TEMPLATE = SOLID_TEMPLATE;
exports.SVELTE_TEMPLATE = SVELTE_TEMPLATE;
exports.Sandpack = Sandpack;
exports.SandpackCodeEditor = SandpackCodeEditor;
exports.SandpackCodeViewer = SandpackCodeViewer;
exports.SandpackConsole = SandpackConsole;
exports.SandpackConsumer = SandpackConsumer;
exports.SandpackFileExplorer = SandpackFileExplorer;
exports.SandpackLayout = SandpackLayout;
exports.SandpackPreview = SandpackPreview;
exports.SandpackProvider = SandpackProvider;
exports.SandpackReactContext = Sandpack$1;
exports.SandpackStack = SandpackStack;
exports.SandpackTests = SandpackTests;
exports.SandpackThemeConsumer = SandpackThemeConsumer;
exports.SandpackThemeContext = SandpackThemeContext;
exports.SandpackThemeProvider = SandpackThemeProvider;
exports.SandpackTranspiledCode = SandpackTranspiledCode;
exports.SignInIcon = SignInIcon;
exports.SignOutIcon = SignOutIcon;
exports.TEST_TYPESCRIPT_TEMPLATE = TEST_TYPESCRIPT_TEMPLATE;
exports.UnstyledOpenInCodeSandboxButton = UnstyledOpenInCodeSandboxButton;
exports.VANILLA_TEMPLATE = VANILLA_TEMPLATE;
exports.VANILLA_TYPESCRIPT_TEMPLATE = VANILLA_TYPESCRIPT_TEMPLATE;
exports.VUE_TEMPLATE = VUE_TEMPLATE;
exports.defaultDark = defaultDark;
exports.defaultLight = defaultLight;
exports.getSandpackCssText = getCssText;
exports.layoutClassName = layoutClassName;
exports.stackClassName = stackClassName;
exports.tabButton = tabButton;
exports.useActiveCode = useActiveCode;
exports.useClassNames = useClassNames;
exports.useErrorMessage = useErrorMessage;
exports.useLoadingOverlayState = useLoadingOverlayState;
exports.useSandpack = useSandpack;
exports.useSandpackClient = useSandpackClient;
exports.useSandpackConsole = useSandpackConsole;
exports.useSandpackNavigation = useSandpackNavigation;
exports.useSandpackPreviewProgress = useSandpackPreviewProgress;
exports.useSandpackShell = useSandpackShell;
exports.useSandpackShellStdout = useSandpackShellStdout;
exports.useSandpackTheme = useSandpackTheme;
exports.useTranspiledCode = useTranspiledCode;

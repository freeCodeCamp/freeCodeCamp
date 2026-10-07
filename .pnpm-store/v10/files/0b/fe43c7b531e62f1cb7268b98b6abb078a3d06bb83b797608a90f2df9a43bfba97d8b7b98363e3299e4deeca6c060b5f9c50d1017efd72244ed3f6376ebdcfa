"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/YouTube.tsx
var YouTube_exports = {};
__export(YouTube_exports, {
  default: () => YouTube_default
});
module.exports = __toCommonJS(YouTube_exports);
var import_prop_types = __toESM(require("prop-types"));
var import_react = __toESM(require("react"));
var import_fast_deep_equal = __toESM(require("fast-deep-equal"));
var import_youtube_player = __toESM(require("youtube-player"));
function shouldUpdateVideo(prevProps, props) {
  var _a, _b;
  if (prevProps.videoId !== props.videoId) {
    return true;
  }
  const prevVars = ((_a = prevProps.opts) == null ? void 0 : _a.playerVars) || {};
  const vars = ((_b = props.opts) == null ? void 0 : _b.playerVars) || {};
  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}
function filterResetOptions(opts = {}) {
  return __spreadProps(__spreadValues({}, opts), {
    height: 0,
    width: 0,
    playerVars: __spreadProps(__spreadValues({}, opts.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function shouldResetPlayer(prevProps, props) {
  return prevProps.videoId !== props.videoId || !(0, import_fast_deep_equal.default)(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}
function shouldUpdatePlayer(prevProps, props) {
  var _a, _b, _c, _d;
  return prevProps.id !== props.id || prevProps.className !== props.className || ((_a = prevProps.opts) == null ? void 0 : _a.width) !== ((_b = props.opts) == null ? void 0 : _b.width) || ((_c = prevProps.opts) == null ? void 0 : _c.height) !== ((_d = props.opts) == null ? void 0 : _d.height) || prevProps.iframeClassName !== props.iframeClassName || prevProps.title !== props.title;
}
var defaultProps = {
  videoId: "",
  id: "",
  className: "",
  iframeClassName: "",
  style: {},
  title: "",
  loading: void 0,
  opts: {},
  onReady: () => {
  },
  onError: () => {
  },
  onPlay: () => {
  },
  onPause: () => {
  },
  onEnd: () => {
  },
  onStateChange: () => {
  },
  onPlaybackRateChange: () => {
  },
  onPlaybackQualityChange: () => {
  }
};
var propTypes = {
  videoId: import_prop_types.default.string,
  id: import_prop_types.default.string,
  className: import_prop_types.default.string,
  iframeClassName: import_prop_types.default.string,
  style: import_prop_types.default.object,
  title: import_prop_types.default.string,
  loading: import_prop_types.default.oneOf(["lazy", "eager"]),
  opts: import_prop_types.default.objectOf(import_prop_types.default.any),
  onReady: import_prop_types.default.func,
  onError: import_prop_types.default.func,
  onPlay: import_prop_types.default.func,
  onPause: import_prop_types.default.func,
  onEnd: import_prop_types.default.func,
  onStateChange: import_prop_types.default.func,
  onPlaybackRateChange: import_prop_types.default.func,
  onPlaybackQualityChange: import_prop_types.default.func
};
var _YouTube = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.destroyPlayerPromise = void 0;
    this.onPlayerReady = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onReady) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerError = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerStateChange = (event) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      (_b = (_a = this.props).onStateChange) == null ? void 0 : _b.call(_a, event);
      switch (event.data) {
        case _YouTube.PlayerState.ENDED:
          (_d = (_c = this.props).onEnd) == null ? void 0 : _d.call(_c, event);
          break;
        case _YouTube.PlayerState.PLAYING:
          (_f = (_e = this.props).onPlay) == null ? void 0 : _f.call(_e, event);
          break;
        case _YouTube.PlayerState.PAUSED:
          (_h = (_g = this.props).onPause) == null ? void 0 : _h.call(_g, event);
          break;
        default:
      }
    };
    this.onPlayerPlaybackRateChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackRateChange) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerPlaybackQualityChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackQualityChange) == null ? void 0 : _b.call(_a, event);
    };
    this.destroyPlayer = () => {
      if (this.internalPlayer) {
        this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0);
        return this.destroyPlayerPromise;
      }
      return Promise.resolve();
    };
    this.createPlayer = () => {
      if (typeof document === "undefined")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const playerOpts = __spreadProps(__spreadValues({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = (0, import_youtube_player.default)(this.container, playerOpts);
      this.internalPlayer.on("ready", this.onPlayerReady);
      this.internalPlayer.on("error", this.onPlayerError);
      this.internalPlayer.on("stateChange", this.onPlayerStateChange);
      this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange);
      this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange);
      if (this.props.title || this.props.loading) {
        this.internalPlayer.getIframe().then((iframe) => {
          if (this.props.title)
            iframe.setAttribute("title", this.props.title);
          if (this.props.loading)
            iframe.setAttribute("loading", this.props.loading);
        });
      }
    };
    this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer);
    this.updatePlayer = () => {
      var _a;
      (_a = this.internalPlayer) == null ? void 0 : _a.getIframe().then((iframe) => {
        if (this.props.id)
          iframe.setAttribute("id", this.props.id);
        else
          iframe.removeAttribute("id");
        if (this.props.iframeClassName)
          iframe.setAttribute("class", this.props.iframeClassName);
        else
          iframe.removeAttribute("class");
        if (this.props.opts && this.props.opts.width)
          iframe.setAttribute("width", this.props.opts.width.toString());
        else
          iframe.removeAttribute("width");
        if (this.props.opts && this.props.opts.height)
          iframe.setAttribute("height", this.props.opts.height.toString());
        else
          iframe.removeAttribute("height");
        if (this.props.title)
          iframe.setAttribute("title", this.props.title);
        else
          iframe.setAttribute("title", "YouTube video player");
        if (this.props.loading)
          iframe.setAttribute("loading", this.props.loading);
        else
          iframe.removeAttribute("loading");
      });
    };
    this.getInternalPlayer = () => {
      return this.internalPlayer;
    };
    this.updateVideo = () => {
      var _a, _b, _c, _d;
      if (typeof this.props.videoId === "undefined" || this.props.videoId === null) {
        (_a = this.internalPlayer) == null ? void 0 : _a.stopVideo();
        return;
      }
      let autoplay = false;
      const opts = {
        videoId: this.props.videoId
      };
      if ((_b = this.props.opts) == null ? void 0 : _b.playerVars) {
        autoplay = this.props.opts.playerVars.autoplay === 1;
        if ("start" in this.props.opts.playerVars) {
          opts.startSeconds = this.props.opts.playerVars.start;
        }
        if ("end" in this.props.opts.playerVars) {
          opts.endSeconds = this.props.opts.playerVars.end;
        }
      }
      if (autoplay) {
        (_c = this.internalPlayer) == null ? void 0 : _c.loadVideoById(opts);
        return;
      }
      (_d = this.internalPlayer) == null ? void 0 : _d.cueVideoById(opts);
    };
    this.refContainer = (container) => {
      this.container = container;
    };
    this.container = null;
    this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(prevProps) {
    return __async(this, null, function* () {
      if (shouldUpdatePlayer(prevProps, this.props)) {
        this.updatePlayer();
      }
      if (shouldResetPlayer(prevProps, this.props)) {
        yield this.resetPlayer();
      }
      if (shouldUpdateVideo(prevProps, this.props)) {
        this.updateVideo();
      }
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, /* @__PURE__ */ import_react.default.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
};
var YouTube = _YouTube;
YouTube.propTypes = propTypes;
YouTube.defaultProps = defaultProps;
YouTube.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var YouTube_default = YouTube;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=YouTube.js.map
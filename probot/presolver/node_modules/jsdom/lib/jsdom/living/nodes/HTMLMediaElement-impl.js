"use strict";
const DOMException = require("domexception");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const notImplemented = require("../../browser/not-implemented");
const { reflectURLAttribute } = require("../../utils");

function getTimeRangeDummy() {
  return {
    length: 0,
    start() {
      return 0;
    },
    end() {
      return 0;
    }
  };
}

class HTMLMediaElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this._muted = false;
    this._volume = 1.0;
    this.readyState = 0;
    this.networkState = 0;
    this.currentTime = 0;
    this.currentSrc = "";
    this.buffered = getTimeRangeDummy();
    this.seeking = false;
    this.duration = 0;
    this.paused = true;
    this.played = getTimeRangeDummy();
    this.seekable = getTimeRangeDummy();
    this.ended = false;
    this.audioTracks = [];
    this.videoTracks = [];
    this.textTracks = [];
  }
  // Implemented accoring to W3C Draft 22 August 2012
  set defaultPlaybackRate(v) {
    if (v === 0.0) {
      throw new DOMException("The operation is not supported.", "NotSupportedError");
    }
    if (this._defaultPlaybackRate !== v) {
      this._defaultPlaybackRate = v;
      this._dispatchRateChange();
    }
  }

  _dispatchRateChange() {
    const ev = this._ownerDocument.createEvent("HTMLEvents");
    ev.initEvent("ratechange", false, false);
    this.dispatchEvent(ev);
  }
  get defaultPlaybackRate() {
    if (this._defaultPlaybackRate === undefined) {
      return 1.0;
    }
    return this._defaultPlaybackRate;
  }
  get playbackRate() {
    if (this._playbackRate === undefined) {
      return 1.0;
    }
    return this._playbackRate;
  }
  set playbackRate(v) {
    if (v !== this._playbackRate) {
      this._playbackRate = v;
      this._dispatchRateChange();
    }
  }
  get muted() {
    return this._muted;
  }
  _dispatchVolumeChange() {
    const ev = this._ownerDocument.createEvent("HTMLEvents");
    ev.initEvent("volumechange", false, false);
    this.dispatchEvent(ev);
  }
  set muted(v) {
    if (v !== this._muted) {
      this._muted = v;
      this._dispatchVolumeChange();
    }
  }
  get defaultMuted() {
    return this.getAttribute("muted") !== null;
  }
  set defaultMuted(v) {
    if (v) {
      this.setAttribute("muted", v);
    } else {
      this.removeAttribute("muted");
    }
  }
  get volume() {
    return this._volume;
  }
  set volume(v) {
    if (v < 0 || v > 1) {
      throw new DOMException("The index is not in the allowed range.", "IndexSizeError");
    }
    if (this._volume !== v) {
      this._volume = v;
      this._dispatchVolumeChange();
    }
  }

  // Not (yet) implemented according to spec
  // Should return sane default values
  load() {
    notImplemented("HTMLMediaElement.prototype.load", this._ownerDocument._defaultView);
  }
  canPlayType() {
    return "";
  }
  play() {
    notImplemented("HTMLMediaElement.prototype.play", this._ownerDocument._defaultView);
  }
  pause() {
    notImplemented("HTMLMediaElement.prototype.pause", this._ownerDocument._defaultView);
  }
  addTextTrack() {
    notImplemented("HTMLMediaElement.prototype.addNextTrack", this._ownerDocument._defaultView);
  }

  get src() {
    return reflectURLAttribute(this, "src");
  }

  set src(value) {
    this.setAttribute("src", value);
  }
}

module.exports = {
  implementation: HTMLMediaElementImpl
};

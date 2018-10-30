"use strict";

const whatwgEncoding = require("whatwg-encoding");
const MIMEType = require("whatwg-mimetype");
const querystring = require("querystring");
const DOMException = require("domexception");
const EventTargetImpl = require("../events/EventTarget-impl").implementation;
const ProgressEvent = require("../generated/ProgressEvent");
const { setupForSimpleEventAccessors } = require("../helpers/create-event-accessor");

const READY_STATES = Object.freeze({
  EMPTY: 0,
  LOADING: 1,
  DONE: 2
});

const events = ["loadstart", "progress", "load", "abort", "error", "loadend"];

class FileReaderImpl extends EventTargetImpl {
  constructor(args, privateData) {
    super([], privateData);

    this.error = null;
    this.readyState = READY_STATES.EMPTY;
    this.result = null;

    this._ownerDocument = privateData.window.document;
    this._terminated = false;
  }

  readAsArrayBuffer(file) {
    this._readFile(file, "buffer");
  }
  readAsBinaryString(file) {
    this._readFile(file, "binaryString");
  }
  readAsDataURL(file) {
    this._readFile(file, "dataURL");
  }
  readAsText(file, encoding) {
    this._readFile(file, "text", whatwgEncoding.labelToName(encoding) || "UTF-8");
  }

  abort() {
    if (this.readyState === READY_STATES.EMPTY || this.readyState === READY_STATES.DONE) {
      this.result = null;
      return;
    }

    if (this.readyState === READY_STATES.LOADING) {
      this.readyState = READY_STATES.DONE;
      this.result = null;
    }

    this._terminated = true;
    this._fireProgressEvent("abort");
    this._fireProgressEvent("loadend");
  }

  _fireProgressEvent(name, props) {
    const event = ProgressEvent.createImpl([name, Object.assign({ bubbles: false, cancelable: false }, props)], {});
    this.dispatchEvent(event);
  }

  _readFile(file, format, encoding) {
    if (this.readyState === READY_STATES.LOADING) {
      throw new DOMException("The object is in an invalid state.", "InvalidStateError");
    }

    this.readyState = READY_STATES.LOADING;

    setImmediate(() => {
      if (this._terminated) {
        this._terminated = false;
        return;
      }

      this._fireProgressEvent("loadstart");

      let data = file._buffer;
      if (!data) {
        data = Buffer.alloc(0);
      }
      this._fireProgressEvent("progress", {
        lengthComputable: !isNaN(file.size),
        total: file.size,
        loaded: data.length
      });

      setImmediate(() => {
        if (this._terminated) {
          this._terminated = false;
          return;
        }

        switch (format) {
          default:
          case "buffer": {
            this.result = (new Uint8Array(data)).buffer;
            break;
          }
          case "binaryString": {
            this.result = data.toString("binary");
            break;
          }
          case "dataURL": {
            // Spec seems very unclear here; see https://github.com/whatwg/fetch/issues/665#issuecomment-362930079.
            let dataUrl = "data:";
            const contentType = MIMEType.parse(file.type);
            if (contentType && contentType.type === "text") {
              const fallbackEncoding = whatwgEncoding.getBOMEncoding(data) ||
                whatwgEncoding.labelToName(contentType.parameters.get("charset")) || "UTF-8";
              const decoded = whatwgEncoding.decode(data, fallbackEncoding);

              contentType.parameters.set("charset", encoding);
              dataUrl += contentType.toString();
              dataUrl += ",";
              dataUrl += querystring.escape(decoded);
            } else {
              if (contentType) {
                dataUrl += contentType.toString();
              }
              dataUrl += ";base64,";
              dataUrl += data.toString("base64");
            }
            this.result = dataUrl;
            break;
          }
          case "text": {
            this.result = whatwgEncoding.decode(data, encoding);
            break;
          }
        }
        this.readyState = READY_STATES.DONE;
        this._fireProgressEvent("load");
        this._fireProgressEvent("loadend");
      });
    });
  }
}
setupForSimpleEventAccessors(FileReaderImpl.prototype, events);

exports.implementation = FileReaderImpl;

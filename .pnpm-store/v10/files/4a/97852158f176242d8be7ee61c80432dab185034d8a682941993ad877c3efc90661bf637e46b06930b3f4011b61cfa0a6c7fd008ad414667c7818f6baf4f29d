"use strict";

const whatwgEncoding = require("whatwg-encoding");
const MIMEType = require("whatwg-mimetype");
const DOMException = require("../generated/DOMException");
const EventTargetImpl = require("../events/EventTarget-impl").implementation;
const ProgressEvent = require("../generated/ProgressEvent");
const { setupForSimpleEventAccessors } = require("../helpers/create-event-accessor");
const { fireAnEvent } = require("../helpers/events");
const { copyToArrayBufferInNewRealm } = require("../helpers/binary-data");

const READY_STATES = Object.freeze({
  EMPTY: 0,
  LOADING: 1,
  DONE: 2
});

const events = ["loadstart", "progress", "load", "abort", "error", "loadend"];

class FileReaderImpl extends EventTargetImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this.error = null;
    this.readyState = READY_STATES.EMPTY;
    this.result = null;

    this._globalObject = globalObject;
    this._ownerDocument = globalObject.document;
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
    fireAnEvent(name, this, ProgressEvent, props);
  }

  _readFile(file, format, encoding) {
    if (this.readyState === READY_STATES.LOADING) {
      throw DOMException.create(this._globalObject, [
        "The object is in an invalid state.",
        "InvalidStateError"
      ]);
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
          case "binaryString": {
            this.result = data.toString("binary");
            break;
          }
          case "dataURL": {
            // Spec seems very unclear here; see https://github.com/w3c/FileAPI/issues/104.
            const contentType = MIMEType.parse(file.type) || "application/octet-stream";
            this.result = `data:${contentType};base64,${data.toString("base64")}`;
            break;
          }
          case "text": {
            this.result = whatwgEncoding.decode(data, encoding);
            break;
          }
          case "buffer":
          default: {
            this.result = copyToArrayBufferInNewRealm(data, this._globalObject);
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

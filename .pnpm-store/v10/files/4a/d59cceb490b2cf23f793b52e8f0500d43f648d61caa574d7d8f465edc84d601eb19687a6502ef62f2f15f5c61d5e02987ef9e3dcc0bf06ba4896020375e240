"use strict";
/**
 * trace-event - A library to create a trace of your node app per
 * Google's Trace Event format:
 * // JSSTYLED
 *      https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracer = void 0;
const stream_1 = require("stream");
function evCommon() {
    var hrtime = process.hrtime(); // [seconds, nanoseconds]
    var ts = hrtime[0] * 1000000 + Math.round(hrtime[1] / 1000); // microseconds
    return {
        ts,
        pid: process.pid,
        tid: process.pid // no meaningful tid for node.js
    };
}
class Tracer extends stream_1.Readable {
    constructor(opts = {}) {
        super();
        this.noStream = false;
        this.events = [];
        if (typeof opts !== "object") {
            throw new Error("Invalid options passed (must be an object)");
        }
        if (opts.parent != null && typeof opts.parent !== "object") {
            throw new Error("Invalid option (parent) passed (must be an object)");
        }
        if (opts.fields != null && typeof opts.fields !== "object") {
            throw new Error("Invalid option (fields) passed (must be an object)");
        }
        if (opts.objectMode != null &&
            (opts.objectMode !== true && opts.objectMode !== false)) {
            throw new Error("Invalid option (objectsMode) passed (must be a boolean)");
        }
        this.noStream = opts.noStream || false;
        this.parent = opts.parent;
        if (this.parent) {
            this.fields = Object.assign({}, opts.parent && opts.parent.fields);
        }
        else {
            this.fields = {};
        }
        if (opts.fields) {
            Object.assign(this.fields, opts.fields);
        }
        if (!this.fields.cat) {
            // trace-viewer *requires* `cat`, so let's have a fallback.
            this.fields.cat = "default";
        }
        else if (Array.isArray(this.fields.cat)) {
            this.fields.cat = this.fields.cat.join(",");
        }
        if (!this.fields.args) {
            // trace-viewer *requires* `args`, so let's have a fallback.
            this.fields.args = {};
        }
        if (this.parent) {
            // TODO: Not calling Readable ctor here. Does that cause probs?
            //      Probably if trying to pipe from the child.
            //      Might want a serpate TracerChild class for these guys.
            this._push = this.parent._push.bind(this.parent);
        }
        else {
            this._objectMode = Boolean(opts.objectMode);
            var streamOpts = { objectMode: this._objectMode };
            if (this._objectMode) {
                this._push = this.push;
            }
            else {
                this._push = this._pushString;
                streamOpts.encoding = "utf8";
            }
            stream_1.Readable.call(this, streamOpts);
        }
    }
    /**
     * If in no streamMode in order to flush out the trace
     * you need to call flush.
     */
    flush() {
        if (this.noStream === true) {
            for (const evt of this.events) {
                this._push(evt);
            }
            this._flush();
        }
    }
    _read(_) { }
    _pushString(ev) {
        var separator = "";
        if (!this.firstPush) {
            this.push("[");
            this.firstPush = true;
        }
        else {
            separator = ",\n";
        }
        this.push(separator + JSON.stringify(ev), "utf8");
    }
    _flush() {
        if (!this._objectMode) {
            this.push("]");
        }
    }
    child(fields) {
        return new Tracer({
            parent: this,
            fields: fields
        });
    }
    begin(fields) {
        return this.mkEventFunc("B")(fields);
    }
    end(fields) {
        return this.mkEventFunc("E")(fields);
    }
    completeEvent(fields) {
        return this.mkEventFunc("X")(fields);
    }
    instantEvent(fields) {
        return this.mkEventFunc("I")(fields);
    }
    mkEventFunc(ph) {
        return (fields) => {
            var ev = evCommon();
            // Assign the event phase.
            ev.ph = ph;
            if (fields) {
                if (typeof fields === "string") {
                    ev.name = fields;
                }
                else {
                    for (const k of Object.keys(fields)) {
                        if (k === "cat") {
                            ev.cat = fields.cat.join(",");
                        }
                        else {
                            ev[k] = fields[k];
                        }
                    }
                }
            }
            if (!this.noStream) {
                this._push(ev);
            }
            else {
                this.events.push(ev);
            }
        };
    }
}
exports.Tracer = Tracer;
/*
 * These correspond to the "Async events" in the Trace Events doc.
 *
 * Required fields:
 * - name
 * - id
 *
 * Optional fields:
 * - cat (array)
 * - args (object)
 * - TODO: stack fields, other optional fields?
 *
 * Dev Note: We don't explicitly assert that correct fields are
 * used for speed (premature optimization alert!).
 */

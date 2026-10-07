"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONP = void 0;
const polling_1 = require("./polling");
const qs = require("querystring");
const rDoubleSlashes = /\\\\n/g;
const rSlashes = /(\\)?\\n/g;
class JSONP extends polling_1.Polling {
    /**
     * JSON-P polling transport.
     */
    constructor(req) {
        super(req);
        this.head = "___eio[" + (req._query.j || "").replace(/[^0-9]/g, "") + "](";
        this.foot = ");";
    }
    onData(data) {
        // we leverage the qs module so that we get built-in DoS protection
        // and the fast alternative to decodeURIComponent
        data = qs.parse(data).d;
        if ("string" === typeof data) {
            // client will send already escaped newlines as \\\\n and newlines as \\n
            // \\n must be replaced with \n and \\\\n with \\n
            data = data.replace(rSlashes, function (match, slashes) {
                return slashes ? match : "\n";
            });
            super.onData(data.replace(rDoubleSlashes, "\\n"));
        }
    }
    doWrite(data, options, callback) {
        // we must output valid javascript, not valid json
        // see: http://timelessrepo.com/json-isnt-a-javascript-subset
        const js = JSON.stringify(data)
            .replace(/\u2028/g, "\\u2028")
            .replace(/\u2029/g, "\\u2029");
        // prepare response
        data = this.head + js + this.foot;
        super.doWrite(data, options, callback);
    }
}
exports.JSONP = JSONP;

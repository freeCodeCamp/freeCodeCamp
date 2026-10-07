"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sha256 = void 0;
var util_1 = require("@aws-crypto/util");
var constants_1 = require("./constants");
var util_locate_window_1 = require("@aws-sdk/util-locate-window");
var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.toHash = new Uint8Array(0);
        this.secret = secret;
        this.reset();
    }
    Sha256.prototype.update = function (data) {
        if ((0, util_1.isEmptyData)(data)) {
            return;
        }
        var update = (0, util_1.convertToBuffer)(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
    };
    Sha256.prototype.digest = function () {
        var _this = this;
        if (this.key) {
            return this.key.then(function (key) {
                return (0, util_locate_window_1.locateWindow)()
                    .crypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, key, _this.toHash)
                    .then(function (data) { return new Uint8Array(data); });
            });
        }
        if ((0, util_1.isEmptyData)(this.toHash)) {
            return Promise.resolve(constants_1.EMPTY_DATA_SHA_256);
        }
        return Promise.resolve()
            .then(function () {
            return (0, util_locate_window_1.locateWindow)().crypto.subtle.digest(constants_1.SHA_256_HASH, _this.toHash);
        })
            .then(function (data) { return Promise.resolve(new Uint8Array(data)); });
    };
    Sha256.prototype.reset = function () {
        var _this = this;
        this.toHash = new Uint8Array(0);
        if (this.secret && this.secret !== void 0) {
            this.key = new Promise(function (resolve, reject) {
                (0, util_locate_window_1.locateWindow)()
                    .crypto.subtle.importKey("raw", (0, util_1.convertToBuffer)(_this.secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"])
                    .then(resolve, reject);
            });
            this.key.catch(function () { });
        }
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
//# sourceMappingURL=webCryptoSha256.js.map
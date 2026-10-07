"use strict";
/**
 * Contains utility methods using 'fetch'.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFileSizeAsync = exports.fetchFileAsync = exports.fetchIsAvailable = void 0;
var api_error_1 = require("../core/api_error");
exports.fetchIsAvailable = (typeof (fetch) !== "undefined" && fetch !== null);
function fetchFileAsync(p, type, cb) {
    var request;
    try {
        request = fetch(p);
    }
    catch (e) {
        // XXX: fetch will throw a TypeError if the URL has credentials in it
        return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, e.message));
    }
    request
        .then(function (res) {
        if (!res.ok) {
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "fetch error: response returned code ".concat(res.status)));
        }
        else {
            switch (type) {
                case 'buffer':
                    res.arrayBuffer()
                        .then(function (buf) { return cb(null, Buffer.from(buf)); })
                        .catch(function (err) { return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, err.message)); });
                    break;
                case 'json':
                    res.json()
                        .then(function (json) { return cb(null, json); })
                        .catch(function (err) { return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, err.message)); });
                    break;
                default:
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid download type: " + type));
            }
        }
    })
        .catch(function (err) { return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, err.message)); });
}
exports.fetchFileAsync = fetchFileAsync;
/**
 * Asynchronously retrieves the size of the given file in bytes.
 * @hidden
 */
function fetchFileSizeAsync(p, cb) {
    fetch(p, { method: 'HEAD' })
        .then(function (res) {
        if (!res.ok) {
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "fetch HEAD error: response returned code ".concat(res.status)));
        }
        else {
            return cb(null, parseInt(res.headers.get('Content-Length') || '-1', 10));
        }
    })
        .catch(function (err) { return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, err.message)); });
}
exports.fetchFileSizeAsync = fetchFileSizeAsync;
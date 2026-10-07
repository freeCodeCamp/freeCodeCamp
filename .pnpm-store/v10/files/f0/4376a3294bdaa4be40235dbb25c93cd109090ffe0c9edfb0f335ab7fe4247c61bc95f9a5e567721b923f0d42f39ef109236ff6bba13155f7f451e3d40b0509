"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexedDBStore = exports.IndexedDBRWTransaction = exports.IndexedDBROTransaction = void 0;
var key_value_filesystem_1 = require("../generic/key_value_filesystem");
var api_error_1 = require("../core/api_error");
var global_1 = require("../core/global");
var util_1 = require("../core/util");
/**
 * Get the indexedDB constructor for the current browser.
 * @hidden
 */
var indexedDB = global_1.default.indexedDB ||
    global_1.default.mozIndexedDB ||
    global_1.default.webkitIndexedDB ||
    global_1.default.msIndexedDB;
/**
 * Converts a DOMException or a DOMError from an IndexedDB event into a
 * standardized BrowserFS API error.
 * @hidden
 */
function convertError(e, message) {
    if (message === void 0) { message = e.toString(); }
    switch (e.name) {
        case "NotFoundError":
            return new api_error_1.ApiError(api_error_1.ErrorCode.ENOENT, message);
        case "QuotaExceededError":
            return new api_error_1.ApiError(api_error_1.ErrorCode.ENOSPC, message);
        default:
            // The rest do not seem to map cleanly to standard error codes.
            return new api_error_1.ApiError(api_error_1.ErrorCode.EIO, message);
    }
}
/**
 * Produces a new onerror handler for IDB. Our errors are always fatal, so we
 * handle them generically: Call the user-supplied callback with a translated
 * version of the error, and let the error bubble up.
 * @hidden
 */
function onErrorHandler(cb, code, message) {
    if (code === void 0) { code = api_error_1.ErrorCode.EIO; }
    if (message === void 0) { message = null; }
    return function (e) {
        // Prevent the error from canceling the transaction.
        e.preventDefault();
        cb(new api_error_1.ApiError(code, message !== null ? message : undefined));
    };
}
/**
 * @hidden
 */
var IndexedDBROTransaction = /** @class */ (function () {
    function IndexedDBROTransaction(tx, store) {
        this.tx = tx;
        this.store = store;
    }
    IndexedDBROTransaction.prototype.get = function (key, cb) {
        try {
            var r = this.store.get(key);
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                // IDB returns the value 'undefined' when you try to get keys that
                // don't exist. The caller expects this behavior.
                var result = event.target.result;
                if (result === undefined) {
                    cb(null, result);
                }
                else {
                    // IDB data is stored as an ArrayBuffer
                    cb(null, (0, util_1.arrayBuffer2Buffer)(result));
                }
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    return IndexedDBROTransaction;
}());
exports.IndexedDBROTransaction = IndexedDBROTransaction;
/**
 * @hidden
 */
var IndexedDBRWTransaction = /** @class */ (function (_super) {
    __extends(IndexedDBRWTransaction, _super);
    function IndexedDBRWTransaction(tx, store) {
        return _super.call(this, tx, store) || this;
    }
    IndexedDBRWTransaction.prototype.put = function (key, data, overwrite, cb) {
        try {
            var arraybuffer = (0, util_1.buffer2ArrayBuffer)(data);
            var r = void 0;
            // Note: 'add' will never overwrite an existing key.
            r = overwrite ? this.store.put(arraybuffer, key) : this.store.add(arraybuffer, key);
            // XXX: NEED TO RETURN FALSE WHEN ADD HAS A KEY CONFLICT. NO ERROR.
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                cb(null, true);
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBRWTransaction.prototype.del = function (key, cb) {
        try {
            // NOTE: IE8 has a bug with identifiers named 'delete' unless used as a string
            // like this.
            // http://stackoverflow.com/a/26479152
            var r = this.store['delete'](key);
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                cb();
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBRWTransaction.prototype.commit = function (cb) {
        // Return to the event loop to commit the transaction.
        setTimeout(cb, 0);
    };
    IndexedDBRWTransaction.prototype.abort = function (cb) {
        var _e = null;
        try {
            this.tx.abort();
        }
        catch (e) {
            _e = convertError(e);
        }
        finally {
            cb(_e);
        }
    };
    return IndexedDBRWTransaction;
}(IndexedDBROTransaction));
exports.IndexedDBRWTransaction = IndexedDBRWTransaction;
var IndexedDBStore = /** @class */ (function () {
    function IndexedDBStore(db, storeName) {
        this.db = db;
        this.storeName = storeName;
    }
    IndexedDBStore.Create = function (storeName, cb) {
        var openReq = indexedDB.open(storeName, 1);
        openReq.onupgradeneeded = function (event) {
            var db = event.target.result;
            // Huh. This should never happen; we're at version 1. Why does another
            // database exist?
            if (db.objectStoreNames.contains(storeName)) {
                db.deleteObjectStore(storeName);
            }
            db.createObjectStore(storeName);
        };
        openReq.onsuccess = function (event) {
            cb(null, new IndexedDBStore(event.target.result, storeName));
        };
        openReq.onerror = onErrorHandler(cb, api_error_1.ErrorCode.EACCES);
    };
    IndexedDBStore.prototype.name = function () {
        return IndexedDBFileSystem.Name + " - " + this.storeName;
    };
    IndexedDBStore.prototype.clear = function (cb) {
        try {
            var tx = this.db.transaction(this.storeName, 'readwrite'), objectStore = tx.objectStore(this.storeName), r = objectStore.clear();
            r.onsuccess = function (event) {
                // Use setTimeout to commit transaction.
                setTimeout(cb, 0);
            };
            r.onerror = onErrorHandler(cb);
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBStore.prototype.beginTransaction = function (type) {
        if (type === void 0) { type = 'readonly'; }
        var tx = this.db.transaction(this.storeName, type), objectStore = tx.objectStore(this.storeName);
        if (type === 'readwrite') {
            return new IndexedDBRWTransaction(tx, objectStore);
        }
        else if (type === 'readonly') {
            return new IndexedDBROTransaction(tx, objectStore);
        }
        else {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid transaction type.');
        }
    };
    return IndexedDBStore;
}());
exports.IndexedDBStore = IndexedDBStore;
/**
 * A file system that uses the IndexedDB key value file system.
 */
var IndexedDBFileSystem = /** @class */ (function (_super) {
    __extends(IndexedDBFileSystem, _super);
    function IndexedDBFileSystem(cacheSize) {
        return _super.call(this, cacheSize) || this;
    }
    /**
     * Constructs an IndexedDB file system with the given options.
     */
    IndexedDBFileSystem.Create = function (opts, cb) {
        IndexedDBStore.Create(opts.storeName ? opts.storeName : 'browserfs', function (e, store) {
            if (store) {
                var idbfs_1 = new IndexedDBFileSystem(typeof (opts.cacheSize) === 'number' ? opts.cacheSize : 100);
                idbfs_1.init(store, function (e) {
                    if (e) {
                        cb(e);
                    }
                    else {
                        cb(null, idbfs_1);
                    }
                });
            }
            else {
                cb(e);
            }
        });
    };
    IndexedDBFileSystem.isAvailable = function () {
        // In Safari's private browsing mode, indexedDB.open returns NULL.
        // In Firefox, it throws an exception.
        // In Chrome, it "just works", and clears the database when you leave the page.
        // Untested: Opera, IE.
        try {
            return typeof indexedDB !== 'undefined' && null !== indexedDB.open("__browserfs_test__");
        }
        catch (e) {
            return false;
        }
    };
    IndexedDBFileSystem.Name = "IndexedDB";
    IndexedDBFileSystem.Options = {
        storeName: {
            type: "string",
            optional: true,
            description: "The name of this file system. You can have multiple IndexedDB file systems operating at once, but each must have a different name."
        },
        cacheSize: {
            type: "number",
            optional: true,
            description: "The size of the inode cache. Defaults to 100. A size of 0 or below disables caching."
        }
    };
    return IndexedDBFileSystem;
}(key_value_filesystem_1.AsyncKeyValueFileSystem));
exports.default = IndexedDBFileSystem;
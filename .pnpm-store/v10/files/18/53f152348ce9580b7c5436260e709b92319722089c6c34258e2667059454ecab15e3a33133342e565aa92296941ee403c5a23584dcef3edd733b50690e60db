"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWatcher = void 0;
var EventEmitter = require('events');
var FileWatcher = /** @class */ (function () {
    function FileWatcher() {
        this.watchEntries = [];
    }
    FileWatcher.prototype.triggerWatch = function (filename, event, newStats) {
        var _this = this;
        var validEntries = this.watchEntries.filter(function (entry) {
            if (entry.filename === filename) {
                return true;
            }
            if (entry.recursive && filename.startsWith(entry.filename)) {
                return true;
            }
            return false;
        });
        validEntries.forEach(function (entry) {
            if (entry.callback) {
                entry.callback(event, filename);
            }
            var newStatsArg = newStats || entry.curr;
            var oldStatsArg = entry.curr || newStats;
            if (newStatsArg && oldStatsArg && entry.fileCallback) {
                entry.fileCallback(newStatsArg, oldStatsArg);
                entry.curr = newStatsArg;
            }
            entry.watcher.emit(event);
            if (!entry.persistent) {
                _this.removeEntry(entry);
            }
        });
    };
    FileWatcher.prototype.watch = function (filename, arg2, listener) {
        var _this = this;
        if (listener === void 0) { listener = (function () { }); }
        var watcher = new EventEmitter();
        var watchEntry = {
            filename: filename,
            watcher: watcher,
        };
        watcher.close = function () {
            _this.removeEntry(watchEntry);
        };
        if (typeof arg2 === 'object') {
            watchEntry.recursive = arg2.recursive;
            watchEntry.persistent = arg2.persistent === undefined ? true : arg2.persistent;
            watchEntry.callback = listener;
        }
        else if (typeof arg2 === 'function') {
            watchEntry.callback = arg2;
        }
        this.watchEntries.push(watchEntry);
        return watchEntry.watcher;
    };
    FileWatcher.prototype.watchFile = function (curr, filename, arg2, listener) {
        var _this = this;
        if (listener === void 0) { listener = (function () { }); }
        var watcher = new EventEmitter();
        var watchEntry = {
            filename: filename,
            watcher: watcher,
            curr: curr,
        };
        watcher.close = function () {
            _this.removeEntry(watchEntry);
        };
        if (typeof arg2 === 'object') {
            watchEntry.recursive = arg2.recursive;
            watchEntry.persistent = arg2.persistent === undefined ? true : arg2.persistent;
            watchEntry.fileCallback = listener;
        }
        else if (typeof arg2 === 'function') {
            watchEntry.fileCallback = arg2;
        }
        this.watchEntries.push(watchEntry);
        return watchEntry.watcher;
    };
    FileWatcher.prototype.unwatchFile = function (filename, listener) {
        this.watchEntries = this.watchEntries.filter(function (entry) { return entry.filename !== filename && entry.fileCallback !== listener; });
    };
    FileWatcher.prototype.removeEntry = function (watchEntry) {
        this.watchEntries = this.watchEntries.filter(function (en) { return en !== watchEntry; });
    };
    return FileWatcher;
}());
exports.FileWatcher = FileWatcher;
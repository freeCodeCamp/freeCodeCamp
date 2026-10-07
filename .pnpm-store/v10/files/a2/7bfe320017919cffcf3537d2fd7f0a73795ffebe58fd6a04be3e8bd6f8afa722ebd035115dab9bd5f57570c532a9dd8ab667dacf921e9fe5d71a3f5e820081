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
exports.AsyncKeyValueFileSystem = exports.AsyncKeyValueFile = exports.SyncKeyValueFileSystem = exports.SyncKeyValueFile = exports.SimpleSyncRWTransaction = void 0;
var file_system_1 = require("../core/file_system");
var api_error_1 = require("../core/api_error");
var node_fs_stats_1 = require("../core/node_fs_stats");
var path = require("path");
var inode_1 = require("../generic/inode");
var preload_file_1 = require("../generic/preload_file");
var util_1 = require("../core/util");
/**
 * @hidden
 */
var ROOT_NODE_ID = "/";
/**
 * @hidden
 */
var emptyDirNode = null;
/**
 * Returns an empty directory node.
 * @hidden
 */
function getEmptyDirNode() {
    if (emptyDirNode) {
        return emptyDirNode;
    }
    return emptyDirNode = Buffer.from("{}");
}
/**
 * Generates a random ID.
 * @hidden
 */
function GenerateRandomID() {
    // From http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
/**
 * Helper function. Checks if 'e' is defined. If so, it triggers the callback
 * with 'e' and returns false. Otherwise, returns true.
 * @hidden
 */
function noError(e, cb) {
    if (e) {
        cb(e);
        return false;
    }
    return true;
}
/**
 * Helper function. Checks if 'e' is defined. If so, it aborts the transaction,
 * triggers the callback with 'e', and returns false. Otherwise, returns true.
 * @hidden
 */
function noErrorTx(e, tx, cb) {
    if (e) {
        tx.abort(function () {
            cb(e);
        });
        return false;
    }
    return true;
}
var LRUNode = /** @class */ (function () {
    function LRUNode(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    return LRUNode;
}());
// Adapted from https://chrisrng.svbtle.com/lru-cache-in-javascript
var LRUCache = /** @class */ (function () {
    function LRUCache(limit) {
        this.limit = limit;
        this.size = 0;
        this.map = {};
        this.head = null;
        this.tail = null;
    }
    /**
     * Change or add a new value in the cache
     * We overwrite the entry if it already exists
     */
    LRUCache.prototype.set = function (key, value) {
        var node = new LRUNode(key, value);
        if (this.map[key]) {
            this.map[key].value = node.value;
            this.remove(node.key);
        }
        else {
            if (this.size >= this.limit) {
                delete this.map[this.tail.key];
                this.size--;
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        }
        this.setHead(node);
    };
    /* Retrieve a single entry from the cache */
    LRUCache.prototype.get = function (key) {
        if (this.map[key]) {
            var value = this.map[key].value;
            var node = new LRUNode(key, value);
            this.remove(key);
            this.setHead(node);
            return value;
        }
        else {
            return null;
        }
    };
    /* Remove a single entry from the cache */
    LRUCache.prototype.remove = function (key) {
        var node = this.map[key];
        if (!node) {
            return;
        }
        if (node.prev !== null) {
            node.prev.next = node.next;
        }
        else {
            this.head = node.next;
        }
        if (node.next !== null) {
            node.next.prev = node.prev;
        }
        else {
            this.tail = node.prev;
        }
        delete this.map[key];
        this.size--;
    };
    /* Resets the entire cache - Argument limit is optional to be reset */
    LRUCache.prototype.removeAll = function () {
        this.size = 0;
        this.map = {};
        this.head = null;
        this.tail = null;
    };
    LRUCache.prototype.setHead = function (node) {
        node.next = this.head;
        node.prev = null;
        if (this.head !== null) {
            this.head.prev = node;
        }
        this.head = node;
        if (this.tail === null) {
            this.tail = node;
        }
        this.size++;
        this.map[node.key] = node;
    };
    return LRUCache;
}());
/**
 * A simple RW transaction for simple synchronous key-value stores.
 */
var SimpleSyncRWTransaction = /** @class */ (function () {
    function SimpleSyncRWTransaction(store) {
        this.store = store;
        /**
         * Stores data in the keys we modify prior to modifying them.
         * Allows us to roll back commits.
         */
        this.originalData = {};
        /**
         * List of keys modified in this transaction, if any.
         */
        this.modifiedKeys = [];
    }
    SimpleSyncRWTransaction.prototype.get = function (key) {
        var val = this.store.get(key);
        this.stashOldValue(key, val);
        return val;
    };
    SimpleSyncRWTransaction.prototype.put = function (key, data, overwrite) {
        this.markModified(key);
        return this.store.put(key, data, overwrite);
    };
    SimpleSyncRWTransaction.prototype.del = function (key) {
        this.markModified(key);
        this.store.del(key);
    };
    SimpleSyncRWTransaction.prototype.commit = function () { };
    SimpleSyncRWTransaction.prototype.abort = function () {
        // Rollback old values.
        for (var _i = 0, _a = this.modifiedKeys; _i < _a.length; _i++) {
            var key = _a[_i];
            var value = this.originalData[key];
            if (!value) {
                // Key didn't exist.
                this.store.del(key);
            }
            else {
                // Key existed. Store old value.
                this.store.put(key, value, true);
            }
        }
    };
    /**
     * Stashes given key value pair into `originalData` if it doesn't already
     * exist. Allows us to stash values the program is requesting anyway to
     * prevent needless `get` requests if the program modifies the data later
     * on during the transaction.
     */
    SimpleSyncRWTransaction.prototype.stashOldValue = function (key, value) {
        // Keep only the earliest value in the transaction.
        if (!this.originalData.hasOwnProperty(key)) {
            this.originalData[key] = value;
        }
    };
    /**
     * Marks the given key as modified, and stashes its value if it has not been
     * stashed already.
     */
    SimpleSyncRWTransaction.prototype.markModified = function (key) {
        if (this.modifiedKeys.indexOf(key) === -1) {
            this.modifiedKeys.push(key);
            if (!this.originalData.hasOwnProperty(key)) {
                this.originalData[key] = this.store.get(key);
            }
        }
    };
    return SimpleSyncRWTransaction;
}());
exports.SimpleSyncRWTransaction = SimpleSyncRWTransaction;
var SyncKeyValueFile = /** @class */ (function (_super) {
    __extends(SyncKeyValueFile, _super);
    function SyncKeyValueFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    SyncKeyValueFile.prototype.syncSync = function () {
        if (this.isDirty()) {
            this._fs._syncSync(this.getPath(), this.getBuffer(), this.getStats());
            this.resetDirty();
        }
    };
    SyncKeyValueFile.prototype.closeSync = function () {
        this.syncSync();
    };
    return SyncKeyValueFile;
}(preload_file_1.default));
exports.SyncKeyValueFile = SyncKeyValueFile;
/**
 * A "Synchronous key-value file system". Stores data to/retrieves data from an
 * underlying key-value store.
 *
 * We use a unique ID for each node in the file system. The root node has a
 * fixed ID.
 * @todo Introduce Node ID caching.
 * @todo Check modes.
 */
var SyncKeyValueFileSystem = /** @class */ (function (_super) {
    __extends(SyncKeyValueFileSystem, _super);
    function SyncKeyValueFileSystem(options) {
        var _this = _super.call(this) || this;
        _this.store = options.store;
        // INVARIANT: Ensure that the root exists.
        _this.makeRootDirectory();
        return _this;
    }
    SyncKeyValueFileSystem.isAvailable = function () { return true; };
    SyncKeyValueFileSystem.prototype.getName = function () { return this.store.name(); };
    SyncKeyValueFileSystem.prototype.isReadOnly = function () { return false; };
    SyncKeyValueFileSystem.prototype.supportsSymlinks = function () { return false; };
    SyncKeyValueFileSystem.prototype.supportsProps = function () { return false; };
    SyncKeyValueFileSystem.prototype.supportsSynch = function () { return true; };
    /**
     * Delete all contents stored in the file system.
     */
    SyncKeyValueFileSystem.prototype.empty = function () {
        this.store.clear();
        // INVARIANT: Root always exists.
        this.makeRootDirectory();
    };
    SyncKeyValueFileSystem.prototype.renameSync = function (oldPath, newPath) {
        var tx = this.store.beginTransaction('readwrite'), oldParent = path.dirname(oldPath), oldName = path.basename(oldPath), newParent = path.dirname(newPath), newName = path.basename(newPath), 
        // Remove oldPath from parent's directory listing.
        oldDirNode = this.findINode(tx, oldParent), oldDirList = this.getDirListing(tx, oldParent, oldDirNode);
        if (!oldDirList[oldName]) {
            throw api_error_1.ApiError.ENOENT(oldPath);
        }
        var nodeId = oldDirList[oldName];
        delete oldDirList[oldName];
        // Invariant: Can't move a folder inside itself.
        // This funny little hack ensures that the check passes only if oldPath
        // is a subpath of newParent. We append '/' to avoid matching folders that
        // are a substring of the bottom-most folder in the path.
        if ((newParent + '/').indexOf(oldPath + '/') === 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EBUSY, oldParent);
        }
        // Add newPath to parent's directory listing.
        var newDirNode, newDirList;
        if (newParent === oldParent) {
            // Prevent us from re-grabbing the same directory listing, which still
            // contains oldName.
            newDirNode = oldDirNode;
            newDirList = oldDirList;
        }
        else {
            newDirNode = this.findINode(tx, newParent);
            newDirList = this.getDirListing(tx, newParent, newDirNode);
        }
        if (newDirList[newName]) {
            // If it's a file, delete it.
            var newNameNode = this.getINode(tx, newPath, newDirList[newName]);
            if (newNameNode.isFile()) {
                try {
                    tx.del(newNameNode.id);
                    tx.del(newDirList[newName]);
                }
                catch (e) {
                    tx.abort();
                    throw e;
                }
            }
            else {
                // If it's a directory, throw a permissions error.
                throw api_error_1.ApiError.EPERM(newPath);
            }
        }
        newDirList[newName] = nodeId;
        // Commit the two changed directory listings.
        try {
            tx.put(oldDirNode.id, Buffer.from(JSON.stringify(oldDirList)), true);
            tx.put(newDirNode.id, Buffer.from(JSON.stringify(newDirList)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
    };
    SyncKeyValueFileSystem.prototype.statSync = function (p, isLstat) {
        // Get the inode to the item, convert it into a Stats object.
        return this.findINode(this.store.beginTransaction('readonly'), p).toStats();
    };
    SyncKeyValueFileSystem.prototype.createFileSync = function (p, flag, mode) {
        var tx = this.store.beginTransaction('readwrite'), data = (0, util_1.emptyBuffer)(), newFile = this.commitNewFile(tx, p, node_fs_stats_1.FileType.FILE, mode, data);
        // Open the file.
        return new SyncKeyValueFile(this, p, flag, newFile.toStats(), data);
    };
    SyncKeyValueFileSystem.prototype.openFileSync = function (p, flag) {
        var tx = this.store.beginTransaction('readonly'), node = this.findINode(tx, p), data = tx.get(node.id);
        if (data === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return new SyncKeyValueFile(this, p, flag, node.toStats(), data);
    };
    SyncKeyValueFileSystem.prototype.unlinkSync = function (p) {
        this.removeEntry(p, false);
    };
    SyncKeyValueFileSystem.prototype.rmdirSync = function (p) {
        // Check first if directory is empty.
        if (this.readdirSync(p).length > 0) {
            throw api_error_1.ApiError.ENOTEMPTY(p);
        }
        else {
            this.removeEntry(p, true);
        }
    };
    SyncKeyValueFileSystem.prototype.mkdirSync = function (p, mode) {
        var tx = this.store.beginTransaction('readwrite'), data = Buffer.from('{}');
        this.commitNewFile(tx, p, node_fs_stats_1.FileType.DIRECTORY, mode, data);
    };
    SyncKeyValueFileSystem.prototype.readdirSync = function (p) {
        var tx = this.store.beginTransaction('readonly');
        return Object.keys(this.getDirListing(tx, p, this.findINode(tx, p)));
    };
    SyncKeyValueFileSystem.prototype._syncSync = function (p, data, stats) {
        // @todo Ensure mtime updates properly, and use that to determine if a data
        //       update is required.
        var tx = this.store.beginTransaction('readwrite'), 
        // We use the _findInode helper because we actually need the INode id.
        fileInodeId = this._findINode(tx, path.dirname(p), path.basename(p)), fileInode = this.getINode(tx, p, fileInodeId), inodeChanged = fileInode.update(stats);
        try {
            // Sync data.
            tx.put(fileInode.id, data, true);
            // Sync metadata.
            if (inodeChanged) {
                tx.put(fileInodeId, fileInode.toBuffer(), true);
            }
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
    };
    /**
     * Checks if the root directory exists. Creates it if it doesn't.
     */
    SyncKeyValueFileSystem.prototype.makeRootDirectory = function () {
        var tx = this.store.beginTransaction('readwrite');
        if (tx.get(ROOT_NODE_ID) === undefined) {
            // Create new inode.
            var currTime = (new Date()).getTime(), 
            // Mode 0666
            dirInode = new inode_1.default(GenerateRandomID(), 4096, 511 | node_fs_stats_1.FileType.DIRECTORY, currTime, currTime, currTime);
            // If the root doesn't exist, the first random ID shouldn't exist,
            // either.
            tx.put(dirInode.id, getEmptyDirNode(), false);
            tx.put(ROOT_NODE_ID, dirInode.toBuffer(), false);
            tx.commit();
        }
    };
    /**
     * Helper function for findINode.
     * @param parent The parent directory of the file we are attempting to find.
     * @param filename The filename of the inode we are attempting to find, minus
     *   the parent.
     * @return string The ID of the file's inode in the file system.
     */
    SyncKeyValueFileSystem.prototype._findINode = function (tx, parent, filename) {
        var _this = this;
        var readDirectory = function (inode) {
            // Get the root's directory listing.
            var dirList = _this.getDirListing(tx, parent, inode);
            // Get the file's ID.
            if (dirList[filename]) {
                return dirList[filename];
            }
            else {
                throw api_error_1.ApiError.ENOENT(path.resolve(parent, filename));
            }
        };
        if (parent === '/') {
            if (filename === '') {
                // BASE CASE #1: Return the root's ID.
                return ROOT_NODE_ID;
            }
            else {
                // BASE CASE #2: Find the item in the root ndoe.
                return readDirectory(this.getINode(tx, parent, ROOT_NODE_ID));
            }
        }
        else {
            return readDirectory(this.getINode(tx, parent + path.sep + filename, this._findINode(tx, path.dirname(parent), path.basename(parent))));
        }
    };
    /**
     * Finds the Inode of the given path.
     * @param p The path to look up.
     * @return The Inode of the path p.
     * @todo memoize/cache
     */
    SyncKeyValueFileSystem.prototype.findINode = function (tx, p) {
        return this.getINode(tx, p, this._findINode(tx, path.dirname(p), path.basename(p)));
    };
    /**
     * Given the ID of a node, retrieves the corresponding Inode.
     * @param tx The transaction to use.
     * @param p The corresponding path to the file (used for error messages).
     * @param id The ID to look up.
     */
    SyncKeyValueFileSystem.prototype.getINode = function (tx, p, id) {
        var inode = tx.get(id);
        if (inode === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return inode_1.default.fromBuffer(inode);
    };
    /**
     * Given the Inode of a directory, retrieves the corresponding directory
     * listing.
     */
    SyncKeyValueFileSystem.prototype.getDirListing = function (tx, p, inode) {
        if (!inode.isDirectory()) {
            throw api_error_1.ApiError.ENOTDIR(p);
        }
        var data = tx.get(inode.id);
        if (data === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return JSON.parse(data.toString());
    };
    /**
     * Creates a new node under a random ID. Retries 5 times before giving up in
     * the exceedingly unlikely chance that we try to reuse a random GUID.
     * @return The GUID that the data was stored under.
     */
    SyncKeyValueFileSystem.prototype.addNewNode = function (tx, data) {
        var retries = 0;
        var currId;
        while (retries < 5) {
            try {
                currId = GenerateRandomID();
                tx.put(currId, data, false);
                return currId;
            }
            catch (e) {
                // Ignore and reroll.
            }
        }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, 'Unable to commit data to key-value store.');
    };
    /**
     * Commits a new file (well, a FILE or a DIRECTORY) to the file system with
     * the given mode.
     * Note: This will commit the transaction.
     * @param p The path to the new file.
     * @param type The type of the new file.
     * @param mode The mode to create the new file with.
     * @param data The data to store at the file's data node.
     * @return The Inode for the new file.
     */
    SyncKeyValueFileSystem.prototype.commitNewFile = function (tx, p, type, mode, data) {
        var parentDir = path.dirname(p), fname = path.basename(p), parentNode = this.findINode(tx, parentDir), dirListing = this.getDirListing(tx, parentDir, parentNode), currTime = (new Date()).getTime();
        // Invariant: The root always exists.
        // If we don't check this prior to taking steps below, we will create a
        // file with name '' in root should p == '/'.
        if (p === '/') {
            throw api_error_1.ApiError.EEXIST(p);
        }
        // Check if file already exists.
        if (dirListing[fname]) {
            throw api_error_1.ApiError.EEXIST(p);
        }
        var fileNode;
        try {
            // Commit data.
            var dataId = this.addNewNode(tx, data);
            fileNode = new inode_1.default(dataId, data.length, mode | type, currTime, currTime, currTime);
            // Commit file node.
            var fileNodeId = this.addNewNode(tx, fileNode.toBuffer());
            // Update and commit parent directory listing.
            dirListing[fname] = fileNodeId;
            tx.put(parentNode.id, Buffer.from(JSON.stringify(dirListing)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
        return fileNode;
    };
    /**
     * Remove all traces of the given path from the file system.
     * @param p The path to remove from the file system.
     * @param isDir Does the path belong to a directory, or a file?
     * @todo Update mtime.
     */
    SyncKeyValueFileSystem.prototype.removeEntry = function (p, isDir) {
        var tx = this.store.beginTransaction('readwrite'), parent = path.dirname(p), parentNode = this.findINode(tx, parent), parentListing = this.getDirListing(tx, parent, parentNode), fileName = path.basename(p);
        if (!parentListing[fileName]) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        // Remove from directory listing of parent.
        var fileNodeId = parentListing[fileName];
        delete parentListing[fileName];
        // Get file inode.
        var fileNode = this.getINode(tx, p, fileNodeId);
        if (!isDir && fileNode.isDirectory()) {
            throw api_error_1.ApiError.EISDIR(p);
        }
        else if (isDir && !fileNode.isDirectory()) {
            throw api_error_1.ApiError.ENOTDIR(p);
        }
        try {
            // Delete data.
            tx.del(fileNode.id);
            // Delete node.
            tx.del(fileNodeId);
            // Update directory listing.
            tx.put(parentNode.id, Buffer.from(JSON.stringify(parentListing)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        // Success.
        tx.commit();
    };
    return SyncKeyValueFileSystem;
}(file_system_1.SynchronousFileSystem));
exports.SyncKeyValueFileSystem = SyncKeyValueFileSystem;
var AsyncKeyValueFile = /** @class */ (function (_super) {
    __extends(AsyncKeyValueFile, _super);
    function AsyncKeyValueFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    AsyncKeyValueFile.prototype.sync = function (cb) {
        var _this = this;
        if (this.isDirty()) {
            this._fs._sync(this.getPath(), this.getBuffer(), this.getStats(), function (e) {
                if (!e) {
                    _this.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    AsyncKeyValueFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return AsyncKeyValueFile;
}(preload_file_1.default));
exports.AsyncKeyValueFile = AsyncKeyValueFile;
/**
 * An "Asynchronous key-value file system". Stores data to/retrieves data from
 * an underlying asynchronous key-value store.
 */
var AsyncKeyValueFileSystem = /** @class */ (function (_super) {
    __extends(AsyncKeyValueFileSystem, _super);
    function AsyncKeyValueFileSystem(cacheSize) {
        var _this = _super.call(this) || this;
        _this._cache = null;
        if (cacheSize > 0) {
            _this._cache = new LRUCache(cacheSize);
        }
        return _this;
    }
    AsyncKeyValueFileSystem.isAvailable = function () { return true; };
    /**
     * Initializes the file system. Typically called by subclasses' async
     * constructors.
     */
    AsyncKeyValueFileSystem.prototype.init = function (store, cb) {
        this.store = store;
        // INVARIANT: Ensure that the root exists.
        this.makeRootDirectory(cb);
    };
    AsyncKeyValueFileSystem.prototype.getName = function () { return this.store.name(); };
    AsyncKeyValueFileSystem.prototype.isReadOnly = function () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsSymlinks = function () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsProps = function () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsSynch = function () { return false; };
    /**
     * Delete all contents stored in the file system.
     */
    AsyncKeyValueFileSystem.prototype.empty = function (cb) {
        var _this = this;
        if (this._cache) {
            this._cache.removeAll();
        }
        this.store.clear(function (e) {
            if (noError(e, cb)) {
                // INVARIANT: Root always exists.
                _this.makeRootDirectory(cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        // TODO: Make rename compatible with the cache.
        if (this._cache) {
            // Clear and disable cache during renaming process.
            var c_1 = this._cache;
            this._cache = null;
            c_1.removeAll();
            var oldCb_1 = cb;
            cb = function (e) {
                // Restore empty cache.
                _this._cache = c_1;
                oldCb_1(e);
            };
        }
        var tx = this.store.beginTransaction('readwrite');
        var oldParent = path.dirname(oldPath), oldName = path.basename(oldPath);
        var newParent = path.dirname(newPath), newName = path.basename(newPath);
        var inodes = {};
        var lists = {};
        var errorOccurred = false;
        // Invariant: Can't move a folder inside itself.
        // This funny little hack ensures that the check passes only if oldPath
        // is a subpath of newParent. We append '/' to avoid matching folders that
        // are a substring of the bottom-most folder in the path.
        if ((newParent + '/').indexOf(oldPath + '/') === 0) {
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EBUSY, oldParent));
        }
        /**
         * Responsible for Phase 2 of the rename operation: Modifying and
         * committing the directory listings. Called once we have successfully
         * retrieved both the old and new parent's inodes and listings.
         */
        var theOleSwitcharoo = function () {
            // Sanity check: Ensure both paths are present, and no error has occurred.
            if (errorOccurred || !lists.hasOwnProperty(oldParent) || !lists.hasOwnProperty(newParent)) {
                return;
            }
            var oldParentList = lists[oldParent], oldParentINode = inodes[oldParent], newParentList = lists[newParent], newParentINode = inodes[newParent];
            // Delete file from old parent.
            if (!oldParentList[oldName]) {
                cb(api_error_1.ApiError.ENOENT(oldPath));
            }
            else {
                var fileId_1 = oldParentList[oldName];
                delete oldParentList[oldName];
                // Finishes off the renaming process by adding the file to the new
                // parent.
                var completeRename_1 = function () {
                    newParentList[newName] = fileId_1;
                    // Commit old parent's list.
                    tx.put(oldParentINode.id, Buffer.from(JSON.stringify(oldParentList)), true, function (e) {
                        if (noErrorTx(e, tx, cb)) {
                            if (oldParent === newParent) {
                                // DONE!
                                tx.commit(cb);
                            }
                            else {
                                // Commit new parent's list.
                                tx.put(newParentINode.id, Buffer.from(JSON.stringify(newParentList)), true, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        tx.commit(cb);
                                    }
                                });
                            }
                        }
                    });
                };
                if (newParentList[newName]) {
                    // 'newPath' already exists. Check if it's a file or a directory, and
                    // act accordingly.
                    _this.getINode(tx, newPath, newParentList[newName], function (e, inode) {
                        if (noErrorTx(e, tx, cb)) {
                            if (inode.isFile()) {
                                // Delete the file and continue.
                                tx.del(inode.id, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        tx.del(newParentList[newName], function (e) {
                                            if (noErrorTx(e, tx, cb)) {
                                                completeRename_1();
                                            }
                                        });
                                    }
                                });
                            }
                            else {
                                // Can't overwrite a directory using rename.
                                tx.abort(function (e) {
                                    cb(api_error_1.ApiError.EPERM(newPath));
                                });
                            }
                        }
                    });
                }
                else {
                    completeRename_1();
                }
            }
        };
        /**
         * Grabs a path's inode and directory listing, and shoves it into the
         * inodes and lists hashes.
         */
        var processInodeAndListings = function (p) {
            _this.findINodeAndDirListing(tx, p, function (e, node, dirList) {
                if (e) {
                    if (!errorOccurred) {
                        errorOccurred = true;
                        tx.abort(function () {
                            cb(e);
                        });
                    }
                    // If error has occurred already, just stop here.
                }
                else {
                    inodes[p] = node;
                    lists[p] = dirList;
                    theOleSwitcharoo();
                }
            });
        };
        processInodeAndListings(oldParent);
        if (oldParent !== newParent) {
            processInodeAndListings(newParent);
        }
    };
    AsyncKeyValueFileSystem.prototype.stat = function (p, isLstat, cb) {
        var tx = this.store.beginTransaction('readonly');
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                cb(null, inode.toStats());
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.createFile = function (p, flag, mode, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readwrite'), data = (0, util_1.emptyBuffer)();
        this.commitNewFile(tx, p, node_fs_stats_1.FileType.FILE, mode, data, function (e, newFile) {
            if (noError(e, cb)) {
                cb(null, new AsyncKeyValueFile(_this, p, flag, newFile.toStats(), data));
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.openFile = function (p, flag, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readonly');
        // Step 1: Grab the file's inode.
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                // Step 2: Grab the file's data.
                tx.get(inode.id, function (e, data) {
                    if (noError(e, cb)) {
                        if (data === undefined) {
                            cb(api_error_1.ApiError.ENOENT(p));
                        }
                        else {
                            cb(null, new AsyncKeyValueFile(_this, p, flag, inode.toStats(), data));
                        }
                    }
                });
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.unlink = function (p, cb) {
        this.removeEntry(p, false, cb);
    };
    AsyncKeyValueFileSystem.prototype.rmdir = function (p, cb) {
        var _this = this;
        // Check first if directory is empty.
        this.readdir(p, function (err, files) {
            if (err) {
                cb(err);
            }
            else if (files.length > 0) {
                cb(api_error_1.ApiError.ENOTEMPTY(p));
            }
            else {
                _this.removeEntry(p, true, cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.mkdir = function (p, mode, cb) {
        var tx = this.store.beginTransaction('readwrite'), data = Buffer.from('{}');
        this.commitNewFile(tx, p, node_fs_stats_1.FileType.DIRECTORY, mode, data, cb);
    };
    AsyncKeyValueFileSystem.prototype.readdir = function (p, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readonly');
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                _this.getDirListing(tx, p, inode, function (e, dirListing) {
                    if (noError(e, cb)) {
                        cb(null, Object.keys(dirListing));
                    }
                });
            }
        });
    };
    AsyncKeyValueFileSystem.prototype._sync = function (p, data, stats, cb) {
        var _this = this;
        // @todo Ensure mtime updates properly, and use that to determine if a data
        //       update is required.
        var tx = this.store.beginTransaction('readwrite');
        // Step 1: Get the file node's ID.
        this._findINode(tx, path.dirname(p), path.basename(p), function (e, fileInodeId) {
            if (noErrorTx(e, tx, cb)) {
                // Step 2: Get the file inode.
                _this.getINode(tx, p, fileInodeId, function (e, fileInode) {
                    if (noErrorTx(e, tx, cb)) {
                        var inodeChanged_1 = fileInode.update(stats);
                        // Step 3: Sync the data.
                        tx.put(fileInode.id, data, true, function (e) {
                            if (noErrorTx(e, tx, cb)) {
                                // Step 4: Sync the metadata (if it changed)!
                                if (inodeChanged_1) {
                                    tx.put(fileInodeId, fileInode.toBuffer(), true, function (e) {
                                        if (noErrorTx(e, tx, cb)) {
                                            tx.commit(cb);
                                        }
                                    });
                                }
                                else {
                                    // No need to sync metadata; return.
                                    tx.commit(cb);
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    /**
     * Checks if the root directory exists. Creates it if it doesn't.
     */
    AsyncKeyValueFileSystem.prototype.makeRootDirectory = function (cb) {
        var tx = this.store.beginTransaction('readwrite');
        tx.get(ROOT_NODE_ID, function (e, data) {
            if (e || data === undefined) {
                // Create new inode.
                var currTime = (new Date()).getTime(), 
                // Mode 0666
                dirInode_1 = new inode_1.default(GenerateRandomID(), 4096, 511 | node_fs_stats_1.FileType.DIRECTORY, currTime, currTime, currTime);
                // If the root doesn't exist, the first random ID shouldn't exist,
                // either.
                tx.put(dirInode_1.id, getEmptyDirNode(), false, function (e) {
                    if (noErrorTx(e, tx, cb)) {
                        tx.put(ROOT_NODE_ID, dirInode_1.toBuffer(), false, function (e) {
                            if (e) {
                                tx.abort(function () { cb(e); });
                            }
                            else {
                                tx.commit(cb);
                            }
                        });
                    }
                });
            }
            else {
                // We're good.
                tx.commit(cb);
            }
        });
    };
    /**
     * Helper function for findINode.
     * @param parent The parent directory of the file we are attempting to find.
     * @param filename The filename of the inode we are attempting to find, minus
     *   the parent.
     * @param cb Passed an error or the ID of the file's inode in the file system.
     */
    AsyncKeyValueFileSystem.prototype._findINode = function (tx, parent, filename, cb) {
        var _this = this;
        if (this._cache) {
            var id = this._cache.get(path.join(parent, filename));
            if (id) {
                return cb(null, id);
            }
        }
        var handleDirectoryListings = function (e, inode, dirList) {
            if (e) {
                cb(e);
            }
            else if (dirList[filename]) {
                var id = dirList[filename];
                if (_this._cache) {
                    _this._cache.set(path.join(parent, filename), id);
                }
                cb(null, id);
            }
            else {
                cb(api_error_1.ApiError.ENOENT(path.resolve(parent, filename)));
            }
        };
        if (parent === '/') {
            if (filename === '') {
                // BASE CASE #1: Return the root's ID.
                if (this._cache) {
                    this._cache.set(path.join(parent, filename), ROOT_NODE_ID);
                }
                cb(null, ROOT_NODE_ID);
            }
            else {
                // BASE CASE #2: Find the item in the root node.
                this.getINode(tx, parent, ROOT_NODE_ID, function (e, inode) {
                    if (noError(e, cb)) {
                        _this.getDirListing(tx, parent, inode, function (e, dirList) {
                            // handle_directory_listings will handle e for us.
                            handleDirectoryListings(e, inode, dirList);
                        });
                    }
                });
            }
        }
        else {
            // Get the parent directory's INode, and find the file in its directory
            // listing.
            this.findINodeAndDirListing(tx, parent, handleDirectoryListings);
        }
    };
    /**
     * Finds the Inode of the given path.
     * @param p The path to look up.
     * @param cb Passed an error or the Inode of the path p.
     * @todo memoize/cache
     */
    AsyncKeyValueFileSystem.prototype.findINode = function (tx, p, cb) {
        var _this = this;
        this._findINode(tx, path.dirname(p), path.basename(p), function (e, id) {
            if (noError(e, cb)) {
                _this.getINode(tx, p, id, cb);
            }
        });
    };
    /**
     * Given the ID of a node, retrieves the corresponding Inode.
     * @param tx The transaction to use.
     * @param p The corresponding path to the file (used for error messages).
     * @param id The ID to look up.
     * @param cb Passed an error or the inode under the given id.
     */
    AsyncKeyValueFileSystem.prototype.getINode = function (tx, p, id, cb) {
        tx.get(id, function (e, data) {
            if (noError(e, cb)) {
                if (data === undefined) {
                    cb(api_error_1.ApiError.ENOENT(p));
                }
                else {
                    cb(null, inode_1.default.fromBuffer(data));
                }
            }
        });
    };
    /**
     * Given the Inode of a directory, retrieves the corresponding directory
     * listing.
     */
    AsyncKeyValueFileSystem.prototype.getDirListing = function (tx, p, inode, cb) {
        if (!inode.isDirectory()) {
            cb(api_error_1.ApiError.ENOTDIR(p));
        }
        else {
            tx.get(inode.id, function (e, data) {
                if (noError(e, cb)) {
                    try {
                        cb(null, JSON.parse(data.toString()));
                    }
                    catch (e) {
                        // Occurs when data is undefined, or corresponds to something other
                        // than a directory listing. The latter should never occur unless
                        // the file system is corrupted.
                        cb(api_error_1.ApiError.ENOENT(p));
                    }
                }
            });
        }
    };
    /**
     * Given a path to a directory, retrieves the corresponding INode and
     * directory listing.
     */
    AsyncKeyValueFileSystem.prototype.findINodeAndDirListing = function (tx, p, cb) {
        var _this = this;
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                _this.getDirListing(tx, p, inode, function (e, listing) {
                    if (noError(e, cb)) {
                        cb(null, inode, listing);
                    }
                });
            }
        });
    };
    /**
     * Adds a new node under a random ID. Retries 5 times before giving up in
     * the exceedingly unlikely chance that we try to reuse a random GUID.
     * @param cb Passed an error or the GUID that the data was stored under.
     */
    AsyncKeyValueFileSystem.prototype.addNewNode = function (tx, data, cb) {
        var retries = 0, currId;
        var reroll = function () {
            if (++retries === 5) {
                // Max retries hit. Return with an error.
                cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, 'Unable to commit data to key-value store.'));
            }
            else {
                // Try again.
                currId = GenerateRandomID();
                tx.put(currId, data, false, function (e, committed) {
                    if (e || !committed) {
                        reroll();
                    }
                    else {
                        // Successfully stored under 'currId'.
                        cb(null, currId);
                    }
                });
            }
        };
        reroll();
    };
    /**
     * Commits a new file (well, a FILE or a DIRECTORY) to the file system with
     * the given mode.
     * Note: This will commit the transaction.
     * @param p The path to the new file.
     * @param type The type of the new file.
     * @param mode The mode to create the new file with.
     * @param data The data to store at the file's data node.
     * @param cb Passed an error or the Inode for the new file.
     */
    AsyncKeyValueFileSystem.prototype.commitNewFile = function (tx, p, type, mode, data, cb) {
        var _this = this;
        var parentDir = path.dirname(p), fname = path.basename(p), currTime = (new Date()).getTime();
        // Invariant: The root always exists.
        // If we don't check this prior to taking steps below, we will create a
        // file with name '' in root should p == '/'.
        if (p === '/') {
            return cb(api_error_1.ApiError.EEXIST(p));
        }
        // Let's build a pyramid of code!
        // Step 1: Get the parent directory's inode and directory listing
        this.findINodeAndDirListing(tx, parentDir, function (e, parentNode, dirListing) {
            if (noErrorTx(e, tx, cb)) {
                if (dirListing[fname]) {
                    // File already exists.
                    tx.abort(function () {
                        cb(api_error_1.ApiError.EEXIST(p));
                    });
                }
                else {
                    // Step 2: Commit data to store.
                    _this.addNewNode(tx, data, function (e, dataId) {
                        if (noErrorTx(e, tx, cb)) {
                            // Step 3: Commit the file's inode to the store.
                            var fileInode_1 = new inode_1.default(dataId, data.length, mode | type, currTime, currTime, currTime);
                            _this.addNewNode(tx, fileInode_1.toBuffer(), function (e, fileInodeId) {
                                if (noErrorTx(e, tx, cb)) {
                                    // Step 4: Update parent directory's listing.
                                    dirListing[fname] = fileInodeId;
                                    tx.put(parentNode.id, Buffer.from(JSON.stringify(dirListing)), true, function (e) {
                                        if (noErrorTx(e, tx, cb)) {
                                            // Step 5: Commit and return the new inode.
                                            tx.commit(function (e) {
                                                if (noErrorTx(e, tx, cb)) {
                                                    cb(null, fileInode_1);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    };
    /**
     * Remove all traces of the given path from the file system.
     * @param p The path to remove from the file system.
     * @param isDir Does the path belong to a directory, or a file?
     * @todo Update mtime.
     */
    AsyncKeyValueFileSystem.prototype.removeEntry = function (p, isDir, cb) {
        var _this = this;
        // Eagerly delete from cache (harmless even if removal fails)
        if (this._cache) {
            this._cache.remove(p);
        }
        var tx = this.store.beginTransaction('readwrite'), parent = path.dirname(p), fileName = path.basename(p);
        // Step 1: Get parent directory's node and directory listing.
        this.findINodeAndDirListing(tx, parent, function (e, parentNode, parentListing) {
            if (noErrorTx(e, tx, cb)) {
                if (!parentListing[fileName]) {
                    tx.abort(function () {
                        cb(api_error_1.ApiError.ENOENT(p));
                    });
                }
                else {
                    // Remove from directory listing of parent.
                    var fileNodeId_1 = parentListing[fileName];
                    delete parentListing[fileName];
                    // Step 2: Get file inode.
                    _this.getINode(tx, p, fileNodeId_1, function (e, fileNode) {
                        if (noErrorTx(e, tx, cb)) {
                            if (!isDir && fileNode.isDirectory()) {
                                tx.abort(function () {
                                    cb(api_error_1.ApiError.EISDIR(p));
                                });
                            }
                            else if (isDir && !fileNode.isDirectory()) {
                                tx.abort(function () {
                                    cb(api_error_1.ApiError.ENOTDIR(p));
                                });
                            }
                            else {
                                // Step 3: Delete data.
                                tx.del(fileNode.id, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        // Step 4: Delete node.
                                        tx.del(fileNodeId_1, function (e) {
                                            if (noErrorTx(e, tx, cb)) {
                                                // Step 5: Update directory listing.
                                                tx.put(parentNode.id, Buffer.from(JSON.stringify(parentListing)), true, function (e) {
                                                    if (noErrorTx(e, tx, cb)) {
                                                        tx.commit(cb);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    };
    return AsyncKeyValueFileSystem;
}(file_system_1.BaseFileSystem));
exports.AsyncKeyValueFileSystem = AsyncKeyValueFileSystem;
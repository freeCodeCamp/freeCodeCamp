var $hunDZ$path = require("path");
var $hunDZ$stream = require("stream");
var $hunDZ$util = require("util");
var $hunDZ$buffer = require("buffer");
var $hunDZ$parcelcore = require("@parcel/core");
var $hunDZ$parcelutils = require("@parcel/utils");
var $hunDZ$parcelworkers = require("@parcel/workers");
var $hunDZ$events = require("events");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ncp", () => $31694e5356f611f3$export$d3a8044e3fef7335);



var $9c7f58f4572b480f$exports = {};

$parcel$export($9c7f58f4572b480f$exports, "NodeFS", () => $9c7f58f4572b480f$export$c4e0ef2ab73c21e7);
// $FlowFixMe[prop-missing] handled by the throwing constructor
class $9c7f58f4572b480f$export$c4e0ef2ab73c21e7 {
    constructor(){
        throw new Error("NodeFS isn't available in the browser");
    }
}


var $72ad4eda33ff61b0$exports = {};

$parcel$export($72ad4eda33ff61b0$exports, "MemoryFS", () => $72ad4eda33ff61b0$export$3048eb7ec07c2c4e);




var $fde37a429021a41b$exports = {};
$fde37a429021a41b$exports = JSON.parse('{"name":"@parcel/fs","version":"2.8.3","description":"Blazing fast, zero configuration web application bundler","license":"MIT","publishConfig":{"access":"public"},"funding":{"type":"opencollective","url":"https://opencollective.com/parcel"},"repository":{"type":"git","url":"https://github.com/parcel-bundler/parcel.git"},"main":"lib/index.js","source":"src/index.js","types":"index.d.ts","engines":{"node":">= 12.0.0"},"targets":{"types":false,"main":{"includeNodeModules":{"@parcel/core":false,"@parcel/fs-search":false,"@parcel/types":false,"@parcel/utils":false,"@parcel/watcher":false,"@parcel/workers":false}},"browser":{"includeNodeModules":{"@parcel/core":false,"@parcel/fs-search":false,"@parcel/types":false,"@parcel/utils":false,"@parcel/watcher":false,"@parcel/workers":false}}},"scripts":{"build-ts":"mkdir -p lib && flow-to-ts src/types.js > lib/types.d.ts","check-ts":"tsc --noEmit index.d.ts"},"dependencies":{"@parcel/fs-search":"2.8.3","@parcel/types":"2.8.3","@parcel/utils":"2.8.3","@parcel/watcher":"^2.0.7","@parcel/workers":"2.8.3"},"devDependencies":{"graceful-fs":"^4.2.4","ncp":"^2.0.0","nullthrows":"^1.1.1","utility-types":"^3.10.0"},"peerDependencies":{"@parcel/core":"^2.8.3"},"browser":{"@parcel/fs":"./lib/browser.js","./src/NodeFS.js":"./src/NodeFS.browser.js"},"gitHead":"349a6caf40ec8abb6a49fcae0765f8f8deb2073d"}');



var $070848ec2e31a5dc$exports = {};
"use strict";
function $070848ec2e31a5dc$var$nullthrows(x, message) {
    if (x != null) return x;
    var error = new Error(message !== undefined ? message : "Got unexpected " + x);
    error.framesToPop = 1; // Skip nullthrows's own stack frame.
    throw error;
}
$070848ec2e31a5dc$exports = $070848ec2e31a5dc$var$nullthrows;
$070848ec2e31a5dc$exports.default = $070848ec2e31a5dc$var$nullthrows;
Object.defineProperty($070848ec2e31a5dc$exports, "__esModule", {
    value: true
});




function $d90b6e6bc50ca903$export$4c6d088a7d7f9947(fs, moduleName, dir) {
    let { root: root  } = (0, ($parcel$interopDefault($hunDZ$path))).parse(dir);
    while(dir !== root){
        // Skip node_modules directories
        if ((0, ($parcel$interopDefault($hunDZ$path))).basename(dir) === "node_modules") dir = (0, ($parcel$interopDefault($hunDZ$path))).dirname(dir);
        try {
            let moduleDir = (0, ($parcel$interopDefault($hunDZ$path))).join(dir, "node_modules", moduleName);
            let stats = fs.statSync(moduleDir);
            if (stats.isDirectory()) return moduleDir;
        } catch (err) {} // Move up a directory
        dir = (0, ($parcel$interopDefault($hunDZ$path))).dirname(dir);
    }
    return null;
}
function $d90b6e6bc50ca903$export$d51a93c758976388(fs, fileNames, dir, root) {
    let { root: pathRoot  } = (0, ($parcel$interopDefault($hunDZ$path))).parse(dir); // eslint-disable-next-line no-constant-condition
    while(true){
        if ((0, ($parcel$interopDefault($hunDZ$path))).basename(dir) === "node_modules") return null;
        for (const fileName of fileNames){
            let filePath = (0, ($parcel$interopDefault($hunDZ$path))).join(dir, fileName);
            try {
                if (fs.statSync(filePath).isFile()) return filePath;
            } catch (err) {}
        }
        if (dir === root || dir === pathRoot) break;
        dir = (0, ($parcel$interopDefault($hunDZ$path))).dirname(dir);
    }
    return null;
}
function $d90b6e6bc50ca903$export$64df6e3182fd5b2d(fs, filePaths) {
    for (let filePath of filePaths)try {
        if (fs.statSync(filePath).isFile()) return filePath;
    } catch (err) {}
}



var $72ad4eda33ff61b0$require$Buffer = $hunDZ$buffer.Buffer;
const $72ad4eda33ff61b0$var$instances = new Map();
let $72ad4eda33ff61b0$var$id = 0;
class $72ad4eda33ff61b0$export$3048eb7ec07c2c4e {
    _numWorkerInstances = 0;
    _workerRegisterResolves = [];
    _emitter = new (0, ($parcel$interopDefault($hunDZ$events)))();
    constructor(workerFarm){
        this.farm = workerFarm;
        this.dirs = new Map([
            [
                "/",
                new $72ad4eda33ff61b0$var$Directory()
            ]
        ]);
        this.files = new Map();
        this.symlinks = new Map();
        this.watchers = new Map();
        this.events = [];
        this.id = $72ad4eda33ff61b0$var$id++;
        this._cwd = "/";
        this._workerHandles = [];
        this._eventQueue = [];
        $72ad4eda33ff61b0$var$instances.set(this.id, this);
        this._emitter.on("allWorkersRegistered", ()=>{
            for (let resolve of this._workerRegisterResolves)resolve();
            this._workerRegisterResolves = [];
        });
    }
    static deserialize(opts) {
        let existing = $72ad4eda33ff61b0$var$instances.get(opts.id);
        if (existing != null) {
            // Correct the count of worker instances since serialization assumes a new instance is created
            (0, ($parcel$interopDefault($hunDZ$parcelworkers))).getWorkerApi().runHandle(opts.handle, [
                "decrementWorkerInstance",
                []
            ]);
            return existing;
        }
        let fs = new $72ad4eda33ff61b0$var$WorkerFS(opts.id, (0, (/*@__PURE__*/$parcel$interopDefault($070848ec2e31a5dc$exports)))(opts.handle));
        fs.dirs = opts.dirs;
        fs.files = opts.files;
        fs.symlinks = opts.symlinks;
        return fs;
    }
    serialize() {
        if (!this.handle) this.handle = this.farm.createReverseHandle((fn, args)=>{
            // $FlowFixMe
            return this[fn](...args);
        });
         // If a worker instance already exists, it will decrement this number
        this._numWorkerInstances++;
        return {
            $$raw: false,
            id: this.id,
            handle: this.handle,
            dirs: this.dirs,
            files: this.files,
            symlinks: this.symlinks
        };
    }
    decrementWorkerInstance() {
        this._numWorkerInstances--;
        if (this._numWorkerInstances === this._workerHandles.length) this._emitter.emit("allWorkersRegistered");
    }
    cwd() {
        return this._cwd;
    }
    chdir(dir) {
        this._cwd = dir;
    }
    _normalizePath(filePath, realpath = true) {
        filePath = (0, ($parcel$interopDefault($hunDZ$path))).resolve(this.cwd(), filePath); // get realpath by following symlinks
        if (realpath) {
            let { root: root , dir: dir , base: base  } = (0, ($parcel$interopDefault($hunDZ$path))).parse(filePath);
            let parts = dir.slice(root.length).split((0, ($parcel$interopDefault($hunDZ$path))).sep).concat(base);
            let res = root;
            for (let part of parts){
                res = (0, ($parcel$interopDefault($hunDZ$path))).join(res, part);
                let symlink = this.symlinks.get(res);
                if (symlink) res = symlink;
            }
            return res;
        }
        return filePath;
    }
    async writeFile(filePath, contents, options) {
        filePath = this._normalizePath(filePath);
        if (this.dirs.has(filePath)) throw new $72ad4eda33ff61b0$var$FSError("EISDIR", filePath, "is a directory");
        let dir = (0, ($parcel$interopDefault($hunDZ$path))).dirname(filePath);
        if (!this.dirs.has(dir)) throw new $72ad4eda33ff61b0$var$FSError("ENOENT", dir, "does not exist");
        let buffer = $72ad4eda33ff61b0$var$makeShared(contents);
        let file = this.files.get(filePath);
        let mode = options && options.mode || 438;
        if (file) {
            file.write(buffer, mode);
            this.files.set(filePath, file);
        } else this.files.set(filePath, new $72ad4eda33ff61b0$var$File(buffer, mode));
        await this._sendWorkerEvent({
            type: "writeFile",
            path: filePath,
            entry: this.files.get(filePath)
        });
        this._triggerEvent({
            type: file ? "update" : "create",
            path: filePath
        });
    }
    async readFile(filePath, encoding) {
        return this.readFileSync(filePath, encoding);
    }
    readFileSync(filePath, encoding) {
        filePath = this._normalizePath(filePath);
        let file = this.files.get(filePath);
        if (file == null) throw new $72ad4eda33ff61b0$var$FSError("ENOENT", filePath, "does not exist");
        let buffer = file.read();
        if (encoding) return buffer.toString(encoding);
        return buffer;
    }
    async copyFile(source, destination) {
        let contents = await this.readFile(source);
        await this.writeFile(destination, contents);
    }
    statSync(filePath) {
        filePath = this._normalizePath(filePath);
        let dir = this.dirs.get(filePath);
        if (dir) return dir.stat();
        let file = this.files.get(filePath);
        if (file == null) throw new $72ad4eda33ff61b0$var$FSError("ENOENT", filePath, "does not exist");
        return file.stat();
    }
    async stat(filePath) {
        return this.statSync(filePath);
    }
    readdirSync(dir, opts) {
        dir = this._normalizePath(dir);
        if (!this.dirs.has(dir)) throw new $72ad4eda33ff61b0$var$FSError("ENOENT", dir, "does not exist");
        dir += (0, ($parcel$interopDefault($hunDZ$path))).sep;
        let res = [];
        for (let [filePath, entry] of this.dirs)if (filePath.startsWith(dir) && filePath.indexOf((0, ($parcel$interopDefault($hunDZ$path))).sep, dir.length) === -1) {
            let name = filePath.slice(dir.length);
            if (opts?.withFileTypes) res.push(new $72ad4eda33ff61b0$var$Dirent(name, entry));
            else res.push(name);
        }
        for (let [filePath, entry] of this.files)if (filePath.startsWith(dir) && filePath.indexOf((0, ($parcel$interopDefault($hunDZ$path))).sep, dir.length) === -1) {
            let name = filePath.slice(dir.length);
            if (opts?.withFileTypes) res.push(new $72ad4eda33ff61b0$var$Dirent(name, entry));
            else res.push(name);
        }
        for (let [from] of this.symlinks)if (from.startsWith(dir) && from.indexOf((0, ($parcel$interopDefault($hunDZ$path))).sep, dir.length) === -1) {
            let name = from.slice(dir.length);
            if (opts?.withFileTypes) res.push(new $72ad4eda33ff61b0$var$Dirent(name, {
                mode: $72ad4eda33ff61b0$var$S_IFLNK
            }));
            else res.push(name);
        }
        return res;
    }
    async readdir(dir, opts) {
        return this.readdirSync(dir, opts);
    }
    async unlink(filePath) {
        filePath = this._normalizePath(filePath);
        if (!this.files.has(filePath) && !this.dirs.has(filePath)) throw new $72ad4eda33ff61b0$var$FSError("ENOENT", filePath, "does not exist");
        this.files.delete(filePath);
        this.dirs.delete(filePath);
        this.watchers.delete(filePath);
        await this._sendWorkerEvent({
            type: "unlink",
            path: filePath
        });
        this._triggerEvent({
            type: "delete",
            path: filePath
        });
        return Promise.resolve();
    }
    async mkdirp(dir) {
        dir = this._normalizePath(dir);
        if (this.dirs.has(dir)) return Promise.resolve();
        if (this.files.has(dir)) throw new $72ad4eda33ff61b0$var$FSError("ENOENT", dir, "is not a directory");
        let root = (0, ($parcel$interopDefault($hunDZ$path))).parse(dir).root;
        while(dir !== root){
            if (this.dirs.has(dir)) break;
            this.dirs.set(dir, new $72ad4eda33ff61b0$var$Directory());
            await this._sendWorkerEvent({
                type: "mkdir",
                path: dir
            });
            this._triggerEvent({
                type: "create",
                path: dir
            });
            dir = (0, ($parcel$interopDefault($hunDZ$path))).dirname(dir);
        }
        return Promise.resolve();
    }
    async rimraf(filePath) {
        filePath = this._normalizePath(filePath);
        if (this.dirs.has(filePath)) {
            let dir = filePath + (0, ($parcel$interopDefault($hunDZ$path))).sep;
            for (let filePath of this.files.keys())if (filePath.startsWith(dir)) {
                this.files.delete(filePath);
                await this._sendWorkerEvent({
                    type: "unlink",
                    path: filePath
                });
                this._triggerEvent({
                    type: "delete",
                    path: filePath
                });
            }
            for (let dirPath of this.dirs.keys())if (dirPath.startsWith(dir)) {
                this.dirs.delete(dirPath);
                this.watchers.delete(dirPath);
                await this._sendWorkerEvent({
                    type: "unlink",
                    path: filePath
                });
                this._triggerEvent({
                    type: "delete",
                    path: dirPath
                });
            }
            for (let filePath of this.symlinks.keys())if (filePath.startsWith(dir)) {
                this.symlinks.delete(filePath);
                await this._sendWorkerEvent({
                    type: "unlink",
                    path: filePath
                });
            }
            this.dirs.delete(filePath);
            await this._sendWorkerEvent({
                type: "unlink",
                path: filePath
            });
            this._triggerEvent({
                type: "delete",
                path: filePath
            });
        } else if (this.files.has(filePath)) {
            this.files.delete(filePath);
            await this._sendWorkerEvent({
                type: "unlink",
                path: filePath
            });
            this._triggerEvent({
                type: "delete",
                path: filePath
            });
        }
        return Promise.resolve();
    }
    async ncp(source, destination) {
        source = this._normalizePath(source);
        if (this.dirs.has(source)) {
            if (!this.dirs.has(destination)) {
                this.dirs.set(destination, new $72ad4eda33ff61b0$var$Directory());
                await this._sendWorkerEvent({
                    type: "mkdir",
                    path: destination
                });
                this._triggerEvent({
                    type: "create",
                    path: destination
                });
            }
            let dir = source + (0, ($parcel$interopDefault($hunDZ$path))).sep;
            for (let dirPath of this.dirs.keys())if (dirPath.startsWith(dir)) {
                let destName = (0, ($parcel$interopDefault($hunDZ$path))).join(destination, dirPath.slice(dir.length));
                if (!this.dirs.has(destName)) {
                    this.dirs.set(destName, new $72ad4eda33ff61b0$var$Directory());
                    await this._sendWorkerEvent({
                        type: "mkdir",
                        path: destination
                    });
                    this._triggerEvent({
                        type: "create",
                        path: destName
                    });
                }
            }
            for (let [filePath, file] of this.files)if (filePath.startsWith(dir)) {
                let destName = (0, ($parcel$interopDefault($hunDZ$path))).join(destination, filePath.slice(dir.length));
                let exists = this.files.has(destName);
                this.files.set(destName, file);
                await this._sendWorkerEvent({
                    type: "writeFile",
                    path: destName,
                    entry: file
                });
                this._triggerEvent({
                    type: exists ? "update" : "create",
                    path: destName
                });
            }
        } else await this.copyFile(source, destination);
    }
    createReadStream(filePath) {
        return new $72ad4eda33ff61b0$var$ReadStream(this, filePath);
    }
    createWriteStream(filePath, options) {
        return new $72ad4eda33ff61b0$var$WriteStream(this, filePath, options);
    }
    realpathSync(filePath) {
        return this._normalizePath(filePath);
    }
    async realpath(filePath) {
        return this.realpathSync(filePath);
    }
    async symlink(target, path) {
        target = this._normalizePath(target);
        path = this._normalizePath(path);
        this.symlinks.set(path, target);
        await this._sendWorkerEvent({
            type: "symlink",
            path: path,
            target: target
        });
    }
    existsSync(filePath) {
        filePath = this._normalizePath(filePath);
        return this.files.has(filePath) || this.dirs.has(filePath);
    }
    async exists(filePath) {
        return this.existsSync(filePath);
    }
    _triggerEvent(event) {
        this.events.push(event);
        if (this.watchers.size === 0) return;
         // Batch events
        this._eventQueue.push(event);
        clearTimeout(this._watcherTimer);
        this._watcherTimer = setTimeout(()=>{
            let events = this._eventQueue;
            this._eventQueue = [];
            for (let [dir, watchers] of this.watchers){
                if (!dir.endsWith((0, ($parcel$interopDefault($hunDZ$path))).sep)) dir += (0, ($parcel$interopDefault($hunDZ$path))).sep;
                if (event.path.startsWith(dir)) for (let watcher of watchers)watcher.trigger(events);
            }
        }, 50);
    }
    _registerWorker(handle) {
        this._workerHandles.push(handle);
        if (this._numWorkerInstances === this._workerHandles.length) this._emitter.emit("allWorkersRegistered");
    }
    async _sendWorkerEvent(event) {
        // Wait for worker instances to register their handles
        while(this._workerHandles.length < this._numWorkerInstances)await new Promise((resolve)=>this._workerRegisterResolves.push(resolve));
        await Promise.all(this._workerHandles.map((workerHandle)=>this.farm.workerApi.runHandle(workerHandle, [
                event
            ])));
    }
    watch(dir, fn, opts) {
        dir = this._normalizePath(dir);
        let watcher = new $72ad4eda33ff61b0$var$Watcher(fn, opts);
        let watchers = this.watchers.get(dir);
        if (!watchers) {
            watchers = new Set();
            this.watchers.set(dir, watchers);
        }
        watchers.add(watcher);
        return Promise.resolve({
            unsubscribe: ()=>{
                watchers = (0, (/*@__PURE__*/$parcel$interopDefault($070848ec2e31a5dc$exports)))(watchers);
                watchers.delete(watcher);
                if (watchers.size === 0) this.watchers.delete(dir);
                return Promise.resolve();
            }
        });
    }
    async getEventsSince(dir, snapshot, opts) {
        let contents = await this.readFile(snapshot, "utf8");
        let len = Number(contents);
        let events = this.events.slice(len);
        let ignore = opts.ignore;
        if (ignore) events = events.filter((event)=>!ignore.some((i)=>event.path.startsWith(i + (0, ($parcel$interopDefault($hunDZ$path))).sep)));
        return events;
    }
    async writeSnapshot(dir, snapshot) {
        await this.writeFile(snapshot, "" + this.events.length);
    }
    findAncestorFile(fileNames, fromDir, root) {
        return (0, $d90b6e6bc50ca903$export$d51a93c758976388)(this, fileNames, fromDir, root);
    }
    findNodeModule(moduleName, fromDir) {
        return (0, $d90b6e6bc50ca903$export$4c6d088a7d7f9947)(this, moduleName, fromDir);
    }
    findFirstFile(filePaths) {
        return (0, $d90b6e6bc50ca903$export$64df6e3182fd5b2d)(this, filePaths);
    }
}
class $72ad4eda33ff61b0$var$Watcher {
    constructor(fn, options){
        this.fn = fn;
        this.options = options;
    }
    trigger(events) {
        let ignore = this.options.ignore;
        if (ignore) events = events.filter((event)=>!ignore.some((i)=>event.path.startsWith(i + (0, ($parcel$interopDefault($hunDZ$path))).sep)));
        if (events.length > 0) this.fn(null, events);
    }
}
class $72ad4eda33ff61b0$var$FSError extends Error {
    constructor(code, path, message){
        super(`${code}: ${path} ${message}`);
        this.name = "FSError";
        this.code = code;
        this.path = path;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
class $72ad4eda33ff61b0$var$ReadStream extends (0, $hunDZ$stream.Readable) {
    constructor(fs, filePath){
        super();
        this.fs = fs;
        this.filePath = filePath;
        this.reading = false;
        this.bytesRead = 0;
    }
    _read() {
        if (this.reading) return;
        this.reading = true;
        this.fs.readFile(this.filePath).then((res)=>{
            this.bytesRead += res.byteLength;
            this.push(res);
            this.push(null);
        }, (err)=>{
            this.emit("error", err);
        });
    }
}
class $72ad4eda33ff61b0$var$WriteStream extends (0, $hunDZ$stream.Writable) {
    constructor(fs, filePath, options){
        super({
            emitClose: true,
            autoDestroy: true
        });
        this.fs = fs;
        this.filePath = filePath;
        this.options = options;
        this.buffer = $72ad4eda33ff61b0$require$Buffer.alloc(0);
    }
    _write(chunk, encoding, callback) {
        let c = typeof chunk === "string" ? $72ad4eda33ff61b0$require$Buffer.from(chunk, encoding) : chunk;
        this.buffer = $72ad4eda33ff61b0$require$Buffer.concat([
            this.buffer,
            c
        ]);
        callback();
    }
    _final(callback) {
        this.fs.writeFile(this.filePath, this.buffer, this.options).then(callback).catch(callback);
    }
}
const $72ad4eda33ff61b0$var$S_IFREG = 32768;
const $72ad4eda33ff61b0$var$S_IFDIR = 16384;
const $72ad4eda33ff61b0$var$S_IFLNK = 40960;
class $72ad4eda33ff61b0$var$Entry {
    constructor(mode){
        this.mode = mode;
        let now = Date.now();
        this.atime = now;
        this.mtime = now;
        this.ctime = now;
        this.birthtime = now;
    }
    access() {
        let now = Date.now();
        this.atime = now;
        this.ctime = now;
    }
    modify(mode) {
        let now = Date.now();
        this.mtime = now;
        this.ctime = now;
        this.mode = mode;
    }
    getSize() {
        return 0;
    }
    stat() {
        return new $72ad4eda33ff61b0$var$Stat(this);
    }
}
class $72ad4eda33ff61b0$var$Stat {
    dev = 0;
    ino = 0;
    nlink = 0;
    uid = 0;
    gid = 0;
    rdev = 0;
    blksize = 0;
    blocks = 0;
    constructor(entry){
        this.mode = entry.mode;
        this.size = entry.getSize();
        this.atimeMs = entry.atime;
        this.mtimeMs = entry.mtime;
        this.ctimeMs = entry.ctime;
        this.birthtimeMs = entry.birthtime;
        this.atime = new Date(entry.atime);
        this.mtime = new Date(entry.mtime);
        this.ctime = new Date(entry.ctime);
        this.birthtime = new Date(entry.birthtime);
    }
    isFile() {
        return Boolean(this.mode & $72ad4eda33ff61b0$var$S_IFREG);
    }
    isDirectory() {
        return Boolean(this.mode & $72ad4eda33ff61b0$var$S_IFDIR);
    }
    isBlockDevice() {
        return false;
    }
    isCharacterDevice() {
        return false;
    }
    isSymbolicLink() {
        return false;
    }
    isFIFO() {
        return false;
    }
    isSocket() {
        return false;
    }
}
class $72ad4eda33ff61b0$var$Dirent {
    #mode;
    constructor(name, entry){
        this.name = name;
        this.#mode = entry.mode;
    }
    isFile() {
        return Boolean(this.#mode & $72ad4eda33ff61b0$var$S_IFREG);
    }
    isDirectory() {
        return Boolean(this.#mode & $72ad4eda33ff61b0$var$S_IFDIR);
    }
    isBlockDevice() {
        return false;
    }
    isCharacterDevice() {
        return false;
    }
    isSymbolicLink() {
        return Boolean(this.#mode & $72ad4eda33ff61b0$var$S_IFLNK);
    }
    isFIFO() {
        return false;
    }
    isSocket() {
        return false;
    }
}
class $72ad4eda33ff61b0$var$File extends $72ad4eda33ff61b0$var$Entry {
    constructor(buffer, mode){
        super($72ad4eda33ff61b0$var$S_IFREG | mode);
        this.buffer = buffer;
    }
    read() {
        super.access();
        return $72ad4eda33ff61b0$require$Buffer.from(this.buffer);
    }
    write(buffer, mode) {
        super.modify($72ad4eda33ff61b0$var$S_IFREG | mode);
        this.buffer = buffer;
    }
    getSize() {
        return this.buffer.byteLength;
    }
}
class $72ad4eda33ff61b0$var$Directory extends $72ad4eda33ff61b0$var$Entry {
    constructor(){
        super($72ad4eda33ff61b0$var$S_IFDIR);
    }
}
function $72ad4eda33ff61b0$var$makeShared(contents) {
    if (typeof contents !== "string" && contents.buffer instanceof (0, $hunDZ$parcelutils.SharedBuffer)) return contents;
    let length = $72ad4eda33ff61b0$require$Buffer.byteLength(contents);
    let shared = new (0, $hunDZ$parcelutils.SharedBuffer)(length);
    let buffer = $72ad4eda33ff61b0$require$Buffer.from(shared);
    if (typeof contents === "string") buffer.write(contents);
    else buffer.set(contents);
    return buffer;
}
class $72ad4eda33ff61b0$var$WorkerFS extends $72ad4eda33ff61b0$export$3048eb7ec07c2c4e {
    constructor(id, handle){
        // TODO Make this not a subclass
        // $FlowFixMe
        super();
        this.id = id;
        this.handleFn = (methodName, args)=>(0, ($parcel$interopDefault($hunDZ$parcelworkers))).getWorkerApi().runHandle(handle, [
                methodName,
                args
            ]);
        this.handleFn("_registerWorker", [
            (0, ($parcel$interopDefault($hunDZ$parcelworkers))).getWorkerApi().createReverseHandle((event)=>{
                switch(event.type){
                    case "writeFile":
                        this.files.set(event.path, event.entry);
                        break;
                    case "unlink":
                        this.files.delete(event.path);
                        this.dirs.delete(event.path);
                        this.symlinks.delete(event.path);
                        break;
                    case "mkdir":
                        this.dirs.set(event.path, new $72ad4eda33ff61b0$var$Directory());
                        break;
                    case "symlink":
                        this.symlinks.set(event.path, event.target);
                        break;
                }
            })
        ]);
    }
    static deserialize(opts) {
        return (0, (/*@__PURE__*/$parcel$interopDefault($070848ec2e31a5dc$exports)))($72ad4eda33ff61b0$var$instances.get(opts.id));
    }
    serialize() {
        // $FlowFixMe
        return {
            id: this.id
        };
    }
    writeFile(filePath, contents, options) {
        super.writeFile(filePath, contents, options);
        let buffer = $72ad4eda33ff61b0$var$makeShared(contents);
        return this.handleFn("writeFile", [
            filePath,
            buffer,
            options
        ]);
    }
    unlink(filePath) {
        super.unlink(filePath);
        return this.handleFn("unlink", [
            filePath
        ]);
    }
    mkdirp(dir) {
        super.mkdirp(dir);
        return this.handleFn("mkdirp", [
            dir
        ]);
    }
    rimraf(filePath) {
        super.rimraf(filePath);
        return this.handleFn("rimraf", [
            filePath
        ]);
    }
    ncp(source, destination) {
        super.ncp(source, destination);
        return this.handleFn("ncp", [
            source,
            destination
        ]);
    }
    symlink(target, path) {
        super.symlink(target, path);
        return this.handleFn("symlink", [
            target,
            path
        ]);
    }
}
(0, $hunDZ$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($fde37a429021a41b$exports))).version}:MemoryFS`, $72ad4eda33ff61b0$export$3048eb7ec07c2c4e);
(0, $hunDZ$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($fde37a429021a41b$exports))).version}:WorkerFS`, $72ad4eda33ff61b0$var$WorkerFS);
(0, $hunDZ$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($fde37a429021a41b$exports))).version}:Stat`, $72ad4eda33ff61b0$var$Stat);
(0, $hunDZ$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($fde37a429021a41b$exports))).version}:File`, $72ad4eda33ff61b0$var$File);
(0, $hunDZ$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($fde37a429021a41b$exports))).version}:Directory`, $72ad4eda33ff61b0$var$Directory);


var $eab573fa27a303ce$exports = {};

$parcel$export($eab573fa27a303ce$exports, "OverlayFS", () => $eab573fa27a303ce$export$5963299e2424ca1c);



function $eab573fa27a303ce$var$read(method) {
    return async function(...args) {
        try {
            return await this.writable[method](...args);
        } catch (err) {
            return this.readable[method](...args);
        }
    };
}
function $eab573fa27a303ce$var$readSync(method) {
    return function(...args) {
        try {
            return this.writable[method](...args);
        } catch (err) {
            return this.readable[method](...args);
        }
    };
}
function $eab573fa27a303ce$var$write(method) {
    return function(...args) {
        return this.writable[method](...args);
    };
}
function $eab573fa27a303ce$var$checkExists(method) {
    return function(filePath, ...args) {
        if (this.writable.existsSync(filePath)) return this.writable[method](filePath, ...args);
        return this.readable[method](filePath, ...args);
    };
}
class $eab573fa27a303ce$export$5963299e2424ca1c {
    constructor(writable, readable){
        this.writable = writable;
        this.readable = readable;
    }
    static deserialize(opts) {
        return new $eab573fa27a303ce$export$5963299e2424ca1c(opts.writable, opts.readable);
    }
    serialize() {
        return {
            $$raw: false,
            writable: this.writable,
            readable: this.readable
        };
    }
    readFile = $eab573fa27a303ce$var$read("readFile");
    writeFile = $eab573fa27a303ce$var$write("writeFile");
    async copyFile(source, destination) {
        if (await this.writable.exists(source)) await this.writable.writeFile(destination, await this.writable.readFile(source));
        else await this.writable.writeFile(destination, await this.readable.readFile(source));
    }
    stat = $eab573fa27a303ce$var$read("stat");
    unlink = $eab573fa27a303ce$var$write("unlink");
    mkdirp = $eab573fa27a303ce$var$write("mkdirp");
    rimraf = $eab573fa27a303ce$var$write("rimraf");
    ncp = $eab573fa27a303ce$var$write("ncp");
    createReadStream = $eab573fa27a303ce$var$checkExists("createReadStream");
    createWriteStream = $eab573fa27a303ce$var$write("createWriteStream");
    cwd = $eab573fa27a303ce$var$readSync("cwd");
    chdir = $eab573fa27a303ce$var$readSync("chdir");
    realpath = $eab573fa27a303ce$var$checkExists("realpath");
    readFileSync = $eab573fa27a303ce$var$readSync("readFileSync");
    statSync = $eab573fa27a303ce$var$readSync("statSync");
    existsSync = $eab573fa27a303ce$var$readSync("existsSync");
    realpathSync = $eab573fa27a303ce$var$checkExists("realpathSync");
    async exists(filePath) {
        return await this.writable.exists(filePath) || this.readable.exists(filePath);
    }
    async readdir(path, opts) {
        // Read from both filesystems and merge the results
        let writable = [];
        let readable = [];
        try {
            writable = await this.writable.readdir(path, opts);
        } catch (err) {}
        try {
            readable = await this.readable.readdir(path, opts);
        } catch (err) {}
        return Array.from(new Set([
            ...writable,
            ...readable
        ]));
    }
    readdirSync(path, opts) {
        // Read from both filesystems and merge the results
        let writable = [];
        let readable = [];
        try {
            writable = this.writable.readdirSync(path, opts);
        } catch (err) {}
        try {
            readable = this.readable.readdirSync(path, opts);
        } catch (err) {}
        return Array.from(new Set([
            ...writable,
            ...readable
        ]));
    }
    async watch(dir, fn, opts) {
        let writableSubscription = await this.writable.watch(dir, fn, opts);
        let readableSubscription = await this.readable.watch(dir, fn, opts);
        return {
            unsubscribe: async ()=>{
                await writableSubscription.unsubscribe();
                await readableSubscription.unsubscribe();
            }
        };
    }
    async getEventsSince(dir, snapshot, opts) {
        let writableEvents = await this.writable.getEventsSince(dir, snapshot, opts);
        let readableEvents = await this.readable.getEventsSince(dir, snapshot, opts);
        return [
            ...writableEvents,
            ...readableEvents
        ];
    }
    async writeSnapshot(dir, snapshot, opts) {
        await this.writable.writeSnapshot(dir, snapshot, opts);
    }
    findAncestorFile(fileNames, fromDir, root) {
        return (0, $d90b6e6bc50ca903$export$d51a93c758976388)(this, fileNames, fromDir, root);
    }
    findNodeModule(moduleName, fromDir) {
        return (0, $d90b6e6bc50ca903$export$4c6d088a7d7f9947)(this, moduleName, fromDir);
    }
    findFirstFile(filePaths) {
        return (0, $d90b6e6bc50ca903$export$64df6e3182fd5b2d)(this, filePaths);
    }
}
(0, $hunDZ$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($fde37a429021a41b$exports))).version}:OverlayFS`, $eab573fa27a303ce$export$5963299e2424ca1c);


const $31694e5356f611f3$var$pipeline = (0, $hunDZ$util.promisify)((0, ($parcel$interopDefault($hunDZ$stream))).pipeline); // Recursively copies a directory from the sourceFS to the destinationFS
async function $31694e5356f611f3$export$d3a8044e3fef7335(sourceFS, source, destinationFS, destination) {
    await destinationFS.mkdirp(destination);
    let files = await sourceFS.readdir(source);
    for (let file of files){
        let sourcePath = (0, ($parcel$interopDefault($hunDZ$path))).join(source, file);
        let destPath = (0, ($parcel$interopDefault($hunDZ$path))).join(destination, file);
        let stats = await sourceFS.stat(sourcePath);
        if (stats.isFile()) await $31694e5356f611f3$var$pipeline(sourceFS.createReadStream(sourcePath), destinationFS.createWriteStream(destPath));
        else if (stats.isDirectory()) await $31694e5356f611f3$export$d3a8044e3fef7335(sourceFS, sourcePath, destinationFS, destPath);
    }
}
$parcel$exportWildcard(module.exports, $9c7f58f4572b480f$exports);
$parcel$exportWildcard(module.exports, $72ad4eda33ff61b0$exports);
$parcel$exportWildcard(module.exports, $eab573fa27a303ce$exports);


//# sourceMappingURL=browser.js.map

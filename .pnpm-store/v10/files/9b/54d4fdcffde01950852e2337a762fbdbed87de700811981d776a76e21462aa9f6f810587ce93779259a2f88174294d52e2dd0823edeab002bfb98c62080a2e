"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncMirror_1 = require("../backend/AsyncMirror");
var BundledHTTPRequest_1 = require("../backend/BundledHTTPRequest");
var CodeSandboxEditorFS_1 = require("../backend/CodeSandboxEditorFS");
// import IsoFS from '../backend/IsoFS';
var CodeSandboxFS_1 = require("../backend/CodeSandboxFS");
var DynamicHTTPRequest_1 = require("../backend/DynamicHTTPRequest");
// import Dropbox from '../backend/Dropbox';
// import Emscripten from '../backend/Emscripten';
var FolderAdapter_1 = require("../backend/FolderAdapter");
var HTTPRequest_1 = require("../backend/HTTPRequest");
var IndexedDB_1 = require("../backend/IndexedDB");
// import HTML5FS from '../backend/HTML5FS';
var InMemory_1 = require("../backend/InMemory");
var LocalStorage_1 = require("../backend/LocalStorage");
var MountableFileSystem_1 = require("../backend/MountableFileSystem");
var OverlayFS_1 = require("../backend/OverlayFS");
var UNPKGRequest_1 = require("../backend/UNPKGRequest");
var JSDelivrRequest_1 = require("../backend/JSDelivrRequest");
var WebsocketFS_1 = require("../backend/WebsocketFS");
var WorkerFS_1 = require("../backend/WorkerFS");
var ZipFS_1 = require("../backend/ZipFS");
var util_1 = require("./util");
// Monkey-patch `Create` functions to check options before file system initialization.
[AsyncMirror_1.default, InMemory_1.default, IndexedDB_1.default, FolderAdapter_1.default, OverlayFS_1.default, LocalStorage_1.default, MountableFileSystem_1.default, WorkerFS_1.default, BundledHTTPRequest_1.default, HTTPRequest_1.default, UNPKGRequest_1.default, JSDelivrRequest_1.default, ZipFS_1.default, CodeSandboxFS_1.default, CodeSandboxEditorFS_1.default, WebsocketFS_1.default, DynamicHTTPRequest_1.default].forEach(function (fsType) {
    var create = fsType.Create;
    fsType.Create = function (opts, cb) {
        var oneArg = typeof (opts) === 'function';
        var normalizedCb = oneArg ? opts : cb;
        var normalizedOpts = oneArg ? {} : opts;
        function wrappedCb(e) {
            if (e) {
                normalizedCb(e);
            }
            else {
                create.call(fsType, normalizedOpts, normalizedCb);
            }
        }
        (0, util_1.checkOptions)(fsType, normalizedOpts, wrappedCb);
    };
});
/**
 * @hidden
 */
var Backends = { AsyncMirror: AsyncMirror_1.default, FolderAdapter: FolderAdapter_1.default, InMemory: InMemory_1.default, IndexedDB: IndexedDB_1.default, OverlayFS: OverlayFS_1.default, LocalStorage: LocalStorage_1.default, MountableFileSystem: MountableFileSystem_1.default, WorkerFS: WorkerFS_1.default, BundledHTTPRequest: BundledHTTPRequest_1.default, HTTPRequest: HTTPRequest_1.default, UNPKGRequest: UNPKGRequest_1.default, JSDelivrRequest: JSDelivrRequest_1.default, XmlHttpRequest: HTTPRequest_1.default, ZipFS: ZipFS_1.default, CodeSandboxFS: CodeSandboxFS_1.default, CodeSandboxEditorFS: CodeSandboxEditorFS_1.default, WebsocketFS: WebsocketFS_1.default, DynamicHTTPRequest: DynamicHTTPRequest_1.default };
// Make sure all backends cast to FileSystemConstructor (for type checking)
var _ = Backends;
// tslint:disable-next-line:no-unused-expression
_; // eslint-disable-line no-unused-expressions
exports.default = Backends;
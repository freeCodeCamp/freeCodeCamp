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
exports.createVolume = exports.ObjectStore = void 0;
var volume_1 = require("./volume");
var node_1 = require("./node");
var ObjectStore = /** @class */ (function () {
    function ObjectStore(obj) {
        this.obj = obj;
    }
    ObjectStore.prototype.setItem = function (key, json) {
        this.obj[key] = JSON.stringify(json);
    };
    ObjectStore.prototype.getItem = function (key) {
        var data = this.obj[key];
        if (typeof data === void 0)
            return void 0;
        return JSON.parse(data);
    };
    ObjectStore.prototype.removeItem = function (key) {
        delete this.obj[key];
    };
    return ObjectStore;
}());
exports.ObjectStore = ObjectStore;
function createVolume(namespace, LS) {
    if (LS === void 0) { LS = localStorage; }
    var store = new ObjectStore(LS);
    var key = function (type, id) { return "memfs.".concat(namespace, ".").concat(type, ".").concat(id); };
    var NodeLocalStorage = /** @class */ (function (_super) {
        __extends(NodeLocalStorage, _super);
        function NodeLocalStorage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NodeLocalStorage.prototype, "Key", {
            get: function () {
                if (!this._key)
                    this._key = key('ino', this.ino);
                return this._key;
            },
            enumerable: false,
            configurable: true
        });
        NodeLocalStorage.prototype.sync = function () {
            store.setItem(this.Key, this.toJSON());
        };
        NodeLocalStorage.prototype.touch = function () {
            _super.prototype.touch.call(this);
            this.sync();
        };
        NodeLocalStorage.prototype.del = function () {
            _super.prototype.del.call(this);
            store.removeItem(this.Key);
        };
        return NodeLocalStorage;
    }(node_1.Node));
    var LinkLocalStorage = /** @class */ (function (_super) {
        __extends(LinkLocalStorage, _super);
        function LinkLocalStorage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(LinkLocalStorage.prototype, "Key", {
            get: function () {
                if (!this._key)
                    this._key = key('link', this.getPath());
                return this._key;
            },
            enumerable: false,
            configurable: true
        });
        LinkLocalStorage.prototype.sync = function () {
            store.setItem(this.Key, this.toJSON());
        };
        return LinkLocalStorage;
    }(node_1.Link));
    return /** @class */ (function (_super) {
        __extends(VolumeLocalStorage, _super);
        function VolumeLocalStorage() {
            return _super.call(this, {
                Node: NodeLocalStorage,
                Link: LinkLocalStorage,
            }) || this;
        }
        VolumeLocalStorage.prototype.createLink = function (parent, name, isDirectory, perm) {
            var link = _super.prototype.createLink.call(this, parent, name, isDirectory, perm);
            store.setItem(key('link', link.getPath()), link.toJSON());
            return link;
        };
        VolumeLocalStorage.prototype.deleteLink = function (link) {
            store.removeItem(key('link', link.getPath()));
            return _super.prototype.deleteLink.call(this, link);
        };
        return VolumeLocalStorage;
    }(volume_1.Volume));
}
exports.createVolume = createVolume;

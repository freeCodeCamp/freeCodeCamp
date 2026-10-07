'use strict';

var utils = require('../../utils-5d2e6c36.js');
var nodebox = require('@codesandbox/nodebox');
var base = require('../../base-c7317183.js');
var consoleHook = require('../../consoleHook-0b461d1e.js');
require('outvariant');
require('dequal');

function loadPreviewIframe(iframe, url) {
    return utils.__awaiter(this, void 0, void 0, function () {
        var contentWindow, TIME_OUT, MAX_MANY_TIRES, tries, timeout;
        return utils.__generator(this, function (_a) {
            contentWindow = iframe.contentWindow;
            utils.nullthrows(contentWindow, "Failed to await preview iframe: no content window found");
            TIME_OUT = 90000;
            MAX_MANY_TIRES = 20;
            tries = 0;
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var triesToSetUrl = function () {
                        var onLoadPage = function () {
                            clearTimeout(timeout);
                            tries = MAX_MANY_TIRES;
                            resolve();
                            iframe.removeEventListener("load", onLoadPage);
                        };
                        if (tries >= MAX_MANY_TIRES) {
                            reject(utils.createError("Could not able to connect to preview."));
                            return;
                        }
                        iframe.setAttribute("src", url);
                        timeout = setTimeout(function () {
                            triesToSetUrl();
                            iframe.removeEventListener("load", onLoadPage);
                        }, TIME_OUT);
                        tries = tries + 1;
                        iframe.addEventListener("load", onLoadPage);
                    };
                    iframe.addEventListener("error", function () { return reject(new Error("Iframe error")); });
                    iframe.addEventListener("abort", function () { return reject(new Error("Aborted")); });
                    triesToSetUrl();
                })];
        });
    });
}
var setPreviewIframeProperties = function (iframe, options) {
    iframe.style.border = "0";
    iframe.style.width = options.width || "100%";
    iframe.style.height = options.height || "100%";
    iframe.style.overflow = "hidden";
    iframe.allow = "cross-origin-isolated";
};

/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/explicit-function-return-type, no-restricted-globals, @typescript-eslint/no-explicit-any  */
function setupHistoryListeners(_a) {
    var scope = _a.scope;
    // @ts-ignore
    var origHistoryProto = window.history.__proto__;
    var historyList = [];
    var historyPosition = 0;
    var dispatchMessage = function (url) {
        parent.postMessage({
            type: "urlchange",
            url: url,
            back: historyPosition > 0,
            forward: historyPosition < historyList.length - 1,
            channelId: scope.channelId,
        }, "*");
    };
    function pushHistory(url, state) {
        // remove "future" locations
        historyList.splice(historyPosition + 1);
        historyList.push({ url: url, state: state });
        historyPosition = historyList.length - 1;
    }
    Object.assign(window.history, {
        go: function (delta) {
            var newPos = historyPosition + delta;
            if (newPos >= 0 && newPos <= historyList.length - 1) {
                historyPosition = newPos;
                var _a = historyList[historyPosition], url = _a.url, state = _a.state;
                origHistoryProto.replaceState.call(window.history, state, "", url);
                var newURL = document.location.href;
                dispatchMessage(newURL);
                window.dispatchEvent(new PopStateEvent("popstate", { state: state }));
            }
        },
        back: function () {
            window.history.go(-1);
        },
        forward: function () {
            window.history.go(1);
        },
        pushState: function (state, title, url) {
            origHistoryProto.replaceState.call(window.history, state, title, url);
            pushHistory(url, state);
            dispatchMessage(document.location.href);
        },
        replaceState: function (state, title, url) {
            origHistoryProto.replaceState.call(window.history, state, title, url);
            historyList[historyPosition] = { state: state, url: url };
            dispatchMessage(document.location.href);
        },
    });
    function handleMessage(_a) {
        var data = _a.data;
        if (data.type === "urlback") {
            history.back();
        }
        else if (data.type === "urlforward") {
            history.forward();
        }
        else if (data.type === "refresh") {
            document.location.reload();
        }
    }
    window.addEventListener("message", handleMessage);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function watchResize(_a) {
    var scope = _a.scope;
    var lastHeight = 0;
    function getDocumentHeight() {
        if (typeof window === "undefined")
            return 0;
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.offsetHeight);
    }
    function sendResizeEvent() {
        var height = getDocumentHeight();
        if (lastHeight !== height) {
            window.parent.postMessage({
                type: "resize",
                height: height,
                codesandbox: true,
                channelId: scope.channelId,
            }, "*");
        }
        lastHeight = height;
    }
    sendResizeEvent();
    var throttle;
    var observer = new MutationObserver(function () {
        if (throttle === undefined) {
            sendResizeEvent();
            throttle = setTimeout(function () {
                throttle = undefined;
            }, 300);
        }
    });
    observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
    });
    /**
     * Ideally we should only use a `MutationObserver` to trigger a resize event,
     * however, we noted that it's not 100% reliable, so we went for polling strategy as well
     */
    setInterval(sendResizeEvent, 300);
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
var scripts = [
    { code: setupHistoryListeners.toString(), id: "historyListener" },
    {
        code: "function consoleHook({ scope }) {" + consoleHook.consoleHook + "\n};",
        id: "consoleHook",
    },
    { code: watchResize.toString(), id: "watchResize" },
];
var injectScriptToIframe = function (iframe, channelId) {
    scripts.forEach(function (_a) {
        var _b;
        var code = _a.code, id = _a.id;
        var message = {
            uid: id,
            type: nodebox.INJECT_MESSAGE_TYPE,
            code: "exports.activate = ".concat(code),
            scope: { channelId: channelId },
        };
        (_b = iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(message, "*");
    });
};

/* eslint-disable no-console,@typescript-eslint/no-explicit-any,prefer-rest-params,@typescript-eslint/explicit-module-boundary-types */
var SandpackNode = /** @class */ (function (_super) {
    utils.__extends(SandpackNode, _super);
    function SandpackNode(selector, sandboxInfo, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, selector, sandboxInfo, utils.__assign(utils.__assign({}, options), { bundlerURL: options.bundlerURL })) || this;
        _this._modulesCache = new Map();
        _this.messageChannelId = consoleHook.generateRandomId();
        _this._initPromise = null;
        _this.emitter = new consoleHook.EventEmitter();
        // Assign iframes
        _this.manageIframes(selector);
        // Init emulator
        _this.emulator = new nodebox.Nodebox({
            iframe: _this.emulatorIframe,
            runtimeUrl: _this.options.bundlerURL,
        });
        // Trigger initial compile
        _this.updateSandbox(sandboxInfo);
        return _this;
    }
    // Initialize nodebox, should only ever be called once
    SandpackNode.prototype._init = function (files) {
        return utils.__awaiter(this, void 0, void 0, function () {
            return utils.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emulator.connect()];
                    case 1:
                        _a.sent();
                        // 2. Setup
                        return [4 /*yield*/, this.emulator.fs.init(files)];
                    case 2:
                        // 2. Setup
                        _a.sent();
                        // 2.1 Other dependencies
                        return [4 /*yield*/, this.globalListeners()];
                    case 3:
                        // 2.1 Other dependencies
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * It initializes the emulator and provide it with files, template and script to run
     */
    SandpackNode.prototype.compile = function (files) {
        return utils.__awaiter(this, void 0, void 0, function () {
            var shellId, err_1;
            return utils.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        // 1. Init
                        this.status = "initializing";
                        this.dispatch({ type: "start", firstLoad: true });
                        if (!this._initPromise) {
                            this._initPromise = this._init(files);
                        }
                        return [4 /*yield*/, this._initPromise];
                    case 1:
                        _a.sent();
                        this.dispatch({ type: "connected" });
                        return [4 /*yield*/, this.createShellProcessFromTask(files)];
                    case 2:
                        shellId = (_a.sent()).id;
                        // 4. Launch Preview
                        return [4 /*yield*/, this.createPreviewURLFromId(shellId)];
                    case 3:
                        // 4. Launch Preview
                        _a.sent();
                        return [4 /*yield*/, this.setLocationURLIntoIFrame()];
                    case 4:
                        _a.sent();
                        // 5. Returns to consumer
                        this.dispatchDoneMessage();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        this.dispatch({
                            type: "action",
                            action: "notification",
                            notificationType: "error",
                            title: consoleHook.getMessageFromError(err_1),
                        });
                        this.dispatch({ type: "done", compilatonError: true });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * It creates a new shell and run the starting task
     */
    SandpackNode.prototype.createShellProcessFromTask = function (files) {
        return utils.__awaiter(this, void 0, void 0, function () {
            var packageJsonContent;
            var _a;
            var _this = this;
            return utils.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        packageJsonContent = consoleHook.readBuffer(files["/package.json"]);
                        this.emulatorCommand = consoleHook.findStartScriptPackageJson(packageJsonContent);
                        this.emulatorShellProcess = this.emulator.shell.create();
                        // Shell listeners
                        return [4 /*yield*/, this.emulatorShellProcess.on("exit", function (exitCode) {
                                _this.dispatch({
                                    type: "action",
                                    action: "notification",
                                    notificationType: "error",
                                    title: utils.createError("Error: process.exit(".concat(exitCode, ") called.")),
                                });
                            })];
                    case 1:
                        // Shell listeners
                        _b.sent();
                        return [4 /*yield*/, this.emulatorShellProcess.on("progress", function (data) {
                                var _a, _b;
                                if (data.state === "command_running" ||
                                    data.state === "starting_command") {
                                    _this.dispatch({
                                        type: "shell/progress",
                                        data: utils.__assign(utils.__assign({}, data), { command: [
                                                (_a = _this.emulatorCommand) === null || _a === void 0 ? void 0 : _a[0],
                                                (_b = _this.emulatorCommand) === null || _b === void 0 ? void 0 : _b[1].join(" "),
                                            ].join(" ") }),
                                    });
                                    _this.status = "installing-dependencies";
                                    return;
                                }
                                _this.dispatch({ type: "shell/progress", data: data });
                            })];
                    case 2:
                        _b.sent();
                        this.emulatorShellProcess.stdout.on("data", function (data) {
                            _this.dispatch({ type: "stdout", payload: { data: data, type: "out" } });
                        });
                        this.emulatorShellProcess.stderr.on("data", function (data) {
                            _this.dispatch({ type: "stdout", payload: { data: data, type: "err" } });
                        });
                        return [4 /*yield*/, (_a = this.emulatorShellProcess).runCommand.apply(_a, this.emulatorCommand)];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    SandpackNode.prototype.createPreviewURLFromId = function (id) {
        var _a;
        return utils.__awaiter(this, void 0, void 0, function () {
            var url;
            return utils.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.iframePreviewUrl = undefined;
                        return [4 /*yield*/, this.emulator.preview.getByShellId(id)];
                    case 1:
                        url = (_b.sent()).url;
                        this.iframePreviewUrl = url + ((_a = this.options.startRoute) !== null && _a !== void 0 ? _a : "");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Nodebox needs to handle two types of iframes at the same time:
     *
     * 1. Runtime iframe: where the emulator process runs, which is responsible
     *    for creating the other iframes (hidden);
     * 2. Preview iframes: any other node process that contains a PORT (public);
     */
    SandpackNode.prototype.manageIframes = function (selector) {
        var _a;
        /**
         * Pick the preview iframe
         */
        if (typeof selector === "string") {
            var element = document.querySelector(selector);
            utils.nullthrows(element, "The element '".concat(selector, "' was not found"));
            this.iframe = document.createElement("iframe");
            element === null || element === void 0 ? void 0 : element.appendChild(this.iframe);
        }
        else {
            this.iframe = selector;
        }
        // Set preview iframe styles
        setPreviewIframeProperties(this.iframe, this.options);
        utils.nullthrows(this.iframe.parentNode, "The given iframe does not have a parent.");
        /**
         * Create the runtime iframe, which is hidden sibling
         * from the preview one
         */
        this.emulatorIframe = document.createElement("iframe");
        this.emulatorIframe.classList.add("sp-bridge-frame");
        (_a = this.iframe.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(this.emulatorIframe);
    };
    SandpackNode.prototype.setLocationURLIntoIFrame = function () {
        return utils.__awaiter(this, void 0, void 0, function () {
            return utils.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.iframePreviewUrl) return [3 /*break*/, 2];
                        return [4 /*yield*/, loadPreviewIframe(this.iframe, this.iframePreviewUrl)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send all messages and events to tell to the
     * consumer that the bundler is ready without any error
     */
    SandpackNode.prototype.dispatchDoneMessage = function () {
        this.status = "done";
        this.dispatch({ type: "done", compilatonError: false });
        if (this.iframePreviewUrl) {
            this.dispatch({
                type: "urlchange",
                url: this.iframePreviewUrl,
                back: false,
                forward: false,
            });
        }
    };
    SandpackNode.prototype.globalListeners = function () {
        return utils.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return utils.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.addEventListener("message", function (event) {
                            if (event.data.type === nodebox.PREVIEW_LOADED_MESSAGE_TYPE) {
                                injectScriptToIframe(_this.iframe, _this.messageChannelId);
                            }
                            if (event.data.type === "urlchange" &&
                                event.data.channelId === _this.messageChannelId) {
                                _this.dispatch({
                                    type: "urlchange",
                                    url: event.data.url,
                                    back: event.data.back,
                                    forward: event.data.forward,
                                });
                            }
                            else if (event.data.channelId === _this.messageChannelId) {
                                _this.dispatch(event.data);
                            }
                        });
                        return [4 /*yield*/, this.emulator.fs.watch(["*"], [
                                ".next",
                                "node_modules",
                                "build",
                                "dist",
                                "vendor",
                                ".config",
                                ".vuepress",
                            ], function (message) { return utils.__awaiter(_this, void 0, void 0, function () {
                                var event, path, type, _a, content, newContent, err_2;
                                return utils.__generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!message)
                                                return [2 /*return*/];
                                            event = message;
                                            path = "newPath" in event
                                                ? event.newPath
                                                : "path" in event
                                                    ? event.path
                                                    : "";
                                            return [4 /*yield*/, this.emulator.fs.stat(path)];
                                        case 1:
                                            type = (_b.sent()).type;
                                            if (type !== "file")
                                                return [2 /*return*/, null];
                                            _b.label = 2;
                                        case 2:
                                            _b.trys.push([2, 10, , 11]);
                                            _a = event.type;
                                            switch (_a) {
                                                case "change": return [3 /*break*/, 3];
                                                case "create": return [3 /*break*/, 3];
                                                case "remove": return [3 /*break*/, 5];
                                                case "rename": return [3 /*break*/, 6];
                                                case "close": return [3 /*break*/, 8];
                                            }
                                            return [3 /*break*/, 9];
                                        case 3: return [4 /*yield*/, this.emulator.fs.readFile(event.path, "utf8")];
                                        case 4:
                                            content = _b.sent();
                                            this.dispatch({
                                                type: "fs/change",
                                                path: event.path,
                                                content: content,
                                            });
                                            this._modulesCache.set(event.path, consoleHook.writeBuffer(content));
                                            return [3 /*break*/, 9];
                                        case 5:
                                            this.dispatch({
                                                type: "fs/remove",
                                                path: event.path,
                                            });
                                            this._modulesCache.delete(event.path);
                                            return [3 /*break*/, 9];
                                        case 6:
                                            this.dispatch({
                                                type: "fs/remove",
                                                path: event.oldPath,
                                            });
                                            this._modulesCache.delete(event.oldPath);
                                            return [4 /*yield*/, this.emulator.fs.readFile(event.newPath, "utf8")];
                                        case 7:
                                            newContent = _b.sent();
                                            this.dispatch({
                                                type: "fs/change",
                                                path: event.newPath,
                                                content: newContent,
                                            });
                                            this._modulesCache.set(event.newPath, consoleHook.writeBuffer(newContent));
                                            return [3 /*break*/, 9];
                                        case 8: return [3 /*break*/, 9];
                                        case 9: return [3 /*break*/, 11];
                                        case 10:
                                            err_2 = _b.sent();
                                            this.dispatch({
                                                type: "action",
                                                action: "notification",
                                                notificationType: "error",
                                                title: consoleHook.getMessageFromError(err_2),
                                            });
                                            return [3 /*break*/, 11];
                                        case 11: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * PUBLIC Methods
     */
    SandpackNode.prototype.restartShellProcess = function () {
        var _a;
        return utils.__awaiter(this, void 0, void 0, function () {
            return utils.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.emulatorShellProcess && this.emulatorCommand)) return [3 /*break*/, 3];
                        // 1. Set the loading state and clean the URL
                        this.dispatch({ type: "start", firstLoad: true });
                        this.status = "initializing";
                        // 2. Exit shell
                        return [4 /*yield*/, this.emulatorShellProcess.kill()];
                    case 1:
                        // 2. Exit shell
                        _b.sent();
                        (_a = this.iframe) === null || _a === void 0 ? void 0 : _a.removeAttribute("attr");
                        this.emulator.fs.rm("/node_modules/.vite", {
                            recursive: true,
                            force: true,
                        });
                        // 3 Run command again
                        return [4 /*yield*/, this.compile(Object.fromEntries(this._modulesCache))];
                    case 2:
                        // 3 Run command again
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SandpackNode.prototype.updateSandbox = function (setup) {
        var _this = this;
        var _a;
        var modules = consoleHook.fromBundlerFilesToFS(setup.files);
        /**
         * Update file changes
         */
        if (((_a = this.emulatorShellProcess) === null || _a === void 0 ? void 0 : _a.state) === "running") {
            Object.entries(modules).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (!_this._modulesCache.get(key) ||
                    consoleHook.readBuffer(value) !== consoleHook.readBuffer(_this._modulesCache.get(key))) {
                    _this.emulator.fs.writeFile(key, value, { recursive: true });
                }
            });
            return;
        }
        /**
         * Pass init files to the bundler
         */
        this.dispatch({
            codesandbox: true,
            modules: modules,
            template: setup.template,
            type: "compile",
        });
        /**
         * Add modules to cache, this will ensure uniqueness changes
         *
         * Keep it after the compile action, in order to update the cache at the right moment
         */
        Object.entries(modules).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            _this._modulesCache.set(key, consoleHook.writeBuffer(value));
        });
    };
    SandpackNode.prototype.dispatch = function (message) {
        var _a, _b;
        return utils.__awaiter(this, void 0, void 0, function () {
            var _c;
            return utils.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = message.type;
                        switch (_c) {
                            case "compile": return [3 /*break*/, 1];
                            case "refresh": return [3 /*break*/, 2];
                            case "urlback": return [3 /*break*/, 4];
                            case "urlforward": return [3 /*break*/, 4];
                            case "shell/restart": return [3 /*break*/, 5];
                            case "shell/openPreview": return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        this.compile(message.modules);
                        return [3 /*break*/, 8];
                    case 2: return [4 /*yield*/, this.setLocationURLIntoIFrame()];
                    case 3:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        (_b = (_a = this.iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(message, "*");
                        return [3 /*break*/, 8];
                    case 5:
                        this.restartShellProcess();
                        return [3 /*break*/, 8];
                    case 6:
                        window.open(this.iframePreviewUrl, "_blank");
                        return [3 /*break*/, 8];
                    case 7:
                        this.emitter.dispatch(message);
                        _d.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SandpackNode.prototype.listen = function (listener) {
        return this.emitter.listener(listener);
    };
    SandpackNode.prototype.destroy = function () {
        this.emulatorIframe.remove();
        this.emitter.cleanup();
    };
    return SandpackNode;
}(base.SandpackClient));

exports.SandpackNode = SandpackNode;

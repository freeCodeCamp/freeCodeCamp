'use strict';

var utils = require('../../utils-5d2e6c36.js');
var dequal = require('dequal');
var base = require('../../base-c7317183.js');
var mimeDB = require('mime-db');
require('outvariant');

/**
 * This file is a copy of the resolver from the `codesandbox-api` package.
 * We wanted to avoid to reference codesandbox-api because of the code that runs on load in the package.
 * The plan is to take some time and refactor codesandbox-api into what it was supposed to be in the first place,
 * an abstraction over the actions that can be dispatched between the bundler and the iframe.
 */
var Protocol = /** @class */ (function () {
    function Protocol(type, handleMessage, protocol) {
        var _this = this;
        this.type = type;
        this.handleMessage = handleMessage;
        this.protocol = protocol;
        this._disposeMessageListener = this.protocol.channelListen(function (msg) { return utils.__awaiter(_this, void 0, void 0, function () {
            var message, result, response, err_1, response;
            return utils.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(msg.type === this.getTypeId() && msg.method)) return [3 /*break*/, 4];
                        message = msg;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handleMessage(message)];
                    case 2:
                        result = _a.sent();
                        response = {
                            type: this.getTypeId(),
                            msgId: message.msgId,
                            result: result,
                        };
                        this.protocol.dispatch(response);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        response = {
                            type: this.getTypeId(),
                            msgId: message.msgId,
                            error: {
                                message: err_1.message,
                            },
                        };
                        this.protocol.dispatch(response);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }
    Protocol.prototype.getTypeId = function () {
        return "protocol-".concat(this.type);
    };
    Protocol.prototype.dispose = function () {
        this._disposeMessageListener();
    };
    return Protocol;
}());

var IFrameProtocol = /** @class */ (function () {
    function IFrameProtocol(iframe, origin) {
        // React to messages from any iframe
        this.globalListeners = {};
        this.globalListenersCount = 0;
        // React to messages from the iframe owned by this instance
        this.channelListeners = {};
        this.channelListenersCount = 0;
        // Random number to identify this instance of the client when messages are coming from multiple iframes
        this.channelId = Math.floor(Math.random() * 1000000);
        this.frameWindow = iframe.contentWindow;
        this.origin = origin;
        this.globalListeners = [];
        this.channelListeners = [];
        this.eventListener = this.eventListener.bind(this);
        if (typeof window !== "undefined") {
            window.addEventListener("message", this.eventListener);
        }
    }
    IFrameProtocol.prototype.cleanup = function () {
        window.removeEventListener("message", this.eventListener);
        this.globalListeners = {};
        this.channelListeners = {};
        this.globalListenersCount = 0;
        this.channelListenersCount = 0;
    };
    // Sends the channelId and triggers an iframeHandshake promise to resolve,
    // so the iframe can start listening for messages (based on the id)
    IFrameProtocol.prototype.register = function () {
        if (!this.frameWindow) {
            return;
        }
        this.frameWindow.postMessage({
            type: "register-frame",
            origin: document.location.origin,
            id: this.channelId,
        }, this.origin);
    };
    // Messages are dispatched from the client directly to the instance iframe
    IFrameProtocol.prototype.dispatch = function (message) {
        if (!this.frameWindow) {
            return;
        }
        this.frameWindow.postMessage(utils.__assign({ $id: this.channelId, codesandbox: true }, message), this.origin);
    };
    // Add a listener that is called on any message coming from an iframe in the page
    // This is needed for the `initialize` message which comes without a channelId
    IFrameProtocol.prototype.globalListen = function (listener) {
        var _this = this;
        if (typeof listener !== "function") {
            return function () {
                return;
            };
        }
        var listenerId = this.globalListenersCount;
        this.globalListeners[listenerId] = listener;
        this.globalListenersCount++;
        return function () {
            delete _this.globalListeners[listenerId];
        };
    };
    // Add a listener that is called on any message coming from an iframe with the instance channelId
    // All other messages (eg: from other iframes) are ignored
    IFrameProtocol.prototype.channelListen = function (listener) {
        var _this = this;
        if (typeof listener !== "function") {
            return function () {
                return;
            };
        }
        var listenerId = this.channelListenersCount;
        this.channelListeners[listenerId] = listener;
        this.channelListenersCount++;
        return function () {
            delete _this.channelListeners[listenerId];
        };
    };
    // Handles message windows coming from iframes
    IFrameProtocol.prototype.eventListener = function (evt) {
        // skip events originating from different iframes
        if (evt.source !== this.frameWindow) {
            return;
        }
        var message = evt.data;
        if (!message.codesandbox) {
            return;
        }
        Object.values(this.globalListeners).forEach(function (listener) {
            return listener(message);
        });
        if (message.$id !== this.channelId) {
            return;
        }
        Object.values(this.channelListeners).forEach(function (listener) {
            return listener(message);
        });
    };
    return IFrameProtocol;
}());

var extensionMap = new Map();
var entries = Object.entries(mimeDB);
for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _a$1 = entries_1[_i], mimetype = _a$1[0], entry = _a$1[1];
    // eslint-disable-next-line
    // @ts-ignore
    if (!entry.extensions) {
        continue;
    }
    // eslint-disable-next-line
    // @ts-ignore
    var extensions = entry.extensions;
    if (extensions.length) {
        for (var _b = 0, extensions_1 = extensions; _b < extensions_1.length; _b++) {
            var ext = extensions_1[_b];
            extensionMap.set(ext, mimetype);
        }
    }
}
var EXTENSIONS_MAP = extensionMap;

var CHANNEL_NAME = "$CSB_RELAY";

var MAX_CLIENT_DEPENDENCY_COUNT = 50;
function getTemplate(pkg, 
/* eslint-disable @typescript-eslint/no-explicit-any */
modules) {
    if (!pkg) {
        return "static";
    }
    var _a = pkg.dependencies, dependencies = _a === void 0 ? {} : _a, _b = pkg.devDependencies, devDependencies = _b === void 0 ? {} : _b;
    var totalDependencies = utils.__spreadArray(utils.__spreadArray([], Object.keys(dependencies), true), Object.keys(devDependencies), true);
    var moduleNames = Object.keys(modules);
    var adonis = ["@adonisjs/framework", "@adonisjs/core"];
    if (totalDependencies.some(function (dep) { return adonis.indexOf(dep) > -1; })) {
        return "adonis";
    }
    var nuxt = ["nuxt", "nuxt-edge", "nuxt-ts", "nuxt-ts-edge", "nuxt3"];
    if (totalDependencies.some(function (dep) { return nuxt.indexOf(dep) > -1; })) {
        return "nuxt";
    }
    if (totalDependencies.indexOf("next") > -1) {
        return "next";
    }
    var apollo = [
        "apollo-server",
        "apollo-server-express",
        "apollo-server-hapi",
        "apollo-server-koa",
        "apollo-server-lambda",
        "apollo-server-micro",
    ];
    if (totalDependencies.some(function (dep) { return apollo.indexOf(dep) > -1; })) {
        return "apollo";
    }
    if (totalDependencies.indexOf("mdx-deck") > -1) {
        return "mdx-deck";
    }
    if (totalDependencies.indexOf("gridsome") > -1) {
        return "gridsome";
    }
    if (totalDependencies.indexOf("vuepress") > -1) {
        return "vuepress";
    }
    if (totalDependencies.indexOf("ember-cli") > -1) {
        return "ember";
    }
    if (totalDependencies.indexOf("sapper") > -1) {
        return "sapper";
    }
    if (totalDependencies.indexOf("gatsby") > -1) {
        return "gatsby";
    }
    if (totalDependencies.indexOf("quasar") > -1) {
        return "quasar";
    }
    if (totalDependencies.indexOf("@docusaurus/core") > -1) {
        return "docusaurus";
    }
    if (totalDependencies.indexOf("remix") > -1) {
        return "remix";
    }
    if (totalDependencies.indexOf("astro") > -1) {
        return "node";
    }
    // CLIENT
    if (moduleNames.some(function (m) { return m.endsWith(".re"); })) {
        return "reason";
    }
    var parcel = ["parcel-bundler", "parcel"];
    if (totalDependencies.some(function (dep) { return parcel.indexOf(dep) > -1; })) {
        return "parcel";
    }
    var dojo = ["@dojo/core", "@dojo/framework"];
    if (totalDependencies.some(function (dep) { return dojo.indexOf(dep) > -1; })) {
        return "@dojo/cli-create-app";
    }
    if (totalDependencies.indexOf("@nestjs/core") > -1 ||
        totalDependencies.indexOf("@nestjs/common") > -1) {
        return "nest";
    }
    if (totalDependencies.indexOf("react-styleguidist") > -1) {
        return "styleguidist";
    }
    if (totalDependencies.indexOf("react-scripts") > -1) {
        return "create-react-app";
    }
    if (totalDependencies.indexOf("react-scripts-ts") > -1) {
        return "create-react-app-typescript";
    }
    if (totalDependencies.indexOf("@angular/core") > -1) {
        return "angular-cli";
    }
    if (totalDependencies.indexOf("preact-cli") > -1) {
        return "preact-cli";
    }
    if (totalDependencies.indexOf("@sveltech/routify") > -1 ||
        totalDependencies.indexOf("@roxi/routify") > -1) {
        return "node";
    }
    if (totalDependencies.indexOf("vite") > -1) {
        return "node";
    }
    if (totalDependencies.indexOf("@frontity/core") > -1) {
        return "node";
    }
    if (totalDependencies.indexOf("svelte") > -1) {
        return "svelte";
    }
    if (totalDependencies.indexOf("vue") > -1) {
        return "vue-cli";
    }
    if (totalDependencies.indexOf("cx") > -1) {
        return "cxjs";
    }
    var nodeDeps = [
        "express",
        "koa",
        "nodemon",
        "ts-node",
        "@tensorflow/tfjs-node",
        "webpack-dev-server",
        "snowpack",
    ];
    if (totalDependencies.some(function (dep) { return nodeDeps.indexOf(dep) > -1; })) {
        return "node";
    }
    if (Object.keys(dependencies).length >= MAX_CLIENT_DEPENDENCY_COUNT) {
        // The dependencies are too much for client sandboxes to handle
        return "node";
    }
    return undefined;
}
function getExtension(filepath) {
    var parts = filepath.split(".");
    if (parts.length <= 1) {
        return "";
    }
    else {
        var ext = parts[parts.length - 1];
        return ext;
    }
}

var _a;
var SUFFIX_PLACEHOLDER = "-{{suffix}}";
var BUNDLER_URL = "https://".concat((_a = "2.19.8") === null || _a === void 0 ? void 0 : _a.replace(/\./g, "-")).concat(SUFFIX_PLACEHOLDER, "-sandpack.codesandbox.io/");
var SandpackRuntime = /** @class */ (function (_super) {
    utils.__extends(SandpackRuntime, _super);
    function SandpackRuntime(selector, sandboxSetup, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, selector, sandboxSetup, options) || this;
        _this.getTranspilerContext = function () {
            return new Promise(function (resolve) {
                var unsubscribe = _this.listen(function (message) {
                    if (message.type === "transpiler-context") {
                        resolve(message.data);
                        unsubscribe();
                    }
                });
                _this.dispatch({ type: "get-transpiler-context" });
            });
        };
        _this.getTranspiledFiles = function () {
            return new Promise(function (resolve) {
                var unsubscribe = _this.listen(function (message) {
                    if (message.type === "all-modules") {
                        resolve(message.data);
                        unsubscribe();
                    }
                });
                _this.dispatch({ type: "get-modules" });
            });
        };
        _this.bundlerURL = _this.createBundlerURL();
        _this.bundlerState = undefined;
        _this.errors = [];
        _this.status = "initializing";
        if (typeof selector === "string") {
            _this.selector = selector;
            var element = document.querySelector(selector);
            utils.nullthrows(element, "The element '".concat(selector, "' was not found"));
            _this.element = element;
            _this.iframe = document.createElement("iframe");
            _this.initializeElement();
        }
        else {
            _this.element = selector;
            _this.iframe = selector;
        }
        if (!_this.iframe.getAttribute("sandbox")) {
            _this.iframe.setAttribute("sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock");
            _this.iframe.setAttribute("allow", "accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-read; clipboard-write; xr-spatial-tracking;");
        }
        _this.setLocationURLIntoIFrame();
        _this.iframeProtocol = new IFrameProtocol(_this.iframe, _this.bundlerURL);
        _this.unsubscribeGlobalListener = _this.iframeProtocol.globalListen(function (mes) {
            if (mes.type !== "initialized" || !_this.iframe.contentWindow) {
                return;
            }
            _this.iframeProtocol.register();
            if (_this.options.fileResolver) {
                _this.fileResolverProtocol = new Protocol("fs", function (data) { return utils.__awaiter(_this, void 0, void 0, function () {
                    return utils.__generator(this, function (_a) {
                        if (data.method === "isFile") {
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            return [2 /*return*/, this.options.fileResolver.isFile(data.params[0])];
                        }
                        else if (data.method === "readFile") {
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            return [2 /*return*/, this.options.fileResolver.readFile(data.params[0])];
                        }
                        else {
                            throw new Error("Method not supported");
                        }
                    });
                }); }, _this.iframeProtocol);
            }
            _this.updateSandbox(_this.sandboxSetup, true);
        });
        _this.unsubscribeChannelListener = _this.iframeProtocol.channelListen(function (mes) {
            switch (mes.type) {
                case "start": {
                    _this.errors = [];
                    break;
                }
                case "status": {
                    _this.status = mes.status;
                    break;
                }
                case "action": {
                    if (mes.action === "show-error") {
                        _this.errors = utils.__spreadArray(utils.__spreadArray([], _this.errors, true), [utils.extractErrorDetails(mes)], false);
                    }
                    break;
                }
                case "done": {
                    _this.status = "done";
                    break;
                }
                case "state": {
                    _this.bundlerState = mes.state;
                    break;
                }
            }
        });
        if (options.experimental_enableServiceWorker) {
            _this.serviceWorkerHandshake();
        }
        return _this;
    }
    SandpackRuntime.prototype.createBundlerURL = function () {
        var _a;
        var bundlerURL = this.options.bundlerURL || BUNDLER_URL;
        // if it's a custom, skip the rest
        if (this.options.bundlerURL) {
            return bundlerURL;
        }
        if (this.options.teamId) {
            bundlerURL =
                bundlerURL.replace("https://", "https://" + this.options.teamId + "-") +
                    "?cache=".concat(Date.now());
        }
        if (this.options.experimental_enableServiceWorker) {
            var suffixes = [];
            suffixes.push(Math.random().toString(36).slice(4));
            bundlerURL = bundlerURL.replace(SUFFIX_PLACEHOLDER, "-".concat((_a = this.options.experimental_stableServiceWorkerId) !== null && _a !== void 0 ? _a : suffixes.join("-")));
        }
        else {
            bundlerURL = bundlerURL.replace(SUFFIX_PLACEHOLDER, "");
        }
        return bundlerURL;
    };
    SandpackRuntime.prototype.serviceWorkerHandshake = function () {
        var _this = this;
        var channel = new MessageChannel();
        var iframeContentWindow = this.iframe.contentWindow;
        if (!iframeContentWindow) {
            throw new Error("Could not get iframe contentWindow");
        }
        var port = channel.port1;
        port.onmessage = function (evt) {
            if (typeof evt.data === "object" && evt.data.$channel === CHANNEL_NAME) {
                switch (evt.data.$type) {
                    case "preview/ready":
                        // no op for now
                        break;
                    case "preview/request":
                        _this.handleWorkerRequest(evt.data, port);
                        break;
                }
            }
        };
        var sendMessage = function () {
            var initMsg = {
                $channel: CHANNEL_NAME,
                $type: "preview/init",
            };
            iframeContentWindow.postMessage(initMsg, "*", [channel.port2]);
            _this.iframe.removeEventListener("load", sendMessage);
        };
        this.iframe.addEventListener("load", sendMessage);
    };
    SandpackRuntime.prototype.handleWorkerRequest = function (request, port) {
        return utils.__awaiter(this, void 0, void 0, function () {
            var notFound, filepath_1, headers, files, file, modulesFromManager, body, extension, foundMimetype, responseMessage, err_1;
            return utils.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        notFound = function () {
                            var responseMessage = {
                                $channel: CHANNEL_NAME,
                                $type: "preview/response",
                                id: request.id,
                                headers: {
                                    "Content-Type": "text/html; charset=utf-8",
                                },
                                status: 404,
                                body: "File not found",
                            };
                            port.postMessage(responseMessage);
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        filepath_1 = new URL(request.url, this.bundlerURL).pathname;
                        headers = {};
                        files = this.getFiles();
                        file = files[filepath_1];
                        if (!!file) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getTranspiledFiles()];
                    case 2:
                        modulesFromManager = _a.sent();
                        file = modulesFromManager.find(function (item) {
                            return item.path.endsWith(filepath_1);
                        });
                        if (!file) {
                            notFound();
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        body = file.code;
                        if (!headers["Content-Type"]) {
                            extension = getExtension(filepath_1);
                            foundMimetype = EXTENSIONS_MAP.get(extension);
                            if (foundMimetype) {
                                headers["Content-Type"] = foundMimetype;
                            }
                        }
                        responseMessage = {
                            $channel: CHANNEL_NAME,
                            $type: "preview/response",
                            id: request.id,
                            headers: headers,
                            status: 200,
                            body: body,
                        };
                        port.postMessage(responseMessage);
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.error(err_1);
                        notFound();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SandpackRuntime.prototype.setLocationURLIntoIFrame = function () {
        var _a;
        var urlSource = this.options.startRoute
            ? new URL(this.options.startRoute, this.bundlerURL).toString()
            : this.bundlerURL;
        (_a = this.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.location.replace(urlSource);
        this.iframe.src = urlSource;
    };
    SandpackRuntime.prototype.destroy = function () {
        this.unsubscribeChannelListener();
        this.unsubscribeGlobalListener();
        this.iframeProtocol.cleanup();
    };
    SandpackRuntime.prototype.updateOptions = function (options) {
        if (!dequal.dequal(this.options, options)) {
            this.options = options;
            this.updateSandbox();
        }
    };
    SandpackRuntime.prototype.updateSandbox = function (sandboxSetup, isInitializationCompile) {
        var _a, _b, _c, _d;
        if (sandboxSetup === void 0) { sandboxSetup = this.sandboxSetup; }
        this.sandboxSetup = utils.__assign(utils.__assign({}, this.sandboxSetup), sandboxSetup);
        var files = this.getFiles();
        var modules = Object.keys(files).reduce(function (prev, next) {
            var _a;
            return (utils.__assign(utils.__assign({}, prev), (_a = {}, _a[next] = {
                code: files[next].code,
                path: next,
            }, _a)));
        }, {});
        var packageJSON = JSON.parse(utils.createPackageJSON(this.sandboxSetup.dependencies, this.sandboxSetup.devDependencies, this.sandboxSetup.entry));
        try {
            packageJSON = JSON.parse(files["/package.json"].code);
        }
        catch (e) {
            console.error(utils.createError("could not parse package.json file: " + e.message));
        }
        // TODO move this to a common format
        var normalizedModules = Object.keys(files).reduce(function (prev, next) {
            var _a;
            return (utils.__assign(utils.__assign({}, prev), (_a = {}, _a[next] = {
                content: files[next].code,
                path: next,
            }, _a)));
        }, {});
        this.dispatch(utils.__assign(utils.__assign({}, this.options), { type: "compile", codesandbox: true, version: 3, isInitializationCompile: isInitializationCompile, modules: modules, reactDevTools: this.options.reactDevTools, externalResources: this.options.externalResources || [], hasFileResolver: Boolean(this.options.fileResolver), disableDependencyPreprocessing: this.sandboxSetup.disableDependencyPreprocessing, experimental_enableServiceWorker: this.options.experimental_enableServiceWorker, template: this.sandboxSetup.template ||
                getTemplate(packageJSON, normalizedModules), showOpenInCodeSandbox: (_a = this.options.showOpenInCodeSandbox) !== null && _a !== void 0 ? _a : true, showErrorScreen: (_b = this.options.showErrorScreen) !== null && _b !== void 0 ? _b : true, showLoadingScreen: (_c = this.options.showLoadingScreen) !== null && _c !== void 0 ? _c : false, skipEval: this.options.skipEval || false, clearConsoleDisabled: !this.options.clearConsoleOnFirstCompile, logLevel: (_d = this.options.logLevel) !== null && _d !== void 0 ? _d : utils.SandpackLogLevel.Info, customNpmRegistries: this.options.customNpmRegistries, teamId: this.options.teamId, sandboxId: this.options.sandboxId }));
    };
    SandpackRuntime.prototype.dispatch = function (message) {
        /**
         * Intercept "refresh" dispatch: this will make sure
         * that the iframe is still in the location it's supposed to be.
         * External links inside the iframe will change the location and
         * prevent the user from navigating back.
         */
        if (message.type === "refresh") {
            this.setLocationURLIntoIFrame();
            if (this.options.experimental_enableServiceWorker) {
                this.serviceWorkerHandshake();
            }
        }
        this.iframeProtocol.dispatch(message);
    };
    SandpackRuntime.prototype.listen = function (listener) {
        return this.iframeProtocol.channelListen(listener);
    };
    /**
     * Get the URL of the contents of the current sandbox
     */
    SandpackRuntime.prototype.getCodeSandboxURL = function () {
        var files = this.getFiles();
        var paramFiles = Object.keys(files).reduce(function (prev, next) {
            var _a;
            return (utils.__assign(utils.__assign({}, prev), (_a = {}, _a[next.replace("/", "")] = {
                content: files[next].code,
                isBinary: false,
            }, _a)));
        }, {});
        return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
            method: "POST",
            body: JSON.stringify({ files: paramFiles }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(function (x) { return x.json(); })
            .then(function (res) { return ({
            sandboxId: res.sandbox_id,
            editorUrl: "https://codesandbox.io/s/".concat(res.sandbox_id),
            embedUrl: "https://codesandbox.io/embed/".concat(res.sandbox_id),
        }); });
    };
    SandpackRuntime.prototype.getFiles = function () {
        var sandboxSetup = this.sandboxSetup;
        if (sandboxSetup.files["/package.json"] === undefined) {
            return utils.addPackageJSONIfNeeded(sandboxSetup.files, sandboxSetup.dependencies, sandboxSetup.devDependencies, sandboxSetup.entry);
        }
        return this.sandboxSetup.files;
    };
    SandpackRuntime.prototype.initializeElement = function () {
        this.iframe.style.border = "0";
        this.iframe.style.width = this.options.width || "100%";
        this.iframe.style.height = this.options.height || "100%";
        this.iframe.style.overflow = "hidden";
        utils.nullthrows(this.element.parentNode, "The given iframe does not have a parent.");
        this.element.parentNode.replaceChild(this.iframe, this.element);
    };
    return SandpackRuntime;
}(base.SandpackClient));

exports.SandpackRuntime = SandpackRuntime;

'use strict';

var utils = require('./utils-5d2e6c36.js');
var staticBrowserServer = require('static-browser-server');
var consoleHook = require('./consoleHook-0b461d1e.js');
var base = require('./base-c7317183.js');
require('outvariant');
require('dequal');

var insertHtmlAfterRegex = function (regex, content, insertable) {
    var match = regex.exec(content);
    if (match && match.length >= 1) {
        var offset = match.index + match[0].length;
        var prefix = content.substring(0, offset);
        var suffix = content.substring(offset);
        return prefix + insertable + suffix;
    }
};
var readBuffer = function (content) {
    if (typeof content === "string") {
        return content;
    }
    else {
        return new TextDecoder().decode(content);
    }
};
var validateHtml = function (content) {
    // Make it a string
    var contentString = readBuffer(content);
    var domParser = new DOMParser();
    var doc = domParser.parseFromString(contentString, "text/html");
    if (!doc.documentElement.getAttribute("lang")) {
        doc.documentElement.setAttribute("lang", "en");
    }
    var html = doc.documentElement.outerHTML;
    return "<!DOCTYPE html>\n".concat(html);
};

var SandpackStatic = /** @class */ (function (_super) {
    utils.__extends(SandpackStatic, _super);
    function SandpackStatic(selector, sandboxSetup, options) {
        if (options === void 0) { options = {}; }
        var _a;
        var _this = _super.call(this, selector, sandboxSetup, options) || this;
        _this.files = new Map();
        _this.status = "initializing";
        _this.emitter = new consoleHook.EventEmitter();
        _this.previewController = new staticBrowserServer.PreviewController({
            baseUrl: (_a = options.bundlerURL) !== null && _a !== void 0 ? _a : "https://preview.sandpack-static-server.codesandbox.io",
            // filepath is always normalized to start with / and not end with a slash
            getFileContent: function (filepath) {
                var content = _this.files.get(filepath);
                if (!content) {
                    throw new Error("File not found");
                }
                if (filepath.endsWith(".html") || filepath.endsWith(".htm")) {
                    try {
                        content = validateHtml(content);
                        content = _this.injectProtocolScript(content);
                        content = _this.injectExternalResources(content, options.externalResources);
                        content = _this.injectScriptIntoHead(content, {
                            script: consoleHook.consoleHook,
                            scope: { channelId: consoleHook.generateRandomId() },
                        });
                    }
                    catch (err) {
                        console.error("Runtime injection failed", err);
                    }
                }
                return content;
            },
        });
        if (typeof selector === "string") {
            _this.selector = selector;
            var element = document.querySelector(selector);
            _this.element = element;
            _this.iframe = document.createElement("iframe");
        }
        else {
            _this.element = selector;
            _this.iframe = selector;
        }
        if (!_this.iframe.getAttribute("sandbox")) {
            _this.iframe.setAttribute("sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock");
            _this.iframe.setAttribute("allow", "accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-read; clipboard-write; xr-spatial-tracking;");
        }
        _this.eventListener = _this.eventListener.bind(_this);
        if (typeof window !== "undefined") {
            window.addEventListener("message", _this.eventListener);
        }
        // Dispatch very first compile action
        _this.updateSandbox();
        return _this;
    }
    SandpackStatic.prototype.injectContentIntoHead = function (content, contentToInsert) {
        var _a;
        // Make it a string
        content = readBuffer(content);
        // Inject script
        content =
            (_a = insertHtmlAfterRegex(/<head[^<>]*>/g, content, "\n" + contentToInsert)) !== null && _a !== void 0 ? _a : contentToInsert + "\n" + content;
        return content;
    };
    SandpackStatic.prototype.injectProtocolScript = function (content) {
        var scriptToInsert = "<script>\n  window.addEventListener(\"message\", (message) => {\n    if(message.data.type === \"refresh\") {\n      window.location.reload();\n    }\n  })\n</script>";
        return this.injectContentIntoHead(content, scriptToInsert);
    };
    SandpackStatic.prototype.injectExternalResources = function (content, externalResources) {
        if (externalResources === void 0) { externalResources = []; }
        var tagsToInsert = externalResources
            .map(function (resource) {
            var match = resource.match(/\.([^.]*)$/);
            var fileType = match === null || match === void 0 ? void 0 : match[1];
            if (fileType === "css" || resource.includes("fonts.googleapis")) {
                return "<link rel=\"stylesheet\" href=\"".concat(resource, "\">");
            }
            if (fileType === "js") {
                return "<script src=\"".concat(resource, "\"></script>");
            }
            throw new Error("Unable to determine file type for external resource: ".concat(resource));
        })
            .join("\n");
        return this.injectContentIntoHead(content, tagsToInsert);
    };
    SandpackStatic.prototype.injectScriptIntoHead = function (content, opts) {
        var script = opts.script, _a = opts.scope, scope = _a === void 0 ? {} : _a;
        var scriptToInsert = "\n    <script>\n      const scope = ".concat(JSON.stringify(scope), ";\n      ").concat(script, "\n    </script>\n    ").trim();
        return this.injectContentIntoHead(content, scriptToInsert);
    };
    SandpackStatic.prototype.updateSandbox = function (setup, _isInitializationCompile) {
        if (setup === void 0) { setup = this.sandboxSetup; }
        var modules = consoleHook.fromBundlerFilesToFS(setup.files);
        /**
         * Pass init files to the bundler
         */
        this.dispatch({
            codesandbox: true,
            modules: modules,
            template: setup.template,
            type: "compile",
        });
    };
    SandpackStatic.prototype.compile = function (files) {
        return utils.__awaiter(this, void 0, void 0, function () {
            var previewUrl;
            return utils.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.files = new Map(Object.entries(files));
                        return [4 /*yield*/, this.previewController.initPreview()];
                    case 1:
                        previewUrl = _a.sent();
                        this.iframe.setAttribute("src", previewUrl);
                        this.status = "done";
                        this.dispatch({ type: "done", compilatonError: false });
                        this.dispatch({
                            type: "urlchange",
                            url: previewUrl,
                            back: false,
                            forward: false,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // Handles message windows coming from iframes
    SandpackStatic.prototype.eventListener = function (evt) {
        // skip events originating from different iframes
        if (evt.source !== this.iframe.contentWindow) {
            return;
        }
        var message = evt.data;
        if (!message.codesandbox) {
            return;
        }
        this.dispatch(message);
    };
    /**
     * Bundler communication
     */
    SandpackStatic.prototype.dispatch = function (message) {
        var _a;
        switch (message.type) {
            case "compile":
                this.compile(message.modules);
                break;
            default:
                (_a = this.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, "*");
                this.emitter.dispatch(message);
        }
    };
    SandpackStatic.prototype.listen = function (listener) {
        return this.emitter.listener(listener);
    };
    SandpackStatic.prototype.destroy = function () {
        this.emitter.cleanup();
        if (typeof window !== "undefined") {
            window.removeEventListener("message", this.eventListener);
        }
    };
    return SandpackStatic;
}(base.SandpackClient));

exports.SandpackStatic = SandpackStatic;

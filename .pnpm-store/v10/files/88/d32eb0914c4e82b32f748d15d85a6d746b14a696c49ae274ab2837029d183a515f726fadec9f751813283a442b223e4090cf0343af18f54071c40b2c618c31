import { _ as __awaiter, a as __generator } from './utils-52664384.mjs';
export { S as SandpackLogLevel, d as addPackageJSONIfNeeded, c as createError, b as createPackageJSON, e as extractErrorDetails, f as normalizePath, n as nullthrows } from './utils-52664384.mjs';
import 'outvariant';

function loadSandpackClient(iframeSelector, sandboxSetup, options) {
    var _a;
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var template, Client, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    template = (_a = sandboxSetup.template) !== null && _a !== void 0 ? _a : "parcel";
                    _b = template;
                    switch (_b) {
                        case "node": return [3 /*break*/, 1];
                        case "static": return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1: return [4 /*yield*/, import('./clients/node/index.mjs').then(function (m) { return m.SandpackNode; })];
                case 2:
                    Client = _c.sent();
                    return [3 /*break*/, 7];
                case 3: return [4 /*yield*/, import('./index-599aeaf7.mjs').then(function (m) { return m.SandpackStatic; })];
                case 4:
                    Client = _c.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, import('./clients/runtime/index.mjs').then(function (m) { return m.SandpackRuntime; })];
                case 6:
                    Client = _c.sent();
                    _c.label = 7;
                case 7: return [2 /*return*/, new Client(iframeSelector, sandboxSetup, options)];
            }
        });
    });
}

export { loadSandpackClient };

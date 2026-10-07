"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_path_sync_1 = require("../match-path-sync");
var Tests = require("./data/match-path-data");
describe("match-path-sync", function () {
    Tests.tests.forEach(function (t) {
        return it(t.name, function () {
            var matchPath = (0, match_path_sync_1.createMatchPath)(t.absoluteBaseUrl, t.paths, t.mainFields, t.addMatchAll);
            var result = matchPath(t.requestedModule, function (_) { return t.packageJson; }, function (name) { return t.existingFiles.indexOf(name) !== -1; }, t.extensions);
            // assert.equal(result, t.expectedPath);
            expect(result).toBe(t.expectedPath);
        });
    });
});
//# sourceMappingURL=match-path-sync.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_path_async_1 = require("../match-path-async");
var Tests = require("./data/match-path-data");
describe("match-path-async", function () {
    Tests.tests.forEach(function (t) {
        return it(t.name, function (done) {
            var matchPath = (0, match_path_async_1.createMatchPathAsync)(t.absoluteBaseUrl, t.paths, t.mainFields, t.addMatchAll);
            matchPath(t.requestedModule, function (_path, callback) { return callback(undefined, t.packageJson); }, function (path, callback) {
                return callback(undefined, t.existingFiles.indexOf(path) !== -1);
            }, t.extensions, function (_err, result) {
                // assert.equal(result, t.expectedPath);
                expect(result).toBe(t.expectedPath);
                done();
            });
        });
    });
});
//# sourceMappingURL=match-path-async.test.js.map
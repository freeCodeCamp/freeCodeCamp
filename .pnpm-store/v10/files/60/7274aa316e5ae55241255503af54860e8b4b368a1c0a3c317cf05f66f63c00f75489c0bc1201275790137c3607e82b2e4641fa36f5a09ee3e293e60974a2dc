"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapping_entry_1 = require("../mapping-entry");
var path_1 = require("path");
describe("mapping-entry", function () {
    it("should change to absolute paths and sort in longest prefix order", function () {
        var result = (0, mapping_entry_1.getAbsoluteMappingEntries)("/absolute/base/url", {
            "*": ["/foo1", "/foo2"],
            "longest/pre/fix/*": ["/foo2/bar"],
            "pre/fix/*": ["/foo3"],
        }, true);
        // assert.deepEqual(result, [
        //   {
        //     pattern: "longest/pre/fix/*",
        //     paths: [join("/absolute", "base", "url", "foo2", "bar")],
        //   },
        //   {
        //     pattern: "pre/fix/*",
        //     paths: [join("/absolute", "base", "url", "foo3")],
        //   },
        //   {
        //     pattern: "*",
        //     paths: [
        //       join("/absolute", "base", "url", "foo1"),
        //       join("/absolute", "base", "url", "foo2"),
        //     ],
        //   },
        // ]);
        expect(result).toEqual([
            {
                pattern: "longest/pre/fix/*",
                paths: [(0, path_1.join)("/absolute", "base", "url", "foo2", "bar")],
            },
            {
                pattern: "pre/fix/*",
                paths: [(0, path_1.join)("/absolute", "base", "url", "foo3")],
            },
            {
                pattern: "*",
                paths: [
                    (0, path_1.join)("/absolute", "base", "url", "foo1"),
                    (0, path_1.join)("/absolute", "base", "url", "foo2"),
                ],
            },
        ]);
    });
    it("should should add a match-all pattern when requested", function () {
        var result = (0, mapping_entry_1.getAbsoluteMappingEntries)("/absolute/base/url", {}, true);
        // assert.deepEqual(result, [
        //   {
        //     pattern: "*",
        //     paths: [join("/absolute", "base", "url", "*")],
        //   },
        // ]);
        expect(result).toEqual([
            {
                pattern: "*",
                paths: [(0, path_1.join)("/absolute", "base", "url", "*")],
            },
        ]);
        result = (0, mapping_entry_1.getAbsoluteMappingEntries)("/absolute/base/url", {}, false);
        // assert.deepEqual(result, []);
        expect(result).toEqual([]);
    });
});
//# sourceMappingURL=mapping-entry.test.js.map
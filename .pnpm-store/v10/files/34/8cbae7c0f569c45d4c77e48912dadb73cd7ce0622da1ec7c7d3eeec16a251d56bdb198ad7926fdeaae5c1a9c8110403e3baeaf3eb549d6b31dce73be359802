"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var try_path_1 = require("../try-path");
var path_1 = require("path");
describe("mapping-entry", function () {
    var abosolutePathMappings = [
        {
            pattern: "longest/pre/fix/*",
            paths: [(0, path_1.join)("/absolute", "base", "url", "foo2", "bar")],
        },
        { pattern: "pre/fix/*", paths: [(0, path_1.join)("/absolute", "base", "url", "foo3")] },
        { pattern: "*", paths: [(0, path_1.join)("/absolute", "base", "url", "foo1")] },
    ];
    var abosolutePathMappingsStarstWithSlash = [
        {
            pattern: "/opt/*",
            paths: [(0, path_1.join)("/absolute", "src", "aws-layer")],
        },
        {
            pattern: "*",
            paths: [(0, path_1.join)("/absolute", "src")],
        },
    ];
    it("should return no paths for relative requested module", function () {
        var result = (0, try_path_1.getPathsToTry)([".ts", "tsx"], abosolutePathMappings, "./requested-module");
        // assert.deepEqual(result, undefined);
        expect(result).toBeUndefined();
    });
    it("should return no paths if no pattern match the requested module", function () {
        var result = (0, try_path_1.getPathsToTry)([".ts", "tsx"], [
            {
                pattern: "longest/pre/fix/*",
                paths: [(0, path_1.join)("/absolute", "base", "url", "foo2", "bar")],
            },
            {
                pattern: "pre/fix/*",
                paths: [(0, path_1.join)("/absolute", "base", "url", "foo3")],
            },
        ], "requested-module");
        expect(result).toBeUndefined();
    });
    it("should get all paths that matches requested module", function () {
        var result = (0, try_path_1.getPathsToTry)([".ts", ".tsx"], abosolutePathMappings, "longest/pre/fix/requested-module");
        // assert.deepEqual(result, [
        //   // "longest/pre/fix/*"
        //   { type: "file", path: join("/absolute", "base", "url", "foo2", "bar") },
        //   {
        //     type: "extension",
        //     path: join("/absolute", "base", "url", "foo2", "bar.ts"),
        //   },
        //   {
        //     type: "extension",
        //     path: join("/absolute", "base", "url", "foo2", "bar.tsx"),
        //   },
        //   {
        //     type: "package",
        //     path: join("/absolute", "base", "url", "foo2", "bar", "package.json"),
        //   },
        //   {
        //     type: "index",
        //     path: join("/absolute", "base", "url", "foo2", "bar", "index.ts"),
        //   },
        //   {
        //     type: "index",
        //     path: join("/absolute", "base", "url", "foo2", "bar", "index.tsx"),
        //   },
        //   // "*"
        //   { type: "file", path: join("/absolute", "base", "url", "foo1") },
        //   { type: "extension", path: join("/absolute", "base", "url", "foo1.ts") },
        //   { type: "extension", path: join("/absolute", "base", "url", "foo1.tsx") },
        //   {
        //     type: "package",
        //     path: join("/absolute", "base", "url", "foo1", "package.json"),
        //   },
        //   {
        //     type: "index",
        //     path: join("/absolute", "base", "url", "foo1", "index.ts"),
        //   },
        //   {
        //     type: "index",
        //     path: join("/absolute", "base", "url", "foo1", "index.tsx"),
        //   },
        // ]);
        expect(result).toEqual([
            // "longest/pre/fix/*"
            { type: "file", path: (0, path_1.join)("/absolute", "base", "url", "foo2", "bar") },
            {
                type: "extension",
                path: (0, path_1.join)("/absolute", "base", "url", "foo2", "bar.ts"),
            },
            {
                type: "extension",
                path: (0, path_1.join)("/absolute", "base", "url", "foo2", "bar.tsx"),
            },
            {
                type: "package",
                path: (0, path_1.join)("/absolute", "base", "url", "foo2", "bar", "package.json"),
            },
            {
                type: "index",
                path: (0, path_1.join)("/absolute", "base", "url", "foo2", "bar", "index.ts"),
            },
            {
                type: "index",
                path: (0, path_1.join)("/absolute", "base", "url", "foo2", "bar", "index.tsx"),
            },
            // "*"
            { type: "file", path: (0, path_1.join)("/absolute", "base", "url", "foo1") },
            { type: "extension", path: (0, path_1.join)("/absolute", "base", "url", "foo1.ts") },
            { type: "extension", path: (0, path_1.join)("/absolute", "base", "url", "foo1.tsx") },
            {
                type: "package",
                path: (0, path_1.join)("/absolute", "base", "url", "foo1", "package.json"),
            },
            {
                type: "index",
                path: (0, path_1.join)("/absolute", "base", "url", "foo1", "index.ts"),
            },
            {
                type: "index",
                path: (0, path_1.join)("/absolute", "base", "url", "foo1", "index.tsx"),
            },
        ]);
    });
    it("should resolve paths starting with a slash", function () {
        var result = (0, try_path_1.getPathsToTry)([".ts"], abosolutePathMappingsStarstWithSlash, "/opt/utils");
        expect(result).toEqual([
            // "opt/*"
            {
                path: (0, path_1.join)("/absolute", "src", "aws-layer"),
                type: "file",
            },
            {
                path: (0, path_1.join)("/absolute", "src", "aws-layer.ts"),
                type: "extension",
            },
            {
                path: (0, path_1.join)("/absolute", "src", "aws-layer", "package.json"),
                type: "package",
            },
            {
                path: (0, path_1.join)("/absolute", "src", "aws-layer", "index.ts"),
                type: "index",
            },
            // "*"
            {
                path: (0, path_1.join)("/absolute", "src"),
                type: "file",
            },
            {
                path: (0, path_1.join)("/absolute", "src.ts"),
                type: "extension",
            },
            {
                path: (0, path_1.join)("/absolute", "src", "package.json"),
                type: "package",
            },
            {
                path: (0, path_1.join)("/absolute", "src", "index.ts"),
                type: "index",
            },
        ]);
    });
});
// describe("match-star", () => {
//   it("should match star in last position", () => {
//     const result = matchStar("lib/*", "lib/mylib");
//     assert.equal(result, "mylib");
//   });
//   it("should match star in first position", () => {
//     const result = matchStar("*/lib", "mylib/lib");
//     assert.equal(result, "mylib");
//   });
// });
//# sourceMappingURL=try-path.test.js.map
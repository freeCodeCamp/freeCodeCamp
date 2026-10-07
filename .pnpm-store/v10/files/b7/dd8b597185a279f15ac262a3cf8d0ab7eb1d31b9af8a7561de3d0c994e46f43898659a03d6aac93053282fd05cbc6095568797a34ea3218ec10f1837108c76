"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsconfig_loader_1 = require("../tsconfig-loader");
var path_1 = require("path");
describe("tsconfig-loader", function () {
    it("should find tsconfig in cwd", function () {
        var result = (0, tsconfig_loader_1.tsConfigLoader)({
            cwd: "/foo/bar",
            getEnv: function (_) { return undefined; },
            loadSync: function (cwd) {
                return {
                    tsConfigPath: "".concat(cwd, "/tsconfig.json"),
                    baseUrl: "./",
                    paths: {},
                };
            },
        });
        // assert.equal(result.tsConfigPath, "/foo/bar/tsconfig.json");
        expect(result.tsConfigPath).toBe("/foo/bar/tsconfig.json");
    });
    it("should return loaderResult.tsConfigPath as undefined when not found", function () {
        var result = (0, tsconfig_loader_1.tsConfigLoader)({
            cwd: "/foo/bar",
            getEnv: function (_) { return undefined; },
            loadSync: function (_) {
                return {
                    tsConfigPath: undefined,
                    baseUrl: "./",
                    paths: {},
                };
            },
        });
        // assert.isUndefined(result.tsConfigPath);
        expect(result.tsConfigPath).toBeUndefined();
    });
    it("should use TS_NODE_PROJECT env if exists", function () {
        var result = (0, tsconfig_loader_1.tsConfigLoader)({
            cwd: "/foo/bar",
            getEnv: function (key) {
                return key === "TS_NODE_PROJECT" ? "/foo/baz" : undefined;
            },
            loadSync: function (cwd, fileName) {
                if (cwd === "/foo/bar" && fileName === "/foo/baz") {
                    return {
                        tsConfigPath: "/foo/baz/tsconfig.json",
                        baseUrl: "./",
                        paths: {},
                    };
                }
                return {
                    tsConfigPath: undefined,
                    baseUrl: "./",
                    paths: {},
                };
            },
        });
        // assert.equal(result.tsConfigPath, "/foo/baz/tsconfig.json");
        expect(result.tsConfigPath).toBe("/foo/baz/tsconfig.json");
    });
    it("should use TS_NODE_BASEURL env if exists", function () {
        var result = (0, tsconfig_loader_1.tsConfigLoader)({
            cwd: "/foo/bar",
            getEnv: function (key) {
                return key === "TS_NODE_BASEURL" ? "SOME_BASEURL" : undefined;
            },
            loadSync: function (_0, _1, baseUrl) {
                return {
                    tsConfigPath: undefined,
                    baseUrl: baseUrl,
                    paths: {},
                };
            },
        });
        // assert.equal(result.baseUrl, "SOME_BASEURL");
        expect(result.baseUrl).toBe("SOME_BASEURL");
    });
    it("should not use TS_NODE_BASEURL env if it does not exist", function () {
        var result = (0, tsconfig_loader_1.tsConfigLoader)({
            cwd: "/foo/bar",
            getEnv: function (_) {
                return undefined;
            },
            loadSync: function (_0, _1, baseUrl) {
                return {
                    tsConfigPath: undefined,
                    baseUrl: baseUrl,
                    paths: {},
                };
            },
        });
        // assert.equal(result.baseUrl, undefined);
        expect(result.baseUrl).toBeUndefined();
    });
});
describe("walkForTsConfig", function () {
    it("should find tsconfig in starting directory", function () {
        var pathToTsconfig = (0, path_1.join)("/root", "dir1", "tsconfig.json");
        var res = (0, tsconfig_loader_1.walkForTsConfig)((0, path_1.join)("/root", "dir1"), function (path) { return path === pathToTsconfig; });
        // assert.equal(res, pathToTsconfig);
        expect(res).toBe(pathToTsconfig);
    });
    it("should find tsconfig in parent directory", function () {
        var pathToTsconfig = (0, path_1.join)("/root", "tsconfig.json");
        var res = (0, tsconfig_loader_1.walkForTsConfig)((0, path_1.join)("/root", "dir1"), function (path) { return path === pathToTsconfig; });
        // assert.equal(res, pathToTsconfig);
        expect(res).toBe(pathToTsconfig);
    });
    it("should return undefined when reaching the top", function () {
        var res = (0, tsconfig_loader_1.walkForTsConfig)((0, path_1.join)("/root", "dir1", "kalle"), function () { return false; });
        // assert.equal(res, undefined);
        expect(res).toBeUndefined();
    });
});
describe("loadConfig", function () {
    it("should load a config", function () {
        var config = { compilerOptions: { baseUrl: "hej" } };
        var res = (0, tsconfig_loader_1.loadTsconfig)("/root/dir1/tsconfig.json", function (path) { return path === "/root/dir1/tsconfig.json"; }, function (_) { return JSON.stringify(config); });
        // assert.deepEqual(res, config);
        expect(res).toStrictEqual(config);
    });
    it("should load a config with comments", function () {
        var config = { compilerOptions: { baseUrl: "hej" } };
        var res = (0, tsconfig_loader_1.loadTsconfig)("/root/dir1/tsconfig.json", function (path) { return path === "/root/dir1/tsconfig.json"; }, function (_) { return "{\n          // my comment\n          \"compilerOptions\": { \n            \"baseUrl\": \"hej\"\n          }\n        }"; });
        // assert.deepEqual(res, config);
        expect(res).toStrictEqual(config);
    });
    it("should load a config with trailing commas", function () {
        var config = { compilerOptions: { baseUrl: "hej" } };
        var res = (0, tsconfig_loader_1.loadTsconfig)("/root/dir1/tsconfig.json", function (path) { return path === "/root/dir1/tsconfig.json"; }, function (_) { return "{\n          \"compilerOptions\": { \n            \"baseUrl\": \"hej\",\n          },\n        }"; });
        // assert.deepEqual(res, config);
        expect(res).toStrictEqual(config);
    });
    it("should throw an error including the file path when encountering invalid JSON5", function () {
        expect(function () {
            return (0, tsconfig_loader_1.loadTsconfig)("/root/dir1/tsconfig.json", function (path) { return path === "/root/dir1/tsconfig.json"; }, function (_) { return "{\n            \"compilerOptions\": {\n          }"; });
        }).toThrowError("/root/dir1/tsconfig.json is malformed JSON5: invalid end of input at 3:12");
    });
    it("should load a config with string extends and overwrite all options", function () {
        var firstConfig = {
            extends: "../base-config.json",
            compilerOptions: { baseUrl: "kalle", paths: { foo: ["bar2"] } },
        };
        var firstConfigPath = (0, path_1.join)("/root", "dir1", "tsconfig.json");
        var baseConfig = {
            compilerOptions: {
                baseUrl: "olle",
                paths: { foo: ["bar1"] },
                strict: true,
            },
        };
        var baseConfigPath = (0, path_1.join)("/root", "base-config.json");
        var res = (0, tsconfig_loader_1.loadTsconfig)((0, path_1.join)("/root", "dir1", "tsconfig.json"), function (path) { return path === firstConfigPath || path === baseConfigPath; }, function (path) {
            if (path === firstConfigPath) {
                return JSON.stringify(firstConfig);
            }
            if (path === baseConfigPath) {
                return JSON.stringify(baseConfig);
            }
            return "";
        });
        // assert.deepEqual(res, {
        //   extends: "../base-config.json",
        //   compilerOptions: {
        //     baseUrl: "kalle",
        //     paths: { foo: ["bar2"] },
        //     strict: true,
        //   },
        // });
        expect(res).toEqual({
            extends: "../base-config.json",
            compilerOptions: {
                baseUrl: "kalle",
                paths: { foo: ["bar2"] },
                strict: true,
            },
        });
    });
    it("should load a config with string extends from node_modules and overwrite all options", function () {
        var firstConfig = {
            extends: "my-package/base-config.json",
            compilerOptions: { baseUrl: "kalle", paths: { foo: ["bar2"] } },
        };
        var firstConfigPath = (0, path_1.join)("/root", "dir1", "tsconfig.json");
        var baseConfig = {
            compilerOptions: {
                baseUrl: "olle",
                paths: { foo: ["bar1"] },
                strict: true,
            },
        };
        var baseConfigPath = (0, path_1.join)("/root", "dir1", "node_modules", "my-package", "base-config.json");
        var res = (0, tsconfig_loader_1.loadTsconfig)((0, path_1.join)("/root", "dir1", "tsconfig.json"), function (path) { return path === firstConfigPath || path === baseConfigPath; }, function (path) {
            if (path === firstConfigPath) {
                return JSON.stringify(firstConfig);
            }
            if (path === baseConfigPath) {
                return JSON.stringify(baseConfig);
            }
            return "";
        });
        // assert.deepEqual(res, {
        //   extends: "my-package/base-config.json",
        //   compilerOptions: {
        //     baseUrl: "kalle",
        //     paths: { foo: ["bar2"] },
        //     strict: true,
        //   },
        // });
        expect(res).toEqual({
            extends: "my-package/base-config.json",
            compilerOptions: {
                baseUrl: "kalle",
                paths: { foo: ["bar2"] },
                strict: true,
            },
        });
    });
    it("should use baseUrl relative to location of extended tsconfig", function () {
        var firstConfig = { compilerOptions: { baseUrl: "." } };
        var firstConfigPath = (0, path_1.join)("/root", "first-config.json");
        var secondConfig = { extends: "../first-config.json" };
        var secondConfigPath = (0, path_1.join)("/root", "dir1", "second-config.json");
        var thirdConfig = { extends: "../second-config.json" };
        var thirdConfigPath = (0, path_1.join)("/root", "dir1", "dir2", "third-config.json");
        var res = (0, tsconfig_loader_1.loadTsconfig)((0, path_1.join)("/root", "dir1", "dir2", "third-config.json"), function (path) {
            return path === firstConfigPath ||
                path === secondConfigPath ||
                path === thirdConfigPath;
        }, function (path) {
            if (path === firstConfigPath) {
                return JSON.stringify(firstConfig);
            }
            if (path === secondConfigPath) {
                return JSON.stringify(secondConfig);
            }
            if (path === thirdConfigPath) {
                return JSON.stringify(thirdConfig);
            }
            return "";
        });
        // assert.deepEqual(res, {
        //   extends: "../second-config.json",
        //   compilerOptions: { baseUrl: join("..", "..") },
        // });
        expect(res).toEqual({
            extends: "../second-config.json",
            compilerOptions: { baseUrl: (0, path_1.join)("..", "..") },
        });
    });
    it("should load a config with array extends and overwrite all options", function () {
        var baseConfig1 = {
            compilerOptions: { baseUrl: ".", paths: { foo: ["bar"] } },
        };
        var baseConfig1Path = (0, path_1.join)("/root", "base-config-1.json");
        var baseConfig2 = { compilerOptions: { baseUrl: "." } };
        var baseConfig2Path = (0, path_1.join)("/root", "dir1", "base-config-2.json");
        var baseConfig3 = {
            compilerOptions: { baseUrl: ".", paths: { foo: ["bar2"] } },
        };
        var baseConfig3Path = (0, path_1.join)("/root", "dir1", "dir2", "base-config-3.json");
        var actualConfig = {
            extends: [
                "./base-config-1.json",
                "./dir1/base-config-2.json",
                "./dir1/dir2/base-config-3.json",
            ],
        };
        var actualConfigPath = (0, path_1.join)("/root", "tsconfig.json");
        var res = (0, tsconfig_loader_1.loadTsconfig)((0, path_1.join)("/root", "tsconfig.json"), function (path) {
            return [
                baseConfig1Path,
                baseConfig2Path,
                baseConfig3Path,
                actualConfigPath,
            ].indexOf(path) >= 0;
        }, function (path) {
            if (path === baseConfig1Path) {
                return JSON.stringify(baseConfig1);
            }
            if (path === baseConfig2Path) {
                return JSON.stringify(baseConfig2);
            }
            if (path === baseConfig3Path) {
                return JSON.stringify(baseConfig3);
            }
            if (path === actualConfigPath) {
                return JSON.stringify(actualConfig);
            }
            return "";
        });
        expect(res).toEqual({
            extends: [
                "./base-config-1.json",
                "./dir1/base-config-2.json",
                "./dir1/dir2/base-config-3.json",
            ],
            compilerOptions: {
                baseUrl: (0, path_1.join)("dir1", "dir2"),
                paths: { foo: ["bar2"] },
            },
        });
    });
    it("should load a config with array extends without .json extension", function () {
        var baseConfig = {
            compilerOptions: { baseUrl: ".", paths: { foo: ["bar"] } },
        };
        var baseConfigPath = (0, path_1.join)("/root", "base-config-1.json");
        var actualConfig = { extends: ["./base-config-1"] };
        var actualConfigPath = (0, path_1.join)("/root", "tsconfig.json");
        var res = (0, tsconfig_loader_1.loadTsconfig)((0, path_1.join)("/root", "tsconfig.json"), function (path) { return [baseConfigPath, actualConfigPath].indexOf(path) >= 0; }, function (path) {
            if (path === baseConfigPath) {
                return JSON.stringify(baseConfig);
            }
            if (path === actualConfigPath) {
                return JSON.stringify(actualConfig);
            }
            return "";
        });
        expect(res).toEqual({
            extends: ["./base-config-1"],
            compilerOptions: {
                baseUrl: ".",
                paths: { foo: ["bar"] },
            },
        });
    });
});
//# sourceMappingURL=tsconfig-loader.test.js.map
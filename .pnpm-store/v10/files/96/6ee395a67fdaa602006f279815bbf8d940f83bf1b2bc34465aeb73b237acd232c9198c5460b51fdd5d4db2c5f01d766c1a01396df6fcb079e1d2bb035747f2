import {
  loadTsconfig,
  tsConfigLoader,
  walkForTsConfig,
} from "../tsconfig-loader";
import { join } from "path";

describe("tsconfig-loader", () => {
  it("should find tsconfig in cwd", () => {
    const result = tsConfigLoader({
      cwd: "/foo/bar",
      getEnv: (_: string) => undefined,
      loadSync: (cwd: string) => {
        return {
          tsConfigPath: `${cwd}/tsconfig.json`,
          baseUrl: "./",
          paths: {},
        };
      },
    });

    // assert.equal(result.tsConfigPath, "/foo/bar/tsconfig.json");
    expect(result.tsConfigPath).toBe("/foo/bar/tsconfig.json");
  });

  it("should return loaderResult.tsConfigPath as undefined when not found", () => {
    const result = tsConfigLoader({
      cwd: "/foo/bar",
      getEnv: (_: string) => undefined,
      loadSync: (_: string) => {
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

  it("should use TS_NODE_PROJECT env if exists", () => {
    const result = tsConfigLoader({
      cwd: "/foo/bar",
      getEnv: (key: string) =>
        key === "TS_NODE_PROJECT" ? "/foo/baz" : undefined,
      loadSync: (cwd: string, fileName: string) => {
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

  it("should use TS_NODE_BASEURL env if exists", () => {
    const result = tsConfigLoader({
      cwd: "/foo/bar",
      getEnv: (key: string) =>
        key === "TS_NODE_BASEURL" ? "SOME_BASEURL" : undefined,
      loadSync: (_0: string, _1: string, baseUrl: string) => {
        return {
          tsConfigPath: undefined,
          baseUrl,
          paths: {},
        };
      },
    });

    // assert.equal(result.baseUrl, "SOME_BASEURL");
    expect(result.baseUrl).toBe("SOME_BASEURL");
  });

  it("should not use TS_NODE_BASEURL env if it does not exist", () => {
    const result = tsConfigLoader({
      cwd: "/foo/bar",
      getEnv: (_: string) => {
        return undefined;
      },
      loadSync: (_0: string, _1: string, baseUrl: string) => {
        return {
          tsConfigPath: undefined,
          baseUrl,
          paths: {},
        };
      },
    });

    // assert.equal(result.baseUrl, undefined);
    expect(result.baseUrl).toBeUndefined();
  });
});

describe("walkForTsConfig", () => {
  it("should find tsconfig in starting directory", () => {
    const pathToTsconfig = join("/root", "dir1", "tsconfig.json");
    const res = walkForTsConfig(
      join("/root", "dir1"),
      (path) => path === pathToTsconfig
    );
    // assert.equal(res, pathToTsconfig);
    expect(res).toBe(pathToTsconfig);
  });

  it("should find tsconfig in parent directory", () => {
    const pathToTsconfig = join("/root", "tsconfig.json");
    const res = walkForTsConfig(
      join("/root", "dir1"),
      (path) => path === pathToTsconfig
    );
    // assert.equal(res, pathToTsconfig);
    expect(res).toBe(pathToTsconfig);
  });

  it("should return undefined when reaching the top", () => {
    const res = walkForTsConfig(join("/root", "dir1", "kalle"), () => false);
    // assert.equal(res, undefined);
    expect(res).toBeUndefined();
  });
});

describe("loadConfig", () => {
  it("should load a config", () => {
    const config = { compilerOptions: { baseUrl: "hej" } };
    const res = loadTsconfig(
      "/root/dir1/tsconfig.json",
      (path) => path === "/root/dir1/tsconfig.json",
      (_) => JSON.stringify(config)
    );
    // assert.deepEqual(res, config);
    expect(res).toStrictEqual(config);
  });

  it("should load a config with comments", () => {
    const config = { compilerOptions: { baseUrl: "hej" } };
    const res = loadTsconfig(
      "/root/dir1/tsconfig.json",
      (path) => path === "/root/dir1/tsconfig.json",
      (_) => `{
          // my comment
          "compilerOptions": { 
            "baseUrl": "hej"
          }
        }`
    );
    // assert.deepEqual(res, config);
    expect(res).toStrictEqual(config);
  });

  it("should load a config with trailing commas", () => {
    const config = { compilerOptions: { baseUrl: "hej" } };
    const res = loadTsconfig(
      "/root/dir1/tsconfig.json",
      (path) => path === "/root/dir1/tsconfig.json",
      (_) => `{
          "compilerOptions": { 
            "baseUrl": "hej",
          },
        }`
    );
    // assert.deepEqual(res, config);
    expect(res).toStrictEqual(config);
  });

  it("should throw an error including the file path when encountering invalid JSON5", () => {
    expect(() =>
      loadTsconfig(
        "/root/dir1/tsconfig.json",
        (path) => path === "/root/dir1/tsconfig.json",
        (_) => `{
            "compilerOptions": {
          }`
      )
    ).toThrowError(
      "/root/dir1/tsconfig.json is malformed JSON5: invalid end of input at 3:12"
    );
  });

  it("should load a config with string extends and overwrite all options", () => {
    const firstConfig = {
      extends: "../base-config.json",
      compilerOptions: { baseUrl: "kalle", paths: { foo: ["bar2"] } },
    };
    const firstConfigPath = join("/root", "dir1", "tsconfig.json");
    const baseConfig = {
      compilerOptions: {
        baseUrl: "olle",
        paths: { foo: ["bar1"] },
        strict: true,
      },
    };
    const baseConfigPath = join("/root", "base-config.json");
    const res = loadTsconfig(
      join("/root", "dir1", "tsconfig.json"),
      (path) => path === firstConfigPath || path === baseConfigPath,
      (path) => {
        if (path === firstConfigPath) {
          return JSON.stringify(firstConfig);
        }
        if (path === baseConfigPath) {
          return JSON.stringify(baseConfig);
        }
        return "";
      }
    );

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

  it("should load a config with string extends from node_modules and overwrite all options", () => {
    const firstConfig = {
      extends: "my-package/base-config.json",
      compilerOptions: { baseUrl: "kalle", paths: { foo: ["bar2"] } },
    };
    const firstConfigPath = join("/root", "dir1", "tsconfig.json");
    const baseConfig = {
      compilerOptions: {
        baseUrl: "olle",
        paths: { foo: ["bar1"] },
        strict: true,
      },
    };
    const baseConfigPath = join(
      "/root",
      "dir1",
      "node_modules",
      "my-package",
      "base-config.json"
    );
    const res = loadTsconfig(
      join("/root", "dir1", "tsconfig.json"),
      (path) => path === firstConfigPath || path === baseConfigPath,
      (path) => {
        if (path === firstConfigPath) {
          return JSON.stringify(firstConfig);
        }
        if (path === baseConfigPath) {
          return JSON.stringify(baseConfig);
        }
        return "";
      }
    );

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

  it("should use baseUrl relative to location of extended tsconfig", () => {
    const firstConfig = { compilerOptions: { baseUrl: "." } };
    const firstConfigPath = join("/root", "first-config.json");
    const secondConfig = { extends: "../first-config.json" };
    const secondConfigPath = join("/root", "dir1", "second-config.json");
    const thirdConfig = { extends: "../second-config.json" };
    const thirdConfigPath = join("/root", "dir1", "dir2", "third-config.json");
    const res = loadTsconfig(
      join("/root", "dir1", "dir2", "third-config.json"),
      (path) =>
        path === firstConfigPath ||
        path === secondConfigPath ||
        path === thirdConfigPath,
      (path) => {
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
      }
    );

    // assert.deepEqual(res, {
    //   extends: "../second-config.json",
    //   compilerOptions: { baseUrl: join("..", "..") },
    // });
    expect(res).toEqual({
      extends: "../second-config.json",
      compilerOptions: { baseUrl: join("..", "..") },
    });
  });

  it("should load a config with array extends and overwrite all options", () => {
    const baseConfig1 = {
      compilerOptions: { baseUrl: ".", paths: { foo: ["bar"] } },
    };
    const baseConfig1Path = join("/root", "base-config-1.json");
    const baseConfig2 = { compilerOptions: { baseUrl: "." } };
    const baseConfig2Path = join("/root", "dir1", "base-config-2.json");
    const baseConfig3 = {
      compilerOptions: { baseUrl: ".", paths: { foo: ["bar2"] } },
    };
    const baseConfig3Path = join("/root", "dir1", "dir2", "base-config-3.json");
    const actualConfig = {
      extends: [
        "./base-config-1.json",
        "./dir1/base-config-2.json",
        "./dir1/dir2/base-config-3.json",
      ],
    };
    const actualConfigPath = join("/root", "tsconfig.json");

    const res = loadTsconfig(
      join("/root", "tsconfig.json"),
      (path) =>
        [
          baseConfig1Path,
          baseConfig2Path,
          baseConfig3Path,
          actualConfigPath,
        ].indexOf(path) >= 0,
      (path) => {
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
      }
    );

    expect(res).toEqual({
      extends: [
        "./base-config-1.json",
        "./dir1/base-config-2.json",
        "./dir1/dir2/base-config-3.json",
      ],
      compilerOptions: {
        baseUrl: join("dir1", "dir2"),
        paths: { foo: ["bar2"] },
      },
    });
  });

  it("should load a config with array extends without .json extension", () => {
    const baseConfig = {
      compilerOptions: { baseUrl: ".", paths: { foo: ["bar"] } },
    };
    const baseConfigPath = join("/root", "base-config-1.json");
    const actualConfig = { extends: ["./base-config-1"] };
    const actualConfigPath = join("/root", "tsconfig.json");

    const res = loadTsconfig(
      join("/root", "tsconfig.json"),
      (path) => [baseConfigPath, actualConfigPath].indexOf(path) >= 0,
      (path) => {
        if (path === baseConfigPath) {
          return JSON.stringify(baseConfig);
        }
        if (path === actualConfigPath) {
          return JSON.stringify(actualConfig);
        }
        return "";
      }
    );

    expect(res).toEqual({
      extends: ["./base-config-1"],
      compilerOptions: {
        baseUrl: ".",
        paths: { foo: ["bar"] },
      },
    });
  });
});

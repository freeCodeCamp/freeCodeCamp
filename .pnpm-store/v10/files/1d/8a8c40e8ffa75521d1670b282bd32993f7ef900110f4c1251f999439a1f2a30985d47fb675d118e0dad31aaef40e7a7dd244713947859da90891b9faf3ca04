"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_5EPDNTW3_exports = {};
__export(chunk_5EPDNTW3_exports, {
  jestConsoleContext: () => jestConsoleContext,
  jestContext: () => jestContext,
  jestStdoutContext: () => jestStdoutContext,
  processExitContext: () => processExitContext
});
module.exports = __toCommonJS(chunk_5EPDNTW3_exports);
var import_chunk_3UEKS5W6 = require("./chunk-3UEKS5W6.js");
var import_chunk_2ESYSVXG = require("./chunk-2ESYSVXG.js");
var import_node_path = __toESM(require("node:path"));
var import_fs_jetpack = (0, import_chunk_2ESYSVXG.__toESM)((0, import_chunk_3UEKS5W6.require_main)());
var import_tempy = (0, import_chunk_2ESYSVXG.__toESM)((0, import_chunk_3UEKS5W6.require_tempy)());
var jestContext = {
  new: function(ctx = {}) {
    const c = ctx;
    beforeEach(() => {
      const originalCwd = process.cwd();
      c.mocked = c.mocked ?? {
        cwd: process.cwd()
      };
      c.tmpDir = import_tempy.default.directory();
      c.fs = import_fs_jetpack.default.cwd(c.tmpDir);
      c.tree = (startFrom = c.tmpDir, indent = "") => {
        function* generateDirectoryTree(children2, indent2 = "") {
          for (const child of children2) {
            if (child.name === "node_modules" || child.name === ".git") {
              continue;
            }
            if (child.type === "dir") {
              yield `${indent2}\u2514\u2500\u2500 ${child.name}/`;
              yield* generateDirectoryTree(child.children, indent2 + "    ");
            } else if (child.type === "symlink") {
              yield `${indent2} -> ${child.relativePath}`;
            } else {
              yield `${indent2}\u2514\u2500\u2500 ${child.name}`;
            }
          }
        }
        const children = c.fs.inspectTree(startFrom, { relativePath: true, symlinks: "report" })?.children || [];
        return `
${[...generateDirectoryTree(children, indent)].join("\n")}
`;
      };
      c.fixture = (name) => {
        c.fs.copy(import_node_path.default.join(originalCwd, "src", "__tests__", "fixtures", name), ".", {
          overwrite: true
        });
        c.fs.symlink(import_node_path.default.join(originalCwd, "..", "client"), import_node_path.default.join(c.fs.cwd(), "node_modules", "@prisma", "client"));
      };
      c.cli = (...input) => {
        return (0, import_chunk_3UEKS5W6.execaNode)(import_node_path.default.join(originalCwd, "../cli/build/index.js"), input, {
          cwd: c.fs.cwd(),
          stdio: "pipe",
          all: true
        });
      };
      c.printDir = (dir, extensions) => {
        const content = c.fs.list(dir) ?? [];
        content.sort((a, b) => a.localeCompare(b));
        return content.filter((name) => extensions.includes(import_node_path.default.extname(name))).map((name) => `${name}:

${c.fs.read(import_node_path.default.join(dir, name))}`).join("\n\n");
      };
      process.chdir(c.tmpDir);
    });
    afterEach(() => {
      process.chdir(c.mocked.cwd);
    });
    return factory(ctx);
  }
};
function factory(ctx) {
  return {
    add(contextContributor) {
      const newCtx = contextContributor(ctx);
      return factory(newCtx);
    },
    assemble() {
      return ctx;
    }
  };
}
var jestConsoleContext = () => (c) => {
  const ctx = c;
  beforeEach(() => {
    ctx.mocked["console.error"] = jest.spyOn(console, "error").mockImplementation(() => {
    });
    ctx.mocked["console.log"] = jest.spyOn(console, "log").mockImplementation(() => {
    });
    ctx.mocked["console.info"] = jest.spyOn(console, "info").mockImplementation(() => {
    });
    ctx.mocked["console.warn"] = jest.spyOn(console, "warn").mockImplementation(() => {
    });
  });
  afterEach(() => {
    ctx.mocked["console.error"].mockRestore();
    ctx.mocked["console.log"].mockRestore();
    ctx.mocked["console.info"].mockRestore();
    ctx.mocked["console.warn"].mockRestore();
  });
  return ctx;
};
var jestStdoutContext = ({ normalizationRules } = { normalizationRules: [] }) => (c) => {
  const ctx = c;
  const normalize = (text, rules) => {
    for (const [pattern, replacement] of rules) {
      text = text.replace(pattern, replacement);
    }
    return text;
  };
  beforeEach(() => {
    ctx.mocked["process.stderr.write"] = jest.spyOn(process.stderr, "write").mockImplementation(() => true);
    ctx.mocked["process.stdout.write"] = jest.spyOn(process.stdout, "write").mockImplementation(() => true);
    ctx.normalizedCapturedStdout = () => normalize(ctx.mocked["process.stdout.write"].mock.calls.join(""), normalizationRules);
    ctx.normalizedCapturedStderr = () => normalize(ctx.mocked["process.stderr.write"].mock.calls.join(""), normalizationRules);
    ctx.clearCapturedStdout = () => ctx.mocked["process.stdout.write"].mockClear();
    ctx.clearCapturedStderr = () => ctx.mocked["process.stderr.write"].mockClear();
  });
  afterEach(() => {
    ctx.mocked["process.stderr.write"].mockRestore();
    ctx.mocked["process.stdout.write"].mockRestore();
  });
  return ctx;
};
var processExitContext = () => (c) => {
  const ctx = c;
  beforeEach(() => {
    ctx.mocked["process.exit"] = jest.spyOn(process, "exit").mockImplementation((number) => {
      throw new Error("process.exit: " + number);
    });
    ctx.recordedExitCode = () => ctx.mocked["process.exit"].mock.calls[0]?.[0];
  });
  afterEach(() => {
    ctx.mocked["process.exit"].mockRestore();
  });
  return ctx;
};

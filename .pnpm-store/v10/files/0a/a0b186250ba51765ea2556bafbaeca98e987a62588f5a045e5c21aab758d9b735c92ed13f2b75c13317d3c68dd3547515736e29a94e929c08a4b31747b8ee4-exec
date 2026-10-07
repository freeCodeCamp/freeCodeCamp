#!/usr/bin/env node
import { defineCommand, runMain } from 'citty';
import { resolve } from 'pathe';
import { consola } from 'consola';
import { a as addDependency, i as installDependencies, r as removeDependency, d as detectPackageManager, c as dedupeDependencies, f as runScript } from './shared/nypm.CLjaS_sz.mjs';
import 'pkg-types';
import 'node:module';
import 'tinyexec';
import 'node:fs';
import 'node:fs/promises';

const name = "nypm";
const version = "0.6.2";
const description = "Unified Package Manager for Node.js";

const operationArgs = {
  cwd: {
    type: "string",
    description: "Current working directory"
  },
  workspace: {
    type: "boolean",
    description: "Add to workspace"
  },
  silent: {
    type: "boolean",
    description: "Run in silent mode"
  },
  dry: {
    type: "boolean",
    description: "Run in dry run mode (does not execute commands)"
  }
};
const install = defineCommand({
  meta: {
    description: "Install dependencies"
  },
  args: {
    ...operationArgs,
    name: {
      type: "positional",
      description: "Dependency name",
      required: false
    },
    dev: {
      type: "boolean",
      alias: "D",
      description: "Add as dev dependency"
    },
    global: {
      type: "boolean",
      alias: "g",
      description: "Add globally"
    },
    "frozen-lockfile": {
      type: "boolean",
      description: "Install dependencies with frozen lock file"
    }
  },
  run: async ({ args }) => {
    const result = await (args._.length > 0 ? addDependency(args._, args) : installDependencies(args));
    handleRes(result, args);
  }
});
const remove = defineCommand({
  meta: {
    description: "Remove dependencies"
  },
  args: {
    name: {
      type: "positional",
      description: "Dependency name",
      required: true
    },
    ...operationArgs
  },
  run: async ({ args }) => {
    const result = await removeDependency(args._, args);
    handleRes(result, args);
  }
});
const detect = defineCommand({
  meta: {
    description: "Detect the current package manager"
  },
  args: {
    cwd: {
      type: "string",
      description: "Current working directory"
    }
  },
  run: async ({ args }) => {
    const cwd = resolve(args.cwd || ".");
    const packageManager = await detectPackageManager(cwd);
    if (packageManager?.warnings) {
      for (const warning of packageManager.warnings) {
        consola.warn(warning);
      }
    }
    if (!packageManager) {
      consola.error(`Cannot detect package manager in \`${cwd}\``);
      return process.exit(1);
    }
    consola.log(
      `Detected package manager in \`${cwd}\`: \`${packageManager.name}@${packageManager.version}\``
    );
  }
});
const dedupe = defineCommand({
  meta: {
    description: "Dedupe dependencies"
  },
  args: {
    cwd: {
      type: "string",
      description: "Current working directory"
    },
    silent: {
      type: "boolean",
      description: "Run in silent mode"
    },
    recreateLockFile: {
      type: "boolean",
      description: "Recreate lock file"
    }
  },
  run: async ({ args }) => {
    const result = await dedupeDependencies(args);
    handleRes(result, args);
  }
});
const run = defineCommand({
  meta: {
    description: "Run script"
  },
  args: {
    name: {
      type: "positional",
      description: "Script name",
      required: true
    },
    ...operationArgs
  },
  run: async ({ args }) => {
    const result = await runScript(args.name, {
      ...args,
      args: args._.slice(1)
    });
    handleRes(result, args);
  }
});
const main = defineCommand({
  meta: {
    name,
    version,
    description
  },
  subCommands: {
    install,
    i: install,
    add: install,
    remove,
    rm: remove,
    uninstall: remove,
    un: remove,
    detect,
    dedupe,
    run
  }
});
runMain(main);
function handleRes(result, args) {
  if (args.dry && !args.silent) {
    consola.log(`${result.exec?.command} ${result.exec?.args.join(" ")}`);
  }
}

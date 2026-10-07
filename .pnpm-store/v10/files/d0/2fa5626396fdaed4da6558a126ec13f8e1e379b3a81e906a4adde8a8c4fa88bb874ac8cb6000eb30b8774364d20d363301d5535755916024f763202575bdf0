import process from 'node:process';
import fs from 'node:fs/promises';
import path, { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { x } from 'tinyexec';

const AGENTS = [
  "npm",
  "yarn",
  "yarn@berry",
  "pnpm",
  "pnpm@6",
  "bun",
  "deno"
];
const LOCKS = {
  "bun.lock": "bun",
  "bun.lockb": "bun",
  "deno.lock": "deno",
  "pnpm-lock.yaml": "pnpm",
  "pnpm-workspace.yaml": "pnpm",
  "yarn.lock": "yarn",
  "package-lock.json": "npm",
  "npm-shrinkwrap.json": "npm"
};
const INSTALL_METADATA = {
  "node_modules/.deno/": "deno",
  "node_modules/.pnpm/": "pnpm",
  "node_modules/.yarn-state.yml": "yarn",
  // yarn v2+ (node-modules)
  "node_modules/.yarn_integrity": "yarn",
  // yarn v1
  "node_modules/.package-lock.json": "npm",
  ".pnp.cjs": "yarn",
  // yarn v3+ (pnp)
  ".pnp.js": "yarn",
  // yarn v2 (pnp)
  "bun.lock": "bun",
  "bun.lockb": "bun"
};

async function pathExists(path2, type) {
  try {
    const stat = await fs.stat(path2);
    return type === "file" ? stat.isFile() : stat.isDirectory();
  } catch {
    return false;
  }
}
function* lookup(cwd = process.cwd()) {
  let directory = path.resolve(cwd);
  const { root } = path.parse(directory);
  while (directory && directory !== root) {
    yield directory;
    directory = path.dirname(directory);
  }
}
async function parsePackageJson(filepath, onUnknown) {
  return !filepath || !pathExists(filepath, "file") ? null : await handlePackageManager(filepath, onUnknown);
}
async function detect(options = {}) {
  const {
    cwd,
    strategies = ["lockfile", "packageManager-field", "devEngines-field"],
    onUnknown
  } = options;
  let stopDir;
  if (typeof options.stopDir === "string") {
    const resolved = path.resolve(options.stopDir);
    stopDir = (dir) => dir === resolved;
  } else {
    stopDir = options.stopDir;
  }
  for (const directory of lookup(cwd)) {
    for (const strategy of strategies) {
      switch (strategy) {
        case "lockfile": {
          for (const lock of Object.keys(LOCKS)) {
            if (await pathExists(path.join(directory, lock), "file")) {
              const name = LOCKS[lock];
              const result = await parsePackageJson(path.join(directory, "package.json"), onUnknown);
              if (result)
                return result;
              else
                return { name, agent: name };
            }
          }
          break;
        }
        case "packageManager-field":
        case "devEngines-field": {
          const result = await parsePackageJson(path.join(directory, "package.json"), onUnknown);
          if (result)
            return result;
          break;
        }
        case "install-metadata": {
          for (const metadata of Object.keys(INSTALL_METADATA)) {
            const fileOrDir = metadata.endsWith("/") ? "dir" : "file";
            if (await pathExists(path.join(directory, metadata), fileOrDir)) {
              const name = INSTALL_METADATA[metadata];
              const agent = name === "yarn" ? isMetadataYarnClassic(metadata) ? "yarn" : "yarn@berry" : name;
              return { name, agent };
            }
          }
          break;
        }
      }
    }
    if (stopDir?.(directory))
      break;
  }
  return null;
}
function getNameAndVer(pkg) {
  const handelVer = (version) => version?.match(/\d+(\.\d+){0,2}/)?.[0] ?? version;
  if (typeof pkg.packageManager === "string") {
    const [name, ver] = pkg.packageManager.replace(/^\^/, "").split("@");
    return { name, ver: handelVer(ver) };
  }
  if (typeof pkg.devEngines?.packageManager?.name === "string") {
    return {
      name: pkg.devEngines.packageManager.name,
      ver: handelVer(pkg.devEngines.packageManager.version)
    };
  }
  return void 0;
}
async function handlePackageManager(filepath, onUnknown) {
  try {
    const pkg = JSON.parse(await fs.readFile(filepath, "utf8"));
    let agent;
    const nameAndVer = getNameAndVer(pkg);
    if (nameAndVer) {
      const name = nameAndVer.name;
      const ver = nameAndVer.ver;
      let version = ver;
      if (name === "yarn" && ver && Number.parseInt(ver) > 1) {
        agent = "yarn@berry";
        version = "berry";
        return { name, agent, version };
      } else if (name === "pnpm" && ver && Number.parseInt(ver) < 7) {
        agent = "pnpm@6";
        return { name, agent, version };
      } else if (AGENTS.includes(name)) {
        agent = name;
        return { name, agent, version };
      } else {
        return onUnknown?.(pkg.packageManager) ?? null;
      }
    }
  } catch {
  }
  return null;
}
function isMetadataYarnClassic(metadataPath) {
  return metadataPath.endsWith(".yarn_integrity");
}

// src/detect.ts
async function detectPackageManager(cwd = process.cwd()) {
  const result = await detect({
    cwd,
    onUnknown(packageManager) {
      console.warn("[@antfu/install-pkg] Unknown packageManager:", packageManager);
      return void 0;
    }
  });
  return result?.agent || null;
}
async function installPackage(names, options = {}) {
  const detectedAgent = options.packageManager || await detectPackageManager(options.cwd) || "npm";
  const [agent] = detectedAgent.split("@");
  if (!Array.isArray(names))
    names = [names];
  const args = (typeof options.additionalArgs === "function" ? options.additionalArgs(agent, detectedAgent) : options.additionalArgs) || [];
  if (options.preferOffline) {
    if (detectedAgent === "yarn@berry")
      args.unshift("--cached");
    else
      args.unshift("--prefer-offline");
  }
  if (agent === "pnpm") {
    args.unshift(
      /**
       * Prevent pnpm from removing installed devDeps while `NODE_ENV` is `production`
       * @see https://pnpm.io/cli/install#--prod--p
       */
      "--prod=false"
    );
    if (existsSync(resolve(options.cwd ?? process.cwd(), "pnpm-workspace.yaml"))) {
      args.unshift("-w");
    }
  }
  return x(
    agent,
    [
      agent === "yarn" ? "add" : "install",
      options.dev ? "-D" : "",
      ...args,
      ...names
    ].filter(Boolean),
    {
      nodeOptions: {
        stdio: options.silent ? "ignore" : "inherit",
        cwd: options.cwd
      },
      throwOnError: true
    }
  );
}

export { detectPackageManager, installPackage };

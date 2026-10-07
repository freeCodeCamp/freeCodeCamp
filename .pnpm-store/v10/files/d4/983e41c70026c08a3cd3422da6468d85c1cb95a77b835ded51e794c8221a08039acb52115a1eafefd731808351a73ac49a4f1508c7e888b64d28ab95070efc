import { readPackageJSON } from 'pkg-types';
import { createRequire } from 'node:module';
import { resolve, normalize, join } from 'pathe';
import { x } from 'tinyexec';
import * as fs from 'node:fs';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

async function findup(cwd, match, options = {}) {
  const segments = normalize(cwd).split("/");
  while (segments.length > 0) {
    const path = segments.join("/") || "/";
    const result = await match(path);
    if (result || !options.includeParentDirs) {
      return result;
    }
    segments.pop();
  }
}
function cached(fn) {
  let v;
  return () => {
    if (v === void 0) {
      v = fn().then((r) => {
        v = r;
        return v;
      });
    }
    return v;
  };
}
const hasCorepack = cached(async () => {
  if (globalThis.process?.versions?.webcontainer) {
    return false;
  }
  try {
    const { exitCode } = await x("corepack", ["--version"]);
    return exitCode === 0;
  } catch {
    return false;
  }
});
async function executeCommand(command, args, options = {}) {
  const xArgs = command === "npm" || command === "bun" || command === "deno" || !await hasCorepack() ? [command, args] : ["corepack", [command, ...args]];
  const { exitCode, stdout, stderr } = await x(xArgs[0], xArgs[1], {
    nodeOptions: {
      cwd: resolve(options.cwd || process.cwd()),
      env: options.env,
      stdio: options.silent ? "pipe" : "inherit"
    }
  });
  if (exitCode !== 0) {
    throw new Error(
      `\`${xArgs.flat().join(" ")}\` failed.${options.silent ? ["", stdout, stderr].join("\n") : ""}`
    );
  }
}
const NO_PACKAGE_MANAGER_DETECTED_ERROR_MSG = "No package manager auto-detected.";
async function resolveOperationOptions(options = {}) {
  const cwd = options.cwd || process.cwd();
  const env = { ...process.env, ...options.env };
  const packageManager = (typeof options.packageManager === "string" ? packageManagers.find((pm) => pm.name === options.packageManager) : options.packageManager) || await detectPackageManager(options.cwd || process.cwd());
  if (!packageManager) {
    throw new Error(NO_PACKAGE_MANAGER_DETECTED_ERROR_MSG);
  }
  return {
    cwd,
    env,
    silent: options.silent ?? false,
    packageManager,
    dev: options.dev ?? false,
    workspace: options.workspace,
    global: options.global ?? false,
    dry: options.dry ?? false
  };
}
function getWorkspaceArgs(options) {
  if (!options.workspace) {
    return [];
  }
  const workspacePkg = typeof options.workspace === "string" && options.workspace !== "" ? options.workspace : void 0;
  if (options.packageManager.name === "pnpm") {
    return workspacePkg ? ["--filter", workspacePkg] : ["--workspace-root"];
  }
  if (options.packageManager.name === "npm") {
    return workspacePkg ? ["-w", workspacePkg] : ["--workspaces"];
  }
  if (options.packageManager.name === "yarn") {
    if (!options.packageManager.majorVersion || options.packageManager.majorVersion === "1") {
      return workspacePkg ? ["--cwd", workspacePkg] : ["-W"];
    } else {
      return workspacePkg ? ["workspace", workspacePkg] : [];
    }
  }
  return [];
}
function getWorkspaceArgs2(options) {
  if (!options.workspace) {
    return [];
  }
  const workspacePkg = typeof options.workspace === "string" && options.workspace !== "" ? options.workspace : void 0;
  if (options.packageManager === "pnpm") {
    return workspacePkg ? ["--filter", workspacePkg] : ["--workspace-root"];
  }
  if (options.packageManager === "npm") {
    return workspacePkg ? ["-w", workspacePkg] : ["--workspaces"];
  }
  if (options.packageManager === "yarn") {
    if (options.yarnBerry) {
      return workspacePkg ? ["workspace", workspacePkg] : [];
    } else {
      return workspacePkg ? ["--cwd", workspacePkg] : ["-W"];
    }
  }
  return [];
}
function fmtCommand(args) {
  return args.filter(Boolean).map((arg, i) => i > 0 && arg.includes(" ") ? `"${arg}"` : arg).join(" ");
}
function doesDependencyExist(name, options) {
  const require = createRequire(
    options.cwd.endsWith("/") ? options.cwd : options.cwd + "/"
  );
  try {
    const resolvedPath = require.resolve(name);
    return resolvedPath.startsWith(options.cwd);
  } catch {
    return false;
  }
}
function parsePackageManagerField(packageManager) {
  const [name, _version] = (packageManager || "").split("@");
  const [version, buildMeta] = _version?.split("+") || [];
  if (name && name !== "-" && /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(name)) {
    return { name, version, buildMeta };
  }
  const sanitized = name.replace(/\W+/g, "");
  const warnings = [
    `Abnormal characters found in \`packageManager\` field, sanitizing from \`${name}\` to \`${sanitized}\``
  ];
  return {
    name: sanitized,
    version,
    buildMeta,
    warnings
  };
}

const packageManagers = [
  {
    name: "npm",
    command: "npm",
    lockFile: "package-lock.json"
  },
  {
    name: "pnpm",
    command: "pnpm",
    lockFile: "pnpm-lock.yaml",
    files: ["pnpm-workspace.yaml"]
  },
  {
    name: "bun",
    command: "bun",
    lockFile: ["bun.lockb", "bun.lock"]
  },
  {
    name: "yarn",
    command: "yarn",
    lockFile: "yarn.lock",
    files: [".yarnrc.yml"]
  },
  {
    name: "deno",
    command: "deno",
    lockFile: "deno.lock",
    files: ["deno.json"]
  }
];
async function detectPackageManager(cwd, options = {}) {
  const detected = await findup(
    resolve(cwd || "."),
    async (path) => {
      if (!options.ignorePackageJSON) {
        const packageJSONPath = join(path, "package.json");
        if (existsSync(packageJSONPath)) {
          const packageJSON = JSON.parse(
            await readFile(packageJSONPath, "utf8")
          );
          if (packageJSON?.packageManager) {
            const {
              name,
              version = "0.0.0",
              buildMeta,
              warnings
            } = parsePackageManagerField(packageJSON.packageManager);
            if (name) {
              const majorVersion = version.split(".")[0];
              const packageManager = packageManagers.find(
                (pm) => pm.name === name && pm.majorVersion === majorVersion
              ) || packageManagers.find((pm) => pm.name === name);
              return {
                name,
                command: name,
                version,
                majorVersion,
                buildMeta,
                warnings,
                files: packageManager?.files,
                lockFile: packageManager?.lockFile
              };
            }
          }
        }
        const denoJSONPath = join(path, "deno.json");
        if (existsSync(denoJSONPath)) {
          return packageManagers.find((pm) => pm.name === "deno");
        }
      }
      if (!options.ignoreLockFile) {
        for (const packageManager of packageManagers) {
          const detectionsFiles = [
            packageManager.lockFile,
            packageManager.files
          ].flat().filter(Boolean);
          if (detectionsFiles.some((file) => existsSync(resolve(path, file)))) {
            return {
              ...packageManager
            };
          }
        }
      }
    },
    {
      includeParentDirs: options.includeParentDirs ?? true
    }
  );
  if (!detected && !options.ignoreArgv) {
    const scriptArg = process.argv[1];
    if (scriptArg) {
      for (const packageManager of packageManagers) {
        const re = new RegExp(`[/\\\\]\\.?${packageManager.command}`);
        if (re.test(scriptArg)) {
          return packageManager;
        }
      }
    }
  }
  return detected;
}

function installDependenciesCommand(packageManager, options = {}) {
  const installCmd = options.short ? "i" : "install";
  const pmToFrozenLockfileInstallCommand = {
    npm: ["ci"],
    yarn: [installCmd, "--immutable"],
    bun: [installCmd, "--frozen-lockfile"],
    pnpm: [installCmd, "--frozen-lockfile"],
    deno: [installCmd, "--frozen"]
  };
  const commandArgs = options.frozenLockFile ? pmToFrozenLockfileInstallCommand[packageManager] : [installCmd];
  return fmtCommand([packageManager, ...commandArgs]);
}
function addDependencyCommand(packageManager, name, options = {}) {
  const names = Array.isArray(name) ? name : [name];
  if (packageManager === "deno") {
    for (let i = 0; i < names.length; i++) {
      if (!/^(npm|jsr|file):.+$/.test(names[i])) {
        names[i] = `npm:${names[i]}`;
      }
    }
  }
  const args = (packageManager === "yarn" ? [
    ...getWorkspaceArgs2({ packageManager, ...options }),
    // Global is not supported in berry: yarnpkg/berry#821
    options.global && !options.yarnBerry ? "global" : "",
    "add",
    options.dev ? options.short ? "-D" : "--dev" : "",
    ...names
  ] : [
    packageManager === "npm" ? options.short ? "i" : "install" : "add",
    ...getWorkspaceArgs2({ packageManager, ...options }),
    options.dev ? options.short ? "-D" : "--dev" : "",
    options.global ? "-g" : "",
    ...names
  ]).filter(Boolean);
  return fmtCommand([packageManager, ...args]);
}
function runScriptCommand(packageManager, name, options = {}) {
  const args = [
    packageManager === "deno" ? "task" : "run",
    name,
    ...options.args || []
  ];
  return fmtCommand([packageManager, ...args]);
}
function dlxCommand(packageManager, name, options = {}) {
  const pmToDlxCommand = {
    npm: options.short ? "npx" : "npm exec",
    yarn: "yarn dlx",
    pnpm: options.short ? "pnpx" : "pnpm dlx",
    bun: options.short ? "bunx" : "bun x",
    deno: "deno run -A"
  };
  const command = pmToDlxCommand[packageManager];
  let packages = options.packages || [];
  if (packageManager === "deno") {
    if (!name.startsWith("npm:")) {
      name = `npm:${name}`;
    }
    packages = packages.map(
      (pkg) => pkg.startsWith("npm:") ? pkg : `npm:${pkg}`
    );
  }
  const packageArgs = [];
  if (packages.length > 0 && packageManager !== "deno") {
    const packageFlag = options.short && /^npm|yarn$/.test(packageManager) ? "-p" : "--package";
    for (const pkg of packages) {
      packageArgs.push(`${packageFlag}=${pkg}`);
    }
  }
  const argSep = packageManager === "npm" && !options.short ? "--" : "";
  return fmtCommand([
    command,
    ...packageArgs,
    name,
    argSep,
    ...options.args || []
  ]);
}

async function installDependencies(options = {}) {
  const resolvedOptions = await resolveOperationOptions(options);
  const pmToFrozenLockfileInstallCommand = {
    npm: ["ci"],
    yarn: ["install", "--immutable"],
    bun: ["install", "--frozen-lockfile"],
    pnpm: ["install", "--frozen-lockfile"],
    deno: ["install", "--frozen"]
  };
  const commandArgs = options.frozenLockFile ? pmToFrozenLockfileInstallCommand[resolvedOptions.packageManager.name] : ["install"];
  if (!resolvedOptions.dry) {
    await executeCommand(resolvedOptions.packageManager.command, commandArgs, {
      cwd: resolvedOptions.cwd,
      silent: resolvedOptions.silent
    });
  }
  return {
    exec: {
      command: resolvedOptions.packageManager.command,
      args: commandArgs
    }
  };
}
async function addDependency(name, options = {}) {
  const resolvedOptions = await resolveOperationOptions(options);
  const names = Array.isArray(name) ? name : [name];
  if (resolvedOptions.packageManager.name === "deno") {
    for (let i = 0; i < names.length; i++) {
      if (!/^(npm|jsr|file):.+$/.test(names[i])) {
        names[i] = `npm:${names[i]}`;
      }
    }
  }
  if (names.length === 0) {
    return {};
  }
  const args = (resolvedOptions.packageManager.name === "yarn" ? [
    ...getWorkspaceArgs(resolvedOptions),
    // Global is not supported in berry: yarnpkg/berry#821
    resolvedOptions.global && resolvedOptions.packageManager.majorVersion === "1" ? "global" : "",
    "add",
    resolvedOptions.dev ? "-D" : "",
    ...names
  ] : [
    resolvedOptions.packageManager.name === "npm" ? "install" : "add",
    ...getWorkspaceArgs(resolvedOptions),
    resolvedOptions.dev ? "-D" : "",
    resolvedOptions.global ? "-g" : "",
    ...names
  ]).filter(Boolean);
  if (!resolvedOptions.dry) {
    await executeCommand(resolvedOptions.packageManager.command, args, {
      cwd: resolvedOptions.cwd,
      silent: resolvedOptions.silent
    });
  }
  if (!resolvedOptions.dry && options.installPeerDependencies) {
    const existingPkg = await readPackageJSON(resolvedOptions.cwd);
    const peerDeps = [];
    const peerDevDeps = [];
    for (const _name of names) {
      const pkgName = _name.match(/^(.[^@]+)/)?.[0];
      const pkg = await readPackageJSON(pkgName, {
        url: resolvedOptions.cwd
      }).catch(() => ({}));
      if (!pkg.peerDependencies || pkg.name !== pkgName) {
        continue;
      }
      for (const [peerDependency, version] of Object.entries(
        pkg.peerDependencies
      )) {
        if (pkg.peerDependenciesMeta?.[peerDependency]?.optional) {
          continue;
        }
        if (existingPkg.dependencies?.[peerDependency] || existingPkg.devDependencies?.[peerDependency]) {
          continue;
        }
        const isDev = pkg.peerDependenciesMeta?.[peerDependency]?.dev;
        (isDev ? peerDevDeps : peerDeps).push(`${peerDependency}@${version}`);
      }
    }
    if (peerDeps.length > 0) {
      await addDependency(peerDeps, { ...resolvedOptions });
    }
    if (peerDevDeps.length > 0) {
      await addDevDependency(peerDevDeps, { ...resolvedOptions });
    }
  }
  return {
    exec: {
      command: resolvedOptions.packageManager.command,
      args
    }
  };
}
async function addDevDependency(name, options = {}) {
  return await addDependency(name, { ...options, dev: true });
}
async function removeDependency(name, options = {}) {
  const resolvedOptions = await resolveOperationOptions(options);
  const names = Array.isArray(name) ? name : [name];
  if (names.length === 0) {
    return {};
  }
  const args = (resolvedOptions.packageManager.name === "yarn" ? [
    // Global is not supported in berry: yarnpkg/berry#821
    resolvedOptions.global && resolvedOptions.packageManager.majorVersion === "1" ? "global" : "",
    ...getWorkspaceArgs(resolvedOptions),
    "remove",
    resolvedOptions.dev ? "-D" : "",
    resolvedOptions.global ? "-g" : "",
    ...names
  ] : [
    resolvedOptions.packageManager.name === "npm" ? "uninstall" : "remove",
    ...getWorkspaceArgs(resolvedOptions),
    resolvedOptions.dev ? "-D" : "",
    resolvedOptions.global ? "-g" : "",
    ...names
  ]).filter(Boolean);
  if (!resolvedOptions.dry) {
    await executeCommand(resolvedOptions.packageManager.command, args, {
      cwd: resolvedOptions.cwd,
      silent: resolvedOptions.silent
    });
  }
  return {
    exec: {
      command: resolvedOptions.packageManager.command,
      args
    }
  };
}
async function ensureDependencyInstalled(name, options = {}) {
  const resolvedOptions = await resolveOperationOptions(options);
  const dependencyExists = doesDependencyExist(name, resolvedOptions);
  if (dependencyExists) {
    return true;
  }
  await addDependency(name, resolvedOptions);
}
async function dedupeDependencies(options = {}) {
  const resolvedOptions = await resolveOperationOptions(options);
  const isSupported = !["bun", "deno"].includes(
    resolvedOptions.packageManager.name
  );
  const recreateLockfile = options.recreateLockfile ?? !isSupported;
  if (recreateLockfile) {
    const lockfiles = Array.isArray(resolvedOptions.packageManager.lockFile) ? resolvedOptions.packageManager.lockFile : [resolvedOptions.packageManager.lockFile];
    for (const lockfile of lockfiles) {
      if (lockfile)
        fs.rmSync(resolve(resolvedOptions.cwd, lockfile), { force: true });
    }
    return await installDependencies(resolvedOptions);
  }
  if (isSupported) {
    const isyarnv1 = resolvedOptions.packageManager.name === "yarn" && resolvedOptions.packageManager.majorVersion === "1";
    if (!resolvedOptions.dry) {
      await executeCommand(
        resolvedOptions.packageManager.command,
        [isyarnv1 ? "install" : "dedupe"],
        {
          cwd: resolvedOptions.cwd,
          silent: resolvedOptions.silent
        }
      );
    }
    return {
      exec: {
        command: resolvedOptions.packageManager.command,
        args: [isyarnv1 ? "install" : "dedupe"]
      }
    };
  }
  throw new Error(
    `Deduplication is not supported for ${resolvedOptions.packageManager.name}`
  );
}
async function runScript(name, options = {}) {
  const resolvedOptions = await resolveOperationOptions(options);
  const args = [
    resolvedOptions.packageManager.name === "deno" ? "task" : "run",
    name,
    ...options.args || []
  ];
  if (!resolvedOptions.dry) {
    await executeCommand(resolvedOptions.packageManager.command, args, {
      cwd: resolvedOptions.cwd,
      env: resolvedOptions.env,
      silent: resolvedOptions.silent
    });
  }
  return {
    exec: {
      command: resolvedOptions.packageManager.command,
      args
    }
  };
}
async function dlx(name, options = {}) {
  const resolvedOptions = await resolveOperationOptions(options);
  const commandStr = dlxCommand(resolvedOptions.packageManager.name, name, {
    args: options.args,
    short: options.short,
    packages: options.packages
  });
  const [command, ...args] = commandStr.split(" ");
  if (!resolvedOptions.dry) {
    await executeCommand(command, args, {
      cwd: resolvedOptions.cwd,
      env: resolvedOptions.env,
      silent: resolvedOptions.silent
    });
  }
  return {
    exec: {
      command,
      args
    }
  };
}

export { addDependency as a, addDevDependency as b, dedupeDependencies as c, detectPackageManager as d, ensureDependencyInstalled as e, runScript as f, dlx as g, installDependenciesCommand as h, installDependencies as i, addDependencyCommand as j, runScriptCommand as k, dlxCommand as l, packageManagers as p, removeDependency as r };

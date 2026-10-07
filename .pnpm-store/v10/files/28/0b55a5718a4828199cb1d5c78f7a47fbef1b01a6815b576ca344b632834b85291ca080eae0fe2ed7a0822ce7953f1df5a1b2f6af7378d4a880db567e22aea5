type PackageManagerName = "npm" | "yarn" | "pnpm" | "bun" | "deno";
type PackageManager = {
    name: PackageManagerName;
    command: string;
    version?: string;
    buildMeta?: string;
    majorVersion?: string;
    lockFile?: string | string[];
    files?: string[];
};
type OperationOptions = {
    cwd?: string;
    env?: Record<string, string>;
    silent?: boolean;
    packageManager?: PackageManager | PackageManagerName;
    installPeerDependencies?: boolean;
    dev?: boolean;
    workspace?: boolean | string;
    global?: boolean;
    /** Do not execute actual command */
    dry?: boolean;
};
type OperationResult = {
    exec?: {
        command: string;
        args: string[];
    };
};

type DetectPackageManagerOptions = {
    /**
     * Whether to ignore the lock file
     *
     * @default false
     */
    ignoreLockFile?: boolean;
    /**
     * Whether to ignore the package.json file
     *
     * @default false
     */
    ignorePackageJSON?: boolean;
    /**
     * Whether to include parent directories
     *
     * @default false
     */
    includeParentDirs?: boolean;
    /**
     * Weather to ignore argv[1] to detect script
     */
    ignoreArgv?: boolean;
};
declare const packageManagers: PackageManager[];
/**
 * Detect the package manager used in a directory (and up) by checking various sources:
 *
 * 1. Use `packageManager` field from package.json
 *
 * 2. Known lock files and other files
 */
declare function detectPackageManager(cwd: string, options?: DetectPackageManagerOptions): Promise<(PackageManager & {
    warnings?: string[];
}) | undefined>;

/**
 * Installs project dependencies.
 *
 * @param options - Options to pass to the API call.
 * @param options.cwd - The directory to run the command in.
 * @param options.silent - Whether to run the command in silent mode.
 * @param options.packageManager - The package manager info to use (auto-detected).
 * @param options.frozenLockFile - Whether to install dependencies with frozen lock file.
 */
declare function installDependencies(options?: Pick<OperationOptions, "cwd" | "silent" | "packageManager" | "dry"> & {
    frozenLockFile?: boolean;
}): Promise<OperationResult>;
/**
 * Adds dependency to the project.
 *
 * @param name - Name of the dependency to add.
 * @param options - Options to pass to the API call.
 * @param options.cwd - The directory to run the command in.
 * @param options.silent - Whether to run the command in silent mode.
 * @param options.packageManager - The package manager info to use (auto-detected).
 * @param options.dev - Whether to add the dependency as dev dependency.
 * @param options.workspace - The name of the workspace to use.
 * @param options.global - Whether to run the command in global mode.
 */
declare function addDependency(name: string | string[], options?: OperationOptions): Promise<OperationResult>;
/**
 * Adds dev dependency to the project.
 *
 * @param name - Name of the dev dependency to add.
 * @param options - Options to pass to the API call.
 * @param options.cwd - The directory to run the command in.
 * @param options.silent - Whether to run the command in silent mode.
 * @param options.packageManager - The package manager info to use (auto-detected).
 * @param options.workspace - The name of the workspace to use.
 * @param options.global - Whether to run the command in global mode.
 *
 */
declare function addDevDependency(name: string | string[], options?: Omit<OperationOptions, "dev">): Promise<OperationResult>;
/**
 * Removes dependency from the project.
 *
 * @param name - Name of the dependency to remove.
 * @param options - Options to pass to the API call.
 * @param options.cwd - The directory to run the command in.
 * @param options.silent - Whether to run the command in silent mode.
 * @param options.packageManager - The package manager info to use (auto-detected).
 * @param options.dev - Whether to remove dev dependency.
 * @param options.workspace - The name of the workspace to use.
 * @param options.global - Whether to run the command in global mode.
 */
declare function removeDependency(name: string | string[], options?: OperationOptions): Promise<OperationResult>;
/**
 * Ensures dependency is installed.
 *
 * @param name - Name of the dependency.
 * @param options - Options to pass to the API call.
 * @param options.cwd - The directory to run the command in.
 * @param options.dev - Whether to install as dev dependency (if not already installed).
 * @param options.workspace - The name of the workspace to install dependency in (if not already installed).
 */
declare function ensureDependencyInstalled(name: string, options?: Pick<OperationOptions, "cwd" | "dev" | "workspace">): Promise<true | undefined>;
/**
 * Dedupe dependencies in the project.
 *
 * @param options - Options to pass to the API call.
 * @param options.cwd - The directory to run the command in.
 * @param options.packageManager - The package manager info to use (auto-detected).
 * @param options.silent - Whether to run the command in silent mode.
 * @param options.recreateLockfile - Whether to recreate the lockfile instead of deduping.
 */
declare function dedupeDependencies(options?: Pick<OperationOptions, "cwd" | "silent" | "packageManager" | "dry"> & {
    recreateLockfile?: boolean;
}): Promise<OperationResult>;
/**
 * Runs a script defined in the package.json file.
 *
 * @param name - Name of the script to run.
 * @param options - Options to pass to the API call.
 * @param options.cwd - The directory to run the command in.
 * @param options.env - Additional environment variables to set for the script execution.
 * @param options.silent - Whether to run the command in silent mode.
 * @param options.packageManager - The package manager info to use (auto-detected).
 * @param options.args - Additional arguments to pass to the script.
 */
declare function runScript(name: string, options?: Pick<OperationOptions, "cwd" | "env" | "silent" | "packageManager" | "dry"> & {
    args?: string[];
}): Promise<OperationResult>;
/**
 * Download and execute a package with the package manager.
 *
 * @param name - Name of the package to download and execute.
 * @param options - Options to pass to the API call.
 * @param options.cwd - The directory to run the command in.
 * @param options.env - Additional environment variables to set for the command execution.
 * @param options.silent - Whether to run the command in silent mode.
 * @param options.packageManager - The package manager info to use (auto-detected).
 * @param options.args - The arguments to pass to the command.
 * @param options.short - Whether to use the short version of the command (e.g. pnpx instead of pnpm dlx).
 * @param options.packages - The packages to pass to the command (e.g. npx --package=<package1> --package=<package2> <command>).
 */
declare function dlx(name: string, options?: Pick<OperationOptions, "cwd" | "env" | "silent" | "packageManager" | "dry"> & {
    args?: string[];
    short?: boolean;
    packages?: string[];
}): Promise<OperationResult>;

/**
 * Get the command to install dependencies with the package manager.
 */
declare function installDependenciesCommand(packageManager: PackageManagerName, options?: {
    short?: boolean;
    frozenLockFile?: boolean;
}): string;
/**
 * Get the command to add a dependency with the package manager.
 */
declare function addDependencyCommand(packageManager: PackageManagerName, name: string | string[], options?: {
    dev?: boolean;
    global?: boolean;
    yarnBerry?: boolean;
    workspace?: boolean | string;
    short?: boolean;
}): string;
/**
 * Get the command to run a script with the package manager.
 */
declare function runScriptCommand(packageManager: PackageManagerName, name: string, options?: {
    args?: string[];
}): string;
/**
 * Get the command to download and execute a package with the package manager.
 */
declare function dlxCommand(packageManager: PackageManagerName, name: string, options?: {
    args?: string[];
    short?: boolean;
    packages?: string[];
}): string;

export { addDependency, addDependencyCommand, addDevDependency, dedupeDependencies, detectPackageManager, dlx, dlxCommand, ensureDependencyInstalled, installDependencies, installDependenciesCommand, packageManagers, removeDependency, runScript, runScriptCommand };
export type { DetectPackageManagerOptions, OperationOptions, OperationResult, PackageManager, PackageManagerName };

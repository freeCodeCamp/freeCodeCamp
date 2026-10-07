import type { Handler } from "gensync";

import type {
  ConfigFile,
  IgnoreFile,
  RelativeConfig,
  FilePackageData,
} from "./types.ts";

import type { CallerMetadata } from "../validation/options.ts";

export type { ConfigFile, IgnoreFile, RelativeConfig, FilePackageData };

export function findConfigUpwards(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rootDir: string,
): string | null {
  return null;
}

// eslint-disable-next-line require-yield
export function* findPackageData(filepath: string): Handler<FilePackageData> {
  return {
    filepath,
    directories: [],
    pkg: null,
    isPackage: false,
  };
}

// eslint-disable-next-line require-yield
export function* findRelativeConfig(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  pkgData: FilePackageData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  envName: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  caller: CallerMetadata | undefined,
): Handler<RelativeConfig> {
  return { config: null, ignore: null };
}

// eslint-disable-next-line require-yield
export function* findRootConfig(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dirname: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  envName: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  caller: CallerMetadata | undefined,
): Handler<ConfigFile | null> {
  return null;
}

// eslint-disable-next-line require-yield
export function* loadConfig(
  name: string,
  dirname: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  envName: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  caller: CallerMetadata | undefined,
): Handler<ConfigFile> {
  throw new Error(`Cannot load ${name} relative to ${dirname} in a browser`);
}

// eslint-disable-next-line require-yield
export function* resolveShowConfigPath(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dirname: string,
): Handler<string | null> {
  return null;
}

export const ROOT_CONFIG_FILENAMES: string[] = [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function resolvePlugin(name: string, dirname: string): string | null {
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function resolvePreset(name: string, dirname: string): string | null {
  return null;
}

export function loadPlugin(
  name: string,
  dirname: string,
): Handler<{
  filepath: string;
  value: unknown;
}> {
  throw new Error(
    `Cannot load plugin ${name} relative to ${dirname} in a browser`,
  );
}

export function loadPreset(
  name: string,
  dirname: string,
): Handler<{
  filepath: string;
  value: unknown;
}> {
  throw new Error(
    `Cannot load preset ${name} relative to ${dirname} in a browser`,
  );
}

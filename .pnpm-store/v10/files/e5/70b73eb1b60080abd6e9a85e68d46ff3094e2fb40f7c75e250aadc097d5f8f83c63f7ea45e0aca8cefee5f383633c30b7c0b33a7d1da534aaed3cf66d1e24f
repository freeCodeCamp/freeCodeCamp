import * as fs from "fs";

/**
 * Typing for the fields of package.json we care about
 */
export interface PackageJson {
  [key: string]: string;
}

/**
 * A function that json from a file
 */
export interface ReadJsonSync {
  // tslint:disable-next-line:no-any
  (packageJsonPath: string): any | undefined;
}

export interface FileExistsSync {
  (name: string): boolean;
}

export interface FileExistsAsync {
  (path: string, callback: (err?: Error, exists?: boolean) => void): void;
}

export interface ReadJsonAsyncCallback {
  // tslint:disable-next-line:no-any
  (err?: Error, content?: any): void;
}

export interface ReadJsonAsync {
  (path: string, callback: ReadJsonAsyncCallback): void;
}

export function fileExistsSync(path: string): boolean {
  try {
    const stats = fs.statSync(path);
    return stats.isFile();
  } catch (err) {
    // If error, assume file did not exist
    return false;
  }
}

/**
 * Reads package.json from disk
 * @param file Path to package.json
 */
// tslint:disable-next-line:no-any
export function readJsonFromDiskSync(packageJsonPath: string): any | undefined {
  if (!fs.existsSync(packageJsonPath)) {
    return undefined;
  }
  return require(packageJsonPath);
}

export function readJsonFromDiskAsync(
  path: string,
  // tslint:disable-next-line:no-any
  callback: (err?: Error, content?: any) => void
): void {
  fs.readFile(path, "utf8", (err, result) => {
    // If error, assume file did not exist
    if (err || !result) {
      return callback();
    }
    const json = JSON.parse(result);
    return callback(undefined, json);
  });
}

export function fileExistsAsync(
  path2: string,
  callback2: (err?: Error, exists?: boolean) => void
): void {
  fs.stat(path2, (err: Error, stats: fs.Stats) => {
    if (err) {
      // If error assume file does not exist
      return callback2(undefined, false);
    }
    callback2(undefined, stats ? stats.isFile() : false);
  });
}

export function removeExtension(path: string): string {
  return path.substring(0, path.lastIndexOf(".")) || path;
}

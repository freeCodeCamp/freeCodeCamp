import * as path from "path";
import * as TryPath from "./try-path";
import * as MappingEntry from "./mapping-entry";
import * as Filesystem from "./filesystem";

/**
 * Function that can match a path async
 */
export interface MatchPathAsync {
  (
    requestedModule: string,
    readJson: Filesystem.ReadJsonAsync | undefined,
    fileExists: Filesystem.FileExistsAsync | undefined,
    extensions: ReadonlyArray<string> | undefined,
    callback: MatchPathAsyncCallback
  ): void;
}

export interface MatchPathAsyncCallback {
  (err?: Error, path?: string): void;
}

/**
 * See the sync version for docs.
 */
export function createMatchPathAsync(
  absoluteBaseUrl: string,
  paths: { [key: string]: Array<string> },
  mainFields: string[] = ["main"],
  addMatchAll: boolean = true
): MatchPathAsync {
  const absolutePaths = MappingEntry.getAbsoluteMappingEntries(
    absoluteBaseUrl,
    paths,
    addMatchAll
  );

  return (
    requestedModule: string,
    readJson: Filesystem.ReadJsonAsync | undefined,
    fileExists: Filesystem.FileExistsAsync | undefined,
    extensions: ReadonlyArray<string> | undefined,
    callback: MatchPathAsyncCallback
  ) =>
    matchFromAbsolutePathsAsync(
      absolutePaths,
      requestedModule,
      readJson,
      fileExists,
      extensions,
      callback,
      mainFields
    );
}

/**
 * See the sync version for docs.
 */
export function matchFromAbsolutePathsAsync(
  absolutePathMappings: ReadonlyArray<MappingEntry.MappingEntry>,
  requestedModule: string,
  readJson: Filesystem.ReadJsonAsync = Filesystem.readJsonFromDiskAsync,
  fileExists: Filesystem.FileExistsAsync = Filesystem.fileExistsAsync,
  extensions: ReadonlyArray<string> = Object.keys(require.extensions),
  callback: MatchPathAsyncCallback,
  mainFields: string[] = ["main"]
): void {
  const tryPaths = TryPath.getPathsToTry(
    extensions,
    absolutePathMappings,
    requestedModule
  );

  if (!tryPaths) {
    return callback();
  }

  findFirstExistingPath(
    tryPaths,
    readJson,
    fileExists,
    callback,
    0,
    mainFields
  );
}

function findFirstExistingMainFieldMappedFile(
  packageJson: Filesystem.PackageJson,
  mainFields: string[],
  packageJsonPath: string,
  fileExistsAsync: Filesystem.FileExistsAsync,
  doneCallback: (err?: Error, filepath?: string) => void,
  index: number = 0
): void {
  if (index >= mainFields.length) {
    return doneCallback(undefined, undefined);
  }

  const tryNext = () =>
    findFirstExistingMainFieldMappedFile(
      packageJson,
      mainFields,
      packageJsonPath,
      fileExistsAsync,
      doneCallback,
      index + 1
    );

  const mainFieldMapping = packageJson[mainFields[index]];
  if (typeof mainFieldMapping !== "string") {
    // Skip mappings that are not pointers to replacement files
    return tryNext();
  }

  const mappedFilePath = path.join(
    path.dirname(packageJsonPath),
    mainFieldMapping
  );
  fileExistsAsync(mappedFilePath, (err?: Error, exists?: boolean) => {
    if (err) {
      return doneCallback(err);
    }
    if (exists) {
      return doneCallback(undefined, mappedFilePath);
    }
    return tryNext();
  });
}

// Recursive loop to probe for physical files
function findFirstExistingPath(
  tryPaths: ReadonlyArray<TryPath.TryPath>,
  readJson: Filesystem.ReadJsonAsync,
  fileExists: Filesystem.FileExistsAsync,
  doneCallback: MatchPathAsyncCallback,
  index: number = 0,
  mainFields: string[] = ["main"]
): void {
  const tryPath = tryPaths[index];
  if (
    tryPath.type === "file" ||
    tryPath.type === "extension" ||
    tryPath.type === "index"
  ) {
    fileExists(tryPath.path, (err: Error, exists: boolean) => {
      if (err) {
        return doneCallback(err);
      }
      if (exists) {
        return doneCallback(undefined, TryPath.getStrippedPath(tryPath));
      }
      if (index === tryPaths.length - 1) {
        return doneCallback();
      }
      // Continue with the next path
      return findFirstExistingPath(
        tryPaths,
        readJson,
        fileExists,
        doneCallback,
        index + 1,
        mainFields
      );
    });
  } else if (tryPath.type === "package") {
    readJson(tryPath.path, (err, packageJson) => {
      if (err) {
        return doneCallback(err);
      }
      if (packageJson) {
        return findFirstExistingMainFieldMappedFile(
          packageJson,
          mainFields,
          tryPath.path,
          fileExists,
          (mainFieldErr?: Error, mainFieldMappedFile?: string) => {
            if (mainFieldErr) {
              return doneCallback(mainFieldErr);
            }
            if (mainFieldMappedFile) {
              return doneCallback(undefined, mainFieldMappedFile);
            }

            // No field in package json was a valid option. Continue with the next path.
            return findFirstExistingPath(
              tryPaths,
              readJson,
              fileExists,
              doneCallback,
              index + 1,
              mainFields
            );
          }
        );
      }

      // This is async code, we need to return unconditionally, otherwise the code still falls
      // through and keeps recursing. While this might work in general, libraries that use neo-async
      // like Webpack will actually not allow you to call the same callback twice.
      //
      // An example of where this caused issues:
      // https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/11
      //
      // Continue with the next path
      return findFirstExistingPath(
        tryPaths,
        readJson,
        fileExists,
        doneCallback,
        index + 1,
        mainFields
      );
    });
  } else {
    TryPath.exhaustiveTypeException(tryPath.type);
  }
}

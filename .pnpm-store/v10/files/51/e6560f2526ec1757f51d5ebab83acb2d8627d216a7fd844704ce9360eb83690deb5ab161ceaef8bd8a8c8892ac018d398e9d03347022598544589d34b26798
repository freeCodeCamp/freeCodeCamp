import * as path from "path";
import * as Filesystem from "./filesystem";
import * as MappingEntry from "./mapping-entry";
import * as TryPath from "./try-path";

/**
 * Function that can match a path
 */
export interface MatchPath {
  (
    requestedModule: string,
    readJson?: Filesystem.ReadJsonSync,
    fileExists?: (name: string) => boolean,
    extensions?: ReadonlyArray<string>
  ): string | undefined;
}

/**
 * Creates a function that can resolve paths according to tsconfig paths property.
 * @param absoluteBaseUrl Absolute version of baseUrl as specified in tsconfig.
 * @param paths The paths as specified in tsconfig.
 * @param mainFields A list of package.json field names to try when resolving module files.
 * @param addMatchAll Add a match-all "*" rule if none is present
 * @returns a function that can resolve paths.
 */
export function createMatchPath(
  absoluteBaseUrl: string,
  paths: { [key: string]: Array<string> },
  mainFields: string[] = ["main"],
  addMatchAll: boolean = true
): MatchPath {
  const absolutePaths = MappingEntry.getAbsoluteMappingEntries(
    absoluteBaseUrl,
    paths,
    addMatchAll
  );

  return (
    requestedModule: string,
    readJson?: Filesystem.ReadJsonSync,
    fileExists?: Filesystem.FileExistsSync,
    extensions?: Array<string>
  ) =>
    matchFromAbsolutePaths(
      absolutePaths,
      requestedModule,
      readJson,
      fileExists,
      extensions,
      mainFields
    );
}

/**
 * Finds a path from tsconfig that matches a module load request.
 * @param absolutePathMappings The paths to try as specified in tsconfig but resolved to absolute form.
 * @param requestedModule The required module name.
 * @param readJson Function that can read json from a path (useful for testing).
 * @param fileExists Function that checks for existence of a file at a path (useful for testing).
 * @param extensions File extensions to probe for (useful for testing).
 * @param mainFields A list of package.json field names to try when resolving module files.
 * @returns the found path, or undefined if no path was found.
 */
export function matchFromAbsolutePaths(
  absolutePathMappings: ReadonlyArray<MappingEntry.MappingEntry>,
  requestedModule: string,
  readJson: Filesystem.ReadJsonSync = Filesystem.readJsonFromDiskSync,
  fileExists: Filesystem.FileExistsSync = Filesystem.fileExistsSync,
  extensions: Array<string> = Object.keys(require.extensions),
  mainFields: string[] = ["main"]
): string | undefined {
  const tryPaths = TryPath.getPathsToTry(
    extensions,
    absolutePathMappings,
    requestedModule
  );

  if (!tryPaths) {
    return undefined;
  }

  return findFirstExistingPath(tryPaths, readJson, fileExists, mainFields);
}

function findFirstExistingMainFieldMappedFile(
  packageJson: Filesystem.PackageJson,
  mainFields: string[],
  packageJsonPath: string,
  fileExists: Filesystem.FileExistsSync
): string | undefined {
  for (let index = 0; index < mainFields.length; index++) {
    const mainFieldName = mainFields[index];
    const candidateMapping = packageJson[mainFieldName];
    if (candidateMapping && typeof candidateMapping === "string") {
      const candidateFilePath = path.join(
        path.dirname(packageJsonPath),
        candidateMapping
      );
      if (fileExists(candidateFilePath)) {
        return candidateFilePath;
      }
    }
  }

  return undefined;
}

function findFirstExistingPath(
  tryPaths: ReadonlyArray<TryPath.TryPath>,
  readJson: Filesystem.ReadJsonSync = Filesystem.readJsonFromDiskSync,
  fileExists: Filesystem.FileExistsSync,
  mainFields: string[] = ["main"]
): string | undefined {
  for (const tryPath of tryPaths) {
    if (
      tryPath.type === "file" ||
      tryPath.type === "extension" ||
      tryPath.type === "index"
    ) {
      if (fileExists(tryPath.path)) {
        return TryPath.getStrippedPath(tryPath);
      }
    } else if (tryPath.type === "package") {
      const packageJson: Filesystem.PackageJson = readJson(tryPath.path);
      if (packageJson) {
        const mainFieldMappedFile = findFirstExistingMainFieldMappedFile(
          packageJson,
          mainFields,
          tryPath.path,
          fileExists
        );
        if (mainFieldMappedFile) {
          return mainFieldMappedFile;
        }
      }
    } else {
      TryPath.exhaustiveTypeException(tryPath.type);
    }
  }
  return undefined;
}

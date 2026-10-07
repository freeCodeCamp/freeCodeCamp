// @flow

import type {ConfigResult, File, FilePath} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import ThrowableDiagnostic from '@parcel/diagnostic';
import path from 'path';
import clone from 'clone';
import json5 from 'json5';
import {parse as toml} from '@iarna/toml';
import LRU from 'lru-cache';

export type ConfigOutput = {|
  config: ConfigResult,
  files: Array<File>,
|};

export type ConfigOptions = {|
  parse?: boolean,
  parser?: string => any,
|};

const configCache = new LRU<FilePath, ConfigOutput>({max: 500});
const resolveCache = new Map();

export function resolveConfig(
  fs: FileSystem,
  filepath: FilePath,
  filenames: Array<FilePath>,
  projectRoot: FilePath,
): Promise<?FilePath> {
  // Cache the result of resolving config for this directory.
  // This is automatically invalidated at the end of the current build.
  let key = path.dirname(filepath) + filenames.join(',');
  let cached = resolveCache.get(key);
  if (cached !== undefined) {
    return Promise.resolve(cached);
  }

  let resolved = fs.findAncestorFile(
    filenames,
    path.dirname(filepath),
    projectRoot,
  );
  resolveCache.set(key, resolved);
  return Promise.resolve(resolved);
}

export function resolveConfigSync(
  fs: FileSystem,
  filepath: FilePath,
  filenames: Array<FilePath>,
  projectRoot: FilePath,
): ?FilePath {
  return fs.findAncestorFile(filenames, path.dirname(filepath), projectRoot);
}

export async function loadConfig(
  fs: FileSystem,
  filepath: FilePath,
  filenames: Array<FilePath>,
  projectRoot: FilePath,
  opts: ?ConfigOptions,
): Promise<ConfigOutput | null> {
  let parse = opts?.parse ?? true;
  let configFile = await resolveConfig(fs, filepath, filenames, projectRoot);
  if (configFile) {
    let cachedOutput = configCache.get(String(parse) + configFile);
    if (cachedOutput) {
      return cachedOutput;
    }

    try {
      let extname = path.extname(configFile).slice(1);
      if (extname === 'js' || extname === 'cjs') {
        let output = {
          // $FlowFixMe
          config: clone(require(configFile)),
          files: [{filePath: configFile}],
        };

        configCache.set(configFile, output);
        return output;
      }

      let configContent = await fs.readFile(configFile, 'utf8');

      let config;
      if (parse === false) {
        config = configContent;
      } else {
        let parse = opts?.parser ?? getParser(extname);
        try {
          config = parse(configContent);
        } catch (e) {
          if (extname !== '' && extname !== 'json') {
            throw e;
          }

          let pos = {
            line: e.lineNumber,
            column: e.columnNumber,
          };

          throw new ThrowableDiagnostic({
            diagnostic: {
              message: `Failed to parse ${path.basename(configFile)}`,
              origin: '@parcel/utils',
              codeFrames: [
                {
                  language: 'json5',
                  filePath: configFile,
                  code: configContent,
                  codeHighlights: [
                    {
                      start: pos,
                      end: pos,
                      message: e.message,
                    },
                  ],
                },
              ],
            },
          });
        }
      }

      let output = {
        config,
        files: [{filePath: configFile}],
      };

      configCache.set(String(parse) + configFile, output);
      return output;
    } catch (err) {
      if (err.code === 'MODULE_NOT_FOUND' || err.code === 'ENOENT') {
        return null;
      }

      throw err;
    }
  }

  return null;
}

loadConfig.clear = () => {
  configCache.reset();
  resolveCache.clear();
};

function getParser(extname) {
  switch (extname) {
    case 'toml':
      return toml;
    case 'json':
    default:
      return json5.parse;
  }
}

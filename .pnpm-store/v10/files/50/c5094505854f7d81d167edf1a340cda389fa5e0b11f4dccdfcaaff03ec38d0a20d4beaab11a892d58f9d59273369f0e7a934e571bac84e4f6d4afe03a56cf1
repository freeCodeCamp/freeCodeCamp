// @flow
import type {SourceLocation} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import SourceMap from '@parcel/source-map';
import path from 'path';
import {normalizeSeparators, isAbsolute} from './path';

export const SOURCEMAP_RE: RegExp =
  /(?:\/\*|\/\/)\s*[@#]\s*sourceMappingURL\s*=\s*([^\s*]+)(?:\s*\*\/)?\s*$/;
const DATA_URL_RE = /^data:[^;]+(?:;charset=[^;]+)?;base64,(.*)/;
export const SOURCEMAP_EXTENSIONS: Set<string> = new Set<string>([
  'css',
  'es',
  'es6',
  'js',
  'jsx',
  'mjs',
  'ts',
  'tsx',
]);

export function matchSourceMappingURL(
  contents: string,
): null | RegExp$matchResult {
  return contents.match(SOURCEMAP_RE);
}

export async function loadSourceMapUrl(
  fs: FileSystem,
  filename: string,
  contents: string,
): Promise<?{|filename: string, map: any, url: string|}> {
  let match = matchSourceMappingURL(contents);
  if (match) {
    let url = match[1].trim();
    let dataURLMatch = url.match(DATA_URL_RE);

    let mapFilePath;
    if (dataURLMatch) {
      mapFilePath = filename;
    } else {
      mapFilePath = url.replace(/^file:\/\//, '');
      mapFilePath = isAbsolute(mapFilePath)
        ? mapFilePath
        : path.join(path.dirname(filename), mapFilePath);
    }

    return {
      url,
      filename: mapFilePath,
      map: JSON.parse(
        dataURLMatch
          ? Buffer.from(dataURLMatch[1], 'base64').toString()
          : await fs.readFile(mapFilePath, 'utf8'),
      ),
    };
  }
}

export async function loadSourceMap(
  filename: string,
  contents: string,
  options: {fs: FileSystem, projectRoot: string, ...},
): Promise<?SourceMap> {
  let foundMap = await loadSourceMapUrl(options.fs, filename, contents);
  if (foundMap) {
    let mapSourceRoot = path.dirname(filename);
    if (
      foundMap.map.sourceRoot &&
      !normalizeSeparators(foundMap.map.sourceRoot).startsWith('/')
    ) {
      mapSourceRoot = path.join(mapSourceRoot, foundMap.map.sourceRoot);
    }

    let sourcemapInstance = new SourceMap(options.projectRoot);
    sourcemapInstance.addVLQMap({
      ...foundMap.map,
      sources: foundMap.map.sources.map(s => {
        return path.join(mapSourceRoot, s);
      }),
    });
    return sourcemapInstance;
  }
}

export function remapSourceLocation(
  loc: SourceLocation,
  originalMap: SourceMap,
): SourceLocation {
  let {
    filePath,
    start: {line: startLine, column: startCol},
    end: {line: endLine, column: endCol},
  } = loc;
  let lineDiff = endLine - startLine;
  let colDiff = endCol - startCol;
  let start = originalMap.findClosestMapping(startLine, startCol);
  let end = originalMap.findClosestMapping(endLine, endCol);

  if (start?.original) {
    if (start.source) {
      filePath = start.source;
    }

    ({line: startLine, column: startCol} = start.original);
    startCol++; // source map columns are 0-based
  }

  if (end?.original) {
    ({line: endLine, column: endCol} = end.original);
    endCol++;

    if (endLine < startLine) {
      endLine = startLine;
      endCol = startCol;
    } else if (endLine === startLine && endCol < startCol && lineDiff === 0) {
      endCol = startCol + colDiff;
    }
  } else {
    endLine = startLine;
    endCol = startCol;
  }

  return {
    filePath,
    start: {
      line: startLine,
      column: startCol,
    },
    end: {
      line: endLine,
      column: endCol,
    },
  };
}

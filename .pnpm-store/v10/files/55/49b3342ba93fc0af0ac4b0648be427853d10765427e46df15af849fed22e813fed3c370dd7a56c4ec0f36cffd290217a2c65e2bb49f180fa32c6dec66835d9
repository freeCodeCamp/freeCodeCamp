// @flow
import type { VLQMap, SourceMapStringifyOptions } from './types';
import path from 'path';

export function generateInlineMap(map: string): string {
  return `data:application/json;charset=utf-8;base64,${Buffer.from(map).toString('base64')}`;
}

export async function partialVlqMapToSourceMap(map: VLQMap, opts: SourceMapStringifyOptions): Promise<VLQMap | string> {
  let { fs, file, sourceRoot, inlineSources, rootDir, format = 'string' } = opts;

  let resultMap = {
    ...map,
    sourcesContent: map.sourcesContent
      ? map.sourcesContent.map((content) => {
          if (content) {
            return content;
          } else {
            return null;
          }
        })
      : [],
    version: 3,
    file,
    sourceRoot,
  };

  if (resultMap.sourcesContent.length < resultMap.sources.length) {
    for (let i = 0; i <= resultMap.sources.length - resultMap.sourcesContent.length; i++) {
      resultMap.sourcesContent.push(null);
    }
  }

  if (fs) {
    resultMap.sourcesContent = await Promise.all(
      resultMap.sourcesContent.map(async (content, index): Promise<string | null> => {
        let sourceName = map.sources[index];
        // If sourceName starts with `..` it is outside rootDir, in this case we likely cannot access this file from the browser or packaged node_module
        // Because of this we have to include the sourceContent to ensure you can always see the sourcecontent for each mapping.
        if (!content && (inlineSources || sourceName.startsWith('..'))) {
          try {
            return await fs.readFile(path.resolve(rootDir || '/', sourceName), 'utf-8');
          } catch (e) {}
        }

        return content;
      })
    );
  }

  if (format === 'inline' || format === 'string') {
    let stringifiedMap = JSON.stringify(resultMap);
    if (format === 'inline') {
      return generateInlineMap(stringifiedMap);
    }
    return stringifiedMap;
  }

  return resultMap;
}

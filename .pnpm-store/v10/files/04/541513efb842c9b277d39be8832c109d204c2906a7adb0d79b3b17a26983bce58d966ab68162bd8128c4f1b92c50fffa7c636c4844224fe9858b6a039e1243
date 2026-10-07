// @flow

import nullthrows from 'nullthrows';
import {minify} from 'terser';
import {Optimizer} from '@parcel/plugin';
import {blobToString} from '@parcel/utils';
import SourceMap from '@parcel/source-map';
import ThrowableDiagnostic, {escapeMarkdown} from '@parcel/diagnostic';

import path from 'path';

export default (new Optimizer({
  async loadConfig({config, options}) {
    let userConfig = await config.getConfigFrom(
      path.join(options.projectRoot, 'index'),
      ['.terserrc', '.terserrc.js', '.terserrc.cjs'],
    );

    if (userConfig) {
      let isJavascript = path.extname(userConfig.filePath) === '.js';
      if (isJavascript) {
        config.invalidateOnStartup();
      }
    }

    return userConfig?.contents;
  },
  async optimize({
    contents,
    map,
    bundle,
    config: userConfig,
    options,
    getSourceMapReference,
  }) {
    if (!bundle.env.shouldOptimize) {
      return {contents, map};
    }

    let code = await blobToString(contents);

    let originalMap = map ? await map.stringify({}) : null;
    let config = {
      ...userConfig,
      sourceMap: bundle.env.sourceMap
        ? {
            filename: path.relative(
              options.projectRoot,
              path.join(bundle.target.distDir, bundle.name),
            ),
            asObject: true,
            content: originalMap,
          }
        : false,
      toplevel:
        bundle.env.outputFormat === 'esmodule' ||
        bundle.env.outputFormat === 'commonjs',
      module: bundle.env.outputFormat === 'esmodule',
    };

    let result;
    try {
      result = await minify(code, config);
    } catch (error) {
      // $FlowFixMe
      let {message, line, col} = error;
      if (line != null && col != null) {
        message = escapeMarkdown(message);
        let diagnostics = [];
        let mapping = map?.findClosestMapping(line, col);
        if (mapping && mapping.original && mapping.source) {
          let {source, original} = mapping;
          let filePath = path.resolve(options.projectRoot, source);
          diagnostics.push({
            message,
            origin: '@parcel/optimizer-terser',
            codeFrames: [
              {
                language: 'js',
                filePath,
                code: await options.inputFS.readFile(filePath, 'utf8'),
                codeHighlights: [{message, start: original, end: original}],
              },
            ],
            hints: ["It's likely that Terser doesn't support this syntax yet."],
          });
        }

        if (diagnostics.length === 0 || options.logLevel === 'verbose') {
          let loc = {
            line: line,
            column: col,
          };
          diagnostics.push({
            message,
            origin: '@parcel/optimizer-terser',
            codeFrames: [
              {
                language: 'js',
                filePath: undefined,
                code,
                codeHighlights: [{message, start: loc, end: loc}],
              },
            ],
            hints: ["It's likely that Terser doesn't support this syntax yet."],
          });
        }
        throw new ThrowableDiagnostic({diagnostic: diagnostics});
      } else {
        throw error;
      }
    }

    let sourceMap = null;
    let minifiedContents: string = nullthrows(result.code);
    let resultMap = result.map;
    if (resultMap && typeof resultMap !== 'string') {
      sourceMap = new SourceMap(options.projectRoot);
      sourceMap.addVLQMap(resultMap);
      let sourcemapReference = await getSourceMapReference(sourceMap);
      if (sourcemapReference) {
        minifiedContents += `\n//# sourceMappingURL=${sourcemapReference}\n`;
      }
    }

    return {contents: minifiedContents, map: sourceMap};
  },
}): Optimizer);

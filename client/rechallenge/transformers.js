import * as babel from 'babel-core';
import presetEs2015 from 'babel-preset-es2015';
import presetReact from 'babel-preset-react';
import { Observable } from 'rx';
/* eslint-disable import/no-unresolved */
import loopProtect from 'loop-protect';
/* eslint-enable import/no-unresolved */

import { updateContents } from '../../common/utils/polyvinyl';

const babelOptions = { presets: [ presetEs2015, presetReact ] };
loopProtect.hit = function hit(line) {
  var err = 'Exiting potential infinite loop at line ' +
    line +
    '. To disable loop protection, write: \n\/\/ noprotect\nas the first ' +
    'line. Beware that if you do have an infinite loop in your code, ' +
    'this will crash your browser.';
  throw new Error(err);
};

const transformersForHtmlJS = {
  ext: /html|js/,
  transformers: [
    {
      name: 'add-loop-protect',
      transformer: function addLoopProtect(file) {
        const _contents = file.contents.toLowerCase();
        if (file.ext === 'html' && !_contents.includes('<script>')) {
          // No JavaScript in user code, so no need for loopProtect
          return updateContents(file.contents, file);
        }
        return updateContents(loopProtect(file.contents), file);
      }
    },
    {
      name: 'replace-nbsp',
      nbspRegExp: new RegExp(String.fromCharCode(160), 'g'),
      transformer: function replaceNBSP(file) {
        return updateContents(
           file.contents.replace(this.nbspRegExp, ' '),
           file
         );
      }
    }
  ]
};

const transformersForJs = {
  ext: /js/,
  transformers: [
    {
      name: 'babel-transformer',
      transformer: function babelTransformer(file) {
        const result = babel.transform(file.contents, babelOptions);
        return updateContents(
          result.code,
          file
        );
      }
    }
  ]
};

// Observable[Observable[File]]::addLoopProtect() => Observable[String]
export default function transformers() {
  const source = this;
  return source.map(files$ => files$.flatMap(file => {
    if (!transformersForHtmlJS.ext.test(file.ext)) {
      return Observable.just(file);
    }
    if (
      transformersForJs.ext.test(file.ext) &&
      transformersForHtmlJS.ext.test(file.ext)
    ) {
      return Observable.of(
        ...transformersForHtmlJS.transformers,
        ...transformersForJs.transformers
      )
        .reduce((file, context) => context.transformer(file), file);
    }
    return Observable.from(transformersForHtmlJS.transformers)
      .reduce((file, context) => context.transformer(file), file);
  }));
}

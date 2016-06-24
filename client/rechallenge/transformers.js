import { Observable } from 'rx';
/* eslint-disable import/no-unresolved */
import loopProtect from 'loop-protect';
/* eslint-enable import/no-unresolved */

import { updateContents } from '../../common/utils/polyvinyl';

loopProtect.hit = function hit(line) {
  var err = 'Error: Exiting potential infinite loop at line ' +
    line +
    '. To disable loop protection, write: \n\\/\\/ noprotect\nas the first' +
    'line. Beware that if you do have an infinite loop in your code' +
    'this will crash your browser.';
  console.error(err);
};

const transformersForHtmlJS = {
  ext: /html|js/,
  transformers: [
    {
      name: 'add-loop-protect',
      transformer: function addLoopProtect(file) {
        return updateContents(loopProtect(file.contents), file);
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
    return Observable.from(transformersForHtmlJS.transformers)
      .reduce((file, context) => context.transformer(file), file);
  }));
}

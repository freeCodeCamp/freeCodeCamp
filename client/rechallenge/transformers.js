import { Observable } from 'rx';
import loopProtect from 'loop-protect';

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
        file.contents = loopProtect(file.contents);
        return file;
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

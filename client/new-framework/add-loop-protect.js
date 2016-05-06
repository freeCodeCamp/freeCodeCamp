import loopProtect from 'loopProtect';

loopProtect.hit = function hit(line) {
  var err = 'Error: Exiting potential infinite loop at line ' +
    line +
    '. To disable loop protection, write: \n\\/\\/ noprotect\nas the first' +
    'line. Beware that if you do have an infinite loop in your code' +
    'this will crash your browser.';
  console.error(err);
};

// Observable[Observable[File]]::addLoopProtect() => Observable[String]
export default function addLoopProtect() {
  const source = this;
  return source.map(files$ => files$.map(file => {
    if (file.extname === 'js') {
      file.contents = loopProtect(file.contents);
    }
    return file;
  }));
}

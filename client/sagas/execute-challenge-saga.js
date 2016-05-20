import { Observable } from 'rx';

import { ajax$ } from '../../common/utils/ajax-stream';
import throwers from '../new-framework/throwers';
import transformers from '../new-framework/transformers';
import types from '../../common/app/routes/challenges/redux/types';
import {
  frameMain
} from '../../common/app/routes/challenges/redux/actions';
import { setExt, updateContents } from '../../common/utils/polyvinyl';

// createFileStream(files: Dictionary[Path, PolyVinyl]) =>
//   Observable[...Observable[...PolyVinyl]]
function createFileStream(files = {}) {
  return Observable.just(
    Observable.from(Object.keys(files)).map(key => files[key])
  );
}

const jQuery = {
  src: '/bower_components/jquery/dist/jquery.js',
  script: true,
  type: 'global'
};

const scriptCache = new Map();

function cacheScript({ src } = {}) {
  if (!src) {
    return Observable.throw(new Error('No source provided for script'));
  }
  if (scriptCache.has(src)) {
    return scriptCache.get(src);
  }
  const script$ = ajax$(src)
    .doOnNext(res => {
      console.log('status', res.status);
      if (res.status !== 200) {
        throw new Error('Request errror: ' + res.status);
      }
    })
    .map(({ response }) => response)
    .map(script => `<script>${script}</script>`)
    .catch(e => (console.error(e), Observable.just('')))
    .shareReplay();

  scriptCache.set(src, script$);
  return script$;
}

const frameRunner$ = cacheScript({ src: '/js/frame-runner.js' });

const htmlCatch = '\n<!-- -->';
const jsCatch = '\n;/* */';

export default function executeChallengeSaga(action$, getState) {
  return action$
    .filter(({ type }) => type === types.executeChallenge)
    .debounce(750)
    .flatMapLatest(() => {
      const { files, required = [ jQuery ] } = getState().challengesApp;
      return createFileStream(files)
        ::throwers()
        ::transformers()
        // createbuild
        .flatMap(file$ => file$.reduce((build, file) => {
          let finalFile;
          if (file.ext === 'js') {
            finalFile = setExt('html', updateContents(
              `<script>${file.contents}${jsCatch}</script>`,
              file
            ));
          } else if (file.ext === 'css') {
            finalFile = setExt('html', updateContents(
              `<style>${file.contents}</style>`,
              file
            ));
          } else {
            finalFile = file;
          }
          return build + finalFile.contents + htmlCatch;
        }, ''))
        // add required scripts and links here
        .flatMap(build => {
          const header$ = Observable.from(required)
            .flatMap(required => {
              if (required.script) {
                return cacheScript(required);
              }
              return Observable.just('');
            })
            .reduce((header, required) => header + required, '');
          return Observable.combineLatest(header$, frameRunner$)
            .map(([ header, frameRunner ]) => header + build + frameRunner);
        })
        .map(build => frameMain(build));
    });
}

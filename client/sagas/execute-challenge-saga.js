import { Scheduler, Observable } from 'rx';

import { ajax$ } from '../../common/utils/ajax-stream';
import throwers from '../rechallenge/throwers';
import transformers from '../rechallenge/transformers';
import types from '../../common/app/routes/challenges/redux/types';
import {
  frameMain,
  frameTests,
  frameOutput
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
    .filter(({ type }) => (
      type === types.executeChallenge ||
      type === types.updateMain
    ))
    .debounce(750)
    .flatMapLatest(({ type }) => {
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
        .flatMap(source => {
          const head$ = Observable.from(required)
            .flatMap(required => {
              if (required.script) {
                return cacheScript(required);
              }
              return Observable.just('');
            })
            .reduce((head, required) => head + required, '')
            .map(head => `<head>${head}</head>`);

          return Observable.combineLatest(head$, frameRunner$)
            .map(([ head, frameRunner ]) => {
              return head + `<body>${source}</body>` + frameRunner;
            })
            .map(build => ({ source, build }));
        })
        .flatMap(payload => {
          const actions = [];
          actions.push(frameMain(payload));
          if (type !== types.updateMain) {
            actions.push(frameTests(payload));
            actions.push(frameOutput(payload));
          }
          return Observable.from(actions, null, null, Scheduler.default);
        });
    });
}

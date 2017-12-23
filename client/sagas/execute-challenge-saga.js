import { Scheduler, Observable } from 'rx';

import {
  challengeSelector
} from '../../common/app/routes/challenges/redux/selectors';
import { ajax$ } from '../../common/utils/ajax-stream';
import throwers from '../rechallenge/throwers';
import transformers from '../rechallenge/transformers';
import types from '../../common/app/routes/challenges/redux/types';
import { createErrorObservable } from '../../common/app/redux/actions';
import {
  frameMain,
  frameTests,
  initOutput,
  saveCode
} from '../../common/app/routes/challenges/redux/actions';
import { setExt, updateContents } from '../../common/utils/polyvinyl';

// createFileStream(files: Dictionary[Path, PolyVinyl]) =>
//   Observable[...Observable[...PolyVinyl]]
function createFileStream(files = {}) {
  return Observable.just(
    Observable.from(Object.keys(files)).map(key => files[key])
  );
}

const globalRequires = [{
  link: 'https://cdnjs.cloudflare.com/' +
    'ajax/libs/normalize/4.2.0/normalize.min.css'
}, {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js'
}];

const scriptCache = new Map();
const linkCache = new Map();

function cacheScript({ src } = {}, crossDomain = true) {
  if (!src) {
    throw new Error('No source provided for script');
  }
  if (scriptCache.has(src)) {
    return scriptCache.get(src);
  }
  const script$ = ajax$({ url: src, crossDomain })
    .doOnNext(res => {
      if (res.status !== 200) {
        throw new Error('Request errror: ' + res.status);
      }
    })
    .map(({ response }) => response)
    .map(script => `<script>${script}</script>`)
    .shareReplay();

  scriptCache.set(src, script$);
  return script$;
}

function cacheLink({ link } = {}, crossDomain = true) {
  if (!link) {
    return Observable.throw(new Error('No source provided for link'));
  }
  if (linkCache.has(link)) {
    return linkCache.get(link);
  }
  const link$ = ajax$({ url: link, crossDomain })
    .doOnNext(res => {
      if (res.status !== 200) {
        throw new Error('Request errror: ' + res.status);
      }
    })
    .map(({ response }) => response)
    .map(script => `<style>${script}</style>`)
    .catch(() => Observable.just(''))
    .shareReplay();

  linkCache.set(link, link$);
  return link$;
}


const htmlCatch = '\n<!--fcc-->';
const jsCatch = '\n;/*fcc*/\n';

export default function executeChallengeSaga(action$, getState) {
  const frameRunner$ = cacheScript(
    { src: '/js/frame-runner.js' },
    false
  );
  return action$
    .filter(({ type }) => (
      type === types.executeChallenge ||
      type === types.updateMain
    ))
    // if isCodeLockedTrue do not run challenges
    .filter(() => !getState().challengesApp.isCodeLocked)
    .debounce(750)
    .flatMapLatest(({ type }) => {
      const state = getState();
      const { files } = state.challengesApp;
      const { challenge: { required = [] } } = challengeSelector(state);
      const finalRequires = [...globalRequires, ...required ];
      return createFileStream(files)
        ::throwers()
        ::transformers()
        // createbuild
        .flatMap(file$ => file$.reduce((build, file) => {
          let finalFile;
          const finalContents = [
            file.head,
            file.contents,
            file.tail
          ];
          if (file.ext === 'js') {
            finalFile = setExt('html', updateContents(
              `<script>${finalContents.join(jsCatch)}${jsCatch}</script>`,
              file
            ));
          } else if (file.ext === 'css') {
            finalFile = setExt('html', updateContents(
              `<style>${finalContents.join(htmlCatch)}</style>`,
              file
            ));
          } else {
            finalFile = file;
          }
          return build + finalFile.contents + htmlCatch;
        }, ''))
        // add required scripts and links here
        .flatMap(source => {
          const head$ = Observable.from(finalRequires)
            .flatMap(required => {
              if (required.src) {
                return cacheScript(required, required.crossDomain);
              }
              // css files with `url(...` may not work in style tags
              // so we put them in raw links
              if (required.link && required.raw) {
                return Observable.just(
                  `<link href=${required.link} rel='stylesheet' />`
                );
              }
              if (required.link) {
                return cacheLink(required, required.crossDomain);
              }
              return Observable.just('');
            })
            .reduce((head, required) => head + required, '')
            .map(head => `<head>${head}</head>`);

          return Observable.combineLatest(head$, frameRunner$)
            .map(([ head, frameRunner ]) => {
              const body = `
                <body style='margin:8px;'>
                  <!-- fcc-start-source -->
                    ${source}
                  <!-- fcc-end-source -->
                </body>`;
              return {
                build: head + body + frameRunner,
                source,
                head
              };
            });
        })
        .flatMap(payload => {
          const actions = [
            frameMain(payload)
          ];
          if (type === types.executeChallenge) {
            actions.push(saveCode(), frameTests(payload));
          }
          return Observable.from(actions, null, null, Scheduler.default);
        })
        .startWith((
          type === types.executeChallenge ?
            initOutput('// running test') :
            null
        ))
        .catch(createErrorObservable);
    });
}

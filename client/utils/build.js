import { Observable } from 'rx';
import { getValues } from 'redux-form';

import { ajax$ } from '../../common/utils/ajax-stream';
import throwers from '../rechallenge/throwers';
import transformers from '../rechallenge/transformers';
import { setExt, updateContents } from '../../common/utils/polyvinyl';

const consoleReg = /(?:\b)console(\.log\S+)/g;
// const sourceReg =
//  /(<!-- fcc-start-source -->)([\s\S]*?)(?=<!-- fcc-end-source -->)/g;

// useConsoleLogProxy(source: String) => String
export function useConsoleLogProxy(source) {
  return source.replace(consoleReg, (match, methodCall) => {
    return 'window.__console' + methodCall;
  });
}

// createFileStream(files: Dictionary[Path, PolyVinyl]) =>
//   Observable[...Observable[...PolyVinyl]]
export function createFileStream(files = {}) {
  return Observable.just(
    Observable.from(Object.keys(files)).map(key => files[key])
  );
}

const jQuery = {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
};
const globalRequires = [
  {
    link: 'https://cdnjs.cloudflare.com/' +
      'ajax/libs/normalize/4.2.0/normalize.min.css'
  },
  jQuery
];

const scriptCache = new Map();
export function cacheScript({ src } = {}, crossDomain = true) {
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

const linkCache = new Map();
export function cacheLink({ link } = {}, crossDomain = true) {
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
// we add a cache breaker to prevent browser from caching ajax request
const frameRunner = cacheScript({
  src: `/js/frame-runner.js?cacheBreaker=${Math.random()}` },
  false
);

export function buildClassic(files, required, shouldProxyConsole) {
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
      ].map(
        // if shouldProxyConsole then we change instances of console log
        // to `window.__console.log`
        // this let's us tap into logging into the console.
        // currently we only do this to the main window and not the test window
        source => shouldProxyConsole ? useConsoleLogProxy(source) : source
      );
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

      return Observable.combineLatest(head$, frameRunner)
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
    });
}

export function buildBackendChallenge(state) {
  const { solution: url } = getValues(state.form.BackEndChallenge);
  return Observable.combineLatest(frameRunner, cacheScript(jQuery))
    .map(([ frameRunner, jQuery ]) => ({
      build: jQuery + frameRunner,
      source: { url },
      checkChallengePayload: { solution: url }
    }));
}

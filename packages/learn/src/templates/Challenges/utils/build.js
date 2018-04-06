import { of } from 'rxjs/observable/of';
import identity from 'lodash/identity';

// import { fetchScript } from './fetch-and-cache.js';
import throwers from '../rechallenge/throwers';
import {
  challengeFilesSelector,
  isJSEnabledSelector,
  disableJSOnError
} from '../redux';
import {
  applyTransformers,
  proxyLoggerTransformer,
  testJS$JSX
} from '../rechallenge/transformers';
import { cssToHtml, jsToHtml, concactHtml } from '../rechallenge/builders.js';
import { createFileStream, pipe } from './polyvinyl';

const jQuery = {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
};
// const frameRunner = {
//   src: '/js/frame-runner.js',
//   crossDomain: false,
//   cacheBreaker: true
// };
const globalRequires = [
  {
    link:
      'https://cdnjs.cloudflare.com/' +
      'ajax/libs/normalize/4.2.0/normalize.min.css'
  },
  jQuery
];

function filterJSIfDisabled(state) {
  const isJSEnabled = isJSEnabledSelector(state);
  return file => !(testJS$JSX(file) && !isJSEnabled);
}

export function buildFromFiles(state, shouldProxyConsole) {
  const files = challengeFilesSelector(state);
  const required = [];
  /* challengeRequiredSelector(state);*/
  const finalRequires = [...globalRequires, ...required];
  const requiredFiles = Object.keys(files)
    .map(key => files[key])
    .filter(filterJSIfDisabled(state))
    .filter(Boolean);
  return createFileStream(requiredFiles)
    ::pipe(throwers)
    ::pipe(applyTransformers)
    ::pipe(shouldProxyConsole ? proxyLoggerTransformer : identity)
    ::pipe(jsToHtml)
    ::pipe(cssToHtml)
    ::concactHtml(
      finalRequires,
      false
      /* challengeTemplateSelector(state) */
    )
    .catch(err => of(disableJSOnError(err)));
}

// export function buildBackendChallenge(state) {
//   const { solution: url } = backendFormValuesSelector(state);
//   return Observable.combineLatest(
//     fetchScript(frameRunner),
//     fetchScript(jQuery)
//   ).map(([frameRunner, jQuery]) => ({
//     build: jQuery + frameRunner,
//     sources: { url },
//     checkChallengePayload: { solution: url }
//   }));
// }

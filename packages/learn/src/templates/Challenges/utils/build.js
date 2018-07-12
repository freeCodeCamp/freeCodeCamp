import { combineLatest } from 'rxjs/observable/combineLatest';
import { map } from 'rxjs/operators/map';
import identity from 'lodash/identity';

import { fetchScript } from './fetch-and-cache.js';
import throwers from '../rechallenge/throwers';
import {
  challengeFilesSelector,
  isJSEnabledSelector,
  challengeMetaSelector,
  backendFormValuesSelector
} from '../redux';
import {
  applyTransformers,
  proxyLoggerTransformer,
  testJS$JSX
} from '../rechallenge/transformers';
import { cssToHtml, jsToHtml, concatHtml } from '../rechallenge/builders.js';
import { createFileStream, pipe } from './polyvinyl';

const jQuery = {
  src: 'https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js'
};
const frameRunner = {
  src: '/js/frame-runner.js',
  crossDomain: false,
  cacheBreaker: true
};
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
  const { required, template } = challengeMetaSelector(state);
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
    ::concatHtml(finalRequires, template);
}

export function buildBackendChallenge(state) {
  const { solution: { value: url } } = backendFormValuesSelector(state);
  return combineLatest(fetchScript(frameRunner), fetchScript(jQuery)).pipe(
    map(([frameRunner, jQuery]) => ({
      build: jQuery + frameRunner,
      sources: { url },
      checkChallengePayload: { solution: url }
    }))
  );
}

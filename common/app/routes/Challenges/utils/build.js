import { Observable } from 'rx';
import identity from 'lodash/identity';

import { fetchScript } from './fetch-and-cache.js';
import throwers from '../rechallenge/throwers';
import {
  backendFormValuesSelector,
  challengeTemplateSelector,
  challengeRequiredSelector
} from '../redux';
import {
  applyTransformers,
  proxyLoggerTransformer
} from '../rechallenge/transformers';
import {
  cssToHtml,
  jsToHtml,
  concactHtml
} from '../rechallenge/builders.js';

import { filesSelector } from '../../../files';

import {
  createFileStream,
  pipe
} from '../../../../utils/polyvinyl.js';


const jQuery = {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
};
const frameRunner = {
  src: '/js/frame-runner.js',
  crossDomain: false,
  cacheBreaker: true
};
const globalRequires = [
  {
    link: 'https://cdnjs.cloudflare.com/' +
      'ajax/libs/normalize/4.2.0/normalize.min.css'
  },
  jQuery
];

function postTransformCheck(file) {
  if (file.transformError) {
    // this will enable us to tap into the dipatch pipeline
    // and disable JS in the preview
    throw new Error('There was an error whilst transforming your code');
  }
  return file;
}

export function buildFromFiles(state, shouldProxyConsole) {
  const files = filesSelector(state);
  const required = challengeRequiredSelector(state);
  const finalRequires = [...globalRequires, ...required ];
  return createFileStream(files)
    ::pipe(throwers)
    ::pipe(applyTransformers)
    ::pipe(postTransformCheck)
    ::pipe(shouldProxyConsole ? proxyLoggerTransformer : identity)
    ::pipe(jsToHtml)
    ::pipe(cssToHtml)
    ::concactHtml(finalRequires, challengeTemplateSelector(state));
}

export function buildBackendChallenge(state) {
  const { solution: url } = backendFormValuesSelector(state);
  return Observable.combineLatest(
    fetchScript(frameRunner),
    fetchScript(jQuery)
  )
    .map(([ frameRunner, jQuery ]) => ({
      build: jQuery + frameRunner,
      sources: { url },
      checkChallengePayload: { solution: url }
    }));
}

import { Observable } from 'rx';
import { getValues } from 'redux-form';
import identity from 'lodash/identity';

import { fetchScript } from '../utils/fetch-and-cache.js';
import throwers from '../rechallenge/throwers';
import {
  applyTransformers,
  proxyLoggerTransformer
} from '../rechallenge/transformers';
import {
  cssToHtml,
  jsToHtml,
  concactHtml
} from '../rechallenge/builders.js';
import {
  createFileStream,
  pipe
} from '../../common/utils/polyvinyl.js';


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

export function buildClassic(files, required, shouldProxyConsole) {
  const finalRequires = [...globalRequires, ...required ];
  return createFileStream(files)
    ::pipe(throwers)
    ::pipe(applyTransformers)
    ::pipe(shouldProxyConsole ? proxyLoggerTransformer : identity)
    ::pipe(jsToHtml)
    ::pipe(cssToHtml)
    ::concactHtml(finalRequires, frameRunner);
}

export function buildBackendChallenge(state) {
  const { solution: url } = getValues(state.form.BackEndChallenge);
  return Observable.combineLatest(
    fetchScript(frameRunner),
    fetchScript(jQuery)
  )
    .map(([ frameRunner, jQuery ]) => ({
      build: jQuery + frameRunner,
      source: { url },
      checkChallengePayload: { solution: url }
    }));
}

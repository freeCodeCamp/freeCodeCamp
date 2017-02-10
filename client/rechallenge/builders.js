import { Observable } from 'rx';
import cond from 'lodash/cond';
import flow from 'lodash/flow';
import identity from 'lodash/identity';
import matchesProperty from 'lodash/matchesProperty';
import partial from 'lodash/partial';
import stubTrue from 'lodash/stubTrue';

import {
  compileHeadTail,
  setExt,
  transformContents
} from '../../common/utils/polyvinyl';
import {
  fetchScript,
  fetchLink
} from '../utils/fetch-and-cache.js';

const htmlCatch = '\n<!--fcc-->\n';
const jsCatch = '\n;/*fcc*/\n';

const wrapInScript = partial(transformContents, (content) => (
  `${htmlCatch}<script>${content}${jsCatch}</script>`
));
const wrapInStyle = partial(transformContents, (content) => (
  `${htmlCatch}<style>${content}</style>`
));
const setExtToHTML = partial(setExt, 'html');
const padContentWithJsCatch = partial(compileHeadTail, jsCatch);
const padContentWithHTMLCatch = partial(compileHeadTail, htmlCatch);

export const jsToHtml = cond([
  [
    matchesProperty('ext', 'js'),
    flow(padContentWithJsCatch, wrapInScript, setExtToHTML)
  ],
  [ stubTrue, identity ]
]);

export const cssToHtml = cond([
  [
    matchesProperty('ext', 'css'),
    flow(padContentWithHTMLCatch, wrapInStyle, setExtToHTML)
  ],
  [ stubTrue, identity ]
]);

// FileStream::concactHtml(
//   required: [ ...Object ]
// ) => Observable[{ build: String, sources: Dictionary }]
export function concactHtml(required) {
  const source = this.shareReplay();
  const sourceMap = source
    .flatMap(files => files.reduce((sources, file) => {
      sources[file.name] = file.source || file.contents;
      return sources;
    }, {}));

  const head = Observable.from(required)
    .flatMap(required => {
      if (required.src) {
        return fetchScript(required);
      }
      if (required.link) {
        return fetchLink(required);
      }
      return Observable.just('');
    })
    .reduce((head, required) => head + required, '')
    .map(head => `<head>${head}</head>`);

  const body = source
    .flatMap(file => file.reduce((body, file) => {
      return body + file.contents + htmlCatch;
    }, ''))
    .map(source => `
      <body style='margin:8px;'>
        <!-- fcc-start-source -->
          ${source}
        <!-- fcc-end-source -->
      </body>
    `);

  return Observable
    .combineLatest(
      head,
      body,
      fetchScript({
        src: '/js/frame-runner.js',
        crossDomain: false,
        cacheBreaker: true
      }),
      sourceMap,
      (head, body, frameRunner, sources) => ({
        build: head + body + frameRunner,
        sources
      })
    );
}

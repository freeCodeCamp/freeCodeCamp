import { from } from 'rxjs';
import {
  cond,
  flow,
  identity,
  matchesProperty,
  partial,
  stubTrue,
  template as _template
} from 'lodash';

import { compileHeadTail, setExt, transformContents } from '../utils/polyvinyl';

const htmlCatch = '\n<!--fcc-->\n';
const jsCatch = '\n;/*fcc*/\n';

const defaultTemplate = ({ source }) => `
  <body style='margin:8px;'>
    <!-- fcc-start-source -->
      ${source}
    <!-- fcc-end-source -->
  </body>`;

const wrapInScript = partial(
  transformContents,
  content => `${htmlCatch}<script>${content}${jsCatch}</script>`
);
const wrapInStyle = partial(
  transformContents,
  content => `${htmlCatch}<style>${content}</style>`
);
const setExtToHTML = partial(setExt, 'html');
const padContentWithJsCatch = partial(compileHeadTail, jsCatch);
const padContentWithHTMLCatch = partial(compileHeadTail, htmlCatch);

export const jsToHtml = cond([
  [
    matchesProperty('ext', 'js'),
    flow(
      padContentWithJsCatch,
      wrapInScript,
      setExtToHTML
    )
  ],
  [stubTrue, identity]
]);

export const cssToHtml = cond([
  [
    matchesProperty('ext', 'css'),
    flow(
      padContentWithHTMLCatch,
      wrapInStyle,
      setExtToHTML
    )
  ],
  [stubTrue, identity]
]);

// FileStream::concatHtml(
//   required: [ ...Object ],
//   template: String
// ) => Observable[{ build: String, sources: Dictionary }]
export function concatHtml(required, template, files) {
  const createBody = template ? _template(template) : defaultTemplate;
  const sourceMap = Promise.all(files).then(files =>
    files.reduce((sources, file) => {
      sources[file.name] = file.source || file.contents;
      return sources;
    }, {})
  );

  const head = required
    .map(({ link, src }) => {
      if (link && src) {
        throw new Error(`
A required file can not have both a src and a link: src = ${src}, link = ${link}
`);
      }
      if (src) {
        return `<script src='${src}' type='text/javascript'></script>`;
      }
      if (link) {
        return `<link href='${link}' rel='stylesheet' />`;
      }
      return '';
    })
    .reduce((head, required) => [...head, required], [])
    .reduce((head, element, index, thisArray) => {
      if (index + 1 === thisArray.length) {
        return `<head>${head.concat(element)}</head>`;
      }
      return head.concat(element);
    }, '');

  const body = Promise.all(files).then(files =>
    files
      .reduce(
        (body, file) => [...body, file.contents + file.tail + htmlCatch],
        []
      )
      .map(source => createBody({ source }))
  );

  const frameRunner =
    '<script src="/js/frame-runner.js" type="text/javascript"></script>';

  return from(
    Promise.all([head, body, frameRunner, sourceMap]).then(
      ([head, body, frameRunner, sourceMap]) => ({
        build: head + frameRunner + body,
        sources: sourceMap
      })
    )
  );
}

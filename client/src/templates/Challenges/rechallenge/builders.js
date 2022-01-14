import {
  cond,
  flow,
  identity,
  matchesProperty,
  partial,
  stubTrue,
  template as _template
} from 'lodash-es';

import {
  compileHeadTail,
  setExt,
  transformContents
} from '../../../../../utils/polyvinyl';

const defaultTemplate = ({ source }) => {
  return `
  <body id='display-body'>
    ${source}
  </body>`;
};

const wrapInScript = partial(
  transformContents,
  content => `<script>${content}</script>`
);
const wrapInStyle = partial(
  transformContents,
  content => `<style>${content}</style>`
);
const setExtToHTML = partial(setExt, 'html');
const concatHeadTail = partial(compileHeadTail, '');

export const jsToHtml = cond([
  [
    matchesProperty('ext', 'js'),
    flow(concatHeadTail, wrapInScript, setExtToHTML)
  ],
  [stubTrue, identity]
]);

export const cssToHtml = cond([
  [
    matchesProperty('ext', 'css'),
    flow(concatHeadTail, wrapInStyle, setExtToHTML)
  ],
  [stubTrue, identity]
]);

export function findIndexHtml(challengeFiles) {
  const filtered = challengeFiles.filter(challengeFile =>
    wasHtmlFile(challengeFile)
  );
  if (filtered.length > 1) {
    throw new Error('Too many html blocks in the challenge seed');
  }
  return filtered[0];
}

function wasHtmlFile(challengeFile) {
  return challengeFile.history[0] === 'index.html';
}

export function concatHtml({
  required = [],
  template,
  challengeFiles = []
} = {}) {
  const createBody = template ? _template(template) : defaultTemplate;
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
    .join('\n');

  const indexHtml = findIndexHtml(challengeFiles);

  const source = challengeFiles.reduce((source, challengeFile) => {
    if (!indexHtml) return source.concat(challengeFile.contents);
    if (
      indexHtml.importedFiles.includes(challengeFile.history[0]) ||
      wasHtmlFile(challengeFile)
    ) {
      return source.concat(challengeFile.contents);
    } else {
      return source;
    }
  }, '');

  return `<head>${head}</head>${createBody({ source })}`;
}

import { of } from 'rxjs';
import { flow } from 'lodash';

import { throwers } from '../rechallenge/throwers';
import {
  challengeFilesSelector,
  isJSEnabledSelector,
  challengeMetaSelector,
  backendFormValuesSelector
} from '../redux';
import { transformers, testJS$JSX } from '../rechallenge/transformers';
import { cssToHtml, jsToHtml, concatHtml } from '../rechallenge/builders.js';
import { isPromise } from './polyvinyl';

const frameRunner =
  "<script src='/js/frame-runner.js' type='text/javascript'></script>";

const globalRequires = [
  {
    link:
      'https://cdnjs.cloudflare.com/' +
      'ajax/libs/normalize/4.2.0/normalize.min.css'
  }
];

function filterJSIfDisabled(state) {
  const isJSEnabled = isJSEnabledSelector(state);
  return file => !(testJS$JSX(file) && !isJSEnabled);
}

const applyFunction = fn => file => {
  if (file.error) {
    return file;
  }
  try {
    let newFile = fn(file);
    if (typeof newFile !== 'undefined') {
      if (isPromise(newFile)) {
        newFile = newFile.catch(() => {
          // file.error = e.message;
          return file;
        });
      }
      return newFile;
    }
    return file;
  } catch {
    // file.error = e.message;
    return file;
  }
};

const applyFunctions = fns => file =>
  fns.reduce((file, fn) => {
    if (isPromise(file)) {
      return file.then(applyFunction(fn));
    }
    return applyFunction(fn)(file);
  }, file);
const toHtml = [jsToHtml, cssToHtml];
const pipeLine = flow(
  applyFunctions(throwers),
  applyFunctions(transformers),
  applyFunctions(toHtml)
);

export function buildFromFiles(state) {
  const files = challengeFilesSelector(state);
  const { required = [], template } = challengeMetaSelector(state);
  const finalRequires = [...globalRequires, ...required];
  const requiredFiles = Object.keys(files)
    .map(key => files[key])
    .filter(filterJSIfDisabled(state))
    .filter(Boolean);
  const finalFiles = requiredFiles.map(pipeLine);
  return concatHtml(finalRequires, template, finalFiles);
}

export function buildJSFromFiles(files) {
  const pipeLine = flow(
    applyFunctions(throwers),
    applyFunctions(transformers)
  );
  const finalFiles = Object.keys(files)
    .map(key => files[key])
    .map(pipeLine);
  const sourceMap = Promise.all(finalFiles).then(files =>
    files.reduce((sources, file) => {
      sources[file.name] = file.source || file.contents;
      return sources;
    }, {})
  );
  const body = Promise.all(finalFiles).then(files =>
    files
      .reduce(
        (body, file) => [
          ...body,
          file.head + '\n' + file.contents + '\n' + file.tail
        ],
        []
      )
      .join('/n')
  );
  return Promise.all([body, sourceMap]).then(([body, sources]) => ({
    solution: body,
    code: sources && 'index' in sources ? sources['index'] : ''
  }));
}

export function buildBackendChallenge(state) {
  const {
    solution: { value: url }
  } = backendFormValuesSelector(state);
  return of({
    build: frameRunner,
    sources: { url },
    checkChallengePayload: { solution: url }
  });
}

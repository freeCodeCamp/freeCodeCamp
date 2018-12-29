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

const frameRunner = [
  {
    src: '/js/frame-runner.js'
  }
];

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

function buildSourceMap(files) {
  return files.reduce((sources, file) => {
    sources[file.name] = file.source || file.contents;
    return sources;
  }, {});
}

export function buildDOMChallenge(state) {
  const files = challengeFilesSelector(state);
  const { required = [], template } = challengeMetaSelector(state);
  const finalRequires = [...globalRequires, ...required, ...frameRunner];
  const finalFiles = Object.keys(files)
    .map(key => files[key])
    .filter(filterJSIfDisabled(state))
    .filter(Boolean)
    .map(pipeLine);
  return Promise.all(finalFiles).then(files => ({
    build: concatHtml(finalRequires, template, files),
    sources: buildSourceMap(files)
  }));
}

export function buildJSChallenge(state) {
  const files = challengeFilesSelector(state);
  const pipeLine = flow(
    applyFunctions(throwers),
    applyFunctions(transformers)
  );
  const finalFiles = Object.keys(files)
    .map(key => files[key])
    .map(pipeLine);
  return Promise.all(finalFiles).then(files => ({
    build: files
      .reduce(
        (body, file) => [
          ...body,
          file.head + '\n' + file.contents + '\n' + file.tail
        ],
        []
      )
      .join('/n'),
    sources: buildSourceMap(files)
  }));
}

export function buildBackendChallenge(state) {
  const {
    solution: { value: url }
  } = backendFormValuesSelector(state);
  return {
    build: concatHtml(frameRunner, ''),
    sources: { url }
  };
}

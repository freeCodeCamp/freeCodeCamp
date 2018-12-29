import { throwers } from '../rechallenge/throwers';
import {
  challengeFilesSelector,
  isJSEnabledSelector,
  challengeMetaSelector,
  backendFormValuesSelector
} from '../redux';
import { transformers, testJS$JSX } from '../rechallenge/transformers';
import { cssToHtml, jsToHtml, concatHtml } from '../rechallenge/builders.js';

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

const applyFunction = fn =>
  async function(file) {
    try {
      if (file.error) {
        return file;
      }
      const newFile = await fn.call(this, file);
      if (typeof newFile !== 'undefined') {
        return newFile;
      }
      return file;
    } catch {
      // file.error = e.message;
      return file;
    }
  }.bind(this);

const composeFunctions = (...fns) =>
  fns.map(applyFunction.bind(this)).reduce((f, g) => x => f(x).then(g));

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
  const toHtml = [jsToHtml, cssToHtml];
  const pipeLine = composeFunctions(...throwers, ...transformers, ...toHtml);
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
  const pipeLine = composeFunctions(...throwers, ...transformers);
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

import { throwers } from '../rechallenge/throwers';
import { transformers } from '../rechallenge/transformers';
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
      // return { error };
      return file;
    }
  };

const composeFunctions = (...fns) =>
  fns.map(applyFunction).reduce((f, g) => x => f(x).then(g));

function buildSourceMap(files) {
  return files.reduce((sources, file) => {
    sources[file.name] = file.source || file.contents;
    return sources;
  }, {});
}

function checkFilesErrors(files) {
  const errors = files.filter(({ error }) => error).map(({ error }) => error);
  if (errors.length) {
    throw errors;
  }
  return files;
}

export function buildDOMChallenge(files, meta = {}) {
  const { required = [], template = '' } = meta;
  const finalRequires = [...globalRequires, ...required, ...frameRunner];
  const toHtml = [jsToHtml, cssToHtml];
  const pipeLine = composeFunctions(...throwers, ...transformers, ...toHtml);
  const finalFiles = Object.keys(files)
    .map(key => files[key])
    .map(pipeLine);
  return Promise.all(finalFiles)
    .then(checkFilesErrors)
    .then(files => ({
      build: concatHtml({ required: finalRequires, template, files }),
      sources: buildSourceMap(files)
    }));
}

export function buildJSChallenge(files) {
  const pipeLine = composeFunctions(...throwers, ...transformers);
  const finalFiles = Object.keys(files)
    .map(key => files[key])
    .map(pipeLine);
  return Promise.all(finalFiles)
    .then(checkFilesErrors)
    .then(files => ({
      build: files
        .reduce(
          (body, file) => [...body, file.head, file.contents, file.tail],
          []
        )
        .join('\n'),
      sources: buildSourceMap(files)
    }));
}

export function buildBackendChallenge(formValues) {
  const {
    solution: { value: url }
  } = formValues;
  return {
    build: concatHtml({ required: frameRunner }),
    sources: { url }
  };
}

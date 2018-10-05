import { combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
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

const jQueryCDN =
  'https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js';
const jQuery = `<script src='${jQueryCDN}' typ='text/javascript'></script>`;
const frameRunner =
  "<script src='/js/frame-runner.js' type='text/javascript'></script>";

const globalRequires = [
  {
    link:
      'https://cdnjs.cloudflare.com/' +
      'ajax/libs/normalize/4.2.0/normalize.min.css'
  },
  {
    src: jQueryCDN
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

export function buildBackendChallenge(state) {
  const {
    solution: { value: url }
  } = backendFormValuesSelector(state);
  return combineLatest(of(frameRunner), of(jQuery)).pipe(
    map(([frameRunner, jQuery]) => ({
      build: jQuery + frameRunner,
      sources: { url },
      checkChallengePayload: { solution: url }
    }))
  );
}

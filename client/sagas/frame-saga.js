import Rx, { Observable, Subject } from 'rx';
import tape from 'tape';
import types from '../../common/app/routes/challenges/redux/types';
import {
  updateOutput
} from '../../common/app/routes/challenges/redux/types';
import {
  updateTests
} from '../../common/app/routes/challenges/redux/actions';

// we use three different frames to make them all essentially pure functions
const mainId = 'fcc-main-frame';
const testId = 'fcc-test-frame';
const outputId = 'fcc-output-frame';

const createHeader = (id = mainId) => `
  <script>
    window.__frameId = '${id}';
  </script>
`;


function createFrame(document, id = mainId) {
  const frame = document.createElement('iframe');
  frame.id = id;
  frame.setAttribute('style', 'display: none');
  document.body.appendChild(frame);
  return frame;
}

function refreshFrame(frame) {
  frame.src = 'about:blank';
  return frame;
}

function getFrameDocument(document, id = mainId) {
  let frame = document.getElementById(id);
  if (!frame) {
    frame = createFrame(document, id);
  }
  return frame.contentDocument || frame.contentWindow.document;
}

function frameMain({ build } = {}, document) {
  const main = getFrameDocument(document);
  refreshFrame(main);
  main.open();
  main.write(createHeader() + build);
  main.close();
}

function frameTests({ build, source } = {}, document) {
  const tests = getFrameDocument(document, testId);
  refreshFrame(tests);
  tests.Rx = Rx;
  tests.tape = tape;
  tests.__source = source;
  tests.open();
  tests.write(createHeader(testId) + build);
  tests.close();
}

export default function frameSaga(actions$, getState, { window, document }) {
  window.__common = {};
  const runTests$ = window.__common[testId + 'Ready$'] =
    new Subject();
  const updateOutput$ = window.__common[outputId + 'Ready$'] =
    new Subject();
  window.__common.shouldRun = () => true;
  const result$ = actions$
    .filter(({ type }) => (
      type === types.frameMain ||
      type === types.frameTests
    ))
    .map(action => {
      if (action.type === types.frameMain) {
        return frameMain(action.payload, document);
      }
      if (action.type === types.frameTests) {
        return frameTests(action.payload, document);
      }
      return null;
    });

  return Observable.merge(
    updateOutput$.map(updateOutput),
    runTests$.flatMap(() => {
      const frame = getFrameDocument(document, testId);
      const { tests } = getState().challengesApp;
      return frame.__runTests$(tests).map(updateTests);
    }),
    result$
  );
}

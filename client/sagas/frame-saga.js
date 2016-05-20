import { BehaviorSubject } from 'rx';
import types from '../../common/app/routes/challenges/redux/types';

// we use three different frames to make them all essentially pure functions
const mainId = 'fcc-main-frame';
/*
const outputId = 'fcc-output-frame';
const testId = 'fcc-test-frame';
*/

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
  } else {
    refreshFrame(frame);
  }
  return frame.contentDocument || frame.contentWindow.document;
}

function frameMain(build, document) {
  const main = getFrameDocument(document);
  main.open();
  main.write(build);
  main.close();
}

export default function frameSaga(actions$, getState, { window, document }) {
  window.__common = {};
  window.__common.outputFrameReady$ = new BehaviorSubject(false);
  window.__common.testFrameReady$ = new BehaviorSubject(false);
  return actions$
    .filter(({ type }) => type === types.frameMain)
    .map(action => {
      frameMain(action.payload, document);
      return null;
    });
}

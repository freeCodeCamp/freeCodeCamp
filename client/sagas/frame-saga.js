import Rx, { Observable, Subject } from 'rx';
import loopProtect from 'loop-protect';
import types from '../../common/app/routes/challenges/redux/types';
import {
  updateOutput,
  checkChallenge,
  updateTests
} from '../../common/app/routes/challenges/redux/actions';

// we use three different frames to make them all essentially pure functions
const mainId = 'fcc-main-frame';
const testId = 'fcc-test-frame';

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
  frame.contentWindow.loopProtect = loopProtect;
  return {
    frame: frame.contentDocument || frame.contentWindow.document,
    frameWindow: frame.contentWindow
  };
}

const consoleReg = /(?:\b)console(\.log\S+)/g;
const sourceReg =
  /(<!-- fcc-start-source -->)([\s\S]*?)(?=<!-- fcc-end-source -->)/g;
function proxyConsole(build, source) {
  const newSource = source.replace(consoleReg, (match, methodCall) => {
    return 'window.__console' + methodCall;
  });
  return build.replace(sourceReg, '\$1' + newSource);
}

function buildProxyConsole(window, proxyLogger$) {
  const oldLog = window.console.log.bind(console);
  window.__console = {};
  window.__console.log = function proxyConsole(...args) {
    proxyLogger$.onNext(args);
    return oldLog(...args);
  };
}

function frameMain({ build, source } = {}, document, proxyLogger$) {
  const { frame: main, frameWindow } = getFrameDocument(document);
  refreshFrame(main);
  buildProxyConsole(frameWindow, proxyLogger$);
  main.open();
  main.write(createHeader() + proxyConsole(build, source));
  main.close();
}

function frameTests({ build, source } = {}, document) {
  const { frame: tests } = getFrameDocument(document, testId);
  refreshFrame(tests);
  tests.Rx = Rx;
  tests.__source = source;
  tests.open();
  tests.write(createHeader(testId) + build);
  tests.close();
}

export default function frameSaga(actions$, getState, { window, document }) {
  window.__common = {};
  window.__common.shouldRun = () => true;
  const proxyLogger$ = new Subject();
  const runTests$ = window.__common[testId + 'Ready$'] =
    new Subject();
  const result$ = actions$
    .filter(({ type }) => (
      type === types.frameMain ||
      type === types.frameTests ||
      type === types.frameOutput
    ))
    .map(action => {
      if (action.type === types.frameMain) {
        return frameMain(action.payload, document, proxyLogger$);
      }
      return frameTests(action.payload, document);
    });

  return Observable.merge(
    proxyLogger$.map(updateOutput),
    runTests$.flatMap(() => {
      const { frame } = getFrameDocument(document, testId);
      const { tests } = getState().challengesApp;
      const postTests = Observable.of(
        updateOutput('// tests completed'),
        checkChallenge()
      ).delay(250);
      return frame.__runTests$(tests)
        .map(updateTests)
        .concat(postTests);
    }),
    result$
  );
}

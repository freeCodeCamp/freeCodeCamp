import Rx, { Observable, Subject } from 'rx';
import { ofType } from 'redux-epic';
/* eslint-disable import/no-unresolved */
import loopProtect from 'loop-protect';
/* eslint-enable import/no-unresolved */
import {
  types,

  updateOutput,
  checkChallenge,
  updateTests,

  codeLockedSelector,
  testsSelector
} from '../../common/app/routes/challenges/redux';

// we use two different frames to make them all essentially pure functions
// main iframe is responsible rendering the preview and is where we proxy the
// console.log
const mainId = 'fcc-main-frame';
// the test frame is responsible for running the assert tests
const testId = 'fcc-test-frame';

const createHeader = (id = mainId) => `
  <script>
    window.__frameId = '${id}';
    window.onerror = function(msg, url, ln, col, err) {
      window.__err = err;
      return true;
    };
  </script>
`;


function createFrame(document, id = mainId) {
  const frame = document.createElement('iframe');
  frame.id = id;
  frame.className = 'hide-test-frame';
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

function buildProxyConsole(window, proxyLogger) {
  const oldLog = window.console.log.bind(console);
  window.__console = {};
  window.__console.log = function proxyConsole(...args) {
    proxyLogger.onNext(args);
    return oldLog(...args);
  };
}

function frameMain({ build } = {}, document, proxyLogger) {
  const { frame: main, frameWindow } = getFrameDocument(document);
  refreshFrame(main);
  buildProxyConsole(frameWindow, proxyLogger);
  main.Rx = Rx;
  main.open();
  main.write(createHeader() + build);
  main.close();
}

function frameTests({ build, sources, checkChallengePayload } = {}, document) {
  const { frame: tests } = getFrameDocument(document, testId);
  refreshFrame(tests);
  tests.Rx = Rx;
  // default for classic challenges
  // should not be used for modern
  tests.__source = sources['index'] || '';
  tests.__getUserInput = key => sources[key];
  tests.__checkChallengePayload = checkChallengePayload;
  tests.open();
  tests.write(createHeader(testId) + build);
  tests.close();
}

export default function frameEpic(actions, { getState }, { window, document }) {
  // we attach a common place for the iframes to pull in functions from
  // the main process
  window.__common = {};
  window.__common.shouldRun = () => true;
  // this will proxy console.log calls
  const proxyLogger = new Subject();
  // frameReady will let us know when the test iframe is ready to run
  const frameReady = window.__common[testId + 'Ready'] = new Subject();
  const result = actions::ofType(types.frameMain, types.frameTests)
    // if isCodeLocked is true do not frame user code
    .filter(() => !codeLockedSelector(getState()))
    .map(action => {
      if (action.type === types.frameMain) {
        return frameMain(action.payload, document, proxyLogger);
      }
      return frameTests(action.payload, document);
    })
    .ignoreElements();

  return Observable.merge(
    proxyLogger.map(updateOutput),
    frameReady.flatMap(({ checkChallengePayload }) => {
      const { frame } = getFrameDocument(document, testId);
      const tests = testsSelector(getState());
      const postTests = Observable.of(
        updateOutput('// tests completed'),
        checkChallenge(checkChallengePayload)
      ).delay(250);
      // run the tests within the test iframe
      return frame.__runTests(tests)
        .do(tests => {
          tests.forEach(test => {
            if (typeof test.message === 'string') {
              proxyLogger.onNext(test.message);
            }
          });
        })
        .map(updateTests)
        .concat(postTests);
    }),
    result
  );
}

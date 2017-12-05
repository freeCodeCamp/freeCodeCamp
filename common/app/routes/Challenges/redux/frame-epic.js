import _ from 'lodash';
import Rx, { Observable, Subject } from 'rx';
import { ofType } from 'redux-epic';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import Adapter15 from 'enzyme-adapter-react-15';
import {
  types,

  updateOutput,
  checkChallenge,
  updateTests,

  codeLockedSelector,
  isJSEnabledSelector,
  testsSelector
} from './';

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


function createFrame(document, id) {
  const frame = document.createElement('iframe');
  frame.id = id;
  frame.className = 'hide-test-frame';
  document.body.appendChild(frame);
  return frame;
}

const getFrameDocument = (getState, id) => document => {

  const isJSEnabled = isJSEnabledSelector(getState());
  let frame = document.getElementById(id);
  if (!frame) {
    frame = createFrame(document, id);
  } else {
    // erase content of window
    // NOTE(berks): This does not remove const variables
    frame.src = 'about:blank';
  }
  if (!isJSEnabled) {
    frame.sandbox = '';
  } else {
    delete frame.sandbox;
  }
  const context = {
    frame: frame.contentDocument || frame.contentWindow.document,
    frameWindow: frame.contentWindow
  };
  context.frame.Rx = Rx;

  // using require here prevents nodejs issues as loop-protect
  // is added to the window object by webpack and not available to
  // us server side.
  /* eslint-disable import/no-unresolved */
  context.frame.loopProtect = require('loop-protect');
  /* eslint-enable import/no-unresolved */
  return context;
};

const buildProxyConsole = proxyLogger => context => {
  const oldLog = context.frameWindow.console.log.bind(console);
  context.frameWindow.__console = {};
  context.frameWindow.__console.log = function proxyConsole(...args) {
    proxyLogger.onNext(args);
    return oldLog(...args);
  };
  return context;
};

const writeTestAssetsToWindow = ({
  sources,
  checkChallengePayload,
  frameReady
}) => context => {
  const { frame: tests } = context;
  // add enzyme
  // TODO: do programatically
  // TODO: webpack lazyload this
  tests.Enzyme = {
    shallow: (node, options) => new ShallowWrapper(node, null, {
      ...options,
      adapter: new Adapter15()
    }),
    mount: (node, options) => new ReactWrapper(node, null, {
      ...options,
      adapter: new Adapter15()
    })
  };
  // default for classic challenges
  // should not be used for modern
  tests.__source = sources['index'] || '';
  tests.__getUserInput = key => sources[key];
  tests.__checkChallengePayload = checkChallengePayload;
  tests.__frameReady = frameReady;
  return context;
};

function writeToFrame(content, frame) {
  frame.open();
  frame.write(content);
  frame.close();
  return frame;
}

const frameBuild = ({ build, frameId })=> ({ frame }) =>
  writeToFrame(createHeader(frameId) + build, frame);

export default function frameEpic(actions, { getState }, { document }) {
  return Observable.of(document)
    // if document is not defined then none of this epic will run
    // this prevents issues during SSR
    .filter(Boolean)
    .flatMapLatest(document => {
      // this will proxy console.log calls in the main iframe
      const proxyLogger = new Subject();
      // frameReady will let us know when the test iframe is ready to run
      const frameReady = new Subject();
      const result = actions::ofType(types.frameMain, types.frameTests)
      // if isCodeLocked is true do not frame user code
        .filter(() => !codeLockedSelector(getState()))
        .map(({ type, payload }) => ({
          ...payload,
          proxyLogger,
          frameReady,
          isMain: type === types.frameMain,
          frameId: type === types.frameMain ? mainId : testId
        }))
        .do(ctx => _.flow(
          getFrameDocument(getState, ctx.frameId),
          ctx.isMain ?
            buildProxyConsole(proxyLogger) :
            writeTestAssetsToWindow(ctx),
          frameBuild(ctx)
        )(document))
        .ignoreElements();

      return Observable.merge(
        proxyLogger.map(updateOutput),
        frameReady.flatMap(({ checkChallengePayload }) => {
          const tests = testsSelector(getState());
          const { frame } = getFrameDocument(getState, testId)(document);
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
    });
}

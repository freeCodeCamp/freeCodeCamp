window.common = (function(global) {
  const {
    Rx: { Observable },
    chai,
    common = { init: [] }
  } = global;

  common.runTests$ = function runTests$({ code, userTests, ...rest }) {

    return Observable.from(userTests)
      .map(function(test) {

        /* eslint-disable no-unused-vars */
        const assert = chai.assert;
        const editor = { getValue() { return code; }};
        /* eslint-enable no-unused-vars */

        try {
          if (test) {
            /* eslint-disable no-eval  */
            eval(common.reassembleTest(test, code));
            /* eslint-enable no-eval */
          }
        } catch (e) {
          test.err = e.message;
        }

        return test;
      })
      .toArray()
      .map(tests => ({ ...rest, tests }));
  };

  return common;
}(window));

$(document).ready(function() {
  const common = window.common;
  const { Observable } = window.Rx;
  const { challengeName, challengeType, challengeTypes } = common;

  common.init.forEach(function(init) {
    init($);
  });

  common.editorKeyUp$
    .debounce(750)
    .map(() => common.editor.getValue())
    .doOnNext(() => console.log('updating value'))
    .subscribe(
      code => {
        common.codeStorage.updateStorage(common.challengeName, code);
        common.codeUri.querify(code);
      },
      err => console.error(err)
    );

  common.resetBtn$
    .doOnNext(() => {
      common.editor.setValue(common.replaceSafeTags(common.seed));
    })
    .flatMap(() => {
      return common.executeChallenge$();
    })
    .subscribe(
      ({ output, original }) => {
        common.codeStorage.updateStorage(challengeName, original);
        common.updateOutputDisplay('' + output);
      },
      ({ err }) => {
        common.updateOutputDisplay('' + err);
      }
    );

  Observable.merge(
    common.editorExecute$,
    common.submitBtn$
  )
    .flatMap(() => {
      common.appendToOutputDisplay('\n// testing challenge...');
      return common.executeChallenge$();
    })
    .map(({ tests, ...rest }) => {
      const solved = tests.every(test => !test.err);
      return { ...rest, tests, solved };
    })
    .subscribe(
      ({ solved, output, tests }) => {
        common.updateOutputDisplay(output);
        common.displayTestResults(tests);
        if (solved) {
          common.showCompletion();
        }
      }
    );

  var $preview = $('#preview');
  if ($preview.html()) {
    $preview.load(function() {
      common.executeChallenge()
        .subscribe(
          ({ output = '' }) => {
            common.updateOutputDisplay(output);
          },
          ({ err }) => {
            common.updateOutputDisplay('' + err);
          }
        );
    });
  } else if (
    challengeType !== '2' &&
    challengeType !== '3' &&
    challengeType !== '4' &&
    challengeType !== '7'
  ) {
    common.executeChallenge$()
      .subscribe(
        ({ original, tests }) => {
          common.codeStorage.updateStorage(challengeName, original);
          common.displayTestResults(tests);
        },
        ({ err }) => {
          if (err.stack) {
            console.error(err);
          }
          common.updateOutputDisplay('' + err);
        }
      );
  }
});

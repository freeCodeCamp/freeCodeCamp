$(document).ready(function() {
  const common = window.common;
  const { Observable } = window.Rx;
  const { challengeName, challengeType, challengeTypes } = common;

  common.init.forEach(function(init) {
    init($);
  });

  const code$ = common.editorKeyUp$
    .debounce(750)
    .map(() => common.editor.getValue())
    .distinctUntilChanged()
    .shareReplay();

  // update storage
  code$.subscribe(
      code => {
        common.codeStorage.updateStorage(common.challengeName, code);
        common.codeUri.querify(code);
      },
      err => console.error(err)
    );

  code$
    .flatMap(code => {
      if (common.hasJs(code)) {
        return common.detectUnsafeCode$(code)
          .flatMap(code => common.detectLoops$(code))
          .flatMap(
            ({ err }) => err ? Observable.throw(err) : Observable.just(code)
          );
      }
      return Observable.just(code);
    })
    .flatMap(code => common.updatePreview$(code))
    .catch(err => Observable.just({ err }))
    .subscribe(
      ({ err }) => {
        if (err) {
          return console.error(err);
        }
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
        if (err.stack) {
          console.error(err);
        }
        common.updateOutputDisplay('' + err);
      }
    );

  Observable.merge(
    common.editorExecute$,
    common.submitBtn$
  )
    .flatMap(() => {
      common.appendToOutputDisplay('\n// testing challenge...');
      return common.executeChallenge$()
        .map(({ tests, ...rest }) => {
          const solved = tests.every(test => !test.err);
          return { ...rest, tests, solved };
        })
        .catch(err => Observable.just(err));
    })
    .subscribe(
      ({ err, solved, output, tests }) => {
        if (err) {
          console.error(err);
          if (common.challengeType === common.challengeTypes.HTML) {
            return common.updatePreview$(`
              <h1>${err}</h1>
            `).subscribe(() => {});
          }
          return common.updateOutputDisplay('' + err);
        }
        common.updateOutputDisplay(output);
        common.displayTestResults(tests);
        if (solved) {
          common.showCompletion();
        }
      },
      ({ err }) => {
        console.error(err);
        common.updateOutputDisplay('' + err);
      }
    );

  // initial challenge run to populate tests
  if (challengeType === challengeTypes.HTML) {
    var $preview = $('#preview');
    return Observable.fromCallback($preview.ready, $preview)()
      .delay(500)
      .flatMap(() => common.executeChallenge$())
      .catch(err => Observable.just({ err }))
      .subscribe(
        ({ err, tests }) => {
          if (err) {
            console.error(err);
            if (common.challengeType === common.challengeTypes.HTML) {
              return common.updatePreview$(`
                <h1>${err}</h1>
              `).subscribe(() => {});
            }
            return common.updateOutputDisplay('' + err);
          }
          common.displayTestResults(tests);
        },
        ({ err }) => {
          console.error(err);
        }
      );
  }

  if (
    challengeType === challengeTypes.BONFIRE &&
    challengeType === challengeTypes.JS
  ) {
    Observable.just({})
      .delay(500)
      .flatMap(() => common.executeChallenge$())
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

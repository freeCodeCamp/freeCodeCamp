$(document).ready(function() {
  const common = window.common;
  const { Observable } = window.Rx;
  const { challengeName, challengeType, challengeTypes } = common;

  common.init.forEach(function(init) {
    init($);
  });


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

  common.submitBtn$
    .flatMap(() => {
      return common.executeChallenge$();
    })
    .subscribe(
      ({ output, original, userTests }) => {
        common.updateOutputDisplay(output);
        common.codeStorage.updateStorage(challengeName, original);
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
        ({ original }) => {
          // common.updateOutputDisplay('' + output);
          common.codeStorage.updateStorage(challengeName, original);
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

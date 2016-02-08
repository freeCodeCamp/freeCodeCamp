window.common = (function({ $, common = { init: [] }}) {
  const stepClass = '.challenge-step';
  const prevBtnClass = '.challenge-step-btn-prev';
  const nextBtnClass = '.challenge-step-btn-next';
  const actionBtnClass = '.challenge-step-btn-action';
  const finishBtnClass = '.challenge-step-btn-finish';
  const submitBtnId = '#challenge-step-btn-submit';
  const submitModalId = '#challenge-step-modal';

  function getPreviousStep($challengeSteps) {
    var $prevStep = false;
    var prevStepIndex = 0;
    $challengeSteps.each(function(index) {
      var $step = $(this);
      if (!$step.hasClass('hidden')) {
        prevStepIndex = index - 1;
      }
    });

    $prevStep = $challengeSteps[prevStepIndex];

    return $prevStep;
  }

  function getNextStep($challengeSteps) {
    var length = $challengeSteps.length;
    var $nextStep = false;
    var nextStepIndex = 0;
    $challengeSteps.each(function(index) {
      var $step = $(this);
      if (
        !$step.hasClass('hidden') &&
        index + 1 !== length
      ) {
        nextStepIndex = index + 1;
      }
    });

    $nextStep = $challengeSteps[nextStepIndex];

    return $nextStep;
  }

  function handlePrevStepClick(e) {
    e.preventDefault();
    var prevStep = getPreviousStep($(stepClass));
    $(this)
    .parent()
    .parent()
    .removeClass('slideInLeft slideInRight')
    .addClass('animated fadeOutRight fast-animation')
    .delay(250)
    .queue(function(prev) {
      $(this).addClass('hidden');
      if (prevStep) {
        $(prevStep)
        .removeClass('hidden')
        .removeClass('fadeOutLeft fadeOutRight')
        .addClass('animated slideInLeft fast-animation')
        .delay(500)
        .queue(function(prev) {
          prev();
        });
      }
      prev();
    });
  }

  function handleNextStepClick(e) {
    e.preventDefault();
    var nextStep = getNextStep($(stepClass));
    $(this)
    .parent()
    .parent()
    .removeClass('slideInRight slideInLeft')
    .addClass('animated fadeOutLeft fast-animation')
    .delay(250)
    .queue(function(next) {
      $(this).addClass('hidden');
      if (nextStep) {
        $(nextStep)
        .removeClass('hidden')
        .removeClass('fadeOutRight fadeOutLeft')
        .addClass('animated slideInRight fast-animation')
        .delay(500)
        .queue(function(next) {
          next();
        });
      }
      next();
    });
  }

  function handleActionClick(e) {
    var props = common.challengeSeed[0] ||
      { stepIndex: [] };

    var $el = $(this);
    var index = +$el.attr('id');
    var propIndex = props.stepIndex.indexOf(index);

    if (propIndex === -1) {
      return $el
      .parent()
      .find('.disabled')
      .removeClass('disabled');
    }

    // an API action
    // prevent link from opening
    e.preventDefault();
    var prop = props.properties[propIndex];
    var api = props.apis[propIndex];
    if (common[prop]) {
      return $el
      .parent()
      .find('.disabled')
      .removeClass('disabled');
    }
    $
    .post(api)
    .done(function(data) {
      // assume a boolean indicates passing
      if (typeof data === 'boolean') {
        return $el
        .parent()
        .find('.disabled')
        .removeClass('disabled');
      }
      // assume api returns string when fails
      $el
      .parent()
      .find('.disabled')
      .replaceWith('<p>' + data + '</p>');
    })
    .fail(function() {
      console.log('failed');
    });
  }

  function handleFinishClick(e) {
    e.preventDefault();
    $(submitModalId).modal('show');
    $(submitModalId + '.modal-header').click();
    $(submitBtnId).click(handleSubmitClick);
  }

  function handleSubmitClick(e) {
    e.preventDefault();

    $('#submit-challenge')
    .attr('disabled', 'true')
    .removeClass('btn-primary')
    .addClass('btn-warning disabled');

    var $checkmarkContainer = $('#checkmark-container');
    $checkmarkContainer.css({ height: $checkmarkContainer.innerHeight() });

    $('#challenge-checkmark')
    .addClass('zoomOutUp')
    .delay(1000)
    .queue(function(next) {
      $(this).replaceWith(
        '<div id="challenge-spinner" ' +
          'class="animated zoomInUp inner-circles-loader">' +
          'submitting...</div>'
      );
      next();
    });

    $.post(
      '/completed-challenge/', {
        id: common.challengeId,
        name: common.challengeName,
        challengeType: common.challengeType
      },
      function(res) {
        if (res) {
          window.location =
            '/challenges/next-challenge?id=' + common.challengeId;
        }
      }
    );
  }

  common.init.push(function($) {
    if (common.challengeType !== '7') {
      return null;
    }

    $(prevBtnClass).click(handlePrevStepClick);
    $(nextBtnClass).click(handleNextStepClick);
    $(actionBtnClass).click(handleActionClick);
    $(finishBtnClass).click(handleFinishClick);
  });

  return common;
}(window));

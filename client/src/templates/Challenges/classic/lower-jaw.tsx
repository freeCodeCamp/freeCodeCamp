import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RenderButtons } from '../components/lower-jaw-button';
import { RenderContextualActionRow } from '../components/lower-jaw-icons';
import { RenderTestHint } from '../components/lower-jaws-hint';
import { RenderTestStatus } from '../components/lower-jaws-status';

import { MAX_MOBILE_WIDTH } from '../../../../../config/misc';

interface LowerJawProps {
  hint?: string;
  challengeIsCompleted: boolean;
  openHelpModal: () => void;
  tryToExecuteChallenge: () => void;
  tryToSubmitChallenge: () => void;
  isEditorInFocus?: boolean;
  testsLength?: number;
  attempts: number;
  openResetModal: () => void;
  isSignedIn: boolean;
  updateContainer: () => void;
}

const LowerJaw = ({
  openHelpModal,
  challengeIsCompleted,
  hint,
  tryToExecuteChallenge,
  tryToSubmitChallenge,
  attempts,
  testsLength,
  isEditorInFocus,
  openResetModal,
  isSignedIn,
  updateContainer
}: LowerJawProps): JSX.Element => {
  const hintRef = React.useRef('');
  const [runningTests, setRunningTests] = useState(false);
  const [testFeedbackHeight, setTestFeedbackHeight] = useState(0);
  const [currentAttempts, setCurrentAttempts] = useState(attempts);
  const [isFeedbackHidden, setIsFeedbackHidden] = useState(false);
  const [ariaHidden, setTestBtnAriaHidden] = useState(false);
  const { t } = useTranslation();
  const submitButtonRef = React.createRef<HTMLButtonElement>();
  const testFeedbackRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    // prevent unnecessary updates:
    if (attempts === currentAttempts) return;
    // Attempts should only be zero when the step is reset, so we should reset
    // the state here.
    if (attempts === 0) {
      setCurrentAttempts(0);
      setRunningTests(false);
      setTestBtnAriaHidden(false);
      setIsFeedbackHidden(false);
      hintRef.current = '';
    } else if (attempts > 0 && hint) {
      //hide the feedback from SR until the "Running tests" are displayed and removed.
      setIsFeedbackHidden(true);
      setRunningTests(true);
      //to prevent the changing attempts value from immediately triggering a new
      //render, the rendered component only depends on currentAttempts. Since
      //currentAttempts is updated with when the feedback is hidden, the screen
      //reader should only read out the new message.
      setCurrentAttempts(attempts);
      hintRef.current = hint;

      //display the test feedback contents.
      setTimeout(() => {
        setRunningTests(false);
        setIsFeedbackHidden(false);
      }, 300);
    }
  }, [attempts, hint, currentAttempts]);

  useEffect(() => {
    if (challengeIsCompleted) {
      if (!isEditorInFocus) submitButtonRef?.current?.focus();
      setTimeout(() => {
        setTestBtnAriaHidden(true);
      }, 500);
    }

    setTestBtnAriaHidden(challengeIsCompleted);
    // Since submitButtonRef changes every render, we have to ignore it here or,
    // once the challenges is completed, every render (including ones triggered
    // by typing in the editor) will focus the button.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeIsCompleted]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (testFeedbackRef.current) {
      setTestFeedbackHeight(testFeedbackRef.current.clientHeight);
    }
    // Every render could change the shape of the jaw, so this effect will let
    // monaco know it might need to resize
    updateContainer();
  });

  const currentText = `<h2 className="hint">{t('learn.hint')}</h2> ${hintRef.current}`;
  const sentencePicker = () => {
    const sentenceArray = [
      'learn.sorry-try-again',
      'learn.sorry-keep-trying',
      'learn.sorry-getting-there',
      'learn.sorry-hang-in-there',
      'learn.sorry-dont-giveup'
    ];
    return sentenceArray[currentAttempts % sentenceArray.length];
  };

  const isAttemptsLargerThanTest =
    currentAttempts &&
    testsLength &&
    (currentAttempts >= testsLength || currentAttempts >= 3);

  const showDesktopButton = window.innerWidth > MAX_MOBILE_WIDTH;

  const checkButton = showDesktopButton
    ? t('buttons.check-code')
    : t('buttons.check-code-2');

  const runningChallenge = challengeIsCompleted && isEditorInFocus;

  return (
    <div className='action-row-container'>
      <RenderButtons
        signed={isSignedIn}
        completeChallenge={challengeIsCompleted}
        signInText={t('learn.sign-in-save')}
        buttonAriaHidden={ariaHidden}
        excuteChallenge={tryToExecuteChallenge}
        checkButtonText={checkButton}
        submitChallenge={tryToSubmitChallenge}
        ref={submitButtonRef}
        submitButtonText={t('buttons.submit-and-go')}
      />
      <div
        style={runningTests ? { height: `${testFeedbackHeight}px` } : {}}
        className={`test-feedback`}
        id='test-feedback'
        aria-live='assertive'
        ref={testFeedbackRef}
      >
        {runningTests && (
          <span className='sr-only'>{t('aria.running-tests')}</span>
        )}
        {challengeIsCompleted && (
          <RenderTestStatus
            testText={t('learn.test')}
            showFeedback={isFeedbackHidden}
            congratulationText={t('learn.congratulations')}
          >
            {runningChallenge && (
              <span className='sr-only'>{t('testScreenReaderText')}</span>
            )}
          </RenderTestStatus>
        )}
        {hintRef.current && (
          <RenderTestHint
            showFeedback={isFeedbackHidden}
            testText={t('learn.test')}
            htmlDescription={currentText}
            learnEncouragementText={t(sentencePicker())}
          />
        )}
      </div>
      <RenderContextualActionRow
        resetButtonName={t('buttons.reset-code')}
        resetButtonEvent={openResetModal}
        hideHelpButton={Boolean(
          isAttemptsLargerThanTest && !challengeIsCompleted
        )}
        helpButtonName={t('buttons.get-help')}
        helpButtonEvent={openHelpModal}
      />
    </div>
  );
};

LowerJaw.displayName = 'LowerJaw';

export default LowerJaw;

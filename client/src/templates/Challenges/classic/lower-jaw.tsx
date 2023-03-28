import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/react-bootstrap';

import Fail from '../../../assets/icons/fail';
import LightBulb from '../../../assets/icons/lightbulb';
import GreenPass from '../../../assets/icons/green-pass';
import Help from '../../../assets/icons/help';
import Reset from '../../../assets/icons/reset';
import { MAX_MOBILE_WIDTH } from '../../../../../config/misc';
import { apiLocation } from '../../../../../config/env.json';

const lowerJawButtonStyle = 'btn-block btn';

interface LowerJawPanelProps {
  resetButtonName: string;
  helpButtonName: string;
  resetButtonEvent: () => void;
  helpButtonEvent: () => void;
  hideHelpButton: boolean;
}

interface LowerJawTipsProps {
  testText: string;
  learnEncouragementText: string;
  htmlDescription: string;
  showFeedback: boolean;
}

interface LowerJawStatusProps {
  children: React.ReactNode;
  congratulationText: string;
  showFeedback: boolean;
  testText: string;
}

interface LowerJawProps {
  hint?: string;
  challengeIsCompleted: boolean;
  openHelpModal: () => void;
  tryToExecuteChallenge: () => void;
  tryToSubmitChallenge: () => void;
  testsLength?: number;
  attempts: number;
  openResetModal: () => void;
  isSignedIn: boolean;
  updateContainer: () => void;
}

const LowerButtonsPanel = ({
  resetButtonName,
  helpButtonName,
  resetButtonEvent,
  hideHelpButton,
  helpButtonEvent
}: LowerJawPanelProps) => {
  return (
    <>
      <hr />
      <div className='lower-jaw-icon-bar'>
        <button
          className='btn fade-in'
          title={resetButtonName}
          aria-label={resetButtonName}
          data-cy='reset-code-button'
          onClick={resetButtonEvent}
        >
          <Reset />
        </button>

        {hideHelpButton && (
          <button
            className='btn fade-in'
            id='get-help-button'
            title={helpButtonName}
            aria-label={helpButtonName}
            data-cy='get-help-button'
            onClick={helpButtonEvent}
          >
            <Help />
          </button>
        )}
      </div>
    </>
  );
};

const LowerJawTips = ({
  testText,
  learnEncouragementText,
  showFeedback,
  htmlDescription
}: LowerJawTipsProps) => {
  return (
    <>
      <div
        data-cy='failing-test-feedback'
        className='test-status fade-in'
        aria-hidden={showFeedback}
      >
        <Fail aria-hidden='true' />
        <h2>{testText}</h2>
        <p>{learnEncouragementText}</p>
      </div>
      <div className='hint-status fade-in' aria-hidden={showFeedback}>
        <LightBulb aria-hidden='true' />
        <div
          className='hint-description'
          dangerouslySetInnerHTML={{ __html: htmlDescription }}
        />
      </div>
    </>
  );
};

const LowerJawStatus = ({
  children,
  congratulationText,
  showFeedback,
  testText
}: LowerJawStatusProps) => {
  return (
    <div className='test-status fade-in' aria-hidden={showFeedback}>
      <GreenPass aria-hidden='true' />
      <h2>{testText}</h2>
      <p className='status'>
        {congratulationText}
        {children}
      </p>
    </div>
  );
};

const LowerJaw = ({
  openHelpModal,
  challengeIsCompleted,
  hint,
  tryToExecuteChallenge,
  tryToSubmitChallenge,
  attempts,
  testsLength,
  openResetModal,
  isSignedIn,
  updateContainer
}: LowerJawProps): JSX.Element => {
  const hintRef = React.useRef('');
  const [runningTests, setRunningTests] = useState(false);
  const [testFeedbackHeight, setTestFeedbackHeight] = useState(0);
  const [currentAttempts, setCurrentAttempts] = useState(attempts);
  const [isFeedbackHidden, setIsFeedbackHidden] = useState(false);
  const { t } = useTranslation();
  const testFeedbackRef = React.createRef<HTMLDivElement>();
  const checkYourCodeButtonRef = useRef<HTMLButtonElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [focusManagementCompleted, setFocusManagementCompleted] =
    useState(false);

  const isCheckYourCodeButtonClicked = () => {
    const activeElement = document.activeElement;
    // Need to check Submit button as well because if it has focus then it is
    // implied that Check Your Code button was clicked.
    return (
      activeElement === checkYourCodeButtonRef.current ||
      activeElement === submitButtonRef.current
    );
  };

  useEffect(() => {
    // prevent unnecessary updates:
    if (attempts === currentAttempts) return;
    // Attempts should only be zero when the step is reset, so we should reset
    // the state here.
    if (attempts === 0) {
      setCurrentAttempts(0);
      setRunningTests(false);
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
      // If Ctrl + Enter was used then we don't need to worry about setting
      // focus, just leave it where it is. In NVDA, Ctrl + Enter will trigger
      // a code check if focus is on a button in the tabs row. So it is not
      // enough to only check whether the focus is in the editor.
      if (!isCheckYourCodeButtonClicked()) {
        setFocusManagementCompleted(true);
        return;
      }
      // Delay focusing Submit button so that screen reader will announce
      // it after the test results.
      setTimeout(() => {
        submitButtonRef.current?.focus();
        setFocusManagementCompleted(true);
      }, 500);
    }
  }, [challengeIsCompleted]);

  // ToDo: turn it into a grid to remove the need for useEffect.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (testFeedbackRef.current) {
      setTestFeedbackHeight(testFeedbackRef.current.clientHeight);
    }
    // Every render could change the shape of the jaw, so this effect will let
    // monaco know it might need to resize
    updateContainer();
  });

  const currentText = `<h2 className="hint">${t('learn.hint')}</h2> ${
    hintRef.current
  }`;
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

  const checkButtonText = showDesktopButton
    ? t('buttons.check-code')
    : t('buttons.check-code-2');

  const showSignInButton = !isSignedIn && challengeIsCompleted;

  return (
    <div className='action-row-container'>
      {showSignInButton && (
        <Button
          data-cy='sign-in-button'
          block={true}
          href={`${apiLocation}/signin`}
          className='btn-cta'
        >
          {t('learn.sign-in-save')}
        </Button>
      )}
      <button
        className={lowerJawButtonStyle}
        data-cy='submit-lowerJaw-button'
        onClick={tryToSubmitChallenge}
        {...(!challengeIsCompleted && { 'aria-hidden': true })}
        ref={submitButtonRef}
      >
        {t('buttons.submit-and-go')}
      </button>
      <button
        className={lowerJawButtonStyle}
        data-cy='check-lowerJaw-button'
        onClick={tryToExecuteChallenge}
        {...(challengeIsCompleted &&
          !focusManagementCompleted && { tabIndex: -1, className: 'sr-only' })}
        {...(focusManagementCompleted && { 'aria-hidden': true })}
        ref={checkYourCodeButtonRef}
      >
        {checkButtonText}
      </button>
      {/* Using aria-live=polite instead of assertive works better with ORCA */}
      <div
        style={runningTests ? { height: `${testFeedbackHeight}px` } : {}}
        className={`test-feedback`}
        aria-live='polite'
        ref={testFeedbackRef}
      >
        {runningTests && (
          <span className='sr-only'>{t('aria.running-tests')}</span>
        )}
        {challengeIsCompleted && (
          <LowerJawStatus
            testText={t('learn.test')}
            showFeedback={isFeedbackHidden}
            congratulationText={t('learn.congratulations')}
          >
            {!isCheckYourCodeButtonClicked() && (
              <span className='sr-only'>, {t('aria.submit')}</span>
            )}
          </LowerJawStatus>
        )}
        {hintRef.current && !challengeIsCompleted && (
          <LowerJawTips
            showFeedback={isFeedbackHidden}
            testText={t('learn.test')}
            htmlDescription={currentText}
            learnEncouragementText={t(sentencePicker())}
          />
        )}
      </div>
      <LowerButtonsPanel
        resetButtonName={t('buttons.reset-step')}
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

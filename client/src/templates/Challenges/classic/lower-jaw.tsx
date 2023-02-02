import React, { useState, useEffect } from 'react';
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
  isEditorInFocus?: boolean;
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
  const [testBtnAriaHidden, setTestBtnAriaHidden] = useState(false);
  const { t } = useTranslation();
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
      setTimeout(() => {
        setTestBtnAriaHidden(true);
      }, 500);
    }

    setTestBtnAriaHidden(challengeIsCompleted);
    // Since submitButtonRef changes every render, we have to ignore it here or,
    // once the challenges is completed, every render (including ones triggered
    // by typing in the editor) will focus the button.
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

  const showScreenReadSubmit = challengeIsCompleted && isEditorInFocus;
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
      {challengeIsCompleted ? (
        <button
          className={lowerJawButtonStyle}
          data-cy='submit-lowerJaw-button'
          onClick={tryToSubmitChallenge}
        >
          {t('buttons.submit-and-go')}
        </button>
      ) : (
        <button
          className={lowerJawButtonStyle}
          data-cy='check-lowerJaw-button'
          onClick={tryToExecuteChallenge}
          aria-hidden={testBtnAriaHidden}
        >
          {checkButtonText}
        </button>
      )}
      <div
        style={runningTests ? { height: `${testFeedbackHeight}px` } : {}}
        className={`test-feedback`}
        aria-live='assertive'
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
            {showScreenReadSubmit && (
              <span className='sr-only'>{t('aria.submit')}</span>
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

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/react-bootstrap';

import TestFail from '../../../assets/icons/test-fail';
import TestHint from '../../../assets/icons/test-hint';
import TestPass from '../../../assets/icons/test-pass';
import { MAX_MOBILE_WIDTH } from '../../../../../config/misc';
import { apiLocation } from '../../../../../config/env.json';

interface LowerJawProps {
  hint?: string;
  challengeIsCompleted: boolean;
  tryToExecuteChallenge: () => void;
  tryToSubmitChallenge: () => void;
  isEditorInFocus?: boolean;
  isRunningTests?: boolean;
  attempts: number;
  isSignedIn: boolean;
  updateContainer: () => void;
}

const LowerJaw = ({
  challengeIsCompleted,
  hint,
  tryToExecuteChallenge,
  tryToSubmitChallenge,
  isRunningTests,
  attempts,
  isEditorInFocus,
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
  const submitButtonRef = React.createRef<HTMLButtonElement>();
  const testFeedbackRef = React.createRef<HTMLDivElement>();
  const challengeHasBeenCompletedRef = useRef(false);

  // if a challenge was ever completed keep the state as completed
  if (challengeIsCompleted) {
    challengeHasBeenCompletedRef.current = true;
  }
  // keep the value of the reference.current as a separate value for convenience
  const challengeHasBeenCompleted = challengeHasBeenCompletedRef.current;

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
  }, [challengeHasBeenCompleted]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (testFeedbackRef.current) {
      setTestFeedbackHeight(testFeedbackRef.current.clientHeight);
    }
    // Every render could change the shape of the jaw, so this effect will let
    // monaco know it might need to resize
    updateContainer();
  });

  const renderTestFeedbackContainer = () => {
    if (runningTests) {
      return <span className='sr-only'>{t('aria.running-tests')}</span>;
    } else if (challengeIsCompleted) {
      const submitKeyboardInstructions = isEditorInFocus ? (
        <span className='sr-only'>{t('aria.submit')}</span>
      ) : (
        ''
      );
      return (
        <div className='test-status fade-in' aria-hidden={isFeedbackHidden}>
          <div className='status-icon' aria-hidden='true'>
            <span>
              <TestPass />
            </span>
          </div>
          <div className='test-status-description'>
            <p className='status'>
              {t('learn.congratulations')}
              {submitKeyboardInstructions}
            </p>
          </div>
        </div>
      );
    } else if (hintRef.current) {
      const hintDescription = `<h2 class="hint">${t('learn.hint')}</h2> ${
        hintRef.current
      }`;
      return (
        <>
          <div
            data-cy='failing-test-feedback'
            className='test-status fade-in'
            aria-hidden={isFeedbackHidden}
          >
            <div className='status-icon' aria-hidden='true'>
              <span>
                <TestFail />
              </span>
            </div>
            <div className='test-status-description'>
              <p>{t(sentencePicker())}</p>
            </div>
          </div>
          <div className='hint-status fade-in' aria-hidden={isFeedbackHidden}>
            <div className='hint-icon' aria-hidden='true'>
              <span>
                <TestHint />
              </span>
            </div>
            <div
              className='hint-description'
              dangerouslySetInnerHTML={{ __html: hintDescription }}
            />
          </div>
        </>
      );
    } else {
      return null;
    }
  };

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

  const showDesktopButton = window.innerWidth > MAX_MOBILE_WIDTH;

  const renderButtons = () => {
    return (
      <>
        <div id='action-buttons-container'>
          {isSignedIn ? null : challengeIsCompleted ? (
            <Button
              block={true}
              href={`${apiLocation}/signin`}
              className='btn-cta'
            >
              {t('learn.sign-in-save')}
            </Button>
          ) : null}
          <button
            id='test-button'
            data-cy='run-tests-button'
            className={`btn-block btn ${challengeIsCompleted ? 'sr-only' : ''}`}
            aria-hidden={testBtnAriaHidden}
            onClick={tryToExecuteChallenge}
          >
            {showDesktopButton
              ? t('buttons.check-code')
              : t('buttons.check-code-2')}
            {isRunningTests && '...'}
          </button>
          <button
            id='submit-button'
            data-cy='submit-button'
            aria-hidden={!challengeIsCompleted}
            className='btn-block btn'
            onClick={tryToSubmitChallenge}
            ref={submitButtonRef}
          >
            {t('buttons.submit-and-go')}
          </button>
        </div>
      </>
    );
  };

  return (
    <div className='action-row-container'>
      {/* {!isRunningTests && feedbackContent && (
        <div
          style={runningTests ? { height: `${testFeedbackheight}px` } : {}}
          className={`test-feedback`}
          id='test-feedback'
          aria-live='assertive'
          ref={testFeedbackRef}
        >
          {feedbackContent}
        </div>
      )} */}
      {renderButtons()}
      <div
        style={runningTests ? { height: `${testFeedbackHeight}px` } : {}}
        className={`test-feedback`}
        id='test-feedback'
        aria-live='assertive'
        ref={testFeedbackRef}
      >
        {renderTestFeedbackContainer()}
      </div>
    </div>
  );
};

LowerJaw.displayName = 'LowerJaw';

export default LowerJaw;

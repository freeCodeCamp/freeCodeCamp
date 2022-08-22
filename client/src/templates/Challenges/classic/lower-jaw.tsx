import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/react-bootstrap';

import Fail from '../../../assets/icons/fail';
import LightBulb from '../../../assets/icons/lightbulb';
import GreenPass from '../../../assets/icons/green-pass';
import { MAX_MOBILE_WIDTH } from '../../../../../config/misc';
import { apiLocation } from '../../../../../config/env.json';

interface LowerJawProps {
  hint?: string;
  challengeIsCompleted: boolean;
  openHelpModal: () => void;
  tryToExecuteChallenge: () => void;
  tryToSubmitChallenge: () => void;
  showFeedback?: boolean;
  isEditorInFocus?: boolean;
  challengeHasErrors?: boolean;
  testsLength?: number;
  attemptsNumber?: number;
  openResetModal: () => void;
  isSignedIn: boolean;
}

const LowerJaw = ({
  openHelpModal,
  challengeIsCompleted,
  challengeHasErrors,
  hint,
  tryToExecuteChallenge,
  tryToSubmitChallenge,
  attemptsNumber,
  testsLength,
  isEditorInFocus,
  openResetModal,
  isSignedIn
}: LowerJawProps): JSX.Element => {
  const [previousHint, setpreviousHint] = useState('');
  const [runningTests, setRunningTests] = useState(false);
  const [testFeedbackheight, setTestFeedbackheight] = useState(0);
  const [isFeedbackHidden, setIsFeedbackHidden] = useState(false);
  const [testBtnariaHidden, setTestBtnariaHidden] = useState(false);
  const { t } = useTranslation();
  const submitButtonRef = React.createRef<HTMLButtonElement>();
  const testFeedbackRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (attemptsNumber && attemptsNumber > 0) {
      //hide the feedback from SR until the "Running tests" are displayed and removed.
      setIsFeedbackHidden(true);

      //allow the lower jaw height to be picked up by the editor.
      setTimeout(() => {
        setRunningTests(true);
      }, 200);

      //display the test feedback contents.
      setTimeout(() => {
        setRunningTests(false);
        setIsFeedbackHidden(false);
      }, 300);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attemptsNumber]);

  useEffect(() => {
    // only save error hints
    if (challengeHasErrors && hint && previousHint !== hint) {
      setpreviousHint(hint);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeHasErrors, hint]);

  useEffect(() => {
    if (challengeIsCompleted && submitButtonRef?.current) {
      submitButtonRef.current.focus();
      setTimeout(() => {
        setTestBtnariaHidden(true);
      }, 500);
    }

    setTestBtnariaHidden(challengeIsCompleted);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeIsCompleted]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (testFeedbackRef.current) {
      setTestFeedbackheight(testFeedbackRef.current.clientHeight);
    }
  });

  /*
    Return early in lifecycle based on the earliest available conditions to help the editor
    calculate the correct editor gap for the lower jaw.

    For consistency, use the persisted version if the conditions has been met before.
  */
  const earliestAvailableHint = hint || previousHint;

  const renderTestFeedbackContainer = () => {
    if (attemptsNumber === 0) {
      return '';
    } else if (runningTests) {
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
              <GreenPass />
            </span>
          </div>
          <div className='test-status-description'>
            <h2>{t('learn.test')}</h2>
            <p className='status'>
              {t('learn.congratulations')}
              {submitKeyboardInstructions}
            </p>
          </div>
        </div>
      );
    } else if (earliestAvailableHint) {
      const hintDescription = `<h2 class="hint">${t(
        'learn.hint'
      )}</h2> ${earliestAvailableHint}`;
      return (
        <>
          <div className='test-status fade-in' aria-hidden={isFeedbackHidden}>
            <div className='status-icon' aria-hidden='true'>
              <span>
                <Fail />
              </span>
            </div>
            <div className='test-status-description'>
              <h2>{t('learn.test')}</h2>
              <p>{t(sentencePicker())}</p>
            </div>
          </div>
          <div className='hint-status fade-in' aria-hidden={isFeedbackHidden}>
            <div className='hint-icon' aria-hidden='true'>
              <span>
                <LightBulb />
              </span>
            </div>
            <div
              className='hint-description'
              dangerouslySetInnerHTML={{ __html: hintDescription }}
            />
          </div>
        </>
      );
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
    return attemptsNumber
      ? sentenceArray[attemptsNumber % sentenceArray.length]
      : sentenceArray[0];
  };

  const renderContextualActionRow = () => {
    const isAttemptsLargerThanTest =
      attemptsNumber &&
      testsLength &&
      (attemptsNumber >= testsLength || attemptsNumber >= 3);

    if (isAttemptsLargerThanTest && !challengeIsCompleted) {
      return (
        <div>
          <hr />
          <button
            className='btn-block btn fade-in'
            id='help-button'
            onClick={openHelpModal}
          >
            {t('buttons.ask-for-help')}
          </button>
          <button className='btn-block btn fade-in' onClick={openResetModal}>
            {t('learn.editor-tabs.restart-step')}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <hr />
          <button className='btn-block btn fade-in' onClick={openResetModal}>
            {t('learn.editor-tabs.restart-step')}
          </button>
        </div>
      );
    }
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
            className={`btn-block btn ${challengeIsCompleted ? 'sr-only' : ''}`}
            aria-hidden={testBtnariaHidden}
            onClick={tryToExecuteChallenge}
          >
            {showDesktopButton
              ? t('buttons.check-code')
              : t('buttons.check-code-2')}
          </button>
          <button
            id='submit-button'
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
      {renderButtons()}
      <div
        style={runningTests ? { height: `${testFeedbackheight}px` } : {}}
        className={`test-feedback`}
        id='test-feedback'
        aria-live='assertive'
        ref={testFeedbackRef}
      >
        {renderTestFeedbackContainer()}
      </div>
      {renderContextualActionRow()}
    </div>
  );
};

LowerJaw.displayName = 'LowerJaw';

export default LowerJaw;

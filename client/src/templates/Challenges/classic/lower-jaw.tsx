import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Fail from '../../../assets/icons/fail';
import LightBulb from '../../../assets/icons/lightbulb';
import GreenPass from '../../../assets/icons/green-pass';

interface LowerJawProps {
  hint?: string;
  challengeIsCompleted?: boolean;
  openHelpModal: () => void;
  executeChallenge: () => void;
  submitChallenge: () => void;
  showFeedback?: boolean;
  isEditorInFocus?: boolean;
  challengeHasErrors?: boolean;
  testsLength?: number;
  attemptsNumber?: number;
  onAttempt?: () => void;
}

const LowerJaw = ({
  openHelpModal,
  challengeIsCompleted,
  challengeHasErrors,
  hint,
  executeChallenge,
  submitChallenge,
  attemptsNumber,
  testsLength,
  onAttempt,
  isEditorInFocus
}: LowerJawProps): JSX.Element => {
  const [previousHint, setpreviousHint] = useState('');
  const [showTestFeedbackAnim, setShowTestFeedbackAnim] = useState(true);
  const [testBtnariaHidden, setTestBtnariaHidden] = useState(false);
  const { t } = useTranslation();
  const submitButtonRef = React.createRef<HTMLButtonElement>();

  useEffect(() => {
    setShowTestFeedbackAnim(false);
    setTimeout(() => {
      setShowTestFeedbackAnim(true);
    }, 0);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeIsCompleted]);

  const renderTestFeedbackContainer = () => {
    if (attemptsNumber === 0) {
      return '';
    } else if (challengeIsCompleted) {
      const submitKeyboardInstructions = isEditorInFocus ? (
        <span className='sr-only'>${t('aria.submit')}</span>
      ) : (
        ''
      );
      return (
        <div className='test-status'>
          <div className='status-icon' aria-hidden='true'>
            <span>
              <GreenPass />
            </span>
          </div>
          <div className='test-status-description'>
            <h2>{t('learn.test')}</h2>
            <p className='status'>
              {t('learn.congradulations')}
              {submitKeyboardInstructions}
            </p>
          </div>
        </div>
      );

      // show the hint if the previousHint is not set
    } else if (hint || previousHint) {
      const hintDiscription = `<h2 class="hint">${t('learn.hint')}</h2> ${
        hint || previousHint
      }`;
      return (
        <>
          <div className='test-status'>
            <div className='status-icon' aria-hidden='true'>
              <span>
                <Fail />
              </span>
            </div>
            <div className='test-status-description'>
              <h2>Test</h2>
              <p>{t(sentencePicker())}</p>
            </div>
          </div>
          <div className='hint-status'>
            <div className='hint-icon' aria-hidden='true'>
              <span>
                <LightBulb />
              </span>
            </div>
            <div
              className='hint-description'
              dangerouslySetInnerHTML={{ __html: hintDiscription }}
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

  const onTestButtonClick = () => {
    executeChallenge();
    if (onAttempt) onAttempt();
  };

  const renderHelpButton = () => {
    const isAtteptsLargerThanTest =
      attemptsNumber && testsLength && attemptsNumber >= testsLength;

    if (isAtteptsLargerThanTest && !challengeIsCompleted)
      return (
        <button
          className='btn-block btn fade-in'
          id='help-button'
          onClick={openHelpModal}
        >
          {t('buttons.ask-for-help')}
        </button>
      );
  };

  const renderButtons = () => {
    return (
      <>
        <button
          id='test-button'
          className={`btn-block btn ${challengeIsCompleted ? 'sr-only' : ''}`}
          aria-hidden={testBtnariaHidden}
          onClick={onTestButtonClick}
        >
          {t('buttons.check-code')}
        </button>
        <div id='action-buttons-container'>
          <button
            id='submit-button'
            aria-hidden={!challengeIsCompleted}
            className='btn-block btn'
            onClick={submitChallenge}
            ref={submitButtonRef}
          >
            {t('buttons.submit-and-go')}
          </button>
          {renderHelpButton()}
        </div>
      </>
    );
  };

  return (
    <div className='action-row-container'>
      {renderButtons()}
      <div
        className={`test-feedback ${showTestFeedbackAnim ? 'fade-in' : ''}`}
        id='test-feedback'
        aria-atomic='true'
        aria-live='assertive'
      >
        {renderTestFeedbackContainer()}
      </div>
    </div>
  );
};

LowerJaw.displayName = 'LowerJaw';

export default LowerJaw;

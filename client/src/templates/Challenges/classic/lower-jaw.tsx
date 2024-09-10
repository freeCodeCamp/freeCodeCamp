import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { createSelector } from 'reselect';
import { Button } from '@freecodecamp/ui';
import { connect } from 'react-redux';
import Fail from '../../../assets/icons/fail';
import LightBulb from '../../../assets/icons/lightbulb';
import GreenPass from '../../../assets/icons/green-pass';
import { randomCompliment } from '../../../../src/utils/get-words';
import Help from '../../../assets/icons/help';
import Reset from '../../../assets/icons/reset';
import { MAX_MOBILE_WIDTH } from '../../../../config/misc';
import { apiLocation } from '../../../../config/env.json';
import { ChallengeMeta } from '../../../redux/prop-types';
import { Share } from '../../../components/share';
import { ShareProps } from '../../../components/share/types';
import Progress from '../../../components/Progress';
import Quote from '../../../assets/icons/quote';
import {
  challengeMetaSelector,
  completedPercentageSelector
} from '../redux/selectors';
import callGA from '../../../analytics/call-ga';
import { Spacer } from '../../../components/helpers';

interface LowerJawPanelProps extends ShareProps {
  resetButtonText: string;
  helpButtonText: string;
  resetButtonEvent: () => void;
  helpButtonEvent: () => void;
  hideHelpButton: boolean;
  showShareButton: boolean;
}

interface LowerJawTipsProps {
  testText: string;
  learnEncouragementText: string;
  htmlDescription: string;
  showFeedback: boolean;
}

interface LowerJawStatusProps {
  children: React.ReactNode;
  text: string;
  showFeedback: boolean;
  testText: string;
}

interface LowerJawProps {
  challengeMeta: ChallengeMeta;
  completedPercent: number;
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

const mapStateToProps = createSelector(
  challengeMetaSelector,
  completedPercentageSelector,
  (challengeMeta: ChallengeMeta, completedPercent: number) => ({
    challengeMeta,
    completedPercent
  })
);

const sentenceArray = [
  'learn.sorry-try-again',
  'learn.sorry-keep-trying',
  'learn.sorry-getting-there',
  'learn.sorry-hang-in-there',
  'learn.sorry-dont-giveup'
];

const sentencePicker = (shownAttempts: number) => {
  return sentenceArray[shownAttempts % sentenceArray.length];
};

const LowerButtonsPanel = ({
  resetButtonText,
  helpButtonText,
  resetButtonEvent,
  hideHelpButton,
  helpButtonEvent,
  showShareButton,
  superBlock,
  block
}: LowerJawPanelProps) => {
  return (
    <>
      <hr />
      <div className='utility-bar'>
        <Button
          data-playwright-test-label='lowerJaw-reset-button'
          className='fade-in'
          onClick={resetButtonEvent}
        >
          <Reset />
          {resetButtonText}
        </Button>
        {showShareButton && <Share superBlock={superBlock} block={block} />}

        {hideHelpButton && (
          <Button
            className='fade-in'
            id='get-help-button'
            onClick={helpButtonEvent}
          >
            <Help />
            {helpButtonText}
          </Button>
        )}
      </div>
    </>
  );
};

const LowerJawTips = ({
  learnEncouragementText,
  showFeedback,
  htmlDescription
}: LowerJawTipsProps) => {
  return (
    <>
      <div
        data-playwright-test-label='lowerJaw-failing-test-feedback'
        className='test-status fade-in'
        aria-hidden={showFeedback}
      >
        <Fail aria-hidden='true' />
        <p>{learnEncouragementText}</p>
      </div>
      <div
        data-playwright-test-label='lowerJaw-failing-hint'
        className='hint-status fade-in'
        aria-hidden={showFeedback}
      >
        <LightBulb aria-hidden='true' />
        <div
          className='hint-description'
          dangerouslySetInnerHTML={{ __html: htmlDescription }}
        />
      </div>
    </>
  );
};

const LowerJawQuote = ({ quote }: { quote: string }) => (
  <div className='hint-status fade-in'>
    <Quote aria-hidden='true' />
    <div id='lowerjaw-quote'>
      <p>{`"${quote}"`}</p>
    </div>
  </div>
);

const LowerJawStatus = ({
  children,
  text,
  showFeedback
}: LowerJawStatusProps) => {
  return (
    <div className='test-status fade-in' aria-hidden={showFeedback}>
      <GreenPass aria-hidden='true' />
      <p className='status'>
        {text}
        {children}
      </p>
    </div>
  );
};

const isBlockCompleted = 100;

const LowerJaw = ({
  challengeMeta: { superBlock, block },
  completedPercent,
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
  const [shownHint, setShownHint] = useState(hint);
  const [quote, setQuote] = useState(randomCompliment());
  const [runningTests, setRunningTests] = useState(false);
  const [testFeedbackHeight, setTestFeedbackHeight] = useState(0);
  const [shownAttempts, setShownAttempts] = useState(attempts);
  const [isFeedbackHidden, setIsFeedbackHidden] = useState(true);
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

  const showShareButton =
    challengeIsCompleted && completedPercent === isBlockCompleted;

  // Attempts should only be zero when the step is reset, so we should reset
  // the state here.
  if (attempts !== shownAttempts && attempts === 0) {
    setShownAttempts(0);
    setRunningTests(false);
    setIsFeedbackHidden(false);
    setShownHint('');
  }
  useEffect(() => {
    if (attempts > shownAttempts) {
      //hide the feedback from SR until the "Running tests" are displayed and removed.
      setIsFeedbackHidden(true);
      setRunningTests(true);
      //to prevent the changing attempts value from immediately triggering a new
      //render, the rendered component only depends on shownAttempts. Since
      //shownAttempts is updated with when the feedback is hidden, the screen
      //reader should only read out the new message. Note: this starts with the
      //second encouragement since attempts starts at 1.
      setShownAttempts(attempts);
      //display the test feedback contents.
      setTimeout(() => {
        setRunningTests(false);
        setIsFeedbackHidden(false);
      }, 300);
    }
  }, [attempts, shownAttempts]);

  useEffect(() => {
    // Since there's no guarantee that hint and attempts update in the same
    // render, hints have to be updated separately.
    if (hint) setShownHint(hint);
  }, [hint]);

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
      setQuote(randomCompliment());
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

  const isAttemptsLargerThanTest =
    shownAttempts &&
    testsLength &&
    (shownAttempts >= testsLength || shownAttempts >= 3);

  const isDesktop = window.innerWidth > MAX_MOBILE_WIDTH;
  const isMacOS = navigator.userAgent.includes('Mac OS');

  const checkButtonText = isDesktop
    ? isMacOS
      ? t('buttons.check-code-cmd')
      : t('buttons.check-code-ctrl')
    : t('buttons.check-code');

  const submitButtonText = isDesktop
    ? isMacOS
      ? t('buttons.submit-and-go-cmd')
      : t('buttons.submit-and-go-ctrl')
    : t('buttons.submit-and-go');

  const showSignInButton = !isSignedIn && challengeIsCompleted;

  return (
    <div className='action-row-container'>
      {showSignInButton && (
        <>
          <a
            href={`${apiLocation}/signin`}
            className='btn-cta btn btn-block'
            onClick={() => {
              callGA({
                event: 'sign_in'
              });
            }}
          >
            {t('learn.sign-in-save')}
          </a>
          <Spacer size='xxSmall' />
        </>
      )}
      <Button
        data-playwright-test-label='lowerJaw-submit-button'
        block
        onClick={tryToSubmitChallenge}
        {...(!challengeIsCompleted && { 'aria-hidden': true })}
        ref={submitButtonRef}
      >
        {submitButtonText}
      </Button>
      <div
        className={
          challengeIsCompleted && !focusManagementCompleted ? 'sr-only' : ''
        }
      >
        <Button
          data-playwright-test-label='lowerJaw-check-button'
          block
          onClick={tryToExecuteChallenge}
          {...(challengeIsCompleted &&
            !focusManagementCompleted && { tabIndex: -1 })}
          {...(challengeIsCompleted &&
            focusManagementCompleted && { 'aria-hidden': true })}
          ref={checkYourCodeButtonRef}
        >
          {checkButtonText}
        </Button>
      </div>
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
          <>
            <LowerJawStatus
              testText={t('learn.test')}
              showFeedback={isFeedbackHidden}
              text={t('learn.congratulations')}
            >
              {!isCheckYourCodeButtonClicked() && (
                <span className='sr-only'>, {t('aria.submit')}</span>
              )}
            </LowerJawStatus>
            <LowerJawQuote quote={quote} />
            <span className='sr-only'>
              {t('learn.percent-complete', { percent: completedPercent })}
            </span>
          </>
        )}
        {shownHint && !challengeIsCompleted && (
          <LowerJawTips
            data-testid='lowerJaw-tips'
            showFeedback={isFeedbackHidden}
            testText={t('learn.test')}
            htmlDescription={shownHint ?? ''}
            learnEncouragementText={t(sentencePicker(shownAttempts))}
          />
        )}
      </div>
      {challengeIsCompleted && (
        <>
          <hr></hr>
          <div className='progress-bar-container'>
            <Progress />
          </div>
        </>
      )}
      <LowerButtonsPanel
        resetButtonText={t('buttons.reset')}
        helpButtonText={t('buttons.help')}
        resetButtonEvent={openResetModal}
        hideHelpButton={Boolean(
          isAttemptsLargerThanTest && !challengeIsCompleted
        )}
        helpButtonEvent={openHelpModal}
        showShareButton={showShareButton}
        superBlock={superBlock}
        block={block}
      />
    </div>
  );
};

LowerJaw.displayName = 'LowerJaw';

export default connect(mapStateToProps)(LowerJaw);

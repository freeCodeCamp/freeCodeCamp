import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faClose } from '@fortawesome/free-solid-svg-icons';
import { Test } from '../../../redux/prop-types';
import {
  challengeTestsSelector,
  aiAssistanceHintStateSelector
} from '../redux/selectors';
import {
  isSignedInSelector,
  isAiAssistanceOnSelector
} from '../../../redux/selectors';
import { apiLocation } from '../../../../config/env.json';
import {
  openModal,
  submitChallenge,
  executeChallenge,
  askSocrates
} from '../redux/actions';
import Help from '../../../assets/icons/help';
import callGA from '../../../analytics/call-ga';

import './independent-lower-jaw.css';
import Reset from '../../../assets/icons/reset';
import Stars from '../../../assets/icons/stars';

type AiAssistanceHintState = {
  hint: null | string;
  isLoading: boolean;
  error: null | string;
};

const mapStateToProps = createSelector(
  challengeTestsSelector,
  isSignedInSelector,
  aiAssistanceHintStateSelector,
  isAiAssistanceOnSelector,
  (
    tests: Test[],
    isSignedIn: boolean,
    aiAssistanceHintState: AiAssistanceHintState,
    hasAiAssistanceAccess: boolean
  ) => ({
    tests,
    isSignedIn,
    aiAssistanceHintState,
    hasAiAssistanceAccess
  })
);

const mapDispatchToProps = {
  openHelpModal: () => openModal('help'),
  openResetModal: () => openModal('reset'),
  askSocrates: () => askSocrates(),
  executeChallenge,
  submitChallenge
};

interface IndependentLowerJawProps {
  openHelpModal: () => void;
  openResetModal: () => void;
  executeChallenge: () => void;
  askSocrates: () => void;
  submitChallenge: () => void;
  tests: Test[];
  isSignedIn: boolean;
  aiAssistanceHintState: AiAssistanceHintState;
  hasAiAssistanceAccess: boolean;
}
export function IndependentLowerJaw({
  openHelpModal,
  openResetModal,
  askSocrates,
  executeChallenge,
  submitChallenge,
  tests,
  isSignedIn,
  aiAssistanceHintState,
  hasAiAssistanceAccess
}: IndependentLowerJawProps): JSX.Element {
  const { t } = useTranslation();
  const firstFailedTest = tests.find(test => !!test.err);
  const hint = firstFailedTest?.message;
  const [showHint, setShowHint] = React.useState(false);
  const [showAiAssistanceResults, setShowAiAssistanceResults] =
    React.useState(false);
  const [showSubmissionHint, setShowSubmissionHint] = React.useState(true);
  const signInLinkRef = React.useRef<HTMLAnchorElement>(null);
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);
  const [wasCheckButtonClicked, setWasCheckButtonClicked] =
    React.useState(false);

  const isChallengeComplete = tests.every(test => test.pass);

  React.useEffect(() => {
    setShowHint(!!hint);
  }, [hint]);

  React.useEffect(() => {
    if (!isChallengeComplete || !wasCheckButtonClicked) return;

    const focusTarget = isSignedIn
      ? submitButtonRef.current
      : signInLinkRef.current;
    focusTarget?.focus();
    setWasCheckButtonClicked(false);
  }, [isChallengeComplete, isSignedIn, wasCheckButtonClicked]);

  const handleCheckButtonClick = () => {
    setWasCheckButtonClicked(true);
    setShowAiAssistanceResults(false);
    executeChallenge();
  };

  const isMacOS = navigator.userAgent.includes('Mac OS');
  const checkButtonText = isMacOS
    ? t('buttons.command-enter')
    : t('buttons.ctrl-enter');

  const askSocratesAttempt = () => {
    setShowAiAssistanceResults(true);
    setShowHint(false);
    if (aiAssistanceHintState.isLoading) return;
    askSocrates();
  };

  return (
    <div
      className='independent-lower-jaw'
      data-playwright-test-label='independentLowerJaw-container'
      tabIndex={-1}
    >
      {showHint && hint && (
        <div
          className='hint-container'
          data-playwright-test-label='independentLowerJaw-failing-hint'
        >
          <div className='hint-header'>
            <FontAwesomeIcon icon={faLightbulb} />

            <button
              className={'tooltip'}
              data-playwright-test-label='independentLowerJaw-hint-close-button'
              onClick={() => setShowHint(false)}
            >
              <FontAwesomeIcon icon={faClose} />
              <span className='tooltiptext'> {t('buttons.close')}</span>
            </button>
          </div>
          <div
            className='hint-body'
            dangerouslySetInnerHTML={{ __html: hint }}
          />
        </div>
      )}
      {showAiAssistanceResults && (
        <div className='hint-container'>
          <div className='hint-header'>
            <Stars />
            <button
              className={'tooltip'}
              onClick={() => setShowAiAssistanceResults(false)}
            >
              <FontAwesomeIcon icon={faClose} />
              <span className='tooltiptext'> {t('buttons.close')}</span>
            </button>
          </div>
          {aiAssistanceHintState.isLoading ? (
            <div className='socrates-skeleton'>
              <div className='skeleton-line skeleton-line-1' />
              <div className='skeleton-line skeleton-line-2' />
            </div>
          ) : (
            <div
              className='hint-body'
              dangerouslySetInnerHTML={{
                __html:
                  aiAssistanceHintState.hint ||
                  aiAssistanceHintState.error ||
                  ''
              }}
            />
          )}
        </div>
      )}
      {isChallengeComplete && showSubmissionHint && (
        <div
          className='hint-container'
          data-playwright-test-label='independentLowerJaw-submission-hint'
        >
          <div>
            <p>{t('learn.congratulations-code-passes')}</p>
            {!isSignedIn && (
              <a
                href={`${apiLocation}/signin`}
                className='btn-cta btn btn-block'
                data-playwright-test-label='independentLowerJaw-signin-link'
                ref={signInLinkRef}
                onClick={() => {
                  callGA({
                    event: 'sign_in'
                  });
                }}
              >
                {t('learn.sign-in-save')}
              </a>
            )}
          </div>
          <button
            className={'tooltip'}
            data-playwright-test-label='independentLowerJaw-submission-hint-close-button'
            onClick={() => setShowSubmissionHint(false)}
          >
            ×<span className='tooltiptext'> {t('buttons.close')}</span>
          </button>
        </div>
      )}

      <div className='buttons-row-container'>
        <div className='action-row-left'>
          {isChallengeComplete ? (
            <Button
              block
              className={`${isSignedIn && 'btn-cta'} tooltip`}
              id='independent-lower-jaw-submit-button'
              data-playwright-test-label='independentLowerJaw-submit-button'
              onClick={() => submitChallenge()}
              ref={submitButtonRef}
            >
              {t('buttons.submit-continue')}
              <span className='tooltiptext left-tooltip '>
                {checkButtonText}
              </span>
            </Button>
          ) : (
            <button
              type='button'
              className='btn-cta tooltip'
              data-playwright-test-label='independentLowerJaw-check-button'
              onClick={handleCheckButtonClick}
            >
              {t('buttons.check-code')}
              <span className='tooltiptext left-tooltip '>
                {checkButtonText}
              </span>
            </button>
          )}
        </div>
        <div className='action-row-right'>
          {hasAiAssistanceAccess && (
            <button
              type='button'
              className='icon-button tooltip socrates-button'
              onClick={askSocratesAttempt}
            >
              <Stars />
              <span className='tooltiptext'>{t('buttons.ask-socrates')}</span>
            </button>
          )}
          <button
            type='button'
            className='icon-button tooltip'
            data-playwright-test-label='independentLowerJaw-reset-button'
            onClick={openResetModal}
          >
            <Reset />
            <span className='tooltiptext'> {t('buttons.reset')}</span>
          </button>
          <button
            type='button'
            className='icon-button tooltip'
            data-playwright-test-label='independentLowerJaw-help-button'
            onClick={openHelpModal}
          >
            <Help />
            <span className='tooltiptext'> {t('buttons.help')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

IndependentLowerJaw.displayName = 'IndependentLowerJaw';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndependentLowerJaw);

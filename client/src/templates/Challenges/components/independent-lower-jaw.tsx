import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import sanitizeHtml from 'sanitize-html';
import { Button, Spacer } from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faClose,
  faZap,
  faSave,
  faClockRotateLeft,
  faRotateLeft
} from '@fortawesome/free-solid-svg-icons';
import Progress from '../../../components/Progress';
import {
  completedChallengesIdsSelector,
  isDonatingSelector,
  isSignedInSelector,
  isSocratesOnSelector
} from '../../../redux/selectors';
import { ChallengeMeta, Test } from '../../../redux/prop-types';
import {
  attemptsSelector,
  challengeMetaSelector,
  challengeTestsSelector,
  completedPercentageSelector,
  currentBlockIdsSelector,
  socratesHintStateSelector
} from '../redux/selectors';
import { apiLocation } from '../../../../config/env.json';
import { openModal, executeChallenge, askSocrates } from '../redux/actions';
import { saveChallenge } from '../../../redux/actions';
import Help from '../../../assets/icons/help';
import callGA from '../../../analytics/call-ga';
import { Share } from '../../../components/share';
import { useSubmit } from '../utils/fetch-all-curriculum-data';

import './independent-lower-jaw.css';
import Stars from '../../../assets/icons/stars';

type SocratesHintState = {
  hint: null | string;
  isLoading: boolean;
  error: null | string;
  attempts: null | number;
  limit: null | number;
};

interface StatusAnnouncementProps {
  message: string;
}

const StatusAnnouncement = ({
  message
}: StatusAnnouncementProps): JSX.Element => {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    setAnnouncement('');

    if (!message) return;

    const announceTimeout = window.setTimeout(() => {
      setAnnouncement(message);
    }, 100);

    return () => {
      window.clearTimeout(announceTimeout);
    };
  }, [message]);

  return (
    <span
      aria-atomic='true'
      aria-live='polite'
      className='sr-only'
      data-testid='independent-lower-jaw-live-region'
    >
      {announcement}
    </span>
  );
};

const mapStateToProps = createSelector(
  attemptsSelector,
  challengeTestsSelector,
  isDonatingSelector,
  isSignedInSelector,
  challengeMetaSelector,
  completedPercentageSelector,
  completedChallengesIdsSelector,
  currentBlockIdsSelector,
  socratesHintStateSelector,
  isSocratesOnSelector,
  (
    attempts: number,
    tests: Test[],
    isDonating: boolean,
    isSignedIn: boolean,
    challengeMeta: ChallengeMeta,
    completedPercent: number,
    completedChallengeIds: string[],
    currentBlockIds: string[],
    socratesHintState: SocratesHintState,
    hasSocratesAccess: boolean
  ) => ({
    attempts,
    tests,
    isDonating,
    isSignedIn,
    challengeMeta,
    completedPercent,
    completedChallengeIds,
    currentBlockIds,
    socratesHintState,
    hasSocratesAccess
  })
);

const mapDispatchToProps = {
  openHelpModal: () => openModal('help'),
  openResetModal: () => openModal('reset'),
  askSocrates: () => askSocrates(),
  executeChallenge,
  saveChallenge
};

interface IndependentLowerJawProps {
  openHelpModal: () => void;
  openResetModal: () => void;
  executeChallenge: () => void;
  askSocrates: () => void;
  saveChallenge: () => void;
  attempts: number;
  tests: Test[];
  isDonating: boolean;
  isSignedIn: boolean;
  challengeMeta: ChallengeMeta;
  completedPercent: number;
  completedChallengeIds: string[];
  currentBlockIds: string[];
  socratesHintState: SocratesHintState;
  hasSocratesAccess: boolean;
}
export function IndependentLowerJaw({
  openHelpModal,
  openResetModal,
  askSocrates,
  executeChallenge,
  saveChallenge,
  attempts,
  tests,
  isDonating,
  isSignedIn,
  challengeMeta,
  completedPercent,
  completedChallengeIds,
  currentBlockIds,
  socratesHintState,
  hasSocratesAccess
}: IndependentLowerJawProps): JSX.Element {
  const { t } = useTranslation();
  const showSocratesFlag = useFeature('show-socrates').on;
  const submitChallenge = useSubmit();
  const firstFailedTest = tests.find(test => !!test.err);
  const hint = firstFailedTest?.message;
  const sanitizedHint = React.useMemo(
    () =>
      hint
        ? sanitizeHtml(hint, {
            allowedTags: ['b', 'i', 'em', 'strong', 'code', 'wbr']
          })
        : '',
    [hint]
  );
  const hintAnnouncement = React.useMemo(
    () =>
      new DOMParser()
        .parseFromString(sanitizedHint, 'text/html')
        .body.textContent?.replace(/\s+/g, ' ')
        .trim() ?? '',
    [sanitizedHint]
  );
  const [showHint, setShowHint] = React.useState(false);
  const [showSocratesResults, setShowSocratesResults] = React.useState(false);
  const [showSubmissionHint, setShowSubmissionHint] = React.useState(true);
  const signInLinkRef = React.useRef<HTMLAnchorElement>(null);
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);
  const [wasCheckButtonClicked, setWasCheckButtonClicked] =
    React.useState(false);

  const isChallengeComplete = tests.every(test => test.pass);
  const hasBlockIds = currentBlockIds.length > 0;
  const isLastStepInBlock =
    hasBlockIds &&
    currentBlockIds[currentBlockIds.length - 1] === challengeMeta.id;
  const isBlockCompletedByIds =
    hasBlockIds &&
    currentBlockIds.every(challengeId =>
      completedChallengeIds.includes(challengeId)
    );
  const hasCompletedPercent = Number.isFinite(completedPercent);
  const isBlockCompleted =
    isBlockCompletedByIds || (hasCompletedPercent && completedPercent === 100);
  const showShareButton =
    isChallengeComplete && isLastStepInBlock && isBlockCompleted;
  const completionAnnouncement = [
    t('learn.congratulations-code-passes'),
    hasCompletedPercent
      ? `${t(`intro:${challengeMeta.superBlock}.blocks.${challengeMeta.block}.title`)} ${t('learn.percent-complete', { percent: completedPercent })}`
      : null
  ]
    .filter(Boolean)
    .join(' ');

  const liveAnnouncementMessage =
    showHint && hint
      ? hintAnnouncement
      : isChallengeComplete && showSubmissionHint
        ? completionAnnouncement
        : '';

  // Hint announcements need a fresh signal for every check attempt so the same
  // failing message can be remounted and announced again. Completion only needs
  // to announce when the challenge becomes complete, not on passing rerenders.
  const liveAnnouncementSignal =
    showHint && hint
      ? attempts
      : isChallengeComplete && showSubmissionHint
        ? isChallengeComplete
        : liveAnnouncementMessage;

  const liveAnnouncementKey = liveAnnouncementMessage
    ? `${challengeMeta.id}-${String(liveAnnouncementSignal)}`
    : `${challengeMeta.id}-idle`;

  React.useEffect(() => {
    setShowHint(!!hint);
  }, [hint, attempts]);

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
    setShowSocratesResults(false);
    executeChallenge();
  };

  const isMacOS = navigator.userAgent.includes('Mac OS');
  const showRevertButton = isSignedIn && challengeMeta.saveSubmissionToDB;
  const shouldShowSocratesDonateCta =
    !isDonating &&
    socratesHintState.attempts !== null &&
    socratesHintState.limit !== null &&
    socratesHintState.attempts >= socratesHintState.limit;
  const checkButtonText = isMacOS
    ? t('buttons.command-enter')
    : t('buttons.ctrl-enter');

  const askSocratesAttempt = () => {
    callGA({
      event: 'CallSocrates',
      action: 'Socrates LowerJaw Button Click',
      isDonating,
      attempts: socratesHintState.attempts,
      limit: socratesHintState.limit,
      optimizedRequest: null
    });

    setShowSocratesResults(true);
    setShowHint(false);
    setShowSubmissionHint(false);
    if (socratesHintState.isLoading) return;
    askSocrates();
  };

  return (
    <div
      className='independent-lower-jaw'
      data-playwright-test-label='independentLowerJaw-container'
      tabIndex={-1}
    >
      <StatusAnnouncement
        key={liveAnnouncementKey}
        message={liveAnnouncementMessage}
      />
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
              aria-label={t('buttons.close')}
            >
              <FontAwesomeIcon icon={faClose} />
              <span className='tooltiptext'> {t('buttons.close')}</span>
            </button>
          </div>
          <div
            className='hint-body'
            dangerouslySetInnerHTML={{
              __html: sanitizedHint
            }}
          />
        </div>
      )}
      {showSocratesResults && (
        <div className='hint-container'>
          <div className='hint-header'>
            <Stars />
            <button
              className={'tooltip'}
              onClick={() => setShowSocratesResults(false)}
            >
              <FontAwesomeIcon icon={faClose} />
              <span className='tooltiptext'> {t('buttons.close')}</span>
            </button>
          </div>
          {socratesHintState.isLoading ? (
            <div className='socrates-skeleton'>
              <div className='skeleton-line skeleton-line-1' />
              <div className='skeleton-line skeleton-line-2' />
            </div>
          ) : (
            <div
              className='hint-body'
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  socratesHintState.hint || socratesHintState.error || '',
                  {
                    allowedTags: ['b', 'i', 'em', 'strong', 'code', 'wbr']
                  }
                )
              }}
            />
          )}
          {socratesHintState.attempts !== null &&
            socratesHintState.limit !== null && (
              <div className='socrates-usage-info'>
                {socratesHintState.attempts}/{socratesHintState.limit}{' '}
                {t('learn.hints-used-today')}
              </div>
            )}
          {shouldShowSocratesDonateCta && (
            <div
              className='socrates-donation-cta'
              data-testid='socrates-donation-cta'
            >
              {t('learn.donor-socrates-benefit')}{' '}
              <a
                className=''
                href='/donate'
                onClick={() => {
                  callGA({
                    event: 'donation_related',
                    action: 'Socrates LowerJaw Become Supporter Click'
                  });
                }}
              >
                {t('donate.become-supporter')}
              </a>
            </div>
          )}
        </div>
      )}
      {isChallengeComplete && showSubmissionHint && (
        <div
          className='hint-container'
          data-playwright-test-label='independentLowerJaw-submission-hint'
        >
          <div className='hint-header'>
            <FontAwesomeIcon icon={faZap} />
            <button
              className={'tooltip'}
              aria-label={t('buttons.close')}
              data-playwright-test-label='independentLowerJaw-submission-hint-close-button'
              onClick={() => setShowSubmissionHint(false)}
            >
              <FontAwesomeIcon icon={faClose} />
              <span className='tooltiptext'> {t('buttons.close')}</span>
            </button>
          </div>
          <b>{t('learn.congratulations-code-passes')}</b>
          <div className='progress-bar-container'>
            <Progress minified={true} />
          </div>
          {isSignedIn && showShareButton && (
            <div
              className='share-button-wrapper'
              data-testid='share-button-wrapper'
            >
              <Share
                superBlock={challengeMeta.superBlock}
                block={challengeMeta.block}
                minified={true}
              />
            </div>
          )}
          {!isSignedIn && (
            <>
              <Spacer size='xxs' />
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
            </>
          )}
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
              aria-label={t('buttons.submit-continue')}
              onClick={() => submitChallenge()}
              ref={submitButtonRef}
            >
              {t('buttons.submit-continue')}
              <span className='tooltiptext left-tooltip'>
                {checkButtonText}
              </span>
            </Button>
          ) : (
            <button
              type='button'
              className='btn-cta tooltip'
              data-playwright-test-label='independentLowerJaw-check-button'
              aria-label={t('buttons.check-code')}
              onClick={handleCheckButtonClick}
            >
              {t('buttons.check-code')}
              <span className='tooltiptext left-tooltip'>
                {checkButtonText}
              </span>
            </button>
          )}
        </div>
        <div className='action-row-right'>
          {hasSocratesAccess && showSocratesFlag && (
            <button
              type='button'
              className='icon-button tooltip socrates-button'
              onClick={askSocratesAttempt}
            >
              <Stars />
              <span className='tooltiptext'>{t('buttons.ask-socrates')}</span>
            </button>
          )}
          {showRevertButton ? (
            <>
              <button
                type='button'
                className='icon-botton tooltip'
                data-playwright-test-label='independentLowerJaw-save-button'
                aria-label={t('buttons.save')}
                onClick={() => saveChallenge()}
              >
                <FontAwesomeIcon icon={faSave} />
                <span className='tooltiptext'> {t('buttons.save')}</span>
              </button>
              <button
                type='button'
                className='icon-botton tooltip'
                data-playwright-test-label='independentLowerJaw-revert-button'
                aria-label={t('buttons.revert')}
                onClick={openResetModal}
              >
                <FontAwesomeIcon icon={faClockRotateLeft} />
                <span className='tooltiptext'> {t('buttons.revert')}</span>
              </button>
            </>
          ) : (
            <button
              type='button'
              className='icon-botton tooltip'
              data-playwright-test-label='independentLowerJaw-reset-button'
              aria-label={t('buttons.reset')}
              onClick={openResetModal}
            >
              <FontAwesomeIcon icon={faRotateLeft} />
              <span className='tooltiptext'> {t('buttons.reset')}</span>
            </button>
          )}
          <button
            type='button'
            className='icon-button tooltip'
            data-playwright-test-label='independentLowerJaw-help-button'
            aria-label={t('buttons.help')}
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

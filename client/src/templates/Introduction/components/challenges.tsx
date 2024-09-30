import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';

import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { ChallengeWithCompletedNode } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import { challengeTypes } from '../../../../../shared/config/challenge-types';
import { Link } from '../../../components/helpers';
import { ButtonLink } from '../../../components/helpers/button-link';

const getStepNumber = (dashedName: string) => {
  // dashedName should be in the format 'step-1' or 'task-1'
  const match = dashedName.match(/-(\d+)/);
  return match ? match[1] : '';
};

interface Challenges {
  challengesWithCompleted: ChallengeWithCompletedNode[];
  isProjectBlock: boolean;
  isGridMap?: boolean;
  blockTitle?: string | null;
}

const CheckMark = ({ isCompleted }: { isCompleted: boolean }) =>
  isCompleted ? <GreenPass /> : <GreenNotCompleted />;

const Challenge = ({
  challenge
}: {
  challenge: ChallengeWithCompletedNode;
}) => (
  <Link to={challenge.fields.slug}>
    <span className='map-badge'>
      <CheckMark isCompleted={challenge.isCompleted} />
    </span>
    {challenge.title}
  </Link>
);

const Project = ({ challenge }: { challenge: ChallengeWithCompletedNode }) => (
  <Link to={challenge.fields.slug}>
    {challenge.title}
    <span className='map-badge map-project-checkmark'>
      <CheckMark isCompleted={challenge.isCompleted} />
    </span>
  </Link>
);

function Challenges({
  challengesWithCompleted,
  isProjectBlock,
  isGridMap = false,
  blockTitle
}: Challenges): JSX.Element {
  const { t } = useTranslation();

  const firstIncompleteChallenge = challengesWithCompleted.find(
    challenge => !challenge.isCompleted
  );

  const isChallengeStarted = !!challengesWithCompleted.find(
    challenge => challenge.isCompleted
  );

  return isGridMap ? (
    <>
      {firstIncompleteChallenge && (
        <div className='challenge-jump-link'>
          <ButtonLink size='small' href={firstIncompleteChallenge.fields.slug}>
            {!isChallengeStarted
              ? t('buttons.start-project')
              : t('buttons.resume-project')}{' '}
            {blockTitle && <span className='sr-only'>{blockTitle}</span>}
          </ButtonLink>
        </div>
      )}
      <nav
        aria-label={
          blockTitle
            ? challengesWithCompleted[0].superBlock === SuperBlocks.A2English
              ? t('aria.dialogues-and-tasks-for', { blockTitle })
              : t('aria.steps-for', { blockTitle })
            : t('aria.steps')
        }
      >
        <ul className={`map-challenges-ul map-challenges-grid `}>
          {challengesWithCompleted.map(challenge => (
            <li
              className={`map-challenge-title map-challenge-title-grid ${
                isProjectBlock
                  ? 'map-project-wrap'
                  : challenge.challengeType === challengeTypes.dialogue
                    ? 'map-dialogue-wrap'
                    : 'map-challenge-wrap'
              }`}
              id={challenge.dashedName}
              key={`map-challenge ${challenge.fields.slug}`}
            >
              {!isProjectBlock &&
              challenge.challengeType !== challengeTypes.dialogue ? (
                // Step or Task challenge
                <Link
                  to={challenge.fields.slug}
                  className={`map-grid-item ${
                    +challenge.isCompleted ? 'challenge-completed' : ''
                  }`}
                >
                  <span className='sr-only'>
                    {challenge.superBlock === SuperBlocks.A2English
                      ? t('aria.task')
                      : t('aria.step')}
                  </span>
                  <span>{getStepNumber(challenge.dashedName)}</span>
                  <span className='sr-only'>
                    {challenge.isCompleted
                      ? t('icons.passed')
                      : t('icons.not-passed')}
                  </span>
                </Link>
              ) : challenge.challengeType === challengeTypes.dialogue ? (
                <Challenge challenge={challenge} />
              ) : (
                <Project challenge={challenge} />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  ) : (
    <ul className={`map-challenges-ul`}>
      {challengesWithCompleted.map(challenge => (
        <li
          className={`map-challenge-title ${
            isProjectBlock ? 'map-project-wrap' : 'map-challenge-wrap'
          }`}
          id={challenge.dashedName}
          key={'map-challenge' + challenge.fields.slug}
        >
          {!isProjectBlock ? (
            <Challenge challenge={challenge} />
          ) : (
            <Project challenge={challenge} />
          )}
        </li>
      ))}
    </ul>
  );
}

Challenges.displayName = 'Challenges';

export default withTranslation()(Challenges);

import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';

import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import { challengeTypes } from '../../../../../shared/config/challenge-types';
import { Link } from '../../../components/helpers';
import { ButtonLink } from '../../../components/helpers/button-link';

interface ChallengeInfo {
  isCompleted: boolean;
  fields: { slug: string };
  dashedName: string;
  title: string;
  stepNumber: number;
  superBlock: SuperBlocks;
  challengeType: number;
}

interface Challenges {
  challenges: ChallengeInfo[];
  isProjectBlock: boolean;
  isGridMap?: boolean;
  blockTitle?: string | null;
}

const CheckMark = ({ isCompleted }: { isCompleted: boolean }) =>
  isCompleted ? <GreenPass /> : <GreenNotCompleted />;

const ListChallenge = ({ challenge }: { challenge: ChallengeInfo }) => (
  <Link to={challenge.fields.slug}>
    <span className='map-badge'>
      <CheckMark isCompleted={challenge.isCompleted} />
    </span>
    {challenge.title}
  </Link>
);

const CertChallenge = ({ challenge }: { challenge: ChallengeInfo }) => (
  <Link to={challenge.fields.slug}>
    {challenge.title}
    <span className='map-badge map-project-checkmark'>
      <CheckMark isCompleted={challenge.isCompleted} />
    </span>
  </Link>
);

// Step or Task challenge
const GridChallenge = ({ challenge }: { challenge: ChallengeInfo }) => {
  const { t } = useTranslation();

  return (
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
      <span>{challenge.stepNumber}</span>
      <span className='sr-only'>
        {challenge.isCompleted ? t('icons.passed') : t('icons.not-passed')}
      </span>
    </Link>
  );
};

function Challenges({
  challenges,
  isProjectBlock,
  isGridMap = false,
  blockTitle
}: Challenges): JSX.Element {
  const { t } = useTranslation();

  const firstIncompleteChallenge = challenges.find(
    challenge => !challenge.isCompleted
  );

  const isChallengeStarted = !!challenges.find(
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
            ? challenges[0].superBlock === SuperBlocks.A2English
              ? t('aria.dialogues-and-tasks-for', { blockTitle })
              : t('aria.steps-for', { blockTitle })
            : t('aria.steps')
        }
      >
        <ul className={`map-challenges-ul map-challenges-grid `}>
          {challenges.map(challenge => (
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
                <GridChallenge challenge={challenge} />
              ) : challenge.challengeType === challengeTypes.dialogue ? (
                <ListChallenge challenge={challenge} />
              ) : (
                <CertChallenge challenge={challenge} />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  ) : (
    <ul className={`map-challenges-ul`}>
      {challenges.map(challenge => (
        <li
          className={`map-challenge-title ${
            isProjectBlock ? 'map-project-wrap' : 'map-challenge-wrap'
          }`}
          id={challenge.dashedName}
          key={'map-challenge' + challenge.fields.slug}
        >
          {!isProjectBlock ? (
            <ListChallenge challenge={challenge} />
          ) : (
            <CertChallenge challenge={challenge} />
          )}
        </li>
      ))}
    </ul>
  );
}

Challenges.displayName = 'Challenges';

export default withTranslation()(Challenges);

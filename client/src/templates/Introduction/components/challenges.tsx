import React from 'react';
import { useTranslation } from 'react-i18next';

import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
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

interface ChallengesProps {
  challenges: ChallengeInfo[];
  onChallengeClick: () => void;
}

interface JumpLinkProps {
  jumpLink?: boolean;
}

interface BlockTitleProps {
  blockTitle: string;
}

interface IsProjectBlockProps {
  isProjectBlock: boolean;
}

const CheckMark = ({ isCompleted }: { isCompleted: boolean }) =>
  isCompleted ? <GreenPass /> : <GreenNotCompleted />;

const ListChallenge = ({
  challenge,
  onChallengeClick
}: {
  challenge: ChallengeInfo;
  onChallengeClick: () => void;
}) => {
  return (
    <Link to={challenge.fields.slug} onClick={onChallengeClick}>
      <span>
        <CheckMark isCompleted={challenge.isCompleted} />
      </span>
      {challenge.title}
    </Link>
  );
};

const CertChallenge = ({
  challenge,
  onChallengeClick
}: {
  challenge: ChallengeInfo;
  onChallengeClick: () => void;
}) => {
  return (
    <Link to={challenge.fields.slug} onClick={onChallengeClick}>
      {challenge.title}
      <span className='map-project-checkmark'>
        <CheckMark isCompleted={challenge.isCompleted} />
      </span>
    </Link>
  );
};

export function ChallengesList({
  challenges,
  onChallengeClick
}: ChallengesProps): JSX.Element {
  return (
    <ul className={`map-challenges-ul`}>
      {challenges.map(challenge => (
        <li
          className={'map-challenge-title map-challenge-wrap'}
          id={challenge.dashedName}
          key={'map-challenge' + challenge.fields.slug}
        >
          <ListChallenge
            challenge={challenge}
            onChallengeClick={onChallengeClick}
          />
        </li>
      ))}
    </ul>
  );
}
// Step or Task challenge
const GridChallenge = ({
  challenge,
  isTask = false,
  onChallengeClick
}: {
  challenge: ChallengeInfo;
  isTask?: boolean;
  onChallengeClick: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <Link
      to={challenge.fields.slug}
      onClick={onChallengeClick}
      className={`map-grid-item ${
        challenge.isCompleted ? 'challenge-completed' : ''
      }`}
    >
      <span className='sr-only'>
        {isTask ? t('aria.task') : t('aria.step')}
      </span>
      <span>{challenge.stepNumber}</span>
      <span className='sr-only'>
        {challenge.isCompleted ? t('icons.passed') : t('icons.not-passed')}
      </span>
    </Link>
  );
};

const LinkToFirstIncompleteChallenge = ({
  challenges,
  blockTitle,
  onChallengeClick
}: ChallengesProps & BlockTitleProps) => {
  const { t } = useTranslation();

  const firstIncompleteChallenge = challenges.find(
    challenge => !challenge.isCompleted
  );

  const isChallengeStarted = !!challenges.find(
    challenge => challenge.isCompleted
  );
  return firstIncompleteChallenge ? (
    <div className='challenge-jump-link'>
      <ButtonLink
        size='small'
        href={firstIncompleteChallenge.fields.slug}
        onClick={onChallengeClick}
      >
        {!isChallengeStarted
          ? t('buttons.start-project')
          : t('buttons.resume-project')}{' '}
        <span className='sr-only'>{blockTitle}</span>
      </ButtonLink>
    </div>
  ) : null;
};

export const GridMapChallenges = ({
  challenges,
  blockTitle,
  isProjectBlock,
  jumpLink,
  onChallengeClick
}: ChallengesProps & BlockTitleProps & IsProjectBlockProps & JumpLinkProps) => {
  const { t } = useTranslation();
  return (
    <>
      {jumpLink && (
        <LinkToFirstIncompleteChallenge
          challenges={challenges}
          blockTitle={blockTitle}
          onChallengeClick={onChallengeClick}
        />
      )}
      <nav aria-label={t('aria.steps-for', { blockTitle })}>
        <ul className={`map-challenges-ul map-challenges-grid`}>
          {challenges.map(challenge => (
            <li
              className={`map-challenge-title ${
                isProjectBlock
                  ? 'map-project-wrap'
                  : challenge.challengeType === challengeTypes.dialogue
                    ? 'map-dialogue-wrap'
                    : 'map-challenge-wrap'
              }`}
              id={challenge.dashedName}
              key={`map-challenge ${challenge.fields.slug}`}
            >
              {!isProjectBlock ? (
                <GridChallenge
                  challenge={challenge}
                  onChallengeClick={onChallengeClick}
                />
              ) : (
                <CertChallenge
                  challenge={challenge}
                  onChallengeClick={onChallengeClick}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export const ChallengesWithDialogues = ({
  challenges,
  blockTitle,
  jumpLink,
  onChallengeClick
}: ChallengesProps & BlockTitleProps & JumpLinkProps) => {
  const { t } = useTranslation();
  return (
    <>
      {jumpLink && (
        <LinkToFirstIncompleteChallenge
          challenges={challenges}
          blockTitle={blockTitle}
          onChallengeClick={onChallengeClick}
        />
      )}

      <nav aria-label={t('aria.dialogues-and-tasks-for', { blockTitle })}>
        <ul className={`map-challenges-ul map-challenges-grid`}>
          {challenges.map(challenge => (
            <li
              className={`map-challenge-title map-challenge-title-grid ${
                challenge.challengeType === challengeTypes.dialogue
                  ? 'map-dialogue-wrap'
                  : 'map-challenge-wrap'
              }`}
              id={challenge.dashedName}
              key={`map-challenge ${challenge.fields.slug}`}
            >
              {challenge.challengeType === challengeTypes.dialogue ? (
                <ListChallenge
                  challenge={challenge}
                  onChallengeClick={onChallengeClick}
                />
              ) : (
                <GridChallenge
                  challenge={challenge}
                  isTask
                  onChallengeClick={onChallengeClick}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

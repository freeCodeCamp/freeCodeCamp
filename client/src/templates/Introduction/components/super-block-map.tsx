import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import {
  certificationCollectionSuperBlocks,
  chapterBasedSuperBlocks,
  SuperBlocks
} from '../../../../../shared-dist/config/curriculum';
import type { CertTitle } from '../../../../config/cert-and-project-map';
import type {
  ChapterBasedSuperBlockStructure,
  ClaimedCertifications,
  User
} from '../../../redux/prop-types';
import type {
  BlockLabel,
  BlockLayouts
} from '../../../../../shared-dist/config/blocks';
import { SuperBlockIcon } from '../../../assets/superblock-icon';
import { Link } from '../../../components/helpers';
import {
  certSlugTypeMap,
  certificationRequirements,
  superBlockToCertMap
} from '../../../../../shared-dist/config/certification-settings';
import CheckMark from './check-mark';

import Block from './block';
import CertChallenge from './cert-challenge';
import { SuperBlockAccordion } from './super-block-accordion';
import './super-block-accordion.css';

type Challenge = {
  block: string;
  blockLabel: BlockLabel;
  blockLayout: BlockLayouts;
  challengeType: number;
  dashedName: string;
  fields: { slug: string };
  id: string;
  module: string;
  order: number;
  superBlock: SuperBlocks;
  title: string;
};

type SuperBlockMapProps = {
  certification: string;
  completedChallengeIds: string[];
  disabledBlocks: string[];
  initialExpandedBlock: string;
  showCertification: boolean;
  structure?: ChapterBasedSuperBlockStructure;
  superBlock: SuperBlocks;
  superBlockChallenges: Challenge[];
  title: CertTitle;
  user: User | null;
};

const BlockList = ({
  certification,
  disabledBlocks,
  showCertification,
  superBlock,
  superBlockChallenges,
  title,
  user
}: {
  certification: string;
  disabledBlocks: string[];
  showCertification: boolean;
  superBlock: SuperBlocks;
  superBlockChallenges: Challenge[];
  title: CertTitle;
  user: User | null;
}) => {
  const visibleBlocks = useMemo(() => {
    const uniqueBlocks = Array.from(
      new Set(superBlockChallenges.map(({ block }) => block))
    );

    return uniqueBlocks.filter(block => !disabledBlocks.includes(block));
  }, [disabledBlocks, superBlockChallenges]);

  return (
    <div className='block-ui'>
      {visibleBlocks.map(block => {
        const blockChallenges = superBlockChallenges.filter(
          challenge => challenge.block === block
        );
        const blockLabel = blockChallenges[0]?.blockLabel ?? null;

        if (!blockChallenges.length) return null;

        return (
          <Block
            key={block}
            block={block}
            blockLabel={blockLabel}
            challenges={blockChallenges}
            superBlock={superBlock}
          />
        );
      })}
      {showCertification && !!user && (
        <CertChallenge
          certification={certification}
          superBlock={superBlock}
          title={title}
          user={user}
        />
      )}
    </div>
  );
};

export const SuperBlockMap = ({
  certification,
  completedChallengeIds,
  disabledBlocks,
  initialExpandedBlock,
  showCertification,
  structure,
  superBlock,
  superBlockChallenges,
  title,
  user
}: SuperBlockMapProps) => {
  const { t } = useTranslation();
  if (chapterBasedSuperBlocks.includes(superBlock)) {
    if (!structure) return null;

    const getRequirementItems = () => {
      const certificationForSuperBlock = superBlockToCertMap[superBlock];
      const requirementsLookup = certificationRequirements as Partial<
        Record<string, SuperBlocks[]>
      >;
      const requirements: SuperBlocks[] =
        (certificationForSuperBlock &&
          requirementsLookup[certificationForSuperBlock]) ??
        [];

      const requirementItems = requirements.map((requirement: SuperBlocks) => {
        const requirementTitle = t(`intro:${requirement}.title`);
        const requirementLink = `/learn/${requirement}/`;

        const certSlug = superBlockToCertMap[requirement];
        const certFlagLookup = certSlugTypeMap as Record<
          string,
          keyof ClaimedCertifications
        >;
        const certFlagKey = certSlug ? certFlagLookup[certSlug] : undefined;
        const isRequirementComplete = Boolean(
          certFlagKey && user?.[certFlagKey]
        );

        return (
          <li className='chapter requirement' key={requirement}>
            <Link
              className='chapter-button'
              data-playwright-test-label='requirement-button'
              to={requirementLink}
            >
              <div className='chapter-button-left'>
                <span className='checkmark-wrap chapter-checkmark-wrap'>
                  <CheckMark isCompleted={isRequirementComplete} />
                </span>
                <SuperBlockIcon className='map-icon' superBlock={requirement} />
                {requirementTitle}
              </div>
            </Link>
          </li>
        );
      });

      return requirementItems;
    };

    return (
      <>
        {certificationCollectionSuperBlocks.includes(superBlock) && (
          <>
            <ul className='super-block-accordion requirement-list'>
              {getRequirementItems()}
            </ul>
            <Spacer size='m' />
            <h2 className='text-center big-subheading'>
              {t(`intro:misc-text.courses`)}
            </h2>
            <Spacer size='m' />
          </>
        )}

        <SuperBlockAccordion
          challenges={superBlockChallenges}
          superBlock={superBlock}
          structure={structure}
          chosenBlock={initialExpandedBlock}
          completedChallengeIds={completedChallengeIds}
        />
      </>
    );
  }

  return (
    <BlockList
      certification={certification}
      disabledBlocks={disabledBlocks}
      showCertification={showCertification}
      superBlock={superBlock}
      superBlockChallenges={superBlockChallenges}
      title={title}
      user={user}
    />
  );
};

SuperBlockMap.displayName = 'SuperBlockMap';

export default SuperBlockMap;

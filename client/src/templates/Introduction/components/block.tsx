import React, { Component, ReactNode } from 'react';
import type { DefaultTFuncReturn, TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Spacer } from '@freecodecamp/ui';

import { challengeTypes } from '../../../../../shared/config/challenge-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import envData from '../../../../config/env.json';
import { isAuditedSuperBlock } from '../../../../../shared/utils/is-audited';
import Caret from '../../../assets/icons/caret';
import { Link } from '../../../components/helpers';
import { completedChallengesSelector } from '../../../redux/selectors';
import { playTone } from '../../../utils/tone';
import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import { isProjectBased } from '../../../utils/curriculum-layout';
import { BlockLayouts, BlockTypes } from '../../../../../shared/config/blocks';
import CheckMark from './check-mark';
import Challenges from './challenges';
import BlockLabel from './block-label';
import BlockIntros from './block-intros';
import BlockHeader from './block-header';

import '../intro.css';
import './block.css';

const { curriculumLocale } = envData;

const mapStateToProps = (state: unknown, ownProps: { block: string }) => {
  const expandedSelector = makeExpandedBlockSelector(ownProps.block);

  return createSelector(
    expandedSelector,
    completedChallengesSelector,
    (isExpanded: boolean, completedChallenges: { id: string }[]) => ({
      isExpanded,
      completedChallengeIds: completedChallenges.map(({ id }) => id)
    })
  )(state as Record<string, unknown>);
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ toggleBlock }, dispatch);

interface ChallengeInfo {
  id: string;
  title: string;
  fields: { slug: string };
  dashedName: string;
  challengeType: number;
  blockLayout: BlockLayouts;
  superBlock: SuperBlocks;
}

interface BlockProps {
  block: string;
  blockType: BlockTypes | null;
  challenges: ChallengeInfo[];
  completedChallengeIds: string[];
  isExpanded: boolean;
  superBlock: SuperBlocks;
  t: TFunction;
  toggleBlock: typeof toggleBlock;
}

class Block extends Component<BlockProps> {
  static displayName: string;
  constructor(props: BlockProps) {
    super(props);

    this.handleBlockClick = this.handleBlockClick.bind(this);
  }

  handleBlockClick = (): void => {
    const { block, toggleBlock } = this.props;
    void playTone('block-toggle');
    toggleBlock(block);
  };

  render(): ReactNode {
    const {
      block,
      blockType,
      completedChallengeIds,
      challenges,
      isExpanded,
      superBlock,
      t
    } = this.props;

    let completedCount = 0;
    let stepNumber = 0;

    const extendedChallenges = challenges.map(challenge => {
      const { id } = challenge;
      const isCompleted = completedChallengeIds.some(
        (completedChallengeId: string) => completedChallengeId === id
      );
      if (isCompleted) {
        completedCount++;
      }
      // Dialogues are interwoven with other challenges in the curriculum, but
      // are not considered to be steps.
      if (challenge.challengeType !== challengeTypes.dialogue) {
        stepNumber++;
      }

      return { ...challenge, isCompleted, stepNumber };
    });

    const isProjectBlock = challenges.some(challenge => {
      return isProjectBased(challenge.challengeType, block);
    });

    const isAudited = isAuditedSuperBlock(curriculumLocale, superBlock);

    const blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);
    // the real type of TFunction is the type below, because intro can be an array of strings
    // type RealTypeOFTFunction = TFunction & ((key: string) => string[]);
    // But changing the type will require refactoring that isn't worth it for a wrong type.
    const blockIntroArr = t<string, DefaultTFuncReturn & string[]>(
      `intro:${superBlock}.blocks.${block}.intro`
    );
    const expandText = t('intro:misc-text.expand');
    const collapseText = t('intro:misc-text.collapse');

    const isBlockCompleted = completedCount === challenges.length;

    const percentageCompleted = Math.floor(
      (completedCount / challenges.length) * 100
    );

    // since the Blocks are not components, we need link to exist even if it's
    // not being used to render anything
    const link = challenges[0]?.fields.slug || '';
    const blockLayout = challenges[0]?.blockLayout;
    const isGridBlock = blockLayout === BlockLayouts.ChallengeGrid;

    const isEmptyBlock = !challenges.length;

    const courseCompletionStatus = () => {
      if (completedCount === 0) {
        return t('learn.not-started');
      }
      if (isBlockCompleted) {
        return t('learn.completed');
      }
      return `${percentageCompleted}% ${t('learn.completed')}`;
    };

    /**
     * LegacyChallengeListBlock displays challenges in a list.
     * This layout is used in backend blocks, The Odin Project blocks, and blocks in legacy certification.
     * Example: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript
     */
    const LegacyChallengeListBlock = (
      <ScrollableAnchor id={block}>
        <div className={`block ${isExpanded ? 'open' : ''}`}>
          <div className='block-header'>
            <h3 className='big-block-title'>{blockTitle}</h3>
            {blockType && <BlockLabel blockType={blockType} />}
            {!isAudited && (
              <div className='block-cta-wrapper'>
                <Link
                  className='block-title-translation-cta'
                  to={t('links:help-translate-link-url')}
                >
                  {t('misc.translation-pending')}
                </Link>
              </div>
            )}
          </div>
          <BlockIntros intros={blockIntroArr} />
          <button
            aria-expanded={isExpanded}
            className='map-title'
            onClick={() => {
              this.handleBlockClick();
            }}
          >
            <Caret />
            <div className='course-title'>
              {`${isExpanded ? collapseText : expandText}`}{' '}
              <span className='sr-only'>{blockTitle}</span>
            </div>
            <div className='map-title-completed course-title'>
              <CheckMark isCompleted={isBlockCompleted} />
              <span
                aria-hidden='true'
                className='map-completed-count'
              >{`${completedCount}/${challenges.length}`}</span>
              <span className='sr-only'>
                ,{' '}
                {t('learn.challenges-completed', {
                  completedCount,
                  totalChallenges: challenges.length
                })}
              </span>
            </div>
          </button>
          {isExpanded && (
            <Challenges
              challenges={extendedChallenges}
              isProjectBlock={isProjectBlock}
            />
          )}
        </div>
      </ScrollableAnchor>
    );

    /**
     * ProjectListBlock displays a list of certification projects.
     * This layout is used in legacy certifications.
     * Example: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#javascript-algorithms-and-data-structures-projects
     */
    const ProjectListBlock = (
      <ScrollableAnchor id={block}>
        <div className='block'>
          <div className='block-header'>
            <h3 className='big-block-title'>{blockTitle}</h3>
            {blockType && <BlockLabel blockType={blockType} />}
            {!isAudited && (
              <div className='block-cta-wrapper'>
                <Link
                  className='block-title-translation-cta'
                  to={t('links:help-translate-link-url')}
                >
                  {t('misc.translation-pending')}
                </Link>
              </div>
            )}
          </div>
          <BlockIntros intros={blockIntroArr} />
          <Challenges
            challenges={extendedChallenges}
            isProjectBlock={isProjectBlock}
          />
        </div>
      </ScrollableAnchor>
    );

    /**
     * LegacyChallengeGridBlock displays challenges in a grid.
     * This layout is used for step-based blocks.
     * Example: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-basic-javascript-by-building-a-role-playing-game
     */
    const LegacyChallengeGridBlock = (
      <ScrollableAnchor id={block}>
        <div className={`block block-grid ${isExpanded ? 'open' : ''}`}>
          <BlockHeader
            blockDashed={block}
            blockTitle={blockTitle}
            blockType={blockType}
            completedCount={completedCount}
            courseCompletionStatus={courseCompletionStatus()}
            handleClick={this.handleBlockClick}
            isCompleted={isBlockCompleted}
            isExpanded={isExpanded}
            percentageCompleted={percentageCompleted}
          />

          {isExpanded && (
            <>
              {!isAudited && (
                <div className='tags-wrapper'>
                  <Link
                    className='cert-tag'
                    to={t('links:help-translate-link-url')}
                  >
                    {t('misc.translation-pending')}
                  </Link>
                </div>
              )}

              <div id={`${block}-panel`}>
                <BlockIntros intros={blockIntroArr} />
                <Challenges
                  challenges={extendedChallenges}
                  isProjectBlock={isProjectBlock}
                  isGridMap={true}
                  blockTitle={blockTitle}
                />
              </div>
            </>
          )}
        </div>
      </ScrollableAnchor>
    );

    /**
     * LegacyLinkBlock displays the block as a single link.
     * This layout is used if the block has a single challenge.
     * Example: https://www.freecodecamp.org/learn/2022/responsive-web-design/#build-a-survey-form-project
     */
    const LegacyLinkBlock = (
      <ScrollableAnchor id={block}>
        <div className='block block-grid grid-project-block'>
          <div className='tags-wrapper'>
            <span className='cert-tag' aria-hidden='true'>
              {t('misc.certification-project')}
            </span>
            {!isAudited && (
              <Link
                className='cert-tag'
                to={t('links:help-translate-link-url')}
              >
                {t('misc.translation-pending')}{' '}
                <span className='sr-only'>
                  {blockTitle} {t('misc.certification-project')}
                </span>
              </Link>
            )}
          </div>
          <div className='title-wrapper map-title'>
            {blockType && <BlockLabel blockType={blockType} />}
            <h3 className='block-grid-title'>
              <Link
                className='block-header'
                onClick={() => {
                  this.handleBlockClick();
                }}
                to={link}
              >
                <CheckMark isCompleted={isBlockCompleted} />
                {blockTitle}{' '}
                <span className='sr-only'>
                  {isBlockCompleted
                    ? `${t('misc.certification-project')}, ${t('learn.completed')}`
                    : `${t('misc.certification-project')}, ${t('learn.not-completed')}`}
                </span>
              </Link>
            </h3>
          </div>
          <BlockIntros intros={blockIntroArr} />
        </div>
      </ScrollableAnchor>
    );

    /**
     * AccordionBlock is used as the block layout in new accordion style superblocks.
     */
    const AccordionBlock = (
      <>
        <ScrollableAnchor id={block}>
          <span className='hide-scrollable-anchor'></span>
        </ScrollableAnchor>
        <div
          className={`block block-grid challenge-grid-block ${isExpanded ? 'open' : ''}`}
        >
          <BlockHeader
            blockDashed={block}
            blockTitle={blockTitle}
            blockType={blockType}
            completedCount={completedCount}
            courseCompletionStatus={courseCompletionStatus()}
            handleClick={this.handleBlockClick}
            isCompleted={isBlockCompleted}
            isExpanded={isExpanded}
            percentageCompleted={percentageCompleted}
            blockIntroArr={blockIntroArr}
          />

          {isExpanded && (
            <div className='accordion-block-expanded'>
              {!isAudited && (
                <div className='tags-wrapper'>
                  <Link
                    className='cert-tag'
                    to={t('links:help-translate-link-url')}
                  >
                    {t('misc.translation-pending')}
                  </Link>
                </div>
              )}
              <div
                id={`${block}-panel`}
                className={isGridBlock ? 'challenge-grid-block-panel' : ''}
              >
                <Challenges
                  challenges={extendedChallenges}
                  isProjectBlock={false}
                  isGridMap={isGridBlock}
                  blockTitle={blockTitle}
                />
              </div>
            </div>
          )}
        </div>
      </>
    );

    const layoutToComponent = {
      [BlockLayouts.ChallengeGrid]: AccordionBlock,
      [BlockLayouts.ChallengeList]: AccordionBlock,
      [BlockLayouts.Link]: AccordionBlock,
      [BlockLayouts.ProjectList]: ProjectListBlock,
      [BlockLayouts.LegacyLink]: LegacyLinkBlock,
      [BlockLayouts.LegacyChallengeList]: LegacyChallengeListBlock,
      [BlockLayouts.LegacyChallengeGrid]: LegacyChallengeGridBlock
    };

    return (
      !isEmptyBlock && (
        <>
          {layoutToComponent[blockLayout]}
          {superBlock !== SuperBlocks.FullStackDeveloper && (
            <Spacer size='xs' />
          )}
        </>
      )
    );
  }
}

Block.displayName = 'Block';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Block));

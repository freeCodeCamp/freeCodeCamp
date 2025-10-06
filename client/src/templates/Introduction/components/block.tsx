import React, { Component, ReactNode } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Spacer } from '@freecodecamp/ui';

import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import {
  chapterBasedSuperBlocks,
  SuperBlocks
} from '@freecodecamp/shared/config/curriculum';
import envData from '../../../../config/env.json';
import { isAuditedSuperBlock } from '@freecodecamp/shared/utils/is-audited';
import Caret from '../../../assets/icons/caret';
import { Link } from '../../../components/helpers';
import { completedChallengesSelector } from '../../../redux/selectors';
import { playTone } from '../../../utils/tone';
import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import { isProjectBased } from '../../../utils/curriculum-layout';
import { fetchUser } from '../../../redux/actions';
import {
  BlockLayouts,
  BlockLabel as BlockLabelType
} from '@freecodecamp/shared/config/blocks';
import CheckMark from './check-mark';
import {
  GridMapChallenges,
  ChallengesList,
  ChallengesWithDialogues
} from './challenges';
import BlockLabel from './block-label';
import BlockHeader from './block-header';
import ResetProgressModal from './reset-progress-modal';

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
  bindActionCreators({ toggleBlock, fetchUser }, dispatch);

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
  blockLabel: BlockLabelType | null;
  challenges: ChallengeInfo[];
  completedChallengeIds: string[];
  isExpanded: boolean;
  superBlock: SuperBlocks;
  t: TFunction;
  toggleBlock: typeof toggleBlock;
  fetchUser: typeof fetchUser;
  accordion?: boolean;
}

interface BlockState {
  showResetModal: boolean;
}

export class Block extends Component<BlockProps, BlockState> {
  static displayName: string;
  constructor(props: BlockProps) {
    super(props);

    this.state = {
      showResetModal: false
    };
    this.handleBlockClick = this.handleBlockClick.bind(this);
    this.handleChallengeClick = this.handleChallengeClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleResetConfirm = this.handleResetConfirm.bind(this);
    this.handleResetModalClose = this.handleResetModalClose.bind(this);
  }

  handleBlockClick = (): void => {
    const { block, toggleBlock } = this.props;
    void playTone('block-toggle');
    toggleBlock(block);
  };

  handleChallengeClick = (): void => {
    const { block } = this.props;
    const dashedBlock = block
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    window.history.pushState(null, '', `#${dashedBlock}`);
  };

  handleResetClick = (): void => {
    this.setState({ showResetModal: true });
  };

  handleResetConfirm = (): void => {
    const { fetchUser } = this.props;
    fetchUser();
  };

  handleResetModalClose = (): void => {
    this.setState({ showResetModal: false });
  };

  render(): ReactNode {
    const {
      block,
      blockLabel,
      completedChallengeIds,
      challenges,
      isExpanded,
      superBlock,
      t,
      accordion = false
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
    const blockIntroArr = t(`intro:${superBlock}.blocks.${block}.intro`, {
      returnObjects: true
    }) as string[];
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
      <Element name={block}>
        <div className={`block ${isExpanded ? 'open' : ''}`}>
          <div className='block-header'>
            <h3 className='big-block-title'>{blockTitle}</h3>
            {blockLabel && <BlockLabel blockLabel={blockLabel} />}
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
              <span aria-hidden='true'>{`${completedCount}/${challenges.length}`}</span>
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
            <ChallengesList
              challenges={extendedChallenges}
              onChallengeClick={this.handleChallengeClick}
            />
          )}
        </div>
      </Element>
    );

    /**
     * ProjectListBlock displays a list of certification projects.
     * This layout is used in legacy certifications.
     * Example: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#javascript-algorithms-and-data-structures-projects
     */
    const ProjectListBlock = (
      <Element name={block}>
        <div className='block'>
          <div className='block-header'>
            <h3 className='big-block-title'>{blockTitle}</h3>
            {blockLabel && <BlockLabel blockLabel={blockLabel} />}
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
          <ChallengesList
            challenges={extendedChallenges}
            onChallengeClick={this.handleChallengeClick}
          />
        </div>
      </Element>
    );

    /**
     * LegacyChallengeGridBlock displays challenges in a grid.
     * This layout is used for step-based blocks.
     * Example: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-basic-javascript-by-building-a-role-playing-game
     */
    const LegacyChallengeGridBlock = (
      <Element name={block}>
        <div className={`block block-grid ${isExpanded ? 'open' : ''}`}>
          <BlockHeader
            blockDashed={block}
            blockTitle={blockTitle}
            blockLabel={blockLabel}
            completedCount={completedCount}
            courseCompletionStatus={courseCompletionStatus()}
            handleClick={this.handleBlockClick}
            isCompleted={isBlockCompleted}
            isExpanded={isExpanded}
            percentageCompleted={percentageCompleted}
            accordion={accordion}
            blockIntroArr={!accordion ? blockIntroArr : undefined}
            showReset={true}
            isResetDisabled={completedCount === 0}
            onResetClick={this.handleResetClick}
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
                <GridMapChallenges
                  jumpLink={!accordion}
                  challenges={extendedChallenges}
                  isProjectBlock={isProjectBlock}
                  blockTitle={blockTitle}
                  onChallengeClick={this.handleChallengeClick}
                />
              </div>
            </>
          )}
        </div>
      </Element>
    );

    /**
     * TaskGridBlock displays tasks in a grid and dialogues separately.
     * This layout is used for task-based blocks.
     * Example: https://www.freecodecamp.org/learn/a2-english-for-developers/#learn-greetings-in-your-first-day-at-the-office
     */
    const TaskGridBlock = (
      <Element name={block}>
        <div className={`block block-grid ${isExpanded ? 'open' : ''}`}>
          <BlockHeader
            blockDashed={block}
            blockTitle={blockTitle}
            blockLabel={blockLabel}
            completedCount={completedCount}
            courseCompletionStatus={courseCompletionStatus()}
            handleClick={this.handleBlockClick}
            isCompleted={isBlockCompleted}
            isExpanded={isExpanded}
            percentageCompleted={percentageCompleted}
            accordion={accordion}
            blockIntroArr={!accordion ? blockIntroArr : undefined}
            showReset={true}
            isResetDisabled={completedCount === 0}
            onResetClick={this.handleResetClick}
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
                <ChallengesWithDialogues
                  challenges={extendedChallenges}
                  blockTitle={blockTitle}
                  jumpLink={!accordion}
                  onChallengeClick={this.handleChallengeClick}
                />
              </div>
            </>
          )}
        </div>
      </Element>
    );

    /**
     * LegacyLinkBlock displays the block as a single link.
     * This layout is used if the block has a single challenge.
     * Example: https://www.freecodecamp.org/learn/2022/responsive-web-design/#build-a-survey-form-project
     */
    const LegacyLinkBlock = (
      <Element name={block}>
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
            {blockLabel && <BlockLabel blockLabel={blockLabel} />}
            <h3 className='block-grid-title'>
              <Link
                className='block-header'
                onClick={this.handleChallengeClick}
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
        </div>
      </Element>
    );

    /**
     * AccordionBlock is used as the block layout in new accordion style superblocks.
     */
    const AccordionBlock = accordion ? (
      <>
        <Element name={block}>
          <span className='hide-scrollable-anchor'></span>
        </Element>
        <div
          className={`block block-grid block-grid-no-border challenge-grid-block ${isExpanded ? 'open' : ''}`}
        >
          <BlockHeader
            blockDashed={block}
            blockTitle={blockTitle}
            blockLabel={blockLabel}
            completedCount={completedCount}
            courseCompletionStatus={courseCompletionStatus()}
            handleClick={this.handleBlockClick}
            isCompleted={isBlockCompleted}
            isExpanded={isExpanded}
            percentageCompleted={percentageCompleted}
            accordion={accordion}
            showReset={true}
            isResetDisabled={completedCount === 0}
            onResetClick={this.handleResetClick}
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
                {isGridBlock ? (
                  <GridMapChallenges
                    challenges={extendedChallenges}
                    blockTitle={blockTitle}
                    isProjectBlock={isProjectBlock}
                    jumpLink={false}
                    onChallengeClick={this.handleChallengeClick}
                  />
                ) : (
                  <ChallengesList
                    challenges={extendedChallenges}
                    onChallengeClick={this.handleChallengeClick}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </>
    ) : (
      <>
        <Element name={block}>
          <span className='hide-scrollable-anchor'></span>
        </Element>
        <div
          className={`block block-grid challenge-grid-block ${isExpanded ? 'open' : ''}`}
        >
          <BlockHeader
            blockDashed={block}
            blockTitle={blockTitle}
            blockLabel={blockLabel}
            completedCount={completedCount}
            courseCompletionStatus={courseCompletionStatus()}
            handleClick={this.handleBlockClick}
            isCompleted={isBlockCompleted}
            isExpanded={isExpanded}
            percentageCompleted={percentageCompleted}
            accordion={accordion}
            blockIntroArr={blockIntroArr}
            showReset={true}
            isResetDisabled={completedCount === 0}
            onResetClick={this.handleResetClick}
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
                {isGridBlock ? (
                  <GridMapChallenges
                    jumpLink={true}
                    challenges={extendedChallenges}
                    blockTitle={blockTitle}
                    isProjectBlock={isProjectBlock}
                    onChallengeClick={this.handleChallengeClick}
                  />
                ) : (
                  <ChallengesList
                    challenges={extendedChallenges}
                    onChallengeClick={this.handleChallengeClick}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </>
    );

    const LinkBlock = (
      <>
        <Element name={block}>
          <span className='hide-scrollable-anchor'></span>
        </Element>
        <BlockHeader
          blockDashed={block}
          blockTitle={blockTitle}
          blockLabel={blockLabel}
          completedCount={completedCount}
          courseCompletionStatus={courseCompletionStatus()}
          handleClick={this.handleBlockClick}
          onLinkClick={this.handleChallengeClick}
          isCompleted={isBlockCompleted}
          isExpanded={isExpanded}
          percentageCompleted={percentageCompleted}
          accordion={accordion}
          blockUrl={challenges?.[0]?.fields?.slug ?? ''}
          showReset={true}
          isResetDisabled={completedCount === 0}
          onResetClick={this.handleResetClick}
        />
      </>
    );

    const layoutToComponent = {
      [BlockLayouts.ChallengeGrid]: AccordionBlock,
      [BlockLayouts.ChallengeList]: AccordionBlock,
      [BlockLayouts.Link]: accordion ? LinkBlock : AccordionBlock,
      [BlockLayouts.ProjectList]: ProjectListBlock,
      [BlockLayouts.LegacyLink]: LegacyLinkBlock,
      [BlockLayouts.LegacyChallengeList]: LegacyChallengeListBlock,
      [BlockLayouts.LegacyChallengeGrid]: LegacyChallengeGridBlock,
      [BlockLayouts.DialogueGrid]: TaskGridBlock
    };

    return (
      !isEmptyBlock && (
        <>
          {layoutToComponent[blockLayout]}
          {!chapterBasedSuperBlocks.includes(superBlock) && (
            <Spacer size='xs' />
          )}
          <ResetProgressModal
            blockTitle={blockTitle}
            blockDashedName={block}
            show={this.state.showResetModal}
            onHide={this.handleResetModalClose}
            onResetComplete={this.handleResetConfirm}
          />
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

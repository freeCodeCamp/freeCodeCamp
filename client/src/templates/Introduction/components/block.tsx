import React, { Component } from 'react';
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
import { ChallengeNode, CompletedChallenge } from '../../../redux/prop-types';
import { playTone } from '../../../utils/tone';
import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import { isGridBased, isProjectBased } from '../../../utils/curriculum-layout';
import { BlockLayouts, BlockTypes } from '../../../../../shared/config/blocks';
import CheckMark from './check-mark';
import Challenges from './challenges';
import BlockLabel from './block-label';
import BlockIntros from './block-intros';
import BlockHeader from './block-header';

import '../intro.css';

const { curriculumLocale, showUpcomingChanges, showNewCurriculum } = envData;

type Challenge = ChallengeNode['challenge'];

const mapStateToProps = (state: unknown, ownProps: { block: string }) => {
  const expandedSelector = makeExpandedBlockSelector(ownProps.block);

  return createSelector(
    expandedSelector,
    completedChallengesSelector,
    (isExpanded: boolean, completedChallenges: CompletedChallenge[]) => ({
      isExpanded,
      completedChallengeIds: completedChallenges.map(({ id }) => id)
    })
  )(state as Record<string, unknown>);
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ toggleBlock }, dispatch);

interface BlockProps {
  block: string;
  blockType: BlockTypes | null;
  challenges: Challenge[];
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

  render(): JSX.Element {
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

    const isGridBlock = challenges.some(challenge => {
      return isGridBased(superBlock, challenge.challengeType);
    });

    const isAudited = isAuditedSuperBlock(curriculumLocale, superBlock, {
      showNewCurriculum,
      showUpcomingChanges
    });

    const blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);
    // the real type of TFunction is the type below, because intro can be an array of strings
    // type RealTypeOFTFunction = TFunction & ((key: string) => string[]);
    // But changing the type will require refactoring that isn't worth it for a wrong type.
    const blockIntroArr = t<string, DefaultTFuncReturn & string[]>(
      `intro:${superBlock}.blocks.${block}.intro`
    );
    const expandText = t('intro:misc-text.expand');
    const collapseText = t('intro:misc-text.collapse');

    const isBlockCompleted = completedCount === extendedChallenges.length;

    const percentageCompleted = Math.floor(
      (completedCount / extendedChallenges.length) * 100
    );

    const courseCompletionStatus = () => {
      if (completedCount === 0) {
        return t('learn.not-started');
      }
      if (completedCount === extendedChallenges.length) {
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
              >{`${completedCount}/${extendedChallenges.length}`}</span>
              <span className='sr-only'>
                ,{' '}
                {t('learn.challenges-completed', {
                  completedCount,
                  totalChallenges: extendedChallenges.length
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
          {isExpanded && (
            <div id={`${block}-panel`}>
              <BlockIntros intros={blockIntroArr} />
              <Challenges
                challenges={extendedChallenges}
                isProjectBlock={isProjectBlock}
                isGridMap={true}
                blockTitle={blockTitle}
              />
            </div>
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
                to={extendedChallenges[0].fields.slug}
              >
                <CheckMark isCompleted={isBlockCompleted} />
                {blockTitle}{' '}
                <span className='sr-only'>
                  {t('misc.certification-project')}
                </span>
              </Link>
            </h3>
          </div>
          <BlockIntros intros={blockIntroArr} />
        </div>
      </ScrollableAnchor>
    );

    /**
     * ChallengeListBlock displays challenges in a list.
     * Created for the new Full Stack Developer Certification,
     * so we can play with it without affecting the existing block layouts.
     */
    const ChallengeListBlock = (
      <ScrollableAnchor id={block}>
        <div
          className={`block block-grid challenge-list-block ${isExpanded ? 'open' : ''}`}
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
          {isExpanded && (
            <div id={`${block}-panel`}>
              <Challenges
                challenges={extendedChallenges}
                isProjectBlock={isProjectBlock}
              />
            </div>
          )}
        </div>
      </ScrollableAnchor>
    );

    /**
     * LinkBlock displays the block as a single link.
     * This layout is used if the block has a single challenge.
     * Created for the new Full Stack Developer Certification,
     * so we can play with it without affecting the existing block layouts.
     */
    const LinkBlock = (
      <ScrollableAnchor id={block}>
        <div className='block block-grid grid-project-block grid-project-block-no-margin'>
          <div className='tags-wrapper'>
            {!isAudited && (
              <Link
                className='cert-tag'
                to={t('links:help-translate-link-url')}
              >
                {t('misc.translation-pending')}{' '}
              </Link>
            )}
          </div>
          <div className='title-wrapper map-title'>
            <h3 className='block-grid-title'>
              <Link
                className='block-header'
                onClick={() => {
                  this.handleBlockClick();
                }}
                to={extendedChallenges[0].fields.slug}
              >
                <CheckMark isCompleted={isBlockCompleted} />
                {blockType && <BlockLabel blockType={blockType} />}
                {blockTitle}
              </Link>
            </h3>
          </div>
          <BlockIntros intros={blockIntroArr} />
        </div>
      </ScrollableAnchor>
    );

    /**
     * ChallengeGridBlock displays challenges in a grid.
     * This layout is specifically used for the new Full Stack Developer Certification.
     */
    const ChallengeGridBlock = (
      <ScrollableAnchor id={block}>
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
          {isExpanded && (
            <div id={`${block}-panel`} className='challenge-grid-block-panel'>
              <Challenges
                challenges={extendedChallenges}
                isProjectBlock={isProjectBlock}
                isGridMap={true}
                blockTitle={blockTitle}
              />
            </div>
          )}
        </div>
      </ScrollableAnchor>
    );

    const layoutToComponent = {
      [BlockLayouts.ChallengeGrid]: ChallengeGridBlock,
      [BlockLayouts.ChallengeList]: ChallengeListBlock,
      [BlockLayouts.Link]: LinkBlock,
      [BlockLayouts.ProjectList]: ProjectListBlock,
      [BlockLayouts.LegacyLink]: LegacyLinkBlock,
      [BlockLayouts.LegacyChallengeList]: LegacyChallengeListBlock,
      [BlockLayouts.LegacyChallengeGrid]: LegacyChallengeGridBlock
    };

    return (
      <>
        {layoutToComponent[challenges[0].blockLayout]}
        {(!isGridBlock || isProjectBlock) &&
          superBlock !== SuperBlocks.FullStackDeveloper && <Spacer size='m' />}
      </>
    );
  }
}

Block.displayName = 'Block';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Block));

import React, { Component } from 'react';
import { withTranslation, TFunction } from 'react-i18next';
import { ProgressBar } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { SuperBlocks } from '../../../../../config/certification-settings';
import envData from '../../../../../config/env.json';
import { isAuditedCert } from '../../../../../utils/is-audited';
import Caret from '../../../assets/icons/caret';
import DropDown from '../../../assets/icons/dropdown';
import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { Link, Spacer } from '../../../components/helpers';
import { completedChallengesSelector } from '../../../redux/selectors';
import { ChallengeNode, CompletedChallenge } from '../../../redux/prop-types';
import { playTone } from '../../../utils/tone';
import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import {
  isCollegeAlgebraPyCert,
  isNewJsCert,
  isNewRespCert
} from '../../../utils/is-a-cert';
import {
  isCodeAllyPractice,
  isFinalProject
} from '../../../../utils/challenge-types';
import Challenges from './challenges';
import '../intro.css';

const { curriculumLocale } = envData;

const mapStateToProps = (
  state: unknown,
  ownProps: { blockDashedName: string } & unknown
) => {
  const expandedSelector = makeExpandedBlockSelector(ownProps.blockDashedName);

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
  blockDashedName: string;
  challenges: ChallengeNode[];
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

  handleBlockClick(): void {
    const { blockDashedName, toggleBlock } = this.props;
    void playTone('block-toggle');
    toggleBlock(blockDashedName);
  }

  renderCheckMark(isCompleted: boolean): JSX.Element {
    return isCompleted ? (
      <GreenPass hushScreenReaderText />
    ) : (
      <GreenNotCompleted hushScreenReaderText />
    );
  }

  renderBlockIntros(arr: string[]): JSX.Element {
    return (
      <div className='block-description'>
        {arr.map((str, i) => (
          <p dangerouslySetInnerHTML={{ __html: str }} key={i} />
        ))}
      </div>
    );
  }

  render(): JSX.Element {
    const {
      blockDashedName,
      completedChallengeIds,
      challenges,
      isExpanded,
      superBlock,
      t
    } = this.props;

    const isNewResponsiveWebDesign = isNewRespCert(superBlock);
    const isNewJsAlgos = isNewJsCert(superBlock);
    const isOdinProject = blockDashedName == 'the-odin-project';
    const isCollegeAlgebraPy = isCollegeAlgebraPyCert(superBlock);

    let completedCount = 0;
    const challengesWithCompleted = challenges.map(({ challenge }) => {
      const { id } = challenge;
      const isCompleted = completedChallengeIds.some(
        (completedChallengeId: string) => completedChallengeId === id
      );
      if (isCompleted) {
        completedCount++;
      }
      return { ...challenge, isCompleted };
    });

    const isProjectBlock = challenges.some(({ challenge }) => {
      const isTakeHomeProject = blockDashedName === 'take-home-projects';

      return (
        (isFinalProject(challenge.challengeType) ||
          isCodeAllyPractice(challenge.challengeType)) &&
        !isTakeHomeProject
      );
    });

    const blockIntroObj: { title?: string; intro: string[] } = t(
      `intro:${superBlock}.blocks.${blockDashedName}`
    );
    const blockTitle = blockIntroObj ? blockIntroObj.title : null;
    const blockIntroArr = blockIntroObj ? blockIntroObj.intro : [];
    const {
      expand: expandText,
      collapse: collapseText
    }: {
      expand: string;
      collapse: string;
    } = t('intro:misc-text');

    const isBlockCompleted = completedCount === challengesWithCompleted.length;

    const percentageCompleted = Math.floor(
      (completedCount / challengesWithCompleted.length) * 100
    );

    const progressBarRender = (
      <div aria-hidden='true' className='progress-wrapper'>
        <ProgressBar now={percentageCompleted} />
        <span>{`${percentageCompleted}%`}</span>
      </div>
    );

    const Block = (
      <>
        {' '}
        <ScrollableAnchor id={blockDashedName}>
          <div className={`block ${isExpanded ? 'open' : ''}`}>
            <div className='block-header'>
              <h3 className='big-block-title'>{blockTitle}</h3>
              {!isAuditedCert(curriculumLocale, superBlock) && (
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
            {this.renderBlockIntros(blockIntroArr)}
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
                {this.renderCheckMark(isBlockCompleted)}
                <span
                  aria-hidden='true'
                  className='map-completed-count'
                >{`${completedCount}/${challengesWithCompleted.length}`}</span>
                <span className='sr-only'>
                  ,{' '}
                  {t('learn.challenges-completed', {
                    completedCount,
                    totalChallenges: challengesWithCompleted.length
                  })}
                </span>
              </div>
            </button>
            {isExpanded && (
              <Challenges
                challengesWithCompleted={challengesWithCompleted}
                isProjectBlock={isProjectBlock}
                superBlock={superBlock}
              />
            )}
          </div>
        </ScrollableAnchor>
      </>
    );

    const ProjectBlock = (
      <>
        <ScrollableAnchor id={blockDashedName}>
          <div className='block'>
            <div className='block-header'>
              <h3 className='big-block-title'>{blockTitle}</h3>
              {!isAuditedCert(curriculumLocale, superBlock) && (
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
            {this.renderBlockIntros(blockIntroArr)}
            <Challenges
              challengesWithCompleted={challengesWithCompleted}
              isProjectBlock={isProjectBlock}
              superBlock={superBlock}
            />
          </div>
        </ScrollableAnchor>
      </>
    );

    const courseCompletionStatus = () => {
      if (completedCount === 0) {
        return t('learn.not-started');
      }
      if (completedCount === challengesWithCompleted.length) {
        return t('learn.completed');
      }
      return `${percentageCompleted}% ${t('learn.completed')}`;
    };

    const GridBlock = (
      <>
        {' '}
        <ScrollableAnchor id={blockDashedName}>
          <div className={`block block-grid ${isExpanded ? 'open' : ''}`}>
            <h3 className='block-grid-title'>
              <button
                aria-expanded={isExpanded ? 'true' : 'false'}
                className='block-header'
                data-cy={challengesWithCompleted[0].block}
                onClick={() => {
                  this.handleBlockClick();
                }}
              >
                <span className='block-header-button-text map-title'>
                  {this.renderCheckMark(isBlockCompleted)}
                  <span>
                    {blockTitle}
                    <span className='sr-only'>
                      , {courseCompletionStatus()}
                    </span>
                  </span>
                  <DropDown />
                </span>
                {!isExpanded &&
                  !isBlockCompleted &&
                  completedCount > 0 &&
                  progressBarRender}
              </button>
            </h3>
            <div className='tags-wrapper'>
              {!isAuditedCert(curriculumLocale, superBlock) && (
                <Link
                  className='cert-tag'
                  to={t('links:help-translate-link-url')}
                >
                  {t('misc.translation-pending')}
                </Link>
              )}
            </div>
            {isExpanded && this.renderBlockIntros(blockIntroArr)}
            {isExpanded && (
              <Challenges
                challengesWithCompleted={challengesWithCompleted}
                isProjectBlock={isProjectBlock}
                superBlock={superBlock}
                blockTitle={blockTitle}
              />
            )}
          </div>
        </ScrollableAnchor>
      </>
    );

    const GridProjectBlock = (
      <ScrollableAnchor id={blockDashedName}>
        <div className='block block-grid grid-project-block'>
          <Link
            className='block-header'
            onClick={() => {
              this.handleBlockClick();
            }}
            to={challengesWithCompleted[0].fields.slug}
          >
            <div className='tags-wrapper'>
              <span className='cert-tag'>
                {t('misc.certification-project')}
              </span>
              {!isAuditedCert(curriculumLocale, superBlock) && (
                <Link
                  className='cert-tag'
                  to={t('links:help-translate-link-url')}
                >
                  {t('misc.translation-pending')}
                </Link>
              )}
            </div>
            <div className='title-wrapper map-title'>
              {this.renderCheckMark(isBlockCompleted)}
              <h3 className='block-grid-title'>{blockTitle}</h3>
            </div>
            {this.renderBlockIntros(blockIntroArr)}
          </Link>
        </div>
      </ScrollableAnchor>
    );

    const blockrenderer = () => {
      if (isProjectBlock && !isOdinProject)
        return isNewResponsiveWebDesign || isNewJsAlgos || isCollegeAlgebraPy
          ? GridProjectBlock
          : ProjectBlock;
      return isNewResponsiveWebDesign || isNewJsAlgos || isCollegeAlgebraPy
        ? GridBlock
        : Block;
    };

    return (
      <>
        {blockrenderer()}
        {(isNewResponsiveWebDesign || isNewJsAlgos || isCollegeAlgebraPy) &&
        !isProjectBlock ? null : (
          <Spacer size='medium' />
        )}
      </>
    );
  }
}

Block.displayName = 'Block';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Block));

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// Package Utilities
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

// Local Utilities
import Spacer from '../../../../components/helpers/spacer';
import LearnLayout from '../../../../components/layouts/learn';
import {
  ChallengeNodeType,
  ChallengeMetaType
} from '../../../../redux/prop-types';
import ChallengeDescription from '../../components/Challenge-Description';
import HelpModal from '../../components/HelpModal';
import Hotkeys from '../../components/Hotkeys';
import ChallengeTitle from '../../components/challenge-title';
import CompletionModal from '../../components/completion-modal';
import {
  challengeMounted,
  isChallengeCompletedSelector,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues
} from '../../redux';
import { getGuideUrl } from '../../utils';
import SolutionForm from '../solution-form';
import ProjectToolPanel from '../tool-panel';

// Redux Setup
const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  (isChallengeCompleted: boolean) => ({
    isChallengeCompleted
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateChallengeMeta,
      challengeMounted,
      updateSolutionFormValues,
      openCompletionModal: () => openModal('completion')
    },
    dispatch
  );

// Types
interface ProjectProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNodeType };
  isChallengeCompleted: boolean;
  openCompletionModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMetaType;
  };
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMetaType) => void;
  updateSolutionFormValues: () => void;
}

// Component
class Project extends Component<ProjectProps> {
  static displayName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _container: any;

  constructor(props: ProjectProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const {
      challengeMounted,
      data: {
        challengeNode: { title, challengeType, helpCategory }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
    this._container.focus();
  }

  componentDidUpdate(prevProps: ProjectProps): void {
    const {
      data: {
        challengeNode: { title: prevTitle }
      }
    } = prevProps;
    const {
      challengeMounted,
      data: {
        challengeNode: { title: currentTitle, challengeType, helpCategory }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    if (prevTitle !== currentTitle) {
      updateChallengeMeta({
        ...challengeMeta,
        title: currentTitle,
        challengeType,
        helpCategory
      });
      challengeMounted(challengeMeta.id);
    }
  }

  handleSubmit({
    isShouldCompletionModalOpen
  }: {
    isShouldCompletionModalOpen: boolean;
  }): void {
    if (isShouldCompletionModalOpen) {
      this.props.openCompletionModal();
    }
  }

  render() {
    const {
      data: {
        challengeNode: {
          challengeType,
          fields: { blockName },
          forumTopicId,
          title,
          description,
          superBlock,
          block,
          translationPending
        }
      },
      isChallengeCompleted,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t,
      updateSolutionFormValues
    } = this.props;

    const blockNameTitle = `${blockName} - ${title}`;

    return (
      <Hotkeys
        innerRef={(c: HTMLElement | null) => (this._container = c)}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet
            title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
          />
          <Grid>
            <Row>
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <Spacer />
                <ChallengeTitle
                  block={block}
                  isCompleted={isChallengeCompleted}
                  superBlock={superBlock}
                  translationPending={translationPending}
                >
                  {title}
                </ChallengeTitle>
                <ChallengeDescription description={description} />
                <SolutionForm
                  challengeType={challengeType}
                  description={description}
                  // eslint-disable-next-line @typescript-eslint/unbound-method
                  onSubmit={this.handleSubmit}
                  updateSolutionForm={updateSolutionFormValues}
                />
                <ProjectToolPanel
                  guideUrl={getGuideUrl({ forumTopicId, title })}
                />
                <br />
                <Spacer />
              </Col>
              <CompletionModal
                block={block}
                blockName={blockName}
                superBlock={superBlock}
              />
              <HelpModal />
            </Row>
          </Grid>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

Project.displayName = 'Project';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Project));

export const query = graphql`
  query ProjectChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      forumTopicId
      title
      description
      challengeType
      helpCategory
      superBlock
      block
      translationPending
      fields {
        blockName
        slug
      }
    }
  }
`;

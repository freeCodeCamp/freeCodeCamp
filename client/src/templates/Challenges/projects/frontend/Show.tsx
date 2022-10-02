import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import Spacer from '../../../../components/helpers/spacer';
import LearnLayout from '../../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta } from '../../../../redux/prop-types';
import ChallengeDescription from '../../components/Challenge-Description';
import Hotkeys from '../../components/Hotkeys';
import ChallengeTitle from '../../components/challenge-title';
import CompletionModal from '../../components/completion-modal';
import HelpModal from '../../components/help-modal';
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
  data: { challengeNode: ChallengeNode };
  isChallengeCompleted: boolean;
  openCompletionModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
}

// Component
class Project extends Component<ProjectProps> {
  static displayName: string;
  private _container: HTMLElement | null = null;

  constructor(props: ProjectProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { title, challengeType, helpCategory }
        }
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
    this._container?.focus();
  }

  componentDidUpdate(prevProps: ProjectProps): void {
    const {
      data: {
        challengeNode: {
          challenge: { title: prevTitle }
        }
      }
    } = prevProps;
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { title: currentTitle, challengeType, helpCategory }
        }
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
    showCompletionModal
  }: {
    showCompletionModal: boolean;
  }): void {
    if (showCompletionModal) {
      this.props.openCompletionModal();
    }
  }

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            challengeType,
            fields: { blockName },
            forumTopicId,
            title,
            description,
            instructions,
            superBlock,
            certification,
            block,
            translationPending
          }
        }
      },
      isChallengeCompleted,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t,
      updateSolutionFormValues
    } = this.props;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;

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
                <ChallengeDescription
                  description={description}
                  instructions={instructions}
                />
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
                certification={certification}
                superBlock={superBlock}
              />
              <HelpModal challengeTitle={title} challengeBlock={blockName} />
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
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        forumTopicId
        title
        description
        instructions
        challengeType
        helpCategory
        superBlock
        certification
        block
        translationPending
        fields {
          blockName
          slug
        }
      }
    }
  }
`;

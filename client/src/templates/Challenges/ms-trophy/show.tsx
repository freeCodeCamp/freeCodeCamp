import { Col, Row, Button } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { Container } from '@freecodecamp/ui';
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta } from '../../../redux/prop-types';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  submitChallenge
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';
import { setIsProcessing } from '../../../redux/actions';
import {
  isProcessingSelector,
  msUsernameSelector
} from '../../../redux/selectors';
import LinkMsUser from './link-ms-user';

// Redux Setup
const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  isProcessingSelector,
  msUsernameSelector,
  (
    isChallengeCompleted: boolean,
    isProcessing: boolean,
    msUsername: string | undefined | null
  ) => ({
    isChallengeCompleted,
    isProcessing,
    msUsername
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateChallengeMeta,
      challengeMounted,
      updateSolutionFormValues,
      openCompletionModal: () => openModal('completion'),
      setIsProcessing,
      submitChallenge
    },
    dispatch
  );

// Types
interface MsTrophyProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  isChallengeCompleted: boolean;
  isProcessing: boolean;
  setIsProcessing: (arg0: boolean) => void;
  msUsername: string | undefined | null;
  openCompletionModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  submitChallenge: () => void;
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
}

// Component
class MsTrophy extends Component<MsTrophyProps> {
  static displayName: string;
  private _container: HTMLElement | null = null;

  constructor(props: MsTrophyProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { title, challengeType }
        }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType
    });
    challengeMounted(challengeMeta.id);
    this._container?.focus();
  }

  componentDidUpdate(prevProps: MsTrophyProps): void {
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
          challenge: { title: currentTitle, challengeType }
        }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    if (prevTitle !== currentTitle) {
      updateChallengeMeta({
        ...challengeMeta,
        title: currentTitle,
        challengeType
      });
      challengeMounted(challengeMeta.id);
    }
  }

  handleSubmit = (): void => {
    const { setIsProcessing, submitChallenge } = this.props;

    setIsProcessing(true);
    submitChallenge();
  };

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            title,
            description,
            instructions,
            superBlock,
            block,
            translationPending
          }
        }
      },
      isChallengeCompleted,
      isProcessing,
      msUsername,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t
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
          <Container>
            <Row>
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <Spacer size='medium' />
                <ChallengeTitle
                  isCompleted={isChallengeCompleted}
                  translationPending={translationPending}
                >
                  {title}
                </ChallengeTitle>
                <ChallengeDescription
                  description={description}
                  instructions={instructions}
                />
                <LinkMsUser />
                <hr />
                <Button
                  block={true}
                  bsStyle='primary'
                  className='btn-invert'
                  disabled={!msUsername || isProcessing}
                  onClick={this.handleSubmit}
                >
                  {t('buttons.verify-trophy')}
                </Button>
                <br />
                <Spacer size='medium' />
              </Col>
              <CompletionModal />
            </Row>
          </Container>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

MsTrophy.displayName = 'MsTrophy';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(MsTrophy));

export const query = graphql`
  query MsTrophyChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        title
        description
        instructions
        challengeType
        superBlock
        block
        translationPending
      }
    }
  }
`;

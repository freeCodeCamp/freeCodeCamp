// Package Utilities
import { Alert, Col, Row, Button } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component, RefObject } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container } from '@freecodecamp/ui';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import ChallengeTitle from '../components/challenge-title';
import PrismFormatted from '../components/prism-formatted';
import { challengeTypes } from '../../../../../config/challenge-types';
import CompletionModal from '../components/completion-modal';
import GreenPass from '../../../assets/icons/green-pass';
import HelpModal from '../components/help-modal';
import Hotkeys from '../components/hotkeys';
import { hideCodeAlly, tryToShowCodeAlly } from '../../../redux/actions';
import {
  completedChallengesSelector,
  partiallyCompletedChallengesSelector,
  showCodeAllySelector,
  isSignedInSelector,
  userTokenSelector
} from '../../../redux/selectors';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';
import { createFlashMessage } from '../../../components/Flash/redux';
import {
  ChallengeNode,
  ChallengeMeta,
  CompletedChallenge
} from '../../../redux/prop-types';
import ProjectToolPanel from '../projects/tool-panel';
import SolutionForm from '../projects/solution-form';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';
import { SuperBlocks } from '../../../../../config/superblocks';
import { CodeAllyDown } from '../../../components/growth-book/codeally-down';

import './codeally.css';

// Redux
const mapStateToProps = createSelector(
  completedChallengesSelector,
  isChallengeCompletedSelector,
  isSignedInSelector,
  partiallyCompletedChallengesSelector,
  showCodeAllySelector,
  userTokenSelector,
  (
    completedChallenges: CompletedChallenge[],
    isChallengeCompleted: boolean,
    isSignedIn: boolean,
    partiallyCompletedChallenges: CompletedChallenge[],
    showCodeAlly: boolean,
    userToken: string | null
  ) => ({
    completedChallenges,
    isChallengeCompleted,
    isSignedIn,
    partiallyCompletedChallenges,
    showCodeAlly,
    userToken
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      challengeMounted,
      createFlashMessage,
      hideCodeAlly,
      openCompletionModal: () => openModal('completion'),
      tryToShowCodeAlly,
      updateChallengeMeta,
      updateSolutionFormValues
    },
    dispatch
  );

// Types
interface ShowCodeAllyProps {
  challengeMounted: (arg0: string) => void;
  completedChallenges: CompletedChallenge[];
  createFlashMessage: typeof createFlashMessage;
  data: { challengeNode: ChallengeNode };
  hideCodeAlly: () => void;
  isChallengeCompleted: boolean;
  isSignedIn: boolean;
  openCompletionModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  partiallyCompletedChallenges: CompletedChallenge[];
  showCodeAlly: boolean;
  t: TFunction;
  tryToShowCodeAlly: () => void;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
  userToken: string | null;
}

class ShowCodeAlly extends Component<ShowCodeAllyProps> {
  static displayName: string;
  private _container: RefObject<HTMLElement> | undefined;

  componentDidMount(): void {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { challengeType, helpCategory, title }
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

    this._container?.current?.focus();
  }

  componentWillUnmount() {
    this.props.hideCodeAlly();
  }

  handleSubmit = ({
    showCompletionModal
  }: {
    showCompletionModal: boolean;
  }) => {
    const {
      completedChallenges,
      createFlashMessage,
      data: {
        challengeNode: {
          challenge: { id: challengeId }
        }
      },
      openCompletionModal,
      partiallyCompletedChallenges
    } = this.props;

    const isPartiallyCompleted = partiallyCompletedChallenges.some(
      challenge => challenge.id === challengeId
    );

    const isCompleted = completedChallenges.some(
      challenge => challenge.id === challengeId
    );

    if (!isPartiallyCompleted && !isCompleted) {
      createFlashMessage({
        type: 'danger',
        message: FlashMessages.CompleteProjectFirst
      });
    } else if (showCompletionModal) {
      openCompletionModal();
    }
  };

  render() {
    const {
      completedChallenges,
      data: {
        challengeNode: {
          challenge: {
            challengeType,
            description,
            fields: { blockName },
            id: challengeId,
            instructions,
            notes,
            superBlock,
            title,
            translationPending,
            url
          }
        }
      },
      isChallengeCompleted,
      isSignedIn,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      partiallyCompletedChallenges,
      showCodeAlly,
      t,
      tryToShowCodeAlly,
      updateSolutionFormValues,
      userToken = null
    } = this.props;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${blockName}.title`
    )}: ${title}`;
    const windowTitle = `${blockNameTitle} | freeCodeCamp.org`;

    // Initial CodeAlly login includes a tempToken in redirect URL
    const queryParams = new URLSearchParams(window.location.search);
    const codeAllyTempToken: string | null = queryParams.get('tempToken');

    const tempToken = codeAllyTempToken ? `tempToken=${codeAllyTempToken}` : '';

    // Include a unique param to avoid CodeAlly caching issues
    const date = `date=${Date.now()}`;

    // User token for submitting CodeRoad tutorials
    const envVariables = userToken
      ? `envVariables=CODEROAD_WEBHOOK_TOKEN=${userToken}`
      : '';

    const goBackTo = `goBackTo=${window.location.href}`;

    const isPartiallyCompleted = partiallyCompletedChallenges.some(
      challenge => challenge.id === challengeId
    );

    const isCompleted = completedChallenges.some(
      challenge => challenge.id === challengeId
    );
    const titleContext = t('learn.github-link');

    return showCodeAlly ? (
      <LearnLayout>
        <Helmet title={windowTitle} />
        <iframe
          className='codeally-frame'
          data-cy='codeally-frame'
          name={`codeAlly${Date.now()}`}
          sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
          src={`https://codeally.io/embed/?repoUrl=${url}&${goBackTo}&${envVariables}&${tempToken}&${date}`}
          title='Editor'
        />
      </LearnLayout>
    ) : (
      <Hotkeys
        innerRef={this._container}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet title={windowTitle} />
          <Container>
            <Row>
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <Spacer size='medium' />
                {superBlock === SuperBlocks.RelationalDb && <CodeAllyDown />}
                <Spacer size='medium' />
                <ChallengeTitle
                  isCompleted={isChallengeCompleted}
                  translationPending={translationPending}
                >
                  {title}
                </ChallengeTitle>
                <Spacer size='medium' />
                <PrismFormatted text={description} />
                <Spacer size='medium' />
                <div className='ca-description'>
                  <Trans i18nKey='learn.github-required'>
                    <a
                      href='https://github.com/join'
                      rel='noopener noreferrer'
                      target='_blank'
                      title={titleContext}
                    >
                      placeholder
                    </a>
                  </Trans>
                </div>
                <Spacer size='medium' />
                {isSignedIn &&
                  challengeType === challengeTypes.codeAllyCert && (
                    <>
                      <div className='ca-description'>
                        {t('learn.complete-both-steps')}
                      </div>
                      <hr />
                      <Spacer size='medium' />
                      <b>{t('learn.step-1')}</b>
                      {(isPartiallyCompleted || isCompleted) && (
                        <GreenPass
                          style={{
                            height: '15px',
                            width: '15px',
                            marginInlineEnd: '7px'
                          }}
                        />
                      )}
                      <Spacer size='medium' />
                      <div className='ca-description'>
                        {t('learn.runs-in-vm')}
                      </div>
                      <Spacer size='medium' />
                      <PrismFormatted text={instructions} />
                      <Spacer size='medium' />
                    </>
                  )}
                <Alert id='codeally-cookie-warning' bsStyle='info'>
                  <p>{t(`intro:misc-text.enable-cookies`)}</p>
                </Alert>
                <Button
                  aria-describedby='codeally-cookie-warning'
                  block={true}
                  bsStyle='primary'
                  data-cy='start-codeally'
                  onClick={tryToShowCodeAlly}
                >
                  {challengeType === challengeTypes.codeAllyCert
                    ? t('buttons.click-start-project')
                    : t('buttons.click-start-course')}
                </Button>
                {isSignedIn &&
                  challengeType === challengeTypes.codeAllyCert && (
                    <>
                      <hr />
                      <Spacer size='medium' />
                      <b>{t('learn.step-2')}</b>
                      {isCompleted && (
                        <GreenPass
                          style={{
                            height: '15px',
                            width: '15px',
                            marginInlineStart: '7px'
                          }}
                        />
                      )}
                      <Spacer size='medium' />
                      <div className='ca-description'>
                        {t('learn.submit-public-url')}
                      </div>
                      <Spacer size='medium' />
                      <PrismFormatted text={notes} />
                      <Spacer size='medium' />
                      <SolutionForm
                        challengeType={challengeType}
                        description={description}
                        onSubmit={this.handleSubmit}
                        updateSolutionForm={updateSolutionFormValues}
                      />
                    </>
                  )}
                <ProjectToolPanel />
                <br />
                <Spacer size='medium' />
              </Col>
              <CompletionModal />
              <HelpModal challengeTitle={title} challengeBlock={blockName} />
            </Row>
          </Container>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowCodeAlly.displayName = 'ShowCodeAlly';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowCodeAlly));

// GraphQL
export const query = graphql`
  query CodeAllyChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        challengeType
        description
        fields {
          blockName
        }
        helpCategory
        id
        instructions
        notes
        superBlock
        title
        translationPending
        url
      }
    }
  }
`;

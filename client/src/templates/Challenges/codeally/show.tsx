/* eslint-disable max-len */

// Package Utilities
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

// Local Utilities
import LearnLayout from '../../../components/layouts/learn';
import { webhookTokenSelector } from '../../../redux';
import { ChallengeNode, ChallengeMeta } from '../../../redux/prop-types';
import { updateChallengeMeta, challengeMounted } from '../redux';
// Redux

const mapStateToProps = createSelector(
  webhookTokenSelector,
  (webhookToken: string | null) => ({
    webhookToken
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateChallengeMeta,
      challengeMounted
    },
    dispatch
  );

// Types
interface ShowCodeAllyProps {
  data: { challengeNode: ChallengeNode };
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  webhookToken: string | null;
}

// Component
class ShowCodeAlly extends Component<ShowCodeAllyProps> {
  static displayName: string;
  componentDidMount(): void {
    const {
      updateChallengeMeta,
      data: {
        challengeNode: { challengeType, title }
      },
      pageContext: { challengeMeta }
    } = this.props;
    updateChallengeMeta({ ...challengeMeta, title, challengeType });
  }

  render() {
    const {
      data: {
        challengeNode: {
          title,
          fields: { blockName },
          url
        }
      },
      webhookToken = null
    } = this.props;

    const envVariables = webhookToken
      ? `&envVariables=CODEROAD_WEBHOOK_TOKEN=${webhookToken}`
      : '';

    return (
      <LearnLayout>
        <Helmet title={`${blockName}: ${title} | freeCodeCamp.org`} />
        <iframe
          className='codeally-frame'
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
          src={`https://codeally.io/embed/?repoUrl=${url}${envVariables}`}
          title='Editor'
        />
      </LearnLayout>
    );
  }
}

ShowCodeAlly.displayName = 'ShowCodeAlly';

export default connect(mapStateToProps, mapDispatchToProps)(ShowCodeAlly);

// GraphQL
export const query = graphql`
  query CodeAllyChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      title
      challengeType
      url
      fields {
        blockName
      }
    }
  }
`;

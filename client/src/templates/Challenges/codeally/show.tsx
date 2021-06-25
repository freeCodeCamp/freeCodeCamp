/* eslint-disable max-len */

// Package Utilities
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import type { Dispatch } from 'redux';

// Local Utilities
import LearnLayout from '../../../components/layouts/Learn';
import {
  ChallengeNodeType,
  ChallengeMetaType
} from '../../../redux/prop-types';
import { updateChallengeMeta, challengeMounted } from '../redux';

// Redux
const mapStateToProps = () => ({});
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
  data: { challengeNode: ChallengeNodeType };
  pageContext: {
    challengeMeta: ChallengeMetaType;
  };
  updateChallengeMeta: (arg0: ChallengeMetaType) => void;
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
      title,
      fields: { blockName },
      url
    } = this.props.data.challengeNode;

    return (
      <LearnLayout>
        <Helmet title={`${blockName}: ${title} | freeCodeCamp.org`} />
        <iframe
          sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          src={`http://codeally.io/embed/?repoUrl=${url}`}
          style={{
            width: '100%',
            height: 'calc(100vh - 38px)',
            overflow: 'hidden',
            border: 0
          }}
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

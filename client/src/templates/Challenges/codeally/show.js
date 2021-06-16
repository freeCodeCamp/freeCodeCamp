/* eslint-disable max-len */

// Package Utilities
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// Local Utilities
import LearnLayout from '../../../components/layouts/Learn';
import { ChallengeNode } from '../../../redux/prop-types';
import { updateChallengeMeta, challengeMounted } from '../redux';

// Redux
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateChallengeMeta,
      challengeMounted
    },
    dispatch
  );

// Proptypes
const propTypes = {
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  pageContext: PropTypes.shape({
    challengeMeta: PropTypes.shape({
      id: PropTypes.string,
      introPath: PropTypes.string,
      nextChallengePath: PropTypes.string,
      prevChallengePath: PropTypes.string
    })
  }),
  updateChallengeMeta: PropTypes.func.isRequired
};

// Component
class ShowCodeAlly extends Component {
  componentDidMount() {
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
ShowCodeAlly.propTypes = propTypes;

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

/* global graphql */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
// import { createSelector } from 'reselect';
// import { connect } from 'react-redux';

import Helmet from 'react-helmet';

import { ChallengeNode } from '../../../redux/propTypes';
import SidePanel from './Side-Panel';
import ToolPanel from './Tool-Panel';
// import HelpModal from '../components/Help-Modal.jsx';

const propTypes = {
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  })
};

export class Project extends PureComponent {
  render() {
    const {
      data: {
        challengeNode: {
          challengeType,
          fields: { blockName },
          title,
          description,
          guideUrl
        }
      }
    } = this.props;
    const blockNameTitle = `${blockName} - ${title}`;
    return (
      <Fragment>
        <Helmet title={`${blockNameTitle} | Learn freeCodeCamp}`} />
        <SidePanel
          className='full-height'
          description={description}
          guideUrl={guideUrl}
          title={blockNameTitle}
        />
        <ToolPanel challengeType={challengeType} helpChatRoom='help' />
      </Fragment>
    );
  }
}

Project.displayName = 'Project';
Project.propTypes = propTypes;

export default Project;

export const query = graphql`
  query ProjectChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      title
      guideUrl
      description
      challengeType
      fields {
        blockName
      }
    }
  }
`;

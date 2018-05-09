/* global graphql */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Helmet from 'react-helmet';

import { ChallengeNode } from '../../../redux/propTypes';
import SidePanel from './Side-Panel';
import ToolPanel from './Tool-Panel';
import CompletionModal from '../components/CompletionModal';
import HelpModal from '../components/HelpModal';
import { bindActionCreators } from 'redux';
import { updateChallengeMeta, createFiles } from '../redux';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateChallengeMeta, createFiles }, dispatch);

const propTypes = {
  createFiles: PropTypes.func.isRequired,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  pathContext: PropTypes.shape({
    challengeMeta: PropTypes.object
  }),
  updateChallengeMeta: PropTypes.func.isRequired
};

export class Project extends PureComponent {
  componentDidMount() {
    const {
      createFiles,
      data: { challengeNode: { title } },
      pathContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    createFiles({});
    return updateChallengeMeta({ ...challengeMeta, title });
  }

  componentDidUpdate(prevProps) {
    const { data: { challengeNode: { title: prevTitle } } } = prevProps;
    const {
      createFiles,
      data: { challengeNode: { title: currentTitle } },
      pathContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    if (prevTitle !== currentTitle) {
      createFiles({});
      updateChallengeMeta({ ...challengeMeta, title: currentTitle });
    }
  }

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
        <ToolPanel challengeType={challengeType} />
        <CompletionModal />
        <HelpModal />
      </Fragment>
    );
  }
}

Project.displayName = 'Project';
Project.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Project);

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

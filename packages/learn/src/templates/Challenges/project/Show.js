/* global graphql */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Helmet from 'react-helmet';

import { randomCompliment } from '../utils/get-words';

import { ChallengeNode } from '../../../redux/propTypes';
import ProjectForm from './ProjectForm';
import SidePanel from './Side-Panel';
import ToolPanel from './Tool-Panel';
import CompletionModal from '../components/CompletionModal';
import HelpModal from '../components/HelpModal';
import { bindActionCreators } from 'redux';
import {
  updateChallengeMeta,
  createFiles,
  updateSuccessMessage,
  openModal
} from '../redux';
import { frontEndProject } from '../../../../utils/challengeTypes';

import './project.css';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateChallengeMeta,
      createFiles,
      updateSuccessMessage,
      openCompletionModal: () => openModal('completion')
    },
    dispatch
  );

const propTypes = {
  createFiles: PropTypes.func.isRequired,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  openCompletionModal: PropTypes.func.isRequired,
  pathContext: PropTypes.shape({
    challengeMeta: PropTypes.object
  }),
  updateChallengeMeta: PropTypes.func.isRequired,
  updateSuccessMessage: PropTypes.func.isRequired
};

export class Project extends PureComponent {
  componentDidMount() {
    const {
      createFiles,
      data: { challengeNode: { title } },
      pathContext: { challengeMeta },
      updateChallengeMeta,
      updateSuccessMessage
    } = this.props;
    createFiles({});
    updateSuccessMessage(randomCompliment());
    return updateChallengeMeta({ ...challengeMeta, title });
  }

  componentDidUpdate(prevProps) {
    const { data: { challengeNode: { title: prevTitle } } } = prevProps;
    const {
      createFiles,
      data: { challengeNode: { title: currentTitle } },
      pathContext: { challengeMeta },
      updateChallengeMeta,
      updateSuccessMessage
    } = this.props;
    updateSuccessMessage(randomCompliment());
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
      },
      openCompletionModal
    } = this.props;
    const isFrontEnd = challengeType === frontEndProject;
    const blockNameTitle = `${blockName} - ${title}`;
    return (
      <Fragment>
        <Helmet title={`${blockNameTitle} | Learn freeCodeCamp}`} />
        <ToolPanel />
        <div className='project-show-wrapper'>
          <SidePanel
            className='full-height'
            description={description}
            guideUrl={guideUrl}
            title={blockNameTitle}
          />
          <ProjectForm
            isFrontEnd={isFrontEnd}
            openModal={openCompletionModal}
          />
        </div>
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

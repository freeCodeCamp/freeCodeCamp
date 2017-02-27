import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import Editor from './Editor.jsx';
import SidePanel from './Side-Panel.jsx';
import Preview from './Preview.jsx';
import BugModal from '../Bug-Modal.jsx';
import ClassicModal from '../Classic-Modal.jsx';
import { challengeSelector } from '../../redux/selectors';
import {
  executeChallenge,
  updateFile,
  loadCode,
  submitChallenge,
  closeChallengeModal,
  updateSuccessMessage
} from '../../redux/actions';
import { randomCompliment } from '../../../../utils/get-words';

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.id,
  state => state.challengesApp.tests,
  state => state.challengesApp.files,
  state => state.challengesApp.key,
  state => state.challengesApp.isChallengeModalOpen,
  state => state.challengesApp.successMessage,
  (
    { showPreview, mode },
    id,
    tests,
    files = {},
    key = '',
    isChallengeModalOpen,
    successMessage,
  ) => ({
    id,
    content: files[key] && files[key].contents || '',
    file: files[key],
    showPreview,
    mode,
    tests,
    isChallengeModalOpen,
    successMessage
  })
);

const bindableActions = {
  executeChallenge,
  updateFile,
  loadCode,
  submitChallenge,
  closeChallengeModal,
  updateSuccessMessage
};

const propTypes = {
  closeChallengeModal: PropTypes.func,
  content: PropTypes.string,
  executeChallenge: PropTypes.func,
  file: PropTypes.object,
  id: PropTypes.string,
  isChallengeModalOpen: PropTypes.bool,
  loadCode: PropTypes.func,
  mode: PropTypes.string,
  showPreview: PropTypes.bool,
  submitChallenge: PropTypes.func,
  successMessage: PropTypes.string,
  updateFile: PropTypes.func,
  updateSuccessMessage: PropTypes.func
};

export class Challenge extends PureComponent {

  componentDidMount() {
    this.props.loadCode();
    this.props.updateSuccessMessage(randomCompliment());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.props.loadCode();
      this.props.updateSuccessMessage(randomCompliment());
    }
  }

  renderPreview(showPreview) {
    if (!showPreview) {
      return null;
    }
    return (
      <Col
        lg={ 3 }
        md={ 4 }
        >
        <Preview />
      </Col>
    );
  }

  render() {
    const {
      content,
      updateFile,
      file,
      mode,
      showPreview,
      executeChallenge,
      submitChallenge,
      successMessage,
      isChallengeModalOpen,
      closeChallengeModal
    } = this.props;

    return (
      <div>
        <Col
          lg={ showPreview ? 3 : 4 }
          md={ showPreview ? 3 : 4 }
          >
          <SidePanel />
        </Col>
        <Col
          lg={ showPreview ? 6 : 8 }
          md={ showPreview ? 5 : 8 }
          >
          <Editor
            content={ content }
            executeChallenge={ executeChallenge }
            mode={ mode }
            updateFile={ content => updateFile(content, file) }
          />
        </Col>
        { this.renderPreview(showPreview) }
        <BugModal />
        <ClassicModal
          close={ closeChallengeModal }
          open={ isChallengeModalOpen }
          submitChallenge={ submitChallenge }
          successMessage={ successMessage }
        />
      </div>
    );
  }
}

Challenge.displayName = 'Challenge';
Challenge.propTypes = propTypes;

export default connect(mapStateToProps, bindableActions)(Challenge);

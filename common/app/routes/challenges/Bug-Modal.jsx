import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';

import ns from './ns.json';

import { createIssue, openIssueSearch, closeBugModal } from './redux/actions';

const mapStateToProps = state => ({ isOpen: state.challengesApp.isBugOpen });
const mapDispatchToProps = { createIssue, openIssueSearch, closeBugModal };
const bugLink = 'http://forum.freecodecamp.com/t/how-to-report-a-bug/19543';

const propTypes = {
  closeBugModal: PropTypes.func,
  createIssue: PropTypes.func,
  isOpen: PropTypes.bool,
  openIssueSearch: PropTypes.func
};

export class BugModal extends PureComponent {
  render() {
    const {
      isOpen,
      closeBugModal,
      openIssueSearch,
      createIssue
    } = this.props;
    return (
      <Modal
        show={ isOpen }
        >
        <Modal.Header className={ `${ns}-list-header` }>
          Did you find a bug?
          <span
            className='close closing-x'
            onClick={ closeBugModal }
            >
            ×
          </span>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <h3>
            Before you submit a new issue,
            read "How to Report a Bug" and
            browse other issues with this challenge.
          </h3>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href={ bugLink }
            target='_blank'
            >
            Read "How to Report a Bug"
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            onClick={ openIssueSearch }
            >
            Browse other issues with this challenge
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            onClick={ createIssue }
            >
            Create my GitHub issue
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            onClick={ closeBugModal }
            >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
}

BugModal.displayName = 'BugModal';
BugModal.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(BugModal);

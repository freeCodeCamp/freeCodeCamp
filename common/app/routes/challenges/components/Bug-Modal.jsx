import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';
import { createIssue, openIssueSearch, closeBugModal } from '../redux/actions';

const mapStateToProps = state => ({ isOpen: state.challengesApp.isBugOpen });
const actions = { createIssue, openIssueSearch, closeBugModal };
const bugLink = 'http://forum.freecodecamp.com/t/how-to-report-a-bug/19543';

export class BugModal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    closeBugModal: PropTypes.func,
    openIssueSearch: PropTypes.func,
    createIssue: PropTypes.func
  };

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
        <Modal.Header className='challenge-list-header'>
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

export default connect(mapStateToProps, actions)(BugModal);

import React, { cloneElement, PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { History } from 'react-router';
import { Button, Panel, Row } from 'react-bootstrap';

import CreateJobModal from './CreateJobModal.jsx';
import ListJobs from './List.jsx';

export default contain(
  {
    store: 'jobsStore',
    fetchAction: 'jobActions.getJobs',
    actions: 'jobActions'
  },
  React.createClass({
    displayName: 'Jobs',

    mixins: [History],

    propTypes: {
      children: PropTypes.element,
      jobActions: PropTypes.object,
      jobs: PropTypes.array,
      showModal: PropTypes.bool
    },

    handleJobClick(id) {
      const { jobActions } = this.props;
      if (!id) {
        return null;
      }
      jobActions.findJob(id);
      this.history.pushState(null, `/jobs/${id}`);
    },

    renderList(handleJobClick, jobs) {
      return (
        <ListJobs
          handleClick={ handleJobClick }
          jobs={ jobs }/>
      );
    },

    renderChild(child, jobs) {
      if (!child) {
        return null;
      }
      return cloneElement(
        child,
        { jobs }
      );
    },

    render() {
      const {
        children,
        jobs,
        showModal,
        jobActions
      } = this.props;

      return (
        <Panel>
          <h1>Free Code Camps' Job Board</h1>
          <Row>
            <p>
              Need to find the best junior developers?
              Want to find dedicated developers eager to join your company?
              Sign up now to post your job!
            </p>
            <Button
              bsSize='large'
              className='signup-btn'
              onClick={ jobActions.openModal }>
              Post a job: $200 for 60 days.
            </Button>
          </Row>
          <Row>
          { this.renderChild(children, jobs) ||
            this.renderList(this.handleJobClick, jobs) }
          </Row>
          <CreateJobModal
            onHide={ jobActions.closeModal }
            showModal={ showModal } />
        </Panel>
      );
    }
  })
);

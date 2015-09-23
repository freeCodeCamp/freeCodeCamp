import React, { cloneElement, PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Navigation } from 'react-router';
import { Button, Jumbotron, Row } from 'react-bootstrap';
import ListJobs from './List.jsx';

export default contain(
  {
    store: 'jobsStore',
    fetchAction: 'jobActions.getJobs',
    actions: 'jobActions'
  },
  React.createClass({
    displayName: 'Jobs',

    propTypes: {
      children: PropTypes.element,
      jobActions: PropTypes.object,
      jobs: PropTypes.array
    },
    mixins: [Navigation],

    handleJobClick(id) {
      const { jobActions } = this.props;
      if (!id) {
        return null;
      }
      jobActions.findJob(id);
      this.transitionTo(`/jobs/${id}`);
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
      const { children, jobs } = this.props;

      return (
        <div>
          <Row>
            <Jumbotron>
              <h1>Free Code Camps' Job Board</h1>
              <p>
                Need to find the best junior developers?
                Want to find dedicated developers eager to join your company?
                Sign up now to post your job!
              </p>
              <Button
                bsSize='large'
                className='signup-btn'>
                Try the first month 20% off!
              </Button>
            </Jumbotron>
          </Row>
          <Row>
            { this.renderChild(children, jobs) ||
              this.renderList(this.handleJobClick, jobs) }
            </Row>
        </div>
      );
    }
  })
);

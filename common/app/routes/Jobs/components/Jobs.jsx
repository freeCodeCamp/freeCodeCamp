import React, { cloneElement, PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { History } from 'react-router';
import { Button, Panel, Row, Col } from 'react-bootstrap';

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
          <Row>
            <Col
              md={ 10 }
              mdOffset= { 1 }
              xs={ 12 }>
              <h1 className='text-center'>Job Opportunities</h1>
              <Row className='text-center'>
                <Col
                  xs={ 12 }
                  xsOffset={ 0 }>
                  <p className='text-center large-p'>
                    Talented web developers with strong portfolios are eager
                    to work for your company.
                  </p>
                </Col>
                <Col
                  xs={ 12 }
                  sm={ 8 }
                  smOffset={ 2 }>
                  <Button
                    bsSize='large'
                    className='signup-btn btn-block'
                    onClick={ ()=> {this.history.pushState(null, "/jobs/new")} }>
                    Post a job: $200 for 30 days + weekly tweets
                  </Button>
                  <div className='button-spacer' />
                  <a href="https://twitter.com/CamperJobs" className="twitter-follow-button" data-show-count="false" data-size="large">Follow @CamperJobs</a>
                  <div className='spacer' />
                </Col>
              </Row>
              <Row>
              { this.renderChild(children, jobs) ||
                this.renderList(this.handleJobClick, jobs) }
              </Row>
            </Col>
          </Row>
        </Panel>
      );
    }
  })
);

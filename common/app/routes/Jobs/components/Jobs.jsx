import React, { cloneElement, PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Button, Panel, Row, Col } from 'react-bootstrap';

import ListJobs from './List.jsx';
import TwitterBtn from './TwitterBtn.jsx';

export default contain(
  {
    store: 'jobsStore',
    fetchAction: 'jobActions.getJobs',
    actions: [
      'appActions',
      'jobActions'
    ]
  },
  React.createClass({
    displayName: 'Jobs',

    propTypes: {
      children: PropTypes.element,
      numOfFollowers: PropTypes.number,
      appActions: PropTypes.object,
      jobActions: PropTypes.object,
      jobs: PropTypes.array,
      showModal: PropTypes.bool
    },

    componentDidMount() {
      const { jobActions } = this.props;
      jobActions.getFollowers();
    },

    handleJobClick(id) {
      const { appActions, jobActions } = this.props;
      if (!id) {
        return null;
      }
      jobActions.findJob(id);
      appActions.updateRoute(`/jobs/${id}`);
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
        numOfFollowers,
        jobs,
        appActions
      } = this.props;

      return (
        <Panel>
          <Row>
            <Col
              md={ 10 }
              mdOffset= { 1 }
              xs={ 12 }>
              <h1 className='text-center'>
                Talented web developers with strong portfolios are eager
                to work for your company
              </h1>
              <Row className='text-center'>
                <Col
                  sm={ 8 }
                  smOffset={ 2 }
                  xs={ 12 }>
                  <Button
                    bsSize='large'
                    className='signup-btn btn-block'
                    onClick={ ()=> {
                      appActions.updateRoute('/jobs/new');
                    }}>
                    Post a job: $200 for 30 days + weekly tweets
                  </Button>
                  <div className='button-spacer' />
                  <TwitterBtn count={ numOfFollowers || 0 } />
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

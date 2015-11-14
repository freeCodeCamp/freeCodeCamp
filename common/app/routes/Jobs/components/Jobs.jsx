import React, { cloneElement, PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Button, Panel, Row, Col } from 'react-bootstrap';

import ListJobs from './List.jsx';

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
                Hire a JavaScript engineer who's experienced in HTML5,
                Node.js, MongoDB, and Agile Development.
              </h1>
              <div className='spacer' />
              <Row className='text-center'>
                <Col
                  sm={ 8 }
                  smOffset={ 2 }
                  xs={ 12 }>
                  <Button
                    className='signup-btn btn-block btn-cta'
                    onClick={ ()=> {
                      appActions.updateRoute('/jobs/new');
                    }}>
                    Post a job: $200 for 30 days
                  </Button>
                  <div className='spacer' />
                </Col>
              </Row>
              <div className='spacer' />
              <Row>
                <Col
                  md={ 2 }
                  xs={ 4 }>
                  <img
                    alt={`
                      a photo of Michael Gai, who recently hired a software
                      engineer through Free Code Camp
                    `}
                    className='img-responsive testimonial-image-jobs img-center'
                    src='http://i.imgur.com/tGcAA8H.jpg' />
                </Col>
                <Col
                  md={ 10 }
                  xs={ 8 }>
                    <blockquote>
                      <p>
                        We hired our last developer out of Free Code Camp
                        and couldn't be happier.  Free Code Camp is now
                        our go-to way to bring on pre-screened candidates
                        who are enthusiastic about learning quickly and
                        becoming immediately productive in their new career.
                      </p>
                      <footer>
                        Michael Gai, <cite>CEO at CoNarrative</cite>
                      </footer>
                    </blockquote>
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

import React, { cloneElement, PropTypes } from 'react';
import { connect, compose } from 'redux';
import { createSelector } from 'reselect';
import { push } from 'react-router-redux';

import PureComponent from 'react-pure-render/component';
import { Button, Row, Col } from 'react-bootstrap';

import contain from '../../../utils/professor-x';
import ListJobs from './List.jsx';

import {
  findJob,
  fetchJobs
} from '../redux/actions';

const mapSateToProps = createSelector(
  state => state.jobsApp.jobs.entities,
  state => state.jobsApp.jobs.results,
  state => state.jobsApp,
  (jobsMap, jobsById) => {
    return jobsById.map(id => jobsMap[id]);
  }
);

const bindableActions = {
  findJob,
  fetchJobs,
  push
};

const fetchOptions = {
  fetchAction: 'fetchJobs',
  isPrimed({ jobs }) {
    return !!jobs.results.length;
  }
};

export class Jobs extends PureComponent {
  static displayName = 'Jobs';

  static propTypes = {
    push: PropTypes.func,
    findJob: PropTypes.func,
    fetchJobs: PropTypes.func,
    children: PropTypes.element,
    jobs: PropTypes.array,
    showModal: PropTypes.bool
  };

  createJobClickHandler(id) {
    const { findJob, push } = this.props;
    if (!id) {
      return null;
    }

    return id => {
      findJob(id);
      push(`/jobs/${id}`);
    };
  }

  renderList(handleJobClick, jobs) {
    return (
      <ListJobs
        handleClick={ handleJobClick }
        jobs={ jobs }/>
    );
  }

  renderChild(child, jobs) {
    if (!child) {
      return null;
    }
    return cloneElement(
      child,
      { jobs }
    );
  }

  render() {
    const {
      children,
      jobs
    } = this.props;

    return (
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
                  push('/jobs/new');
                }}>
                Post a job: $1,000
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
                this.renderList(this.createJobClickHandler(), jobs) }
              </Row>
            </Col>
          </Row>
    );
  }
}

export default compose(
  connect(mapSateToProps, bindableActions),
  contain(fetchOptions)
)(Jobs);

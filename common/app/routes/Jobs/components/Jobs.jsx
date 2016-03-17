import React, { cloneElement, PropTypes } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { LinkContainer } from 'react-router-bootstrap';

import PureComponent from 'react-pure-render/component';
import { Button, Row, Col } from 'react-bootstrap';

import contain from '../../../utils/professor-x';
import ListJobs from './List.jsx';

import {
  findJob,
  fetchJobs
} from '../redux/actions';

const mapStateToProps = createSelector(
  state => state.jobsApp.jobs.entities,
  state => state.jobsApp.jobs.results,
  state => state.jobsApp,
  (jobsMap, jobsById) => {
    return { jobs: jobsById.map(id => jobsMap[id]) };
  }
);

const bindableActions = {
  findJob,
  fetchJobs
};

const fetchOptions = {
  fetchAction: 'fetchJobs',
  isPrimed({ jobs }) {
    return jobs.length > 1;
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

  createJobClickHandler() {
    const { findJob } = this.props;

    return (id) => {
      findJob(id);
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
              <LinkContainer to='/jobs/new' >
                <Button className='signup-btn btn-block btn-cta'>
                  Post a job: $1,000
                </Button>
              </LinkContainer>
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
                  src='//i.imgur.com/tGcAA8H.jpg' />
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
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(Jobs);

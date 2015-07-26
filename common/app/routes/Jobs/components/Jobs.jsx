import React, { cloneElement, PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Button, Jumbotron, Row } from 'react-bootstrap';
import ShowJobs from './Show.jsx';

export default contain(
  {
    store: 'jobsStore',
    fetchAction: 'jobActions.getJobs'
  },
  React.createClass({
    displayName: 'Jobs',
    propTypes: {
      children: PropTypes.element,
      jobs: PropTypes.array
    },

    renderShow(jobs) {
      return (
        <ShowJobs jobs={ jobs }/>
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
              this.renderShow(jobs) }
            </Row>
        </div>
      );
    }
  })
);

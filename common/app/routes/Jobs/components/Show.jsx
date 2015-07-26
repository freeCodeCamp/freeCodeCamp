import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Accordion, Thumbnail, Panel } from 'react-bootstrap';

export default contain(
  {
  },
  React.createClass({
    displayName: 'ShowJobs',

    propTypes: {
      jobs: PropTypes.array
    },

    renderJobs(jobs =[]) {
      return jobs.map((
        { id, company, position, description, logo },
        index
      ) => {
        const header = (
          <div>
            <h4 style={{ display: 'inline-block' }}>{ company }</h4>
            <h5
              className='pull-right'
              style={{ display: 'inline-block' }}>
              { position }
            </h5>
          </div>
        );
        return (
          <Panel
            collapsable={ true }
            eventKey={ index }
            header={ header }
            key={ id }>
            <Thumbnail alt='171x180' src={ logo } />
            <p>{ description }</p>

          </Panel>
        );
      });
    },

    render() {
      const { jobs } = this.props;
      return (
        <Accordion>
          { this.renderJobs(jobs) }
        </Accordion>
      );
    }
  })
);

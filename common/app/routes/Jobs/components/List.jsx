import React, { PropTypes } from 'react';
import { PanelGroup, Thumbnail, Panel, Well } from 'react-bootstrap';
import moment from 'moment';

export default React.createClass({
  displayName: 'ListJobs',

  propTypes: {
    jobs: PropTypes.array
  },

  renderJobs(jobs =[]) {
    const thumbnailStyle = {
      backgroundColor: 'white',
      maxHeight: '100px',
      maxWidth: '100px'
    };
    return jobs.map((
      {
        id,
        company,
        position,
        description,
        logo,
        city,
        state,
        email,
        phone,
        postedOn
      },
      index
    ) => {
      const header = (
        <div>
          <h4 style={{ display: 'inline-block' }}>{ company }</h4>
          <h5
            className='pull-right hidden-xs hidden-md'
            style={{ display: 'inline-block' }}>
            { position }
          </h5>
        </div>
      );
      return (
        <Panel
          collapsible={ true }
          eventKey={ index }
          header={ header }
          key={ id }>
          <Well>
            <Thumbnail
              alt={ company + 'company logo' }
              src={ logo }
              style={ thumbnailStyle } />
            <Panel>
              Position: { position }
              Location: { city }, { state }
              <br />
              Contact: { email || phone || 'N/A' }
              <br />
              Posted On: { moment(postedOn).format('MMMM Do, YYYY') }
            </Panel>
            <p>{ description }</p>
          </Well>
        </Panel>
      );
    });
  },

  render() {
    const { jobs } = this.props;
    return (
      <PanelGroup>
        { this.renderJobs(jobs) }
      </PanelGroup>
    );
  }
});

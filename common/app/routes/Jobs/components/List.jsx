import React, { PropTypes } from 'react';
import { PanelGroup, Thumbnail, Panel, Well } from 'react-bootstrap';
import moment from 'moment';

export default React.createClass({
  displayName: 'ListJobs',

  propTypes: {
    handleClick: PropTypes.func,
    jobs: PropTypes.array
  },

  renderJobs(handleClick, jobs =[]) {
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
        isHighlighted,
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
          bsStyle={ isHighlighted ? 'warning' : 'default' }
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
            <p onClick={ () => handleClick(id) }>{ description }</p>
          </Well>
        </Panel>
      );
    });
  },

  render() {
    const {
      handleClick,
      jobs
    } = this.props;

    return (
      <PanelGroup>
        { this.renderJobs(handleClick, jobs) }
      </PanelGroup>
    );
  }
});

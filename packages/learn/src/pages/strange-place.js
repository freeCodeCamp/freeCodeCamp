import React from 'react';
// import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';

import './strange-place.css';

const propTypes = {};

function StrangePlace(props) {
  console.log(props);
  return (
    <div className='strange-place-container'>
      <Panel bsStyle='primary'>
        <Panel.Heading>
          <Panel.Title componentClass='h3'>Whoops!</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Something really weird happend and we are not sure what.</p>
          <hr />
          <p>
            Could you help us fix this by supplying annonymous application data
            for us to look over?
          </p>
          <p>We can show you exactly what we would like to send</p>
        </Panel.Body>
      </Panel>
    </div>
  );
}

StrangePlace.displayName = 'StrangePlace';
StrangePlace.propTypes = propTypes;

export default StrangePlace;

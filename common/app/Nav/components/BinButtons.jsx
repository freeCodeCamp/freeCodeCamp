import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import BinButton from './Bin-Button.jsx';

const propTypes = {
  panes: PropTypes.arrayOf(
    PropTypes.shape({
      actionCreator: PropTypes.func.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};

function BinButtons({ panes }) {
  return (
    <div id='bin-buttons'>
      <Nav>
        {
          panes.map(({ content, actionCreator }) => (
            <BinButton
              content={ content }
              handleClick={ actionCreator }
              key={ content }
            />
          ))
        }
      </Nav>
    </div>
  );
}

BinButtons.displayName = 'BinButtons';
BinButtons.propTypes = propTypes;

export default BinButtons;

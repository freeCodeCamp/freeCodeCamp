import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-bootstrap';
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
    <ButtonGroup>
      {
        panes.map(({ content, actionCreator, isHidden }) => (
          <BinButton
            content={ content }
            disabled={ isHidden }
            handleClick={ actionCreator }
            key={ content }
          />
        ))
      }
    </ButtonGroup>
  );
}

BinButtons.displayName = 'BinButtons';
BinButtons.propTypes = propTypes;

export default BinButtons;

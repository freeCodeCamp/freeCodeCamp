import React from 'react';
import PropTypes from 'prop-types';

import './menuButton.css';

const MenuButton = React.forwardRef((props, ref) => (
  <button
    aria-expanded={props.displayMenu}
    className={
      'menu-button' +
      (props.displayMenu ? ' menu-button-open' : '') +
      ' ' +
      (props.className ? props.className : 'top-menu-button')
    }
    onClick={props.onClick}
    ref={ref}
  >
    Menu
  </button>
));

MenuButton.displayName = 'MenuButton';
MenuButton.propTypes = {
  className: PropTypes.string,
  displayMenu: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MenuButton;

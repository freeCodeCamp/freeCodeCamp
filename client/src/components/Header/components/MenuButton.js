import React from 'react';
import PropTypes from 'prop-types';

function MenuButton(props) {
  return (
    <button
      aria-expanded={props.displayMenu}
      className={`menu-button${props.displayMenu ? ' menu-button-open' : ''}${
        props.disableMenuButtonBehavior ? ' menu-button-guide' : ''
      }`}
      onClick={props.toggleDisplayMenu}
      ref={props.menuButtonRef}
    >
      Menu
    </button>
  );
}

MenuButton.displayName = 'MenuButton';
MenuButton.propTypes = {
  disableMenuButtonBehavior: PropTypes.bool.isRequired,
  displayMenu: PropTypes.bool.isRequired,
  menuButtonRef: PropTypes.object.isRequired,
  toggleDisplayMenu: PropTypes.func.isRequired
};

export default MenuButton;

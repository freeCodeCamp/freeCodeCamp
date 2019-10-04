import React from 'react';
import PropTypes from 'prop-types';

const MenuButton = React.forwardRef((props, ref) => {
  return (
    <button
      aria-expanded={props.displayMenu}
      className={
        'toggle-button-nav' + (props.displayMenu ? ' reverse-toggle-color' : '')
      }
      onClick={props.onClick}
      ref={ref}
    >
      Menu
    </button>
  );
});

MenuButton.displayName = 'MenuButton';
MenuButton.propTypes = {
  className: PropTypes.string,
  displayMenu: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MenuButton;

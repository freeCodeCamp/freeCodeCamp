import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const MenuButton = props => {
  const { t } = useTranslation();

  return (
    <button
      aria-expanded={props.displayMenu}
      className={
        'toggle-button-nav' + (props.displayMenu ? ' reverse-toggle-color' : '')
      }
      onClick={props.onClick}
      ref={props.innerRef}
    >
      {t('buttons.menu')}
    </button>
  );
};

MenuButton.displayName = 'MenuButton';
MenuButton.propTypes = {
  className: PropTypes.string,
  displayMenu: PropTypes.bool.isRequired,
  innerRef: PropTypes.object,
  onClick: PropTypes.func.isRequired
};

export default MenuButton;

import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../../redux/prop-types';

interface MenuButtonProps {
  className?: string;
  displayMenu?: boolean;
  innerRef?: RefObject<HTMLButtonElement>;
  user?: User;
}

const MenuButton = ({
  displayMenu,
  innerRef
}: MenuButtonProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <button
      aria-expanded={displayMenu}
      className={`exposed-button-nav${
        displayMenu ? ' reverse-toggle-color' : ''
      }`}
      id='toggle-button-nav'
      ref={innerRef}
    >
      <span className='menu-btn-icon'>
        <FontAwesomeIcon icon={faBars} />
        <span className='sr-only'>{t('buttons.menu')}</span>
      </span>
      <span className='menu-btn-text'>{t('buttons.menu')}</span>
    </button>
  );
};

MenuButton.displayName = 'MenuButton';

export default MenuButton;

import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';

export interface MenuButtonProps {
  className?: string;
  displayMenu?: boolean;
  innerRef?: RefObject<HTMLButtonElement>;
  showMenu: () => void;
  hideMenu: () => void;
}

const MenuButton = ({
  displayMenu,
  innerRef,
  showMenu,
  hideMenu
}: MenuButtonProps): JSX.Element => {
  const { t } = useTranslation();

  // Will close the menu if the user Shift+Tabs from the menu button.
  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.universal-nav-right') &&
      displayMenu
    ) {
      hideMenu();
    }
  };

  const handleClick = (): void => {
    if (displayMenu) {
      hideMenu();
      return;
    }
    showMenu();
  };

  return (
    <button
      aria-expanded={displayMenu}
      className={`toggle-button-nav${
        displayMenu ? ' reverse-toggle-color' : ''
      }`}
      id='toggle-button-nav'
      onBlur={handleBlur}
      onClick={handleClick}
      ref={innerRef}
    >
      <span className='menu-btn-icon'>
        <svg viewBox='0 0 100 20' width='20' height='30' fill='white'>
          <rect width='100' height='10' />
          <rect y='20' width='100' height='10' />
          <rect y='40' width='100' height='10' />
        </svg>
      </span>
      <span className='menu-btn-text'>{t('buttons.menu')}</span>
    </button>
  );
};

MenuButton.displayName = 'MenuButton';

export default MenuButton;

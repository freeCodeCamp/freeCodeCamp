import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface MenuButtonProps {
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
      !event.relatedTarget.closest('.nav-list') &&
      !event.relatedTarget.closest('.fcc_searchBar') &&
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
      className='exposed-button-nav'
      id='toggle-button-nav'
      data-playwright-test-label='header-menu-button'
      onBlur={handleBlur}
      onClick={handleClick}
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

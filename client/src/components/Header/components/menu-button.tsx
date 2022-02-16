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

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.nav-list') &&
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
    <>
      <button
        aria-expanded={displayMenu}
        className={
          'toggle-button-nav' + (displayMenu ? ' reverse-toggle-color' : '')
        }
        id='toggle-button-nav'
        onBlur={handleBlur}
        onClick={handleClick}
        ref={innerRef}
      >
        {t('buttons.menu')}
      </button>
    </>
  );
};

MenuButton.displayName = 'MenuButton';

export default MenuButton;

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import AuthOrProfile from './auth-or-profile';

export interface MenuButtonProps {
  className?: string;
  displayMenu?: boolean;
  innerRef?: RefObject<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  user?: Object;
}

const MenuButton = ({
  displayMenu,
  innerRef,
  onClick,
  user
}: MenuButtonProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <button
        aria-expanded={displayMenu}
        className={
          'toggle-button-nav' + (displayMenu ? ' reverse-toggle-color' : '')
        }
        onClick={onClick}
        ref={innerRef}
      >
        {t('buttons.menu')}
      </button>
      <span className='navatar'>
        <AuthOrProfile user={user} />
      </span>
    </>
  );
};

MenuButton.displayName = 'MenuButton';

export default MenuButton;

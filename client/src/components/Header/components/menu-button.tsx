import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const MenuButton = (): JSX.Element => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.nav-list') &&
      !event.relatedTarget.closest('.fcc_searchBar') &&
      showMenu
    ) {
      setShowMenu(false);
    }
  };

  const handleClick = (): void => {
    if (showMenu) {
      setShowMenu(false);
      return;
    }
    setShowMenu(true);
  };

  return (
    <button
      aria-expanded={showMenu}
      className={`exposed-button-nav${showMenu ? ' reverse-toggle-color' : ''}`}
      id='toggle-button-nav'
      onBlur={handleBlur}
      onClick={handleClick}
      ref={menuButtonRef}
    >
      <span className='menu-btn-icon'>
        <FontAwesomeIcon icon={faBars} />
        <span className='sr-only'>{t('buttons.menu')}</span>
      </span>
      <span className='menu-btn-text'>{t('buttons.menu')}</span>
    </button>
  );
};

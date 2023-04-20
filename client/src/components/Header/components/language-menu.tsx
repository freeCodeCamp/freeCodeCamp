import React, { useState, useRef } from 'react';
import type { TFunction } from 'i18next';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { clientLocale } from '../../../../../config/env.json';
import {
  availableLangs,
  LangNames,
  LangCodes,
  hiddenLangs
} from '../../../../../config/i18n';
import { hardGoTo as navigate } from '../../../redux/actions';
import createLanguageRedirect from '../../create-language-redirect';
import LanguageGlobe from '../../../assets/icons/language-globe';

const locales = availableLangs.client.filter(
  lang => !hiddenLangs.includes(lang)
);

const mapDispatchToProps = {
  navigate
};

interface LanguageMenuProps {
  fetchState: { pending: boolean };
  t: TFunction;
  navigate?: (location: string) => void;
}

export const LanguageMenu = ({
  fetchState,
  t,
  navigate
}: LanguageMenuProps): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // const handleMenuButtonBlue = (
  //   event: React.FocusEvent<HTMLButtonElement>
  // ): void => {
  //   if (
  //     event.relatedTarget &&
  //     !event.relatedTarget.closest('.universal-nav-right') &&
  //     showMenu
  //   ) {
  //     setShowMenu(false);
  //   }
  // };

  const handleClick = (): void => {
    if (showMenu) {
      setShowMenu(false);
      return;
    }
    setShowMenu(true);
  };

  // const getPreviousMenuItem = (target: HTMLButtonElement | null) => {
  //   const previousSibling =
  //     target?.closest('.nav-list > li')?.previousElementSibling;
  //   const previousButton = previousSibling?.querySelector<
  //     HTMLButtonElement | HTMLAnchorElement
  //   >('a, button');
  //   return previousButton ?? menuButtonRef.current;
  // };

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();

    const newLanguage = event.currentTarget.dataset.value as string;
    // If user selected cancel then close menu and put focus on button
    // Put focus on menu button first so we don't lose focus
    // for screen readers.
    menuButtonRef.current?.focus();
    setShowMenu(false);
    // If user selected the current language then we just close the menu
    if (newLanguage === clientLocale || newLanguage === undefined) {
      return;
    }
    const path = createLanguageRedirect({
      clientLocale,
      lang: newLanguage
    });
    if (navigate) {
      return navigate(path);
    }
  };

  const handleMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (event.key === 'Escape') {
      menuButtonRef.current?.focus();
      setShowMenu(false);
      event.preventDefault();
    }
  };

  // ToDo: make sure that it focus on the menu button when the language menu is closed (didn't test yet)
  // Added to the last item in the nav menu. Will close the menu if
  // the user Tabs out of the menu.
  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.nav-list') &&
      event.relatedTarget !== menuButtonRef.current
    ) {
      setShowMenu(false);
    }
  };

  const { pending } = fetchState;

  return pending ? (
    <div className='nav-skeleton' />
  ) : (
    <>
      <button
        aria-controls='nav-lang-menu'
        aria-haspopup='true'
        className='lang-button-nav'
        id='nav-lang-button'
        onClick={handleClick}
        onBlur={handleBlur}
        onKeyDown={handleMenuKeyDown}
      >
        <span>{t('buttons.change-language')}</span>
        <LanguageGlobe />
      </button>
      <ul
        aria-labelledby='toggle-button-nav'
        id='nav-lang-menu'
        role='menu'
        className={`nav-list${showMenu ? ' nav-lang-menu' : ''} `}
      >
        {locales.map(lang => (
          <li key={'lang-' + lang} role='none'>
            <button
              {...(clientLocale === lang && { 'aria-current': true })}
              className='nav-link nav-lang-menu-option'
              data-value={lang}
              {...(LangCodes[lang] && {
                lang: LangCodes[lang]
              })}
              onClick={handleLanguageChange}
              role='menuitem'
              tabIndex={-1}
            >
              {LangNames[lang]}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(LanguageMenu));

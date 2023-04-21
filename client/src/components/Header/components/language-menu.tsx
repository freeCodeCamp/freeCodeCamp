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

  const handleClick = (): void => {
    if (showMenu) {
      setShowMenu(false);
      return;
    }
    setShowMenu(true);
  };

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();

    const newLanguage = event.currentTarget.dataset.value;
    menuButtonRef.current?.focus();
    // If user selected the current language then we just close the menu
    setShowMenu(false);
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

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.nav-list') &&
      event.relatedTarget !== menuButtonRef.current
    ) {
      setShowMenu(false);
    }
  };

  const handleLastLangaugeKeys = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const DoKeyPress = new Map<string, { select: () => void }>([
      [
        'Escape',
        {
          select: () => {
            menuButtonRef.current?.focus();
            setShowMenu(false);
            event.preventDefault();
          }
        }
      ],
      [
        'Tab',
        {
          select: () => {
            const camperPressedTheShiftKey = event.shiftKey;
            if (!camperPressedTheShiftKey) {
              setShowMenu(false);
            }
          }
        }
      ]
    ]);
    DoKeyPress.get(event.key)?.select();
  };

  const handleFirstLangaugeKeys = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const DoKeyPress = new Map<string, { select: () => void }>([
      [
        'Escape',
        {
          select: () => {
            menuButtonRef.current?.focus();
            setShowMenu(false);
            event.preventDefault();
          }
        }
      ],
      [
        'Tab',
        {
          select: () => {
            const camperPressedTheShiftKey = event.shiftKey;
            if (camperPressedTheShiftKey) {
              setShowMenu(false);
            }
          }
        }
      ]
    ]);
    DoKeyPress.get(event.key)?.select();
  };

  const { pending } = fetchState;

  const getHandleLanguageKeys = (length: number) => {
    if (length === 0) {
      return handleFirstLangaugeKeys;
    } else if (length === locales.length - 1) {
      return handleLastLangaugeKeys;
    } else handleMenuKeyDown;
  };

  return pending ? (
    <div className='nav-skeleton' />
  ) : (
    <>
      <button
        aria-controls='nav-lang-menu'
        aria-haspopup='true'
        className='lang-button-nav'
        onClick={handleClick}
        onBlur={handleBlur}
        onKeyDown={handleMenuKeyDown}
        ref={menuButtonRef}
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
        {locales.map((lang, index) => (
          <li key={'lang-' + lang} role='none'>
            <button
              {...(clientLocale === lang && { 'aria-current': true })}
              className='nav-link nav-lang-menu-option'
              data-value={lang}
              {...(LangCodes[lang] && {
                lang: LangCodes[lang]
              })}
              onClick={handleLanguageChange}
              onKeyDown={getHandleLanguageKeys(index)}
              role='menuitem'
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

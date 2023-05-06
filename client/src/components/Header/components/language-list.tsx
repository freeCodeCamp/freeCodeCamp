import React, { useState, useRef, useEffect } from 'react';
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

interface LanguageListProps {
  t: TFunction;
  navigate?: (location: string) => void;
}

const LanguageList = ({ t, navigate }: LanguageListProps): JSX.Element => {
  const [showList, setShowList] = useState(false);
  const listButtonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (): void => {
    if (showList) {
      setShowList(false);
      return;
    }
    setShowList(true);
  };

  const handleClickOutside = () => {
    if (showList) setShowList(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showList]);

  // the accessibility tree just needs a little more time to pick up the change.
  // This function allows us to set aria-expanded to false and then delay just a bit before setting focus on the button
  const closeAndFocus = () => {
    listButtonRef.current?.classList.add('force-show');
    setShowList(false);
    setTimeout(() => {
      listButtonRef.current?.focus();
      listButtonRef.current?.classList.remove('force-show');
    }, 100);
  };

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const selectedLanguage = event.currentTarget.dataset.value;

    event.preventDefault();
    if (selectedLanguage === undefined) return;
    const path = createLanguageRedirect({
      clientLocale,
      lang: selectedLanguage
    });
    if (navigate) {
      return navigate(path);
    }
    closeAndFocus();
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeAndFocus();
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.nav-list') &&
      event.relatedTarget !== listButtonRef.current
    ) {
      setShowList(false);
    }
  };

  const handleLastLangaugeKeys = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const DoKeyPress = new Map<string, { select: () => void }>([
      [
        'Escape',
        {
          select: () => {
            event.preventDefault();
            closeAndFocus();
          }
        }
      ],
      [
        'Tab',
        {
          select: () => {
            const camperPressedTheShiftKey = event.shiftKey;
            if (!camperPressedTheShiftKey) {
              setShowList(false);
            }
          }
        }
      ]
    ]);
    DoKeyPress.get(event.key)?.select();
  };

  const getHandleLanguageKeys = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    languagePosition: number
  ) => {
    const lastLanguage = locales.length - 1;
    if (languagePosition === lastLanguage) {
      return handleLastLangaugeKeys(event);
    } else handleMenuKeyDown(event);
  };
  return (
    <>
      <button
        id='toggle-lang-button'
        className='lang-button-nav'
        title={t('buttons.change-language')}
        aria-label={t('buttons.change-language')}
        aria-controls='nav-lang-list'
        aria-expanded={showList}
        ref={listButtonRef}
        onBlur={handleBlur}
        onClick={handleClick}
      >
        <LanguageGlobe />
      </button>
      <ul
        id='nav-lang-list'
        className='nav-list'
        aria-labelledby='toggle-lang-button'
      >
        {locales.map((lang, index) => (
          <li key={'lang-' + lang}>
            <button
              className='nav-link nav-lang-list-option'
              data-value={lang}
              onClick={handleLanguageChange}
              onKeyDown={event => getHandleLanguageKeys(event, index)}
              {...(clientLocale === lang && { 'aria-current': true })}
              {...(LangCodes[lang] && {
                lang: LangCodes[lang]
              })}
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
)(withTranslation()(LanguageList));

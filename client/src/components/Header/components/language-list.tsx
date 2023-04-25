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

interface LanguageListProps {
  t: TFunction;
  navigate?: (location: string) => void;
}

export const LanguageList = ({
  t,
  navigate
}: LanguageListProps): JSX.Element => {
  const [showList, setShowList] = useState(false);
  const listButtonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (): void => {
    if (showList) {
      setShowList(false);
      return;
    }
    setShowList(true);
  };

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const selectedLanguage = event.currentTarget.dataset.value;
    const isSelecetedCurrentLanguage =
      selectedLanguage === clientLocale || selectedLanguage === undefined;

    event.preventDefault();
    listButtonRef.current?.focus();
    setShowList(false);
    if (isSelecetedCurrentLanguage) {
      return;
    }
    const path = createLanguageRedirect({
      clientLocale,
      lang: selectedLanguage
    });
    if (navigate) {
      return navigate(path);
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      listButtonRef.current?.focus();
      setShowList(false);
      event.preventDefault();
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
            listButtonRef.current?.focus();
            setShowList(false);
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
        onKeyDown={handleMenuKeyDown}
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

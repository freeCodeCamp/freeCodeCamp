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
  fetchState: { pending: boolean };
  t: TFunction;
  navigate?: (location: string) => void;
}

export const LanguageList = ({
  fetchState,
  t,
  navigate
}: LanguageListProps): JSX.Element => {
  const [showList, setShowList] = useState(false);
  const listButtonRef = useRef<HTMLButtonElement>(null);
  const { pending } = fetchState;

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

  const handleMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
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
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
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

  const handleFirstLangaugeKeys = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
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
            if (camperPressedTheShiftKey) {
              setShowList(false);
            }
          }
        }
      ]
    ]);
    DoKeyPress.get(event.key)?.select();
  };

  const getHandleLanguageKeys = (languagePosition: number) => {
    const lastLanguage = locales.length - 1;

    if (languagePosition === 0) {
      return handleFirstLangaugeKeys;
    } else if (languagePosition === lastLanguage) {
      return handleLastLangaugeKeys;
    } else handleMenuKeyDown;
  };

  return pending ? (
    <div className='nav-skeleton' />
  ) : (
    <>
      <button
        aria-controls='nav-lang-list'
        aria-expanded='true'
        className='lang-button-nav'
        onClick={handleClick}
        onBlur={handleBlur}
        onKeyDown={handleMenuKeyDown}
        title={t('buttons.change-language')}
        aria-label={t('buttons.change-language')}
        ref={listButtonRef}
      >
        <LanguageGlobe />
      </button>
      <ul
        aria-labelledby='toggle-button-nav'
        id='nav-lang-list'
        className={`nav-list${showList ? ' nav-lang-list' : ''} `}
      >
        {locales.map((lang, index) => (
          <li key={'lang-' + lang} role='none'>
            <button
              {...(clientLocale === lang && { 'aria-current': true })}
              className='nav-link nav-lang-list-option'
              data-value={lang}
              {...(LangCodes[lang] && {
                lang: LangCodes[lang]
              })}
              onClick={handleLanguageChange}
              onKeyDown={getHandleLanguageKeys(index)}
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

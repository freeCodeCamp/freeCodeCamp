import { Form } from '@freecodecamp/react-bootstrap';
import React, { ChangeEvent, useState, useRef } from 'react';
import store from 'store';
import { useTranslation } from 'react-i18next';
import { Spacer } from '../helpers';
import { getScrollbarWidth } from '../../utils/scrollbar-width';
import './scrollbar-width.css';

const ticks = [5, 10, 15, 20, 25];

export default function ScrollbarWidthSettings(): JSX.Element {
  const { t } = useTranslation();
  const [scrollbarWidth, setScrollbarWidth] = useState(getScrollbarWidth());
  const rangeRef = useRef<HTMLInputElement>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = Number(event.target.value);
    setScrollbarWidth(inputValue);
    store.set('monacoScrollbarWidth', inputValue);
  }

  function handleClick(event: React.MouseEvent<HTMLSpanElement>) {
    const target = event.target as HTMLSpanElement;
    const newScrollbarWidth = Number(target.dataset.value);

    if (!rangeRef?.current || !ticks.includes(newScrollbarWidth)) return;
    rangeRef.current.focus();

    if (newScrollbarWidth === scrollbarWidth) return;
    rangeRef.current.value = String(newScrollbarWidth);
    setScrollbarWidth(newScrollbarWidth);
    store.set('monacoScrollbarWidth', newScrollbarWidth);
  }

  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

  return (
    <Form inline={true} onSubmit={(e: React.FormEvent) => e.preventDefault()}>
      <label htmlFor='scrollbar-width-slider'>
        {t('settings.scrollbar-width')}:
        <span
          className='scrollbar-width-preview'
          style={{ width: `${scrollbarWidth}px` } as React.CSSProperties}
        />
      </label>
      <div className='scrollbar-width-container'>
        <div className='scrollbar-width-ticks' aria-hidden='true'>
          {ticks.map(tick => (
            <span
              className='tick'
              onClick={handleClick}
              data-value={tick}
              key={`tick${tick}`}
              {...(scrollbarWidth === tick && { 'data-current': true })}
            />
          ))}
        </div>
        <input
          type='range'
          min='5'
          max='25'
          step='5'
          id='scrollbar-width-slider'
          className='scrollbar-width'
          defaultValue={scrollbarWidth}
          onInput={handleChange}
          ref={rangeRef}
        />
        <div className='scrollbar-width-numbers' aria-hidden='true'>
          {ticks.map(tick => (
            <span
              onClick={handleClick}
              data-value={tick}
              key={`num${tick}`}
              {...(scrollbarWidth === tick && { className: 'selected' })}
            >
              {tick}
            </span>
          ))}
        </div>
      </div>
      <Spacer size='medium'></Spacer>
    </Form>
  );
}

ScrollbarWidthSettings.displayName = 'ScrollbarWidthSettings';

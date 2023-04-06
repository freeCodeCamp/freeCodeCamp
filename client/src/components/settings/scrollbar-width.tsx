import { Form } from '@freecodecamp/react-bootstrap';
import React, { ChangeEvent, useState } from 'react';
import store from 'store';
import { useTranslation } from 'react-i18next';
import { Spacer } from '../helpers';
import './scrollbar-width.css';

export default function ScrollbarWidthSettings(): JSX.Element {
  const { t } = useTranslation();
  const [scrollbarWidth, setScrollbarWidth] = useState(getScrollbarWidth());

  function getScrollbarWidth() {
    const storedWidth = parseInt(store.get('monacoScrollbarWidth'));
    return storedWidth >= 5 || storedWidth <= 25 ? storedWidth : 5;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = Number(event.target.value);
    setScrollbarWidth(inputValue);
    store.set('monacoScrollbarWidth', inputValue);
  }

  return (
    <Form inline={true} onSubmit={(e: React.FormEvent) => e.preventDefault()}>
      <label htmlFor='scrollbar-width-slider'>
        {t('settings.scrollbar-width')}
      </label>
      <input
        type='range'
        min='5'
        max='25'
        step='5'
        id='scrollbar-width-slider'
        className='scrollbar-width'
        defaultValue={scrollbarWidth}
        onInput={handleChange}
      />
      <div className='scrollbar-width-numbers' aria-hidden='true'>
        <span {...(scrollbarWidth === 5 && { className: 'selected' })}>5</span>
        <span {...(scrollbarWidth === 10 && { className: 'selected' })}>
          10
        </span>
        <span {...(scrollbarWidth === 15 && { className: 'selected' })}>
          15
        </span>
        <span {...(scrollbarWidth === 20 && { className: 'selected' })}>
          20
        </span>
        <span {...(scrollbarWidth === 25 && { className: 'selected' })}>
          25
        </span>
      </div>
      <Spacer size='medium'></Spacer>
    </Form>
  );
}

ScrollbarWidthSettings.displayName = 'ScrollbarWidthSettings';

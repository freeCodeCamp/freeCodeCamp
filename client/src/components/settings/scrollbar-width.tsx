import { Form } from '@freecodecamp/react-bootstrap';
import React, { ChangeEvent, useState } from 'react';
import store from 'store';
import { useTranslation } from 'react-i18next';
import { Spacer } from '../helpers';
import './scrollbar-width.css';

export default function ScrollbarWidthSettings(): JSX.Element {
  const { t } = useTranslation();
  const [scrollbarWidth, setScrollbarWidth] = useState(getScrollbarWidth());
  const tickHeight = 10;
  const tickWidth = 3;

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
        {t('settings.scrollbar-width')}:{' '}
        <span aria-hidden='true'>{scrollbarWidth}</span>
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
      <svg
        role='presentation'
        width='100%'
        height={tickHeight}
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          className='range__tick'
          x='8'
          y='0'
          width={tickWidth}
          height={tickHeight}
        ></rect>
        <rect
          className='range__tick'
          x='25.6%'
          y='0'
          width={tickWidth}
          height={tickHeight}
        ></rect>
        <rect
          className='range__tick'
          x='50%'
          y='0'
          width={tickWidth}
          height={tickHeight}
        ></rect>
        <rect
          className='range__tick'
          x='74%'
          y='0'
          width={tickWidth}
          height={tickHeight}
        ></rect>
        <rect
          className='range__tick'
          x='98.25%'
          y='0'
          width={tickWidth}
          height={tickHeight}
        ></rect>
      </svg>
      <Spacer size='medium'></Spacer>
    </Form>
  );
}

ScrollbarWidthSettings.displayName = 'ScrollbarWidthSettings';

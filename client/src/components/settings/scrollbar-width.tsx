import { Form } from '@freecodecamp/react-bootstrap';
import React, { ChangeEvent, useState } from 'react';
import store from 'store';
import { useTranslation } from 'react-i18next';
import { Spacer } from '../helpers';

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
        defaultValue={scrollbarWidth}
        className='soundbar'
        onInput={handleChange}
      />
      <Spacer size='medium'></Spacer>
    </Form>
  );
}

ScrollbarWidthSettings.displayName = 'ScrollbarWidthSettings';

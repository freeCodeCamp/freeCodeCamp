import React from 'react';
import { Button } from '@freecodecamp/react-bootstrap';
import type { TFunction } from 'react-i18next';

type Props = {
  isDisabled: boolean;
  t: TFunction;
  handleAdd: () => void;
};

const PreventableButton = ({ handleAdd, t, isDisabled }: Props) => (
  <Button
    disabled={isDisabled}
    block={true}
    bsSize='lg'
    bsStyle='primary'
    onClick={handleAdd}
    type='button'
  >
    {t('buttons.add-portfolio')}
  </Button>
);

export default PreventableButton;

import React from 'react';
import { Button } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

function BlockSaveButton(props?: Record<string, unknown>): JSX.Element {
  const { t } = useTranslation();
  return (
    <Button block={true} bsStyle='primary' {...props} type='submit'>
      {props?.children || t('buttons.save')}
    </Button>
  );
}

BlockSaveButton.displayName = 'BlockSaveButton';

export default BlockSaveButton;

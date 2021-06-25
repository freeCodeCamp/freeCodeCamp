import React from 'react';
import { Button } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

function BlockSaveButton({
  children,
  ...restProps
}: {
  children?: React.ReactNode;
}): JSX.Element {
  const { t } = useTranslation();

  return (
    <Button
      block={true}
      bsSize='lg'
      bsStyle='primary'
      type='submit'
      {...restProps}
    >
      {children || t('buttons.save')}
    </Button>
  );
}

BlockSaveButton.displayName = 'BlockSaveButton';

export default BlockSaveButton;

import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';

function BlockSaveButton({
  children,
  bgSize,
  ...restProps
}: {
  children?: React.ReactNode;
  disabled?: boolean;
  bgSize?: string;
}): JSX.Element {
  const { t } = useTranslation();

  return (
    <Button
      block={true}
      bsSize={bgSize || 'lg'}
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

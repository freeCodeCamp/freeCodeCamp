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
      // the button is used to submit solutions in projects that require external URL
      // these buttons don't use bgSize, that's why the bgSize is optional.
      bsSize={bgSize}
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

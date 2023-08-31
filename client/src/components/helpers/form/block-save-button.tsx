import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, type ButtonProps } from '@freecodecamp/ui';

function BlockSaveButton({
  children,
  size,
  ...restProps
}: {
  children?: React.ReactNode;
  disabled?: boolean;
  size?: ButtonProps['size'];
}): JSX.Element {
  const { t } = useTranslation();

  return (
    <Button
      block={true}
      // the button is used to submit solutions in projects that require external URL
      // these buttons don't use size, that's why the size is optional.
      size={size}
      variant='primary'
      type='submit'
      {...restProps}
    >
      {children || t('buttons.save')}
    </Button>
  );
}

BlockSaveButton.displayName = 'BlockSaveButton';

export default BlockSaveButton;

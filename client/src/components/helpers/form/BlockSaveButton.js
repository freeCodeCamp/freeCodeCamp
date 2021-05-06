import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function BlockSaveButton({ children, ...restProps }) {
  const { t } = useTranslation();

  return (
    <Button
      block={true}
      bsSize='lg'
      type='submit'
      variant='primary'
      {...restProps}
    >
      {children || t('buttons.save')}
    </Button>
  );
}

BlockSaveButton.displayName = 'BlockSaveButton';
BlockSaveButton.propTypes = {
  children: PropTypes.any
};

export default BlockSaveButton;

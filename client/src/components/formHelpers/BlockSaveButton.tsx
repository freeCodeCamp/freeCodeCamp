import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

function BlockSaveButton(props) {
  const { t } = useTranslation();
  return (
    <Button block={true} bsStyle='primary' {...props} type='submit'>
      {props.children || t('buttons.save')}
    </Button>
  );
}

BlockSaveButton.displayName = 'BlockSaveButton';
BlockSaveButton.propTypes = {
  children: PropTypes.any
};

export default BlockSaveButton;

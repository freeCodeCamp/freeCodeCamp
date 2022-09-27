import React, { useState, useEffect } from 'react';
import { Button } from '@freecodecamp/react-bootstrap';

const PreventableButton = ({ handleAdd, t, portfolio }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    const found = portfolio.find(item => !item.isSaved);
    return found ? setIsDisabled(true) : setIsDisabled(false);
  }, [portfolio.length, portfolio]);

  return (
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
};

export default PreventableButton;

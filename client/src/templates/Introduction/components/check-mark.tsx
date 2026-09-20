import React from 'react';
import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';

function CheckMark({ isCompleted }: { isCompleted: boolean }): JSX.Element {
  return isCompleted ? (
    <GreenPass hushScreenReaderText />
  ) : (
    <GreenNotCompleted hushScreenReaderText />
  );
}

export default CheckMark;

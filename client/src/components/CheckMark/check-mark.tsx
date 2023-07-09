import React from 'react';
import GreenPass from '../../assets/icons/green-pass';
import GreenNotCompleted from '../../assets/icons/green-not-completed';

export function CheckMark({
  isCompleted
}: {
  isCompleted: boolean;
}): JSX.Element {
  return isCompleted ? (
    <GreenPass hushScreenReaderText />
  ) : (
    <GreenNotCompleted hushScreenReaderText />
  );
}

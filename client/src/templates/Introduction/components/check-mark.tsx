import React from 'react';
import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';

export const CheckMark = ({ isCompleted }: { isCompleted: boolean }) =>
  isCompleted ? <GreenPass /> : <GreenNotCompleted />;

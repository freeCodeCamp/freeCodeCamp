import React from 'react';
import GreenPass from '../../../assets/icons/green-pass';

interface LowerJawStatusProps {
  children: React.ReactNode;
  congratulationText: string;
  showFeedback: boolean;
  testText: string;
}

export const LowerJawStatus = ({
  children,
  congratulationText,
  showFeedback,
  testText
}: LowerJawStatusProps) => {
  return (
    <div className='test-status fade-in' aria-hidden={showFeedback}>
      <div className='status-icon' aria-hidden='true'>
        <span>
          <GreenPass />
        </span>
      </div>
      <div className='test-status-description'>
        <h2>{testText}</h2>
        <p className='status'>
          {congratulationText}
          {children}
        </p>
      </div>
    </div>
  );
};

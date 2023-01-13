import React from 'react';
import GreenPass from '../../../assets/icons/green-pass';

export const RenderTestStatus = ({
  children,
  congratulationText,
  showFeedback,
  testText
}: {
  children: React.ReactNode;
  congratulationText: string;
  showFeedback: boolean;
  testText: string;
}) => {
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

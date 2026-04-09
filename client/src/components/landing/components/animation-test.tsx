import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../landing.css';

const AnimationTest = (): JSX.Element => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className='animation-test-container'
      style={{
        padding: '2rem',
        textAlign: 'center',
        background: '#0a0a23',
        color: 'white',
        borderTop: '2px solid #3b3b4f'
      }}
    >
      <div 
        style={{
          transition: 'all 2s ease-in-out',
          transform: isVisible ? 'scale(1) rotate(360deg)' : 'scale(0) rotate(0deg)',
          opacity: isVisible ? 1 : 0
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>Animation Test Feature</h2>
        <p>This is a custom animation added for testing purposes!</p>
        <div style={{
           display: 'inline-block',
           marginTop: '20px',
           width: '100px',
           height: '100px',
           background: 'linear-gradient(45deg, #fecc4c, #ffac33)',
           borderRadius: isVisible ? '50%' : '10%',
           transition: 'all 3s ease',
        }} />
      </div>
    </div>
  );
};

export default AnimationTest;

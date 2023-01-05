import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';

import './loader.css';

interface Props {
  fullScreen?: boolean;
  delay?: number;
}
function Loader({ fullScreen, delay }: Props): JSX.Element {
  const [showSpinner, setShowSpinner] = useState(!delay);
  useEffect(() => {
    if (!showSpinner) {
      const timerId = setTimeout(() => setShowSpinner(true), delay);
      return () => clearTimeout(timerId);
    }
  }, [setShowSpinner, showSpinner, delay]);
  return (
    <div
      className={`fcc-loader ${fullScreen ? 'full-screen-wrapper' : ''}`}
      data-testid='fcc-loader'
    >
      {showSpinner && <Spinner name='line-scale-pulse-out' />}
    </div>
  );
}

Loader.displayName = 'Loader';

export default Loader;

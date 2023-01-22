import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';

import './loader.css';

interface LoaderProps {
  fullScreen?: boolean;
  timeout?: number;
}
function Loader({ fullScreen, timeout }: LoaderProps): JSX.Element {
  const [showSpinner, setShowSpinner] = useState(!timeout);
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (!showSpinner) {
      timerId = setTimeout(() => setShowSpinner(true), timeout);
    }
    return () => clearTimeout(timerId);
  }, [setShowSpinner, showSpinner, timeout]);
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

import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';

import './loader.css';

function Loader({
  fullScreen,
  timeout
}: {
  fullScreen?: boolean;
  timeout?: number;
}): JSX.Element {
  const [showSpinner, setShowSpinner] = useState(!timeout);
  useEffect(() => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    let timerId: any;
    if (!showSpinner) {
      timerId = setTimeout(() => setShowSpinner(true), timeout);
    }
    return () => clearTimeout(timerId);
  }, [setShowSpinner, showSpinner, timeout]);
  return (
    <div className={`fcc-loader ${fullScreen ? 'full-screen-wrapper' : ''}`}>
      {showSpinner && <Spinner name='line-scale-pulse-out' />}
    </div>
  );
}

Loader.displayName = 'Loader';

export default Loader;

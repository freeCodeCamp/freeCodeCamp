import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';

import './loader.css';

interface Props {
  fullScreen?: boolean;
  delay?: number;
}
function Loader({ fullScreen, delay }: Props): JSX.Element {
  const [showSpinner, setShowSpinner] = useState(!delay);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (fullScreen) {
      const timerId = setTimeout(() => {
        setShowError(true);
        setShowSpinner(false);
      }, 5000);
      return () => clearTimeout(timerId);
    }
  }, [fullScreen]);

  useEffect(() => {
    if (delay) {
      const timerId = setTimeout(() => setShowSpinner(true), delay);
      return () => clearTimeout(timerId);
    }
  }, [delay]);

  return (
    <div
      className={`fcc-loader ${fullScreen ? 'full-screen-wrapper' : ''}`}
      data-testid='fcc-loader'
    >
      {showSpinner && <Spinner name='line-scale-pulse-out' />}
      {showError && (
        <div>
          It looks like this is taking too long to load. Please try refreshing
          the page.
        </div>
      )}
    </div>
  );
}

Loader.displayName = 'Loader';

export default Loader;

import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';

import './loader.css';

interface LoaderProps {
  fullScreen?: boolean;
  loaderDelay?: number;
  messageDelay?: number;
}
function Loader({
  fullScreen,
  loaderDelay,
  messageDelay
}: LoaderProps): JSX.Element {
  const [showSpinner, setShowSpinner] = useState(!loaderDelay);
  const [showMessage, setShowMessage] = useState(!messageDelay);
  useEffect(() => {
    if (loaderDelay) {
      const timerId = setTimeout(() => setShowSpinner(true), loaderDelay);
      return () => clearTimeout(timerId);
    }
  }, [loaderDelay]);

  useEffect(() => {
    if (messageDelay) {
      const timerId = setTimeout(() => setShowMessage(true), messageDelay);
      return () => clearTimeout(timerId);
    }
  }, [messageDelay]);

  return (
    <div
      className={`fcc-loader ${fullScreen ? 'full-screen-wrapper' : ''}`}
      data-testid='fcc-loader'
    >
      {showSpinner && <Spinner name='line-scale-pulse-out' />}
      {showMessage && fullScreen && (
        <>
          <br />
          <p className='text-center'>
            Looks like this is taking longer than usual, please try refreshing
            the page.
          </p>
        </>
      )}
    </div>
  );
}

Loader.displayName = 'Loader';

export default Loader;

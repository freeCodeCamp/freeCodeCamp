import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';

import './loader.css';

interface LoaderProps {
  fullScreen?: boolean;
  delayedLoaderTimer?: number;
  delayedMessageTimer?: number;
}
function Loader({
  fullScreen,
  delayedLoaderTimer,
  delayedMessageTimer
}: LoaderProps): JSX.Element {
  const [showSpinner, setShowSpinner] = useState(!delayedLoaderTimer);
  const [showMessage, setShowMessage] = useState(!delayedMessageTimer);
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (!showSpinner) {
      timerId = setTimeout(() => setShowSpinner(true), delayedLoaderTimer);
    }
    return () => clearTimeout(timerId);
  }, [setShowSpinner, showSpinner, delayedLoaderTimer]);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (!showMessage) {
      timerId = setTimeout(() => setShowMessage(true), delayedMessageTimer);
    }
    return () => clearTimeout(timerId);
  }, [setShowMessage, showMessage, delayedMessageTimer]);

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

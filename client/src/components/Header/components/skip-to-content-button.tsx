import React, { useState } from 'react';
import './skip-to-content-button.css';

const SkipToContentButton = (): JSX.Element => {
  const [showSkipButton, setShowSkipButton] = useState(false);

  return (
    <div
      className={`skip-to-content-button ${
        showSkipButton ? 'show-skip-button' : 'hide-skip-button'
      }`}
    >
      <a
        href={'#content-start'}
        onFocus={() => setShowSkipButton(true)}
        onBlur={() => setShowSkipButton(false)}
      >
        Skip To Content
      </a>
    </div>
  );
};

export default SkipToContentButton;

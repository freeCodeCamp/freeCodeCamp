import React from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from 'react-hotkeys';
import { navigate } from 'gatsby';

const keyMap = {
  EXECUTE_CHALLENGE: 'ctrl+enter',
  NAVIGATE_PREV: ['ctrl+left', 'cmd+left'],
  NAVIGATE_NEXT: ['ctrl+right', 'cmd+right']
};

const propTypes = {
  children: PropTypes.any,
  executeChallenge: PropTypes.func,
  innerRef: PropTypes.any,
  introPath: PropTypes.string,
  nextChallengePath: PropTypes.string,
  prevChallengePath: PropTypes.string
};

function Hotkeys({
  children,
  executeChallenge,
  introPath,
  innerRef,
  nextChallengePath,
  prevChallengePath
}) {
  const handlers = {
    EXECUTE_CHALLENGE: () => {
      if (executeChallenge) executeChallenge();
    },
    NAVIGATE_PREV: () => navigate(prevChallengePath),
    NAVIGATE_NEXT: () => navigate(introPath ? introPath : nextChallengePath)
  };
  return (
    <HotKeys handlers={handlers} innerRef={innerRef} keyMap={keyMap}>
      {children}
    </HotKeys>
  );
}

Hotkeys.displayName = 'Hotkeys';
Hotkeys.propTypes = propTypes;

export default Hotkeys;

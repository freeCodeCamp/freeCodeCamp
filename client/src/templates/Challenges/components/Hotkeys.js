import React from 'react';
import PropTypes from 'prop-types';
import { HotKeys, GlobalHotKeys } from 'react-hotkeys';
import { navigate } from 'gatsby';

const keyMap = {
  EXECUTE_CHALLENGE: ['ctrl+enter', 'command+enter'],
  NAVIGATE_PREV: ['p'],
  NAVIGATE_NEXT: ['n']
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
    EXECUTE_CHALLENGE: e => {
      // the 'enter' part of 'ctrl+enter' stops HotKeys from listening, so it
      // needs to be prevented.
      // TODO: 'enter' on its own also disables HotKeys, but default behaviour
      // should not be prevented in that case.
      e.preventDefault();
      if (executeChallenge) executeChallenge();
    },
    NAVIGATE_PREV: () => navigate(prevChallengePath),
    NAVIGATE_NEXT: () => navigate(introPath ? introPath : nextChallengePath)
  };
  // GlobalHotKeys is always mounted and tracks all keypresses. Without it,
  // keyup events can be missed and react-hotkeys assumes that that key is still
  // being pressed.
  return (
    <HotKeys handlers={handlers} innerRef={innerRef} keyMap={keyMap}>
      {children}
      <GlobalHotKeys />
    </HotKeys>
  );
}

Hotkeys.displayName = 'Hotkeys';
Hotkeys.propTypes = propTypes;

export default Hotkeys;

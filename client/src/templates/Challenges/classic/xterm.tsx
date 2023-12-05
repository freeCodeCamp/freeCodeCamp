import React, { useEffect, useRef } from 'react';
// TODO: use dynamic import to load xterm.js only when needed
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

export const XtermTerminal = () => {
  const termRef = useRef(null);

  useEffect(() => {
    // Setting convertEol so that \n is converted to \r\n. Otherwise the terminal
    // will interpret \n as line feed and just move the cursor to the next line.
    // convertEol makes every \n a \r\n.
    const term = new Terminal({ convertEol: true });
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    if (termRef.current) term.open(termRef.current);
    fitAddon.fit();

    return () => {
      term.dispose();
    };
  }, []);

  return <div ref={termRef} />;
};

import React, { useEffect, useRef } from 'react';
// TODO: use dynamic import to load xterm.js only when needed
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

import { getPythonWorker } from '../utils/python-worker-handler';

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

    const pythonWorker = getPythonWorker();
    pythonWorker.onmessage = event => {
      const { type, text } = event.data as { type: string; text: string };
      if (type === 'print') {
        term.writeln(`>>> ${text}`);
      }
    };

    return () => {
      term.dispose();
      // TODO: figure out if we need/want to terminate the worker
    };
  }, []);

  return <div ref={termRef} />;
};

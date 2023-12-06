import React, { useEffect, useRef } from 'react';
// TODO: use dynamic import to load xterm.js only when needed
import { IDisposable, Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

import { getPythonWorker } from '../utils/python-worker-handler';

import 'xterm/css/xterm.css';

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        '/python-input-sw.js'
      );
      // TODO: Remove debug code
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed`);
      console.error(error);
    }
  }
};

export const XtermTerminal = () => {
  const termRef = useRef(null);

  useEffect(() => {
    void registerServiceWorker();
    // TODO: copy over resetTerminal from python-runner
    const disposables: IDisposable[] = [];
    // Setting convertEol so that \n is converted to \r\n. Otherwise the terminal
    // will interpret \n as line feed and just move the cursor to the next line.
    // convertEol makes every \n a \r\n.
    const term = new Terminal({ convertEol: true });
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    if (termRef.current) term.open(termRef.current);
    fitAddon.fit();

    const writeLine = (text: string) => term.writeln(`>>> ${text}`);

    // TODO: prevent user from moving cursor outside the current input line and
    // handle insertion and deletion properly. While backspace and delete don't
    // seem to work, we can use "\x1b[0K" to clear from the cursor to the end.
    // Also, we should not add special characters to the userinput string.
    const input = () => {
      let userinput = '';
      // Eslint is correct that this only gets assigned once, but we can't use
      // const because the declaration (before keyListener is defined) and
      // assignment (after keyListener is defined) must be separate.
      // eslint-disable-next-line prefer-const
      let disposable: IDisposable | undefined;

      const done = () => {
        disposable?.dispose();
        // TODO: send user input to service worker.
        console.log('userinput', userinput);
      };

      const keyListener = (key: string) => {
        if (key === '\u007F' || key === '\b') {
          // Backspace or delete key
          term.write('\b \b'); // Move cursor back, replace character with space, then move cursor back again
          userinput = userinput.slice(0, -1); // Remove the last character from userinput
        }
        if (key == '\r') {
          term.write('\r\n');
          done();
        } else {
          userinput += key;
          term.write(key);
        }
      };

      disposable = term.onData(keyListener); // Listen for key events and store the disposable
      disposables.push(disposable);
    };

    const pythonWorker = getPythonWorker();
    pythonWorker.onmessage = event => {
      console.log('pythonWorker.onmessage', event);
      void fetch('/python/intercept-input/');

      const { type, text } = event.data as { type: string; text: string };
      if (type === 'print') {
        writeLine(text);
      } else if (type === 'input') {
        writeLine(text);
        input();
      }
    };

    return () => {
      term.dispose();
      // TODO: figure out if we need/want to terminate the worker
    };
  }, []);

  return <div ref={termRef} />;
};

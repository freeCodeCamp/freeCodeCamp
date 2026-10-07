// @flow strict-local

import type {ChildProcess} from 'child_process';

export default function promiseFromProcess(
  childProcess: ChildProcess,
): Promise<void> {
  return new Promise((resolve, reject) => {
    childProcess.on('error', reject);
    childProcess.on('close', code => {
      if (code !== 0) {
        reject(new Error('Child process failed'));
        return;
      }

      resolve();
    });
  });
}

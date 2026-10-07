import assert from 'assert';
import os from 'os';

import getCores, {detectRealCores} from '../src/cpuCount';

describe('cpuCount', function () {
  it('Should be able to detect real cpu count', () => {
    // Windows not supported as getting the cpu count takes a couple seconds...
    if (os.platform() === 'win32') return;

    let cores = detectRealCores();
    assert(cores > 0);
  });

  it('getCores should return more than 0', () => {
    let cores = getCores(true);
    assert(cores > 0);
  });
});

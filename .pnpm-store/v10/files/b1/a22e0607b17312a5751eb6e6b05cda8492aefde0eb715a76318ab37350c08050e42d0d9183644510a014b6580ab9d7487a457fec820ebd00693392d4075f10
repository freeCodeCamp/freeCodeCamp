// @flow strict-local

import {MemoryFS, NodeFS, OverlayFS} from '@parcel/fs';
import assert from 'assert';
import invariant from 'assert';
import path from 'path';
import sinon from 'sinon';
import ThrowableDiagnostic from '@parcel/diagnostic';
import {loadConfig} from '@parcel/utils';
import WorkerFarm from '@parcel/workers';
import {MockPackageInstaller, NodePackageManager} from '../src';

const FIXTURES_DIR = path.join(__dirname, 'fixtures');

describe('NodePackageManager', function () {
  let fs;
  let packageManager;
  let packageInstaller;
  let workerFarm;

  // These can sometimes take a lil while
  this.timeout(20000);

  beforeEach(() => {
    workerFarm = new WorkerFarm({
      workerPath: require.resolve('@parcel/core/src/worker.js'),
    });
    fs = new OverlayFS(new MemoryFS(workerFarm), new NodeFS());
    packageInstaller = new MockPackageInstaller();
    packageManager = new NodePackageManager(fs, '/', packageInstaller);
  });

  afterEach(async () => {
    loadConfig.clear();
    await workerFarm.end();
  });

  it('resolves packages that exist', async () => {
    assert.deepEqual(
      await packageManager.resolve(
        'foo',
        path.join(FIXTURES_DIR, 'has-foo/index.js'),
      ),
      {
        pkg: {
          version: '1.1.0',
        },
        resolved: path.join(FIXTURES_DIR, 'has-foo/node_modules/foo/index.js'),
        invalidateOnFileChange: new Set([
          path.join(FIXTURES_DIR, 'has-foo/node_modules/foo/package.json'),
        ]),
        invalidateOnFileCreate: [
          {
            fileName: 'node_modules/foo',
            aboveFilePath: path.join(FIXTURES_DIR, 'has-foo/index.js'),
          },
        ],
      },
    );
  });

  it('requires packages that exist', async () => {
    assert.deepEqual(
      await packageManager.require(
        'foo',
        path.join(FIXTURES_DIR, 'has-foo/index.js'),
      ),
      'foobar',
    );
  });

  it("autoinstalls packages that don't exist", async () => {
    packageInstaller.register('a', fs, path.join(FIXTURES_DIR, 'packages/a'));

    assert.deepEqual(
      await packageManager.resolve(
        'a',
        path.join(FIXTURES_DIR, 'has-foo/index.js'),
        {shouldAutoInstall: true},
      ),
      {
        pkg: {
          name: 'a',
        },
        resolved: path.join(FIXTURES_DIR, 'has-foo/node_modules/a/index.js'),
        invalidateOnFileChange: new Set([
          path.join(FIXTURES_DIR, 'has-foo/node_modules/a/package.json'),
        ]),
        invalidateOnFileCreate: [
          {
            fileName: 'node_modules/a',
            aboveFilePath: path.join(FIXTURES_DIR, 'has-foo/index.js'),
          },
        ],
      },
    );
  });

  it('does not autoinstall packages that are already listed in package.json', async () => {
    packageInstaller.register('a', fs, path.join(FIXTURES_DIR, 'packages/a'));

    // $FlowFixMe assert.rejects is Node 10+
    await assert.rejects(
      () =>
        packageManager.resolve(
          'a',
          path.join(FIXTURES_DIR, 'has-a-not-yet-installed/index.js'),
          {shouldAutoInstall: true},
        ),
      err => {
        invariant(err instanceof ThrowableDiagnostic);
        assert(err.message.includes('Run your package manager'));
        return true;
      },
    );
  });

  it('does not autoinstall peer dependencies that are already listed in package.json', async () => {
    packageInstaller.register(
      'peers',
      fs,
      path.join(FIXTURES_DIR, 'packages/peers'),
    );

    let spy = sinon.spy(packageInstaller, 'install');
    await packageManager.resolve(
      'peers',
      path.join(FIXTURES_DIR, 'has-foo/index.js'),
      {shouldAutoInstall: true},
    );
    assert.deepEqual(spy.args, [
      [
        {
          cwd: path.join(FIXTURES_DIR, 'has-foo'),
          packagePath: path.join(FIXTURES_DIR, 'has-foo/package.json'),
          fs,
          saveDev: true,
          modules: [{name: 'peers', range: undefined}],
        },
      ],
    ]);
  });

  it('autoinstalls peer dependencies that are not listed in package.json', async () => {
    packageInstaller.register(
      'foo',
      fs,
      path.join(FIXTURES_DIR, 'packages/foo-2.0'),
    );
    packageInstaller.register(
      'peers',
      fs,
      path.join(FIXTURES_DIR, 'packages/peers-2.0'),
    );

    let spy = sinon.spy(packageInstaller, 'install');
    await packageManager.resolve(
      'peers',
      path.join(FIXTURES_DIR, 'empty/index.js'),
      {shouldAutoInstall: true},
    );
    assert.deepEqual(spy.args, [
      [
        {
          cwd: path.join(FIXTURES_DIR, 'empty'),
          packagePath: path.join(FIXTURES_DIR, 'empty/package.json'),
          fs,
          saveDev: true,
          modules: [{name: 'peers', range: undefined}],
        },
      ],
      [
        {
          cwd: path.join(FIXTURES_DIR, 'empty'),
          packagePath: path.join(FIXTURES_DIR, 'empty/package.json'),
          fs,
          saveDev: true,
          modules: [{name: 'foo', range: '^2.0.0'}],
        },
      ],
    ]);
  });

  describe('range mismatch', () => {
    it("cannot autoinstall if there's a local requirement", async () => {
      packageManager.invalidate(
        'foo',
        path.join(FIXTURES_DIR, 'has-foo/index.js'),
      );

      // $FlowFixMe assert.rejects is Node 10+
      await assert.rejects(
        () =>
          packageManager.resolve(
            'foo',
            path.join(FIXTURES_DIR, 'has-foo/index.js'),
            {
              range: '^2.0.0',
            },
          ),
        err => {
          invariant(err instanceof ThrowableDiagnostic);
          assert.equal(
            err.message,
            'Could not find module "foo" satisfying ^2.0.0.',
          );
          return true;
        },
      );
    });

    it("can autoinstall into local package if there isn't a local requirement", async () => {
      packageInstaller.register(
        'foo',
        fs,
        path.join(FIXTURES_DIR, 'packages/foo-2.0'),
      );

      let spy = sinon.spy(packageInstaller, 'install');
      assert.deepEqual(
        await packageManager.resolve(
          'foo',
          path.join(FIXTURES_DIR, 'has-foo/subpackage/index.js'),
          {
            range: '^2.0.0',
            shouldAutoInstall: true,
          },
        ),
        {
          pkg: {
            name: 'foo',
            version: '2.0.0',
          },
          resolved: path.join(
            FIXTURES_DIR,
            'has-foo/subpackage/node_modules/foo/index.js',
          ),
          invalidateOnFileChange: new Set([
            path.join(
              FIXTURES_DIR,
              'has-foo/subpackage/node_modules/foo/package.json',
            ),
          ]),
          invalidateOnFileCreate: [
            {
              fileName: 'node_modules/foo',
              aboveFilePath: path.join(
                FIXTURES_DIR,
                'has-foo/subpackage/index.js',
              ),
            },
          ],
        },
      );

      assert.deepEqual(spy.args, [
        [
          {
            cwd: path.join(FIXTURES_DIR, 'has-foo/subpackage'),
            packagePath: path.join(
              FIXTURES_DIR,
              'has-foo/subpackage/package.json',
            ),
            fs,
            saveDev: true,
            modules: [{name: 'foo', range: '^2.0.0'}],
          },
        ],
      ]);
    });

    it("cannot autoinstall peer dependencies if there's an incompatible local requirement", async () => {
      packageManager.invalidate(
        'peers',
        path.join(FIXTURES_DIR, 'has-foo/index.js'),
      );
      packageInstaller.register(
        'foo',
        fs,
        path.join(FIXTURES_DIR, 'packages/foo-2.0'),
      );
      packageInstaller.register(
        'peers',
        fs,
        path.join(FIXTURES_DIR, 'packages/peers-2.0'),
      );

      // $FlowFixMe assert.rejects is Node 10+
      await assert.rejects(
        () =>
          packageManager.resolve(
            'peers',
            path.join(FIXTURES_DIR, 'has-foo/index.js'),
            {
              range: '^2.0.0',
              shouldAutoInstall: true,
            },
          ),
        err => {
          assert(err instanceof ThrowableDiagnostic);
          assert.equal(
            err.message,
            'Could not install the peer dependency "foo" for "peers", installed version 1.1.0 is incompatible with ^2.0.0',
          );
          return true;
        },
      );
    });
  });
});

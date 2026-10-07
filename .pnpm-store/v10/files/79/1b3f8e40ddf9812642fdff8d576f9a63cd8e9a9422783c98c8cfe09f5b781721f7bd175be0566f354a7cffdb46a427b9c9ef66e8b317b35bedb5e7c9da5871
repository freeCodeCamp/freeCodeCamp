import Logger from '@parcel/logger';
import assert from 'assert';
import WorkerFarm from '../src';

describe('WorkerFarm', function () {
  this.timeout(30000);

  it('Should start up workers', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: false,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/ping.js'),
    });

    assert.equal(await workerfarm.run(), 'pong');

    await workerfarm.end();
  });

  it('Should handle 1000 requests without any issue', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: false,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/echo.js'),
    });

    let promises = [];
    for (let i = 0; i < 1000; i++) {
      promises.push(workerfarm.run(i));
    }
    await Promise.all(promises);

    await workerfarm.end();
  });

  it('Should warm up workers', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: true,
      workerPath: require.resolve('./integration/workerfarm/echo.js'),
    });

    for (let i = 0; i < 100; i++) {
      assert.equal(await workerfarm.run(i), i);
    }

    await new Promise(resolve => workerfarm.once('warmedup', resolve));

    assert(workerfarm.workers.size > 0, 'Should have spawned workers.');
    assert(
      workerfarm.warmWorkers >= workerfarm.workers.size,
      'Should have warmed up workers.',
    );

    await workerfarm.end();
  });

  it('Should use the local worker', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: true,
      workerPath: require.resolve('./integration/workerfarm/echo.js'),
    });

    assert.equal(await workerfarm.run('hello world'), 'hello world');
    assert.equal(workerfarm.shouldUseRemoteWorkers(), false);

    await workerfarm.end();
  });

  it('Should be able to use bi-directional communication', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: false,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/ipc.js'),
    });

    assert.equal(await workerfarm.run(1, 2), 3);

    await workerfarm.end();
  });

  it('Should be able to handle 1000 bi-directional calls', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: false,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/ipc.js'),
    });

    for (let i = 0; i < 1000; i++) {
      assert.equal(await workerfarm.run(1 + i, 2), 3 + i);
    }

    await workerfarm.end();
  });

  it.skip('Bi-directional call should return masters pid', async () => {
    // TODO: this test is only good for processes not threads
    let workerfarm = new WorkerFarm({
      warmWorkers: false,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/ipc-pid.js'),
    });

    let result = await workerfarm.run();
    assert.equal(result.length, 2);
    assert.equal(result[1], process.pid);
    assert.notEqual(result[0], process.pid);

    await workerfarm.end();
  });

  it('Should handle 10 big concurrent requests without any issue', async () => {
    // This emulates the node.js ipc bug for win32
    let workerfarm = new WorkerFarm({
      warmWorkers: false,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/echo.js'),
    });

    let bigData = [];
    for (let i = 0; i < 10000; i++) {
      bigData.push('This is some big data');
    }

    let promises = [];
    for (let i = 0; i < 10; i++) {
      promises.push(workerfarm.run(bigData));
    }
    await Promise.all(promises);

    await workerfarm.end();
  });

  it('Forwards stdio from the child process and levels event source if shouldPatchConsole is true', async () => {
    let events = [];
    let logDisposable = Logger.onLog(event => events.push(event));

    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/console.js'),
      shouldPatchConsole: true,
    });

    await workerfarm.run();

    assert.deepEqual(events, [
      {
        level: 'info',
        type: 'log',
        diagnostics: [
          {
            origin: 'console',
            message: 'one',
            skipFormatting: true,
          },
        ],
      },
      {
        level: 'info',
        type: 'log',
        diagnostics: [
          {
            origin: 'console',
            message: 'two',
            skipFormatting: true,
          },
        ],
      },
      {
        level: 'warn',
        type: 'log',
        diagnostics: [
          {
            origin: 'console',
            message: 'three',
            skipFormatting: true,
          },
        ],
      },
      {
        level: 'error',
        type: 'log',
        diagnostics: [
          {
            origin: 'console',
            message: 'four',
            skipFormatting: true,
          },
        ],
      },
      {
        level: 'verbose',
        type: 'log',
        diagnostics: [
          {
            message: 'five',
            origin: 'console',
            skipFormatting: true,
          },
        ],
      },
    ]);

    logDisposable.dispose();
    await workerfarm.end();
  });

  it('Forwards logger events to the main process', async () => {
    let events = [];
    let logDisposable = Logger.onLog(event => events.push(event));

    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/logging.js'),
    });

    await workerfarm.run();

    // assert.equal(events.length, 2);
    assert.deepEqual(events, [
      {
        level: 'info',
        diagnostics: [
          {
            origin: 'logging-worker',
            message: 'omg it works',
          },
        ],
        type: 'log',
      },
      {
        level: 'error',
        diagnostics: [
          {
            origin: 'logging-worker',
            message: 'errors objects dont work yet',
          },
        ],
        type: 'log',
      },
    ]);

    logDisposable.dispose();
    await workerfarm.end();
  });

  it('Should support reverse handle functions in main process that can be called in workers', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/reverse-handle.js'),
    });

    let handle = workerfarm.createReverseHandle(() => 42);
    let result = await workerfarm.run(handle);
    assert.equal(result, 42);
    await workerfarm.end();
  });

  it('Should dispose of handle objects when ending', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/reverse-handle.js'),
    });

    workerfarm.createReverseHandle(() => 42);
    assert.equal(workerfarm.handles.size, 1);
    await workerfarm.end();
    assert.equal(workerfarm.handles.size, 0);
  });

  it('Should support shared references in workers', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: false,
      workerPath: require.resolve(
        './integration/workerfarm/shared-reference.js',
      ),
    });

    let sharedValue = 'Something to be shared';
    let {ref, dispose} = await workerfarm.createSharedReference(sharedValue);
    let result = await workerfarm.run(ref);
    assert.equal(result, 'Something to be shared');
    await dispose();
    result = await workerfarm.run(ref);
    assert.equal(result, 'Shared reference does not exist');
  });

  it('Should resolve shared references in workers', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: false,
      workerPath: require.resolve(
        './integration/workerfarm/resolve-shared-reference.js',
      ),
    });

    let sharedValue = 'Something to be shared';
    let {ref, dispose} = await workerfarm.createSharedReference(sharedValue);

    assert.equal(workerfarm.workerApi.resolveSharedReference(sharedValue), ref);
    assert.ok(await workerfarm.run(ref));

    await dispose();
    assert(workerfarm.workerApi.resolveSharedReference(sharedValue) == null);
  });

  it('Should support shared references in local worker', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: true,
      workerPath: require.resolve(
        './integration/workerfarm/shared-reference.js',
      ),
    });

    let sharedValue = 'Something to be shared';
    let {ref, dispose} = await workerfarm.createSharedReference(sharedValue);
    let result = await workerfarm.run(ref);
    assert.equal(result, 'Something to be shared');
    await dispose();
    result = await workerfarm.run(ref);
    assert.equal(result, 'Shared reference does not exist');
  });

  it('should resolve shared references in local worker', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: true,
      workerPath: require.resolve(
        './integration/workerfarm/resolve-shared-reference.js',
      ),
    });

    let sharedValue = 'Something to be shared';
    let {ref, dispose} = await workerfarm.createSharedReference(sharedValue);

    assert.equal(workerfarm.workerApi.resolveSharedReference(sharedValue), ref);
    assert.ok(await workerfarm.run(ref));

    await dispose();
    assert(workerfarm.workerApi.resolveSharedReference(sharedValue) == null);
  });

  it('Should dispose of shared references when ending', async () => {
    let workerfarm = new WorkerFarm({
      warmWorkers: true,
      useLocalWorker: false,
      workerPath: require.resolve('./integration/workerfarm/reverse-handle.js'),
    });

    workerfarm.createSharedReference('Something to be shared');
    assert.equal(workerfarm.sharedReferences.size, 1);
    await workerfarm.end();
    assert.equal(workerfarm.sharedReferences.size, 0);
  });
});

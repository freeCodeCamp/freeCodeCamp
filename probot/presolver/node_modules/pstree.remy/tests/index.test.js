const tap = require('tap');
const test = tap.test;
const readFile = require('fs').readFileSync;
const spawn = require('child_process').spawn;
const pstree = require('../');
const { tree, pidsForTree, getStat } = require('../lib/utils');

tap.test('reads from /proc', async t => {
  const ps = await getStat();
  t.ok(ps.split('\n').length > 1);
});

test('tree for live env', async t => {
  const pid = 4079;
  const fixture = readFile(__dirname + '/fixtures/out2', 'utf8');
  const ps = await tree(fixture);
  t.deepEqual(pidsForTree(ps, pid).map(_ => _.PID), ['4080']);
});

test('can read full child process tree', t => {
  const sub = spawn(
    'sh',
    [
      '-c',
      `node -e "setInterval(() => {
        console.log(process.pid, 'is alive')
      }, 200);"`,
    ],
    {
      stdio: 'pipe',
    }
  );

  console.log('parent at %s', sub.pid);

  setTimeout(() => {
    const pid = sub.pid;
    pstree(pid, (error, children) => {
      children.concat({ PID: pid }).forEach(p => {
        spawn('kill', ['-s', 'SIGTERM', p.PID]);
      });
      t.equal(children.length, 1);
      t.end();
    });
  }, 500);
});

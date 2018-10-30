var path = require('path');
var test  = require('tape');
var chalk = require('chalk');
var cp = require('child_process');
var treeKill = require('tree-kill');
var psTree = require('../');

var red = chalk.red,
    green = chalk.green,
    cyan = chalk.cyan;

var scripts = {
  parent: path.join(__dirname, 'exec', 'parent.js'),
  child: path.join(__dirname, 'exec', 'child.js')
};

test(cyan('Spawn a Parent process which has a Two Child Processes'), function (t) {
  var parent = cp.exec('node ' + scripts.parent, function (error, stdout, stderr) {});

  setTimeout(function () {
    psTree(parent.pid, function (err, children) {
      if (err) { console.log(err); }
      console.log(red('Children: '), children, '\n');
      t.true(children.length > 0, green('✓ There are ' + children.length + ' active child processes'));
      treeKill(parent.pid);
    });

    setTimeout(function () {
      psTree(parent.pid, function (err, children) {
        if (err) { console.log(err); }
        // console.log('Children: ', children, '\n');
        // console.log(' ')
        t.equal(children.length, 0, green('✓ No more active child processes (we killed them)'));
        t.end();
      });
    }, 2000); // give psTree time to kill the processes
  }, 500); // give the child process time to spawn
  // need more time on a slow(or heavy load server). maybe promise.then is better instead of the timeout
});

test(cyan('FORCE ERROR by calling psTree without supplying a Callback'), function (t) {
  var errmsg = 'Error: childrenOfPid(pid, callback) expects callback'
  // Attempt to call psTree without a callback
  try { psTree(1234); }
  catch (e) {
    t.equal(e.toString(), errmsg, green('✓ Fails when no callback supplied (as expected)'))
  }

  t.end();
});


test(cyan('Spawn a Child Process and psTree with a String as pid'), function (t) {
  var child = cp.exec('node ' + scripts.child, function(error, stdout, stderr) {});
  setTimeout(function(){
    psTree(child.pid.toString(), function (err, children) {
      if (err) { console.log(err); }
      // cp.spawn('kill', ['-9'].concat(children.map(function (p) { return p.PID })))
      treeKill(child.pid);
    });

    setTimeout(function() {
      psTree(child.pid.toString(), function (err, children) {
        if (err) { console.log(err); }
        t.equal(children.length, 0, green('✓ No more active child processes'));
        t.end();
      });
    }, 1000); // give psTree time to kill the processes
  }, 200); // give the child process time to spawn
});

#!/usr/bin/env node

'use strict';

var os = require('os');
var pidtree = require('..');

// The method startsWith is not defined on string objects in node 0.10
// eslint-disable-next-line no-extend-native
String.prototype.startsWith = function(suffix) {
  return this.substring(0, suffix.length) === suffix;
};

function help() {
  var help =
    '  Usage\n' +
    '  $ pidtree <ppid>\n' +
    '\n' +
    'Options\n' +
    '  --list                     To print the pids as a list.\n' +
    '\n' +
    'Examples\n' +
    '  $ pidtree\n' +
    '  $ pidtree --list\n' +
    '  $ pidtree 1\n' +
    '  $ pidtree 1 --list\n';
  console.log(help);
}

function list(ppid) {
  pidtree(ppid === undefined ? -1 : ppid, function(err, list) {
    if (err) {
      console.error(err.message);
      return;
    }

    console.log(list.join(os.EOL));
  });
}

function tree(ppid) {
  pidtree(ppid, {advanced: true}, function(err, list) {
    if (err) {
      console.error(err.message);
      return;
    }

    var parents = {}; // Hash Map of parents
    var tree = {}; // Adiacency Hash Map
    while (list.length > 0) {
      var element = list.pop();
      if (tree[element.ppid]) {
        tree[element.ppid].push(element.pid);
      } else {
        tree[element.ppid] = [element.pid];
      }

      if (ppid === -1) {
        parents[element.pid] = element.ppid;
      }
    }

    var roots = [ppid];
    if (ppid === -1) {
      // Get all the roots
      roots = Object.keys(tree).filter(function(node) {
        return parents[node] === undefined;
      });
    }

    roots.forEach(function(root) {
      print(tree, root);
    });
  });

  function print(tree, start) {
    function printBranch(node, branch) {
      var isGraphHead = branch.length === 0;
      var children = tree[node] || [];

      var branchHead = '';
      if (!isGraphHead) {
        branchHead = children.length > 0 ? '┬ ' : '─ ';
      }

      console.log(branch + branchHead + node);

      var baseBranch = branch;
      if (!isGraphHead) {
        var isChildOfLastBranch = branch.slice(-2) === '└─';
        baseBranch = branch.slice(0, -2) + (isChildOfLastBranch ? '  ' : '| ');
      }

      var nextBranch = baseBranch + '├─';
      var lastBranch = baseBranch + '└─';
      children.forEach(function(child, index) {
        printBranch(
          child,
          children.length - 1 === index ? lastBranch : nextBranch
        );
      });
    }

    printBranch(start, '');
  }
}

function run() {
  var flag;
  var ppid;
  for (var i = 2; i < process.argv.length; i++) {
    if (process.argv[i].startsWith('--')) {
      flag = process.argv[i];
    } else {
      ppid = process.argv[i];
    }
  }

  if (ppid === undefined) {
    ppid = -1;
  }

  if (flag === '--list') list(ppid);
  else if (flag === undefined) tree(ppid);
  else help();
}

run();

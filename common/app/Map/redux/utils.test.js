import test from 'tape';
import sinon from 'sinon';

import {
  getNode,
  createMapUi,
  traverseMapUi,
  updateSingleNode,
  toggleThisPanel,
  expandAllPanels,
  collapseAllPanels
} from './utils.js';

test('createMapUi', t => {
  t.plan(3);
  t.test('should return an `{}` when proper args not supplied', t => {
    t.plan(3);
    t.equal(
      Object.keys(createMapUi()).length,
      0
    );
    t.equal(
      Object.keys(createMapUi({}, [])).length,
      0
    );
    t.equal(
      Object.keys(createMapUi({ superBlock: {} }, [])).length,
      0
    );
  });
  t.test('should return a map tree', t => {
    const expected = {
      children: [{
        name: 'superBlockA',
        children: [{
          name: 'blockA',
          children: [{
            name: 'challengeA'
          }]
        }]
      }]
    };
    const actual = createMapUi({
      superBlock: {
        superBlockA: {
          blocks: [
            'blockA'
          ]
        }
      },
      block: {
        blockA: {
          challenges: [
            'challengeA'
          ]
        }
      }
    },
    { superBlocks: ['superBlockA'] },
    { challengeA: 'ChallengeA title'}
  );
    t.plan(3);
    t.equal(actual.children[0].name, expected.children[0].name);
    t.equal(
      actual.children[0].children[0].name,
      expected.children[0].children[0].name
    );
    t.equal(
      actual.children[0].children[0].children[0].name,
      expected.children[0].children[0].children[0].name
    );
  });
  t.test('should protect against malformed data', t => {
    t.plan(2);
    t.equal(
      createMapUi({
        superBlock: {},
        block: {
          blockA: {
            challenges: [
              'challengeA'
            ]
          }
        }
      }, { superBlocks: ['superBlockA'] }).children[0].children.length,
      0
    );
    t.equal(
      createMapUi({
        superBlock: {
          superBlockA: {
            blocks: [
              'blockA'
            ]
          }
        },
        block: {}
      },
      { superBlocks: ['superBlockA'] }).children[0].children[0].children.length,
      0
    );
  });
});
test('traverseMapUi', t => {
  t.test('should return tree', t => {
    t.plan(2);
    const expectedTree = {};
    const actaulTree = traverseMapUi(expectedTree, tree => {
      t.equal(tree, expectedTree);
      return tree;
    });
    t.equal(actaulTree, expectedTree);
  });
  t.test('should hit every node', t => {
    t.plan(4);
    const expected = { children: [{ children: [{}] }] };
    const spy = sinon.spy(t => t);
    spy.withArgs(expected);
    spy.withArgs(expected.children[0]);
    spy.withArgs(expected.children[0].children[0]);
    traverseMapUi(expected, spy);
    t.equal(spy.callCount, 3);
    t.ok(spy.withArgs(expected).calledOnce, 'foo');
    t.ok(spy.withArgs(expected.children[0]).calledOnce, 'bar');
    t.ok(spy.withArgs(expected.children[0].children[0]).calledOnce, 'baz');
  });
  t.test('should create new object when children change', t => {
    t.plan(9);
    const expected = { children: [{ bar: true }, {}] };
    const actual = traverseMapUi(expected, node => ({ ...node, foo: true }));
    t.notEqual(actual, expected);
    t.notEqual(actual.children, expected.children);
    t.notEqual(actual.children[0], expected.children[0]);
    t.notEqual(actual.children[1], expected.children[1]);
    t.equal(actual.children[0].bar, expected.children[0].bar);
    t.notOk(expected.children[0].foo);
    t.notOk(expected.children[1].foo);
    t.true(actual.children[0].foo);
    t.true(actual.children[1].foo);
  });
});
test('getNode', t => {
  t.test('should return node', t => {
    t.plan(1);
    const expected = { name: 'foo' };
    const tree = { children: [{ name: 'notfoo' }, expected ] };
    const actual = getNode(tree, 'foo');
    t.equal(expected, actual);
  });
  t.test('should returned undefined if not found', t => {
    t.plan(1);
    const tree = {
      children: [ { name: 'foo' }, { children: [ { name: 'bar' } ] } ]
    };
    const actual = getNode(tree, 'baz');
    t.notOk(actual);
  });
});
test('updateSingleNode', t => {
  t.test('should update single node', t => {
    const expected = { name: 'foo' };
    const untouched = { name: 'notFoo' };
    const actual = updateSingleNode(
      { children: [ untouched, expected ] },
      'foo',
      node => ({ ...node, tag: true })
    );
    t.plan(4);
    t.ok(actual.children[1].tag);
    t.equal(actual.children[1].name, expected.name);
    t.notEqual(actual.children[1], expected);
    t.equal(actual.children[0], untouched);
  });
});
test('toggleThisPanel', t => {
  t.test('should update single node', t => {
    const expected = { name: 'foo', isOpen: true };
    const actual = toggleThisPanel(
      { children: [ { name: 'foo', isOpen: false }] },
      'foo'
    );
    t.plan(1);
    t.deepLooseEqual(actual.children[0], expected);
  });
});
test('toggleAllPanels', t => {
  t.test('should add `isOpen: true` to every node without children', t => {
    const expected = {
      isOpen: true,
      children: [{
        isOpen: true,
        children: [{}, {}]
      }]
    };
    const actual = expandAllPanels({ children: [{ children: [{}, {}] }] });
    t.plan(1);
    t.deepLooseEqual(actual, expected);
  });
  t.test('should add `isOpen: false` to every node without children', t => {
    const leaf = {};
    const expected = {
      isOpen: false,
      children: [{
        isOpen: false,
        children: [{}, leaf]
      }]
    };
    const actual = collapseAllPanels(
      { isOpen: true, children: [{ children: [{}, leaf]}]},
    );
    t.plan(2);
    t.deepLooseEqual(actual, expected);
    t.equal(actual.children[0].children[1], leaf);
  });
});

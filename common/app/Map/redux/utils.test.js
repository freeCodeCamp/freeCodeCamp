import test from 'tape';
import sinon from 'sinon';

import {
  getNode,
  createMapUi,
  traverseMapUi,
  updateSingleNode,
  toggleThisPanel,
  expandAllPanels,
  collapseAllPanels,
  applyFilterToMap,
  unfilterMapUi
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
    ['superBlockA'],
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
      }, ['superBlockA']).children[0].children.length,
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
      }, ['superBlockA']).children[0].children[0].children.length,
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
test('applyFilterToMap', t => {
  t.test('should not touch child that is already hidden', t => {
    t.plan(1);
    const expected = { name: 'bar', isHidden: true };
    const actual = applyFilterToMap(
      expected,
      /foo/
    );
    t.equal(actual, expected);
  });
  t.test('should update child that is hidden', t => {
    t.plan(1);
    const expected = { title: 'bar', isHidden: false };
    const input = { title: 'bar', isHidden: true };
    const actual = applyFilterToMap(input, /bar/);
    t.deepLooseEqual(actual, expected);
  });
  t.test('should unhide child that matches filter regex', t => {
    t.plan(1);
    const expected = { title: 'foo' };
    const actual = applyFilterToMap({ title: 'foo' }, /foo/);
    t.deepLooseEqual(actual, expected);
  });
  t.test('should hide child that does not match filter', t => {
    t.plan(1);
    const expected = { title: 'bar', isHidden: true };
    const actual = applyFilterToMap({ title: 'bar' }, /foo/);
    t.deepLooseEqual(actual, expected);
  });
  t.test('should not touch node that is already hidden', t => {
    t.plan(1);
    const expected = {
      name: 'bar',
      isHidden: true,
      children: [
        { name: 'baz', isHidden: true },
        { name: 'baz2', isHidden: true }
      ]
    };
    const actual = applyFilterToMap(expected, /foo/);
    t.equal(actual, expected);
  });
  t.test('should not touch node that is unhidden', t => {
    t.plan(1);
    const expected = {
      name: 'bar',
      isHidden: false,
      children: [
        { title: 'baz', isHidden: true },
        { title: 'foo', isHidden: false }
      ]
    };
    const actual = applyFilterToMap(expected, /foo/);
    t.equal(actual, expected);
  });
  t.test('should hide node if all children are hidden', t => {
    t.plan(1);
    const input = {
      name: 'bar',
      isHidden: false,
      children: [
        { name: 'baz' },
        { name: 'baz2', isHidden: false }
      ]
    };
    const expected = {
      name: 'bar',
      isHidden: true,
      children: [
        { name: 'baz', isHidden: true },
        { name: 'baz2', isHidden: true }
      ]
    };
    const actual = applyFilterToMap(input, /foo/);
    t.deepLooseEqual(actual, expected);
  });
  t.test('should unhide node some children unhidden', t => {
    t.plan(1);
    const input = {
      name: 'bar',
      isHidden: true,
      children: [
        { title: 'baz', isHidden: true },
        { title: 'foo', isHidden: false }
      ]
    };
    const expected = {
      name: 'bar',
      isHidden: false,
      children: [
        { title: 'baz', isHidden: true },
        { title: 'foo', isHidden: false }
      ]
    };
    const actual = applyFilterToMap(input, /foo/);
    t.deepLooseEqual(actual, expected);
  });
});
test('unfilterMapUi', t => {
  t.test('should not touch node that is already hidden', t => {
    const expected = { isHidden: false };
    const actual = unfilterMapUi(expected);
    t.plan(1);
    t.equal(actual, expected);
  });
  t.test('should update node that is not hidden', t => {
    const expected = { isHidden: false };
    const input = { isHidden: true };
    const actual = unfilterMapUi(input);
    t.plan(2);
    t.notEqual(actual, input);
    t.deepLooseEqual(actual, expected);
  });
});

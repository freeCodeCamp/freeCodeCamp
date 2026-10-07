'use strict'

const { test } = require('tap')
const { TimeTree } = require('../../lib/time-tree')

test('TimeTree is constructed with a root attribute, set to null', t => {
  t.plan(1)

  const tree = new TimeTree()
  t.equal(tree.root, null)
})

test('TimeTree is constructed with an empty tableId-Map', t => {
  t.plan(2)

  const tree = new TimeTree()
  t.ok(tree.tableId instanceof Map)
  t.equal(tree.tableId.size, 0)
})

test('TimeTree is constructed with an empty tableLabel-Map', t => {
  t.plan(2)

  const tree = new TimeTree()
  t.ok(tree.tableLabel instanceof Map)
  t.equal(tree.tableLabel.size, 0)
})

test('TimeTree#toJSON dumps the content of the TimeTree', t => {
  t.plan(1)

  const tree = new TimeTree()
  t.same(tree.toJSON(), {})
})

test('TimeTree#toJSON is creating new instances of its content, ensuring being immutable', t => {
  t.plan(1)

  const tree = new TimeTree()
  t.not(tree.toJSON(), tree.toJSON())
})

test('TimeTree#start is adding a node with correct shape, root-node', t => {
  t.plan(15)

  const tree = new TimeTree()
  tree.start(null, 'root')

  const rootNode = tree.root

  t.equal(Object.keys(rootNode).length, 7)
  t.ok('parent' in rootNode)
  t.equal(rootNode.parent, null)
  t.ok('id' in rootNode)
  t.type(rootNode.id, 'string')
  t.ok('label' in rootNode)
  t.type(rootNode.label, 'string')
  t.ok('nodes' in rootNode)
  t.ok(Array.isArray(rootNode.nodes))
  t.ok('start' in rootNode)
  t.ok(Number.isInteger(rootNode.start))
  t.ok('stop' in rootNode)
  t.type(rootNode.stop, 'null')
  t.ok('diff' in rootNode)
  t.type(rootNode.diff, 'number')
})

test('TimeTree#start is adding a node with correct shape, child-node', t => {
  t.plan(16)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')

  const rootNode = tree.root

  t.equal(rootNode.nodes.length, 1)

  const childNode = rootNode.nodes[0]

  t.equal(Object.keys(childNode).length, 7)
  t.ok('parent' in childNode)
  t.type(childNode.parent, 'string')
  t.ok('id' in childNode)
  t.type(childNode.id, 'string')
  t.ok('label' in childNode)
  t.type(childNode.label, 'string')
  t.ok('nodes' in childNode)
  t.ok(Array.isArray(childNode.nodes))
  t.ok('start' in childNode)
  t.ok(Number.isInteger(childNode.start))
  t.ok('stop' in childNode)
  t.type(childNode.stop, 'null')
  t.ok('diff' in childNode)
  t.type(childNode.diff, 'number')
})

test('TimeTree#start is adding a root element when parent is null', t => {
  t.plan(9)

  const tree = new TimeTree()
  tree.start(null, 'root')

  const rootNode = tree.root

  t.type(rootNode, 'object')
  t.equal(Object.keys(rootNode).length, 7)
  t.equal(rootNode.parent, null)
  t.equal(rootNode.id, 'root')
  t.equal(rootNode.label, 'root')
  t.ok(Array.isArray(rootNode.nodes))
  t.equal(rootNode.nodes.length, 0)
  t.ok(Number.isInteger(rootNode.start))
  t.type(rootNode.diff, 'number')
})

test('TimeTree#start is adding a root element when parent does not exist', t => {
  t.plan(9)

  const tree = new TimeTree()
  tree.start('invalid', 'root')

  const rootNode = tree.root

  t.type(rootNode, 'object')
  t.equal(Object.keys(rootNode).length, 7)
  t.equal(rootNode.parent, null)
  t.equal(rootNode.id, 'root')
  t.equal(rootNode.label, 'root')
  t.ok(Array.isArray(rootNode.nodes))
  t.equal(rootNode.nodes.length, 0)
  t.ok(Number.isInteger(rootNode.start))
  t.type(rootNode.diff, 'number')
})

test('TimeTree#start parameter start can override automatically generated start time', t => {
  t.plan(1)

  const tree = new TimeTree()
  tree.start(null, 'root', 1337)

  t.ok(tree.root.start, 1337)
})

test('TimeTree#start returns id of root, when adding a root node /1', t => {
  t.plan(1)

  const tree = new TimeTree()
  t.equal(tree.start(null, 'root'), 'root')
})

test('TimeTree#start returns id of root, when adding a root node /2', t => {
  t.plan(1)

  const tree = new TimeTree()
  t.equal(tree.start(null, '/'), 'root')
})

test('TimeTree#start returns id of child, when adding a child node', t => {
  t.plan(1)

  const tree = new TimeTree()
  tree.start(null, 'root')
  t.match(tree.start('root', 'child'), /^child-[0-9.]+$/)
})

test('TimeTree tracks node ids /1', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')

  t.equal(tree.tableId.size, 2)
  t.ok(tree.tableId.has('root'))
  t.ok(tree.tableId.has(tree.root.nodes[0].id))
})

test('TimeTree tracks node ids /2', t => {
  t.plan(4)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('child', 'grandchild')

  t.equal(tree.tableId.size, 3)
  t.ok(tree.tableId.has('root'))
  t.ok(tree.tableId.has(tree.root.nodes[0].id))
  t.ok(tree.tableId.has(tree.root.nodes[0].nodes[0].id))
})

test('TimeTree tracks node ids /3', t => {
  t.plan(4)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('root', 'child')

  t.equal(tree.tableId.size, 3)
  t.ok(tree.tableId.has('root'))
  t.ok(tree.tableId.has(tree.root.nodes[0].id))
  t.ok(tree.tableId.has(tree.root.nodes[1].id))
})

test('TimeTree tracks node labels /1', t => {
  t.plan(4)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('root', 'sibling')

  t.equal(tree.tableLabel.size, 3)
  t.ok(tree.tableLabel.has('root'))
  t.ok(tree.tableLabel.has('child'))
  t.ok(tree.tableLabel.has('sibling'))
})

test('TimeTree tracks node labels /2', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('root', 'child')

  t.equal(tree.tableLabel.size, 2)
  t.ok(tree.tableLabel.has('root'))
  t.ok(tree.tableLabel.has('child'))
})

test('TimeTree#stop returns undefined', t => {
  t.plan(1)

  const tree = new TimeTree()
  tree.start(null, 'root')

  t.type(tree.stop('root'), 'undefined')
})

test('TimeTree#stop sets stop value of node', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  t.type(tree.root.stop, 'null')

  tree.stop('root')
  t.type(tree.root.stop, 'number')
  t.ok(Number.isInteger(tree.root.stop))
})

test('TimeTree#stop parameter stop is used as stop value of node', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  t.type(tree.root.stop, 'null')

  tree.stop('root', 1337)
  t.type(tree.root.stop, 'number')
  t.equal(tree.root.stop, 1337)
})

test('TimeTree#stop calculates the diff', t => {
  t.plan(4)

  const tree = new TimeTree()
  tree.start(null, 'root', 1)
  t.type(tree.root.diff, 'number')
  t.equal(tree.root.diff, -1)
  tree.stop('root', 5)

  t.type(tree.root.diff, 'number')
  t.equal(tree.root.diff, 4)
})

test('TimeTree#stop does nothing when node is not found', t => {
  t.plan(2)

  const tree = new TimeTree()
  tree.start(null, 'root')
  t.type(tree.root.stop, 'null')

  tree.stop('invalid')
  t.type(tree.root.stop, 'null')
})

test('TimeTree untracks node ids /1', t => {
  t.plan(2)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')

  tree.stop(tree.root.nodes[0].id)
  t.equal(tree.tableId.size, 1)
  t.ok(tree.tableId.has('root'))
})

test('TimeTree untracks node ids /2', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('child', 'grandchild')

  tree.stop(tree.root.nodes[0].nodes[0].id)

  t.equal(tree.tableId.size, 2)
  t.ok(tree.tableId.has('root'))
  t.ok(tree.tableId.has(tree.root.nodes[0].id))
})

test('TimeTree untracks node ids /3', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('root', 'child')

  tree.stop(tree.root.nodes[0].id)

  t.equal(tree.tableId.size, 2)
  t.ok(tree.tableId.has('root'))
  t.ok(tree.tableId.has(tree.root.nodes[1].id))
})

test('TimeTree untracks node ids /4', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('root', 'child')

  tree.stop(tree.root.nodes[1].id)

  t.equal(tree.tableId.size, 2)
  t.ok(tree.tableId.has('root'))
  t.ok(tree.tableId.has(tree.root.nodes[0].id))
})

test('TimeTree untracks node labels /1', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('root', 'sibling')

  tree.stop(tree.root.nodes[1].id)

  t.equal(tree.tableLabel.size, 2)
  t.ok(tree.tableLabel.has('root'))
  t.ok(tree.tableLabel.has('child'))
})

test('TimeTree untracks node labels /2', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('root', 'sibling')

  tree.stop(tree.root.nodes[0].id)

  t.equal(tree.tableLabel.size, 2)
  t.ok(tree.tableLabel.has('root'))
  t.ok(tree.tableLabel.has('sibling'))
})

test('TimeTree does not untrack label if used by other node', t => {
  t.plan(3)

  const tree = new TimeTree()
  tree.start(null, 'root')
  tree.start('root', 'child')
  tree.start('root', 'child')

  tree.stop(tree.root.nodes[0].id)

  t.equal(tree.tableLabel.size, 2)
  t.ok(tree.tableLabel.has('root'))
  t.ok(tree.tableLabel.has('child'))
})

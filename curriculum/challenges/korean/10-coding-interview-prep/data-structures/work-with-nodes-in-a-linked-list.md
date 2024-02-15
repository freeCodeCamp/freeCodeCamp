---
id: 587d8251367417b2b2512c61
title: Work with Nodes in a Linked List
challengeType: 1
forumTopicId: 301721
dashedName: work-with-nodes-in-a-linked-list
---

# --description--

Another common data structure you'll run into in computer science is the <dfn>linked list</dfn>. A linked list is a linear collection of data elements, called 'nodes', each of which points to the next. Each <dfn>node</dfn> in a linked list contains two key pieces of information: the `element` itself, and a reference to the next `node`.

Imagine that you are in a conga line. You have your hands on the next person in the line, and the person behind you has their hands on you. You can see the person straight ahead of you, but they are blocking the view of the other people ahead in line. A node is just like a person in a conga line: they know who they are and they can only see the next person in line, but they are not aware of the other people ahead or behind them.

# --instructions--

In our code editor, we've created two nodes, `Kitten` and `Puppy`, and we've manually connected the `Kitten` node to the `Puppy` node.

Create a `Cat` and `Dog` node and manually add them to the line.

# --hints--

Your `Puppy` node should have a reference to a `Cat` node.

```js
assert(Puppy.next.element === 'Cat');
```

Your `Cat` node should have a reference to a `Dog` node.

```js
assert(Cat.next.element === 'Dog');
```

# --seed--

## --seed-contents--

```js
var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// Only change code below this line
```

# --solutions--

```js
// solution required
```

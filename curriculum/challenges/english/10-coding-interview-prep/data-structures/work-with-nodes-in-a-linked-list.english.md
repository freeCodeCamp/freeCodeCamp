---
id: 587d8251367417b2b2512c61
title: Work with Nodes in a Linked List
challengeType: 1
forumTopicId: 301721
---

## Description
<section id='description'>
Another common data structure you'll run into in computer science is the <dfn>linked list</dfn>. A linked list is a linear collection of data elements, called 'nodes', each of which points to the next. Each <dfn>node</dfn> in a linked list contains two key pieces of information: the <code>element</code> itself, and a reference to the next <code>node</code>.
Imagine that you are in a conga line. You have your hands on the next person in the line, and the person behind you has their hands on you. You can see the person straight ahead of you, but they are blocking the view of the other people ahead in line. A node is just like a person in a conga line: they know who they are and they can only see the next person in line, but they are not aware of the other people ahead or behind them.
</section>

## Instructions
<section id='instructions'>
In our code editor, we've created two nodes, <code>Kitten</code> and <code>Puppy</code>, and we've manually connected the <code>Kitten</code> node to the <code>Puppy</code> node.
Create a <code>Cat</code> and <code>Dog</code> node and manually add them to the line.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Puppy</code> node should have a reference to a <code>Cat</code> node.
    testString: assert(Puppy.next.element === "Cat");
  - text: Your <code>Cat</code> node should have a reference to a <code>Dog</code> node.
    testString: assert(Cat.next.element === "Dog");
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>
</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>

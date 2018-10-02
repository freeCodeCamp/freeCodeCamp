---
id: 587d8251367417b2b2512c65
title: Remove Elements from a Linked List by Index
challengeType: 1
---

## Description
<section id='description'>
Before we move on to another data structure, let's get a couple of last bits of practice with linked lists.
Let's write a <code>removeAt</code> method that removes the <code>element</code> at a given <code>index</code>. The method should be called <code>removeAt(index)</code>. To remove an <code>element</code> at a certain <code>index</code>, we'll need to keep a running count of each node as we move along the linked list.
A common technique used to iterate through the elements of a linked list involves a <dfn>'runner'</dfn>, or sentinel, that 'points' at the nodes that your code is comparing. In our case, starting at the <code>head</code> of our list, we start with a <code>currentIndex</code> variable that starts at <code>0</code>. The <code>currentIndex</code> should increment by one for each node we pass.
Just like our <code>remove(element)</code> method, we need to be careful not to orphan the rest of our list when we remove the node in our removeAt(index) method. We keep our nodes contiguous by making sure that the node that has reference to the removed node has a reference to the next node.
</section>

## Instructions
<section id='instructions'>
Write a <code>removeAt(index)</code> method that removes and returns a node at a given <code>index</code>. The method should return <code>null</code> if the given <code>index</code> is either negative, or greater than or equal to the <code>length</code> of the linked list.
Note
Remember to keep count of the <code>currentIndex</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: Your <code>LinkedList</code> class should have a <code>removeAt</code> method.
  testString: 'assert((function(){var test = new LinkedList(); return (typeof test.removeAt === ''function'')}()), ''Your <code>LinkedList</code> class should have a <code>removeAt</code> method.'');'
- text: Your <code>removeAt</code> method should reduce the <code>length</code> of the linked list
  testString: 'assert((function(){var test = new LinkedList(); test.add(''cat''); test.add(''dog''); test.add(''kitten''); test.removeAt(1); return test.size() === 2}()), ''Your <code>removeAt</code> method should reduce the <code>length</code> of the linked list'');'
- text: Your <code>removeAt</code> method should also return the element of the removed node.
  testString: 'assert((function(){var test = new LinkedList(); test.add(''cat''); test.add(''dog''); test.add(''kitten'');  return test.removeAt(1) === ''dog''}()), ''Your <code>removeAt</code> method should also return the element of the removed node.'');'
- text: Your <code>removeAt</code> method should also return <code>null</code> if the given index is less than <code>0</code>
  testString: 'assert((function(){var test = new LinkedList(); test.add(''cat''); test.add(''dog''); test.add(''kitten'');  return (test.removeAt(-1) === null)}()), ''Your <code>removeAt</code> method should also return <code>null</code> if the given index is less than <code>0</code>'');'
- text: Your <code>removeAt</code> method should also return <code>null</code> if the given index is equal or more than the <code>length</code> of the linked list.
  testString: 'assert((function(){var test = new LinkedList(); test.add(''cat''); test.add(''dog''); test.add(''kitten'');  return (test.removeAt(3) === null)}()), ''Your <code>removeAt</code> method should also return <code>null</code> if the given index is equal or more than the <code>length</code> of the linked list.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){ // {1} 
    this.element = element; 
    this.next = null; 
  }; 

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  }; 

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line

  // Only change code above this line
}
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

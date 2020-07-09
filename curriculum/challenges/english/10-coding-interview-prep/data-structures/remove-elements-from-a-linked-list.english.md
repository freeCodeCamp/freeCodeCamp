---
id: 587d8251367417b2b2512c63
title: Remove Elements from a Linked List
challengeType: 1
isHidden: false
forumTopicId: 301712
---

## Description
<section id='description'>
The next important method that any implementation of a linked list will need is a <code>remove</code> method. This method should take the element we want to remove as an argument, and then search the list to find and remove the node that contains that element.
Whenever we remove a node from a linked list, it's important that we don't accidentally orphan the rest of the list in doing so. Recall that every node's <code>next</code> property points to the node that follows it in the list. If we're removing the middle element, say, we'll want to make sure that we have a connection from that element's previous node's <code>next</code> property to the middle element's <code>next</code> property (which is the next node in the list!)
This might sound really confusing, so let's return to the conga line example so we have a good conceptual model. Picture yourself in a conga line, and the person directly in front of you leaves the line. The person who just left the line no longer has her hands on anyone in line--and you no longer have your hands on the person that left. You step forward and put your hands on next person you see.
If the element we wish to remove is the <code>head</code> element, we reassign the <code>head</code> to the second node of the linked list.
</section>

## Instructions
<section id='instructions'>
Write a <code>remove</code> method that takes an element and removes it from the linked list.
<strong>Note:</strong> The <code>length</code> of the list should decrease by one every time an element is removed from the linked list.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>LinkedList</code> class should have a <code>remove</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.remove === 'function')}()));
  - text: Your <code>remove</code> method should reassign <code>head</code> to the second node when the first node is removed.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.remove('cat'); return test.head().element === 'dog'}()));
  - text: Your <code>remove</code> method should decrease the <code>length</code> of the linked list by one for every node removed.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.remove('cat'); return test.size() === 1})());
  - text: Your <code>remove</code> method should reassign the reference of the previous node of the removed node to the removed node&apos;s <code>next</code> reference.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog');test.add('kitten'); test.remove('dog'); return test.head().next.element === 'kitten'})());
  - text: Your <code>remove</code> method should not change the linked list if the element does not exist in the linked list.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog');test.add('kitten'); test.remove('elephant'); return JSON.stringify(test.head()) === '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
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
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    // Only change code below this line

    // Only change code above this line
  };
}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
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
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    if (head === null) {
      return;
    }
    var previous;
    var currentNode = head;

    while (currentNode.next !== null && currentNode.element !== element) {
      previous = currentNode;
      currentNode = currentNode.next;
    }
    
    if (currentNode.next === null && currentNode.element !== element) {
      return;
    }
    else if (previous) {
      previous.next = currentNode.next;
    } else {
      head = currentNode.next;
    }

    length--;
  };
} 
```

</section>

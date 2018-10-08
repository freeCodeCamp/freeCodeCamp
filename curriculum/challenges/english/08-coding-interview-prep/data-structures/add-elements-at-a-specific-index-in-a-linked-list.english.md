---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
---

## Description
<section id='description'>
Let's create a addAt(index,element) method that adds an element at a given index.
Just like how we remove elements at a given index, we need to keep track of the currentIndex as we traverse the linked list. When the currentIndex matches the given index, we would need to reassign the previous node's next property to reference the new added node. And the new node should reference the next node in the currentIndex.
Returning to the conga line example, a new person wants to join the line, but he wants to join in the middle. You are in the middle of the line, so you take your hands off of the person ahead of you. The new person walks over and puts his hands on the person you once had hands on, and you now have your hands on the new person.
Instructions
Create an addAt(index,element) method that adds an element at a given index. Return false if an element was unable to be added.
Note
Remember to check if the given index is a negative or is longer than the length of the linked list.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>addAt</code> method should reassign <code>head</code> to the new node when the given index is 0.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.head().element === "cat"}()), "Your <code>addAt</code> method should reassign <code>head</code> to the new node when the given index is 0.");'
  - text: Your <code>addAt</code> method should increase the length of the linked list by one for each new node added to the linked list.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.size() === 3}()), "Your <code>addAt</code> method should increase the length of the linked list by one for each new node added to the linked list.");'
  - text: Your <code>addAt</code> method should return <code>false</code> if a node was unable to be added.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); return (test.addAt(4,"cat") === false); }()), "Your <code>addAt</code> method should return <code>false</code> if a node was unable to be added.");'

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
        currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
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

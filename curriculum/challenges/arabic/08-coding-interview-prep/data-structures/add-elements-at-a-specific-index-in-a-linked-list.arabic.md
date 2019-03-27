---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.head().element === "cat"}()), "Your <code>addAt</code> method should reassign <code>head</code> to the new node when the given index is 0.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.size() === 3}()), "Your <code>addAt</code> method should increase the length of the linked list by one for each new node added to the linked list.");'
  - text: ''
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
    if (head === null){
        head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
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

---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
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
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.indexOf === "function")}()), "Your <code>LinkedList</code> class should have a <code>indexOf</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.elementAt === "function")}()), "Your <code>LinkedList</code> class should have a <code>elementAt</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); return test.size() === 3}()), "Your <code>size</code> method should return the length of the linked list");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); return test.indexOf("kitten") === 2}()), "Your <code>indexOf</code> method should return the index of the given element.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); return test.elementAt(1) === "dog"}()), "Your <code>elementAt</code> method should return at element at a given index.");'

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

  this.size = function() {
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

---
id: 587d8251367417b2b2512c65
title: Remove Elements from a Linked List by Index
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
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.removeAt === "function")}()), "Your <code>LinkedList</code> class should have a <code>removeAt</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); test.removeAt(1); return test.size() === 2}()), "Your <code>removeAt</code> method should reduce the <code>length</code> of the linked list");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return test.removeAt(1) === "dog"}()), "Your <code>removeAt</code> method should also return the element of the removed node.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return (test.removeAt(-1) === null)}()), "Your <code>removeAt</code> method should also return <code>null</code> if the given index is less than <code>0</code>");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return (test.removeAt(3) === null)}()), "Your <code>removeAt</code> method should also return <code>null</code> if the given index is equal or more than the <code>length</code> of the linked list.");'

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

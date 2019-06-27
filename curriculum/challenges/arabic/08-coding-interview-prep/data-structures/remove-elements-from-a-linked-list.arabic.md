---
id: 587d8251367417b2b2512c63
title: Remove Elements from a Linked List
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
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.remove === "function")}()), "Your <code>LinkedList</code> class should have a <code>remove</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.head().element === "dog"}()), "Your <code>remove</code> method should reassign <code>head</code> to the second node when the first node is removed.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.size() === 1})(), "Your <code>remove</code> method should decrease the <code>length</code> of the linked list by one for every node removed.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog");test.add("kitten"); test.remove("dog"); return test.head().next.element === "kitten"})(), "Your <code>remove</code> method should reassign the reference of the previous node of the removed node to the removed node&apos;s <code>next</code> reference.");'

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
// solution required
```
</section>

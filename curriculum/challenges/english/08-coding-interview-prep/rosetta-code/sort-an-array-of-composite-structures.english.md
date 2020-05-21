---
title: Sort an array of composite structures
id: 5a23c84252665b21eecc7ffe
challengeType: 5
isHidden: false
forumTopicId: 302306
---

## Description
<section id='description'>
Write a function that takes an array of objects as a parameter. The function should sort the array according to the 'key' attribute of the objects and return the sorted array.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sortByKey</code> should be a function.
    testString: assert(typeof sortByKey == 'function');
  - text: '<code>sortByKey([{key: 3, value: "foo"}, {key: 2, value: "bar"}, {key: 4, value: "baz"}, {key: 1, value: 42}, {key: 5, value: "another string"}])</code> should return an array.'
    testString: assert(Array.isArray(sortByKey([{key:3, value:"foo"}, {key:2, value:"bar"}, {key:4, value:"baz"}, {key:1, value:42}, {key:5, value:"another string"}])));
  - text: '<code>sortByKey([{key: 3, value: "foo"}, {key: 2, value: "bar"}, {key: 4, value: "baz"}, {key: 1, value: 42}, {key: 5, value: "another string"}])</code> should return <code>[{key: 1, value: 42}, {key: 2, value: "bar"}, {key: 3, value: "foo"}, {key: 4, value: "baz"}, {key: 5, value: "another string"}]</code>.'
    testString: assert.deepEqual(sortByKey([{key:3, value:"foo"}, {key:2, value:"bar"}, {key:4, value:"baz"}, {key:1, value:42}, {key:5, value:"another string"}]), [{key:1, value:42}, {key:2, value:"bar"}, {key:3, value:"foo"}, {key:4, value:"baz"}, {key:5, value:"another string"}]);
  - text: '<code>sortByKey([{key: 3, name: "Joe"}, {key: 4, name: "Bill"}, {key: 20, name: "Alice"}, {key: 5, name: "Harry"}])</code> should return <code>[{key: 3, name: "Joe"}, {key: 4, name: "Bill"}, {key: 5, name: "Harry"}, {key: 20, name: "Alice"}]</code>.'
    testString: assert.deepEqual(sortByKey([{key:3, name:"Joe"}, {key:4, name:"Bill"}, {key:20, name:"Alice"}, {key:5, name:"Harry"}]), [{key:3, name:"Joe"}, {key:4, name:"Bill"}, {key:5, name:"Harry"}, {key:20, name:"Alice"}]);
  - text: '<code>sortByKey([{key: 2341, name: "Adam"}, {key: 122, name: "Bernie"}, {key: 19, name: "David"}, {key: 5531, name: "Joe"}, {key: 1234, name: "Walter"}])</code> should return <code>[{key: 19, name: "David"}, {key: 122, name: "Bernie"}, {key: 1234, name: "Walter"}, {key: 2341, name: "Adam"}, {key: 5531, name: "Joe"}]</code>.'
    testString: assert.deepEqual(sortByKey([{key:2341, name:"Adam"}, {key:122, name:"Bernie"}, {key:19, name:"David"}, {key:5531, name:"Joe"}, {key:1234, name:"Walter"}]), [{key:19, name:"David"}, {key:122, name:"Bernie"}, {key:1234, name:"Walter"}, {key:2341, name:"Adam"}, {key:5531, name:"Joe"}]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sortByKey(arr) {
  // Good luck!
}
```

</div>

</section>

## Solution
<section id='solution'>


```js
function sortByKey (arr) {
  return arr.sort(function(a, b) {
    return a.key - b.key
  });
}
```

</section>

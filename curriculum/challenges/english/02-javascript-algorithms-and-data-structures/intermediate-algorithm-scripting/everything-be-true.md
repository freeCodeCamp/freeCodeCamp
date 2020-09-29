---
id: a10d2431ad0c6a099a4b8b52
title: Everything Be True
challengeType: 5
forumTopicId: 16011
---

## Description
<section id='description'>
Check if the predicate (second argument) is <dfn>truthy</dfn> on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate <code>pre</code> will be an object property and you need to return <code>true</code> if its value is <code>truthy</code>. Otherwise, return <code>false</code>.
In JavaScript, <code>truthy</code> values are values that translate to <code>true</code> when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or <code>[]</code> notation.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return true.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), true);'
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return false.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), false);'
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")</code> should return false.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 2}, {"user": "Dipsy", "sex": "male", "age": 0}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), false);'
  - text: '<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")</code> should return false'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"), false);'
  - text: '<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")</code> should return true'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"), true);'
  - text: '<code>truthCheck([{"single": "yes"}], "single")</code> should return true'
    testString: 'assert.strictEqual(truthCheck([{"single": "yes"}], "single"), true);'
  - text: '<code>truthCheck([{"single": ""}, {"single": "double"}], "single")</code> should return false'
    testString: 'assert.strictEqual(truthCheck([{"single": ""}, {"single": "double"}], "single"), false);'
  - text: '<code>truthCheck([{"single": "double"}, {"single": undefined}], "single")</code> should return false'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": undefined}], "single"), false);'
  - text: '<code>truthCheck([{"single": "double"}, {"single": NaN}], "single")</code> should return false'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": NaN}], "single"), false);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function truthCheck(collection, pre) {
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function truthCheck(collection, pre) {
  return collection.every(function(e) { return e[pre]; });
}
```

</section>

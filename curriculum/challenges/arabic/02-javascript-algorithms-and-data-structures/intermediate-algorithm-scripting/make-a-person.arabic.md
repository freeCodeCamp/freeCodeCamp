---
id: a2f1d72d9b908d0bd72bb9f6
title: Make a Person
challengeType: 5
videoUrl: ''
localeTitle: اصنع شخصا
---

## Description
undefined

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ترجع <code>Object.keys(bob).length</code> 6.
    testString: 'assert.deepEqual(Object.keys(bob).length, 6, "<code>Object.keys(bob).length</code> should return 6.");'
  - text: ''
    testString: 'assert.deepEqual(bob instanceof Person, true, "<code>bob instanceof Person</code> should return true.");'
  - text: يجب أن يقوم <code>bob.firstName</code> بإرجاع غير معرفة.
    testString: 'assert.deepEqual(bob.firstName, undefined, "<code>bob.firstName</code> should return undefined.");'
  - text: يجب أن يقوم <code>bob.lastName</code> بإرجاع undefined.
    testString: 'assert.deepEqual(bob.lastName, undefined, "<code>bob.lastName</code> should return undefined.");'
  - text: يجب أن يقوم <code>bob.getFirstName()</code> بإرجاع &quot;Bob&quot;.
    testString: 'assert.deepEqual(bob.getFirstName(), "Bob", "<code>bob.getFirstName()</code> should return "Bob".");'
  - text: يجب أن يقوم <code>bob.getLastName()</code> بإرجاع &quot;Ross&quot;.
    testString: 'assert.deepEqual(bob.getLastName(), "Ross", "<code>bob.getLastName()</code> should return "Ross".");'
  - text: يجب أن يقوم <code>bob.getFullName()</code> بإرجاع &quot;Bob Ross&quot;.
    testString: 'assert.deepEqual(bob.getFullName(), "Bob Ross", "<code>bob.getFullName()</code> should return "Bob Ross".");'
  - text: يجب أن يقوم <code>bob.getFullName()</code> بإرجاع &quot;Haskell Ross&quot; بعد <code>bob.setFirstName(&quot;Haskell&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFirstName("Haskell"); return bob.getFullName(); })(), "Haskell Ross", "<code>bob.getFullName()</code> should return "Haskell Ross" after <code>bob.setFirstName("Haskell")</code>.");'
  - text: يجب أن يقوم <code>bob.getFullName()</code> بإرجاع &quot;Haskell Curry&quot; بعد <code>bob.setLastName(&quot;Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { var _bob=new Person("Haskell Ross"); _bob.setLastName("Curry"); return _bob.getFullName(); })(), "Haskell Curry", "<code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setLastName("Curry")</code>.");'
  - text: يجب أن يقوم <code>bob.getFullName()</code> بإرجاع &quot;Haskell Curry&quot; بعد <code>bob.setFullName(&quot;Haskell Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFullName(); })(), "Haskell Curry", "<code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setFullName("Haskell Curry")</code>.");'
  - text: يجب أن يقوم <code>bob.getFirstName()</code> بإرجاع &quot;Haskell&quot; بعد <code>bob.setFullName(&quot;Haskell Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFirstName(); })(), "Haskell", "<code>bob.getFirstName()</code> should return "Haskell" after <code>bob.setFullName("Haskell Curry")</code>.");'
  - text: ''
    testString: 'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getLastName(); })(), "Curry", "<code>bob.getLastName()</code> should return "Curry" after <code>bob.setFullName("Haskell Curry")</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

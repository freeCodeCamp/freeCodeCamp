---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
isHidden: false
forumTopicId: 301231
---

## Description
<section id='description'>
It would teach us a lot about the <code>filter</code> method if we try to implement a version of it that behaves exactly like <code>Array.prototype.filter()</code>. It can use either a <code>for</code> loop or <code>Array.prototype.forEach()</code>.
Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.
</section>

## Instructions
<section id='instructions'>
Write your own <code>Array.prototype.myFilter()</code>, which should behave exactly like <code>Array.prototype.filter()</code>. You may use a <code>for</code> loop or the <code>Array.prototype.forEach()</code> method.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>new_s</code> should equal <code>[23, 65, 5]</code>.
    testString: assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
  - text: Your code should not use the <code>filter</code> method.
    testString: assert(!code.match(/\.?[\s\S]*?filter/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```

</div>



</section>

## Solution
<section id='solution'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Only change code below this line
  for (let i = 0;i<this.length;i++) {
    if (callback(this[i]))
      newArray.push(this[i]);
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```

</section>

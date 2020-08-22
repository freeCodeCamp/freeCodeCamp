---
id: 587d7b8f367417b2b2512b62
title: Implement map on a Prototype
challengeType: 1
isHidden: false
forumTopicId: 301230
---

## Description
<section id='description'>
As you have seen from applying <code>Array.prototype.map()</code>, or simply <code>map()</code> earlier, the <code>map</code> method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.
In other words, <code>map</code> is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.
It would teach us a lot about <code>map</code> to try to implement a version of it that behaves exactly like the <code>Array.prototype.map()</code> with a <code>for</code> loop or <code>Array.prototype.forEach()</code>.
Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.
</section>

## Instructions
<section id='instructions'>
Write your own <code>Array.prototype.myMap()</code>, which should behave exactly like <code>Array.prototype.map()</code>. You may use a <code>for</code> loop or the <code>forEach</code> method.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>new_s</code> should equal <code>[46, 130, 196, 10]</code>.
    testString: assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
  - text: Your code should not use the <code>map</code> method.
    testString: assert(!code.match(/\.?[\s\S]*?map/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

</div>



</section>

## Solution
<section id='solution'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
  for (var elem of this) {
    newArray.push(callback(elem));
  }
  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

</section>

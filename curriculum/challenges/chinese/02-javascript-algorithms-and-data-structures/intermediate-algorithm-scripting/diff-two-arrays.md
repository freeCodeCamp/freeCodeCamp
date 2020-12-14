---
id: a5de63ebea8dbee56860f4f2
challengeType: 5
forumTopicId: 16008
title: 区分两个数组
---

## Description
<section id='description'>
在这道题目中，我们需要写一个函数，比较两个数组，返回一个新的数组。这个新数组需要包含传入的两个数组所有元素中，仅在其中一个数组里出现的元素。如果某个元素同时出现在两个数组中，则不应包含在返回的数组里。换言之，我们需要返回这两个数组的对称差。
<strong>注意：</strong><br>返回数组中的元素可任意排序。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code>应该返回一个数组。
    testString: assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === "object");
  - text: "<code>['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回<code>['pink wool']</code>。"
    testString: assert.sameMembers(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"]);
  - text: "<code>['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回一个长度为 1 的数组。"
    testString: assert(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 1);
  - text: "<code>['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回<code>['diorite', 'pink wool']</code>。"
    testString: assert.sameMembers(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"]);
  - text: "<code>['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回一个长度为 2 的数组。"
    testString: assert(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 2);
  - text: "<code>['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回<code>[]</code>。"
    testString: assert.sameMembers(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), []);
  - text: "<code>['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回一个空数组。"
    testString: assert(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).length === 0);
  - text: <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code>应该返回<code>[4]</code>。
    testString: assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
  - text: <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code>应该返回一个长度为 1 的数组。
    testString: assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length  === 1);
  - text: "<code>[1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]</code>应该返回<code>['piglet', 4]</code>。"
    testString: assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4]);
  - text: "<code>[1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]</code>应该返回一个长度为 2 的数组。"
    testString: assert(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).length === 2);
  - text: "<code>[], ['snuffleupagus', 'cookie monster', 'elmo']</code>应该返回<code>['snuffleupagus', 'cookie monster', 'elmo']</code>。"
    testString: assert.sameMembers(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"]);
  - text: "<code>[], ['snuffleupagus', 'cookie monster', 'elmo']</code>应该返回一个长度为 3 的数组。"
    testString: assert(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).length === 3);
  - text: "<code>[1, 'calf', 3, 'piglet'], [7, 'filly']</code>应该返回<code>[1, 'calf', 3, 'piglet', 7, 'filly']</code>。"
    testString: assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"]);
  - text: "<code>[1, 'calf', 3, 'piglet'], [7, 'filly']</code>应该返回一个长度为 6 的数组。"
    testString: assert(diffArray([1, "calf", 3, "piglet"], [7, "filly"]).length === 6);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function diffArray(arr1, arr2) {
  var newArr = [];
  var h1 = Object.create(null);
  arr1.forEach(function(e) {
    h1[e] = e;
  });

  var h2 = Object.create(null);
  arr2.forEach(function(e) {
    h2[e] = e;
  });

  Object.keys(h1).forEach(function(e) {
     if (!(e in h2)) newArr.push(h1[e]);
  });
  Object.keys(h2).forEach(function(e) {
     if (!(e in h1)) newArr.push(h2[e]);
  });
  // Same, same; but different.
  return newArr;
}
```
</section>

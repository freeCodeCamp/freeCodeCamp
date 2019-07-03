---
id: a5de63ebea8dbee56860f4f2
title: Diff Two Arrays
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Diff Two Arrays
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code>应该返回一个数组。
    testString: assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === "object", '<code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code>应该返回一个数组。');
  - text: "<code>['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回<code>['pink wool']</code>。"
    testString: assert.sameMembers(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"], '<code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code>应该返回<code>["pink wool"]</code>。');
  - text: "<code>['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回一个长度为 1 的数组。"
    testString: assert(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 1, '<code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code>应该返回一个长度为 1 的数组。');
  - text: "<code>['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回<code>['diorite', 'pink wool']</code>。"
    testString: assert.sameMembers(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"], '<code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code>应该返回<code>["diorite", "pink wool"]</code>。');
  - text: "<code>['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回一个长度为 2 的数组。"
    testString: assert(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 2, '<code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code>应该返回一个长度为 2 的数组。');
  - text: "<code>['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回<code>[]</code>。"
    testString: assert.sameMembers(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), [], '<code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code>应该返回<code>[]</code>。');
  - text: "<code>['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']</code>应该返回一个空数组。"
    testString: assert(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).length === 0, '<code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code>应该返回一个空数组。');
  - text: <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code>应该返回<code>[4]</code>。
    testString: assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4], '<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code>应该返回<code>[4]</code>。');
  - text: <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code>应该返回一个长度为 1 的数组。
    testString: assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length  === 1, '<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code>应该返回一个长度为 1 的数组。');
  - text: "<code>[1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]</code>应该返回<code>['piglet', 4]</code>。"
    testString: assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4], '<code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code>应该返回<code>["piglet", 4]</code>。');
  - text: "<code>[1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]</code>应该返回一个长度为 2 的数组。"
    testString: assert(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).length === 2, '<code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code>应该返回一个长度为 2 的数组。');
  - text: "<code>[], ['snuffleupagus', 'cookie monster', 'elmo']</code>应该返回<code>['snuffleupagus', 'cookie monster', 'elmo']</code>。"
    testString: assert.sameMembers(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"], '<code>[], ["snuffleupagus", "cookie monster", "elmo"]</code>应该返回<code>["snuffleupagus", "cookie monster", "elmo"]</code>。');
  - text: "<code>[], ['snuffleupagus', 'cookie monster', 'elmo']</code>应该返回一个长度为 3 的数组。"
    testString: assert(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).length === 3, '<code>[], ["snuffleupagus", "cookie monster", "elmo"]</code>应该返回一个长度为 3 的数组。');
  - text: "<code>[1, 'calf', 3, 'piglet'], [7, 'filly']</code>应该返回<code>[1, 'calf', 3, 'piglet', 7, 'filly']</code>。"
    testString: assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"], '<code>[1, "calf", 3, "piglet"], [7, "filly"]</code>应该返回<code>[1, "calf", 3, "piglet", 7, "filly"]</code>。');
  - text: "<code>[1, 'calf', 3, 'piglet'], [7, 'filly']</code>应该返回一个长度为 6 的数组。"
    testString: assert(diffArray([1, "calf", 3, "piglet"], [7, "filly"]).length === 6, '<code>[1, "calf", 3, "piglet"], [7, "filly"]</code>应该返回一个长度为 6 的数组。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              
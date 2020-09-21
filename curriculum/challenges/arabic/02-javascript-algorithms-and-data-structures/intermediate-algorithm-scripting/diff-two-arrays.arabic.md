---
id: a5de63ebea8dbee56860f4f2
title: Diff Two Arrays
challengeType: 5
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
    testString: 'assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === "object", "<code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code> should return an array.");'
  - text: ''
    testString: 'assert.sameMembers(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"], "<code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["pink wool"]</code>.");'
  - text: ''
    testString: 'assert(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 1, "<code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return an array with one item.");'
  - text: ''
    testString: 'assert.sameMembers(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"], "<code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["diorite", "pink wool"]</code>.");'
  - text: ''
    testString: 'assert(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 2, "<code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return an array with two items.");'
  - text: ''
    testString: 'assert.sameMembers(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), [], "<code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code> should return <code>[]</code>.");'
  - text: ''
    testString: 'assert(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).length === 0, "<code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code> should return an empty array.");'
  - text: ''
    testString: 'assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4], "<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return <code>[4]</code>.");'
  - text: ''
    testString: 'assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length  === 1, "<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return an array with one item.");'
  - text: ''
    testString: 'assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4], "<code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code> should return <code>["piglet", 4]</code>.");'
  - text: ''
    testString: 'assert(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).length === 2, "<code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code> should return an array with two items.");'
  - text: ''
    testString: 'assert.sameMembers(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"], "<code>[], ["snuffleupagus", "cookie monster", "elmo"]</code> should return <code>["snuffleupagus", "cookie monster", "elmo"]</code>.");'
  - text: 'يجب أن ترجع <code>[], [&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> صفيفًا يحتوي على ثلاثة عناصر.'
    testString: 'assert(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).length === 3, "<code>[], ["snuffleupagus", "cookie monster", "elmo"]</code> should return an array with three items.");'
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code> يجب أن تعود <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;, 7, &quot;filly&quot;]</code> .'
    testString: 'assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"], "<code>[1, "calf", 3, "piglet"], [7, "filly"]</code> should return <code>[1, "calf", 3, "piglet", 7, "filly"]</code>.");'
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code> يجب أن يعرض مصفوفة تحتوي على ستة عناصر.'
    testString: 'assert(diffArray([1, "calf", 3, "piglet"], [7, "filly"]).length === 6, "<code>[1, "calf", 3, "piglet"], [7, "filly"]</code> should return an array with six items.");'

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
// solution required
```
</section>

---
id: a5de63ebea8dbee56860f4f2
title: Diff Two Arrays
isRequired: true
challengeType: 5
forumTopicId: 16008
localeTitle: Diff Два массива
---

## Description
<section id='description'>
Сравните два массива и верните новый массив с любыми элементами, найденными только в одном из двух заданных массивов, но не обоих. Другими словами, верните симметричную разность двух массивов. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. <strong>Заметка</strong> <br> Вы можете вернуть массив с его элементами в любом порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code> should return an array.
    testString: assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === "object");
  - text: <code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["pink wool"]</code>.
    testString: assert.sameMembers(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"]);
  - text: <code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return an array with one item.
    testString: assert(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 1);
  - text: <code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["diorite", "pink wool"]</code>.
    testString: assert.sameMembers(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"]);
  - text: <code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return an array with two items.
    testString: assert(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 2);
  - text: <code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code> should return <code>[]</code>.
    testString: assert.sameMembers(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), []);
  - text: <code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code> should return an empty array.
    testString: assert(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).length === 0);
  - text: <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return <code>[4]</code>.
    testString: assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
  - text: <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return an array with one item.
    testString: assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length  === 1);
  - text: <code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code> should return <code>["piglet", 4]</code>.
    testString: assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4]);
  - text: <code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code> should return an array with two items.
    testString: assert(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).length === 2);
  - text: <code>[], ["snuffleupagus", "cookie monster", "elmo"]</code> should return <code>["snuffleupagus", "cookie monster", "elmo"]</code>.
    testString: assert.sameMembers(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"]);
  - text: <code>[], ["snuffleupagus", "cookie monster", "elmo"]</code> should return an array with three items.
    testString: assert(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).length === 3);
  - text: <code>[1, "calf", 3, "piglet"], [7, "filly"]</code> should return <code>[1, "calf", 3, "piglet", 7, "filly"]</code>.
    testString: assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"]);
  - text: <code>[1, "calf", 3, "piglet"], [7, "filly"]</code> should return an array with six items.
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

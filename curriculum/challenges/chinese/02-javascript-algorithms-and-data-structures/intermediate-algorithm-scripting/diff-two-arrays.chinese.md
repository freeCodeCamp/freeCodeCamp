---
id: a5de63ebea8dbee56860f4f2
title: Diff Two Arrays
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 差分两个阵列
---

## Description
<section id="description">比较两个数组并返回一个新数组，其中只有在两个给定数组中的一个中找到的任何项，但不能同时返回两个数组。换句话说，返回两个数组的对称差异。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 <strong>注意</strong> <br>您可以按任何顺序返回包含其元素的数组。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code>应该返回一个数组。'
    testString: assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === "object");
  - text: '<code>[&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code>应该返回<code>[&quot;pink wool&quot;]</code> 。'
    testString: assert.sameMembers(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"]);
  - text: '<code>[&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code>应该返回一个包含一个项目的数组。'
    testString: assert(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 1);
  - text: '<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code>应该返回<code>[&quot;diorite&quot;, &quot;pink wool&quot;]</code> 。'
    testString: assert.sameMembers(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"]);
  - text: '<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code>应该返回一个数组有两个项目。'
    testString: assert(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 2);
  - text: '<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;], [&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code>应该返回<code>[]</code> 。'
    testString: assert.sameMembers(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), []);
  - text: '<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;], [&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code>应返回一个空数组。'
    testString: assert(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).length === 0);
  - text: '<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code>应该返回<code>[4]</code> 。'
    testString: assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
  - text: '<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code>应该返回一个带有一个项目的数组。'
    testString: assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length  === 1);
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [1, &quot;calf&quot;, 3, 4]</code>应返回<code>[&quot;piglet&quot;, 4]</code> 。'
    testString: assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4]);
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [1, &quot;calf&quot;, 3, 4]</code>应该返回一个包含两个项目的数组。'
    testString: assert(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).length === 2);
  - text: '<code>[], [&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code>应该返回<code>[&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> 。'
    testString: assert.sameMembers(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"]);
  - text: '<code>[], [&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code>应该返回一个包含三个项目的数组。'
    testString: assert(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).length === 3);
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code> <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;, 7, &quot;filly&quot;]</code> <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code>应该返回<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;, 7, &quot;filly&quot;]</code> 。'
    testString: assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"]);
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code>应该返回一个包含六个项目的数组。'
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
// solution required
```

/section>

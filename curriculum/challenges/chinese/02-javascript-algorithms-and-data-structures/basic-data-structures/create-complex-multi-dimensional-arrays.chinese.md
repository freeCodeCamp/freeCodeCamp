---
id: 587d7b7b367417b2b2512b16
title: Create complex multi-dimensional arrays
challengeType: 1
forumTopicId: 301159
localeTitle: 创建复杂的多维数组
---

## Description
<section id='description'>
很好！你已经学到很多关于数组的知识了！但这些只是一个开始，你将在接下来的小节中学习到与数组相关的更多知识。但在继续去学习<dfn>对象</dfn>（<dfn>Objects</dfn>）之前，让我们再花一点时间看一看，数组怎样能够变得比之前的挑战中更复杂一点。
数组的一个强大的特性是，它可以包含其他数组，甚至完全由其他数组组成。我们已经在上一个挑战中看到了包含数组的数组，但它还算是比较简单的。数组中的数组还可以在包含其他数组，数组中是可以嵌套任意层的数组的。数组从而可以被用来实现非常复杂的叫做<dfn>多维（multi-dimensional）</dfn>或嵌套（nested）数组的数据结构。请看如下例子：

```js
let nestedArray = [ // 顶层，或第 1 层——最外层的数组
  ['deep'], // 数组中的数组，第 2 层
  [
    ['deeper'], ['deeper'] // 第 3 层嵌套的两个数组
  ],
  [
    [
      ['deepest'], ['deepest'] // 第 4 层嵌套的两个数组
    ],
    [
      [
        ['deepest-est?'] // 第 5 层嵌套的一个数组
      ]
    ]
  ]
];
```

虽然这个例子看起来错综复杂，但这样复杂的数组并不算罕见，尤其是在处理大量数据的时候。
但我们仍能简单地用方括号符号来访问到嵌套得最深的数组：

```js
console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?
```

既然我们知道数据在哪里，我们就能修改它：

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still
```

</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>myNestedArray</code>数组变量。请修改<code>myNestedArray</code>，用<dfn>字符串（string）</dfn>、<dfn>数字（number）</dfn>或者<dfn>布尔值（boolean）</dfn>作为数组的数据元素，使得<code>myNestedArray</code>刚好有 5 层数组嵌套（记住，最外层的数组是第 1 层）。请在第 3 层的数组中包含字符串<code>'deep'</code>，在第 4 层的数组中包含字符串<code>'deeper'</code>，在第 5 层的数组中包含字符串<code>'deepest'</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myNestedArray</code>中的数据元素应当只能是字符串、数字或者布尔值。
    testString: 'assert.strictEqual((function(arr) { let flattened = (function flatten(arr) { const flat = [].concat(...arr); return flat.some (Array.isArray) ? flatten(flat) : flat; })(arr); for (let i = 0; i < flattened.length; i++) { if ( typeof flattened[i] !== ''number'' && typeof flattened[i] !== ''string'' && typeof flattened[i] !== ''boolean'') { return false } } return true })(myNestedArray), true);'
  - text: <code>myNestedArray</code>应该刚好有 5 层数组嵌套。
    testString: 'assert.strictEqual((function(arr) {let depth = 0;function arrayDepth(array, i, d) { if (Array.isArray(array[i])) {  arrayDepth(array[i], 0, d + 1);} else {  depth = (d > depth) ? d : depth;}if (i < array.length) {  arrayDepth(array, i + 1, d);}  }arrayDepth(arr, 0, 0);return depth;})(myNestedArray), 4);'
  - text: <code>myNestedArray</code>里应该有且只有一个字符串<code>&quot;deep&quot;</code>，并且应该出现在第 3 层数组中。
    testString: assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deep').length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deep')[0] === 2);
  - text: <code>myNestedArray</code>里应该有且只有一个字符串<code>&quot;deeper&quot;</code>，并且应该出现在第 4 层数组中。
    testString: assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deeper').length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deeper')[0] === 3);
  - text: <code>myNestedArray</code>里应该有且只有一个字符串<code>&quot;deepest&quot;</code>，并且应该出现在第 5 层数组中。
    testString: assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deepest').length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deepest')[0] === 4);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myNestedArray = [
  // change code below this line
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];
```

</section>

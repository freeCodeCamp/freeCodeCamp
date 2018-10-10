---
id: 587d7b7b367417b2b2512b16
title: Create complex multi-dimensional arrays
challengeType: 1
videoUrl: ''
localeTitle: 创建复杂的多维数组
---

## Description
<section id="description">真棒！你刚学了很多关于阵列的知识！这是一个相当高级别的概述，有很多关于使用数组的知识，其中大部分将在后面的章节中看到。但在继续观察<dfn>对象之前</dfn> ，让我们再看一下，看看阵列如何变得比我们在之前的挑战中看到的更复杂。将数组视为数据结构时，最强大的功能之一是数组可以包含甚至完全由其他数组组成。我们已经看到在之前的挑战中包含数组的数组，但相当简单。但是，数组可以包含无限深度的数组，这些数组可以包含其他数组，每个数组都有自己的任意深度级别，依此类推。通过这种方式，数组可以非常快速地变成非常复杂的数据结构，称为<dfn>多维</dfn>或嵌套数组。请考虑以下示例： <blockquote>让nestedArray = [// top，或first level  - 最外面的数组<br> [&#39;deep&#39;]，//数组中的数组，2个深度级别<br> [ <br> [&#39;更深&#39;]，[&#39;更深&#39;] // 2个数组嵌套3层深<br> ] <br> [ <br> [ <br> [&#39;deepest&#39;]，[&#39;最深&#39;] // 2个数组嵌套了4个级别<br> ] <br> [ <br> [ <br> [&#39;deepest-est？&#39;] //一个数组嵌套5层深<br> ] <br> ] <br> ] <br> ]。 </blockquote>虽然这个例子看似令人费解，但在处理大量数据时，这种复杂程度并非闻所未闻，甚至不同寻常。但是，我们仍然可以使用括号表示法轻松访问此复杂数组的最深层次： <blockquote>的console.log（nestedArray [2] [1] [0] [0] [0]）; <br> //日志：最深？ </blockquote>现在我们知道那条数据在哪里，如果需要，我们可以重置它： <blockquote> nestedArray [2] [1] [0] [0] [0] =“更深”; <br><br>的console.log（nestedArray [2] [1] [0] [0] [0]）; <br> //现在记录：更深入</blockquote></section>

## Instructions
<section id="instructions">我们已经定义了一个变量<code>myNestedArray</code> ，它等于一个数组。修改<code>myNestedArray</code> ，使用数据元素的<dfn>字符串</dfn> ， <dfn>数字</dfn>和<dfn>布尔值的</dfn>任意组合，以便它具有五个深度级别（请记住，最外层的数组是级别1）。某处在第三级上，包括字符串<code>&#39;deep&#39;</code> ，在第四级，包括字符串<code>&#39;deeper&#39;</code> ，并且在第五层上，包括字符串<code>&#39;deepest&#39;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myNestedArray</code>应仅包含数字，布尔值和字符串作为数据元素
    testString: 'assert.strictEqual((function(arr) { let flattened = (function flatten(arr) { const flat = [].concat(...arr); return flat.some (Array.isArray) ? flatten(flat) : flat; })(arr); for (let i = 0; i < flattened.length; i++) { if ( typeof flattened[i] !== "number" && typeof flattened[i] !== "string" && typeof flattened[i] !== "boolean") { return false } } return true })(myNestedArray), true, "<code>myNestedArray</code> should contain only numbers, booleans, and strings as data elements");'
  - text: <code>myNestedArray</code>应该有5个级别的深度
    testString: 'assert.strictEqual((function(arr) {let depth = 0;function arrayDepth(array, i, d) { if (Array.isArray(array[i])) {  arrayDepth(array[i], 0, d + 1);} else {  depth = (d > depth) ? d : depth;}if (i < array.length) {  arrayDepth(array, i + 1, d);}  }arrayDepth(arr, 0, 0);return depth;})(myNestedArray), 4, "<code>myNestedArray</code> should have exactly 5 levels of depth");'
  - text: <code>myNestedArray</code>应该在嵌套3级深度的数组中恰好包含一个字符串<code>&quot;deep&quot;</code>
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deep").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deep")[0] === 2, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deep"</code> on an array nested 3 levels deep");'
  - text: <code>myNestedArray</code>应该在嵌套4级深度的数组中恰好包含一个字符串<code>&quot;deeper&quot;</code> deep”
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deeper").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deeper")[0] === 3, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deeper"</code> on an array nested 4 levels deep");'
  - text: <code>myNestedArray</code>应该在嵌套5级深度的数组中恰好包含一个字符串<code>&quot;deepest&quot;</code> <code>myNestedArray</code> <code>&quot;deepest&quot;</code>
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deepest").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deepest")[0] === 4, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deepest"</code> on an array nested 5 levels deep");'

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
// solution required
```
</section>

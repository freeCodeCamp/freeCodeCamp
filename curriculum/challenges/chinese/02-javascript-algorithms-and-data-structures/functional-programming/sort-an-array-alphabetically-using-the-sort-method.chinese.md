---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1

videoUrl: ''
localeTitle: Sort an Array Alphabetically using the sort Method
---

## Description
<section id='description'>
<code>sort</code>方法可以根据回调函数对数组元素进行排序。
举个例子：
<blockquote>function ascendingOrder(arr) {<br>&nbsp;&nbsp;return arr.sort(function(a, b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return a - b;<br>&nbsp;&nbsp;});<br>}<br>ascendingOrder([1, 5, 2, 3, 4]);<br>// Returns [1, 2, 3, 4, 5]<br><br>function reverseAlpha(arr) {<br>&nbsp;&nbsp;return arr.sort(function(a, b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return a < b;<br>&nbsp;&nbsp;});<br>}<br>reverseAlpha(['l', 'h', 'z', 'b', 's']);<br>// 返回 ['z', 's', 'l', 'h', 'b']</blockquote>
注意：提倡使用回调函数来指定如何对数组项进行排序。JavaScript 的默认排序算法是按照 Unicode 字符编码排序的，所以可能会返回意料之外的结果。
</section>

## Instructions
<section id='instructions'>
在<code>alphabeticalOrder</code>函数中使用<code>sort</code>方法对<code>arr</code>中的元素按照字母顺序排列。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用<code>sort</code>方法。
    testString: assert(code.match(/\.sort/g), '应该使用<code>sort</code>方法。');
  - text: "<code>alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])</code>应返回<code>['a', 'a', 'c', 'd', 'g', 'z']</code>。"
    testString: assert(JSON.stringify(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])) === JSON.stringify(["a", "a", "c", "d", "g", "z"]), '<code>alphabeticalOrder(["a", "d", "c", "a", "z", "g"])</code>应返回<code>["a", "a", "c", "d", "g", "z"]</code>。');
  - text: "<code>alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])</code>应返回<code>['a', 'h', 'm', 'm', 'n', 'x']</code>。"
    testString: assert(JSON.stringify(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])) === JSON.stringify(["a", "h", "m", "m", "n", "x"]), '<code>alphabeticalOrder(["x", "h", "a", "m", "n", "m"])</code>应返回<code>["a", "h", "m", "m", "n", "x"]</code>。');
  - text: "<code>alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])</code>应返回<code>['a', 'a', 'a', 'a', 't', 'x']</code>。"
    testString: assert(JSON.stringify(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])) === JSON.stringify(["a", "a", "a", "a", "t", "x"]), '<code>alphabeticalOrder(["a", "a", "a", "a", "x", "t"])</code>应返回<code>["a", "a", "a", "a", "t", "x"]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              
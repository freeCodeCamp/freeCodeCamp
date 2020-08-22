---
id: 587d7dab367417b2b2512b6f
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
challengeType: 1
forumTopicId: 301314
localeTitle: 使用 some 方法检查数组中是否有元素是否符合条件
---

## Description
<section id='description'>
<code>some</code>方法用于检测数组中<em>任何</em>元素是否满足指定条件。如果有一个元素满足条件，返回布尔值<code>true</code>，反之返回<code>false</code>。
举个例子，下面的代码检测数组<code>numbers</code>中是否有元素小于10：

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
```

</section>

## Instructions
<section id='instructions'>
在<code>checkPositive</code>函数值中使用<code>some</code>检查<code>arr</code>中是否有元素为正数，函数应返回一个布尔值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用<code>some</code>method.
    testString: assert(code.match(/\.some/g));
  - text: <code>checkPositive([1, 2, 3, -4, 5])</code>应返回<code>true</code>。
    testString: assert(checkPositive([1, 2, 3, -4, 5]));
  - text: <code>checkPositive([1, 2, 3, 4, 5])</code>应返回<code>true</code>。
    testString: assert(checkPositive([1, 2, 3, 4, 5]));
  - text: <code>checkPositive([-1, -2, -3, -4, -5])</code>应返回<code>false</code>。
    testString: assert(!checkPositive([-1, -2, -3, -4, -5]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkPositive(arr) {
  // Add your code below this line


  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function checkPositive(arr) {
  // Add your code below this line
  return arr.some(elem => elem > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

</section>

---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
forumTopicId: 301312
localeTitle: 使用 every 方法检查数组中的每个元素是否符合条件
---

## Description
<section id='description'>
<code>every</code>方法用于检测数组中<em>所有</em>元素是否都符合指定条件。如果所有元素满足条件，返回布尔值<code>true</code>，反之返回<code>false</code>。
举个例子，下面的代码检测数组<code>numbers</code>的所有元素是否都小于 10：

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
```

</section>

## Instructions
<section id='instructions'>
在<code>checkPositive</code>函数中使用<code>every</code>方法检查<code>arr</code>中是否所有元素都是正数，函数应返回一个布尔值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应使用<code>every</code>方法。
    testString: assert(code.match(/\.every/g));
  - text: <code>checkPositive([1, 2, 3, -4, 5])</code>应返回<code>false</code>。
    testString: assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
  - text: <code>checkPositive([1, 2, 3, 4, 5])</code>应返回<code>true</code>。
    testString: assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
  - text: <code>checkPositive([1, -2, 3, -4, 5])</code>应返回<code>false</code>。
    testString: assert.isFalse(checkPositive([1, -2, 3, -4, 5]));

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
  return arr.every(num => num > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

</section>

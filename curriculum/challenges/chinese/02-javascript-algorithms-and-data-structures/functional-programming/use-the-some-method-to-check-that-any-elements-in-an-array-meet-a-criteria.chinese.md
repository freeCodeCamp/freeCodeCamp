---
id: 587d7dab367417b2b2512b6f
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
challengeType: 1
videoUrl: ''
localeTitle: 使用某些方法检查阵列中的任何元素是否符合条件
---

## Description
<section id="description"> <code>some</code>方法适用于数组，以检查是否有<em>任何</em>元素通过了特定的测试。它返回一个布尔值 - 如果任何值满足条件，则返回<code>true</code>否则返回<code>false</code> 。例如，以下代码将检查<code>numbers</code>数组中的任何元素是否小于10： <blockquote> var number = [10,50,8,220,110,11]; <br> numbers.some（function（currentValue）{ <br> return currentValue &lt;10; <br> }）; <br> //返回true </blockquote></section>

## Instructions
<section id="instructions">使用<code>checkPositive</code>函数中的<code>some</code>方法检查<code>arr</code>任何元素是否为正数。该函数应返回一个布尔值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该使用<code>some</code>方法。
    testString: assert(code.match(/\.some/g));
  - text: '<code>checkPositive([1, 2, 3, -4, 5])</code>应该返回<code>true</code> 。'
    testString: assert(checkPositive([1, 2, 3, -4, 5]));
  - text: '<code>checkPositive([1, 2, 3, 4, 5])</code>应该返回<code>true</code> 。'
    testString: assert(checkPositive([1, 2, 3, 4, 5]));
  - text: '<code>checkPositive([-1, -2, -3, -4, -5])</code>应该返回<code>false</code> 。'
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
// solution required
```
</section>

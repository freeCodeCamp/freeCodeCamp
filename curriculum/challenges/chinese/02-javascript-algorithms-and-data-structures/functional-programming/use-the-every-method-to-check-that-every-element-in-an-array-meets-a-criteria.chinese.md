---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
videoUrl: ''
localeTitle: 使用every方法检查数组中的每个元素是否符合条件
---

## Description
<section id="description"> <code>every</code>方法都使用数组来检查<em>每个</em>元素是否通过了特定的测试。它返回一个布尔值 - 如果所有值都满足条件，则返回<code>true</code>否则返回<code>false</code> 。例如，以下代码将检查<code>numbers</code>数组中的每个元素是否小于10： <blockquote> var numbers = [1,5,8,0,10,11]; <br> numbers.every（function（currentValue）{ <br> return currentValue &lt;10; <br> }）; <br> //返回false </blockquote></section>

## Instructions
<section id="instructions">使用<code>checkPositive</code>函数中的<code>every</code>方法检查<code>arr</code>每个元素是否为正数。该函数应返回一个布尔值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该使用<code>every</code>方法。
    testString: assert(code.match(/\.every/g));
  - text: '<code>checkPositive([1, 2, 3, -4, 5])</code>应该返回<code>false</code> 。'
    testString: assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
  - text: '<code>checkPositive([1, 2, 3, 4, 5])</code>应该返回<code>true</code> 。'
    testString: assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
  - text: '<code>checkPositive([1, -2, 3, -4, 5])</code>应该返回<code>false</code> 。'
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
// solution required
```
</section>

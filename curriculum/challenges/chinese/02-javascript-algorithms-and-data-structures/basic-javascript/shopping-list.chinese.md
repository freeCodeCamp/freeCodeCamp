---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
videoUrl: ''
localeTitle: 购物清单
---

## Description
<section id="description">在变量<code>myList</code>创建购物清单。该列表应该是包含多个子阵列的多维数组。每个子数组中的第一个元素应包含一个带有项目名称的字符串。第二个元素应该是一个代表数量的数字，即<code>[&quot;Chocolate Bar&quot;, 15]</code>列表中应该至少有5个子数组。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code>应该是一个数组
    testString: 'assert(isArray, "<code>myList</code> should be an array");'
  - text: 每个子数组中的第一个元素都必须是字符串
    testString: 'assert(hasString, "The first elements in each of your sub-arrays must all be strings");'
  - text: 每个子数组中的第二个元素都必须是数字
    testString: 'assert(hasNumber, "The second elements in each of your sub-arrays must all be numbers");'
  - text: 您的列表中必须至少有5个项目
    testString: 'assert(count > 4, "You must have at least 5 items in your list");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myList = [];

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

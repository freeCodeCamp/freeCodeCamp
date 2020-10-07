---
id: 587d7b88367417b2b2512b44
challengeType: 1
forumTopicId: 301223
title: 编写带参数的箭头函数
---

## Description
<section id='description'>
和一般的函数一样，你也可以给箭头函数传递参数。

```js
// 给传入的数值乘以 2 并返回结果
const doubler = (item) => item * 2;
```

如果箭头函数只有一个参数，则可以省略包含该参数的括号。

```js
// the same function, without the argument parentheses
const doubler = item => item * 2;
```

可以将多个参数传递到箭头函数中。

```js
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
```

</section>

## Instructions
<section id='instructions'>
使用箭头函数的语法重写<code>myConcat</code>函数，使其可以将<code>arr2</code>的内容填充在<code>arr1</code>里。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 替换掉所有的<code>var</code>关键字。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>myConcat</code>应该是一个常量 (使用<code>const</code>)。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+myConcat/g));
  - text: <code>myConcat</code>应该是一个函数。
    testString: assert(typeof myConcat === 'function');
  - text: <code>myConcat()</code> 应该返回 <code>[1, 2, 3, 4, 5]</code>。
    testString: assert(() => { const a = myConcat([1], [2]); return a[0] == 1 && a[1] == 2; });
  - text: 不要使用<code>function</code>关键字。
    testString: getUserInput => assert(!getUserInput('index').match(/function/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```

</div>



</section>

## Solution
<section id='solution'>

```js
const myConcat = (arr1, arr2) =>  {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```

</section>

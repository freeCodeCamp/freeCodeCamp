---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
challengeType: 1
videoUrl: ''
localeTitle: 用参数写箭头函数
---

## Description
<section id="description">就像普通函数一样，您可以将参数传递给箭头函数。 <blockquote> //将输入值加倍并返回<br> const doubler =（item）=&gt; item * 2; </blockquote>您也可以将多个参数传递给箭头函数。 </section>

## Instructions
<section id="instructions">重写<code>myConcat</code>函数，该函数将<code>arr2</code>内容追加到<code>arr1</code>以便该函数使用箭头函数语法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 用户确实替换了<code>var</code>关键字。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>myConcat</code>应该是一个常量变量（使用<code>const</code> ）。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+myConcat/g));
  - text: <code>myConcat</code>应该是一个函数
    testString: assert(typeof myConcat === 'function');
  - text: <code>myConcat()</code>返回正确的<code>array</code>
    testString: assert(() => { const a = myConcat([1], [2]); return a[0] == 1 && a[1] == 2; });
  - text: <code>function</code>关键字未使用。
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
// solution required
```
</section>

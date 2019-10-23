---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1
videoUrl: ''
localeTitle: 使用解构分配将对象作为函数的参数传递
---

## Description
<section id="description">在某些情况下，您可以在函数参数本身中对对象进行解构。考虑以下代码： <blockquote> const profileUpdate =（profileData）=&gt; { <br> const {name，age，nationality，location} = profileData; <br> //用这些变量做点什么<br> } </blockquote>这有效地破坏了发送到函数中的对象。这也可以就地完成： <blockquote> const profileUpdate =（{name，age，nationality，location}）=&gt; { <br> / *用这些字段做某事* / <br> } </blockquote>这将删除一些额外的行，使我们的代码看起来整洁。这具有额外的好处，即不必操纵函数中的整个对象;只有所需的字段才会复制到函数内部。 </section>

## Instructions
<section id="instructions">在函数<code>half</code>的参数内使用解构赋值，仅在函数内发送<code>max</code>和<code>min</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>stats</code>应该是一个<code>object</code> 。
    testString: 'assert(typeof stats === "object", "<code>stats</code> should be an <code>object</code>.");'
  - text: <code>half(stats)</code>应为<code>28.015</code>
    testString: 'assert(half(stats) === 28.015, "<code>half(stats)</code> should be <code>28.015</code>");'
  - text: 使用了解构。
    testString: 'getUserInput => assert(getUserInput("index").match(/\(\s*\{\s*\w+\s*,\s*\w+\s*\}\s*\)/g), "Destructuring was used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half(stats) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

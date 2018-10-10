---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
videoUrl: ''
localeTitle: 使用解构分配从嵌套对象分配变量
---

## Description
<section id="description">我们可以类似地将<em>嵌套</em>对象解构为变量。请考虑以下代码： <blockquote> const a = { <br>开始：{x：5，y：6}， <br>结束：{x：6，y：-9} <br> }; <br> const {start：{x：startX，y：startY}} = a; <br> console.log（startX，startY）; // 5,6 </blockquote>在上面的示例中，变量<code>start</code>被赋予<code>a.start</code>的值，该值也是一个对象。 </section>

## Instructions
<section id="instructions">用解构赋值来获得<code>max</code>的<code>forecast.tomorrow</code>并将其分配给<code>maxOfTomorrow</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maxOfTomorrow</code>等于<code>84.6</code>
    testString: 'assert(getMaxOfTmrw(LOCAL_FORECAST) === 84.6, "<code>maxOfTomorrow</code> equals <code>84.6</code>");'
  - text: 使用嵌套解构
    testString: 'getUserInput => assert(getUserInput("index").match(/\{\s*tomorrow\s*:\s*\{\s*max\s*:\s*maxOfTomorrow\s*\}\s*\}\s*=\s*forecast/g),"nested destructuring was used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const maxOfTomorrow = undefined; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

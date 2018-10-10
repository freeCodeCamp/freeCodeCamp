---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
videoUrl: ''
localeTitle: 使用解构分配从对象分配变量
---

## Description
<section id="description">我们之前看到扩展运算符如何有效地扩展或解包数组的内容。我们也可以用对象做类似的事情。 <dfn>解构赋值</dfn>是一种特殊的语法，用于将直接从对象获取的值整齐地分配给变量。请考虑以下ES5代码： <blockquote> var voxel = {x：3.6，y：7.4，z：6.54}; <br> var x = voxel.x; // x = 3.6 <br> var y = voxel.y; // y = 7.4 <br> var z = voxel.z; // z = 6.54 </blockquote>这是与ES6解构语法相同的赋值语句： <blockquote> const {x，y，z} =体素; // x = 3.6，y = 7.4，z = 6.54 </blockquote>相反，如果你想将<code>voxel.x</code>的值存储到<code>a</code> ，将<code>voxel.y</code>到<code>b</code> ，将<code>voxel.z</code>到<code>c</code> ，那么你也有这种自由。 <blockquote> const {x：a，y：b，z：c} =体素// a = 3.6，b = 7.4，c = 6.54 </blockquote>您可以将其读作“获取字段<code>x</code>并将值复制到<code>a</code>中”，依此类推。 </section>

## Instructions
<section id="instructions">使用解构从输入对象<code>AVG_TEMPERATURES</code>获得明天的平均温度，并在<code>tomorrow</code>将关键值赋值给<code>tempOfTomorrow</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getTempOfTmrw(AVG_TEMPERATURES)</code>应为<code>79</code>
    testString: 'assert(getTempOfTmrw(AVG_TEMPERATURES) === 79, "<code>getTempOfTmrw(AVG_TEMPERATURES)</code> should be <code>79</code>");'
  - text: 使用了重新分配的解构
    testString: 'getUserInput => assert(getUserInput("index").match(/\{\s*tomorrow\s*:\s*tempOfTomorrow\s*}\s*=\s*avgTemperatures/g),"destructuring with reassignment was used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const tempOfTomorrow = undefined; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

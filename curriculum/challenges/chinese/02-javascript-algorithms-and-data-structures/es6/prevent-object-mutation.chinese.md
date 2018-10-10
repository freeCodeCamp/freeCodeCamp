---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
challengeType: 1
videoUrl: ''
localeTitle: 防止对象突变
---

## Description
<section id="description">正如之前的挑战所示， <code>const</code>声明本身并不能真正保护您的数据免受突变。为确保您的数据不会发生变化，JavaScript提供了一个<code>Object.freeze</code>函数来防止数据突变。对象冻结后，您将无法再从中添加，更新或删除属性。任何更改对象的尝试都将被拒绝而不会出现错误。 <blockquote>让obj = { <br>名称：“FreeCodeCamp” <br>点评：“真棒” <br> }; <br> Object.freeze（OBJ）; <br> obj.review =“坏”; //将被忽略。不允许变异<br> obj.newProp =“测试”; //将被忽略。不允许变异<br>的console.log（OBJ）; <br> // {name：“FreeCodeCamp”，评论：“很棒”} </blockquote></section>

## Instructions
<section id="instructions">在这个挑战中，您将使用<code>Object.freeze</code>来防止数学常量发生变化。您需要冻结<code>MATH_CONSTANTS</code>对象，以便没有人能够更改<code>PI</code>的值，添加或删除属性。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要替换<code>const</code>关键字。
    testString: 'getUserInput => assert(getUserInput("index").match(/const/g), "Do not replace <code>const</code> keyword.");'
  - text: <code>MATH_CONSTANTS</code>应该是一个常量变量（使用<code>const</code> ）。
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+MATH_CONSTANTS/g), "<code>MATH_CONSTANTS</code> should be a constant variable (by using <code>const</code>).");'
  - text: 请勿更改原始<code>MATH_CONSTANTS</code> 。
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g), "Do not change original <code>MATH_CONSTANTS</code>.");'
  - text: <code>PI</code>等于<code>3.14</code> 。
    testString: 'assert(PI === 3.14, "<code>PI</code> equals <code>3.14</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line


  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
challengeType: 1
forumTopicId: 301207
localeTitle: 防止对象改变
---

## Description
<section id='description'>
通过之前的挑战可以看出，<code>const</code>声明并不会真的保护你的数据不被改变。为了确保数据不被改变，JavaScript 提供了一个函数<code>Object.freeze</code>来防止数据改变。
当一个对象被冻结的时候，你不能再对它的属性再进行增、删、改的操作。任何试图改变对象的操作都会被阻止，却不会报错。

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
```

</section>

## Instructions
<section id='instructions'>
在这个挑战中，你将使用<code>Object.freeze</code>来防止数学常量被改变。你需要冻结<code>MATH_CONSTANTS</code>对象，使得没有人可以改变<code>PI</code>的值，抑或增加或删除属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要替换<code>const</code>关键字。
    testString: getUserInput => assert(getUserInput('index').match(/const/g));
  - text: <code>MATH_CONSTANTS</code>应该为一个常量 (使用<code>const</code>)。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
  - text: 不要改变原始的<code>MATH_CONSTANTS</code>。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g));
  - text: <code>PI</code>等于<code>3.14</code>。
    testString: assert(PI === 3.14);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line


  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
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
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

</section>

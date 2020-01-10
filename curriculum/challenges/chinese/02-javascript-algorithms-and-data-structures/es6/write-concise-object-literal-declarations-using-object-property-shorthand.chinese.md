---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Object Property Shorthand
challengeType: 1
forumTopicId: 301225
localeTitle: 使用简单字段编写简洁的对象字面量声明
---

## Description
<section id='description'>
ES6 添加了一些很棒的功能，以便于更方便地定义对象。
请看以下代码：

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

<code>getMousePosition</code>是一个返回了拥有2个属性的对象的简单函数。
ES6 提供了一个语法糖，消除了类似<code>x: x</code>这种冗余的写法.你可以仅仅只写一次<code>x</code>，解释器会自动将其转换成<code>x: x</code>。
下面是使用这种语法重写的同样的函数：

```js
const getMousePosition = (x, y) => ({ x, y });
```

</section>

## Instructions
<section id='instructions'>
请使用简单属性对象的语法来创建并返回一个<code>Person</code>对象。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '输出是<code>{name: "Zodiac Hasbro", age: 56, gender: "male"}</code>。'
    testString: assert.deepEqual({name:"Zodiac Hasbro",age:56,gender:"male"}, createPerson("Zodiac Hasbro", 56, "male"));
  - text: '不要使用<code>key:value</code>。'
    testString: getUserInput => assert(!getUserInput('index').match(/:/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
```

</div>



</section>

## Solution
<section id='solution'>

```js
const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name,
    age,
    gender
  };
};
```

</section>

---
id: 587d7b8b367417b2b2512b50
challengeType: 1
forumTopicId: 301224
title: 用 ES6 编写简洁的函数声明
---

## Description
<section id='description'>
在 ES5 中，当我们需要在对象中定义一个函数的时候，我们必须如下面这般使用<code>function</code>关键字：

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

在 ES6 语法的对象中定义函数的时候，你可以完全删除<code>function</code>关键字和冒号。请看以下例子：

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

</section>

## Instructions
<section id='instructions'>
使用以上这种简短的语法，重构在<code>bicycle</code>对象中的<code>setGear</code>函数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应使用<code>function</code>关键字定义方法。
    testString: getUserInput => assert(!removeJSComments(code).match(/function/));
  - text: <code>setGear</code>应是一个函数。
    testString: assert(typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/));
  - text: 执行<code>bicycle.setGear(48)</code>应可以让<code>gear</code>的值变为 48。
    testString: assert((new bicycle.setGear(48)).gear === 48);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

</div>

### After Test
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
```

</div>

</section>

## Solution
<section id='solution'>

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```

</section>

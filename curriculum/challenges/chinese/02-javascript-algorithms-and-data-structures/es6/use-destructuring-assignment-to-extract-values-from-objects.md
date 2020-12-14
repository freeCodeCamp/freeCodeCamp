---
id: 5cfa550e84205a357704ccb6
challengeType: 1
forumTopicId: 301216
title: 使用解构赋值来获取对象的值
---

## Description
<section id='description'>
<dfn>解构赋值</dfn> 是 ES6 引入的新语法，用来从数组和对象中提取值，并优雅的对变量进行赋值。

有如下 ES5 代码：

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
```

下面是使用 ES6 解构赋值的等价语句：

```js
const { name, age } = user;
// name = 'John Doe', age = 34
```

在这里，<code>name</code> 和 <code>age</code> 被自动创建并赋予 <code>user</code> 对象相应属性的值。一目了然。

解构赋值的参数数量可以任意。
</section>

## Instructions
<section id='instructions'>
把两个赋值语句替换成等价的解构赋值。<code>today</code> 和 <code>tomorrow</code> 的值应该还为 <code>HIGH_TEMPERATURES</code> 对象的 <code>today</code> 和 <code>tomorrow</code> 属性的值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该移除 ES5 赋值语句。
    testString: assert(!code.match(/today = HIGH_TEMPERATURES\.today/g) && !code.match(/tomorrow = HIGH_TEMPERATURES\.tomorrow/g))
  - text: 应该解构创建 <code>today</code> 变量。
    testString: assert(code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));
  - text: 应该解构创建 <code>tomorrow</code> 变量。
    testString: assert(code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// change code above this line

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
```

</div>
</section>

## Solution
<section id='solution'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
```

</section>

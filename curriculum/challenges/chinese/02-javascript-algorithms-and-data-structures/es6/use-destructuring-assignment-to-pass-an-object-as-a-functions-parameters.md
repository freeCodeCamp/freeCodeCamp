---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1
forumTopicId: 301217
localeTitle: 使用解构赋值将对象作为函数的参数传递
---

## Description
<section id='description'>
在某些情况下，你可以在函数的参数里直接解构对象。
请看以下代码：

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```

上面的操作解构了传给函数的对象。这样的操作也可以直接在参数里完成：

```js
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
```

这样的操作去除了多余的代码，使代码更加整洁。
这样做还有个额外的好处：函数不需要再去操作整个对象，而仅仅是操作复制到函数作用域内部的参数。
</section>

## Instructions
<section id='instructions'>
对<code>half</code>的参数进行解构赋值，使得仅仅将<code>max</code>与<code>min</code>的值传进函数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>stats</code>的类型应该是一个<code>object</code>。
    testString: assert(typeof stats === 'object');
  - text: <code>half(stats)</code>应该等于<code>28.015</code>
    testString: assert(half(stats) === 28.015);
  - text: 应该使用解构赋值。
    testString: assert(code.replace(/\s/g, '').match(/half=\({\w+,\w+}\)/));
  - text: 应该使用解构参数。
    testString: assert(!code.match(/stats\.max|stats\.min/));

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

// change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; // use function argument destructuring
// change code above this line

console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
```

</div>



</section>

## Solution
<section id='solution'>

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```

</section>

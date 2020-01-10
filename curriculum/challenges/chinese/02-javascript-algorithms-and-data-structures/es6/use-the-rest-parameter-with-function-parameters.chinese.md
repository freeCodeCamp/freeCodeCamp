---
id: 587d7b88367417b2b2512b47
title: Use the Rest Parameter with Function Parameters
challengeType: 1
forumTopicId: 301221
localeTitle: 将 rest 操作符与函数参数一起使用
---

## Description
<section id='description'>
ES6 推出了用于函数参数的<dfn> rest 操作符</dfn>帮助我们创建更加灵活的函数。在<code>rest</code>操作符的帮助下，你可以创建有一个变量来接受多个参数的函数。这些参数被储存在一个可以在函数内部读取的数组中。
请看以下代码：

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```

<code>rest</code>操作符可以避免查看<code>args</code>数组的需求，并且允许我们在参数数组上使用<code>map()</code>、<code>fiter()</code> 和 <code>reduce()</code>。
</section>

## Instructions
<section id='instructions'>
修改<code>sum</code>函数，来让它使用<code>rest</code>操作符，并且它可以在有任何数量的参数时以相同的形式工作。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sum(0,1,2)</code>的返回结果应该为3。
    testString: assert(sum(0,1,2) === 3);
  - text: <code>sum(1,2,3,4)</code>的返回结果应该为10。
    testString: assert(sum(1,2,3,4) === 10);
  - text: <code>sum(5)</code>的返回结果应该为5。
    testString: assert(sum(5) === 5);
  - text: <code>sum()</code>的返回结果应该为 0。
    testString: assert(sum() === 0);
  - text: 对<code>sum</code>函数的<code>args</code>参数使用了<code>...</code>展开操作符。
    testString: assert(code.replace(/\s/g,'').match(/sum=\(\.\.\.args\)=>/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
```

</div>



</section>

## Solution
<section id='solution'>

```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```

</section>

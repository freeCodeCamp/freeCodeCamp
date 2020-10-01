---
id: 587d7b85367417b2b2512b3a
challengeType: 1
forumTopicId: 301184
title: 调用函数时，捕获以错误顺序传递的参数
---

## Description
<section id='description'>
继续讨论调用函数，需要注意的下一个 bug 是函数的参数传递顺序错误。 如果参数分别是不同的类型，例如接受数组和整数两个参数的函数，参数顺序传错就可能会引发运行时错误。对于接受相同类型参数的函数，传错参数也会导致逻辑错误或运行结果错误。确保以正确的顺序提供所有必需的参数以避免这些问题。
</section>

## Instructions
<section id='instructions'>
函数<code>raiseToPower</code>返回基数 (base) 的指数 (exponent) 次幂。不幸的是，它没有被正确调用 ———— 修改代码，使<code>power</code>的值为 8。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应修复变量<code>power</code>，使其等于 2 的 3 次方，而不是 3 的 2 次方。
    testString: assert(power == 8);
  - text: 你调用<code>raiseToPower</code>函数时，传递参数的顺序应正确。
    testString: assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```

</section>

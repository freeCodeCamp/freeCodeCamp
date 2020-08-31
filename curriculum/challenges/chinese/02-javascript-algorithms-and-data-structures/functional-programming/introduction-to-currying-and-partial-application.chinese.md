---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
forumTopicId: 301232
localeTitle: 函数柯里化
---

## Description
<section id='description'>
<code>arity</code>是函数所需的形参的数量。函数<code>柯里化</code>意思是把接受多个<code>arity</code>的函数变换成接受单一<code>arity</code>的函数。
换句话说，就是重构函数让它接收一个参数，然后返回接收下一个参数的函数，依此类推。
举个例子：

```js
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//柯里化函数
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // 返回 3
```

柯里化在不能一次为函数提供所有参数情况下很有用。因为它可以将每个函数的调用保存到一个变量中，该变量将保存返回的函数引用，该引用在下一个参数可用时接受该参数。下面是使用<code>柯里化</code>函数的例子：

```js
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
```

类似地，<code>局部应用</code>的意思是一次对一个函数应用几个参数，然后返回另一个应用更多参数的函数。
举个例子：

```js
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```

</section>

## Instructions
<section id='instructions'>
填写<code>add</code>函数主体部分，用柯里化添加参数<code>x</code>，<code>y</code>和<code>z</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add(10)(20)(30)</code>应返回<code>60</code>。
    testString: assert(add(10)(20)(30) === 60);
  - text: <code>add(1)(2)(3)</code>应返回<code>6</code>。
    testString: assert(add(1)(2)(3) === 6);
  - text: <code>add(11)(22)(33)</code>应返回<code>66</code>。
    testString: assert(add(11)(22)(33) === 66);
  - text: 应返回<code>x + y + z</code>的最终结果。
    testString: assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add(x) {
  // Add your code below this line


  // Add your code above this line
}
add(10)(20)(30);
```

</div>



</section>

## Solution
<section id='solution'>

```js
const add = x => y => z => x + y + z
```

</section>

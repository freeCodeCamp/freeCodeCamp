---
id: 587d7b85367417b2b2512b39
challengeType: 1
forumTopicId: 301185
title: 捕捉函数调用后缺少的左括号和右括号
---

## Description
<section id='description'>
当函数或方法不接受任何参数时，你可能忘记在调用它时加上空的左括号和右括号。通常，函数调用的结果会保存在变量中，供其他代码使用。可以通过将变量值（或其类型）打印到控制台，查看输出究竟是一个函数引用还是函数调用的返回值来检测这类错误。
下面示例中的两个变量是不同的:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
```

</section>

## Instructions
<section id='instructions'>
修复代码，把调用函数<code>getNin​​e</code>的返回值赋给变量<code>result</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该修复变量<code>result</code>使其为函数<code>getNine</code>的返回值。
    testString: assert(result == 9);
  - text: 你应该调用<code>getNine</code>函数。
    testString: assert(code.match(/getNine\(\)/g).length == 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```

</section>


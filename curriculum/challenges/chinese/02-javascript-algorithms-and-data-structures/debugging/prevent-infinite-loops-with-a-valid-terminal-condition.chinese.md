---
id: 587d7b86367417b2b2512b3d
title: Prevent Infinite Loops with a Valid Terminal Condition
challengeType: 1
videoUrl: ''
localeTitle: 使用有效的终端条件防止无限循环
---

## Description
<section id="description">最后一个话题是可怕的无限循环。当您需要程序运行代码块一定次数或满足条件时，循环是很好的工具，但是它们需要终止条件来结束循环。无限循环可能会冻结或崩溃浏览器，并导致一般程序执行混乱，没有人想要。在本节的介绍中有一个无限循环的例子 - 它没有终止条件来摆脱<code>loopy()</code>内的<code>while</code>循环。不要叫这个功能！ <blockquote> function loopy（）{ <br> while（true）{ <br> console.log（“Hello，world！”）; <br> } <br> } </blockquote>程序员的工作是确保最终达到终止条件，该条件告诉程序何时突破循环代码。一个错误是从终端条件向错误方向递增或递减计数器变量。另一个是在循环代码中意外重置计数器或索引变量，而不是递增或递减它。 </section>

## Instructions
<section id="instructions"> <code>myFunc()</code>函数包含一个无限循环，因为终端条件<code>i != 4</code>将永远不会计算为<code>false</code> （并且会中断循环） - <code>i</code>将每次递增2，然后跳过4，因为<code>i</code>是奇数启动。固定在终端条件比较运算符因此该循环仅运行<code>i</code>小于或等于4。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该更改<code>for</code>循环的终端条件（中间部分）中的比较运算符。
    testString: assert(code.match(/i\s*?<=\s*?4;/g).length == 1);
  - text: 您的代码应该在循环的终端条件中修复比较运算符。
    testString: assert(!code.match(/i\s*?!=\s*?4;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

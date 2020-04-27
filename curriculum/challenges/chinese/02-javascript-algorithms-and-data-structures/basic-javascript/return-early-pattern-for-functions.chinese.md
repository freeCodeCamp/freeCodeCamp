---
id: 56533eb9ac21ba0edf2244c4
title: Return Early Pattern for Functions
challengeType: 1
videoUrl: ''
localeTitle: 返回函数的早期模式
---

## Description
<section id="description">当达到<code>return</code>语句时，当前函数的执行停止，控制返回到调用位置。 <strong>例</strong> <blockquote> function myFun（）{ <br>的console.log（ “你好”）; <br>回归“世界”; <br>的console.log（ “BYEBYE”） <br> } <br> myFun（）; </blockquote>上面输出“Hello”到控制台，返回“World”，但是<code>&quot;byebye&quot;</code>永远不输出，因为函数退出<code>return</code>语句。 </section>

## Instructions
<section id="instructions">修改函数<code>abTest</code>以便如果<code>a</code>或<code>b</code>小于<code>0</code> ，函数将立即以<code>undefined</code>值退出。 <strong>暗示</strong> <br>请记住， <a href="http://www.freecodecamp.org/challenges/understanding-uninitialized-variables" target="_blank"><code>undefined</code>是一个关键字</a> ，而不是一个字符串。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>abTest(2,2)</code>应返回一个数字'
    testString: assert(typeof abTest(2,2) === 'number' );
  - text: '<code>abTest(2,2)</code>应该返回<code>8</code>'
    testString: assert(abTest(2,2) === 8 );
  - text: '<code>abTest(-2,2)</code>应返回<code>undefined</code>'
    testString: assert(abTest(-2,2) === undefined );
  - text: '<code>abTest(2,-2)</code>应返回<code>undefined</code>'
    testString: assert(abTest(2,-2) === undefined );
  - text: '<code>abTest(2,8)</code>应该返回<code>18</code>'
    testString: assert(abTest(2,8) === 18 );
  - text: '<code>abTest(3,3)</code>应该返回<code>12</code>'
    testString: assert(abTest(3,3) === 12 );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

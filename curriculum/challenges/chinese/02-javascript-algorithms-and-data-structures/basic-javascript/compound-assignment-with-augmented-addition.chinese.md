---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
localeTitle: 复合赋值之 +=
---

## Description
<section id='description'>
在编程当中，通常通过赋值来修改变量的内容。记住，赋值时 Javascript 会先计算<code>=</code>右边的内容，所以我们可以写这样的语句：
<code>myVar = myVar + 5;</code>
以上是最常见的运算赋值语句，即先运算、再赋值。还有一类操作符是一步到位既做运算也赋值的。
其中一种就是<code>+=</code>运算符。

```js
var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6
```

</section>

## Instructions
<section id='instructions'>
使用<code>+=</code>操作符实现同样的效果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code>应该等于<code>15</code>。
    testString: assert(a === 15);
  - text: <code>b</code>应该等于<code>26</code>。
    testString: assert(b === 26);
  - text: <code>c</code>应该等于<code>19</code>。
    testString: assert(c === 19);
  - text: 你应该对每个变量使用<code>+=</code>操作符。
    testString: assert(code.match(/\+=/g).length === 3);
  - text: 不要修改注释上面的代码。
    testString: assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a = a + 12;
b = 9 + b;
c = c + 7;

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;
```

</section>

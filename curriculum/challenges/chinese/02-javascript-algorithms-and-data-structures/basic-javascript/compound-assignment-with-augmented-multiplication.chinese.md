---
id: 56533eb9ac21ba0edf2244b1
title: Compound Assignment With Augmented Multiplication
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
localeTitle: 复合赋值之 *=
---

## Description
<section id='description'>
<code>*=</code>操作符是让变量与一个数相乘并赋值。
<code>myVar = myVar * 5;</code>
变量<code>myVar</code>等于自身与数值<code>5</code>相乘的值。也可以写作这样的形式: 
<code>myVar *= 5;</code>
</section>

## Instructions
<section id='instructions'>
使用<code>*=</code>操作符实现同样的效果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code>应该等于<code>25</code>。
    testString: assert(a === 25);
  - text: <code>b</code>应该等于<code>36</code>。
    testString: assert(b === 36);
  - text: <code>c</code>应该等于<code>46</code>。
    testString: assert(c === 46);
  - text: 应该对每个变量使用<code>*=</code>操作符。
    testString: assert(code.match(/\*=/g).length === 3);
  - text: 不要修改注释上面的代码。
    testString: assert(/var a = 5;/.test(code) && /var b = 12;/.test(code) && /var c = 4\.6;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a = a * 5;
b = 3 * b;
c = c * 10;


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
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```

</section>

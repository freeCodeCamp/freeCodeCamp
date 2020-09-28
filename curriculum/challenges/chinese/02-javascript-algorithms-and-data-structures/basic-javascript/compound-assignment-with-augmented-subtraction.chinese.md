---
id: 56533eb9ac21ba0edf2244b0
title: Compound Assignment With Augmented Subtraction
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
localeTitle: 复合赋值之 -=
---

## Description
<section id='description'>
与<code>+=</code>操作符类似，<code>-=</code>操作符用来对一个变量进行减法赋值操作。
<code>myVar = myVar - 5;</code>
变量<code>myVar</code>等于自身减去<code>5</code>的值。也可以写成这种形式：
<code>myVar -= 5;</code>
</section>

## Instructions
<section id='instructions'>
使用<code>-=</code>操作符实现同样的效果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code>应该等于<code>5</code>。
    testString: assert(a === 5);
  - text: <code>b</code>应该等于<code>-6</code>。
    testString: assert(b === -6);
  - text: <code>c</code>应该等于<code>2</code>。
    testString: assert(c === 2);
  - text: 应该对每个变量使用<code>-=</code>操作符。
    testString: assert(code.match(/-=/g).length === 3);
  - text: 不要修改注释上面的代码。
    testString: assert(/var a = 11;/.test(code) && /var b = 9;/.test(code) && /var c = 3;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a = a - 6;
b = b - 15;
c = c - 1;


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
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;


```

</section>

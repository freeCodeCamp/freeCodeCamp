---
id: 56533eb9ac21ba0edf2244b2
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
title: 复合赋值之 /=
---

## Description
<section id='description'>
<code>/=</code>操作符是让变量与另一个数相除并赋值。
<code>myVar = myVar / 5;</code>
变量<code>myVar</code>等于自身除以<code>5</code>的值。等价于: 
<code>myVar /= 5;</code>
</section>

## Instructions
<section id='instructions'>
使用<code>/=</code>操作符实现同样的效果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code>应该等于<code>4</code>。
    testString: assert(a === 4);
  - text: <code>b</code>应该等于<code>27</code>。
    testString: assert(b === 27);
  - text: <code>c</code>应该等于<code>3</code>。
    testString: assert(c === 3);
  - text: 应该对每个变量使用<code>/=</code>操作符。
    testString: assert(code.match(/\/=/g).length === 3);
  - text: 不要修改注释上面的代码。
    testString: assert(/var a = 48;/.test(code) && /var b = 108;/.test(code) && /var c = 33;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a = a / 12;
b = b / 4;
c = c / 11;

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
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;
```

</section>

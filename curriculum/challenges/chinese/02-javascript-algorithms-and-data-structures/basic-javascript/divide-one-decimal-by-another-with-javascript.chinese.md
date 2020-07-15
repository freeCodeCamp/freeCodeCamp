---
id: bd7993c9ca9feddfaeb7bdef
title: Divide One Decimal by Another with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZe9AW'
forumTopicId: 18255
localeTitle: 两个小数相除
---

## Description
<section id='description'>
现在让我们将一个小数除以另一个小数。
</section>

## Instructions
<section id='instructions'>
改变数值<code>0.0</code>的值让变量<code>quotient</code>的值等于<code>2.2</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quotient</code>的值应该等于<code>2.2</code>。
    testString: assert(quotient === 2.2);
  - text: 使用<code>/</code>运算符将 4.4 除以 2。
    testString: assert(/4\.40*\s*\/\s*2\.*0*/.test(code));
  - text: quotient 变量应该只被赋值一次。
    testString: assert(code.match(/quotient/g).length === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var quotient = 0.0 / 2.0; // Fix this line
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(y){return 'quotient = '+y;})(quotient);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var quotient = 4.4 / 2.0;
```

</section>

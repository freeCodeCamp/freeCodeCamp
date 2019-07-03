---
id: bd7993c9ca9feddfaeb7bdef
title: Divide One Decimal by Another with JavaScript
challengeType: 1

videoUrl: ''
localeTitle: Divide One Decimal by Another with JavaScript
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
  - text: <code>quotient</code>的值应该等于<code>2.2</code>
    testString: assert(quotient === 2.2, '<code>quotient</code>的值应该等于<code>2.2</code>');
  - text: 使用<code>/</code>运算符将 4.4 除以 2
    testString: assert(/4\.40*\s*\/\s*2\.*0*/.test(code), '使用<code>/</code>运算符将 4.4 除以 2');
  - text: quotient 变量应该只被赋值一次
    testString: assert(code.match(/quotient/g).length === 1, 'quotient 变量应该只被赋值一次');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
(function(y){return 'quotient = '+y;})(quotient);
```

</div>

</section>

              
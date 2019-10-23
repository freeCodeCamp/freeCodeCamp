---
id: bd7993c9ca9feddfaeb7bdef
title: Divide One Decimal by Another with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript将另一个十进制除以另一个
---

## Description
<section id="description">现在让我们将一位小数除以另一位小数。 </section>

## Instructions
<section id="instructions">更改<code>0.0</code>使<code>quotient</code>等于<code>2.2</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 变<code>quotient</code>应该等于<code>2.2</code>
    testString: 'assert(quotient === 2.2, "The variable <code>quotient</code> should equal <code>2.2</code>");'
  - text: 您应该使用<code>/</code>运算符将4.4除以2
    testString: 'assert(/4\.40*\s*\/\s*2\.*0*/.test(code), "You should use the <code>/</code> operator to divide 4.4 by 2");'
  - text: 商数变量只应分配一次
    testString: 'assert(code.match(/quotient/g).length === 1, "The quotient variable should only be assigned once");'

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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

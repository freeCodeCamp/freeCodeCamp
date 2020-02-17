---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript减少数字
---

## Description
<section id="description">您可以使用<code>--</code>运算符轻松地将变量<dfn>减1</dfn>或减1。 <code>i--;</code>相当于<code>i = i - 1;</code> <strong>注意</strong> <br>整条线变成了<code>i--;</code> ，消除了对等号的需要。 </section>

## Instructions
<section id="instructions">更改代码以在<code>myVar</code>上使用<code>--</code>运算符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code>应该等于<code>10</code>
    testString: assert(myVar === 10);
  - text: <code>myVar = myVar - 1;</code>应该改变
    testString: assert(/var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code));
  - text: 在<code>myVar</code>上使用<code>--</code>运算符
    testString: assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
  - text: 不要更改行上方的代码
    testString: assert(/var myVar = 11;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;

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

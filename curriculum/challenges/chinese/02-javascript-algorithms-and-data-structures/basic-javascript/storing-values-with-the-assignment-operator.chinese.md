---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1
videoUrl: ''
localeTitle: 使用赋值运算符存储值
---

## Description
<section id="description">在JavaScript中，您可以使用<dfn>赋值</dfn>运算符将值存储在变量中。 <code>myVariable = 5;</code>这将<code>Number</code>值<code>5</code>分配给<code>myVariable</code> 。作业总是从右到左。在将值分配给运算符左侧的变量之前，将解析<code>=</code>运算符右侧的所有内容。 <blockquote> myVar = 5; <br> myNum = myVar; </blockquote>这将为<code>myVar</code>分配<code>5</code> ，然后再次将<code>myVar</code>解析为<code>5</code>并将其分配给<code>myNum</code> 。 </section>

## Instructions
<section id="instructions">将值<code>7</code>分配给变量<code>a</code> 。分配的内容<code>a</code>变量<code>b</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要更改行上方的代码
    testString: 'assert(/var a;/.test(code) && /var b = 2;/.test(code), "Do not change code above the line");'
  - text: <code>a</code>的值应为7
    testString: 'assert(typeof a === "number" && a === 7, "<code>a</code> should have a value of 7");'
  - text: <code>b</code>的值应为7
    testString: 'assert(typeof b === "number" && b === 7, "<code>b</code> should have a value of 7");'
  - text: <code>a</code>应分配给<code>b</code> <code>=</code>
    testString: 'assert(/b\s*=\s*a\s*;/g.test(code), "<code>a</code> should be assigned to <code>b</code> with <code>=</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var a;
var b = 2;

// Only change code below this line

```

</div>

### Before Test
<div id='js-setup'>

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}

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

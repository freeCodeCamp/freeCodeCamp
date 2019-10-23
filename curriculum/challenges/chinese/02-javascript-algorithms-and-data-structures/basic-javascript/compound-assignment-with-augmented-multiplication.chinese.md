---
id: 56533eb9ac21ba0edf2244b1
title: Compound Assignment With Augmented Multiplication
challengeType: 1
videoUrl: ''
localeTitle: 具有增广乘法的复合赋值
---

## Description
<section id="description"> <code>*=</code>运算符将变量乘以数字。 <code>myVar = myVar * 5;</code>将<code>myVar</code>乘以<code>5</code> 。这可以改写为： <code>myVar *= 5;</code> </section>

## Instructions
<section id="instructions">转换<code>a</code> ， <code>b</code>和<code>c</code>的赋值以使用<code>*=</code>运算符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code>应该等于<code>25</code>
    testString: 'assert(a === 25, "<code>a</code> should equal <code>25</code>");'
  - text: <code>b</code>应该等于<code>36</code>
    testString: 'assert(b === 36, "<code>b</code> should equal <code>36</code>");'
  - text: <code>c</code>应该等于<code>46</code>
    testString: 'assert(c === 46, "<code>c</code> should equal <code>46</code>");'
  - text: 您应该为每个变量使用<code>*=</code>运算符
    testString: 'assert(code.match(/\*=/g).length === 3, "You should use the <code>*=</code> operator for each variable");'
  - text: 不要修改行上方的代码
    testString: 'assert(/var a = 5;/.test(code) && /var b = 12;/.test(code) && /var c = 4\.6;/.test(code), "Do not modify the code above the line");'

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

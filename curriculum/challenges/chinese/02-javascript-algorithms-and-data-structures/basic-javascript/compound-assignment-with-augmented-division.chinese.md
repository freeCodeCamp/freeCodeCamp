---
id: 56533eb9ac21ba0edf2244b2
title: Compound Assignment With Augmented Division
challengeType: 1
videoUrl: ''
localeTitle: 具有增广划分的复合赋值
---

## Description
<section id="description"> <code>/=</code>运算符将变量除以另一个数字。 <code>myVar = myVar / 5;</code>将<code>myVar</code>除以<code>5</code> 。这可以改写为： <code>myVar /= 5;</code> </section>

## Instructions
<section id="instructions">转换<code>a</code> ， <code>b</code>和<code>c</code>的赋值以使用<code>/=</code>运算符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code>应该等于<code>4</code>
    testString: assert(a === 4);
  - text: <code>b</code>应该等于<code>27</code>
    testString: assert(b === 27);
  - text: <code>c</code>应该等于<code>3</code>
    testString: assert(c === 3);
  - text: 您应该为每个变量使用<code>/=</code>运算符
    testString: assert(code.match(/\/=/g).length === 3);
  - text: 不要修改行上方的代码
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

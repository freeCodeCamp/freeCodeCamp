---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: ''
localeTitle: 具有增强加法的复合赋值
---

## Description
<section id="description">在编程中，通常使用赋值来修改变量的内容。请记住，首先评估等号右侧的所有内容，因此我们可以说： <code>myVar = myVar + 5;</code>添加<code>5</code>到<code>myVar</code> 。由于这是一种常见的模式，因此存在一步完成数学运算和赋值的运算符。一个这样的运算符是<code>+=</code>运算符。 <blockquote> var myVar = 1; <br> myVar + = 5; <br>的console.log（myVar的）; //返回6 </blockquote></section>

## Instructions
<section id="instructions">转换<code>a</code> ， <code>b</code>和<code>c</code>的赋值以使用<code>+=</code>运算符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code>应该等于<code>15</code>
    testString: assert(a === 15);
  - text: <code>b</code>应该等于<code>26</code>
    testString: assert(b === 26);
  - text: <code>c</code>应该等于<code>19</code>
    testString: assert(c === 19);
  - text: 您应该为每个变量使用<code>+=</code>运算符
    testString: assert(code.match(/\+=/g).length === 3);
  - text: 不要修改行上方的代码
    testString: assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a = a + 12;
b = 9 + b;
c = c + 7;

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

---
id: 56533eb9ac21ba0edf2244b0
title: Compound Assignment With Augmented Subtraction
challengeType: 1
videoUrl: ''
localeTitle: 具有增广减法的复合赋值
---

## Description
<section id="description">与<code>+=</code>运算符一样， <code>-=</code>从变量中减去一个数字。 <code>myVar = myVar - 5;</code>将从<code>myVar</code>减去<code>5</code> 。这可以改写为： <code>myVar -= 5;</code> </section>

## Instructions
<section id="instructions">转换<code>a</code> ， <code>b</code>和<code>c</code>的赋值以使用<code>-=</code>运算符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code>应该等于<code>5</code>
    testString: 'assert(a === 5, "<code>a</code> should equal <code>5</code>");'
  - text: <code>b</code>应该等于<code>-6</code>
    testString: 'assert(b === -6, "<code>b</code> should equal <code>-6</code>");'
  - text: <code>c</code>应该等于<code>2</code>
    testString: 'assert(c === 2, "<code>c</code> should equal <code>2</code>");'
  - text: 您应该为每个变量使用<code>-=</code>运算符
    testString: 'assert(code.match(/-=/g).length === 3, "You should use the <code>-=</code> operator for each variable");'
  - text: 不要修改行上方的代码
    testString: 'assert(/var a = 11;/.test(code) && /var b = 9;/.test(code) && /var c = 3;/.test(code), "Do not modify the code above the line");'

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

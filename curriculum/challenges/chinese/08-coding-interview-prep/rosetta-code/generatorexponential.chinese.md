---
title: GeneratorExponential
id: 5a23c84252665b21eecc7e7b
challengeType: 5
videoUrl: ''
localeTitle: GeneratorExponential
---

## Description
<section id="description">生成器是一个可执行实体（如函数或过程），它包含一次生成一个值序列的代码，这样每次调用生成器时，都会提供序列中的下一个值。生成器通常构建在协同程序或对象之上，以便“自然地”处理对象的内部状态。生成器通常用于序列可能无限的情况，并且可以在只有最小状态的情况下构造序列的下一个值。编写一个使用生成器生成正方形和立方体的函数。创建一个新的生成器，从正方形生成器中过滤所有多维数据集。该函数应返回已过滤生成器的\（n ^ {th} \）值。例如，对于\（n = 7 \），函数应该返回81，因为序列将是4,9,16,25,36,49,81。这里64被过滤掉了，因为它是一个立方体。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>exponentialGenerator</code>应该是一个函数。
    testString: 'assert(typeof exponentialGenerator=="function","<code>exponentialGenerator</code> should be a function.");'
  - text: <code>exponentialGenerator()</code>应该返回一个数字。
    testString: 'assert(typeof exponentialGenerator(10)=="number","<code>exponentialGenerator()</code> should return a number.");'
  - text: <code>exponentialGenerator(10)</code>应该返回<code>144</code> 。
    testString: 'assert.equal(exponentialGenerator(10),144,"<code>exponentialGenerator(10)</code> should return <code>144</code>.");'
  - text: <code>exponentialGenerator(12)</code>应该返回<code>196</code> 。
    testString: 'assert.equal(exponentialGenerator(12),196,"<code>exponentialGenerator(12)</code> should return <code>196</code>.");'
  - text: <code>exponentialGenerator(14)</code>应该返回<code>256</code> 。
    testString: 'assert.equal(exponentialGenerator(14),256,"<code>exponentialGenerator(14)</code> should return <code>256</code>.");'
  - text: <code>exponentialGenerator(20)</code>应该返回<code>484</code> 。
    testString: 'assert.equal(exponentialGenerator(20),484,"<code>exponentialGenerator(20)</code> should return <code>484</code>.");'
  - text: <code>exponentialGenerator(25)</code>应该返回<code>784</code> 。
    testString: 'assert.equal(exponentialGenerator(25),784,"<code>exponentialGenerator(25)</code> should return <code>784</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function exponentialGenerator (n) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

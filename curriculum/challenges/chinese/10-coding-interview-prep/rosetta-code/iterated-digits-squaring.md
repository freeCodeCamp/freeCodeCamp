---
title: Iterated digits squaring
id: 5a23c84252665b21eecc7ec1
challengeType: 5
videoUrl: ''
localeTitle: 迭代的数字平方
---

## Description
<section id="description">如果添加自然数（大于零的整数）的数字的平方，则始终以1或89结尾： <pre> 15  - &gt; 26  - &gt; 40  - &gt; 16  - &gt; 37  - &gt; 58  - &gt; 89
7  - &gt; 49  - &gt; 97  - &gt; 130  - &gt; 10  - &gt; 1 </pre>编写一个函数，该函数将数字作为参数，并在执行上述过程后返回1或89。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>iteratedSquare</code>应该是一个函数。
    testString: assert(typeof iteratedSquare=='function');
  - text: <code>iteratedSquare(4)</code>应该返回一个数字。
    testString: assert(typeof iteratedSquare(4)=='number');
  - text: <code>iteratedSquare(4)</code>应该返回<code>89</code> 。
    testString: assert.equal(iteratedSquare(4),89);
  - text: <code>iteratedSquare(7)</code>应该返回<code>1</code> 。
    testString: assert.equal(iteratedSquare(7),1);
  - text: <code>iteratedSquare(15)</code>应该返回<code>89</code> 。
    testString: assert.equal(iteratedSquare(15),89);
  - text: <code>iteratedSquare(20)</code>应该返回<code>89</code> 。
    testString: assert.equal(iteratedSquare(20),89);
  - text: <code>iteratedSquare(70)</code>应该返回<code>1</code> 。
    testString: assert.equal(iteratedSquare(70),1);
  - text: <code>iteratedSquare(100)</code>应该返回<code>1</code> 。
    testString: assert.equal(iteratedSquare(100),1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function iteratedSquare (n) {
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

/section>

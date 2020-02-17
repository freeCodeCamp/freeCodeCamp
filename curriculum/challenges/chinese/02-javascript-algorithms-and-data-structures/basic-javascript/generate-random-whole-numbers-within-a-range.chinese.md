---
id: cf1111c1c12feddfaeb2bdef
title: Generate Random Whole Numbers within a Range
challengeType: 1
videoUrl: ''
localeTitle: 生成范围内的随机整数
---

## Description
<section id="description">我们可以生成一个落在两个特定数字范围内的随机数，而不是像我们之前那样在零和给定数字之间生成一个随机数。为此，我们将定义最小数量<code>min</code>和最大数量<code>max</code> 。这是我们将使用的公式。花一点时间阅读它并尝试理解这段代码在做什么： <code>Math.floor(Math.random() * (max - min + 1)) + min</code> </section>

## Instructions
<section id="instructions">创建一个名为<code>randomRange</code>的函数，它接受一个范围<code>myMin</code>和<code>myMax</code>并返回一个大于或等于<code>myMin</code>的随机数，并且小于或等于<code>myMax</code> （包括<code>myMax</code> ）。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>randomRange</code>可以生成的最低随机数应该等于你的最小数量<code>myMin</code> 。
    testString: assert(calcMin === 5);
  - text: <code>randomRange</code>可以生成的最高随机数应该等于最大数量<code>myMax</code> 。
    testString: assert(calcMax === 15);
  - text: <code>randomRange</code>生成的随机数应该是整数，而不是小数。
    testString: assert(randomRange(0,1) % 1 === 0 );
  - text: <code>randomRange</code>应该同时使用<code>myMax</code>和<code>myMin</code> ，并在你的范围内返回一个随机数。
    testString: assert((function(){if(code.match(/myMax/g).length > 1 && code.match(/myMin/g).length > 2 && code.match(/Math.floor/g) && code.match(/Math.random/g)){return true;}else{return false;}})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return 0; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

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

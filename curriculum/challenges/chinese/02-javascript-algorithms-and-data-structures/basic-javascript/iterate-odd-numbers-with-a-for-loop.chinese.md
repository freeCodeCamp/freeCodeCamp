---
id: 56104e9e514f539506016a5c
title: Iterate Odd Numbers With a For Loop
challengeType: 1
videoUrl: ''
localeTitle: 使用For循环迭代奇数
---

## Description
<section id="description"> For循环不必一次迭代一个循环。通过改变我们的<code>final-expression</code> ，我们可以计算偶数。我们将从<code>i = 0</code>开始并在<code>i &lt; 10</code>循环。我们会增加<code>i</code>的2每个回路与<code>i += 2</code> 。 <blockquote> var ourArray = []; <br> for（var i = 0; i &lt;10; i + = 2）{ <br> ourArray.push（ⅰ）; <br> } </blockquote> <code>ourArray</code>现在包含<code>[0,2,4,6,8]</code> 。让我们改变<code>initialization</code>这样我们就可以用奇数来计算。 </section>

## Instructions
<section id="instructions">使用<code>for</code>循环将奇数从1到9推送到<code>myArray</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该为此使用<code>for</code>循环。
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: '<code>myArray</code>应该等于<code>[1,3,5,7,9]</code> 。'
    testString: 'assert.deepEqual(myArray, [1,3,5,7,9], "<code>myArray</code> should equal <code>[1,3,5,7,9]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

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

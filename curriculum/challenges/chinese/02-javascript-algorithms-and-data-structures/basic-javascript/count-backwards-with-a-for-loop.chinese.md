---
id: 56105e7b514f539506016a5e
title: Count Backwards With a For Loop
challengeType: 1
videoUrl: ''
localeTitle: 用For循环向后计数
---

## Description
<section id="description">只要我们可以定义正确的条件，for循环也可以向后计数。为了向后计数两次，我们需要更改<code>initialization</code> ， <code>condition</code>和<code>final-expression</code> 。我们将从<code>i = 10</code>开始并在<code>i &gt; 0</code>循环。我们将递减<code>i</code> 2每个回路与<code>i -= 2</code> 。 <blockquote> var ourArray = []; <br> for（var i = 10; i&gt; 0; i- = 2）{ <br> ourArray.push（ⅰ）; <br> } </blockquote> <code>ourArray</code>现在包含<code>[10,8,6,4,2]</code> 。让我们改变<code>initialization</code>和<code>final-expression</code>这样我们就可以向后计数两位奇数。 </section>

## Instructions
<section id="instructions">使用<code>for</code>循环将奇数从9到1推送到<code>myArray</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该为此使用<code>for</code>循环。
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: 你应该使用数组方法<code>push</code> 。
    testString: 'assert(code.match(/myArray.push/), "You should be using the array method <code>push</code>.");'
  - text: '<code>myArray</code>应该等于<code>[9,7,5,3,1]</code> 。'
    testString: 'assert.deepEqual(myArray, [9,7,5,3,1], "<code>myArray</code> should equal <code>[9,7,5,3,1]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
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

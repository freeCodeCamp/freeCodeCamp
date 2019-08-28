---
id: 56104e9e514f539506016a5c
title: Iterate Odd Numbers With a For Loop
challengeType: 1
videoUrl: https://scrimba.com/c/cm8n7T9
forumTopicId: 18212
localeTitle: Итерировать нечетные числа с помощью цикла
---

## Description
<section id='description'>
Для циклов не нужно повторять одно за раз. Изменяя наше <code>final-expression</code> , мы можем считать четными числами. Мы начнем с <code>i = 0</code> и цикл while <code>i &lt; 10</code> . Мы будем увеличивать <code>i</code> на 2 каждый цикл с <code>i += 2</code> . <blockquote> var ourArray = []; <br> для (var i = 0; i &lt;10; i + = 2) { <br> ourArray.push (я); <br> } </blockquote> <code>ourArray</code> будет содержать <code>[0,2,4,6,8]</code> . Давайте изменим нашу <code>initialization</code> чтобы мы могли рассчитывать по нечетным числам.
</section>

## Instructions
<section id='instructions'>
Нажимайте нечетные числа от 1 до 9 до <code>myArray</code> используя цикл <code>for</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>for</code> loop for this.
    testString: assert(code.match(/for\s*\(/g).length > 1);
  - text: <code>myArray</code> should equal <code>[1,3,5,7,9]</code>.
    testString: assert.deepEqual(myArray, [1,3,5,7,9]);

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

### After Tests
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}

```

</div>

</section>

## Solution
<section id='solution'>

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```

</section>

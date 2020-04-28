---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
challengeType: 1
videoUrl: ''
localeTitle: 将一个Array嵌套在另一个Array中
---

## Description
<section id="description">您还可以在其他数组中嵌套数组，如： <code>[[&quot;Bulls&quot;, 23], [&quot;White Sox&quot;, 45]]</code> 。这也称为<dfn>多维数组<dfn>。</dfn></dfn> </section>

## Instructions
<section id="instructions">创建一个名为<code>myArray</code>的嵌套数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code>应至少有一个嵌套在另一个数组中的数组。
    testString: assert(Array.isArray(myArray) && myArray.some(Array.isArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [];

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

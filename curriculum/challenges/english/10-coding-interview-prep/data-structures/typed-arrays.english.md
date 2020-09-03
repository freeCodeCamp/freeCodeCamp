---
id: 587d8253367417b2b2512c6a
title: Typed Arrays
challengeType: 1
forumTopicId: 301716
---

## Description
<section id='description'>
Arrays are JavaScript objects that can hold a lot of different elements.
<code>var complexArr = [1, 5, "2", "Word", {"name": "James"}];</code>
Basically what happens in the background is that your browser will automatically give the right amount of memory space for that array. It will also change as needed if you add or remove data.
However, in the world of high performance and different element types, sometimes you need to be more specific on how much memory is given to an array.
<dfn>Typed arrays</dfn> are the answer to this problem. You are now able to say how much memory you want to give an array. Below is a basic overview of the different types of arrays available and the size in bytes for each element in that array.
<table class='table table-striped'><tr><th>Type</th><th>Each element size in bytes</th></tr><tr><td><code>Int8Array</code></td><td>1</td></tr><tr><td><code>Uint8Array</code></td><td>1</td></tr><tr><td><code>Uint8ClampedArray</code></td><td>1</td></tr><tr><td><code>Int16Array</code></td><td>2</td></tr><tr><td><code>Uint16Array</code></td><td>2</td></tr><tr><td><code>Int32Array</code></td><td>4</td></tr><tr><td><code>Uint32Array</code></td><td>4</td></tr><tr><td><code>Float32Array</code></td><td>4</td></tr><tr><td><code>Float64Array</code></td><td>8</td></tr></table>
There are two ways in creating these kind of arrays. One way is to create it directly. Below is how to create a 3 length <code>Int16Array</code>.

```js
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
```

You can also create a <dfn>buffer</dfn> to assign how much data (in bytes) you want the array to take up.
<strong>Note</strong><br>To create typed arrays using buffers, you need to assign the number of bytes to be a multiple of the bytes listed above.

```js
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
```

<dfn>Buffers</dfn> are general purpose objects that just carry data. You cannot access them normally. To access them, you need to first create a <dfn>view</dfn>.

```js
i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
```

<strong>Note</strong><br>Typed arrays do not have some of the methods traditional arrays have such as <code>.pop()</code> or <code>.push()</code>. Typed arrays also fail <code>Array.isArray()</code> that checks if something is an array. Although simpler, this can be an advantage for less-sophisticated JavaScript engines to implement them.
</section>

## Instructions
<section id='instructions'>
First create a <code>buffer</code> that is 64-bytes. Then create a <code>Int32Array</code> typed array with a view of it called <code>i32View</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>buffer</code> should be 64 bytes large.
    testString: assert(buffer.byteLength === 64);
  - text: Your <code>i32View</code> view of your buffer should be 64 bytes large.
    testString: assert(i32View.byteLength === 64);
  - text: Your <code>i32View</code> view of your buffer should be 16 elements long.
    testString: assert(i32View.length === 16);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var buffer;
var i32View;
```

</div>

</section>

## Solution
<section id='solution'>

```js
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
```

</section>

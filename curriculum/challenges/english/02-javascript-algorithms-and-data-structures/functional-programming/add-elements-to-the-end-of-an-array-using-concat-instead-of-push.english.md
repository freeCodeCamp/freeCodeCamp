---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
forumTopicId: 301226
---

## Description
<section id='description'>
Functional programming is all about creating and using non-mutating functions.
The last challenge introduced the <code>concat</code> method as a way to combine arrays into a new one without mutating the original arrays. Compare <code>concat</code> to the <code>push</code> method. <code>Push</code> adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way
```

<code>Concat</code> offers a way to add new items to the end of an array without any mutating side effects.
</section>

## Instructions
<section id='instructions'>
Change the <code>nonMutatingPush</code> function so it uses <code>concat</code> to add <code>newItem</code> to the end of <code>original</code> instead of <code>push</code>. The function should return an array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>concat</code> method.
    testString: assert(code.match(/\.concat/g));
  - text: Your code should not use the <code>push</code> method.
    testString: assert(!code.match(/\.?[\s\S]*?push/g));
  - text: The <code>first</code> array should not change.
    testString: assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
  - text: The <code>second</code> array should not change.
    testString: assert(JSON.stringify(second) === JSON.stringify([4, 5]));
  - text: <code>nonMutatingPush([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.
    testString: assert(JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

</section>

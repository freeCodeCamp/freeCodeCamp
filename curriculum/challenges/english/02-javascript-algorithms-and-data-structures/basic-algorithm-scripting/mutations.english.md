---
id: af2170cad53daa0770fabdea
title: Mutations
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, <code>["hello", "Hello"]</code>, should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments <code>["hello", "hey"]</code> should return false because the string "hello" does not contain a "y".
Lastly, <code>["Alien", "line"]</code>, should return true because all of the letters in "line" are present in "Alien".
Remember to use <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mutation(["hello", "hey"])</code> should return false.
    testString: assert(mutation(["hello", "hey"]) === false, '<code>mutation(["hello", "hey"])</code> should return false.');
  - text: <code>mutation(["hello", "Hello"])</code> should return true.
    testString: assert(mutation(["hello", "Hello"]) === true, '<code>mutation(["hello", "Hello"])</code> should return true.');
  - text: <code>mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</code> should return true.
    testString: assert(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true, '<code>mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</code> should return true.');
  - text: <code>mutation(["Mary", "Army"])</code> should return true.
    testString: assert(mutation(["Mary", "Army"]) === true, '<code>mutation(["Mary", "Army"])</code> should return true.');
  - text: <code>mutation(["Mary", "Aarmy"])</code> should return true.
    testString: assert(mutation(["Mary", "Aarmy"]) === true, '<code>mutation(["Mary", "Aarmy"])</code> should return true.');
  - text: <code>mutation(["Alien", "line"])</code> should return true.
    testString: assert(mutation(["Alien", "line"]) === true, '<code>mutation(["Alien", "line"])</code> should return true.');
  - text: <code>mutation(["floor", "for"])</code> should return true.
    testString: assert(mutation(["floor", "for"]) === true, '<code>mutation(["floor", "for"])</code> should return true.');
  - text: <code>mutation(["hello", "neo"])</code> should return false.
    testString: assert(mutation(["hello", "neo"]) === false, '<code>mutation(["hello", "neo"])</code> should return false.');
  - text: <code>mutation(["voodoo", "no"])</code> should return false.
    testString: assert(mutation(["voodoo", "no"]) === false, '<code>mutation(["voodoo", "no"])</code> should return false.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0].toLowerCase().split('').forEach(c => hash[c] = true);

  return !arr[1].toLowerCase().split('').filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);

```

</section>

---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1
forumTopicId: 301355
---

## Description
<section id='description'>
In the last challenge, you searched for the word <code>"Hello"</code> using the regular expression <code>/Hello/</code>. That regex searched for a literal match of the string <code>"Hello"</code>. Here's another example searching for a literal match of the string <code>"Kevin"</code>:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true
```

Any other forms of <code>"Kevin"</code> will not match. For example, the regex <code>/Kevin/</code> will not match <code>"kevin"</code> or <code>"KEVIN"</code>.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false
```

A future challenge will show how to match those other forms as well.
</section>

## Instructions
<section id='instructions'>
Complete the regex <code>waldoRegex</code> to find <code>"Waldo"</code> in the string <code>waldoIsHiding</code> with a literal match.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>waldoRegex</code> should find <code>"Waldo"</code>
    testString: assert(waldoRegex.test(waldoIsHiding));
  - text: Your regex <code>waldoRegex</code> should not search for anything else.
    testString: assert(!waldoRegex.test('Somewhere is hiding in this text.'));
  - text: You should perform a literal string match with your regex.
    testString: assert(!/\/.*\/i/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

</section>

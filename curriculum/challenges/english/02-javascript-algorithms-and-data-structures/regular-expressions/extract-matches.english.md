---
id: 587d7db4367417b2b2512b92
title: Extract Matches
challengeType: 1
forumTopicId: 301340
---

## Description
<section id='description'>
So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the <code>.match()</code> method.
To use the <code>.match()</code> method, apply the method on a string and pass in the regex inside the parentheses. 
Here's an example:

```js
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```

Note that the `.match` syntax is the "opposite" of the `.test` method you have been using thus far:

```js
'string'.match(/regex/);
/regex/.test('string');
```

</section>

## Instructions
<section id='instructions'>
Apply the <code>.match()</code> method to extract the word <code>coding</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>result</code> should have the word <code>coding</code>
    testString: assert(result.join() === "coding");
  - text: Your regex <code>codingRegex</code> should search for <code>coding</code>
    testString: assert(codingRegex.source === "coding");
  - text: You should use the <code>.match()</code> method.
    testString: assert(code.match(/\.match\(.*\)/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```

</section>

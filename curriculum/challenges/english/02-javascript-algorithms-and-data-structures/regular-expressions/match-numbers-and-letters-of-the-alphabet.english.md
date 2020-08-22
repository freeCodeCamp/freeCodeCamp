---
id: 587d7db5367417b2b2512b97
title: Match Numbers and Letters of the Alphabet
challengeType: 1
isHidden: false
forumTopicId: 301356
---

## Description
<section id='description'>
Using the hyphen (<code>-</code>) to match a range of characters is not limited to letters. It also works to match a range of numbers.
For example, <code>/[0-5]/</code> matches any number between <code>0</code> and <code>5</code>, including the <code>0</code> and <code>5</code>.
Also, it is possible to combine a range of letters and numbers in a single character set.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```

</section>

## Instructions
<section id='instructions'>
Create a single regex that matches a range of letters between <code>h</code> and <code>s</code>, and a range of numbers between <code>2</code> and <code>6</code>. Remember to include the appropriate flags in the regex.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>myRegex</code> should match 17 items.
    testString: assert(result.length == 17);
  - text: Your regex <code>myRegex</code> should use the global flag.
    testString: assert(myRegex.flags.match(/g/).length == 1);
  - text: Your regex <code>myRegex</code> should use the case insensitive flag.
    testString: assert(myRegex.flags.match(/i/).length == 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

```

</section>

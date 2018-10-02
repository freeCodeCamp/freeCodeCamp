---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
challengeType: 1
---

## Description
<section id='description'>
You've learned that you can use a shortcut to match alphanumerics <code>[A-Za-z0-9_]</code> using <code>\w</code>. A natural pattern you might want to search for is the opposite of alphanumerics.
You can search for the opposite of the <code>\w</code> with <code>\W</code>. Note, the opposite pattern uses a capital letter. This shortcut is the same as <code>[^A-Za-z0-9_]</code>.
<blockquote>let shortHand = /\W/;<br>let numbers = "42%";<br>let sentence = "Coding!";<br>numbers.match(shortHand); // Returns ["%"]<br>sentence.match(shortHand); // Returns ["!"]<br></blockquote>
</section>

## Instructions
<section id='instructions'>
Use the shorthand character class <code>\W</code> to count the number of non-alphanumeric characters in various quotes and strings.
</section>

## Tests
<section id='tests'>

```yml
- text: Your regex should use the global flag.
  testString: 'assert(nonAlphabetRegex.global, ''Your regex should use the global flag.'');'
- text: Your regex should find 6 non-alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>.
  testString: 'assert("The five boxing wizards jump quickly.".match(nonAlphabetRegex).length == 6, ''Your regex should find 6 non-alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>.'');'
- text: Your regex should use the shorthand character.
  testString: 'assert(/\\W/.test(nonAlphabetRegex.source), ''Your regex should use the shorthand character to match characters which are non-alphanumeric.'');'
- text: Your regex should find 8 non-alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>
  testString: 'assert("Pack my box with five dozen liquor jugs.".match(nonAlphabetRegex).length == 8, ''Your regex should find 8 non-alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>'');'
- text: Your regex should find 6 non-alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>
  testString: 'assert("How vexingly quick daft zebras jump!".match(nonAlphabetRegex).length == 6, ''Your regex should find 6 non-alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>'');'
- text: Your regex should find 12 non-alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>
  testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(nonAlphabetRegex).length == 12, ''Your regex should find 12 non-alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

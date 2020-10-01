---
id: 587d7db7367417b2b2512b9f
title: Match All Letters and Numbers
challengeType: 1
forumTopicId: 301346
---

## Description
<section id='description'>
Using character classes, you were able to search for all letters of the alphabet with <code>[a-z]</code>. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
The closest character class in JavaScript to match the alphabet is <code>\w</code>. This shortcut is equal to <code>[A-Za-z0-9_]</code>. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (<code>_</code>).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
```

These shortcut character classes are also known as <dfn>shorthand character classes</dfn>.
</section>

## Instructions
<section id='instructions'>
Use the shorthand character class <code>\w</code> to count the number of alphanumeric characters in various quotes and strings.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use the global flag.
    testString: assert(alphabetRegexV2.global);
  - text: Your regex should use the shorthand character <code>\w</code> to match all characters which are alphanumeric.
    testString: assert(/\\w/.test(alphabetRegexV2.source));
  - text: Your regex should find 31 alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>
    testString: assert("The five boxing wizards jump quickly.".match(alphabetRegexV2).length === 31);
  - text: Your regex should find 32 alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>
    testString: assert("Pack my box with five dozen liquor jugs.".match(alphabetRegexV2).length === 32);
  - text: Your regex should find 30 alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>
    testString: assert("How vexingly quick daft zebras jump!".match(alphabetRegexV2).length === 30);
  - text: Your regex should find 36 alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>
    testString: assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(alphabetRegexV2).length === 36);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

</section>

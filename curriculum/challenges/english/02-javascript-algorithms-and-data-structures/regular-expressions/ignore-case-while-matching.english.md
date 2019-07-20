---
id: 587d7db4367417b2b2512b91
title: Ignore Case While Matching
challengeType: 1
---

## Description
<section id='description'>
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are <code>"A"</code>, <code>"B"</code>, and <code>"C"</code>. Examples of lowercase are <code>"a"</code>, <code>"b"</code>, and <code>"c"</code>.
You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the <code>i</code> flag. You can use it by appending it to the regex.  An example of using this flag is <code>/ignorecase/i</code>. This regex can match the strings <code>"ignorecase"</code>, <code>"igNoreCase"</code>, and <code>"IgnoreCase"</code>.
</section>

## Instructions
<section id='instructions'>
Write a regex <code>fccRegex</code> to match <code>"freeCodeCamp"</code>, no matter its case. Your regex should not match any abbreviations or variations with spaces.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should match <code>freeCodeCamp</code>
    testString: assert(fccRegex.test('freeCodeCamp'), 'Your regex should match <code>freeCodeCamp</code>');
  - text: Your regex should match <code>FreeCodeCamp</code>
    testString: assert(fccRegex.test('FreeCodeCamp'), 'Your regex should match <code>FreeCodeCamp</code>');
  - text: Your regex should match <code>FreecodeCamp</code>
    testString: assert(fccRegex.test('FreecodeCamp'), 'Your regex should match <code>FreecodeCamp</code>');
  - text: Your regex should match <code>FreeCodecamp</code>
    testString: assert(fccRegex.test('FreeCodecamp'), 'Your regex should match <code>FreeCodecamp</code>');
  - text: Your regex should not match <code>Free Code Camp</code>
    testString: assert(!fccRegex.test('Free Code Camp'), 'Your regex should not match <code>Free Code Camp</code>');
  - text: Your regex should match <code>FreeCOdeCamp</code>
    testString: assert(fccRegex.test('FreeCOdeCamp'), 'Your regex should match <code>FreeCOdeCamp</code>');
  - text: Your regex should not match <code>FCC</code>
    testString: assert(!fccRegex.test('FCC'), 'Your regex should not match <code>FCC</code>');
  - text: Your regex should match <code>FrEeCoDeCamp</code>
    testString: assert(fccRegex.test('FrEeCoDeCamp'), 'Your regex should match <code>FrEeCoDeCamp</code>');
  - text: Your regex should match <code>FrEeCodECamp</code>
    testString: assert(fccRegex.test('FrEeCodECamp'), 'Your regex should match <code>FrEeCodECamp</code>');
  - text: Your regex should match <code>FReeCodeCAmp</code>
    testString: assert(fccRegex.test('FReeCodeCAmp'), 'Your regex should match <code>FReeCodeCAmp</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```

</section>

---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
---

## Description
<section id='description'>
Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.
You can search for repeat substrings using <code>capture groups</code>. Parentheses, <code>(</code> and <code>)</code>, are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.
To specify where that repeat string will appear, you use a backslash (<code>\</code>) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be <code>\1</code> to match the first group.
The example below matches any word that occurs twice separated by a space:
<blockquote>let repeatStr = "regex regex";<br>let repeatRegex = /(\w+)\s\1/;<br>repeatRegex.test(repeatStr); // Returns true<br>repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]</blockquote>
Using the <code>.match()</code> method on a string will return an array with the string it matches, along with its capture group.
</section>

## Instructions
<section id='instructions'>
Use <code>capture groups</code> in <code>reRegex</code> to match numbers that are repeated only three times in a string, each separated by a space.
</section>

## Tests
<section id='tests'>

```yml
- text: Your regex should use the shorthand character class for digits.
  testString: 'assert(reRegex.source.match(/\\d/), "Your regex should use the shorthand character class for digits.");'
- text: Your regex should reuse the capture group twice.
  testString: 'assert(reRegex.source.match(/\\\d/g).length === 2, "Your regex should reuse the capture group twice.");'
- text: Your regex should have two spaces separating the three numbers.
  testString: 'assert(reRegex.source.match(/\\s/g).length === 2, "Your regex should have two spaces separating the three numbers.");'
- text: Your regex should match <code>"42 42 42"</code>.
  testString: 'assert(reRegex.test("42 42 42"), "Your regex should match <code>"42 42 42"</code>.");'
- text: Your regex should match <code>"100 100 100"</code>.
  testString: 'assert(reRegex.test("100 100 100"), "Your regex should match <code>"100 100 100"</code>.");'
- text: Your regex should not match <code>"42 42 42 42"</code>.
  testString: 'assert.equal(("42 42 42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42 42 42"</code>.");'
- text: Your regex should not match <code>"42 42"</code>.
  testString: 'assert.equal(("42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42"</code>.");'
- text: Your regex should not match <code>"101 102 103"</code>.
  testString: 'assert(!reRegex.test("101 102 103"), "Your regex should not match <code>"101 102 103"</code>.");'
- text: Your regex should not match <code>"1 2 3"</code>.
  testString: 'assert(!reRegex.test("1 2 3"), "Your regex should not match <code>"1 2 3"</code>.");'
- text: Your regex should match <code>"10 10 10"</code>.
  testString: 'assert(reRegex.test("10 10 10"), "Your regex should match <code>"10 10 10"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

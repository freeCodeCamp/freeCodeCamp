---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1
---

## Description
<section id='description'>
<code>Lookaheads</code> are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.
There are two kinds of <code>lookaheads</code>: <code>positive lookahead</code> and <code>negative lookahead</code>.
A <code>positive lookahead</code> will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as <code>(?=...)</code> where the <code>...</code> is the required part that is not matched.
On the other hand, a <code>negative lookahead</code> will look to make sure the element in the search pattern is not there. A negative lookahead is used as <code>(?!...)</code> where the <code>...</code> is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
Lookaheads are a bit confusing but some examples will help.
<blockquote>let quit = "qu";<br>let noquit = "qt";<br>let quRegex= /q(?=u)/;<br>let qRegex = /q(?!u)/;<br>quit.match(quRegex); // Returns ["q"]<br>noquit.match(qRegex); // Returns ["q"]</blockquote>
A more practical use of <code>lookaheads</code> is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
<blockquote>let password = "abc123";<br>let checkPass = /(?=\w{3,6})(?=\D*\d)/;<br>checkPass.test(password); // Returns true</blockquote>
</section>

## Instructions
<section id='instructions'>
Use <code>lookaheads</code> in the <code>pwRegex</code> to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use two positive <code>lookaheads</code>.
    testString: assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null, 'Your regex should use two positive <code>lookaheads</code>.');
  - text: Your regex should not match <code>"astronaut"</code>
    testString: assert(!pwRegex.test("astronaut"), 'Your regex should not match <code>"astronaut"</code>');
  - text: Your regex should not match <code>"airplanes"</code>
    testString: assert(!pwRegex.test("airplanes"), 'Your regex should not match <code>"airplanes"</code>');
  - text: Your regex should not match <code>"banan1"</code>
    testString: assert(!pwRegex.test("banan1"), 'Your regex should not match <code>"banan1"</code>');
  - text: Your regex should match <code>"bana12"</code>
    testString: assert(pwRegex.test("bana12"), 'Your regex should match <code>"bana12"</code>');
  - text: Your regex should match <code>"abc123"</code>
    testString: assert(pwRegex.test("abc123"), 'Your regex should match <code>"abc123"</code>');
  - text: Your regex should not match <code>"123"</code>
    testString: assert(!pwRegex.test("123"), 'Your regex should not match <code>"123"</code>');
  - text: Your regex should not match <code>"1234"</code>
    testString: assert(!pwRegex.test("1234"), 'Your regex should not match <code>"1234"</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

</div>



</section>

## Solution
<section id='solution'>


```js
var pwRegex = /(?=\w{5})(?=\D*\d{2})/;
```

</section>

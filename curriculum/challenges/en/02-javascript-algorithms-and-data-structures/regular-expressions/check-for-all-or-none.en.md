---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
---

## Description
<section id='description'>
Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.
You can specify the possible existence of an element with a question mark, <code>?</code>. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
For example, there are slight differences in American and British English and you can use the question mark to match both spellings.
<blockquote>let american = "color";<br>let british = "colour";<br>let rainbowRegex= /colou?r/;<br>rainbowRegex.test(american); // Returns true<br>rainbowRegex.test(british); // Returns true</blockquote>
</section>

## Instructions
<section id='instructions'>
Change the regex <code>favRegex</code> to match both the American English (favorite) and the British English (favourite) version of the word.
</section>

## Tests
<section id='tests'>

```yml
- text: 'Your regex should use the optional symbol, <code>?</code>.'
  testString: 'assert(favRegex.source.match(/\?/).length > 0, ''Your regex should use the optional symbol, <code>?</code>.'');'
- text: Your regex should match <code>"favorite"</code>
  testString: 'assert(favRegex.test("favorite"), ''Your regex should match <code>"favorite"</code>'');'
- text: Your regex should match <code>"favourite"</code>
  testString: 'assert(favRegex.test("favourite"), ''Your regex should match <code>"favourite"</code>'');'
- text: Your regex should not match <code>"fav"</code>
  testString: 'assert(!favRegex.test("fav"), ''Your regex should not match <code>"fav"</code>'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

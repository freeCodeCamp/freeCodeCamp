---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
forumTopicId: 301338
---

## Description
<section id='description'>
Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.
You can specify the possible existence of an element with a question mark, <code>?</code>. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

</section>

## Instructions
<section id='instructions'>
Change the regex <code>favRegex</code> to match both the American English (favorite) and the British English (favourite) version of the word.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use the optional symbol, <code>?</code>.
    testString: favRegex.lastIndex = 0; assert(favRegex.source.match(/\?/).length > 0);
  - text: Your regex should match <code>"favorite"</code>
    testString: favRegex.lastIndex = 0; assert(favRegex.test("favorite"));
  - text: Your regex should match <code>"favourite"</code>
    testString: favRegex.lastIndex = 0; assert(favRegex.test("favourite"));
  - text: Your regex should not match <code>"fav"</code>
    testString: favRegex.lastIndex = 0; assert(!favRegex.test("fav"));

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
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```

</section>

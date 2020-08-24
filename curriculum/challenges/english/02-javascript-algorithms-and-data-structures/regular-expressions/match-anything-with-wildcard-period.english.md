---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
isHidden: false
forumTopicId: 301348
---

## Description
<section id='description'>
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: <code>.</code>
The wildcard character <code>.</code> will match any one character. The wildcard is also called <code>dot</code> and <code>period</code>. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match <code>"hug"</code>, <code>"huh"</code>, <code>"hut"</code>, and <code>"hum"</code>, you can use the regex <code>/hu./</code> to match all four words.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true
```

</section>

## Instructions
<section id='instructions'>
Complete the regex <code>unRegex</code> so that it matches the strings <code>"run"</code>, <code>"sun"</code>, <code>"fun"</code>, <code>"pun"</code>, <code>"nun"</code>, and <code>"bun"</code>. Your regex should use the wildcard character.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use the <code>.test()</code> method.
    testString: assert(code.match(/\.test\(.*\)/));
  - text: You should use the wildcard character in your regex <code>unRegex</code>
    testString: assert(/\./.test(unRegex.source));
  - text: Your regex <code>unRegex</code> should match <code>"run"</code> in <code>"Let us go on a run."</code>
    testString: unRegex.lastIndex = 0; assert(unRegex.test("Let us go on a run."));
  - text: Your regex <code>unRegex</code> should match <code>"sun"</code> in <code>"The sun is out today."</code>
    testString: unRegex.lastIndex = 0; assert(unRegex.test("The sun is out today."));
  - text: Your regex <code>unRegex</code> should match <code>"fun"</code> in <code>"Coding is a lot of fun."</code>
    testString: unRegex.lastIndex = 0; assert(unRegex.test("Coding is a lot of fun."));
  - text: Your regex <code>unRegex</code> should match <code>"pun"</code> in <code>"Seven days without a pun makes one weak."</code>
    testString: unRegex.lastIndex = 0; assert(unRegex.test("Seven days without a pun makes one weak."));
  - text: Your regex <code>unRegex</code> should match <code>"nun"</code> in <code>"One takes a vow to be a nun."</code>
    testString: unRegex.lastIndex = 0; assert(unRegex.test("One takes a vow to be a nun."));
  - text: Your regex <code>unRegex</code> should match <code>"bun"</code> in <code>"She got fired from the hot dog stand for putting her hair in a bun."</code>
    testString: unRegex.lastIndex = 0; assert(unRegex.test("She got fired from the hot dog stand for putting her hair in a bun."));
  - text: Your regex <code>unRegex</code> should not match <code>"There is a bug in my code."</code>
    testString: unRegex.lastIndex = 0; assert(!unRegex.test("There is a bug in my code."));
  - text: Your regex <code>unRegex</code> should not match <code>"Catch me if you can."</code>
    testString: unRegex.lastIndex = 0; assert(!unRegex.test("Catch me if you can."));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```

</section>

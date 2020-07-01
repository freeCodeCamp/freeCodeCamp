---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
isHidden: false
forumTopicId: 301352
---

## Description
<section id='description'>
In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.
You can search the end of strings using the dollar sign character <code>$</code> at the end of the regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false

```

</section>

## Instructions
<section id='instructions'>
Use the anchor character (<code>$</code>) to match the string <code>"caboose"</code> at the end of the string <code>caboose</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should search for <code>"caboose"</code> with the dollar sign <code>$</code> anchor in your regex.
    testString: assert(lastRegex.source == "caboose$");
  - text: Your regex should not use any flags.
    testString: assert(lastRegex.flags == "");
  - text: You should match <code>"caboose"</code> at the end of the string <code>"The last car on a train is the caboose"</code>
    testString: assert(lastRegex.test("The last car on a train is the caboose"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```

</section>

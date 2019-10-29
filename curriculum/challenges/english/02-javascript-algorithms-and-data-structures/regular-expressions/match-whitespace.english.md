---
id: 587d7db8367417b2b2512ba3
title: Match Whitespace
challengeType: 1
forumTopicId: 301359
---

## Description
<section id='description'>
The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.
You can search for whitespace using <code>\s</code>, which is a lowercase <code>s</code>. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class <code>[ \r\t\f\n\v]</code>.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```

</section>

## Instructions
<section id='instructions'>
Change the regex <code>countWhiteSpace</code> to look for multiple whitespace characters in a string.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use the global flag.
    testString: assert(countWhiteSpace.global);
  - text: Your regex should use the shorthand character <code>\s</code> to match all whitespace characters.
    testString: assert(/\\s/.test(countWhiteSpace.source));
  - text: Your regex should find eight spaces in <code>"Men are from Mars and women are from Venus."</code>
    testString: assert("Men are from Mars and women are from Venus.".match(countWhiteSpace).length == 8);
  - text: 'Your regex should find three spaces in <code>"Space: the final frontier."</code>'
    testString: 'assert("Space: the final frontier.".match(countWhiteSpace).length == 3);'
  - text: Your regex should find no spaces in <code>"MindYourPersonalSpace"</code>
    testString: assert("MindYourPersonalSpace".match(countWhiteSpace) == null);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```

</section>

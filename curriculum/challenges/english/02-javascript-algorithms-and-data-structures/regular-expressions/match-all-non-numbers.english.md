---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
challengeType: 1
isHidden: false
forumTopicId: 301347
---

## Description
<section id='description'>
The last challenge showed how to search for digits using the shortcut <code>\d</code> with a lowercase <code>d</code>. You can also search for non-digits using a similar shortcut that uses an uppercase <code>D</code> instead.
The shortcut to look for non-digit characters is <code>\D</code>. This is equal to the character class <code>[^0-9]</code>, which looks for a single character that is not a number between zero and nine.
</section>

## Instructions
<section id='instructions'>
Use the shorthand character class for non-digits <code>\D</code> to count how many non-digits are in movie titles.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use the shortcut character to match non-digit characters
    testString: assert(/\\D/.test(noNumRegex.source));
  - text: Your regex should use the global flag.
    testString: assert(noNumRegex.global);
  - text: Your regex should find no non-digits in <code>"9"</code>.
    testString: assert("9".match(noNumRegex) == null);
  - text: Your regex should find 6 non-digits in <code>"Catch 22"</code>.
    testString: assert("Catch 22".match(noNumRegex).length == 6);
  - text: Your regex should find 11 non-digits in <code>"101 Dalmatians"</code>.
    testString: assert("101 Dalmatians".match(noNumRegex).length == 11);
  - text: Your regex should find 15 non-digits in <code>"One, Two, Three"</code>.
    testString: assert("One, Two, Three".match(noNumRegex).length == 15);
  - text: Your regex should find 12 non-digits in <code>"21 Jump Street"</code>.
    testString: assert("21 Jump Street".match(noNumRegex).length == 12);
  - text: 'Your regex should find 17 non-digits in <code>"2001: A Space Odyssey"</code>.'
    testString: 'assert("2001: A Space Odyssey".match(noNumRegex).length == 17);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```

</section>

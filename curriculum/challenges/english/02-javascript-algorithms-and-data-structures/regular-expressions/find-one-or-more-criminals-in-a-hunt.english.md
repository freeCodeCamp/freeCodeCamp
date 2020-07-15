---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1
isHidden: false
forumTopicId: 301343
---

## Description
<section id='description'>
Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.
Here's an example to review how to do this:
The regex <code>/z+/</code> matches the letter <code>z</code> when it appears one or more times in a row. It would find matches in all of the following strings:

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

But it does not find matches in the following strings since there are no letter <code>z</code> characters:

```js
""
"ABC"
"abcabc"
```

</section>

## Instructions
<section id='instructions'>
Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter <code>C</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should match one criminal (<code>C</code>) in <code>"C"</code>
    testString: assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
  - text: Your regex should match two criminals (<code>CC</code>) in <code>"CC"</code>
    testString: assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
  - text: Your regex should match three criminals (<code>CCC</code>) in <code>"P1P5P4CCCP2P6P3"</code>
    testString: assert('P1P5P4CCCP2P6P3'.match(reCriminals) && 'P1P5P4CCCP2P6P3'.match(reCriminals)[0] == 'CCC');
  - text: Your regex should match five criminals (<code>CCCCC</code>) in <code>"P6P2P7P4P5CCCCCP3P1"</code>
    testString: assert('P6P2P7P4P5CCCCCP3P1'.match(reCriminals) && 'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC');
  - text: Your regex should not match any criminals in <code>""</code>
    testString: assert(!reCriminals.test(''));
  - text: Your regex should not match any criminals in <code>"P1P2P3"</code>
    testString: assert(!reCriminals.test('P1P2P3'));
  - text: Your regex should match fifty criminals (<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>) in <code>"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"</code>.
    testString: assert('P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(reCriminals) && 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(reCriminals)[0] == "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let reCriminals = /./; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
let reCriminals = /C+/; // Change this line
```

</section>

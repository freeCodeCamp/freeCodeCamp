---
title: ABC Problem
id: 594810f028c0303b75339acc
challengeType: 5
---

## Description
<section id='description'>
<p>You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:</p>
<p>(B O)</p>
<p>(X K)</p>
<p>(D Q)</p>
<p>(C P)</p>
<p>(N A)</p>
<p>(G T)</p>
<p>(R E)</p>
<p>(T G)</p>
<p>(Q D)</p>
<p>(F S)</p>
<p>(J W)</p>
<p>(H U)</p>
<p>(V I)</p>
<p>(A N)</p>
<p>(O B)</p>
<p>(E R)</p>
<p>(F S)</p>
<p>(L Y)</p>
<p>(P C)</p>
<p>(Z M)</p>
<p>Some rules to keep in mind:</p>
Once a letter on a block is used, that block cannot be used again.
The function should be case-insensitive.
<p>Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>canMakeWord</code> is a function.
    testString: 'assert(typeof canMakeWord === ''function'', ''<code>canMakeWord</code> is a function.'');'
  - text: <code>canMakeWord</code> should return a boolean.
    testString: 'assert(typeof canMakeWord(''hi'') === ''boolean'', ''<code>canMakeWord</code> should return a boolean.'');'
  - text: <code>canMakeWord("bark")</code> should return true.
    testString: 'assert(canMakeWord(words[0]), ''<code>canMakeWord("bark")</code> should return true.'');'
  - text: <code>canMakeWord("BooK")</code> should return false.
    testString: 'assert(!canMakeWord(words[1]), ''<code>canMakeWord("BooK")</code> should return false.'');'
  - text: <code>canMakeWord("TReAT")</code> should return true.
    testString: 'assert(canMakeWord(words[2]), ''<code>canMakeWord("TReAT")</code> should return true.'');'
  - text: <code>canMakeWord("COMMON")</code> should return false.
    testString: 'assert(!canMakeWord(words[3]), ''<code>canMakeWord("COMMON")</code> should return false.'');'
  - text: <code>canMakeWord("squAD")</code> should return true.
    testString: 'assert(canMakeWord(words[4]), ''<code>canMakeWord("squAD")</code> should return true.'');'
  - text: <code>canMakeWord("conFUSE")</code> should return true.
    testString: 'assert(canMakeWord(words[5]), ''<code>canMakeWord("conFUSE")</code> should return true.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function canMakeWord (word) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function canMakeWord (word) {
  const characters = 'BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM';
  const blocks = characters.split(' ').map(pair => pair.split(''));

  const letters = [...word.toUpperCase()];
  let length = letters.length;
  const copy = new Set(blocks);

  letters.forEach(letter => {
    for (let block of copy) {
      const index = block.indexOf(letter);

      if (index !== -1) {
        length--;
        copy.delete(block);
        break;
      }
    }
  });
  return !length;
}

```

</section>

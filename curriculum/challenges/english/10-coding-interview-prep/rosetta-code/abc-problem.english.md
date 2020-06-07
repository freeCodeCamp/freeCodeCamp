---
title: ABC Problem
id: 594810f028c0303b75339acc
challengeType: 5
isHidden: false
forumTopicId: 302220
---

## Description
<section id='description'>
You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:
<pre>
(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
</pre>
</section>

## Instructions
<section id='instructions'>
Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.
Some rules to keep in mind:
<ul>
  <li>Once a letter on a block is used, that block cannot be used again.</li>
  <li>The function should be case-insensitive.</li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>canMakeWord</code> should be a function.
    testString: assert(typeof canMakeWord === 'function');
  - text: <code>canMakeWord</code> should return a boolean.
    testString: assert(typeof canMakeWord('hi') === 'boolean');
  - text: <code>canMakeWord("bark")</code> should return true.
    testString: assert(canMakeWord(words[0]));
  - text: <code>canMakeWord("BooK")</code> should return false.
    testString: assert(!canMakeWord(words[1]));
  - text: <code>canMakeWord("TReAT")</code> should return true.
    testString: assert(canMakeWord(words[2]));
  - text: <code>canMakeWord("COMMON")</code> should return false.
    testString: assert(!canMakeWord(words[3]));
  - text: <code>canMakeWord("squAD")</code> should return true.
    testString: assert(canMakeWord(words[4]));
  - text: <code>canMakeWord("conFUSE")</code> should return true.
    testString: assert(canMakeWord(words[5]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function canMakeWord(word) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const words = ['bark', 'BooK', 'TReAT', 'COMMON', 'squAD', 'conFUSE'];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function canMakeWord(word) {
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

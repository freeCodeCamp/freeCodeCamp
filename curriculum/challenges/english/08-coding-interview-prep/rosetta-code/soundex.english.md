---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 5
isHidden: false
forumTopicId: 302320
---

## Description

<section id='description'>

Soundex is an algorithm for creating indices for words based on their pronunciation.
The goal is for homophones to be encoded to the same representation so that they can be matched despite minor differences in spelling (from <a href="https://en.wikipedia.org/wiki/soundex" target="_blank">the WP article</a>).
There is a major issue in many of the implementations concerning the separation of two consonants that have the same soundex code! According to the <a href="https://www.archives.gov/research/census/soundex.html" target="_blank">official Rules</a>. So check for instance if <b>Ashcraft</b> is coded to <b>A-261</b>.

<ul>
  <li>If a vowel (A, E, I, O, U) separates two consonants that have the same soundex code, the consonant to the right of the vowel is coded. Tymczak is coded as T-522 (T, 5 for the M, 2 for the C, Z ignored (see "Side-by-Side" rule above), 2 for the K). Since the vowel "A" separates the Z and K, the K is coded.</li>
  <li>If "H" or "W" separate two consonants that have the same soundex code, the consonant to the right of the vowel is not coded. Example: Ashcraft is coded A-261 (A, 2 for the S, C ignored, 6 for the R, 1 for the F). It is not coded A-226.</li>
</ul>
</section>

## Instructions

<section id='instructions'>
Write a function that takes a string as a parameter and returns the encoded string.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>soundex</code> should be a function.
    testString: assert(typeof soundex == 'function');
  - text: <code>soundex("Soundex")</code> should return a string.
    testString: assert(typeof soundex("Soundex") == 'string');
  - text: <code>soundex("Soundex")</code> should return <code>"S532"</code>.
    testString: assert.equal(soundex("Soundex"), "S532");
  - text: <code>soundex("Example")</code> should return <code>"E251"</code>.
    testString: assert.equal(soundex("Example"), "E251");
  - text: <code>soundex("Sownteks")</code> should return <code>"S532"</code>.
    testString: assert.equal(soundex("Sownteks"), "S532");
  - text: <code>soundex("Ekzampul")</code> should return <code>"E251"</code>.
    testString: assert.equal(soundex("Ekzampul"), "E251");
  - text: <code>soundex("Euler")</code> should return <code>"E460"</code>.
    testString: assert.equal(soundex("Euler"), "E460");
  - text: <code>soundex("Gauss")</code> should return <code>"G200"</code>.
    testString: assert.equal(soundex("Gauss"), "G200");
  - text: <code>soundex("Hilbert")</code> should return <code>"H416"</code>.
    testString: assert.equal(soundex("Hilbert"), "H416");
  - text: <code>soundex("Knuth")</code> should return <code>"K530"</code>.
    testString: assert.equal(soundex("Knuth"), "K530");
  - text: <code>soundex("Lloyd")</code> should return <code>"L300"</code>.
    testString: assert.equal(soundex("Lloyd"), "L300");
  - text: <code>soundex("Lukasiewicz")</code> should return <code>"L222"</code>.
    testString: assert.equal(soundex("Lukasiewicz"), "L222");
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function soundex(s) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function soundex(s) {
  var a = s.toLowerCase().split('');
  var f = a.shift(),
    r = '',
    codes = {
      a: '',
      e: '',
      i: '',
      o: '',
      u: '',
      b: 1,
      f: 1,
      p: 1,
      v: 1,
      c: 2,
      g: 2,
      j: 2,
      k: 2,
      q: 2,
      s: 2,
      x: 2,
      z: 2,
      d: 3,
      t: 3,
      l: 4,
      m: 5,
      n: 5,
      r: 6
    };
  r =
    f +
    a
      .map(function(v, i, a) {
        return codes[v];
      })
      .filter(function(v, i, a) {
        return i === 0 ? v !== codes[f] : v !== a[i - 1];
      })
      .join('');

  return (r + '000').slice(0, 4).toUpperCase();
}
```

</section>

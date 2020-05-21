---
id: 5a23c84252665b21eecc7e05
title: CUSIP
challengeType: 5
isHidden: false
forumTopicId: 302241
---

## Description

<section id='description'>

A <b>CUSIP</b> is a nine-character alphanumeric code that identifies a North American financial security for the purposes of facilitating clearing and settlement of trades. The CUSIP was adopted as an American National Standard under Accredited Standards X9.6.

</section>

## Instructions

<section id='instructions'>
Write a function that takes a string as a parameter and checks if the string is valid CUSIP.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>isCusip</code> should be a function.
    testString: assert(typeof isCusip == 'function');
  - text: <code>isCusip("037833100")</code> should return a boolean.
    testString: assert(typeof isCusip("037833100") == 'boolean');
  - text: <code>isCusip("037833100")</code> should return <code>true</code>.
    testString: assert.equal(isCusip("037833100"), true);
  - text: <code>isCusip("17275R102")</code> should return <code>true</code>.
    testString: assert.equal(isCusip("17275R102"), true);
  - text: <code>isCusip("38259P50a")</code> should return <code>false</code>.
    testString: assert.equal(isCusip("38259P50a"), false);
  - text: <code>isCusip("38259P508")</code> should return <code>true</code>.
    testString: assert.equal(isCusip("38259P508"), true);
  - text: <code>isCusip("38259P50#")</code> should return <code>false</code>.
    testString: assert.equal(isCusip("38259P50#"), false);
  - text: <code>isCusip("68389X105")</code> should return <code>true</code>.
    testString: assert.equal(isCusip("68389X105"), true);
  - text: <code>isCusip("68389X106")</code> should return <code>false</code>.
    testString: assert.equal(isCusip("68389X106"), false);
  - text: <code>isCusip("5949181")</code> should return <code>false</code>.
    testString: assert.equal(isCusip("5949181"), false);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function isCusip(s) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function isCusip(s) {
  if (s.length != 9) return false;
  var sum = 0;
  var ASCII = x => x.charCodeAt(0);
  for (var i = 0; i < 7; i++) {
    var c = s.charCodeAt(i);

    var v;
    if (c >= ASCII('0') && c <= ASCII('9')) {
      v = c - 48;
    } else if (c >= ASCII('A') && c <= ASCII('Z')) {
      v = c - 64; // lower case letters apparently invalid
    } else if (c == ASCII('*')) {
      v = 36;
    } else if (c == ASCII('@')) {
      v = 37;
    } else if (c == ASCII('#')) {
      v = 38;
    } else {
      return false;
    }
    if (i % 2 == 1) v *= 2; // check if odd as using 0-based indexing
    sum += Math.floor(v / 10) + (v % 10);
  }
  return s.charCodeAt(8) - 48 == (10 - (sum % 10)) % 10;
}
```

</section>

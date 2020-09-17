---
id: 5a23c84252665b21eecc8029
title: Straddling checkerboard
challengeType: 5
forumTopicId: 302325
---

## Description

<section id='description'>

Implement functions to encrypt and decrypt a message using the <a href="https://en.wikipedia.org/wiki/Straddling_checkerboard">straddling checkerboard</a> method. The functions will take a string and an array as parameters. The array has 3 strings representing the 3 rows of the checkerboard. The output will be a series of decimal digits.
Numbers should be encrypted by inserting the escape character before each digit, then including the digit unencrypted. This should be reversed for decryption.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>straddle</code> should be a function.
    testString: assert(typeof straddle == 'function');
  - text: <code>straddle("One night-it was on the twentieth of March, 1888-I was returning.",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])</code> should return a string.
    testString: assert(typeof straddle("One night-it was on the twentieth of March, 1888-I was returning.", ["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"]) == 'string');
  - text: <code>straddle("One night-it was on the twentieth of March, 1888-I was returning.",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])</code> should return <code>"34045747525284613427502840425027537379697175891898898898584619028294547488"</code>.
    testString: assert.equal(straddle("One night-it was on the twentieth of March, 1888-I was returning.", ["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"]), "34045747525284613427502840425027537379697175891898898898584619028294547488");
  - text: <code>straddle("One night-it was on the twentieth of March, 1888-I was returning",["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"])</code> should return <code>"139539363509369743061399059745399365901344308320791798798798367430685972839363935"</code>.
    testString: assert.equal(straddle("One night-it was on the twentieth of March, 1888-I was returning", ["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"]), "139539363509369743061399059745399365901344308320791798798798367430685972839363935");
  - text: <code>straddle("Thecheckerboardcakerecipespecifies3largeeggsand2.25cupsofflour.",["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."])</code> should return <code>"125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769"</code>.
    testString: assert.equal(straddle("Thecheckerboardcakerecipespecifies3largeeggsand2.25cupsofflour.", ["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."]), "125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769");
  - text: <code>unstraddle</code> should be a function.
    testString: assert(typeof unstraddle == 'function');
  - text: <code>unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])</code> should return a string.
    testString: assert(typeof unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488", ["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"]) == 'string');
  - text: <code>unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])</code> should return <code>"ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING."</code>.
    testString: assert.equal(unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488", ["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"]), "ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING.");
  - text: <code>unstraddle("139539363509369743061399059745399365901344308320791798798798367430685972839363935",["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"])</code> should return <code>"ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING"</code>.
    testString: assert.equal(unstraddle("139539363509369743061399059745399365901344308320791798798798367430685972839363935", ["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"]), "ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING");
  - text: <code>unstraddle("125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769",["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."])</code> should return <code>"THECHECKERBOARDCAKERECIPESPECIFIES3LARGEEGGSAND2.25CUPSOFFLOUR."</code>.
    testString: assert.equal(unstraddle("125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769", ["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."]), "THECHECKERBOARDCAKERECIPESPECIFIES3LARGEEGGSAND2.25CUPSOFFLOUR.");
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function straddle(message, alphabet) {

}

function unstraddle(message, alphabet) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function straddle(message, alphabet) {
  var prefixes = new Array(
    '',
    alphabet[0].indexOf(' '),
    alphabet[0].lastIndexOf(' ')
  );

  var out = '';
  message = message.toUpperCase();
  message = message.replace(/([0-9])/g, '/$1'); // dumb way to escape numbers
  for (var i = 0; i < message.length; i++) {
    var chr = message[i];
    if (chr == ' ') continue;
    for (var j = 0; j < 3; j++) {
      var k = alphabet[j].indexOf(chr);
      if (k < 0) continue;
      out += prefixes[j].toString() + k;
    }
    if (chr == '/') out += message[++i];
  }
  return out;
}
function unstraddle(message, alphabet) {
  var prefixes = new Array(
    '',
    alphabet[0].indexOf(' '),
    alphabet[0].lastIndexOf(' ')
  );
  var out = '';
  var n, o;
  for (var i = 0; i < message.length; i++) {
    n = message[i] * 1;
    switch (n) {
      case prefixes[1]:
        o = alphabet[1][message[++i]];
        break;
      case prefixes[2]:
        o = alphabet[2][message[++i]];
        break;
      default:
        o = alphabet[0][n];
    }
    o == '/' ? (out += message[++i]) : (out += o);
  }
  return out;
}
```

</section>

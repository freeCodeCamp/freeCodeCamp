---
id: 56533eb9ac21ba0edf2244e2
title: Build a Caesars Cipher
challengeType: 5
forumTopicId: 16003
dashedName: build-a-caesars-cipher
---

# --description--

One of the simplest and most widely known <dfn>ciphers</dfn> is a <dfn>Caesar cipher</dfn>, also known as a <dfn>shift cipher</dfn>. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> cipher, where the values of the letters are shifted by 13 places. Thus `A ↔ N`, `B ↔ O` and so on.

Write a function which takes a <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

# --hints--

`rot13("EQDD BNCD BZLO")` should decode to the string `FREE CODE CAMP`

```js
assert(rot13('EQDD BNCD BZLO') === 'FREE CODE CAMP');
```

`rot13("EQDD OHYYZ!")`this should decode to the string `FREE PIZZA!`

```js
assert(rot13('EQDD OHYYZ!') === 'FREE PIZZA!');
```

`rot13("EQDD KNUD?")`this should decode to the string `FREE LOVE?`

```js
assert(rot13('EQDD KNUD?') === 'FREE LOVE?');
```

`rot13("SGD PTHBJ AQNVM ENW ITLOR NUDQ SGD KZYX CNF.")` should decode to the string `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

```js
assert(
  rot13('SGD PTHBJ AQNVM ENW ITLOR NUDQ SGD KZYX CNF.') ===
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
);
```

# --seed--

## --seed-contents--

```js
function rot13(str) {
  return str;
}

rot13("SERR PBQR PNZC");
```

# --solutions--

```js
var lookup = {
  'A': 'B','B': 'C','C': 'D','D': 'E',
  'E': 'F','F': 'G','G': 'H','H': 'I',
  'I': 'J','J': 'K','K': 'L','L': 'M',
  'M': 'N','N': 'O','O': 'P','P': 'Q',
  'Q': 'R','R': 'S','S': 'T','T': 'U',
  'U': 'V','V': 'W','W': 'X','X': 'Y',
  'Y': 'Z','Z': 'A'
};

function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line

  decodedArr = codeArr.map(function(letter) {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}
```

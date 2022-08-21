---
id: 56533eb9ac21ba0edf2244e2
title: Caesar-Verschlüsselung
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

Eine der einfachsten und bekanntesten <dfn>ciphers</dfn> ist die <dfn>Caesar-cipher</dfn>, auch bekannt als <dfn>shift-cipher</dfn>. Bei einer Shift Verschlüsselung werden die Bedeutungen der Buchstaben um einen bestimmten Betrag verschoben.

Eine gängige moderne Anwendung ist die <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> Verschlüsselung, bei der die Werte der Buchstaben um 13 Stellen verschoben werden. Also gilt `A ↔ N`, `B ↔ O` und so weiter.

Schreibe eine Funktion, die eine <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> kodierten String als Eingabe verwendet und einen dekodierten String zurückgibt.

Alle Buchstaben werden groß geschrieben. Verändere keine nicht-alphabetischen Zeichen (z. B. Leerzeichen, Satzzeichen), sondern gib sie weiter.

# --hints--

`rot13("SERR PBQR PNZC")` sollte zum String `FREE CODE CAMP` dekodiert werden

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` sollte zum String `FREE PIZZA!` dekodiert werden

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` sollte zum String `FREE LOVE?` dekodiert werden

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` sollte zum String `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.` dekodiert werden

```js
assert(
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') ===
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
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
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

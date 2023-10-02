---
id: 56533eb9ac21ba0edf2244e2
title: Cifrado César
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

Uno de los <dfn>cifrados</dfn> más simples y conocidos es el <dfn>cifrado César</dfn>, también conocido como <dfn>cifrado por desplazamiento</dfn>. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a>, donde los valores de las letras son desplazados por 13 lugares. Así que `A ↔ N`, `B ↔ O` y así sucesivamente.

Escribe una función que reciba una cadena codificada en <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.

# --hints--

`rot13("SERR PBQR PNZC")` debe decodificarse en la cadena `FREE CODE CAMP`

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` debe decodificarse en la cadena `FREE PIZZA!`

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` debe decodificarse en la cadena `FREE LOVE?`

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` debe decodificarse en la cadena `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

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

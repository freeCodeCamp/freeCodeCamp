---
id: 56533eb9ac21ba0edf2244e2
title: Cifra de César
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

Uma das <dfn>cifras</dfn> mais simples e mais conhecidas é a <dfn>cifra de César</dfn>, também conhecida como uma <dfn>cifra de mudança</dfn>. Em uma cifra de transferência, os significados das letras são deslocados de acordo com a quantidade definida.

Um uso moderno comum é a cifra <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a>, onde os valores das letras são deslocados em 13 lugares. Da seguinte forma: `A ↔ N`, `B ↔ O` e assim por diante.

Escreva uma função que recebe uma string codificada de <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> como entrada e retorna uma string decodificada.

Todas as letras serão maiúsculas. Não transforme nenhum caractere não-alfabético (ou seja, espaços, pontuação), mas passe por eles.

# --hints--

`rot13("SERR PBQR PNZC")` deve decodificar para a string `FREE CODE CAMP`

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` deve decodificar para a string `FREE PIZZA!`

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` deve decodificar para a string `FREE LOVE?`

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")`deve decodificar para a string `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

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

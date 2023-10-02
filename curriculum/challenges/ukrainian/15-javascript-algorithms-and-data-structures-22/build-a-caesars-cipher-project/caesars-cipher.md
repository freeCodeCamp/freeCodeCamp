---
id: 56533eb9ac21ba0edf2244e2
title: Створіть шифр Цезаря
challengeType: 5
forumTopicId: 16003
dashedName: build-a-caesars-cipher
---

# --description--

Одним з найпростіших і найпоширеніших <dfn>шифрів</dfn> є <dfn>шифр Цезаря</dfn>, також відомий як <dfn>шифр зсуву</dfn>. У шифрі зсуву значення літери зміщене на встановлену кількість.

Часто використовують шифр <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a>, який зміщує літеру на 13 місць. Таким чином, `A ↔ N`, `B ↔ O` і так далі.

Напишіть функцію, яка приймає закодований рядок <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> як вхідні дані та повертає декодований.

Всі літери повинні бути великими. Не замінюйте неалфавітні символи (пробіли, знаки пунктуації), але перенесіть їх.

# --hints--

`rot13("SERR PBQR PNZC")` повинен розшифруватись як рядок `FREE CODE CAMP`

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` повинен розшифруватись як рядок `FREE PIZZA!`

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` повинен розшифруватись як рядок `FREE LOVE?`

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` повинен розшифруватись як рядок `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

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

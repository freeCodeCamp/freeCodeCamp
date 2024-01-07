---
id: 56533eb9ac21ba0edf2244e2
title: 構建一個凱撒密碼
challengeType: 5
forumTopicId: 16003
dashedName: build-a-caesars-cipher
---

# --description--

凱撒密碼（ <dfn>Caesar cipher</dfn>）是最簡單且最廣爲人知的密碼（<dfn>ciphers</dfn>），也被稱爲移位密碼（<dfn>shift cipher</dfn>）。 在移位密碼中，明文中的字母通過按照一個固定數目進行偏移後被替換成新的字母。

現代最常被應用到的一個變種就是 <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> 加密，也就是明文中的字母向後移 13 位。 也就是， `A ↔ N`，`B ↔ O` 等等。

編寫一個函數，它將把使用 <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> 加密編碼的字符串作爲輸入並返回解碼字符串。

所有解碼後的字母都必須爲字母大寫。 請不要解碼非字母的字符（例如，空格、標點符號），但你需要在結果中保留它們。

# --hints--

`rot13("SERR PBQR PNZC")` 應解碼爲 `FREE CODE CAMP`

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` 應解碼爲 `FREE PIZZA!`

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` 應解碼爲 `FREE LOVE?`

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` 應解碼爲 `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

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

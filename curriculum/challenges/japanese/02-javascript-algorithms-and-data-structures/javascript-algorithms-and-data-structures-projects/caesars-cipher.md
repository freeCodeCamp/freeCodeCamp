---
id: 56533eb9ac21ba0edf2244e2
title: シーザー暗号
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

最もシンプルで広く知られている<dfn>暗号</dfn>の 1 つが<dfn>シーザー暗号</dfn>で、<dfn>シフト暗号</dfn>とも呼ばれています。 シフト暗号では、文字の意味が一定量ずつシフトされます。

現代では、文字を 13 文字ずつシフトさせる <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> という暗号がよく使われます。 たとえば、`A ↔ N`、`B ↔ O` のようになります。

<a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> でエンコードされた文字列を入力として受け取り、デコードされた文字列を返す関数を作成してください。

文字はすべて大文字にしてください。 アルファベット以外の文字 (スペース、句読点など) は、変換せず、そのまま渡してください。

# --hints--

`rot13("SERR PBQR PNZC")` は文字列 `FREE CODE CAMP` にデコードする必要があります。

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` は文字列 `FREE PIZZA!` にデコードする必要があります。

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` は文字列 `FREE LOVE?` にデコードする必要があります。

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` は文字列 `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.` にデコードする必要があります。

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

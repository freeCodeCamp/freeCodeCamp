---
id: 56533eb9ac21ba0edf2244e2
title: シーザーズ暗号の構築
challengeType: 5
forumTopicId: 16003
dashedName: build-a-caesars-cipher
---

# --description--

最も単純で最も広く知られている<dfn>暗号</dfn>の 1 つは、<dfn>シフト暗号</dfn>としても知られる<dfn>シーザー暗号</dfn>です。<dfn>シフト暗号</dfn>では、文字の意味が一定量だけシフトされます。

現代で一般的に使用されているのは、文字の値が 13 桁シフトされる <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> 暗号です。したがって、「A ↔ N」、「B ↔ O」などになります。

<a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> でエンコードされた文字列を入力として受け取り、デコードされた文字列を返す関数を作成します。

すべての文字は大文字になります。アルファベット以外の文字 (スペース、句読点など) は変換せず、そのまま渡します。

# --hints--

`rot13("SERR PBQR PNZC")` は文字列 `FREE CODE CAMP` にデコードされる必要があります

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` は文字列 `FREE PIZZA!` にデコードされるはずです。

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` は文字列 `FREE LOVE?` にデコードされるはずです。

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` は文字列 `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.` にデコードされるはずです。

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
  var codeArr = encodedStr.split("");  // ストリングからアレイへ
  var decodedArr = []; // 結果はここに表示されます
  // この行以下のコードのみを変更してください

  decodedArr = codeArr.map(function(letter) {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // この行より上のコードのみを変更します
  return decodedArr.join(""); // ストリングからアレイへ
}
```

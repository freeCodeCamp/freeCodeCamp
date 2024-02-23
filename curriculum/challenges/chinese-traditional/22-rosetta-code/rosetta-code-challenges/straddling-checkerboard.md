---
id: 5a23c84252665b21eecc8029
title: 跨界棋盤
challengeType: 1
forumTopicId: 302325
dashedName: straddling-checkerboard
---

# --description--

Implement functions to encrypt and decrypt a message using the **straddling checkerboard** method.

每個函數將需要兩個參數，一個 `消息` 字符串和 `字母` 數組。 `字母` 數組將包含3個字符串，代表跨界棋盤的3行。

`straddle()` 函數的輸出應該是一系列小數數字。 數字應該通過在每個數字之前插入轉義字符來加密，然後包括未加密的數字。

使用 `unstraddle()` 函數解密時，這應該被逆轉。

# --hints--

`straddle` 應該是一個函數。

```js
assert(typeof straddle == 'function');
```

`straddle("One night-it was on the twentieth of March, 1888-I was returning.",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` 應該返回一個字符串。

```js
assert(
  typeof straddle(
    'One night-it was on the twentieth of March, 1888-I was returning.',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ) == 'string'
);
```

`straddle("One night-it was on the twentieth of March, 1888-I was returning.",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` 應該返回 `"34045747525284613427502840425027537379697175891898898898584619028294547488"`。

```js
assert.equal(
  straddle(
    'One night-it was on the twentieth of March, 1888-I was returning.',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ),
  '34045747525284613427502840425027537379697175891898898898584619028294547488'
);
```

`straddle("One night-it was on the twentieth of March, 1888-I was returning",["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"])` 應該返回 `"139539363509369743061399059745399365901344308320791798798798367430685972839363935"`。

```js
assert.equal(
  straddle('One night-it was on the twentieth of March, 1888-I was returning', [
    'HOL MES RT',
    'ABCDFGIJKN',
    'PQUVWXYZ./'
  ]),
  '139539363509369743061399059745399365901344308320791798798798367430685972839363935'
);
```

`straddle("Thecheckerboardcakerecipespecifies3largeeggsand2.25cupsofflour.",["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."])` 應該返回 `"125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769"`。

```js
assert.equal(
  straddle('Thecheckerboardcakerecipespecifies3largeeggsand2.25cupsofflour.', [
    'ET AON RIS',
    'BCDFGHJKLM',
    'PQ/UVWXYZ.'
  ]),
  '125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769'
);
```

`unstraddle` 應該是一個函數。

```js
assert(typeof unstraddle == 'function');
```

`unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` 應該返回一個字符串。

```js
assert(
  typeof unstraddle(
    '34045747525284613427502840425027537379697175891898898898584619028294547488',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ) == 'string'
);
```

`unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` 應該返回 `"ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING."`。

```js
assert.equal(
  unstraddle(
    '34045747525284613427502840425027537379697175891898898898584619028294547488',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ),
  'ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING.'
);
```

`unstraddle("139539363509369743061399059745399365901344308320791798798798367430685972839363935",["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"])` 應該返回 `"ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING"`。

```js
assert.equal(
  unstraddle(
    '139539363509369743061399059745399365901344308320791798798798367430685972839363935',
    ['HOL MES RT', 'ABCDFGIJKN', 'PQUVWXYZ./']
  ),
  'ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING'
);
```

`unstraddle("125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769",["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."])` 應該返回 `"THECHECKERBOARDCAKERECIPESPECIFIES3LARGEEGGSAND2.25CUPSOFFLOUR."`。

```js
assert.equal(
  unstraddle(
    '125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769',
    ['ET AON RIS', 'BCDFGHJKLM', 'PQ/UVWXYZ.']
  ),
  'THECHECKERBOARDCAKERECIPESPECIFIES3LARGEEGGSAND2.25CUPSOFFLOUR.'
);
```

# --seed--

## --seed-contents--

```js
function straddle(message, alphabet) {

}

function unstraddle(message, alphabet) {

}
```

# --solutions--

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

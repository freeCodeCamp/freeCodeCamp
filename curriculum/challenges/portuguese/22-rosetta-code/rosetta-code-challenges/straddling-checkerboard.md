---
id: 5a23c84252665b21eecc8029
title: Tabuleiro de damas escarranchado
challengeType: 1
forumTopicId: 302325
dashedName: straddling-checkerboard
---

# --description--

Implemente funções para criptografar e descriptografar uma mensagem usando o método do **tabuleiro de damas escarranchado**.

Cada função receberá dois argumentos, uma string de `message` e um array `alphabet`. O array `alphabet` conterá 3 strings representando as 3 linhas do tabuleiro de verificação.

A saída da função `straddle()` deve ser uma série de algarismos decimais. Os números devem ser criptografados inserindo o caractere de escape antes de cada dígito e, em seguida, incluindo o dígito <em>não criptografado</em>.

Isso deve ser revertido para descriptografar com a função `unstraddle()`.

# --hints--

`straddle` deve ser uma função.

```js
assert(typeof straddle == 'function');
```

`straddle("One night-it was on the twentieth of March, 1888-I was returning.",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` deve retornar uma string.

```js
assert(
  typeof straddle(
    'One night-it was on the twentieth of March, 1888-I was returning.',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ) == 'string'
);
```

`straddle("One night-it was on the twentieth of March, 1888-I was returning.",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` deve retornar `"34045747525284613427502840425027537379697175891898898898584619028294547488"`.

```js
assert.equal(
  straddle(
    'One night-it was on the twentieth of March, 1888-I was returning.',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ),
  '34045747525284613427502840425027537379697175891898898898584619028294547488'
);
```

`straddle("One night-it was on the twentieth of March, 1888-I was returning",["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"])` deve retornar `"139539363509369743061399059745399365901344308320791798798798367430685972839363935"`.

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

`straddle("Thecheckerboardcakerecipespecifies3largeeggsand2.25cupsofflour.",["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."])` deve retornar `"125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769"`.

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

`unstraddle` deve ser uma função.

```js
assert(typeof unstraddle == 'function');
```

`unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` deve retornar uma string.

```js
assert(
  typeof unstraddle(
    '34045747525284613427502840425027537379697175891898898898584619028294547488',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ) == 'string'
);
```

`unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` deve retornar `"ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING."`.

```js
assert.equal(
  unstraddle(
    '34045747525284613427502840425027537379697175891898898898584619028294547488',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ),
  'ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING.'
);
```

`unstraddle("139539363509369743061399059745399365901344308320791798798798367430685972839363935",["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"])` deve retornar `"ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING"`.

```js
assert.equal(
  unstraddle(
    '139539363509369743061399059745399365901344308320791798798798367430685972839363935',
    ['HOL MES RT', 'ABCDFGIJKN', 'PQUVWXYZ./']
  ),
  'ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING'
);
```

`unstraddle("125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769",["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."])` deve retornar `"THECHECKERBOARDCAKERECIPESPECIFIES3LARGEEGGSAND2.25CUPSOFFLOUR."`.

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

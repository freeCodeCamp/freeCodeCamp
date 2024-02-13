---
id: 5a23c84252665b21eecc8029
title: Розширена шахівниця
challengeType: 1
forumTopicId: 302325
dashedName: straddling-checkerboard
---

# --description--

Реалізуйте функції, щоб шифрувати та дешифрувати повідомлення за допомогою методу **розширеної шахівниці**.

Кожна функція прийматиме два аргументи: рядок `message` та масив `alphabet`. Масив `alphabet` міститиме 3 рядки, які представляють 3 рядки розширеної шахівниці.

Вихідними даними функції `straddle()` має бути множина десяткових цифр. Цифри мають бути зашифровані шляхом вставлення екранованого символу перед кожною цифрою, а потім містити <em>дешифровану</em> цифру.

Цей спосіб має бути оберненим для дешифрування за допомогою функції `unstraddle()`.

# --hints--

`straddle` має бути функцією.

```js
assert(typeof straddle == 'function');
```

`straddle("One night-it was on the twentieth of March, 1888-I was returning.",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` має повернути рядок.

```js
assert(
  typeof straddle(
    'One night-it was on the twentieth of March, 1888-I was returning.',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ) == 'string'
);
```

`straddle("One night-it was on the twentieth of March, 1888-I was returning.",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` має повернути `"34045747525284613427502840425027537379697175891898898898584619028294547488"`.

```js
assert.equal(
  straddle(
    'One night-it was on the twentieth of March, 1888-I was returning.',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ),
  '34045747525284613427502840425027537379697175891898898898584619028294547488'
);
```

`straddle("One night-it was on the twentieth of March, 1888-I was returning",["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"])` має повернути `"139539363509369743061399059745399365901344308320791798798798367430685972839363935"`.

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

`straddle("Thecheckerboardcakerecipespecifies3largeeggsand2.25cupsofflour.",["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."])` має повернути `"125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769"`.

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

`unstraddle` має бути функцією.

```js
assert(typeof unstraddle == 'function');
```

`unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` має повернути рядок.

```js
assert(
  typeof unstraddle(
    '34045747525284613427502840425027537379697175891898898898584619028294547488',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ) == 'string'
);
```

`unstraddle("34045747525284613427502840425027537379697175891898898898584619028294547488",["ESTONIA  R", "BCDFGHJKLM", "PQUVWXYZ./"])` має повернути `"ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING."`.

```js
assert.equal(
  unstraddle(
    '34045747525284613427502840425027537379697175891898898898584619028294547488',
    ['ESTONIA  R', 'BCDFGHJKLM', 'PQUVWXYZ./']
  ),
  'ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING.'
);
```

`unstraddle("139539363509369743061399059745399365901344308320791798798798367430685972839363935",["HOL MES RT", "ABCDFGIJKN", "PQUVWXYZ./"])` має повернути `"ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING"`.

```js
assert.equal(
  unstraddle(
    '139539363509369743061399059745399365901344308320791798798798367430685972839363935',
    ['HOL MES RT', 'ABCDFGIJKN', 'PQUVWXYZ./']
  ),
  'ONENIGHTITWASONTHETWENTIETHOFMARCH1888IWASRETURNING'
);
```

`unstraddle("125021250212707204372221327070218600960021823809623283724002424935226226962262521636094232328463769",["ET AON RIS", "BCDFGHJKLM", "PQ/UVWXYZ."])` має повернути `"THECHECKERBOARDCAKERECIPESPECIFIES3LARGEEGGSAND2.25CUPSOFFLOUR."`.

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

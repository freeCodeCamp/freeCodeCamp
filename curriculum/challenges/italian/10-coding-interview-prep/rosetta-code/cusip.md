---
id: 5a23c84252665b21eecc7e05
title: CUSIP
challengeType: 1
forumTopicId: 302241
dashedName: cusip
---

# --description--

Il **CUSIP** è un codice alphanumerico lungo 9 carattari che identifica una sicurezza finanziara nord americana con il proposito di facilitare scambi commerciali. Il CUSIP è stato adottato come standard nazionale americano in base agli standard accreditati X9.6.

# --instructions--

Scrivi una funzione che prende una stringa come parametro e controlla se la stringa è un codice CUSIP valido.

# --hints--

`isCusip` dovrebbe essere una funzione.

```js
assert(typeof isCusip == 'function');
```

`isCusip("037833100")` dovrebbe restituire un booleano.

```js
assert(typeof isCusip('037833100') == 'boolean');
```

`isCusip("037833100")` dovrebbe restituire `true`.

```js
assert.equal(isCusip('037833100'), true);
```

`isCusip("17275R102")` dovrebbe restituire `true`.

```js
assert.equal(isCusip('17275R102'), true);
```

`isCusip("38259P50a")` dovrebbe restituire `false`.

```js
assert.equal(isCusip('38259P50a'), false);
```

`isCusip("38259P508")` dovrebbe restituire `true`.

```js
assert.equal(isCusip('38259P508'), true);
```

`isCusip("38259P50#")` dovrebbe restituire `false`.

```js
assert.equal(isCusip('38259P50#'), false);
```

`isCusip("68389X105")` dovrebbe restituire `true`.

```js
assert.equal(isCusip('68389X105'), true);
```

`isCusip("68389X106")` dovrebbe restituire `false`.

```js
assert.equal(isCusip('68389X106'), false);
```

`isCusip("5949181")` dovrebbe restituire `false`.

```js
assert.equal(isCusip('5949181'), false);
```

# --seed--

## --seed-contents--

```js
function isCusip(s) {

}
```

# --solutions--

```js
function isCusip(s) {
  if (s.length != 9) return false;
  var sum = 0;
  var ASCII = x => x.charCodeAt(0);
  for (var i = 0; i < 7; i++) {
    var c = s.charCodeAt(i);

    var v;
    if (c >= ASCII('0') && c <= ASCII('9')) {
      v = c - 48;
    } else if (c >= ASCII('A') && c <= ASCII('Z')) {
      v = c - 64; // lower case letters apparently invalid
    } else if (c == ASCII('*')) {
      v = 36;
    } else if (c == ASCII('@')) {
      v = 37;
    } else if (c == ASCII('#')) {
      v = 38;
    } else {
      return false;
    }
    if (i % 2 == 1) v *= 2; // check if odd as using 0-based indexing
    sum += Math.floor(v / 10) + (v % 10);
  }
  return s.charCodeAt(8) - 48 == (10 - (sum % 10)) % 10;
}
```

---
id: 5a23c84252665b21eecc8036
title: Rimozione di codici di controllo e caratteri estesi da una stringa
challengeType: 1
forumTopicId: 302327
dashedName: strip-control-codes-and-extended-characters-from-a-string
---

# --description--

Il compito è quello di rimuovere i codici di controllo e i caratteri estesi da una stringa. La soluzione dovrebbe dimostrare come ottenere ciascuno dei seguenti risultati: una stringa con codici di controllo e caratteri estesi rimossi. Nell'ASCII, i codici di controllo hanno codici decimali da 0 a 31 e 127. Su un sistema basato su ASCII, se i codici di controllo sono rimossi, la stringa risultante avrebbe tutti i suoi caratteri nell'intervallo da 32 a 126 decimale nella tabella ASCII. Su un sistema non basato su ASCII, consideriamo i caratteri che non hanno un glifo corrispondente nella tabella ASCII (entro l'intervallo ASCII da 32 a 126 decimale) un carattere esteso ai fini di questo compito.

# --hints--

`strip` dovrebbe essere una funzione.

```js
assert(typeof strip == 'function');
```

`strip("abc")` dovrebbe restituire una stringa.

```js
assert(typeof strip('abc') == 'string');
```

`strip("\ba\x00b\n\rc\fd\xc3")` dovrebbe restituire `"abcd"`.

```js
assert.equal(strip('\ba\x00b\n\rc\fd\xc3'), 'abcd');
```

`strip("\u0000\n abc\u00E9def\u007F")` dovrebbe restituire `" abcdef"`.

```js
assert.equal(strip('\u0000\n abc\u00E9def\u007F'), ' abcdef');
```

`strip("a\n\tb\u2102d\u2147f")` dovrebbe restituire `"abdf"`.

```js
assert.equal(strip('a\n\tb\u2102d\u2147f'), 'abdf');
```

`strip("Français.")` dovrebbe restituire `"Franais."`.

```js
assert.equal(strip('Français.'), 'Franais.');
```

`strip("123\tabc\u0007DEF\u007F+-*/€æŧðłþ")` dovrebbe restituire `"123abcDEF+-*/"`.

```js
assert.equal(strip('123\tabc\u0007DEF\u007F+-*/€æŧðłþ'), '123abcDEF+-*/');
```

# --seed--

## --seed-contents--

```js
function strip(s) {

}
```

# --solutions--

```js
function strip(s) {
  return s
    .split('')
    .filter(function(x) {
      var n = x.charCodeAt(0);

      return 31 < n && 127 > n;
    })
    .join('');
}
```

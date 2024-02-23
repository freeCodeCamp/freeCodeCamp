---
id: 5e4ce2a1ac708cc68c1df25d
title: Lange Multiplikation
challengeType: 1
forumTopicId: 385269
dashedName: long-multiplication
---

# --description--

Explicitly implement long multiplication.

Dies ist ein möglicher Ansatz für die Algebra von Ganzzahlen mit beliebiger Genauigkeit.

# --instructions--

Schreibe eine Funktion, die zwei Zeichenketten mit großen Zahlen als Parameter benötigt. Deine Funktion sollte das Produkt dieser beiden großen Zahlen als eine Zeichenfolge zurückgeben.

**Note:** In JavaScript sind die arithmetischen Operationen bei großen Zahlen ungenau, sodass du selbst eine präzise Multiplikation implementieren musst.

# --hints--

`mult` sollte eine Funktion sein.

```js
assert(typeof mult == 'function');
```

`mult("18446744073709551616", "18446744073709551616")` sollte einen String zurückgeben.

```js
assert(typeof mult('18446744073709551616', '18446744073709551616') == 'string');
```

`mult("18446744073709551616", "18446744073709551616")` sollte `"340282366920938463463374607431768211456"` zurückgeben.

```js
assert.equal(
  mult('18446744073709551616', '18446744073709551616'),
  '340282366920938463463374607431768211456'
);
```

`mult("31844674073709551616", "1844674407309551616")` sollte `"58743055272886011737990786529368211456"` zurückgeben.

```js
assert.equal(
  mult('31844674073709551616', '1844674407309551616'),
  '58743055272886011737990786529368211456'
);
```

`mult("1846744073709551616", "44844644073709551616")` sollte `"82816580680737279241781007431768211456"` zurückgeben.

```js
assert.equal(
  mult('1846744073709551616', '44844644073709551616'),
  '82816580680737279241781007431768211456'
);
```

`mult("1844674407370951616", "1844674407709551616")` sollte `"3402823669833978308014392742590611456"` zurückgeben.

```js
assert.equal(
  mult('1844674407370951616', '1844674407709551616'),
  '3402823669833978308014392742590611456'
);
```

`mult("2844674407370951616", "1844674407370955616")` sollte `"5247498076580334548376218009219475456"` zurückgeben.

```js
assert.equal(
  mult('2844674407370951616', '1844674407370955616'),
  '5247498076580334548376218009219475456'
);
```

# --seed--

## --seed-contents--

```js
function mult(strNum1, strNum2) {

}
```

# --solutions--

```js
function mult(strNum1, strNum2) {
    var a1 = strNum1.split("").reverse();
    var a2 = strNum2.toString().split("").reverse();
    var aResult = new Array;

    for ( var iterNum1 = 0; iterNum1 < a1.length; iterNum1++ ) {
        for ( var iterNum2 = 0; iterNum2 < a2.length; iterNum2++ ) {
            var idxIter = iterNum1 + iterNum2;    // Get the current array position.
            aResult[idxIter] = a1[iterNum1] * a2[iterNum2] + ( idxIter >= aResult.length ? 0 : aResult[idxIter] );

            if ( aResult[idxIter] > 9 ) {    // Carrying
                aResult[idxIter + 1] = Math.floor( aResult[idxIter] / 10 ) + ( idxIter + 1 >= aResult.length ? 0 : aResult[idxIter + 1] );
                aResult[idxIter] %= 10;
            }
        }
    }
    return aResult.reverse().join("");
}
```

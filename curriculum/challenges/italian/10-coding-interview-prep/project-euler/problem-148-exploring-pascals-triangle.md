---
id: 5900f4021000cf542c50ff14
title: 'Problema 148: Esplorare il triangolo di Pascal'
challengeType: 1
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

Possiamo facilmente verificare che nessuna delle voci nelle prime sette righe del triangolo di Pascal è divisibile per 7:

```markup
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
```

Tuttavia, se controlliamo le prime cento righe, scopriremo che solo 2361 delle 5050 voci non sono divisibili per 7.

# --instructions--

Trova il numero di voci che non sono divisibili per 7 nel primo miliardo di righe (${10}^9$) del triangolo di Pascal.

# --hints--

`entriesOfPascalsTriangle()` dovrebbe restituire `2129970655314432`.

```js
assert.strictEqual(entriesOfPascalsTriangle(), 2129970655314432);
```

# --seed--

## --seed-contents--

```js
function entriesOfPascalsTriangle() {

  return true;
}

entriesOfPascalsTriangle();
```

# --solutions--

```js
// solution required
```

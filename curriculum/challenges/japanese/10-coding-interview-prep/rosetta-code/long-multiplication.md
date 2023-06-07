---
id: 5e4ce2a1ac708cc68c1df25d
title: 桁数の多い数字の掛け算
challengeType: 1
forumTopicId: 385269
dashedName: long-multiplication
---

# --description--

Explicitly implement long multiplication.

これは任意精度の整数代数に対するアプローチの一つです。

# --instructions--

パラメータとして、巨大数の文字列を 2 つ取る関数を記述してください。 関数はこれら 2 つの巨大数の積を文字列として返す必要があります。

**注意:** JavaScript では、巨大数の場合の算術演算は不正確になるため、自身で正確な乗算を実装する必要があります。

# --hints--

`mult` は関数とします。

```js
assert(typeof mult == 'function');
```

`mult("18446744073709551616", "18446744073709551616")` は文字列を返す必要があります。

```js
assert(typeof mult('18446744073709551616', '18446744073709551616') == 'string');
```

`mult("18446744073709551616", "18446744073709551616")` は `"340282366920938463463374607431768211456"` を返す必要があります。

```js
assert.equal(
  mult('18446744073709551616', '18446744073709551616'),
  '340282366920938463463374607431768211456'
);
```

`mult("31844674073709551616", "1844674407309551616")` は `"58743055272886011737990786529368211456"` を返す必要があります。

```js
assert.equal(
  mult('31844674073709551616', '1844674407309551616'),
  '58743055272886011737990786529368211456'
);
```

`mult("1846744073709551616", "44844644073709551616")` は `"82816580680737279241781007431768211456"` を返す必要があります。

```js
assert.equal(
  mult('1846744073709551616', '44844644073709551616'),
  '82816580680737279241781007431768211456'
);
```

`mult("1844674407370951616", "1844674407709551616")` は `"3402823669833978308014392742590611456"` を返す必要があります。

```js
assert.equal(
  mult('1844674407370951616', '1844674407709551616'),
  '3402823669833978308014392742590611456'
);
```

`mult("2844674407370951616", "1844674407370955616")` は `"5247498076580334548376218009219475456"` を返す必要があります。

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

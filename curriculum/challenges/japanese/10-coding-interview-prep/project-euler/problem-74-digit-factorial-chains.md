---
id: 5900f3b61000cf542c50fec9
title: '問題 74: 各位の階乗の連鎖'
challengeType: 1
forumTopicId: 302187
dashedName: problem-74-digit-factorial-chains
---

# --description--

145 という数は、各位の階乗の和も 145 に等しいことがよく知られています。

$$1! + 4! + 5! = 1 + 24 + 120 = 145$$

169 にはあまり知られていない性質があります。169 は、その数自体に戻るまでの数の連鎖が最長です。このようなループは次の 3 つしか存在しません。

$$\begin{align} &169 → 363601 → 1454 → 169\\\\
&871 → 45361 → 871\\\\ &872 → 45362 → 872\\\\
\end{align}$$

どの数から始めても最終的にはループに入るということを証明するのは難しくありません。 下に例を挙げます。

$$\begin{align} &69 → 363600 → 1454 → 169 → 363601\\ (→ 1454)\\\\
&78 → 45360 → 871 → 45361\\ (→ 871)\\\\ &540 → 145\\ (→ 145)\\\\
\end{align}$$

69 から始めると 5 つの非反復項を持つ連鎖になりますが、100 万より小さい数から始めると、最長の非反復連鎖は 60 項です。

`n` 未満の数から始めた場合、ちょうど 60 項の非反復項を持つ連鎖はいくつありますか。

# --hints--

`digitFactorialChains(2000)` は数値を返す必要があります。

```js
assert(typeof digitFactorialChains(2000) === 'number');
```

`digitFactorialChains(2000)` は `6` を返す必要があります。

```js
assert.strictEqual(digitFactorialChains(2000), 6);
```

`digitFactorialChains(100000)` は `42` を返す必要があります。

```js
assert.strictEqual(digitFactorialChains(100000), 42);
```

`digitFactorialChains(500000)` は `282` を返す必要があります。

```js
assert.strictEqual(digitFactorialChains(500000), 282);
```

`digitFactorialChains(1000000)` は `402` を返す必要があります。

```js
assert.strictEqual(digitFactorialChains(1000000), 402);
```

# --seed--

## --seed-contents--

```js
function digitFactorialChains(n) {

  return true;
}

digitFactorialChains(2000);
```

# --solutions--

```js
function digitFactorialChains(n) {
  function sumDigitsFactorials(number) {
    let sum = 0;
    while (number > 0) {
      sum += factorials[number % 10];
      number = Math.floor(number / 10);
    }
    return sum;
  }

  const factorials = [1];
  for (let i = 1; i < 10; i++) {
    factorials.push(factorials[factorials.length - 1] * i);
  }

  const sequences = {
    169: 3,
    871: 2,
    872: 2,
    1454: 3,
    45362: 2,
    45461: 2,
    3693601: 3
  };
  let result = 0;

  for (let i = 2; i < n; i++) {
    let curNum = i;
    let chainLength = 0;
    const curSequence = [];
    while (curSequence.indexOf(curNum) === -1) {
      curSequence.push(curNum);
      curNum = sumDigitsFactorials(curNum);
      chainLength++;
      if (sequences.hasOwnProperty(curNum) > 0) {
        chainLength += sequences[curNum];
        break;
      }
    }
    if (chainLength === 60) {
      result++;
    }
    for (let j = 1; j < curSequence.length; j++) {
      sequences[curSequence[j]] = chainLength - j;
    }
  }
  return result;
}
```

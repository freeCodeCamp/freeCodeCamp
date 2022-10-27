---
id: 59713bd26bdeb8a594fb9413
title: 硬貨を数える
challengeType: 1
forumTopicId: 302238
dashedName: count-the-coins
---

# --description--

There are four types of common coins in US currency:

<ul>
  <li>25セント硬貨</li>
  <li>10セント硬貨</li>
  <li>5セント硬貨</li>
  <li>1セント硬貨</li>
</ul>

<p>15セントを両替するには6つの組み合わせがあります。</p>

<ul>
  <li>10セント硬貨1枚と5セント硬貨1枚</li>
  <li>10セント硬貨1枚と1セント硬貨5枚</li>
  <li>5セント硬貨3枚</li>
  <li>5セント硬貨2枚と1セント硬貨5枚</li>
  <li>5セント硬貨1枚と1セント硬貨10枚</li>
  <li>1セント硬貨15枚</li>
</ul>

# --instructions--

米国の1セント硬貨である `cents` での入力値を、共通硬貨を使用して両替する場合、いくつの組み合わせがあるかを求める関数を作成します。

# --hints--

`countCoins` という関数です。

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` は `6` を返します。

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` should return `163`.

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` は `242` を返します。

```js
assert.equal(countCoins(100), 242);
```

# --seed--

## --seed-contents--

```js
function countCoins(cents) {

  return true;
}
```

# --solutions--

```js
function countCoins(cents) {
  const operands = [1, 5, 10, 25];
  const targetsLength = cents + 1;
  const operandsLength = operands.length;
  const t = [1];

  for (let a = 0; a < operandsLength; a++) {
    for (let b = 1; b < targetsLength; b++) {
      // initialise undefined target
      t[b] = t[b] ? t[b] : 0;

      // accumulate target + operand ways
      t[b] += (b < operands[a]) ? 0 : t[b - operands[a]];
    }
  }

  return t[targetsLength - 1];
}
```

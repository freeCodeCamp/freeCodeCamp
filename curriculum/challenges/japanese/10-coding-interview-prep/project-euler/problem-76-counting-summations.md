---
id: 5900f3b81000cf542c50fecb
title: '問題 76: 和を数え上げる'
challengeType: 1
forumTopicId: 302189
dashedName: problem-76-counting-summations
---

# --description--

5 を数の和として表す方法はちょうど 6 通りあります。

<div style='margin-left: 4em;'>
  4 + 1<br>
  3 + 2<br>
  3 + 1 + 1<br>
  2 + 2 + 1<br>
  2 + 1 + 1 + 1<br>
  1 + 1 + 1 + 1 + 1<br><br>
</div>

`n` を 2 つ以上の正整数の和として表す方法は何通りありますか。

# --hints--

`countingSummations(5)` は数値を返す必要があります。

```js
assert(typeof countingSummations(5) === 'number');
```

`countingSummations(5)` は `6` を返す必要があります。

```js
assert.strictEqual(countingSummations(5), 6);
```

`countingSummations(20)` は `626` を返す必要があります。

```js
assert.strictEqual(countingSummations(20), 626);
```

`countingSummations(50)` は `204225` を返す必要があります。

```js
assert.strictEqual(countingSummations(50), 204225);
```

`countingSummations(100)` は `190569291` を返す必要があります。

```js
assert.strictEqual(countingSummations(100), 190569291);
```

# --seed--

## --seed-contents--

```js
function countingSummations(n) {

  return true;
}

countingSummations(5);
```

# --solutions--

```js
function countingSummations(n) {
  const combinations = new Array(n + 1).fill(0);
  combinations[0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = i; j < n + 1; j++) {
      combinations[j] += combinations[j - i];
    }
  }
  return combinations[n];
}
```

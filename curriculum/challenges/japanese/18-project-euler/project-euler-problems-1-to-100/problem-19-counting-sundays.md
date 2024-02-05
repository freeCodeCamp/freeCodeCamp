---
id: 5900f37f1000cf542c50fe92
title: '問題 19: 日曜日を数え上げる'
challengeType: 1
forumTopicId: 301827
dashedName: problem-19-counting-sundays
---

# --description--

次の情報が与えられていますが、自分で調べても構いません。

<ul>
  <li>1900 年 1 月 1 日は月曜日であった。</li>
  <li>9 月、<br>4 月、6 月、11 月は 30 日あり、<br>残りの月は 31 日ある。<br>2 月だけは例外で、<br>28 日あり、<br>うるう年には 29 日ある。</li>
  <li>4 で割り切れる年はうるう年だが、400 で割り切れない 100 の倍数年はうるう年ではない。</li>
</ul>

20 世紀 (1901 年 1 月 1 日〜2000 年 12 月 31 日) の間に月の 1 日目が日曜日であったのは何回ですか。

# --hints--

`countingSundays(1943, 1946)` は数値を返す必要があります。

```js
assert(typeof countingSundays(1943, 1946) === 'number');
```

`countingSundays(1943, 1946)` は 6 を返す必要があります。

```js
assert.strictEqual(countingSundays(1943, 1946), 6);
```

`countingSundays(1995, 2000)` は 10 を返す必要があります。

```js
assert.strictEqual(countingSundays(1995, 2000), 10);
```

`countingSundays(1901, 2000)` は 171 を返す必要があります。

```js
assert.strictEqual(countingSundays(1901, 2000), 171);
```

# --seed--

## --seed-contents--

```js
function countingSundays(firstYear, lastYear) {

  return true;
}

countingSundays(1943, 1946);
```

# --solutions--

```js
function countingSundays(firstYear, lastYear) {
  let sundays = 0;

  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 0; month <= 11; month++) {
      const thisDate = new Date(year, month, 1);
      if (thisDate.getDay() === 0) {
        sundays++;
      }
    }
  }
  return sundays;
}
```

---
id: 596fd036dc1ab896c5db98b1
title: Convert seconds to compound duration
challengeType: 1
forumTopicId: 302236
dashedName: convert-seconds-to-compound-duration
---

# --description--

Implement a function which:

<ul>
  <li>takes a positive integer representing a duration in seconds as input (e.g., <code>100</code>), and</li>
  <li>以下の詳細のように、週、日、時、分、秒に分解された同じ期間を示す文字列を返します (例えば <code>1 min, 40 sec</code>)。</li>
</ul>

次の 3 つのテストケースで正しく変換されることを示します。

<div style='font-size:115%; font-weight: bold;'>テストケース</div>

| Input number | 出力された数字                   |
| ------------ | ------------------------- |
| 7259         | <code>2 hr, 59 sec</code> |
| 86400        | <code>1 d</code> |
| 6000000      | <code>9 wk, 6 d, 10 hr, 40 min</code> |

<div style="font-size:115%; font-weight: bold;">詳細</div>
<ul>
  <li>
    The following five units should be used:

| Unit   | Suffix used in Output | Conversion            |
| ------ | --------------------- | --------------------- |
| week   | <code>wk</code>       | 1 week = 7 days       |
| day    | <code>d</code>        | 1 day = 24 hours      |
| hour   | <code>hr</code>       | 1 hour = 60 minutes   |
| minute | <code>min</code>      | 1 minute = 60 seconds |
| second | <code>sec</code>      | ---                   |

  </li>
  <li>
    ただし、ゼロではない値 <strong>のみ</strong> が出力されます(例えば <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>ではなく、<code>1 d</code>を返します)。
  </li>
  <li>
    可能な限り小さな単位よりも大きな単位を優先します (例えば <code>1 min, 70 sec</code> または <code>130 sec</code> ではなく、<code>2 min, 10 sec</code> を返します)。
  </li>
  <li>
    テストケースに表示される書式設定（数量が最大単位から最小単位の順でソートされ、カンマ + スペースで区切られ、各数量の値と単位がスペースで区切られる）にします。
  </li>
</ul>

# --hints--

`convertSeconds` という関数です。

```js
assert(typeof convertSeconds === 'function');
```

`convertSeconds(7259)` は `2 hr, 59 sec` を返します。

```js
assert.equal(convertSeconds(testCases[0]), results[0]);
```

`convertSeconds(86400)` は `1 d` を返します。

```js
assert.equal(convertSeconds(testCases[1]), results[1]);
```

`convertSeconds(6000000)` は `9 wk, 6 d, 10 hr, 40 min` を返します。

```js
assert.equal(convertSeconds(testCases[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = [7259, 86400, 6000000];
const results = ['2 hr, 59 sec', '1 d', '9 wk, 6 d, 10 hr, 40 min'];
```

## --seed-contents--

```js
function convertSeconds(sec) {

  return true;
}
```

# --solutions--

```js
function convertSeconds(sec) {
  const localNames = ['wk', 'd', 'hr', 'min', 'sec'];
  // compoundDuration :: [String] -> Int -> String
  const compoundDuration = (labels, intSeconds) =>
    weekParts(intSeconds)
    .map((v, i) => [v, labels[i]])
    .reduce((a, x) =>
      a.concat(x[0] ? [`${x[0]} ${x[1] || '?'}`] : []), []
    )
    .join(', ');

    // weekParts :: Int -> [Int]
  const weekParts = intSeconds => [0, 7, 24, 60, 60]
    .reduceRight((a, x) => {
      const r = a.rem;
      const mod = x !== 0 ? r % x : r;

      return {
        rem: (r - mod) / (x || 1),
        parts: [mod].concat(a.parts)
      };
    }, {
      rem: intSeconds,
      parts: []
    })
    .parts;

  return compoundDuration(localNames, sec);
}
```

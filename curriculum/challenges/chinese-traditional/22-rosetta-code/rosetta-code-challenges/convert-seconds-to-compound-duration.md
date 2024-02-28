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
  <li>返回一個字符串，該字符串顯示分解爲周、天、小時、分鐘和秒的相同持續時間，如下詳述（例如，<code>1 min, 40 sec</code>）。</li>
</ul>

證明它通過了以下三個測試用例：

<div style='font-size:115%; font-weight: bold;'>Test Cases</div>

| Input number | 輸出結果                      |
| ------------ | ------------------------- |
| 7259         | <code>2 hr, 59 sec</code> |
| 86400        | <code>1 d</code> |
| 6000000      | <code>9 wk, 6 d, 10 hr, 40 min</code> |

<div style="font-size:115%; font-weight: bold;">Details</div>
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
    但是，<strong>僅</strong> 在輸出中包含具有非零值的數量（例如，返回 <code>1 d</code> 而不是 <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>）。
  </li>
  <li>
    儘可能讓較大的單位優先於較小的單位（例如，返回 <code>2 min, 10 sec</code> 而不是 <code>1 min, 70 sec</code> 或 <code>130 sec</code>)。
  </li>
  <li>
    模仿測試用例中顯示的格式（數量從最大單位到最小單位排序並用逗號+空格分隔；每個數量的值和單位用空格分隔）。
  </li>
</ul>

# --hints--

`convertSeconds` 應該是一個函數。

```js
assert(typeof convertSeconds === 'function');
```

`convertSeconds(7259)` 應該返回 `2 hr, 59 sec`。

```js
assert.equal(convertSeconds(testCases[0]), results[0]);
```

`convertSeconds(86400)` 應該返回 `1 d`。

```js
assert.equal(convertSeconds(testCases[1]), results[1]);
```

`convertSeconds(6000000)` 應該返回 `9 wk, 6 d, 10 hr, 40 min`。

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

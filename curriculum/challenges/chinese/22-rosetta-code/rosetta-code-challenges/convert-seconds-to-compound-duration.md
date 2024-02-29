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
  <li>返回一个字符串，该字符串显示分解为周、天、小时、分钟和秒的相同持续时间，如下详述（例如，<code>1 min, 40 sec</code>）。</li>
</ul>

证明它通过了以下三个测试用例：

<div style='font-size:115%; font-weight: bold;'>Test Cases</div>

| Input number | 输出结果                      |
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
    但是，<strong>仅</strong> 在输出中包含具有非零值的数量（例如，返回 <code>1 d</code> 而不是 <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>）。
  </li>
  <li>
    尽可能让较大的单位优先于较小的单位（例如，返回 <code>2 min, 10 sec</code> 而不是 <code>1 min, 70 sec</code> 或 <code>130 sec</code>)。
  </li>
  <li>
    模仿测试用例中显示的格式（数量从最大单位到最小单位排序并用逗号+空格分隔；每个数量的值和单位用空格分隔）。
  </li>
</ul>

# --hints--

`convertSeconds` 应该是一个函数。

```js
assert(typeof convertSeconds === 'function');
```

`convertSeconds(7259)` 应该返回 `2 hr, 59 sec`。

```js
assert.equal(convertSeconds(testCases[0]), results[0]);
```

`convertSeconds(86400)` 应该返回 `1 d`。

```js
assert.equal(convertSeconds(testCases[1]), results[1]);
```

`convertSeconds(6000000)` 应该返回 `9 wk, 6 d, 10 hr, 40 min`。

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

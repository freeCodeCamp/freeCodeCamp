---
id: 596fd036dc1ab896c5db98b1
title: 将秒转换为复合持续时间
challengeType: 5
videoUrl: ''
dashedName: convert-seconds-to-compound-duration
---

# --description--

任务：

实现一个功能：

取一个表示以秒为单位的持续时间的正整数作为输入（例如， `100` ），并返回一个字符串，该字符串显示分解为周，日，小时，分钟和秒的相同持续时间，如下所述（例如，“ `1 min, 40 sec` “）。

证明它通过以下三个测试用例：

测试用例

| 输入号码    | 输出数量                       |
| ------- | -------------------------- |
| 7259    | `2 hr, 59 sec`             |
| 86400   | `1 d`                      |
| 6000000 | `9 wk, 6 d, 10 hr, 40 min` |

细节

应使用以下五个单位：

| 单元 | 输出中使用的后缀 | 转变        |
| -- | -------- | --------- |
| 周  | `wk`     | 1周= 7天    |
| 天  | `d`      | 1天= 24小时  |
| 小时 | `hr`     | 1小时= 60分钟 |
| 分钟 | `min`    | 1分钟= 60秒  |
| 第二 | `sec`    |           |

但是，仅包括输出中具有非零值的数量（例如，返回“ `1 d` ”而不是“ `0 wk, 1 d, 0 hr, 0 min, 0 sec` ”）。更大的单位优先于较小的单位尽可能（例如，返回`2 min, 10 sec`而不是`1 min, 70 sec`或`130 sec` ）模拟测试用例中显示的格式（从最大单位到最小单位的数量，以逗号+空格分隔;数值和单位每个数量用空格分隔）。

* * *

# --hints--

`convertSeconds`是一个函数。

```js
assert(typeof convertSeconds === 'function');
```

`convertSeconds(7259)`应该返回`2 hr, 59 sec` 。

```js
assert.equal(convertSeconds(testCases[0]), results[0]);
```

`convertSeconds(86400)`应返回`1 d` 。

```js
assert.equal(convertSeconds(testCases[1]), results[1]);
```

`convertSeconds(6000000)`应该返回`9 wk, 6 d, 10 hr, 40 min` 。

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

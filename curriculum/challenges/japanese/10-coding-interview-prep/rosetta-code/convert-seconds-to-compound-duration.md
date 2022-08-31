---
id: 596fd036dc1ab896c5db98b1
title: 秒を複合表示に変換
challengeType: 1
forumTopicId: 302236
dashedName: convert-seconds-to-compound-duration
---

# --description--

以下の関数を作成します。

<ul>
  <li>継続期間を秒単位で表す正の整数を入力します (例えば <code>100</code>)。</li>
  <li>以下の詳細のように、週、日、時、分、秒に分解された同じ期間を示す文字列を返します (例えば <code>1 min, 40 sec</code>)。</li>
</ul>

次の3つのテストケースで正しく変換されることを示します。

<div style='font-size:115%; font-weight: bold;'>テストケース</div>

| 入力した数字  | 出力された数字                   |
| ------- | ------------------------- |
| 7259    | <code>2 hr, 59 sec</code> |
| 86400   | <code>1 d</code> |
| 6000000 | <code>9 wk, 6 d, 10 hr, 40 min</code> |

<div style="font-size:115%; font-weight: bold;">詳細</div>
<ul>
  <li>
    以下の5つの単位を使用する必要があります。

| 単位  | アウトプットで使用される接尾辞 | 換算           |
| ------ | --------------------- | --------------------- |
| 週  |!!crwdBlockTags_18_sgaTkcolBdwrc!!       | 1 週間 = 7 日       |
| day    |!!crwdBlockTags_19_sgaTkcolBdwrc!!        | 1 日 = 24 時間    |
| hour   |!!crwdBlockTags_20_sgaTkcolBdwrc!!       | 1 時間 = 60 分   |
| minute |!!crwdBlockTags_21_sgaTkcolBdwrc!!      | 1 分 = 60 秒 |
| second |!!crwdBlockTags_22_sgaTkcolBdwrc!!      | ---                   |

  </li>
  <li>
    ただし、ゼロではない値 <strong>のみ</strong> が出力されます(例えば <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>ではなく、<code>1 d</code>を返します)。
  </li>
  <li>
    可能な限り小さな単位よりも大きな単位を優先します (例えば <code>1 min, 70 sec</code> または <code>130 sec</code> ではなく、<code>2 min, 10 sec</code> を返します)。
  </li>
  <li>
    テストケースに表示される書式設定（数量が最大単位から最小単位の順でソートされ、カンマ+スペースで区切られ、各数量の値と単位がスペースで区切られる）にします。
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

`convertSeconds(86400)` は `1 d` をを返します。

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

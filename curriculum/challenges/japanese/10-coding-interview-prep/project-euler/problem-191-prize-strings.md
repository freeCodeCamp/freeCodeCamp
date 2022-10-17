---
id: 5900f42b1000cf542c50ff3e
title: '問題 191: 賞付きの文字列'
challengeType: 1
forumTopicId: 301829
dashedName: problem-191-prize-strings
---

# --description--

ある学校では、出席率と遅刻率が優れている生徒に賞金を与えます。 3 日連続で欠席するか、2 回以上遅刻すると、賞金獲得の権利を失います。

n 日間、生徒ごとに、L (遅刻), O (出席), A (欠席) を使用して 3 進文字列を記録します。

4 日間では 81 通りの 3 進文字列が考えられ、受賞する文字列は次の 43 通りです。

```markup
OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
LAOO LAOA LAAO
```

30 日間では、受賞する文字列が何通りありますか。

# --hints--

`prizeStrings()` は `1918080160` を返す必要があります。

```js
assert.strictEqual(prizeStrings(), 1918080160);
```

# --seed--

## --seed-contents--

```js
function prizeStrings() {

  return true;
}

prizeStrings();
```

# --solutions--

```js
// solution required
```

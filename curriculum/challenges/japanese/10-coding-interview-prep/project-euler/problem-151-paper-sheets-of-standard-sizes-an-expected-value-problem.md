---
id: 5900f4031000cf542c50ff16
title: '問題 151: 標準サイズの用紙: 期待値の問題'
challengeType: 1
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

ある印刷所は毎週 16 回の印刷を行っており、毎回、A5 サイズの特殊な色校正紙が必要です。

毎週月曜日の朝、班長は A1 サイズの特殊な大判用紙が入った新しい封筒を開封します。

班長は A1 用紙を半分に切って A2 用紙を 2 枚作ります。 次に、そのうち 1 枚を半分に切って A3 用紙を 2 枚作ります。週の最初の印刷に必要な A5 用紙ができるまで、この作業を繰り返します。

使われなかった用紙はすべて封筒に戻されます。

<img class="img-responsive center-block" alt="各 1 枚の A2, A3, A4 と 2 枚の A5 に分割された A1 サイズの用紙" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-sheets-of-standard-sizes-an-expected-value-problem.png" style="background-color: white; padding: 10px;" />

印刷を始めるときは毎回、班長が封筒から無作為に紙を 1 枚取り出します。 それが A5 サイズであればそれを使用します。 A5 より大きければ、半分に切る作業を繰り返して A5 用紙を 1 枚使用し、残りを封筒に戻します。

週の最初と最後の印刷以外で、封筒に紙が 1 枚だけ入っている回数の期待値 (1 週当たり) を求めなさい。

回答は、四捨五入して小数第 6 位まで求め、`x.xxxxxx` の形式にすること。

# --hints--

`expectedValueProblem()` は `0.464399` を返す必要があります。

```js
assert.strictEqual(expectedValueProblem(), 0.464399);
```

# --seed--

## --seed-contents--

```js
function expectedValueProblem() {

  return true;
}

expectedValueProblem();
```

# --solutions--

```js
// solution required
```

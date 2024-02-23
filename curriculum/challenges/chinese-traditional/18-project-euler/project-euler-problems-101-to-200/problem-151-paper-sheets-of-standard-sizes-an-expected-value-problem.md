---
id: 5900f4031000cf542c50ff16
title: '問題151：標準尺寸紙張：一個預期值問題'
challengeType: 1
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

A printing shop runs 16 batches (jobs) every week and each batch requires a sheet of special colour-proofing paper of size A5.

每週一早上，工頭會打開一個新信封，裏面裝着一大張 A1 尺寸的特殊紙張。

接着他把紙張裁切成兩半，從而得到兩張 A2 尺寸的紙。 然後他將其中一個 A2 切成兩半，得到兩張 A3 尺寸，依此類推，直到他獲得了所需的本週第一批 A5 尺寸紙張。

All the unused sheets are placed back in the envelope.

<img class="img-responsive center-block" alt="A1 尺寸紙可以拆分爲：A2、A3、A4 和兩張 A5 紙" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-sheets-of-standard-sizes-an-expected-value-problem.png" style="background-color: white; padding: 10px;" />

隨後每批開始時，他隨機從信封中拿走一張紙張。 If it is of size A5, he uses it. 如果它更大，他會重複“切成兩半”的程序，直到他有他需要的東西，任何剩餘的紙張總是放回信封裏。

排除一週的第一批和最後一批，求領班在信封中找到一張紙的預期次數（每週）。

使用格式 `x.xxxxxx` 將您的答案四捨五入到小數點後六位。

# --hints--

`expectedValueProblem()` 應該返回 `0.464399`。

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

---
id: 5900f4031000cf542c50ff16
title: '问题151：标准尺寸纸张：一个预期值问题'
challengeType: 1
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

A printing shop runs 16 batches (jobs) every week and each batch requires a sheet of special colour-proofing paper of size A5.

每周一早上，工头会打开一个新信封，里面装着一大张 A1 尺寸的特殊纸张。

接着他把纸张裁切成两半，从而得到两张 A2 尺寸的纸。 然后他将其中一个 A2 切成两半，得到两张 A3 尺寸，依此类推，直到他获得了所需的本周第一批 A5 尺寸纸张。

All the unused sheets are placed back in the envelope.

<img class="img-responsive center-block" alt="A1 尺寸纸可以拆分为：A2、A3、A4 和两张 A5 纸" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-sheets-of-standard-sizes-an-expected-value-problem.png" style="background-color: white; padding: 10px;" />

随后每批开始时，他随机从信封中拿走一张纸张。 If it is of size A5, he uses it. 如果它更大，他会重复“切成两半”的程序，直到他有他需要的东西，任何剩余的纸张总是放回信封里。

排除一周的第一批和最后一批，求领班在信封中找到一张纸的预期次数（每周）。

使用格式 `x.xxxxxx` 将您的答案四舍五入到小数点后六位。

# --hints--

`expectedValueProblem()` 应该返回 `0.464399`。

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

---
id: 5900f4031000cf542c50ff16
title: 'Problem 151: Paper sheets of standard sizes: an expected-value problem'
challengeType: 1
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

A printing shop runs 16 batches (jobs) every week and each batch requires a sheet of special colour-proofing paper of size A5.

Every Monday morning, the foreman opens a new envelope, containing a large sheet of the special paper with size A1.

He proceeds to cut it in half, thus getting two sheets of size A2. Then he cuts one of them in half to get two sheets of size A3 and so on until he obtains the A5-size sheet needed for the first batch of the week.

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

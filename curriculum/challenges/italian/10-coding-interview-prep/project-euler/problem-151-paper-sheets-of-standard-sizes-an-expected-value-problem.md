---
id: 5900f4031000cf542c50ff16
title: 'Problem 151: Paper sheets of standard sizes: an expected-value problem'
challengeType: 5
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

A printing shop runs 16 batches (jobs) every week and each batch requires a sheet of special colour-proofing paper of size A5.

Every Monday morning, the foreman opens a new envelope, containing a large sheet of the special paper with size A1.

He proceeds to cut it in half, thus getting two sheets of size A2. Then he cuts one of them in half to get two sheets of size A3 and so on until he obtains the A5-size sheet needed for the first batch of the week.

All the unused sheets are placed back in the envelope.

At the beginning of each subsequent batch, he takes from the envelope one sheet of paper at random. If it is of size A5, he uses it. If it is larger, he repeats the 'cut-in-half' procedure until he has what he needs and any remaining sheets are always placed back in the envelope. Excluding the first and last batch of the week, find the expected number of times (during each week) that the foreman finds a single sheet of paper in the envelope. Give your answer rounded to six decimal places using the format x.xxxxxx .

# --hints--

`euler151()` should return 0.464399.

```js
assert.strictEqual(euler151(), 0.464399);
```

# --seed--

## --seed-contents--

```js
function euler151() {

  return true;
}

euler151();
```

# --solutions--

```js
// solution required
```
